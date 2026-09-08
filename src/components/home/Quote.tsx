import { motion } from 'framer-motion'
import { useLang } from '@/i18n/LanguageContext'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

export default function Quote() {
  const { d } = useLang()
  const words = d.home.quote.text.split(' ')

  return (
    <section data-theme="dark" className="relative overflow-hidden bg-burgundy-950 py-[72px] lg:py-[120px]">
      <img
        src="/texture-barrel.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-[0.12]"
      />
      <div className="grain-overlay" aria-hidden="true" />

      <div className="relative mx-auto max-w-[800px] px-6 text-center">
        <motion.span
          className="block font-display text-[120px] leading-[0.6] text-gold-500/30"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-25% 0px' }}
          transition={{ duration: 0.9, ease: EASE }}
          aria-hidden="true"
        >
          „
        </motion.span>

        <motion.blockquote
          className="mt-6 font-serif text-2xl leading-[1.5] text-milk md:text-[32px]"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-25% 0px' }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.04 } } }}
        >
          {words.map((w, i) => (
            <motion.span
              key={i}
              className="inline-block"
              variants={{
                hidden: { opacity: 0, y: 12 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
              }}
            >
              {w}
              {i < words.length - 1 ? ' ' : ''}
            </motion.span>
          ))}
        </motion.blockquote>

        <motion.p
          className="mt-8 text-sm tracking-[0.06em] text-gold-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {d.home.quote.by}
        </motion.p>
      </div>
    </section>
  )
}
