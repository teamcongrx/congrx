/* eslint-disable */
// @ts-nocheck
import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { classifyTopic } from '@/lib/scraper'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function GET(req: NextRequest) {
  const auth = req.headers.get('authorization')
  if (auth !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  console.log('Starting scheduled tweet scrape...')

  try {
    const offset = parseInt(req.nextUrl.searchParams.get('offset') || '0')

    const { data: members } = await supabase
      .from('members')
      .select('id, name, handle, party, chamber, state, district')
      .order('id')
      .range(offset, offset + 9)

    if (!members?.length) {
      return NextResponse.json({ ok: true, tweets_scraped: 0 })
    }

    let total = 0

    for (const member of members) {
      try {
        const userRes = await fetch(
  `https://api.twitter.com/2/users/by/username/${member.handle}`,
  { headers: { 'Authorization': `Bearer ${process.env.TWITTER_BEARER_TOKEN}` } }
)
const userJson = await userRes.json()
const userId = userJson.data?.id
if (!userId) { console.error(`✗ ${member.handle}: user not found`); continue }

const res = await fetch(
  `https://api.twitter.com/2/users/${userId}/tweets?max_results=10&tweet.fields=public_metrics,created_at,text&exclude=retweets`,
  { headers: { 'Authorization': `Bearer ${process.env.TWITTER_BEARER_TOKEN}` } }
)
const json = await res.json()
const tweets = json.data || []

        if (tweets.length) {
          const rows = tweets.map((tw: any) => ({
            id: tw.id,
            member_id: member.id,
            handle: member.handle,
            name: member.name,
            party: member.party,
            state: member.state,
            district: member.district,
            chamber: member.chamber,
            text: tw.text,
            likes: tw.public_metrics?.like_count || 0,
            retweets: tw.public_metrics?.retweet_count || 0,
            replies: tw.public_metrics?.reply_count || 0,
            posted_at: tw.created_at,
            topic: classifyTopic(tw.text)
          }))

          await supabase.from('tweets').upsert(rows, { onConflict: 'id', ignoreDuplicates: true })
          total += rows.length
          console.log(`✓ ${member.handle}: ${rows.length} tweets`)
        }

        await new Promise(r => setTimeout(r, 500))
      } catch (err: any) {
        console.error(`✗ ${member.handle}: ${err.message}`)
      }
    }

    return NextResponse.json({ ok: true, tweets_scraped: total })
  } catch (err: any) {
    console.error('Scrape failed:', err.message)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

export const maxDuration = 300
