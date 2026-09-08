import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router'
import { useLang, type Lang } from '@/i18n/LanguageContext'

const LANGS: Lang[] = ['ka', 'en']

/** Compact KA | EN pill toggle. */
function LangSwitcher({ className = '' }: { className?: string }) {
  const { lang, setLang, d } = useLang()
  return (
    <div
      role="group"
      aria-label={d.nav.switchLangAria}
      className={`flex items-center rounded-full border border-gold-500/40 p-0.5 ${className}`}
    >
      {LANGS.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`rounded-full px-2.5 py-1 text-[11px] font-semibold tracking-[0.08em] transition-all duration-300 ${
            lang === l
              ? 'bg-gold-500 text-burgundy-950'
              : 'text-milk/70 hover:text-gold-300'
          }`}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  )
}

export default function Navbar() {
  const { d } = useLang()
  const NAV_LINKS = [
    { to: '/', label: d.nav.home },
    { to: '/ecosystem', label: d.nav.ecosystem },
    { to: '/education', label: d.nav.education },
    { to: '/about', label: d.nav.about },
    { to: '/contact', label: d.nav.contact },
  ]
  const [scrolled, setScrolled] = useState(
    () => typeof window !== 'undefined' && window.scrollY > 40,
  )
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.4 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // close mobile menu on route change (derived, no effect needed)
  const [lastPath, setLastPath] = useState(location.pathname)
  if (lastPath !== location.pathname) {
    setLastPath(location.pathname)
    if (open) setOpen(false)
  }
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* scroll progress bar */}
      <motion.div
        className="h-0.5 origin-left bg-gold-line"
        style={{ scaleX: progress }}
        aria-hidden="true"
      />
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? 'h-16 bg-[rgba(42,7,16,0.72)] backdrop-blur-[16px] border-b border-gold-500/15'
            : 'h-20 bg-transparent border-b border-transparent'
        }`}
      >
        <div className="mx-auto flex h-full max-w-[1280px] items-center justify-between px-6 lg:px-12">
          <Link to="/" aria-label={d.nav.logoAria} className="shrink-0">
            <img src="/logo.svg" alt="OenoHub.ge" className="h-8 w-auto" />
          </Link>

          {/* desktop nav */}
          <nav className="hidden items-center gap-8 lg:flex" aria-label={d.nav.mainNavAria}>
            {NAV_LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `relative py-2 text-sm font-medium tracking-[0.02em] transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-gold-500 after:transition-all after:duration-300 ${
                    isActive
                      ? 'text-gold-400 after:w-full'
                      : 'text-milk/80 hover:text-milk after:w-0 hover:after:w-full'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="rounded-full border border-gold-500 px-6 py-2.5 text-sm font-semibold text-gold-400 transition-all duration-300 hover:bg-gold-500 hover:text-burgundy-950"
            >
              {d.nav.cta}
            </Link>
            <LangSwitcher />
          </nav>

          {/* mobile hamburger */}
          <button
            type="button"
            aria-label={open ? d.nav.closeMenu : d.nav.openMenu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative flex h-10 w-10 flex-col items-center justify-center gap-2 lg:hidden"
          >
            <span
              className={`h-0.5 w-6 bg-gold-400 transition-all duration-300 ${
                open ? 'translate-y-[5px] rotate-45' : ''
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-gold-400 transition-all duration-300 ${
                open ? '-translate-y-[5px] -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* mobile full-screen overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 -z-10 flex min-h-[100dvh] flex-col justify-between bg-burgundy-950 px-8 pb-10 pt-32 lg:hidden"
          >
            <nav className="flex flex-col gap-6" aria-label={d.nav.mobileNavAria}>
              {NAV_LINKS.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.07 * i + 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <NavLink
                    to={l.to}
                    end={l.to === '/'}
                    className={({ isActive }) =>
                      `font-serif text-[32px] leading-tight ${
                        isActive ? 'text-gold-400' : 'text-milk'
                      }`
                    }
                  >
                    {l.label}
                  </NavLink>
                </motion.div>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col gap-3 border-t border-gold-500/20 pt-6 text-sm text-milk/70"
            >
              <LangSwitcher className="self-start" />
              <a href="tel:+995555000000" className="hover:text-gold-400">
                +995 555 00 00 00
              </a>
              <a href="mailto:info@oenohub.ge" className="hover:text-gold-400">
                info@oenohub.ge
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
