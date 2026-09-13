import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useLang } from '@/i18n/LanguageContext'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

export default function AboutHero() {
  const { d } = useLang()
  const TITLE_WORDS = d.about.hero.title
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  // slow background parallax 0.35x
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '35%'])

  return (
    <section
      ref={ref}
      className="bg-hero-gradient relative -mt-20 flex min-h-[60vh] items-center justify-center overflow-hidden pb-16 pt-40"
    >
      {/* soft parallax tint field, 0.35x */}
      <motion.div
        className="absolute inset-0"
        style={{
          y,
          background:
            'radial-gradient(45% 35% at 70% 30%, rgba(201,162,39,0.10), transparent 70%), radial-gradient(40% 32% at 25% 65%, rgba(61,10,24,0.05), transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="text-xs font-semibold tracking-[0.22em] text-gold-600"
        >
          {d.about.hero.eyebrow}
        </motion.p>
        <h1 className="mt-6 font-sans text-[40px] font-semibold leading-[1.08] tracking-[-0.01em] text-ink-900 lg:text-6xl">
          {TITLE_WORDS.map((w, i) => (
            <motion.span
              key={i}
              className="inline-block whitespace-pre"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 + i * 0.08, ease: EASE }}
            >
              {w}{' '}
            </motion.span>
          ))}
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: EASE }}
          className="mx-auto mt-6 max-w-[62ch] text-lg leading-[1.7] text-ink-600"
        >
          {d.about.hero.sub}
        </motion.p>
      </div>
    </section>
  )
}
