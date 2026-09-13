import { motion } from 'framer-motion'
import { useLang } from '@/i18n/LanguageContext'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

export default function ContactHero() {
  const { d } = useLang()
  return (
    <section
      className="bg-hero-gradient relative -mt-20 flex min-h-[40vh] items-center justify-center overflow-hidden pb-14 pt-36"
    >
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="text-xs font-semibold tracking-[0.22em] text-gold-600"
        >
          {d.contact.hero.eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
          className="mt-6 font-sans text-4xl font-semibold leading-[1.12] tracking-[-0.01em] text-ink-900 lg:text-[56px]"
        >
          {d.contact.hero.h1}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: EASE }}
          className="mx-auto mt-5 max-w-[62ch] text-lg leading-[1.7] text-ink-600"
        >
          {d.contact.hero.sub}
        </motion.p>
      </div>
    </section>
  )
}
