import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import {
  ArrowRight,
  Check,
  CircleDot,
  Factory,
  Layers3,
  Network,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Sprout,
  Truck,
} from 'lucide-react'
import { useLang } from '@/i18n/LanguageContext'
import BrandFilm from '@/components/home/BrandFilm'

type GoalKey = 'newWinery' | 'upgrade' | 'vineyard' | 'filtration' | 'packaging' | 'logistics' | 'complete'

type Partner = {
  name: string
  descriptor: string
  href?: string
}

const partners: Partner[] = [
  { name: 'VineAI', descriptor: 'Vineyard intelligence', href: 'https://vineai.ge' },
  { name: 'AgroAI', descriptor: 'Agriculture intelligence', href: 'https://agroai.ge' },
  { name: 'Oeno', descriptor: 'Enology & beverage technology', href: 'https://oeno.ge' },
  { name: 'FILTROX', descriptor: 'Process filtration', href: 'https://filtrox.ge' },
  { name: 'Vidrala', descriptor: 'Glass packaging', href: 'https://vidrala.ge' },
  { name: 'Portugalia Cork', descriptor: 'Natural closures', href: 'https://portugaliacork.ge' },
  { name: 'Agglotap', descriptor: 'Closure systems', href: 'https://agglotap.ge' },
  { name: 'Prime Logistics', descriptor: 'Logistics & fulfillment', href: 'https://primelogistics.ge' },
  { name: 'GS Consulting', descriptor: 'Strategy & project coordination' },
]

export default function PlatformHome() {
  const { lang } = useLang()
  const [activeGoal, setActiveGoal] = useState<GoalKey>('newWinery')
  const [brief, setBrief] = useState('')

  const c = lang === 'ka' ? ka : en
  const goal = c.goals.find((item) => item.key === activeGoal) ?? c.goals[0]

  const mappedSolution = useMemo(() => {
    const map: Record<GoalKey, string[]> = {
      newWinery: ['MAKE', 'PACK', 'MOVE & SCALE'],
      upgrade: ['MAKE', 'PACK'],
      vineyard: ['GROW'],
      filtration: ['MAKE'],
      packaging: ['PACK', 'MOVE & SCALE'],
      logistics: ['MOVE & SCALE'],
      complete: ['GROW', 'MAKE', 'PACK', 'MOVE & SCALE'],
    }
    return map[activeGoal]
  }, [activeGoal])

  return (
    <div className="overflow-hidden bg-[#f3efe7] text-[#171717]">
      <section className="relative min-h-[92vh] bg-[#151515] text-[#f4efe5]">
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(255,255,255,.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.13)_1px,transparent_1px)] [background-size:9vw_9vw]" />
        <div className="absolute -right-40 top-12 h-[620px] w-[620px] rounded-full bg-[#7b273d]/20 blur-[110px]" />
        <div className="absolute -left-40 bottom-0 h-[440px] w-[440px] rounded-full bg-[#b77a4d]/10 blur-[100px]" />

        <div className="relative mx-auto grid min-h-[92vh] max-w-[1600px] grid-cols-1 items-center gap-16 px-6 pb-20 pt-32 md:px-10 lg:grid-cols-[1.04fr_.96fr] lg:px-16 xl:px-20">
          <div className="max-w-4xl">
            <div className="mb-8 flex items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#b9b4ab]">
              <span className="h-px w-10 bg-[#b77a4d]" />
              {c.hero.eyebrow}
            </div>
            <h1 className="max-w-4xl font-serif text-[clamp(4rem,8.2vw,9rem)] font-medium leading-[0.83] tracking-[-0.055em]">
              {c.hero.line1}
              <span className="mt-3 block italic text-[#c28358]">{c.hero.line2}</span>
            </h1>
            <p className="mt-10 max-w-2xl text-base leading-7 text-[#bcb8b1] md:text-xl md:leading-8">
              {c.hero.lead}
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href="#solution-builder" className="inline-flex min-h-14 items-center justify-between gap-10 bg-[#b77a4d] px-6 text-xs font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-[#c98b61]">
                {c.hero.primary}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#capabilities" className="inline-flex min-h-14 items-center justify-between gap-10 border border-white/20 px-6 text-xs font-semibold uppercase tracking-[0.12em] transition hover:bg-white hover:text-black">
                {c.hero.secondary}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="mt-14 grid max-w-2xl grid-cols-3 border-t border-white/15 pt-6">
              {c.hero.proof.map((item) => (
                <div key={item.label} className="border-r border-white/10 pr-4 last:border-r-0 sm:pr-8">
                  <strong className="font-serif text-3xl font-medium text-[#c28358]">{item.value}</strong>
                  <span className="mt-1 block text-[9px] uppercase leading-4 tracking-[0.16em] text-[#8f8d88]">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[680px]">
            <div className="absolute inset-[-8%] rounded-full border border-white/10" />
            <div className="absolute inset-[4%] rounded-full border border-dashed border-[#b77a4d]/30" />
            <div className="relative grid aspect-square place-items-center">
              <div className="absolute left-1/2 top-[5%] -translate-x-1/2 text-center">
                <PillarNode index="01" title="GROW" subtitle={c.pillarShort.grow} />
              </div>
              <div className="absolute right-[1%] top-1/2 -translate-y-1/2 text-right">
                <PillarNode index="02" title="MAKE" subtitle={c.pillarShort.make} />
              </div>
              <div className="absolute bottom-[4%] left-1/2 -translate-x-1/2 text-center">
                <PillarNode index="03" title="PACK" subtitle={c.pillarShort.pack} />
              </div>
              <div className="absolute left-[-2%] top-1/2 -translate-y-1/2">
                <PillarNode index="04" title="MOVE & SCALE" subtitle={c.pillarShort.move} />
              </div>

              <div className="grid h-52 w-52 place-items-center rounded-full border border-[#c28358]/60 bg-[#191919] shadow-[0_0_70px_rgba(183,122,77,.12)]">
                <div className="text-center">
                  <span className="block text-xs uppercase tracking-[0.36em] text-[#bdb7ae]">OENO</span>
                  <strong className="mt-1 block text-4xl tracking-[0.16em] text-[#c28358]">HUB</strong>
                  <span className="mt-3 block text-[8px] uppercase tracking-[0.2em] text-[#777]">{c.hero.core}</span>
                </div>
              </div>

              <div className="absolute h-[70%] w-px bg-gradient-to-b from-transparent via-white/15 to-transparent" />
              <div className="absolute h-px w-[70%] bg-gradient-to-r from-transparent via-white/15 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <BrandFilm />

      <section className="mx-auto max-w-[1500px] px-6 py-24 md:px-10 lg:px-16 lg:py-32 xl:px-20">
        <div className="grid gap-10 lg:grid-cols-[.55fr_1.45fr]">
          <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8d6042]">01 / {c.objective.label}</div>
          <div>
            <p className="mb-5 text-sm text-[#8d6042]">{c.objective.kicker}</p>
            <h2 className="max-w-5xl font-serif text-[clamp(2.8rem,5.2vw,6.4rem)] leading-[0.96] tracking-[-0.045em]">{c.objective.title}</h2>
          </div>
        </div>

        <div className="mt-16 grid border-l border-t border-black/15 sm:grid-cols-2 lg:grid-cols-4">
          {c.goals.map((item, idx) => (
            <button
              key={item.key}
              type="button"
              onClick={() => setActiveGoal(item.key)}
              className={`group min-h-48 border-b border-r border-black/15 p-6 text-left transition md:p-7 ${activeGoal === item.key ? 'bg-[#171717] text-white' : 'hover:bg-[#e7dfd2]'}`}
            >
              <span className={`text-[10px] tracking-[0.18em] ${activeGoal === item.key ? 'text-[#c28358]' : 'text-[#8b694f]'}`}>{String(idx + 1).padStart(2, '0')}</span>
              <h3 className="mt-8 max-w-[15rem] font-serif text-2xl leading-tight">{item.title}</h3>
              <p className={`mt-3 max-w-[17rem] text-xs leading-5 ${activeGoal === item.key ? 'text-white/55' : 'text-black/50'}`}>{item.text}</p>
              <ArrowRight className={`mt-7 h-4 w-4 transition group-hover:translate-x-1 ${activeGoal === item.key ? 'text-[#c28358]' : 'text-[#8d6042]'}`} />
            </button>
          ))}
        </div>
      </section>

      <section id="capabilities" className="bg-[#1a1a1a] text-[#f4efe5]">
        <div className="mx-auto max-w-[1500px] px-6 py-24 md:px-10 lg:px-16 lg:py-32 xl:px-20">
          <div className="grid gap-10 lg:grid-cols-[.55fr_1.45fr]">
            <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c28358]">02 / {c.capabilities.label}</div>
            <div>
              <p className="mb-5 text-sm text-[#c28358]">{c.capabilities.kicker}</p>
              <h2 className="max-w-5xl font-serif text-[clamp(2.8rem,5vw,6rem)] leading-[0.98] tracking-[-0.045em]">{c.capabilities.title}</h2>
            </div>
          </div>

          <div className="mt-16 grid gap-px bg-white/10 lg:grid-cols-4">
            <PillarCard icon={<Sprout />} number="01" title="GROW" description={c.pillars.grow.text} brands="VineAI · AgroAI" />
            <PillarCard icon={<Factory />} number="02" title="MAKE" description={c.pillars.make.text} brands="Oeno · FILTROX" />
            <PillarCard icon={<PackageCheck />} number="03" title="PACK" description={c.pillars.pack.text} brands="Vidrala · Portugalia Cork · Agglotap" />
            <PillarCard icon={<Truck />} number="04" title="MOVE & SCALE" description={c.pillars.move.text} brands="Prime Logistics · GS Consulting" />
          </div>
        </div>
      </section>

      <section id="solution-builder" className="mx-auto max-w-[1500px] px-6 py-24 md:px-10 lg:px-16 lg:py-32 xl:px-20">
        <div className="grid gap-12 xl:grid-cols-[.85fr_1.15fr]">
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8d6042]">03 / {c.builder.label}</div>
            <h2 className="mt-8 max-w-3xl font-serif text-[clamp(3rem,5.3vw,6.4rem)] leading-[.94] tracking-[-0.05em]">{c.builder.title}</h2>
            <p className="mt-7 max-w-xl text-sm leading-7 text-black/55 md:text-base">{c.builder.lead}</p>

            <div className="mt-10 border border-black/15 bg-[#ebe4d8] p-5 md:p-7">
              <label className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#7f5a42]">{c.builder.briefLabel}</label>
              <textarea
                value={brief}
                onChange={(e) => setBrief(e.target.value)}
                placeholder={c.builder.placeholder}
                className="mt-4 min-h-32 w-full resize-none border-0 bg-transparent p-0 text-base leading-7 outline-none placeholder:text-black/30"
              />
              <div className="mt-5 flex items-center justify-between border-t border-black/10 pt-5">
                <span className="text-[10px] uppercase tracking-[0.14em] text-black/40">{goal.title}</span>
                <button type="button" className="inline-flex items-center gap-2 bg-[#171717] px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-[#8d6042]">
                  <Sparkles className="h-3.5 w-3.5" />
                  {c.builder.mapButton}
                </button>
              </div>
            </div>
          </div>

          <div className="border border-black/15 bg-[#171717] p-6 text-white md:p-9">
            <div className="flex items-center justify-between border-b border-white/10 pb-6">
              <div>
                <span className="text-[9px] uppercase tracking-[0.2em] text-[#c28358]">{c.builder.outputLabel}</span>
                <h3 className="mt-2 font-serif text-3xl">{goal.title}</h3>
              </div>
              <Network className="h-8 w-8 text-[#c28358]" />
            </div>

            <div className="mt-7 space-y-3">
              {mappedSolution.map((name) => (
                <div key={name} className="flex items-center justify-between border border-white/10 bg-white/[0.025] px-4 py-4">
                  <div className="flex items-center gap-3">
                    <CircleDot className="h-4 w-4 text-[#c28358]" />
                    <span className="text-xs font-semibold tracking-[0.1em]">{name}</span>
                  </div>
                  <span className="text-[9px] uppercase tracking-[0.12em] text-white/45">{c.builder.relevant}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-4 border-t border-white/10 pt-7 sm:grid-cols-3">
              {c.builder.steps.map((step, index) => (
                <div key={step}>
                  <span className="text-[9px] text-[#c28358]">0{index + 1}</span>
                  <p className="mt-2 text-xs leading-5 text-white/55">{step}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-[10px] leading-5 text-white/35">{c.builder.disclaimer}</p>
          </div>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#e5ddd0]">
        <div className="mx-auto max-w-[1500px] px-6 py-24 md:px-10 lg:px-16 lg:py-28 xl:px-20">
          <div className="grid items-end gap-10 lg:grid-cols-[1.1fr_.9fr]">
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8d6042]">04 / {c.partners.label}</div>
              <h2 className="mt-7 max-w-4xl font-serif text-[clamp(3rem,5vw,6rem)] leading-[.96] tracking-[-0.05em]">{c.partners.title}</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-black/55 md:text-base">{c.partners.lead}</p>
          </div>

          <div className="mt-14 grid border-l border-t border-black/15 sm:grid-cols-2 lg:grid-cols-3">
            {partners.map((partner) => {
              const content = (
                <>
                  <div>
                    <strong className="font-serif text-2xl font-medium">{partner.name}</strong>
                    <span className="mt-2 block text-[10px] uppercase tracking-[0.14em] text-black/40">{partner.descriptor}</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-[#8d6042] transition group-hover:translate-x-1" />
                </>
              )
              return partner.href ? (
                <a key={partner.name} href={partner.href} target="_blank" rel="noreferrer" className="group flex min-h-32 items-center justify-between border-b border-r border-black/15 p-6 transition hover:bg-[#f3efe7]">
                  {content}
                </a>
              ) : (
                <div key={partner.name} className="group flex min-h-32 items-center justify-between border-b border-r border-black/15 p-6">
                  {content}
                </div>
              )
            })}
          </div>
          <p className="mt-6 max-w-3xl text-[10px] leading-5 text-black/40">{c.partners.note}</p>
        </div>
      </section>

      <section className="mx-auto max-w-[1500px] px-6 py-24 md:px-10 lg:px-16 lg:py-32 xl:px-20">
        <div className="grid gap-14 lg:grid-cols-[.78fr_1.22fr]">
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8d6042]">05 / {c.account.label}</div>
            <h2 className="mt-8 max-w-2xl font-serif text-[clamp(3.2rem,5vw,6.2rem)] leading-[.94] tracking-[-0.05em]">{c.account.title}</h2>
            <p className="mt-7 max-w-lg text-sm leading-7 text-black/55 md:text-base">{c.account.lead}</p>
          </div>

          <div className="border border-black/15 bg-white/35 p-5 md:p-8">
            <div className="flex flex-col gap-4 border-b border-black/10 pb-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <span className="text-[9px] uppercase tracking-[0.18em] text-[#8d6042]">{c.account.demo}</span>
                <h3 className="mt-2 font-serif text-3xl">Project #OH-2026-017</h3>
              </div>
              <div className="inline-flex w-fit items-center gap-2 border border-black/10 px-3 py-2 text-[9px] uppercase tracking-[0.14em] text-black/45">
                <ShieldCheck className="h-3.5 w-3.5 text-[#8d6042]" />
                {c.account.owner}
              </div>
            </div>
            <div className="mt-5 divide-y divide-black/10 border-y border-black/10">
              {c.account.rows.map((row) => (
                <div key={row.name} className="grid grid-cols-[1fr_auto] items-center gap-6 py-4 sm:grid-cols-[1.2fr_.8fr_auto]">
                  <span className="text-sm font-medium">{row.name}</span>
                  <span className="hidden text-xs text-black/40 sm:block">{row.partner}</span>
                  <span className={`inline-flex items-center gap-2 text-[9px] uppercase tracking-[0.12em] ${row.state === 'done' ? 'text-[#5c724c]' : row.state === 'review' ? 'text-[#8d6042]' : 'text-black/35'}`}>
                    {row.state === 'done' ? <Check className="h-3.5 w-3.5" /> : <CircleDot className="h-3.5 w-3.5" />}
                    {row.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#3d1722] text-white">
        <div className="mx-auto grid max-w-[1500px] gap-12 px-6 py-20 md:px-10 lg:grid-cols-[1.1fr_.9fr] lg:px-16 lg:py-24 xl:px-20">
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#d5ad78]">06 / {c.education.label}</span>
            <h2 className="mt-6 max-w-3xl font-serif text-[clamp(2.6rem,4.2vw,5rem)] leading-[.98] tracking-[-0.04em]">{c.education.title}</h2>
          </div>
          <div className="grid gap-px bg-white/10 sm:grid-cols-2">
            {c.education.items.map((item) => (
              <div key={item.name} className="bg-[#3d1722] p-6">
                <span className="text-[9px] uppercase tracking-[0.16em] text-[#d5ad78]">{item.type}</span>
                <strong className="mt-4 block font-serif text-2xl">{item.name}</strong>
                <p className="mt-3 text-xs leading-5 text-white/50">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#151515] text-white">
        <div className="mx-auto grid max-w-[1500px] items-end gap-12 px-6 py-24 md:px-10 lg:grid-cols-[1.2fr_.8fr] lg:px-16 lg:py-32 xl:px-20">
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c28358]">07 / OENO HUB</span>
            <h2 className="mt-7 max-w-4xl font-serif text-[clamp(3.4rem,6vw,7rem)] leading-[.9] tracking-[-0.055em]">{c.cta.title}</h2>
          </div>
          <div>
            <p className="max-w-xl text-sm leading-7 text-white/50 md:text-base">{c.cta.lead}</p>
            <Link to="/contact" className="mt-8 inline-flex min-h-14 items-center justify-between gap-12 bg-[#b77a4d] px-6 text-xs font-semibold uppercase tracking-[0.12em] transition hover:bg-[#c98b61]">
              {c.cta.button}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

function PillarNode({ index, title, subtitle }: { index: string; title: string; subtitle: string }) {
  return (
    <div className="max-w-[150px]">
      <span className="text-[8px] tracking-[0.2em] text-[#c28358]">{index}</span>
      <strong className="mt-1 block text-[11px] tracking-[0.13em] text-[#f4efe5]">{title}</strong>
      <span className="mt-1 block text-[7px] uppercase leading-3 tracking-[0.12em] text-[#70706f]">{subtitle}</span>
    </div>
  )
}

function PillarCard({ icon, number, title, description, brands }: { icon: React.ReactNode; number: string; title: string; description: string; brands: string }) {
  return (
    <article className="group min-h-[390px] bg-[#1a1a1a] p-7 transition hover:bg-[#202020] md:p-8">
      <div className="flex items-center justify-between text-[#c28358]">
        <div className="[&>svg]:h-7 [&>svg]:w-7 [&>svg]:stroke-[1.2]">{icon}</div>
        <span className="text-[9px] tracking-[0.18em]">{number}</span>
      </div>
      <h3 className="mt-16 text-sm font-semibold tracking-[0.18em]">{title}</h3>
      <p className="mt-5 max-w-[17rem] text-sm leading-6 text-white/45">{description}</p>
      <div className="mt-12 border-t border-white/10 pt-5 text-[9px] uppercase leading-5 tracking-[0.12em] text-[#9a9791]">{brands}</div>
    </article>
  )
}

const en = {
  hero: {
    eyebrow: 'Wine · Beverage · Viticulture operating platform',
    line1: 'One ecosystem.',
    line2: 'Every critical stage.',
    lead: 'Technology, expertise and supply solutions across viticulture, beverage production, filtration, packaging and logistics — coordinated through one commercial interface.',
    primary: 'Start a project',
    secondary: 'Explore capabilities',
    core: 'one coordinated interface',
    proof: [
      { value: '04', label: 'integrated capability pillars' },
      { value: '01', label: 'project brief and account owner' },
      { value: '09', label: 'specialist companies and platforms' },
    ],
  },
  pillarShort: { grow: 'field intelligence', make: 'process technology', pack: 'packaging systems', move: 'logistics & strategy' },
  objective: { label: 'START WITH THE OBJECTIVE', kicker: 'The customer starts with the requirement — not our company chart.', title: 'What are you trying to achieve?' },
  goals: [
    { key: 'newWinery' as GoalKey, title: 'Build a new winery', text: 'Coordinate production technology, filtration, packaging and logistics from one brief.' },
    { key: 'upgrade' as GoalKey, title: 'Upgrade an existing facility', text: 'Improve process performance, filtration, packaging or operational efficiency.' },
    { key: 'vineyard' as GoalKey, title: 'Digitize vineyard operations', text: 'Add monitoring, agronomic intelligence and AI-assisted decision support.' },
    { key: 'filtration' as GoalKey, title: 'Solve a filtration challenge', text: 'Map the application, process stage and suitable filtration architecture.' },
    { key: 'packaging' as GoalKey, title: 'Build a packaging system', text: 'Coordinate bottle, closure compatibility and supply requirements.' },
    { key: 'logistics' as GoalKey, title: 'Move product efficiently', text: 'Plan transport, consolidation, warehousing and fulfillment.' },
    { key: 'complete' as GoalKey, title: 'Coordinate a complete project', text: 'Bring multiple specialist workstreams together under one project owner.' },
  ],
  capabilities: { label: 'FOUR CAPABILITIES', kicker: 'Simpler outside. Specialized inside.', title: 'Four operating pillars replace nine disconnected entry points.' },
  pillars: {
    grow: { text: 'Vineyard and agricultural intelligence, monitoring, diagnostics and field-level decision support.' },
    make: { text: 'Enology, beverage production and professional process filtration across critical production stages.' },
    pack: { text: 'Glass packaging plus natural and technical closure systems aligned to product and bottling requirements.' },
    move: { text: 'International logistics, fulfillment, commercial coordination, sourcing and project strategy.' },
  },
  builder: {
    label: 'SOLUTION MAPPING',
    title: 'Describe the project. Map the system.',
    lead: 'OENO HUB should behave like a solution engine, not a supplier directory. This interface turns the selected business objective into a preliminary cross-company project map.',
    briefLabel: 'Project brief',
    placeholder: 'Example: 500,000 bottle winery, white wine focus, filtration + bottle + closure + logistics required…',
    mapButton: 'Map solution',
    outputLabel: 'PRELIMINARY SOLUTION MAP',
    relevant: 'relevant workstream',
    steps: ['Define technical and commercial requirements.', 'Assign the relevant specialist companies.', 'Prepare one coordinated next-step scope.'],
    disclaimer: 'Preliminary guidance only. Final product, process and commercial recommendations require specialist review.',
  },
  partners: {
    label: 'SPECIALIST NETWORK',
    title: 'Expertise is the proof. Not the homepage product.',
    lead: 'The platform presents specialist companies as evidence of capability after the customer understands the solution model — not as an undifferentiated logo wall at the top of the journey.',
    note: 'Relationship labels and territorial claims should always match the underlying commercial agreement. Official logo assets can be added here once the approved brand files are collected.',
  },
  account: {
    label: 'MY OENO HUB',
    title: 'One brief. One project. One account.',
    lead: 'The long-term value of OENO HUB is the workflow layer: one account owner coordinating multiple suppliers, quotations, documents, logistics and technical follow-up.',
    demo: 'CLIENT PORTAL CONCEPT',
    owner: 'one account owner',
    rows: [
      { name: 'Production', partner: 'Oeno', status: 'Defined', state: 'done' },
      { name: 'Filtration', partner: 'FILTROX', status: 'Under review', state: 'review' },
      { name: 'Bottle', partner: 'Vidrala', status: 'Quote received', state: 'done' },
      { name: 'Closure', partner: 'Portugalia Cork / Agglotap', status: 'Samples requested', state: 'review' },
      { name: 'Logistics', partner: 'Prime Logistics', status: 'Pending', state: 'pending' },
    ],
  },
  education: {
    label: 'PROFESSIONAL CAPABILITY',
    title: 'Education supports authority — without distracting from the commercial platform.',
    items: [
      { type: 'WINE EDUCATION', name: 'International Sommelier Guild', text: 'Professional wine education capability within the broader ecosystem.' },
      { type: 'SPIRITS EDUCATION', name: 'Edinburgh Whisky Academy', text: 'Professional whisky and spirits education capability for the regional market.' },
    ],
  },
  cta: { title: 'Bring us the objective.', lead: 'Tell OENO HUB what you are building, upgrading or trying to solve. We coordinate the relevant technical and commercial workstreams.', button: 'Start the project brief' },
}

const ka = {
  hero: {
    eyebrow: 'ღვინო · სასმელები · მევენახეობა — ერთიანი ოპერაციული პლატფორმა',
    line1: 'ერთი ეკოსისტემა.',
    line2: 'ყველა კრიტიკული ეტაპი.',
    lead: 'ტექნოლოგია, ექსპერტიზა და მიწოდების გადაწყვეტილებები მევენახეობაში, სასმელების წარმოებაში, ფილტრაციაში, შეფუთვასა და ლოგისტიკაში — ერთი კომერციული ინტერფეისის ქვეშ.',
    primary: 'დაიწყე პროექტი',
    secondary: 'ნახე შესაძლებლობები',
    core: 'ერთი კოორდინირებული ინტერფეისი',
    proof: [
      { value: '04', label: 'ინტეგრირებული მიმართულება' },
      { value: '01', label: 'პროექტის brief და account owner' },
      { value: '09', label: 'სპეციალიზებული კომპანია და პლატფორმა' },
    ],
  },
  pillarShort: { grow: 'საველე ინტელექტი', make: 'წარმოების ტექნოლოგია', pack: 'შეფუთვის სისტემები', move: 'ლოგისტიკა და სტრატეგია' },
  objective: { label: 'დაიწყე მიზნიდან', kicker: 'მომხმარებელი იწყებს მოთხოვნიდან — არა ჩვენი კომპანიების ჩამონათვალიდან.', title: 'რის მიღწევას ცდილობ?' },
  goals: [
    { key: 'newWinery' as GoalKey, title: 'ახალი ღვინის საწარმოს შექმნა', text: 'ერთი brief-ით დავაკავშიროთ წარმოება, ფილტრაცია, შეფუთვა და ლოგისტიკა.' },
    { key: 'upgrade' as GoalKey, title: 'არსებული საწარმოს განახლება', text: 'გავაუმჯობესოთ პროცესი, ფილტრაცია, შეფუთვა ან ოპერაციული ეფექტიანობა.' },
    { key: 'vineyard' as GoalKey, title: 'ვენახის ციფრული მართვა', text: 'მონიტორინგი, აგრონომიული ინტელექტი და AI-ზე დაფუძნებული გადაწყვეტილებები.' },
    { key: 'filtration' as GoalKey, title: 'ფილტრაციის პრობლემის გადაწყვეტა', text: 'განვსაზღვროთ გამოყენება, პროცესის ეტაპი და შესაბამისი ფილტრაციის არქიტექტურა.' },
    { key: 'packaging' as GoalKey, title: 'შეფუთვის სისტემის აწყობა', text: 'ბოთლის, საცობის თავსებადობისა და მიწოდების მოთხოვნების ერთიანი კოორდინაცია.' },
    { key: 'logistics' as GoalKey, title: 'პროდუქტის ეფექტიანი ლოგისტიკა', text: 'ტრანსპორტირება, კონსოლიდაცია, საწყობი და fulfillment ერთ გეგმაში.' },
    { key: 'complete' as GoalKey, title: 'სრული პროექტის კოორდინაცია', text: 'რამდენიმე სპეციალისტის სამუშაო გავაერთიანოთ ერთი project owner-ის ქვეშ.' },
  ],
  capabilities: { label: 'ოთხი მიმართულება', kicker: 'გარედან მარტივი. შიგნით — სპეციალიზებული.', title: 'ცხრა ცალკე შესასვლელის ნაცვლად — ოთხი გასაგები ოპერაციული მიმართულება.' },
  pillars: {
    grow: { text: 'ვენახისა და აგროკულტურების ინტელექტი, მონიტორინგი, დიაგნოსტიკა და საველე გადაწყვეტილებების მხარდაჭერა.' },
    make: { text: 'ენოლოგია, სასმელების წარმოება და პროფესიონალური პროცესული ფილტრაცია წარმოების კრიტიკულ ეტაპებზე.' },
    pack: { text: 'მინის შეფუთვა და ბუნებრივი/ტექნიკური საცობების სისტემები პროდუქტისა და ჩამოსხმის მოთხოვნებთან შესაბამისობაში.' },
    move: { text: 'საერთაშორისო ლოგისტიკა, fulfillment, კომერციული კოორდინაცია, sourcing და პროექტის სტრატეგია.' },
  },
  builder: {
    label: 'გადაწყვეტილების რუკა',
    title: 'აღწერე პროექტი. ააწყე სისტემა.',
    lead: 'OENO HUB უნდა მუშაობდეს როგორც Solution Engine და არა მომწოდებლების დირექტორია. ეს ინტერფეისი ბიზნეს მიზანს გარდაქმნის რამდენიმე კომპანიის ერთიან საპროექტო რუკად.',
    briefLabel: 'პროექტის brief',
    placeholder: 'მაგალითი: 500,000 ბოთლის საწარმო, თეთრი ღვინო, საჭიროა ფილტრაცია + ბოთლი + საცობი + ლოგისტიკა…',
    mapButton: 'ააწყე რუკა',
    outputLabel: 'საწყისი SOLUTION MAP',
    relevant: 'შესაბამისი მიმართულება',
    steps: ['ვადგენთ ტექნიკურ და კომერციულ მოთხოვნებს.', 'ვაერთებთ შესაბამის სპეციალისტ კომპანიებს.', 'ვქმნით ერთიან შემდეგი ნაბიჯების scope-ს.'],
    disclaimer: 'ეს არის საწყისი მიმართულება. საბოლოო პროდუქტის, პროცესისა და კომერციული რეკომენდაციებისთვის საჭიროა სპეციალისტის განხილვა.',
  },
  partners: {
    label: 'სპეციალისტების ქსელი',
    title: 'ექსპერტიზა არის მტკიცებულება — არა მთავარი პროდუქტი.',
    lead: 'პარტნიორი კომპანიები უნდა გამოჩნდნენ მას შემდეგ, რაც მომხმარებელი გაიგებს OENO HUB-ის გადაწყვეტის მოდელს. ლოგოები გვაძლევს ნდობის მტკიცებულებას, მაგრამ არ ცვლის პლატფორმის ღირებულებას.',
    note: 'ყველა relationship label და ტერიტორიული სტატუსი ზუსტად უნდა ემთხვეოდეს შესაბამის კომერციულ ხელშეკრულებას. ოფიციალურ ლოგოებს ამ ბლოკში approved brand files-ის შეგროვების შემდეგ ჩავამატებთ.',
  },
  account: {
    label: 'MY OENO HUB',
    title: 'ერთი brief. ერთი პროექტი. ერთი ანგარიში.',
    lead: 'OENO HUB-ის გრძელვადიანი ღირებულება workflow-ია: ერთი account owner კოორდინირებს რამდენიმე მომწოდებელს, შეთავაზებებს, დოკუმენტებს, ლოგისტიკასა და ტექნიკურ follow-up-ს.',
    demo: 'კლიენტის პორტალის კონცეფცია',
    owner: 'ერთი account owner',
    rows: [
      { name: 'წარმოება', partner: 'Oeno', status: 'განსაზღვრულია', state: 'done' },
      { name: 'ფილტრაცია', partner: 'FILTROX', status: 'განხილვაშია', state: 'review' },
      { name: 'ბოთლი', partner: 'Vidrala', status: 'შეთავაზება მიღებულია', state: 'done' },
      { name: 'საცობი', partner: 'Portugalia Cork / Agglotap', status: 'ნიმუშები მოთხოვნილია', state: 'review' },
      { name: 'ლოგისტიკა', partner: 'Prime Logistics', status: 'მოლოდინშია', state: 'pending' },
    ],
  },
  education: {
    label: 'პროფესიული კომპეტენცია',
    title: 'განათლება აძლიერებს ავტორიტეტს — კომერციული პლატფორმის გადაფარვის გარეშე.',
    items: [
      { type: 'ღვინის განათლება', name: 'International Sommelier Guild', text: 'ღვინის პროფესიული განათლების კომპეტენცია ფართო ეკოსისტემის ფარგლებში.' },
      { type: 'სპირტიანი სასმელების განათლება', name: 'Edinburgh Whisky Academy', text: 'ვისკისა და სპირტიანი სასმელების პროფესიული განათლების კომპეტენცია რეგიონული ბაზრისთვის.' },
    ],
  },
  cta: { title: 'მოგვიტანე მიზანი.', lead: 'გვითხარი რას აშენებ, რას აახლებ ან რა პრობლემის გადაწყვეტას ცდილობ. OENO HUB შესაბამის ტექნიკურ და კომერციულ მიმართულებებს ერთ პროექტად შეკრავს.', button: 'პროექტის brief-ის დაწყება' },
}
