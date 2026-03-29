/* eslint-disable */
/**
 * Tweet scraper using agent-twitter-client (unofficial Twitter API).
 * Uses your own Twitter credentials — read-only scraping only.
 * Docs: https://github.com/ai16z/agent-twitter-client
 */
import { Scraper } from 'agent-twitter-client'
import { supabaseAdmin } from './supabase'
import { allMembers, type Member } from './members'

// ── Topic classifier ──────────────────────────────────────────────────────────
const TOPIC_KEYWORDS: Record<string, string[]> = {
  healthcare:     ['health', 'medicare', 'medicaid', 'insurance', 'hospital', 'drug', 'prescription', 'opioid', 'mental health', 'aca', 'affordable care'],
  economy:        ['economy', 'economic', 'inflation', 'jobs', 'unemployment', 'gdp', 'trade', 'tariff', 'wages', 'recession', 'growth', 'debt'],
  immigration:    ['immigration', 'border', 'migrant', 'asylum', 'deportation', 'visa', 'dhs', 'ice', 'undocumented'],
  climate:        ['climate', 'environment', 'carbon', 'emissions', 'clean energy', 'solar', 'renewable', 'epa', 'fossil fuel'],
  budget:         ['budget', 'spending', 'deficit', 'appropriations', 'funding', 'fiscal', 'crs', 'continuing resolution'],
  'foreign policy': ['ukraine', 'russia', 'china', 'israel', 'nato', 'foreign', 'sanctions', 'diplomacy', 'war', 'middle east'],
  education:      ['education', 'school', 'student', 'university', 'college', 'pell', 'teacher', 'curriculum'],
  taxes:          ['tax', 'irs', 'revenue', 'cuts', 'tcja', 'deduction', 'wealthy', 'corporations'],
  government:     ['government', 'congress', 'senate', 'house', 'legislation', 'bill', 'vote', 'amendment', 'committee'],
}

function classifyTopic(text: string): string {
  const lo = text.toLowerCase()
  for (const [topic, kws] of Object.entries(TOPIC_KEYWORDS)) {
    if (kws.some(k => lo.includes(k))) return topic
  }
  return 'general'
}

// ── Scraper singleton ─────────────────────────────────────────────────────────
let _scraper: Scraper | null = null

async function getScraper(): Promise<Scraper> {
  if (_scraper) return _scraper
  _scraper = new Scraper()
  await _scraper.login(
    process.env.TWITTER_USERNAME!,
    process.env.TWITTER_PASSWORD!,
    process.env.TWITTER_EMAIL,
  )
  return _scraper
}

// ── Scrape one member ─────────────────────────────────────────────────────────
export async function scrapeMember(member: Member, count = 20) {
  const scraper = await getScraper()

  const tweets: any[] = []
  for await (const tweet of scraper.getTweets(member.handle, count)) {
    tweets.push(tweet)
  }

  if (!tweets.length) return 0

  const rows = tweets.map(tw => ({
    id:         tw.id,
    member_id:  member.id,
    handle:     member.handle,
    name:       member.name,
    party:      member.party,
    state:      member.state,
    district:   member.district ?? null,
    chamber:    member.chamber,
    text:       tw.text ?? tw.fullText ?? '',
    likes:      tw.likes ?? tw.likeCount ?? 0,
    retweets:   tw.retweets ?? tw.retweetCount ?? 0,
    replies:    tw.replies ?? tw.replyCount ?? 0,
    posted_at:  tw.timeParsed ?? new Date(),
    topic:      classifyTopic(tw.text ?? tw.fullText ?? ''),
  }))

  // Upsert — skip duplicates silently
  const { error } = await supabaseAdmin
    .from('tweets')
    .upsert(rows, { onConflict: 'id', ignoreDuplicates: true })

  if (error) {
    console.error(`Error upserting tweets for ${member.handle}:`, error.message)
    return 0
  }

  // Update scrape log
  await supabaseAdmin.from('scrape_log').upsert({
    handle:       member.handle,
    last_scraped: new Date().toISOString(),
    tweet_count:  rows.length,
  })

  return rows.length
}

// ── Seed members into DB (run once) ──────────────────────────────────────────
export async function seedMembers() {
  const rows = allMembers.map(m => ({
    id:         m.id,
    name:       m.name,
    handle:     m.handle,
    party:      m.party,
    chamber:    m.chamber,
    state:      m.state,
    district:   m.district ?? null,
    since:      m.since ?? null,
    committees: m.committees,
  }))

  const { error } = await supabaseAdmin
    .from('members')
    .upsert(rows, { onConflict: 'id' })

  if (error) throw new Error(`Seed failed: ${error.message}`)
  return rows.length
}

// ── Batch scrape (staggered to avoid rate limits) ────────────────────────────
export async function batchScrape(handles?: string[], tweetsPerMember = 10) {
  const targets = handles
    ? allMembers.filter(m => handles.includes(m.handle))
    : allMembers

  let total = 0
  for (const member of targets) {
    try {
      const n = await scrapeMember(member, tweetsPerMember)
      total += n
      console.log(`✓ ${member.handle}: ${n} tweets`)
      // Polite delay between requests
      await new Promise(r => setTimeout(r, 1500))
    } catch (err: any) {
      console.error(`✗ ${member.handle}: ${err.message}`)
    }
  }
  return total
}
