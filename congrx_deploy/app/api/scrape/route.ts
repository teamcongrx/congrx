/* eslint-disable */
// @ts-nocheck
import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { Scraper } from 'agent-twitter-client'
import { classifyTopic } from '@/lib/scraper'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

let _scraper: Scraper | null = null

async function getScraper() {
  if (_scraper) return _scraper
  _scraper = new Scraper()
  await _scraper.login(
    process.env.TWITTER_USERNAME!,
    process.env.TWITTER_PASSWORD!,
    process.env.TWITTER_EMAIL
  )
  return _scraper
}

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
      .range(offset, offset + 1)

    if (!members?.length) {
      return NextResponse.json({ ok: true, tweets_scraped: 0 })
    }

    const scraper = await getScraper()
    let total = 0

    for (const member of members) {
      try {
        const tweets: any[] = []
        for await (const tweet of scraper.getTweets(member.handle, 10)) {
          tweets.push(tweet)
        }

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
            text: tw.text ?? tw.fullText ?? '',
            likes: tw.likes ?? tw.likeCount ?? 0,
            retweets: tw.retweets ?? tw.retweetCount ?? 0,
            replies: tw.replies ?? tw.replyCount ?? 0,
            posted_at: tw.timeParsed ?? new Date(),
            topic: classifyTopic(tw.text ?? tw.fullText ?? '')
          }))

          await supabase.from('tweets').upsert(rows, { onConflict: 'id', ignoreDuplicates: true })
          total += rows.length
          console.log(`✓ ${member.handle}: ${rows.length} tweets`)
        }

        await new Promise(r => setTimeout(r, 3000))
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
