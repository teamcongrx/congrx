/* eslint-disable */
import { NextRequest, NextResponse } from 'next/server'
import { batchScrape } from '@/lib/scraper'

// This endpoint is called by Vercel Cron every 6 hours (see vercel.json).
// It can also be triggered manually with the correct CRON_SECRET header.
export async function GET(req: NextRequest) {
  // Verify cron secret
  const auth = req.headers.get('authorization')
  if (auth !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  console.log('Starting scheduled tweet scrape...')

  try {
    // Scrape 10 tweets per member, all 535 members
    // At 1.5s delay between members this takes ~13 minutes
    // Vercel Hobby has 10s function limit — use Pro (300s) or break into batches
    const total = await batchScrape(undefined, 10)
    return NextResponse.json({ ok: true, tweets_scraped: total })
  } catch (err: any) {
    console.error('Scrape failed:', err.message)
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}

// Allow longer execution time (requires Vercel Pro)
export const maxDuration = 300
