import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router'
import { btnPrimary } from '@/lib/styles'
import { useLang } from '@/i18n/LanguageContext'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

export default function EcoCta() {
  const { d } = useLang()
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const rotate = useTransform(scrollYProgress, [0, 1], [-10, 12])

  return (
    <section
      ref={ref}
      data-theme="dark"
      className="bg-hero-gradient-reversed relative overflow-hidden py-[72px] lg:py-[120px]"
    >
      <motion.img
        src="/vine-branch.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -left-16 -bottom-16 w-[360px] opacity-[0.15]"
        style={{ rotate }}
      />
      <div className="grain-overlay" aria-hidden="true" />

      <motion.div
        className="relative mx-auto max-w-3xl px-6 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-20% 0px' }}
        transition={{ duration: 0.8, ease: EASE }}
      >
        <h2 className="font-serif text-3xl font-semibold text-milk lg:text-[44px] lg:leading-[1.15]">
          {d.eco.cta.headingPre}<span className="font-display italic text-gold-400">{d.eco.cta.headingItalic}</span>
        </h2>
        <p className="mx-auto mt-5 max-w-[56ch] leading-[1.7] text-milk/80">
          {d.eco.cta.text}
        </p>
        <div className="mt-9 flex justify-center">
          <Link to="/contact" className={btnPrimary}>
            {d.eco.cta.primary}
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
