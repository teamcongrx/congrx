/* eslint-disable */
import { readFileSync } from 'fs'
import { join } from 'path'

export default function Home() {
  const html = readFileSync(join(process.cwd(), 'public', 'app.html'), 'utf8')
  return <div dangerouslySetInnerHTML={{ __html: html }} />
}
