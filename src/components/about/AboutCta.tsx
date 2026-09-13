import { motion } from 'framer-motion'
import { Link } from 'react-router'
import { btnPrimary, btnSecondaryDark } from '@/lib/styles'
import { useLang } from '@/i18n/LanguageContext'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

export default function AboutCta() {
  const { d } = useLang()
  return (
    <section
      className="bg-hero-gradient-reversed relative overflow-hidden py-[72px] lg:py-[120px]"
    >
      <motion.div
        className="relative mx-auto max-w-3xl px-6 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-20% 0px' }}
        transition={{ duration: 0.8, ease: EASE }}
      >
        <h2 className="font-sans text-3xl font-semibold text-ink-900 lg:text-[44px] lg:leading-[1.15]">
          {d.about.cta.headingPre}<span className="text-gold-600">{d.about.cta.headingItalic}</span>{d.about.cta.headingPost}
        </h2>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link to="/ecosystem" className={btnPrimary}>
            {d.about.cta.primary}
          </Link>
          <Link to="/contact" className={btnSecondaryDark}>
            {d.about.cta.secondary}
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
