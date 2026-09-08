import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { useLang } from '@/i18n/LanguageContext'
import { FILTER_PILLS, type FilterKey } from './eco-data'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

interface FilterBarProps {
  filter: FilterKey
  onSelect: (key: FilterKey) => void
}

/**
 * Sticky category filter bar (top-16 = 64px, under the scrolled navbar).
 * Slides down once the user scrolls past the hero; active pill carries the
 * Framer Motion layoutId background.
 */
export default function FilterBar({ filter, onSelect }: FilterBarProps) {
  const { d } = useLang()
  const [pastHero, setPastHero] = useState(false)

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > window.innerHeight * 0.45)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="sticky top-16 z-40 h-14">
      <motion.div
        animate={{ y: pastHero ? 0 : -56, opacity: pastHero ? 1 : 0 }}
        initial={false}
        transition={{ duration: 0.4, ease: EASE }}
        className={`flex h-14 items-center border-b border-cream-200 bg-cream-50/95 backdrop-blur-sm ${
          pastHero ? '' : 'pointer-events-none'
        } ${pastHero ? 'shadow-[0_8px_24px_-16px_rgb(42_7_16/0.25)]' : ''}`}
      >
        <div className="mx-auto flex w-full max-w-[1280px] items-center gap-3 overflow-x-auto px-6 lg:gap-4 lg:px-12">
          <span className="shrink-0 text-xs font-semibold tracking-[0.06em] text-ink-400">
            {d.eco.filter.label}
          </span>
          <div className="flex items-center gap-2">
            {FILTER_PILLS.map((pill) => {
              const active = filter === pill.key
              return (
                <button
                  key={pill.key}
                  type="button"
                  onClick={() => onSelect(pill.key)}
                  aria-pressed={active}
                  className={`relative shrink-0 rounded-full px-4 py-1.5 text-[13px] font-medium transition-colors duration-300 ${
                    active ? 'text-milk' : 'bg-cream-100 text-ink-600 hover:ring-1 hover:ring-gold-500/60'
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="activePill"
                      transition={{ duration: 0.4, ease: EASE }}
                      className="absolute inset-0 rounded-full bg-burgundy-700"
                    />
                  )}
                  <span className="relative">{pill.key === 'all' ? d.eco.filter.all : d.eco.categories[pill.key].badge}</span>
                </button>
              )
            })}
            <Link
              to="/education"
              className="group inline-flex shrink-0 items-center gap-1 rounded-full bg-cream-100 px-4 py-1.5 text-[13px] font-medium text-ink-600 transition-all duration-300 hover:ring-1 hover:ring-gold-500/60"
            >
              {d.eco.filter.education}
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
