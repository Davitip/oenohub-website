import { motion } from 'framer-motion'
import { ArrowUpRight, Facebook, Instagram, Linkedin } from 'lucide-react'
import { Link } from '@/components/LocalizedLink'
import { useLang } from '@/i18n/LanguageContext'
import { COMPANIES } from '@/lib/companies'

const SOCIALS = [
  { icon: Facebook, label: 'Facebook', href: 'https://facebook.com' },
  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
}

export default function Footer() {
  const { d } = useLang()
  const NAV_LINKS = [
    { to: '/', label: d.nav.home },
    { to: '/ecosystem', label: d.nav.ecosystem },
    { to: '/education', label: d.nav.education },
    { to: '/about', label: d.nav.about },
    { to: '/contact', label: d.nav.contact },
  ]
  return (
    <footer className="relative border-t border-black/10 bg-cream-100 text-ink-900">
      
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className="mx-auto grid max-w-[1280px] grid-cols-1 gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-12 lg:py-20"
      >
        {/* brand */}
        <motion.div variants={item} className="flex flex-col gap-5">
          <img src="/logo-dark.svg" alt="OenoHub.ge" className="h-8 w-auto self-start" />
          <p className="max-w-xs text-sm leading-relaxed text-ink-600">
            {d.footer.tagline}
          </p>
          <div className="flex gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-black/15 text-ink-600 transition-all duration-200 hover:border-burgundy-900 hover:bg-burgundy-900 hover:text-white active:scale-95"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* ecosystem companies */}
        <motion.div variants={item}>
          <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-ink-400">
            {d.footer.ecosystem}
          </h3>
          <ul className="grid grid-cols-1 gap-2.5 text-sm">
            {COMPANIES.map((c) => (
              <li key={c.name}>
                <a
                  href={c.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-1 text-ink-600 transition-colors hover:text-burgundy-700"
                >
                  {c.name}
                  <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* navigation */}
        <motion.div variants={item}>
          <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-ink-400">
            {d.footer.navigation}
          </h3>
          <ul className="flex flex-col gap-2.5 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-ink-600 transition-colors hover:text-burgundy-700">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* contact */}
        <motion.div variants={item}>
          <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-ink-400">
            {d.footer.contact}
          </h3>
          <ul className="flex flex-col gap-2.5 text-sm text-ink-600">
            <li>{d.footer.city}</li>
            <li>
              <a href="mailto:info@oenohub.ge" className="transition-colors hover:text-burgundy-700">
                info@oenohub.ge
              </a>
            </li>
            <li>
              <span className="flex items-center gap-2">
                <a href="tel:+995510102090" className="transition-colors hover:text-burgundy-700">
                  +995 510 10 20 90
                </a>
                <a href="https://wa.me/995510102090" target="_blank" rel="noreferrer" aria-label="WhatsApp: +995 510 10 20 90" className="text-gold-600 transition-colors hover:text-gold-700">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.87 9.87 0 0 0 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm0 18.03a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.07.81.82-3-.2-.31a8.08 8.08 0 0 1-1.24-4.31c0-4.47 3.64-8.11 8.12-8.11 4.47 0 8.11 3.64 8.11 8.11s-3.64 8.12-8.11 8.12zm4.45-6.07c-.24-.12-1.44-.71-1.66-.79-.22-.08-.39-.12-.55.12-.16.24-.63.79-.77.96-.14.16-.28.18-.53.06-.24-.12-1.03-.38-1.96-1.21-.72-.65-1.21-1.44-1.36-1.68-.14-.24-.01-.37.11-.49.11-.11.24-.28.37-.42.12-.14.16-.24.24-.4.08-.16.04-.31-.02-.43-.06-.12-.55-1.32-.75-1.81-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.43.06-.65.31-.22.24-.86.84-.86 2.05 0 1.21.88 2.37 1 2.53.12.16 1.72 2.63 4.18 3.69.58.25 1.04.4 1.4.52.59.19 1.12.16 1.54.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.05.14-1.16-.06-.1-.22-.16-.46-.28z" /></svg>
                </a>
              </span>
              <span className="flex items-center gap-2">
                <a href="tel:+995577141487" className="transition-colors hover:text-burgundy-700">
                  +995 577 14 14 87
                </a>
                <a href="https://wa.me/995577141487" target="_blank" rel="noreferrer" aria-label="WhatsApp: +995 577 14 14 87" className="text-gold-600 transition-colors hover:text-gold-700">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.87 9.87 0 0 0 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm0 18.03a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.07.81.82-3-.2-.31a8.08 8.08 0 0 1-1.24-4.31c0-4.47 3.64-8.11 8.12-8.11 4.47 0 8.11 3.64 8.11 8.11s-3.64 8.12-8.11 8.12zm4.45-6.07c-.24-.12-1.44-.71-1.66-.79-.22-.08-.39-.12-.55.12-.16.24-.63.79-.77.96-.14.16-.28.18-.53.06-.24-.12-1.03-.38-1.96-1.21-.72-.65-1.21-1.44-1.36-1.68-.14-.24-.01-.37.11-.49.11-.11.24-.28.37-.42.12-.14.16-.24.24-.4.08-.16.04-.31-.02-.43-.06-.12-.55-1.32-.75-1.81-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.43.06-.65.31-.22.24-.86.84-.86 2.05 0 1.21.88 2.37 1 2.53.12.16 1.72 2.63 4.18 3.69.58.25 1.04.4 1.4.52.59.19 1.12.16 1.54.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.05.14-1.16-.06-.1-.22-.16-.46-.28z" /></svg>
                </a>
              </span>
            </li>
          </ul>
        </motion.div>
      </motion.div>

      <div className="border-t border-black/10">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-2 px-6 py-6 text-xs text-ink-400 sm:flex-row sm:items-center sm:justify-between lg:px-12">
          <span>{d.footer.rights}</span>
          <span>{d.footer.franchises}</span>
        </div>
      </div>
    </footer>
  )
}
