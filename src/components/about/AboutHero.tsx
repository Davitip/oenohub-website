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
      data-theme="dark"
      className="relative -mt-20 flex min-h-[60vh] items-center justify-center overflow-hidden bg-burgundy-950 pb-16 pt-40"
    >
      {/* barrel texture background, opacity 0.3 + parallax + zoom-out on load */}
      <motion.div className="absolute inset-0" style={{ y }} aria-hidden="true">
        <motion.img
          src="/texture-barrel.png"
          alt=""
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: EASE }}
          className="h-[135%] w-full object-cover opacity-30"
        />
      </motion.div>
      <div
        className="absolute inset-0 bg-gradient-to-b from-burgundy-950/70 via-burgundy-900/40 to-burgundy-950"
        aria-hidden="true"
      />
      <div className="grain-overlay" aria-hidden="true" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="text-xs font-semibold tracking-[0.22em] text-gold-400"
        >
          {d.about.hero.eyebrow}
        </motion.p>
        <h1 className="mt-6 font-serif text-[40px] font-semibold leading-[1.08] tracking-[-0.01em] text-milk lg:text-6xl">
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
          className="mx-auto mt-6 max-w-[62ch] text-lg leading-[1.7] text-milk/80"
        >
          {d.about.hero.sub}
        </motion.p>
      </div>
    </section>
  )
}
