import { motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router'
import { useLang } from '@/i18n/LanguageContext'
import { CATEGORY_COLORS, COMPANIES } from '@/lib/companies'
import { ghostLinkLight } from '@/lib/styles'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

export default function CompaniesCarousel() {
  const { d } = useLang()
  const trackRef = useRef<HTMLDivElement>(null)
  const viewportRef = useRef<HTMLDivElement>(null)
  const [dragLimit, setDragLimit] = useState(0)

  useEffect(() => {
    const measure = () => {
      const track = trackRef.current
      const viewport = viewportRef.current
      if (!track || !viewport) return
      setDragLimit(Math.max(0, track.scrollWidth - viewport.clientWidth))
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  return (
    <section className="bg-cream-50 py-[72px] lg:py-[120px]">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        {/* section header */}
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20% 0px' }}
            transition={{ duration: 0.8, ease: EASE }}
            className="max-w-2xl"
          >
            <p className="mb-3 flex items-center gap-3 text-xs font-semibold tracking-[0.06em] text-gold-500">
              <span className="inline-block h-px w-8 bg-gold-500" />
              {d.home.carousel.eyebrow}
            </p>
            <h2 className="font-serif text-3xl font-semibold text-ink-900 lg:text-[44px] lg:leading-[1.15]">
              {d.home.carousel.headingPre}<span className="font-display italic text-burgundy-700">{d.home.carousel.headingItalic}</span>
            </h2>
            <p className="mt-4 max-w-[62ch] leading-[1.7] text-ink-600">
              {d.home.carousel.text}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link to="/ecosystem" className={ghostLinkLight}>
              {d.home.carousel.all}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* carousel */}
      <div ref={viewportRef} className="overflow-hidden">
        <motion.div
          ref={trackRef}
          drag="x"
          dragConstraints={{ left: -dragLimit, right: 0 }}
          dragTransition={{ power: 0.28, timeConstant: 220, modifyTarget: (t) => Math.round(t / 364) * 364 }}
          className="flex cursor-grab gap-6 px-6 active:cursor-grabbing lg:px-[max(3rem,calc((100vw-1280px)/2+3rem))]"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-10% 0px' }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
        >
          {COMPANIES.map((c) => (
            <motion.article
              key={c.name}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
              }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.35 }}
              className="sheen group relative w-[300px] shrink-0 select-none overflow-hidden rounded-[20px] border border-cream-200 bg-cream-100 transition-shadow duration-300 hover:border-gold-500/50 hover:shadow-card-hover sm:w-[340px]"
            >
              <span
                className="block h-[3px] w-full"
                style={{ backgroundColor: CATEGORY_COLORS[c.category] }}
                aria-hidden="true"
              />
              <div className="flex h-full flex-col gap-4 p-7">
                <span
                  className="self-start rounded-full px-3 py-1 text-[11px] font-semibold tracking-[0.08em]"
                  style={{
                    color: CATEGORY_COLORS[c.category],
                    backgroundColor: `${CATEGORY_COLORS[c.category]}1A`,
                  }}
                >
                  {d.companies.categories[c.category]}
                </span>
                <img
                  src={c.logo}
                  alt={`${c.name} ${d.common.logoSuffix}`}
                  className="h-12 w-auto self-start"
                  draggable={false}
                />
                <h3 className="font-serif text-[26px] font-semibold leading-[1.25] text-ink-900">
                  {c.name}
                </h3>
                <p className="text-sm leading-[1.7] text-ink-600">{d.companies.items[c.id].description}</p>
                <a
                  href={c.url}
                  target="_blank"
                  rel="noreferrer"
                  onDragStart={(e) => e.preventDefault()}
                  className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-medium text-burgundy-700 transition-colors hover:text-burgundy-600"
                >
                  {d.home.carousel.explore}
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
