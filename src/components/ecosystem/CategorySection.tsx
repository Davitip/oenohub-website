import { motion } from 'framer-motion'
import CompanyCard from './CompanyCard'
import { companiesByCategory, type EcoCategory, type EcoCompany } from './eco-data'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

interface CategorySectionProps {
  category: EcoCategory
  onDetails: (company: EcoCompany) => void
}

export default function CategorySection({ category, onDetails }: CategorySectionProps) {
  const companies = companiesByCategory(category.id)

  return (
    <section className={`relative overflow-hidden ${category.sectionClass}`}>
      {/* anchor point: 64px above content so lenis offset lands below the sticky bar */}
      <span id={category.anchor} className="absolute -top-16" aria-hidden="true" />

      {/* cork texture decor for packaging section */}
      {category.decor === 'cork' && (
        <img
          src="/texture-cork.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-[0.06]"
        />
      )}

      <div className="relative mx-auto max-w-[1280px] px-6 py-[72px] lg:px-12 lg:py-[120px]">
        {/* category header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15% 0px' }}
          transition={{ duration: 0.8, ease: EASE }}
          className="max-w-3xl"
        >
          <span
            className={`inline-flex items-center rounded-full border px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.06em] ${category.badgeClass}`}
          >
            {category.badge}
          </span>
          <h2 className="mt-5 font-serif text-3xl font-semibold leading-[1.15] text-ink-900 lg:text-[44px]">
            {category.heading}
          </h2>
          <p className="mt-4 max-w-[62ch] leading-[1.7] text-ink-600">{category.blurb}</p>
          <motion.div
            className="mt-6 h-px w-24 origin-left bg-gold-500"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: '-15% 0px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
          />
        </motion.div>

        {/* company grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {companies.map((company, i) => (
            <CompanyCard
              key={company.id}
              company={company}
              badge={category.badge}
              badgeClass={category.badgeClass}
              cardClass={category.cardClass}
              index={i}
              fromLeft={category.alternate ? i % 2 === 0 : undefined}
              onDetails={onDetails}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
