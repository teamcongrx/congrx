/* eslint-disable */
import { NextRequest, NextResponse } from 'next/server'
import { batchScrape } from '@/lib/scraper'

// This endpoint is called by Vercel Cron every 6 hours (see vercel.json).
// It can also be triggered manually with the correct CRON_SECRET header.
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
      const res = await fetch(
        `https://api.twitter.com/2/tweets/search/recent?query=from:${member.handle} -is:retweet&max_results=10&tweet.fields=public_metrics,created_at,text`,
        { headers: { 'Authorization': `Bearer ${process.env.TWITTER_BEARER_TOKEN}` } }
      )
      const json = await res.json()
      const tweets = json.data || []
      if (tweets.length) {
        const rows = tweets.map((tw: any) => ({
          id: tw.id, member_id: member.id, handle: member.handle,
          name: member.name, party: member.party, state: member.state,
          district: member.district, chamber: member.chamber,
          text: tw.text, likes: tw.public_metrics?.like_count || 0,
          retweets: tw.public_metrics?.retweet_count || 0,
          replies: tw.public_metrics?.reply_count || 0,
          posted_at: tw.created_at, topic: classifyTopic(tw.text)
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

// Allow longer execution time (requires Vercel Pro)
export const maxDuration = 300
