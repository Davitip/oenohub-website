import { motion } from 'framer-motion'
import { useLang } from '@/i18n/LanguageContext'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

type EuBrand = { name: string; logo: string; href: string; countryKa: string; countryEn: string }

const EU_BRANDS: EuBrand[] = [
  { name: 'Vidrala', logo: '/logo-vidrala.svg', href: 'https://vidrala.ge', countryKa: 'ესპანეთი', countryEn: 'Spain' },
  { name: 'FILTROX', logo: '/logo-filtrox.svg', href: 'https://filtrox.ge', countryKa: 'შვეიცარია', countryEn: 'Switzerland' },
  { name: 'Portugalia Cork', logo: '/logo-portugaliacork.svg', href: 'https://portugaliacork.ge', countryKa: 'პორტუგალია', countryEn: 'Portugal' },
  { name: 'Agglotap', logo: '/logo-agglotap.svg', href: 'https://agglotap.ge', countryKa: 'ესპანეთი', countryEn: 'Spain' },
]

export default function PartnerBrands() {
  const { d, lang } = useLang()

  return (
    <section data-theme="light" className="relative bg-[#f3efe7] py-[72px] lg:py-[110px]">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mx-auto max-w-[720px] text-center">
          <motion.span
            className="text-xs font-medium uppercase tracking-[0.28em] text-[#8d6042]"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-25% 0px' }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            {d.home.partners.eyebrow}
          </motion.span>

          <motion.h2
            className="mt-5 font-serif text-3xl leading-[1.15] text-burgundy-950 md:text-[44px]"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-25% 0px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
          >
            {d.home.partners.heading}
          </motion.h2>

          <motion.p
            className="mt-5 text-sm leading-7 text-black/55 md:text-base"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-25% 0px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
          >
            {d.home.partners.sub}
          </motion.p>
        </div>

        <motion.div
          className="mx-auto mt-14 grid max-w-[1000px] grid-cols-2 lg:grid-cols-4"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15% 0px' }}
          transition={{ duration: 0.9, delay: 0.15, ease: EASE }}
        >
          {EU_BRANDS.map((b) => (
            <a
              key={b.name}
              href={b.href}
              target="_blank"
              rel="noreferrer"
              className="group -ml-px -mt-px flex min-h-36 flex-col items-center justify-center border border-black/15 bg-[#f3efe7] p-6 transition hover:bg-white"
            >
              <img
                src={b.logo}
                alt={b.name}
                className="h-10 w-auto max-w-[80%] object-contain transition group-hover:scale-105"
              />
              <span className="mt-4 block text-center text-[9px] uppercase tracking-[0.16em] text-black/45">
                {b.name} · {lang === 'ka' ? b.countryKa : b.countryEn}
              </span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
