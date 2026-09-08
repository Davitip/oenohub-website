import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useLang } from '@/i18n/LanguageContext'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

export default function AtmosphereStrip() {
  const { d } = useLang()
  const QUOTE_WORDS = d.about.atmosphere.quote.split(' ')
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])

  return (
    <section ref={ref} data-theme="dark" className="relative h-[60vh] min-h-[420px] overflow-hidden">
      <motion.img
        src="/about-team.png"
        alt={d.about.atmosphere.alt}
        className="absolute inset-0 h-[120%] w-full object-cover"
        style={{ y }}
      />
      <div className="absolute inset-0 bg-burgundy-950/50" aria-hidden="true" />

      <div className="relative flex h-full items-center justify-center px-6">
        <blockquote className="max-w-4xl text-center">
          <p className="font-serif text-2xl font-semibold leading-[1.3] text-milk lg:text-4xl">
            {QUOTE_WORDS.map((w, i) => (
              <motion.span
                key={i}
                className="inline-block whitespace-pre"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20% 0px' }}
                transition={{ duration: 0.6, delay: i * 0.05, ease: EASE }}
              >
                {w}{' '}
              </motion.span>
            ))}
          </p>
          <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-20% 0px' }}
            transition={{ duration: 0.7, delay: 0.6, ease: EASE }}
            className="mt-5 text-sm font-semibold tracking-[0.14em] text-gold-400"
          >
            — OenoHub.ge
          </motion.footer>
        </blockquote>
      </div>
    </section>
  )
}
