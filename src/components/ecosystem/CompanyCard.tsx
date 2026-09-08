import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Facebook } from 'lucide-react'
import { useLang } from '@/i18n/LanguageContext'
import type { EcoCompany } from './eco-data'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

interface CompanyCardProps {
  company: EcoCompany
  badge: string
  badgeClass: string
  cardClass: string
  index: number
  /** alternate entry direction (section B visual rhythm) */
  fromLeft?: boolean
  onDetails: (company: EcoCompany) => void
}

export default function CompanyCard({
  company,
  badge,
  badgeClass,
  cardClass,
  index,
  fromLeft,
  onDetails,
}: CompanyCardProps) {
  const { d } = useLang()
  const copy = d.eco.companies[company.id]
  const hidden =
    fromLeft === undefined
      ? { opacity: 0, y: 40 }
      : { opacity: 0, x: fromLeft ? -30 : 30 }
  const shown =
    fromLeft === undefined ? { opacity: 1, y: 0 } : { opacity: 1, x: 0 }

  return (
    <motion.article
      layout
      initial={hidden}
      whileInView={shown}
      viewport={{ once: true, margin: '-15% 0px' }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: EASE }}
      className={`group sheen relative flex flex-col gap-6 rounded-[20px] border p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-[rgba(201,162,39,0.5)] hover:shadow-card-hover sm:flex-row sm:p-8 ${cardClass}`}
    >
      {/* monogram */}
      <div className="flex shrink-0 items-start">
        <div className="flex h-20 w-36 items-center justify-center rounded-2xl border border-cream-200 bg-cream-50 px-4 transition-all duration-300 group-hover:border-gold-500/40 group-hover:bg-gold-500/10 group-hover:shadow-gold-glow">
          <img src={company.logo} alt={`${company.name} ${d.common.logoSuffix}`} className="max-h-10 w-auto" />
        </div>
      </div>

      {/* content */}
      <div className="flex min-w-0 flex-1 flex-col">
        <span className="flex flex-wrap items-center gap-2">
          <span
            className={`inline-flex w-fit items-center rounded-full border px-3 py-1 text-[11px] font-semibold tracking-[0.06em] ${badgeClass}`}
          >
            {badge}
          </span>
          {company.id === 'winehub' && (
            <span className="inline-flex w-fit items-center rounded-full border border-gold-500/50 bg-gold-500/15 px-3 py-1 text-[11px] font-semibold tracking-[0.06em] text-[#8A6D12]">
              {d.eco.founderBadge}
            </span>
          )}
        </span>
        <h3 className="mt-3 font-serif text-[22px] font-semibold leading-[1.25] text-ink-900 lg:text-[26px]">
          {company.name}
        </h3>
        <p className="mt-1 text-sm font-medium text-burgundy-700">{copy.tagline}</p>
        <p className="mt-3 text-[15px] leading-[1.7] text-ink-600">{copy.description}</p>

        {/* feature chips */}
        <div className="mt-4 flex flex-wrap gap-2">
          {copy.chips.map((chip) => (
            <span
              key={chip}
              className="rounded-full border border-cream-200 bg-white/70 px-3 py-1 text-xs text-ink-600 transition-colors duration-300 hover:border-gold-500/40 hover:bg-gold-500/10 hover:text-ink-900"
            >
              {chip}
            </span>
          ))}
        </div>

        {/* links */}
        <div className="mt-5 flex flex-wrap items-center gap-5">
          <button
            type="button"
            onClick={() => onDetails(company)}
            className="group/btn inline-flex items-center gap-2 text-sm font-semibold text-burgundy-700 transition-colors hover:text-burgundy-600"
          >
            {company.id === 'gs' ? d.eco.detailsNoun : d.eco.details}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
          </button>
          {company.id !== 'gs' && (
            <a
              href={company.url}
              target="_blank"
              rel="noreferrer"
              className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-ink-400 transition-colors hover:text-gold-500"
            >
              {company.id === 'winehub' && <Facebook className="h-3.5 w-3.5" />}
              {company.id === 'winehub' ? d.eco.companies.winehub.linkLabel : company.linkLabel}
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}
