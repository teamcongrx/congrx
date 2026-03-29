/* eslint-disable */
import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function POST(req: Request) {
  try {
    const { email } = await req.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
    }

    const { error } = await supabase
      .from('digest_subscribers')
      .upsert({ email, active: true, source: 'website' }, { onConflict: 'email' })

    if (error) throw error

    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'CongrX <digest@congrx.com>',
        to: 'teamcongrx@gmail.com',
        subject: `New Daily Digest subscriber: ${email}`,
        html: `<p><strong>${email}</strong> just subscribed to the CongrX Daily Digest.</p>`,
      }),
    })

    return NextResponse.json({ success: true })
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
