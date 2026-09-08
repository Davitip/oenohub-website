import { motion } from 'framer-motion'
import Counter from '@/components/Counter'
import { useLang } from '@/i18n/LanguageContext'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

const VALUES = [10, 4, 2, 1]

export default function Stats() {
  const { d } = useLang()
  const STATS = VALUES.map((value, i) => ({ value, label: d.home.stats[i] }))
  return (
    <section className="bg-cream-100 py-[72px] lg:py-24">
      <motion.div
        className="mx-auto grid max-w-[1280px] grid-cols-2 px-6 lg:grid-cols-4 lg:px-12"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-20% 0px' }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
      >
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            className="relative flex flex-col items-center gap-3 px-4 py-6 text-center"
            variants={{
              hidden: { opacity: 0, y: 24 },
              show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
            }}
          >
            {i > 0 && (
              <motion.span
                className="absolute left-0 top-1/2 hidden h-16 w-px -translate-y-1/2 origin-top bg-cream-200 lg:block"
                variants={{ hidden: { scaleY: 0 }, show: { scaleY: 1, transition: { duration: 0.8, ease: EASE } } }}
                aria-hidden="true"
              />
            )}
            <span className="font-display text-6xl font-semibold leading-none text-burgundy-800">
              <Counter value={s.value} duration={1.6} />
            </span>
            <span className="text-sm text-ink-600">{s.label}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
