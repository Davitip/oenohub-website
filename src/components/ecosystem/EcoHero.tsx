import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useLang } from '@/i18n/LanguageContext'
import { ECO_CATEGORIES, type EcoCategoryId } from './eco-data'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

interface EcoHeroProps {
  onNavigate: (category: EcoCategoryId) => void
}

export default function EcoHero({ onNavigate }: EcoHeroProps) {
  const { d } = useLang()
  const H1_WORDS = d.eco.hero.h1
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  // background parallax 0.4x
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])

  return (
    <section
      ref={ref}
      data-theme="dark"
      className="relative -mt-20 flex min-h-[60dvh] items-center justify-center overflow-hidden bg-burgundy-950 pb-20 pt-36"
    >
      {/* vineyard photo, opacity 0.35, parallax 0.4x */}
      <motion.div className="absolute inset-0" style={{ y: bgY }} aria-hidden="true">
        <img
          src="/company-vineyard.png"
          alt=""
          className="h-[130%] w-full object-cover opacity-[0.35]"
        />
      </motion.div>
      {/* gradient overlay burgundy-950 60%→20% */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-burgundy-950/60 to-burgundy-950/20"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-burgundy-950 to-transparent"
        aria-hidden="true"
      />
      <div className="grain-overlay" aria-hidden="true" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <motion.p
          className="text-xs font-semibold tracking-[0.22em] text-gold-400"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          {d.eco.hero.eyebrow}
        </motion.p>

        <h1 className="mt-5 font-serif text-[40px] font-semibold leading-[1.12] tracking-[-0.01em] text-milk md:text-[56px]">
          {H1_WORDS.map((word, i) => (
            <span key={i} className="inline-block overflow-hidden pb-1 align-bottom">
              <motion.span
                className="inline-block"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.15 + i * 0.08, duration: 0.9, ease: EASE }}
              >
                {word}
                {i < H1_WORDS.length - 1 ? ' ' : ''}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          className="mx-auto mt-6 max-w-[62ch] text-base leading-[1.7] text-milk/85 md:text-lg"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: EASE }}
        >
          {d.eco.hero.sub}
        </motion.p>

        {/* category anchor pills */}
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          {ECO_CATEGORIES.map((cat, i) => (
            <motion.button
              key={cat.id}
              type="button"
              onClick={() => onNavigate(cat.id)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + i * 0.08, duration: 0.6, ease: EASE }}
              className="rounded-full border border-gold-500/40 px-5 py-2 text-sm font-medium text-milk/80 transition-all duration-300 hover:border-gold-500 hover:bg-gold-500/10 hover:text-gold-300"
            >
              {d.eco.categories[cat.id].badge}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}
