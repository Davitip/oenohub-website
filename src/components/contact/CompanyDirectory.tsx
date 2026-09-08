import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router'
import { COMPANIES } from '@/lib/companies'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

const EDUCATION_ENTRIES = [
  { name: 'International Sommelier Guild', logo: '/isg-emblem.png' },
  { name: 'Edinburgh Whisky Academy', logo: '/ewa-emblem.png' },
]

const rowClass =
  'group flex items-center gap-4 border-b border-cream-200 px-2 py-4 transition-colors duration-300 hover:bg-cream-100'

export default function CompanyDirectory() {
  return (
    <section className="bg-cream-50 pb-[72px] lg:pb-[120px]">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        {/* section header */}
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-20% 0px' }}
            transition={{ duration: 0.7, ease: EASE }}
            className="text-xs font-semibold tracking-[0.22em] text-gold-500"
          >
            — სწრაფი მიმართვა —
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20% 0px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
            className="mt-4 font-serif text-3xl font-semibold leading-[1.15] text-ink-900 lg:text-[44px]"
          >
            პირდაპირ კომპანიას
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20% 0px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
            className="mt-4 max-w-[62ch] text-lg leading-[1.7] text-ink-600"
          >
            იცი ზუსტად რა გჭირდება? აირჩიე კომპანია და გადადი პირდაპირ მის საიტზე.
          </motion.p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-x-12 md:grid-cols-2">
          {COMPANIES.map((c, i) => (
            <motion.a
              key={c.name}
              href={c.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.05 + Math.floor(i / 2) * 0.05, ease: EASE }}
              className={rowClass}
            >
              <img
                src={c.logo}
                alt=""
                aria-hidden="true"
                className="h-10 w-10 rounded-lg border border-cream-200 bg-milk object-contain p-1 transition-all duration-300 group-hover:border-gold-500/60 group-hover:shadow-gold-glow"
              />
              <span className="font-medium text-ink-900 transition-colors group-hover:text-burgundy-700">
                {c.name}
              </span>
              <ArrowUpRight className="ml-auto h-4 w-4 text-ink-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-gold-500" />
            </motion.a>
          ))}
          {EDUCATION_ENTRIES.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.05, ease: EASE }}
            >
              <Link to="/education" className={rowClass}>
                <img
                  src={c.logo}
                  alt=""
                  aria-hidden="true"
                  className="h-10 w-10 rounded-lg border border-cream-200 bg-milk object-contain p-1 transition-all duration-300 group-hover:border-gold-500/60 group-hover:shadow-gold-glow"
                />
                <span className="font-medium text-ink-900 transition-colors group-hover:text-burgundy-700">
                  {c.name}
                </span>
                <ArrowUpRight className="ml-auto h-4 w-4 text-ink-400 transition-all duration-300 group-hover:translate-x-1 group-hover:text-gold-500" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
