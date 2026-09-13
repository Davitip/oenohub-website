import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useLang } from '@/i18n/LanguageContext'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

/** label positions on a circle, starting at top, every 72° */
const POSITIONS = Array.from({ length: 5 }, (_, i) => {
  const angle = ((-90 + i * 72) * Math.PI) / 180
  return {
    left: `${50 + Math.cos(angle) * 50}%`,
    top: `${50 + Math.sin(angle) * 50}%`,
  }
})

export default function PhilosophyRing() {
  const { d } = useLang()
  const LABELS = d.about.ring.labels
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  // slow rotate-on-scroll, scrubbed 0→90deg
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 90])

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-white py-[72px] lg:py-[120px]"
    >
      <div className="relative mx-auto max-w-[1280px] px-6 text-center lg:px-12">
        <motion.h2
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20% 0px' }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mx-auto max-w-3xl font-sans text-3xl font-semibold leading-[1.15] text-ink-900 lg:text-[44px]"
        >
          {d.about.ring.headingPre}<span className="text-gold-600">{d.about.ring.italic1}</span>{d.about.ring.headingMid}
          <span className="text-gold-600">{d.about.ring.italic2}</span>
        </motion.h2>

        {/* ring diagram with orbiting labels */}
        <div className="relative mx-auto mt-16 aspect-square w-full max-w-[560px]">
          {/* pulsing glow at center */}
          <motion.div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-500/15 blur-3xl"
            animate={{ opacity: [0.5, 1, 0.5], scale: [0.9, 1.1, 0.9] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.img
            src="/ecosystem-ring.svg"
            alt={d.about.ring.alt}
            className="absolute inset-0 m-auto h-[86%] w-[86%]"
            style={{ rotate }}
          />
          {LABELS.map((label, i) => (
            <motion.span
              key={label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-15% 0px' }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.12, ease: EASE }}
              className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold-500/40 bg-white/90 px-3 py-1 text-[11px] font-semibold tracking-[0.06em] text-gold-600 backdrop-blur-sm lg:px-4 lg:py-1.5 lg:text-xs"
              style={POSITIONS[i]}
            >
              {label}
            </motion.span>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20% 0px' }}
          transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
          className="mx-auto mt-14 max-w-[62ch] text-lg leading-[1.7] text-ink-600"
        >
          {d.about.ring.text}
        </motion.p>
      </div>
    </section>
  )
}
