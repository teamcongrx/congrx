/* eslint-disable */
// @ts-nocheck
import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

async function getAnthropic() {
  const { default: Anthropic } = await import('@anthropic-ai/sdk')
  return new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY })
}

async function fetchTopVotes(chamber, limit = 3) {
  const today = new Date().toISOString().split('T')[0]
  const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0]
  const url = `https://api.congress.gov/v3/vote/${chamber}?fromDate=${yesterday}&toDate=${today}&limit=20&api_key=${process.env.CONGRESS_API_KEY}`
  try {
    const res = await fetch(url)
    const data = await res.json()
    const votes = data.votes?.vote || []
    const scored = votes.map((v) => {
      const total = (v.totals?.yea_total || 0) + (v.totals?.nay_total || 0)
      const margin = Math.abs((v.totals?.yea_total || 0) - (v.totals?.nay_total || 0))
      const bonus = margin < 20 ? 50 : 0
      return {
        bill_title: v.question || v.description || 'Untitled Vote',
        chamber,
        result: v.result,
        yea_total: v.totals?.yea_total || 0,
        nay_total: v.totals?.nay_total || 0,
        date: v.date,
        description: v.description || '',
        roll_call_number: v.roll_call_number || 0,
        _score: total + bonus,
      }
    })
    scored.sort((a, b) => b._score - a._score)
    return scored.slice(0, limit)
  } catch (err) {
    console.error(`Failed to fetch ${chamber} votes:`, err)
    return []
  }
}

async function findRelevantTweets(vote, limit = 2) {
  const keywords = vote.bill_title
    .replace(/act|amendment|resolution|bill/gi, '')
    .split(' ')
    .filter((w) => w.length > 4)
    .slice(0, 4)
    .join(' | ')
  const { data } = await supabase
    .from('tweets')
    .select('*')
    .textSearch('text', keywords, { type: 'websearch' })
    .gte('posted_at', new Date(Date.now() - 7 * 86400000).toISOString())
    .order('likes', { ascending: false })
    .limit(limit)
  return data || []
}

async function summarizeVote(vote, tweets) {
  try {
    const anthropic = await getAnthropic()
    const tweetContext = tweets.length
      ? `\n\nRelated tweets:\n${tweets.map((t) => `- @${t.handle} (${t.party}): "${t.text}"`).join('\n')}`
      : ''
    const msg = await anthropic.messages.create({
      model: 'claude-opus-4-6',
      max_tokens: 200,
      messages: [{
        role: 'user',
        content: `Write a 2-sentence factual summary of this congressional vote.\n\nVote: ${vote.bill_title}\nResult: ${vote.result} ${vote.yea_total}-${vote.nay_total}\nDescription: ${vote.description}${tweetContext}\n\nReturn only the 2-sentence summary.`
      }],
    })
    return msg.content[0].text.trim()
  } catch (err) {
    return `${vote.bill_title} — ${vote.result} ${vote.yea_total}-${vote.nay_total}.`
  }
}

async function writeIntro(houseVotes, senateVotes) {
  try {
    const anthropic = await getAnthropic()
    const summary = [...houseVotes, ...senateVotes]
      .map((v) => `${v.chamber.toUpperCase()}: ${v.bill_title} — ${v.result}`)
      .join('\n')
    const msg = await anthropic.messages.create({
      model: 'claude-opus-4-6',
      max_tokens: 300,
      messages: [{
        role: 'user',
        content: `Write a 3-sentence professional introduction for the CongrX Daily Digest. Be factual and non-partisan.\n\nToday's votes:\n${summary}\n\nReturn only the intro paragraph.`
      }],
    })
    return msg.content[0].text.trim()
  } catch (err) {
    return "Congress was active today. Here are the most significant votes from both chambers."
  }
}

function buildEmail(intro, houseVotes, senateVotes, date) {
  const voteBlock = (votes, label, color) => votes.map((v, i) => `
    <div style="background:#f8f7f4;border-radius:8px;padding:16px;margin-bottom:12px;border-left:3px solid ${v.result === 'Passed' || v.result === 'Confirmed' ? '#2d6a4f' : '#b5303a'}">
      <div style="font-size:11px;font-weight:700;color:${v.result === 'Passed' || v.result === 'Confirmed' ? '#2d6a4f' : '#b5303a'};text-transform:uppercase;margin-bottom:4px">#${i+1} · ${v.result} ${v.yea_total}–${v.nay_total}</div>
      <div style="font-size:15px;font-weight:700;color:#0d1b2e;margin-bottom:6px">${v.bill_title}</div>
      <div style="font-size:13px;color:#555;margin-bottom:8px">${v.ai_summary || ''}</div>
      ${v.tweets && v.tweets.length ? `<div style="border-top:1px solid #e8e4df;padding-top:8px">${v.tweets.map(t => `<div style="margin-bottom:6px"><strong>@${t.handle}</strong> (${t.party}·${t.state}): "${t.text.slice(0,150)}" ♡${t.likes}</div>`).join('')}</div>` : ''}
    </div>`).join('')

  return `<!DOCTYPE html><html><body style="font-family:sans-serif;background:#f0ede9;margin:0;padding:0">
  <div style="max-width:620px;margin:0 auto;padding:20px">
    <div style="background:#0d1b2e;border-radius:10px 10px 0 0;padding:24px 28px;border-bottom:3px solid #b5303a">
      <div style="font-size:22px;font-weight:700;color:#fff">CongrX</div>
      <div style="font-size:11px;color:rgba(255,255,255,0.45);letter-spacing:.12em;text-transform:uppercase;margin-top:4px">TRACKING EVERY VOICE IN CONGRESS</div>
      <div style="font-size:10px;color:rgba(255,255,255,0.35);margin-top:2px">Daily Digest · ${date}</div>
    </div>
    <div style="background:#fff;padding:28px;border-radius:0 0 10px 10px;border:1px solid #e8e4df;border-top:none">
      <p style="font-size:14px;color:#444;line-height:1.8">${intro}</p>
      <hr style="border:none;border-top:1px solid #eae8e4;margin:20px 0">
      <h2 style="font-size:14px;font-weight:700;color:#0d1b2e;text-transform:uppercase;letter-spacing:.08em;margin-bottom:12px;border-bottom:2px solid #b5303a;padding-bottom:6px">HOUSE VOTES</h2>
      ${voteBlock(houseVotes, 'House', '#b5303a')}
      <h2 style="font-size:14px;font-weight:700;color:#0d1b2e;text-transform:uppercase;letter-spacing:.08em;margin-bottom:12px;border-bottom:2px solid #2563eb;padding-bottom:6px;margin-top:24px">SENATE VOTES</h2>
      ${voteBlock(senateVotes, 'Senate', '#2563eb')}
      <hr style="border:none;border-top:1px solid #eae8e4;margin:24px 0 12px">
      <div style="font-size:9px;color:#b5303a;font-weight:700;text-align:center;letter-spacing:.1em;margin-bottom:6px">DATA-DRIVEN · AI-POWERED</div>
      <div style="font-size:10px;color:#aaa;text-align:center">CongrX · congrx.com · Tracking Every Voice in Congress</div>
    </div>
  </div>
</body></html>`
}

export async function POST(req) {
  const auth = req.headers.get('authorization')
  if (auth !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  try {
    const date = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
    const [rawHouse, rawSenate] = await Promise.all([fetchTopVotes('house', 3), fetchTopVotes('senate', 3)])
    const enrich = async (votes) => Promise.all(votes.map(async (vote) => {
      const tweets = await findRelevantTweets(vote, 2)
      const ai_summary = await summarizeVote(vote, tweets)
      return { ...vote, tweets, ai_summary }
    }))
    const [houseVotes, senateVotes] = await Promise.all([enrich(rawHouse), enrich(rawSenate)])
    const intro = await writeIntro(houseVotes, senateVotes)
    const html = buildEmail(intro, houseVotes, senateVotes, date)
    const { data: subscribers } = await supabase.from('digest_subscribers').select('email').eq('active', true)
    if (!subscribers?.length) return NextResponse.json({ message: 'No subscribers yet', html })
    await Promise.allSettled(subscribers.map((sub) =>
      fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${process.env.RESEND_API_KEY}` },
        body: JSON.stringify({ from: 'CongrX Daily Digest <digest@congrx.com>', to: sub.email, subject: `CongrX Daily Digest · ${date}`, html }),
      })
    ))
    return NextResponse.json({ success: true, sent: subscribers.length, date })
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

export async function GET(req) {
  const url = new URL(req.url)
  const secret = url.searchParams.get('secret')
  if (secret !== process.env.CRON_SECRET) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  return POST(new Request(req.url, { method: 'POST', headers: { authorization: `Bearer ${process.env.CRON_SECRET}` } }))
}
