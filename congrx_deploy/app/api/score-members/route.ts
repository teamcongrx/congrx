import { NextResponse } from 'next/server';
import { Scraper } from 'agent-twitter-client';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

function calcActivityScore(tweets: any[]): number {
  const perWeek = (tweets.length / 30) * 7;
  return Math.min(100, Math.round((perWeek / 7) * 100));
}

function calcConsistencyScore(tweets: any[]): number {
  const days = new Set(
    tweets.map(t => new Date(t.timeParsed).toDateString())
  ).size;
  return Math.min(100, Math.round((days / 30) * 100));
}

function calcEngagementScore(tweets: any[], allEngagements: number[]): number {
  if (!tweets.length) return 0;
  const avg = tweets.reduce((s, t) => s + (t.likes || 0) + (t.retweets || 0), 0) / tweets.length;
  const max = Math.max(...allEngagements, 1);
  return Math.min(100, Math.round((avg / max) * 100));
}

function calcBipartisanScore(tweets: any[], memberParty: string, allHandles: {handle: string, party: string}[]): number {
  const oppositeHandles = allHandles
    .filter(m => m.party !== memberParty)
    .map(m => m.handle.toLowerCase());
  const mentions = tweets.reduce((count, t) => {
    const text = (t.text || '').toLowerCase();
    return count + oppositeHandles.filter(h => text.includes(h)).length;
  }, 0);
  return Math.min(100, Math.round((mentions / Math.max(tweets.length, 1)) * 200));
}

export async function POST(req: Request) {
  const { secret } = await req.json();
  if (secret !== process.env.CRON_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  // Fetch all members
  const { data: members, error } = await supabase
    .from('members')
    .select('id, name, handle, party')
    .not('handle', 'is', null)
    .limit(50); // start with 50, run in batches

  if (error || !members) {
    return NextResponse.json({ error: error?.message }, { status: 500 });
  }

  // Login to Twitter
  const scraper = new Scraper();
  await scraper.login(
    process.env.TWITTER_USERNAME!,
    process.env.TWITTER_PASSWORD!,
    process.env.TWITTER_EMAIL!
  );

  const allHandles = members.map(m => ({ handle: m.handle, party: m.party }));
  const results = [];

  for (const member of members) {
    try {
      const tweetsIter = scraper.getTweets(member.handle, 50);
      const tweets: any[] = [];
      for await (const tweet of tweetsIter) {
        const age = Date.now() - new Date(tweet.timeParsed).getTime();
        if (age > 30 * 24 * 60 * 60 * 1000) break; // stop at 30 days
        tweets.push(tweet);
      }

      const avgEngagement = tweets.reduce((s, t) => s + (t.likes || 0) + (t.retweets || 0), 0) / Math.max(tweets.length, 1);
      const activity = calcActivityScore(tweets);
      const consistency = calcConsistencyScore(tweets);
      const engagement = calcEngagementScore(tweets, [avgEngagement]);
      const bipartisan = calcBipartisanScore(tweets, member.party, allHandles);
      const total = Math.round((activity * 0.3) + (consistency * 0.25) + (engagement * 0.3) + (bipartisan * 0.15));

      await supabase.from('members').update({
        activity_score: activity,
        consistency_score: consistency,
        engagement_score: engagement,
        bipartisan_score: bipartisan,
        total_score: total,
        scores_updated_at: new Date().toISOString()
      }).eq('id', member.id);

      results.push({ name: member.name, total });
    } catch (e) {
      console.error(`Failed for ${member.handle}:`, e);
    }
  }

  return NextResponse.json({ scored: results.length, results });
}
