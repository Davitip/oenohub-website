import { motion } from 'framer-motion'
import { GlassWater, Grape, TrendingUp, UtensilsCrossed } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useLang } from '@/i18n/LanguageContext'
import { EASE } from './shared'

const AUDIENCE_ICONS: LucideIcon[] = [UtensilsCrossed, Grape, GlassWater, TrendingUp]

export default function AudienceGrid() {
  const { d } = useLang()
  const AUDIENCES = AUDIENCE_ICONS.map((icon, i) => ({ icon, ...d.education.audience.items[i] }))
  return (
    <section className="bg-cream-50 py-[72px] lg:py-[120px]">
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
            {d.education.audience.eyebrow}
          </motion.p>
          <motion.h2
            className="mt-4 font-sans text-3xl font-semibold leading-[1.15] text-ink-900 lg:text-[44px]"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-15% 0px' }}
            transition={{ delay: 0.1, duration: 0.8, ease: EASE }}
          >
            {d.education.audience.heading}
          </motion.h2>
          <motion.div
            className="mx-auto mt-6 h-px w-24 origin-center bg-gold-line"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: '-15% 0px' }}
            transition={{ delay: 0.2, duration: 0.8, ease: EASE }}
            aria-hidden="true"
          />
        </div>

        {/* cards */}
        <div className="mt-14 grid grid-cols-2 gap-5 lg:grid-cols-4 lg:gap-6">
          {AUDIENCES.map((a, i) => (
            <motion.div
              key={a.title}
              className="sheen rounded-[20px] border border-cream-200 bg-cream-100 p-6 transition-[box-shadow,border-color] duration-300 hover:border-gold-500/50 hover:shadow-card-hover lg:p-7"
              initial={{ opacity: 0, y: 30, rotate: 1 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              whileHover={{ y: -4 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: EASE }}
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold-500/40 bg-gold-500/10">
                <a.icon className="h-5 w-5 text-gold-600" strokeWidth={1.8} aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-sans text-lg font-semibold leading-snug text-ink-900 lg:text-xl">
                {a.title}
              </h3>
              <p className="mt-2 text-sm leading-[1.6] text-ink-600">{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
