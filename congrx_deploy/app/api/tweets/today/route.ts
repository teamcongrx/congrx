/* eslint-disable */
import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl
  const topic = searchParams.get('topic')
  const limit = Math.min(parseInt(searchParams.get('limit') ?? '50'), 100)

  const since = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString()

  let query = supabase
    .from('tweets')
    .select('*')
    .gte('posted_at', since)
    .order('likes', { ascending: false })
    .limit(limit)

  if (topic && topic !== 'all') {
    query = query.eq('topic', topic)
  }

  const { data, error } = await query

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json(data ?? [])
}
