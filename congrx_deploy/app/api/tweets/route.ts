/* eslint-disable */
import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl
  const memberId = searchParams.get('member_id')
  const search   = searchParams.get('search')
  const chamber  = searchParams.get('chamber')
  const party    = searchParams.get('party')
  const from     = searchParams.get('from')
  const to       = searchParams.get('to')
  const limit    = Math.min(parseInt(searchParams.get('limit') ?? '50'), 200)

  let query = supabase
    .from('tweets')
    .select('*')
    .order('posted_at', { ascending: false })
    .limit(limit)

  if (memberId) query = query.eq('member_id', parseInt(memberId))
  if (chamber)  query = query.eq('chamber', chamber)
  if (party)    query = query.eq('party', party)
  if (from)     query = query.gte('posted_at', from)
  if (to)       query = query.lte('posted_at', to + 'T23:59:59Z')

  // Boolean search: supports AND, OR, NOT keywords
  if (search) {
    const pgQuery = buildFtsQuery(search)
    if (pgQuery) {
      query = query.textSearch('text', pgQuery, {
        config: 'english',
        type: 'websearch',
      })
    }
  }

  const { data, error } = await query

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json(data ?? [])
}

/**
 * Convert user-friendly "A AND B NOT C" syntax to Postgres websearch format.
 * Postgres websearch_to_tsquery already supports: "phrase", AND, OR, -word
 * We just map NOT → minus prefix for compatibility.
 */
function buildFtsQuery(raw: string): string {
  return raw
    .replace(/\s+NOT\s+/gi, ' -')
    .replace(/\s+AND\s+/gi, ' ')
    .replace(/\s+OR\s+/gi, ' | ')
    .trim()
}
