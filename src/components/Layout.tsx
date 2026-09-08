import type { ReactNode } from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router'
import CursorGlow from '@/components/CursorGlow'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { scrollToTop, useLenis } from '@/hooks/use-lenis'

/**
 * Shared site layout. Children pattern: <Layout><Routes>…</Routes></Layout>.
 * The Navbar is `fixed` (overlay over full-bleed heroes), so the content slot
 * owns the offset: pt-20 = 80px nav height. Full-bleed hero sections opt out
 * inside the page with `-mt-20` on the hero section.
 */
export default function Layout({ children }: { children: ReactNode }) {
  useLenis()
  const { pathname } = useLocation()

  useEffect(() => {
    scrollToTop()
  }, [pathname])

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <CursorGlow />
      <Navbar />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
    </div>
  )
}
