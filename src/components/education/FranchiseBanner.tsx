import { motion } from 'framer-motion'
import { BadgeCheck } from 'lucide-react'
import { useLang } from '@/i18n/LanguageContext'
import { EASE } from './shared'

const PILLS = ['International Sommelier Guild', 'Edinburgh Whisky Academy']

export default function FranchiseBanner() {
  const { d } = useLang()
  return (
    <section data-theme="dark" className="relative overflow-hidden">
      <motion.div
        className="bg-gradient-to-r from-gold-500 to-gold-400 text-burgundy-950"
        initial={{ clipPath: 'inset(0 100% 0 0)' }}
        whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
        viewport={{ once: true, margin: '-15% 0px' }}
        transition={{ duration: 0.8, ease: EASE }}
      >
        <div className="mx-auto flex max-w-[1280px] flex-col items-center gap-5 px-6 py-10 text-center lg:px-12">
          <motion.div
            className="flex flex-col items-center gap-3 sm:flex-row sm:gap-4"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7, ease: EASE }}
          >
            <BadgeCheck className="h-8 w-8 shrink-0" strokeWidth={1.8} aria-hidden="true" />
            <p className="font-serif text-lg font-semibold leading-snug sm:text-[22px]">
              {d.education.banner.text}
            </p>
          </motion.div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {PILLS.map((pill, i) => (
              <motion.span
                key={pill}
                className="rounded-full border border-burgundy-950/50 px-5 py-1.5 font-display text-sm font-semibold tracking-wide"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.5, ease: EASE }}
              >
                {pill}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
