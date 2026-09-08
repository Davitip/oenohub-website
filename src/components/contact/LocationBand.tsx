import { motion } from 'framer-motion'
import { ArrowRight, MapPin } from 'lucide-react'
import { Link } from 'react-router'
import { ghostLinkDark } from '@/lib/styles'
import { useLang } from '@/i18n/LanguageContext'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

export default function LocationBand() {
  const { d } = useLang()
  return (
    <section data-theme="dark" className="relative overflow-hidden bg-burgundy-950 py-14">
      <div className="h-px w-full bg-gold-line absolute top-0" aria-hidden="true" />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-15% 0px' }}
        transition={{ duration: 0.7, ease: EASE }}
        className="relative mx-auto flex max-w-[1280px] flex-col items-center justify-center gap-4 px-6 text-center sm:flex-row sm:gap-5"
      >
        <motion.span
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-gold-500/40 text-gold-400"
        >
          <MapPin className="h-5 w-5" strokeWidth={1.8} />
        </motion.span>
        <p className="font-serif text-xl text-milk lg:text-2xl">
          {d.contact.location.text}
        </p>
        <Link to="/" className={ghostLinkDark}>
          {d.contact.location.link}
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </motion.div>
    </section>
  )
}
