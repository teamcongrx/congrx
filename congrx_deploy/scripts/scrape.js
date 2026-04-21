/* eslint-disable */
// Self-contained tweet scraper - CommonJS, no TypeScript required
const { Scraper } = require('agent-twitter-client');
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const TOPICS = {
  healthcare:     ['health','medicare','medicaid','insurance','hospital','drug','prescription'],
  economy:        ['economy','economic','inflation','jobs','unemployment','trade','tariff','wages'],
  immigration:    ['immigration','border','migrant','asylum','deportation','ice','undocumented'],
  climate:        ['climate','environment','carbon','emissions','clean energy','epa','solar'],
  budget:         ['budget','spending','deficit','appropriations','funding','fiscal'],
  'foreign policy':['ukraine','russia','china','israel','nato','foreign','sanctions','war'],
  education:      ['education','school','student','university','college','teacher'],
  taxes:          ['tax','irs','revenue','cuts','deduction','wealthy','corporations'],
  government:     ['government','congress','senate','house','legislation','bill','vote'],
};

function classifyTopic(text) {
  const lo = (text || '').toLowerCase();
  for (const [topic, kws] of Object.entries(TOPICS)) {
    if (kws.some(k => lo.includes(k))) return topic;
  }
  return 'general';
}

async function main() {
  console.log('Starting scraper...');

  // Auth via cookie token
  const scraper = new Scraper();
  const authToken = process.env.TWITTER_AUTH_TOKEN;
  if (!authToken) throw new Error('TWITTER_AUTH_TOKEN not set');

  await scraper.setCookies([
    `auth_token=${authToken}; Domain=.twitter.com; Path=/; Secure; HttpOnly`
  ]);

  const loggedIn = await scraper.isLoggedIn();
  console.log('Logged in:', loggedIn);
  if (!loggedIn) throw new Error('Twitter login failed - auth_token may be expired');

  // Rotating batch: 2 members per run
  const now = new Date();
  const dayOfYear = Math.floor((now - new Date(now.getFullYear(), 0, 0)) / 86400000);
  const slot = Math.floor(now.getUTCHours() / 6);
  const offset = ((dayOfYear * 4 + slot) * 2) % 536;

  console.log('Fetching members at offset:', offset);
  const { data: members, error } = await supabase
    .from('members')
    .select('id, name, handle, party, chamber, state, district')
    .not('handle', 'is', null)
    .order('id')
    .range(offset, offset + 1);

  if (error) throw new Error('Supabase error: ' + error.message);
  if (!members || !members.length) { console.log('No members found'); return; }

  console.log('Scraping', members.length, 'members:', members.map(m => m.handle).join(', '));

  let total = 0;
  for (const member of members) {
    try {
      const tweets = [];
      for await (const tweet of scraper.getTweets(member.handle, 10)) {
        if (!tweet.isRetweet) tweets.push(tweet);
      }

      if (tweets.length) {
        const rows = tweets.map(tw => ({
          id:        tw.id,
          member_id: member.id,
          handle:    member.handle,
          name:      member.name,
          party:     member.party,
          state:     member.state,
          district:  member.district || null,
          chamber:   member.chamber,
          text:      tw.text || tw.fullText || '',
          likes:     tw.likes || tw.likeCount || 0,
          retweets:  tw.retweets || tw.retweetCount || 0,
          replies:   tw.replies || tw.replyCount || 0,
          posted_at: tw.timeParsed ? tw.timeParsed.toISOString() : new Date().toISOString(),
          topic:     classifyTopic(tw.text || tw.fullText || ''),
        }));

        const { error: upsertErr } = await supabase
          .from('tweets')
          .upsert(rows, { onConflict: 'id', ignoreDuplicates: true });

        if (upsertErr) {
          console.error('Upsert error for', member.handle, ':', upsertErr.message);
        } else {
          total += rows.length;
          console.log('OK', member.handle + ':', rows.length, 'tweets');
        }
      } else {
        console.log('-', member.handle, ': no tweets');
      }

      await new Promise(r => setTimeout(r, 2000));
    } catch (err) {
      console.error('FAIL', member.handle + ':', err.message);
    }
  }

  console.log('Done! Total tweets scraped:', total);
}

main().catch(e => { console.error('Fatal:', e.message); process.exit(1); });
