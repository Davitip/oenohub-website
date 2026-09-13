import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router'
import { useLang, type Lang } from '@/i18n/LanguageContext'

const LANGS: Lang[] = ['ka', 'en']

function LangSwitcher({ className = '' }: { className?: string }) {
  const { lang, setLang } = useLang()
  const label = lang === 'ka' ? 'ენის შეცვლა' : 'Switch language'
  return (
    <div role="group" aria-label={label} className={`flex items-center rounded-full bg-black/[0.05] p-0.5 ${className}`}>
      {LANGS.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`rounded-full px-2.5 py-1 text-[11px] font-semibold tracking-[0.08em] transition-all duration-200 active:scale-95 ${lang === l ? 'bg-white text-ink-900 shadow-sm' : 'text-ink-600 hover:text-ink-900'}`}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  )
}

export default function Navbar() {
  const { lang } = useLang()
  const isKa = lang === 'ka'
  const NAV_LINKS = [
    { to: '/ecosystem', label: isKa ? 'გადაწყვეტილებები' : 'Solutions' },
    { to: '/education', label: isKa ? 'განათლება' : 'Education' },
    { to: '/about', label: isKa ? 'ჩვენ შესახებ' : 'About' },
    { to: '/contact', label: isKa ? 'კონტაქტი' : 'Contact' },
  ]
  const [scrolled, setScrolled] = useState(() => typeof window !== 'undefined' && window.scrollY > 40)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.4 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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
      <motion.div className="h-0.5 origin-left bg-gold-line" style={{ scaleX: progress }} aria-hidden="true" />
      {/* frosted translucent material — content scrolls underneath */}
      <div className={`bg-frosted transition-all duration-300 ${scrolled ? 'h-14 border-b border-black/10' : 'h-20 border-b border-black/[0.06]'}`}>
        <div className="mx-auto flex h-full max-w-[1500px] items-center justify-between px-6 lg:px-12 xl:px-16">
          <Link to="/" aria-label="OenoHub home" className="shrink-0 transition-transform duration-200 active:scale-95">
            <img src="/logo-dark.svg" alt="OenoHub.ge" className="h-8 w-auto" />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label={isKa ? 'მთავარი ნავიგაცია' : 'Main navigation'}>
            {NAV_LINKS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => `relative py-2 text-sm font-medium transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-px after:bg-gold-500 after:transition-all after:duration-300 ${isActive ? 'text-ink-900 after:w-full' : 'text-ink-600 hover:text-ink-900 after:w-0 hover:after:w-full'}`}
              >
                {item.label}
              </NavLink>
            ))}
            <Link to="/contact" className="rounded-full bg-burgundy-900 px-5 py-2.5 text-xs font-semibold text-white transition-all duration-200 hover:bg-burgundy-700 active:scale-95">
              {isKa ? 'დაიწყე პროექტი' : 'Start a project'}
            </Link>
            <LangSwitcher />
          </nav>

          <button
            type="button"
            aria-label={open ? (isKa ? 'მენიუს დახურვა' : 'Close menu') : (isKa ? 'მენიუს გახსნა' : 'Open menu')}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative flex h-10 w-10 flex-col items-center justify-center gap-2 transition-transform duration-200 active:scale-95 lg:hidden"
          >
            <span className={`h-px w-6 bg-ink-900 transition-all duration-300 ${open ? 'translate-y-[4.5px] rotate-45' : ''}`} />
            <span className={`h-px w-6 bg-ink-900 transition-all duration-300 ${open ? '-translate-y-[4.5px] -rotate-45' : ''}`} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="bg-frosted fixed inset-0 -z-10 flex min-h-[100dvh] flex-col justify-between bg-white/80 px-8 pb-10 pt-32 lg:hidden"
          >
            <nav className="flex flex-col gap-6" aria-label={isKa ? 'მობილური ნავიგაცია' : 'Mobile navigation'}>
              <Link to="/" className="font-sans text-[32px] font-semibold leading-tight tracking-[-0.02em] text-ink-900">{isKa ? 'მთავარი' : 'Home'}</Link>
              {NAV_LINKS.map((item, index) => (
                <motion.div key={item.to} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.06 * index + 0.08, type: 'spring', stiffness: 260, damping: 26 }}>
                  <NavLink to={item.to} className={({ isActive }) => `font-sans text-[32px] font-semibold leading-tight tracking-[-0.02em] ${isActive ? 'text-burgundy-700' : 'text-ink-900'}`}>
                    {item.label}
                  </NavLink>
                </motion.div>
              ))}
            </nav>
            <div className="flex flex-col gap-4 border-t border-black/10 pt-6 text-sm text-ink-600">
              <LangSwitcher className="self-start" />
              <Link to="/contact" className="mt-2 inline-flex w-fit items-center rounded-full bg-burgundy-900 px-5 py-3 text-xs font-semibold text-white transition-all duration-200 hover:bg-burgundy-700 active:scale-95">
                {isKa ? 'დაიწყე პროექტი' : 'Start a project'}
              </Link>
              <a href="mailto:info@oenohub.ge" className="transition-colors hover:text-burgundy-700">info@oenohub.ge</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
