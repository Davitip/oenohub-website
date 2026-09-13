import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { scrollToId } from '@/hooks/use-lenis'
import { btnPrimary, btnSecondaryDark } from '@/lib/styles'
import { useLang } from '@/i18n/LanguageContext'
import { EASE } from './shared'

function WordStagger({ words }: { words: string[] }) {
  return (
    <>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden pb-1 align-bottom">
          <motion.span
            className={`inline-block ${i === words.length - 1 ? 'text-gold-600' : ''}`}
            initial={{ y: 36, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.15 + i * 0.08, duration: 0.9, ease: EASE }}
          >
            {word}
            {i < words.length - 1 ? ' ' : ''}
          </motion.span>
        </span>
      ))}
    </>
  )
}

export default function EduHero() {
  const { d } = useLang()
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  // parallax: top image 0.25x, bottom image 0.45x
  const yTop = useTransform(scrollYProgress, [0, 1], [0, -70])
  const yBottom = useTransform(scrollYProgress, [0, 1], [0, -126])

  return (
    <section
      ref={ref}
      className="bg-hero-gradient relative -mt-20 overflow-hidden"
    >
      <div className="relative mx-auto grid min-h-[70vh] max-w-[1280px] grid-cols-1 items-center gap-14 px-6 pb-20 pt-32 lg:grid-cols-[55%_45%] lg:gap-10 lg:px-12 lg:pb-24 lg:pt-40">
        {/* left — text */}
        <div className="max-w-[62ch]">
          <motion.p
            className="text-xs font-semibold tracking-[0.06em] text-gold-600"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            {d.education.hero.eyebrow}
          </motion.p>
          <h1 className="mt-5 font-sans text-4xl font-semibold leading-[1.12] tracking-[-0.01em] text-ink-900 lg:text-[56px]">
            <WordStagger words={d.education.hero.h1} />
          </h1>
          <motion.p
            className="mt-6 text-base leading-[1.7] text-ink-600 lg:text-lg"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: EASE }}
          >
            {d.education.hero.subPre}
            <strong className="font-semibold text-gold-600">International Sommelier Guild</strong>
            {d.education.hero.subMid1}
            <strong className="font-semibold text-gold-600">Edinburgh Whisky Academy</strong>
            {d.education.hero.subMid2}
          </motion.p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <motion.button
              type="button"
              onClick={() => scrollToId('isg')}
              className={btnPrimary}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.7, ease: EASE }}
            >
              {d.education.hero.primary}
            </motion.button>
            <motion.button
              type="button"
              onClick={() => scrollToId('ewa')}
              className={btnSecondaryDark}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.7, ease: EASE }}
            >
              {d.education.hero.secondary}
            </motion.button>
          </div>
        </div>

        {/* right — overlapping dual-image collage */}
        <div className="relative mx-auto w-full max-w-[520px] lg:max-w-none">
          <motion.div
            style={{ y: yTop }}
            className="relative z-10 w-[78%] overflow-hidden rounded-[20px] border border-black/10 shadow-2xl"
          >
            <motion.div
              initial={{ clipPath: 'inset(0 0 100% 0)' }}
              animate={{ clipPath: 'inset(0 0 0% 0)' }}
              transition={{ delay: 0.4, duration: 1, ease: EASE }}
            >
              <img
                src="/edu-sommelier.png"
                alt={d.education.hero.alt1}
                className="aspect-[3/2] w-full object-cover"
              />
            </motion.div>
          </motion.div>
          <motion.div
            style={{ y: yBottom }}
            className="absolute -bottom-16 right-0 w-[62%] overflow-hidden rounded-[20px] border border-black/10 shadow-2xl"
          >
            <motion.div
              initial={{ clipPath: 'inset(100% 0 0 0)' }}
              animate={{ clipPath: 'inset(0% 0 0 0)' }}
              transition={{ delay: 0.6, duration: 1, ease: EASE }}
            >
              <img
                src="/edu-whisky.png"
                alt={d.education.hero.alt2}
                className="aspect-[3/2] w-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
