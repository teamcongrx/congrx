import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CongrX — congrx.com',
  description: 'Tracking every voice in Congress',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
