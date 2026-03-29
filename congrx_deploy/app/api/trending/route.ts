/* eslint-disable */
import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

// Common English stop words + political fluff to exclude from trending
const STOP_WORDS = new Set([
  'the','a','an','and','or','but','in','on','at','to','for','of','with',
  'by','from','up','about','into','through','during','is','are','was',
  'were','be','been','being','have','has','had','do','does','did','will',
  'would','could','should','may','might','shall','can','need','dare',
  'that','this','these','those','it','its','we','our','us','they','their',
  'them','i','my','me','you','your','he','his','him','she','her','what',
  'which','who','when','where','why','how','all','each','every','both',
  'few','more','most','other','some','such','than','then','too','very',
  'just','now','also','not','no','so','if','as','my','am','get','got',
  'let','must','much','many','new','one','two','way','day','time','year',
  'make','made','take','know','go','going','come','said','like','see',
  'today','great','good','work','american','america','congress','https',
  'rt','via','cc','w','gt','amp'
])

export async function GET() {
  // Get tweets from last 7 days
  const since = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()

  const { data, error } = await supabase
    .from('tweets')
    .select('text')
    .gte('posted_at', since)
    .limit(2000)

  if (error || !data) {
    return NextResponse.json([], { status: 500 })
  }

  // Word frequency count
  const freq: Record<string, number> = {}
  for (const { text } of data) {
    const words = text
      .toLowerCase()
      .replace(/https?:\/\/\S+/g, '')       // strip URLs
      .replace(/[^a-z\s'-]/g, ' ')          // keep letters, apostrophes, hyphens
      .split(/\s+/)
      .map((w: string) => w.replace(/^[-']+|[-']+$/g, '')) // trim punctuation
      .filter((w: string) => w.length > 3 && !STOP_WORDS.has(w))

    for (const word of words) {
      freq[word] = (freq[word] ?? 0) + 1
    }
  }

  const trending = Object.entries(freq)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 20)
    .map(([word, count]) => ({ word, count }))

  return NextResponse.json(trending)
}
