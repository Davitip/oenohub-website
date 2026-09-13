import { motion, useScroll, useSpring } from 'framer-motion'
import { useRef } from 'react'
import { useLang } from '@/i18n/LanguageContext'
import { EASE } from './shared'

export default function EnrollmentSteps() {
  const { d } = useLang()
  const STEPS = d.education.steps.items.map((it, i) => ({ num: `0${i + 1}`, ...it }))
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 80%', 'end 60%'],
  })
  // gold line stroke draw, scrubbed with scroll
  const lineScale = useSpring(scrollYProgress, { stiffness: 90, damping: 24 })

  return (
    <section ref={ref} className="bg-cream-100 py-[72px] lg:py-[120px]">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        {/* section header */}
        <div className="mx-auto max-w-2xl text-center">
          <motion.p
            className="text-xs font-semibold tracking-[0.06em] text-gold-600"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-15% 0px' }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            {d.education.steps.eyebrow}
          </motion.p>
          <motion.h2
            className="mt-4 font-sans text-3xl font-semibold leading-[1.15] text-ink-900 lg:text-[44px]"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-15% 0px' }}
            transition={{ delay: 0.1, duration: 0.8, ease: EASE }}
          >
            {d.education.steps.heading}
          </motion.h2>
        </div>

        {/* timeline — horizontal on desktop, vertical on mobile */}
        <div className="relative mt-16">
          {/* desktop gold line */}
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-cream-200 lg:block" aria-hidden="true">
            <motion.div
              className="h-full origin-left bg-gold-500"
              style={{ scaleX: lineScale }}
            />
          </div>
          {/* mobile gold line */}
          <div className="absolute bottom-4 left-8 top-4 w-px bg-cream-200 lg:hidden" aria-hidden="true">
            <motion.div
              className="h-full w-full origin-top bg-gold-500"
              style={{ scaleY: lineScale }}
            />
          </div>

          <ol className="relative grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-8">
            {STEPS.map((s, i) => (
              <li key={s.num} className="flex gap-5 pl-1 lg:flex-col lg:gap-0 lg:pl-0">
                <motion.div
                  className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-gold-500/60 bg-cream-50 shadow-sm"
                  initial={{ scale: 0.6, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: '-10% 0px' }}
                  transition={{ delay: i * 0.12, type: 'spring', stiffness: 240, damping: 18 }}
                >
                  <span className="font-sans text-2xl font-semibold text-gold-600">
                    {s.num}
                  </span>
                </motion.div>
                <motion.div
                  className="lg:mt-6"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-10% 0px' }}
                  transition={{ delay: 0.1 + i * 0.12, duration: 0.7, ease: EASE }}
                >
                  <h3 className="font-sans text-xl font-semibold text-ink-900">{s.title}</h3>
                  <p className="mt-2 max-w-[30ch] text-sm leading-[1.7] text-ink-600">{s.desc}</p>
                </motion.div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
