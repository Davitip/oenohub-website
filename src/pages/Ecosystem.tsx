import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import CategorySection from '@/components/ecosystem/CategorySection'
import CompanyModal from '@/components/ecosystem/CompanyModal'
import EcoCta from '@/components/ecosystem/EcoCta'
import EcoHero from '@/components/ecosystem/EcoHero'
import EducationBand from '@/components/ecosystem/EducationBand'
import FilterBar from '@/components/ecosystem/FilterBar'
import FlowDiagram from '@/components/ecosystem/FlowDiagram'
import {
  ECO_CATEGORIES,
  type EcoCategoryId,
  type EcoCompany,
  type FilterKey,
} from '@/components/ecosystem/eco-data'
import { scrollToId } from '@/hooks/use-lenis'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

export default function Ecosystem() {
  const [filter, setFilter] = useState<FilterKey>('all')
  const [selected, setSelected] = useState<EcoCompany | null>(null)

  const scrollToCategory = (id: EcoCategoryId | 'all') => {
    const anchor = id === 'all' ? ECO_CATEGORIES[0].anchor : `cat-${id}`
    // wait a tick for the filter layout animation to start before scrolling
    window.setTimeout(() => scrollToId(anchor), 80)
  }

  const handleFilter = (key: FilterKey) => {
    setFilter(key)
    scrollToCategory(key)
  }

  const handleHeroNavigate = (id: EcoCategoryId) => {
    // hero pills are pure anchor navigation — make sure the target section is visible
    setFilter('all')
    scrollToCategory(id)
  }

  const visibleCategories =
    filter === 'all' ? ECO_CATEGORIES : ECO_CATEGORIES.filter((c) => c.id === filter)

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: EASE }}
      className="bg-cream-50"
    >
      <EcoHero onNavigate={handleHeroNavigate} />
      <FilterBar filter={filter} onSelect={handleFilter} />

      <AnimatePresence mode="popLayout">
        {visibleCategories.map((category) => (
          <motion.div
            key={category.id}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
          >
            <CategorySection category={category} onDetails={setSelected} />
          </motion.div>
        ))}
      </AnimatePresence>

      <EducationBand />
      <FlowDiagram />
      <EcoCta />

      <CompanyModal company={selected} onClose={() => setSelected(null)} />
    </motion.div>
  )
}
