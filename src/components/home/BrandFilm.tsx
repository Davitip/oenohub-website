import { motion } from 'framer-motion'
import { useLang } from '@/i18n/LanguageContext'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

export default function BrandFilm() {
  const { d } = useLang()

  return (
    <section data-theme="dark" className="relative overflow-hidden bg-burgundy-950 py-[72px] lg:py-[120px]">
      <div className="grain-overlay" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1200px] px-6">
        <div className="mx-auto max-w-[720px] text-center">
          <motion.span
            className="text-xs font-medium uppercase tracking-[0.28em] text-gold-400"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-25% 0px' }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            {d.home.film.eyebrow}
          </motion.span>

          <motion.h2
            className="mt-5 font-serif text-3xl leading-[1.15] text-milk md:text-[44px]"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-25% 0px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
          >
            {d.home.film.heading}
          </motion.h2>

          <motion.p
            className="mt-5 text-base leading-[1.7] text-milk/60"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-25% 0px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
          >
            {d.home.film.sub}
          </motion.p>
        </div>

        <motion.div
          className="relative mt-12 overflow-hidden rounded-2xl border border-gold-500/20 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.8)]"
          initial={{ opacity: 0, y: 32, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-15% 0px' }}
          transition={{ duration: 1, ease: EASE }}
        >
          <video
            className="block h-auto w-full"
            src="/brand-film.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label={d.home.film.videoAria}
          />
          <div
            className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10"
            aria-hidden="true"
          />
        </motion.div>
      </div>
    </section>
  )
}
