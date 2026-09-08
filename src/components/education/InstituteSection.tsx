import { motion } from 'framer-motion'
import { memo } from 'react'
import { Link } from 'react-router'
import { btnPrimary } from '@/lib/styles'
import { EASE, fadeUpItem, staggerContainer } from './shared'

export interface Program {
  title: string
  desc: string
}

interface InstituteSectionProps {
  id: string
  title: string
  lead: string
  programs: Program[]
  checklist: string[]
  image: string
  imageAlt: string
  emblem: string
  emblemAlt: string
  mirrored?: boolean
  amberGlow?: boolean
}

/** Perpetual amber glow pulse — isolated & memoized so parents can't reset it. */
const AmberGlow = memo(function AmberGlow() {
  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0"
      style={{
        background:
          'radial-gradient(60% 60% at 75% 40%, rgba(201,162,39,0.08) 0%, transparent 70%)',
      }}
      animate={{ opacity: [0.75, 1.25, 0.75] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
    />
  )
})

/** Gold check with SVG stroke draw-in. */
function CheckDraw() {
  return (
    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-gold-500/50">
      <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" aria-hidden="true">
        <motion.path
          d="M3 8.5 6.5 12 13 4.5"
          stroke="#C9A227"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.5, ease: EASE }}
        />
      </svg>
    </span>
  )
}

export default function InstituteSection({
  id,
  title,
  lead,
  programs,
  checklist,
  image,
  imageAlt,
  emblem,
  emblemAlt,
  mirrored = false,
  amberGlow = false,
}: InstituteSectionProps) {
  return (
    <section
      id={id}
      data-theme="dark"
      className="relative scroll-mt-20 overflow-hidden bg-burgundy-900 py-[72px] lg:py-[120px]"
    >
      {amberGlow && <AmberGlow />}
      <div className="grain-overlay" aria-hidden="true" />
      <div
        className="relative mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:gap-14 lg:px-12"
      >
        {/* image side */}
        <motion.div
          className={`relative mx-auto w-full max-w-[560px] ${mirrored ? 'lg:order-2' : ''}`}
          initial={{
            clipPath: mirrored ? 'inset(0 0 0 100%)' : 'inset(0 100% 0 0)',
          }}
          whileInView={{ clipPath: 'inset(0 0% 0 0%)' }}
          viewport={{ once: true, margin: '-15% 0px' }}
          transition={{ duration: 1, ease: EASE }}
        >
          {/* decorative gold corner frames (40px lines, two corners) */}
          <span
            aria-hidden="true"
            className="absolute -left-4 -top-4 h-10 w-10 border-l-2 border-t-2 border-gold-500/70"
          />
          <span
            aria-hidden="true"
            className="absolute -bottom-4 -right-4 h-10 w-10 border-b-2 border-r-2 border-gold-500/70"
          />
          <img
            src={image}
            alt={imageAlt}
            className="aspect-[3/2] w-full rounded-[20px] border border-gold-500/25 object-cover shadow-2xl"
          />
          <motion.img
            src={emblem}
            alt={emblemAlt}
            className={`absolute -bottom-8 h-20 w-20 rounded-full border-2 border-gold-500/60 bg-burgundy-950 object-cover shadow-xl ${
              mirrored ? '-left-6' : '-right-6'
            }`}
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, margin: '-15% 0px' }}
            transition={{ delay: 0.5, type: 'spring', stiffness: 220, damping: 16 }}
          />
        </motion.div>

        {/* content side */}
        <motion.div
          className={mirrored ? 'lg:order-1' : ''}
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-15% 0px' }}
        >
          <motion.span
            variants={fadeUpItem}
            className="inline-block rounded-full bg-gold-500 px-4 py-1.5 text-[11px] font-semibold tracking-[0.06em] text-burgundy-950"
          >
            ოფიციალური ფრანჩაიზი · კავკასიის რეგიონი
          </motion.span>
          <motion.h2
            variants={fadeUpItem}
            className="mt-5 font-serif text-3xl font-semibold leading-[1.15] text-milk lg:text-[44px]"
          >
            „{title}"
          </motion.h2>
          <motion.p variants={fadeUpItem} className="mt-5 max-w-[62ch] leading-[1.7] text-milk/80">
            {lead}
          </motion.p>

          {/* program mini-cards */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            {programs.map((p) => (
              <motion.div
                key={p.title}
                variants={fadeUpItem}
                className="sheen flex-1 rounded-[20px] border border-gold-500/25 bg-white/[0.04] p-5 transition-all duration-300 hover:border-gold-500/50"
              >
                <h3 className="font-serif text-lg font-semibold leading-snug text-gold-300">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-[1.6] text-milk/70">{p.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* checklist */}
          <motion.ul variants={fadeUpItem} className="mt-8 flex flex-col gap-3.5">
            {checklist.map((item, i) => (
              <motion.li
                key={item}
                className="flex items-start gap-3 text-[15px] leading-relaxed text-milk/85"
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-10% 0px' }}
                transition={{ delay: 0.3 + i * 0.08, duration: 0.6, ease: EASE }}
              >
                <CheckDraw />
                {item}
              </motion.li>
            ))}
          </motion.ul>

          <motion.div variants={fadeUpItem} className="mt-9">
            <Link to="/contact" className={btnPrimary}>
              მოითხოვე პროგრამა
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
