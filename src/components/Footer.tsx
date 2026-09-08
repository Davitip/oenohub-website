import { motion } from 'framer-motion'
import { ArrowUpRight, Facebook, Instagram, Linkedin } from 'lucide-react'
import { Link } from 'react-router'
import { COMPANIES } from '@/lib/companies'

const NAV_LINKS = [
  { to: '/', label: 'მთავარი' },
  { to: '/ecosystem', label: 'ეკოსისტემა' },
  { to: '/education', label: 'განათლება' },
  { to: '/about', label: 'ჩვენ შესახებ' },
  { to: '/contact', label: 'კონტაქტი' },
]

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
  return (
    <footer className="relative bg-burgundy-950 text-milk">
      <div className="h-px w-full bg-gold-line" aria-hidden="true" />
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className="mx-auto grid max-w-[1280px] grid-cols-1 gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-12 lg:py-20"
      >
        {/* brand */}
        <motion.div variants={item} className="flex flex-col gap-5">
          <img src="/logo.svg" alt="OenoHub.ge" className="h-8 w-auto self-start" />
          <p className="max-w-xs text-sm leading-relaxed text-milk/70">
            ღვინისა და აგრო ინდუსტრიის ერთიანი ეკოსისტემა — ვენახიდან ბოკალამდე, ერთი ბრენდის ქვეშ.
          </p>
          <div className="flex gap-3">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-500/40 text-gold-400 transition-all duration-300 hover:bg-gold-500 hover:text-burgundy-950"
              >
                <s.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* ecosystem companies */}
        <motion.div variants={item}>
          <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-gold-400">
            ეკოსისტემა
          </h3>
          <ul className="grid grid-cols-1 gap-2.5 text-sm">
            {COMPANIES.map((c) => (
              <li key={c.name}>
                <a
                  href={c.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-1 text-milk/70 transition-colors hover:text-gold-400"
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
          <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-gold-400">
            ნავიგაცია
          </h3>
          <ul className="flex flex-col gap-2.5 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-milk/70 transition-colors hover:text-gold-400">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* contact */}
        <motion.div variants={item}>
          <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-gold-400">
            კონტაქტი
          </h3>
          <ul className="flex flex-col gap-2.5 text-sm text-milk/70">
            <li>თბილისი, საქართველო</li>
            <li>
              <a href="mailto:info@oenohub.ge" className="transition-colors hover:text-gold-400">
                info@oenohub.ge
              </a>
            </li>
            <li>
              <a href="tel:+995555000000" className="transition-colors hover:text-gold-400">
                +995 555 00 00 00
              </a>
            </li>
          </ul>
        </motion.div>
      </motion.div>

      <div className="border-t border-gold-500/15">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-2 px-6 py-6 text-xs text-milk/50 sm:flex-row sm:items-center sm:justify-between lg:px-12">
          <span>© 2025 OenoHub.ge — ყველა უფლება დაცულია</span>
          <span>
            ფრანჩაიზები: International Sommelier Guild · Edinburgh Whisky Academy
          </span>
        </div>
      </div>
    </footer>
  )
}
