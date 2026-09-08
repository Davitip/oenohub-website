import { motion } from 'framer-motion'
import { Eye, Gem, Target } from 'lucide-react'
import { useLang } from '@/i18n/LanguageContext'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

const CARD_ICONS = [Target, Eye, Gem]

export default function MissionCards() {
  const { d } = useLang()
  const CARDS = CARD_ICONS.map((icon, i) => ({ icon, ...d.about.mission.cards[i] }))
  return (
    <section data-theme="dark" className="relative overflow-hidden bg-burgundy-900 py-[72px] lg:py-[120px]">
      <div className="grain-overlay" aria-hidden="true" />
      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {CARDS.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20% 0px' }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: EASE }}
              className="sheen group rounded-[20px] border border-gold-500/20 bg-burgundy-800/40 p-8 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/50"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.15, ease: EASE }}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-gold-500/40 text-gold-400"
              >
                <c.icon className="h-5 w-5" strokeWidth={1.6} />
              </motion.div>
              <h3 className="mt-6 font-serif text-2xl font-semibold text-milk">{c.title}</h3>
              <p className="mt-3 leading-[1.7] text-milk/75">{c.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
