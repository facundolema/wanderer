import LandingPage from '@/components/LandingPage'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/countries">Link</Link>
      <LandingPage />
    </main>
  )
}
