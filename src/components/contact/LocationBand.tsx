import { motion } from 'framer-motion'
import { ArrowRight, MapPin } from 'lucide-react'
import { Link } from '@/components/LocalizedLink'
import { ghostLinkDark } from '@/lib/styles'
import { useLang } from '@/i18n/LanguageContext'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

export default function LocationBand() {
  const { d } = useLang()
  return (
    <section className="relative overflow-hidden border-y border-black/10 bg-white py-14">
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
          className="flex h-11 w-11 items-center justify-center rounded-full border border-black/15 text-gold-600"
        >
          <MapPin className="h-5 w-5" strokeWidth={1.8} />
        </motion.span>
        <p className="font-sans text-xl text-ink-900 lg:text-2xl">
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
