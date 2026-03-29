/* eslint-disable */
import { NextRequest, NextResponse } from 'next/server'
import { seedMembers } from '@/lib/scraper'

// Run this ONCE after deploying to populate the members table.
// GET /api/seed?secret=YOUR_CRON_SECRET
export async function GET(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get('secret')
  if (secret !== process.env.CRON_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const count = await seedMembers()
  return NextResponse.json({ ok: true, members_seeded: count })
}
