import { motion, useScroll, useTransform } from 'framer-motion'
import { Cpu, GraduationCap, Package, Truck } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useRef } from 'react'
import { useLang } from '@/i18n/LanguageContext'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

const STAGE_META: { icon: LucideIcon; companies: string }[] = [
  { icon: Cpu, companies: 'Winelens · VineAI · AgroAI · Oeno' },
  { icon: Package, companies: 'Vidrala · AggloTap · PortugalCork · Filtrox' },
  { icon: Truck, companies: 'Primelogistics · GS' },
  { icon: GraduationCap, companies: 'ISG · EWA' },
]

export default function FlowDiagram() {
  const { d } = useLang()
  const STAGES = STAGE_META.map((s, i) => ({ ...s, name: d.eco.flow.stages[i] }))
  const ref = useRef<HTMLElement>(null)
  // dashed gold line draws with scroll (scrub)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 85%', 'end 55%'],
  })
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section
      ref={ref}
      data-theme="dark"
      className="relative overflow-hidden bg-burgundy-900 py-[72px] lg:py-[120px]"
    >
      <div className="grain-overlay" aria-hidden="true" />
      <img
        src="/vine-branch.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -left-16 -top-16 w-[300px] opacity-[0.1]"
      />

      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15% 0px' }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-xs font-semibold tracking-[0.22em] text-gold-400">
            {d.eco.flow.eyebrow}
          </p>
          <h2 className="mt-4 font-serif text-3xl font-semibold leading-[1.15] text-milk lg:text-[44px]">
            {d.eco.flow.headingPre}<span className="font-display italic text-gold-400">{d.eco.flow.headingItalic}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[62ch] leading-[1.7] text-milk/75">
            {d.eco.flow.sub}
          </p>
        </motion.div>

        {/* flow: 4 stage nodes connected by a dashed gold line */}
        <div className="relative mt-14">
          {/* horizontal connector (desktop) */}
          <svg
            className="absolute left-0 top-9 hidden h-2 w-full lg:block"
            viewBox="0 0 1000 8"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <motion.path
              d="M 0 4 L 1000 4"
              fill="none"
              stroke="#C9A227"
              strokeOpacity="0.6"
              strokeWidth="2"
              strokeDasharray="8 10"
              style={{ pathLength }}
            />
          </svg>

          <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-4 lg:gap-6">
            {STAGES.map((stage, i) => (
              <motion.div
                key={stage.name}
                initial={{ opacity: 0, scale: 0.85, y: 24 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: '-15% 0px' }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: EASE }}
                className="relative flex flex-row items-center gap-5 lg:flex-col lg:text-center"
              >
                {/* vertical connector (mobile) */}
                {i < STAGES.length - 1 && (
                  <span
                    className="absolute left-9 top-[72px] h-[calc(100%-40px)] border-l-2 border-dashed border-gold-500/40 lg:hidden"
                    aria-hidden="true"
                  />
                )}
                <div className="gold-glow-node relative z-10 flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-full border border-gold-500/50 bg-burgundy-950">
                  <stage.icon className="h-7 w-7 text-gold-400" />
                </div>
                <div className="min-w-0 lg:mt-2">
                  <h3 className="font-serif text-xl font-semibold text-milk">{stage.name}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-milk/60">{stage.companies}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
