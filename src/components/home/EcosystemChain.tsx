import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'
import { useLang } from '@/i18n/LanguageContext'

gsap.registerPlugin(ScrollTrigger, useGSAP)


// node positions on a 240-radius circle inside a 600 viewBox (top, right, bottom, left)
const NODES = [
  { x: 300, y: 60 },
  { x: 540, y: 300 },
  { x: 300, y: 540 },
  { x: 60, y: 300 },
]
const ARCS = [
  'M 374.2 71.8 A 240 240 0 0 1 528.2 225.8',
  'M 528.2 374.2 A 240 240 0 0 1 374.2 528.2',
  'M 225.8 528.2 A 240 240 0 0 1 71.8 374.2',
  'M 71.8 225.8 A 240 240 0 0 1 225.8 71.8',
]
const ARC_LEN = 227

const NODE_ICONS = [
  // chip
  (x: number, y: number) => (
    <g stroke="#EBD48A" strokeWidth={2.5} fill="none">
      <rect x={x - 14} y={y - 14} width={28} height={28} rx={4} />
      <path
        d={`M${x - 6} ${y - 22}v8M${x + 6} ${y - 22}v8M${x - 6} ${y + 14}v8M${x + 6} ${y + 14}v8M${x - 22} ${y - 6}h8M${x - 22} ${y + 6}h8M${x + 14} ${y - 6}h8M${x + 14} ${y + 6}h8`}
      />
    </g>
  ),
  // bottle
  (x: number, y: number) => (
    <g stroke="#EBD48A" strokeWidth={2.5} fill="none">
      <path
        d={`M${x - 5} ${y - 20}h10v10c8 4 11 10 11 18v14a6 6 0 0 1-6 6h-20a6 6 0 0 1-6-6v-14c0-8 3-14 11-18v-10z`}
      />
      <path d={`M${x - 5} ${y - 24}h10`} />
    </g>
  ),
  // truck
  (x: number, y: number) => (
    <g stroke="#EBD48A" strokeWidth={2.5} fill="none">
      <path d={`M${x - 18} ${y - 8}h20v16h-20zM${x + 2} ${y - 2}h10l6 6v4h-16z`} />
      <circle cx={x - 10} cy={y + 12} r={4} />
      <circle cx={x + 10} cy={y + 12} r={4} />
    </g>
  ),
  // graduation cap
  (x: number, y: number) => (
    <g stroke="#EBD48A" strokeWidth={2.5} fill="none">
      <path d={`M${x - 16} ${y - 16}l16 8 16-8-16-8z`} />
      <path d={`M${x - 8} ${y - 11}v10c0 4 16 4 16 0v-10`} />
      <path d={`M${x + 16} ${y - 16}v14`} />
    </g>
  ),
]

export default function EcosystemChain() {
  const { d } = useLang()
  const STAGES = d.home.chain.stages
  const sectionRef = useRef<HTMLElement>(null)
  const pinRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      // Desktop: pinned scroll-story, scrub-bound
      mm.add('(min-width: 1024px)', () => {
        const blocks = gsap.utils.toArray<HTMLElement>('.chain-block')
        const dots = gsap.utils.toArray<HTMLElement>('.chain-dot')
        const glows = gsap.utils.toArray<SVGCircleElement>('.chain-node-glow')
        const arcs = gsap.utils.toArray<SVGPathElement>('.chain-arc')

        gsap.set(blocks, { autoAlpha: 0, y: 20 })
        gsap.set(blocks[0], { autoAlpha: 1, y: 0 })
        gsap.set(glows, { opacity: 0 })
        gsap.set(glows[0], { opacity: 1 })
        gsap.set(dots, { scale: 1, opacity: 0.35 })
        gsap.set(dots[0], { scale: 1.6, opacity: 1 })
        arcs.forEach((a) => {
          a.style.strokeDasharray = `${ARC_LEN}`
          a.style.strokeDashoffset = `${ARC_LEN}`
        })
        if (arcs[0]) arcs[0].style.strokeDashoffset = '0'

        const tl = gsap.timeline({
          defaults: { ease: 'none' },
          scrollTrigger: {
            trigger: pinRef.current,
            start: 'top top',
            end: '+=180%',
            pin: true,
            scrub: 0.6,
            anticipatePin: 1,
          },
        })

        // stage transitions at t = 1, 2, 3 (stage 1 is visible from t=0)
        for (let i = 1; i < 4; i++) {
          tl.to(blocks[i - 1], { autoAlpha: 0, y: -20, duration: 0.35 }, i)
            .fromTo(
              blocks[i],
              { autoAlpha: 0, y: 20 },
              { autoAlpha: 1, y: 0, duration: 0.35 },
              i + 0.12,
            )
            .to(glows[i], { opacity: 1, duration: 0.3 }, i)
            .to(arcs[i], { strokeDashoffset: 0, duration: 0.5 }, i)
            .to(dots[i - 1], { scale: 1, opacity: 0.35, duration: 0.2 }, i)
            .to(dots[i], { scale: 1.6, opacity: 1, duration: 0.2 }, i)
        }
        // give the last stage breathing room
        tl.to({}, { duration: 0.6 })
      })

      // Mobile: vertical stack, reveal per stage
      mm.add('(max-width: 1023px)', () => {
        gsap.utils.toArray<HTMLElement>('.chain-mobile-card').forEach((card) => {
          gsap.fromTo(
            card,
            { autoAlpha: 0, y: 40 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.8,
              ease: 'power3.out',
              scrollTrigger: { trigger: card, start: 'top 82%', once: true },
            },
          )
        })
      })

      return () => mm.revert()
    },
    { scope: sectionRef },
  )

  return (
    <section
      id="chain"
      ref={sectionRef}
      data-theme="dark"
      className="relative overflow-hidden bg-burgundy-900"
    >
      <div className="grain-overlay" aria-hidden="true" />

      {/* ===== Desktop pinned version ===== */}
      <div ref={pinRef} className="relative hidden min-h-[100dvh] items-center pb-16 pt-28 lg:flex">
        <div className="mx-auto grid w-full max-w-[1280px] grid-cols-[auto_1fr_1fr] items-center gap-16 px-12">
          {/* progress dots */}
          <div className="flex flex-col items-center gap-5" aria-hidden="true">
            {STAGES.map((s, i) => (
              <div key={s.title} className="flex flex-col items-center gap-5">
                <span className="chain-dot block h-2.5 w-2.5 rounded-full bg-gold-500" />
                {i < STAGES.length - 1 && <span className="block h-8 w-px bg-gold-500/25" />}
              </div>
            ))}
          </div>

          {/* diagram */}
          <div>
            <p className="mb-3 flex items-center gap-3 text-xs font-semibold tracking-[0.06em] text-gold-400">
              <span className="inline-block h-px w-8 bg-gold-500" />
              {d.home.chain.eyebrow}
            </p>
            <h2 className="mb-8 font-serif text-4xl font-semibold text-milk">
              {d.home.chain.heading}
            </h2>
            <svg viewBox="0 0 600 600" className="w-full max-w-[520px]" role="img" aria-label={d.home.chain.diagramAria}>
              <defs>
                {/* gradient glow instead of an SVG blur filter — blur filters are
                    repainted every frame during scroll-scrubbing and cause jank */}
                <radialGradient id="chainNodeGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#C9A227" stopOpacity="0.55" />
                  <stop offset="55%" stopColor="#C9A227" stopOpacity="0.18" />
                  <stop offset="100%" stopColor="#C9A227" stopOpacity="0" />
                </radialGradient>
              </defs>
              <circle cx={300} cy={300} r={240} fill="none" stroke="#C9A227" strokeWidth={1} opacity={0.25} />
              <circle cx={300} cy={300} r={120} fill="none" stroke="#C9A227" strokeWidth={0.7} opacity={0.2} />
              {ARCS.map((d, i) => (
                <path
                  key={i}
                  className="chain-arc"
                  d={d}
                  fill="none"
                  stroke="#C9A227"
                  strokeWidth={2.5}
                  strokeLinecap="round"
                />
              ))}
              {/* center grape cluster */}
              <g stroke="#EBD48A" strokeWidth={2}>
                {/* stem */}
                <path d="M300 240 C300 232 306 226 314 222" fill="none" />
                {/* leaf */}
                <path d="M300 240 C286 230 268 232 260 244 C272 252 290 250 300 240 Z" fill="#3D0A18" />
                {/* berries */}
                <circle cx={300} cy={258} r={13} fill="#3D0A18" />
                <circle cx={283} cy={280} r={13} fill="#3D0A18" />
                <circle cx={317} cy={280} r={13} fill="#3D0A18" />
                <circle cx={267} cy={304} r={13} fill="#3D0A18" />
                <circle cx={300} cy={304} r={13} fill="#3D0A18" />
                <circle cx={333} cy={304} r={13} fill="#3D0A18" />
                <circle cx={283} cy={328} r={13} fill="#3D0A18" />
                <circle cx={317} cy={328} r={13} fill="#3D0A18" />
                <circle cx={300} cy={350} r={13} fill="#3D0A18" />
              </g>
              {NODES.map((n, i) => (
                <g key={i}>
                  <circle
                    className="chain-node-glow"
                    cx={n.x}
                    cy={n.y}
                    r={58}
                    fill="url(#chainNodeGlow)"
                    opacity={0}
                  />
                  <circle cx={n.x} cy={n.y} r={46} fill="#3D0A18" stroke="#C9A227" strokeWidth={2} />
                  <circle cx={n.x} cy={n.y} r={38} fill="none" stroke="#C9A227" strokeWidth={0.8} opacity={0.5} />
                  {NODE_ICONS[i](n.x, n.y)}
                </g>
              ))}
            </svg>
          </div>

          {/* stage text blocks (crossfade) */}
          <div className="relative min-h-[320px]">
            {STAGES.map((s, i) => (
              <div key={s.title} className="chain-block absolute inset-0 flex flex-col justify-center">
                <span className="font-display text-6xl font-semibold text-gold-500/30">
                  0{i + 1}
                </span>
                <h3 className="mt-4 font-serif text-3xl font-semibold text-gold-400">{s.title}</h3>
                <p className="mt-2 text-sm font-medium tracking-wide text-milk/60">{s.companies}</p>
                <p className="mt-5 max-w-[46ch] text-base leading-[1.7] text-milk/85">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== Mobile stacked version ===== */}
      <div className="mx-auto max-w-[1280px] px-6 py-20 lg:hidden">
        <p className="mb-3 flex items-center gap-3 text-xs font-semibold tracking-[0.06em] text-gold-400">
          <span className="inline-block h-px w-8 bg-gold-500" />
          {d.home.chain.eyebrow}
        </p>
        <h2 className="mb-10 font-serif text-3xl font-semibold text-milk">
          {d.home.chain.heading}
        </h2>
        <div className="flex flex-col gap-6">
          {STAGES.map((s, i) => (
            <div
              key={s.title}
              className="chain-mobile-card rounded-[20px] border border-gold-500/25 bg-burgundy-950/60 p-6"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-display text-4xl font-semibold text-gold-500/40">
                  0{i + 1}
                </span>
                <h3 className="font-serif text-2xl font-semibold text-gold-400">{s.title}</h3>
              </div>
              <p className="mt-2 text-xs font-medium tracking-wide text-milk/60">{s.companies}</p>
              <p className="mt-3 text-sm leading-[1.7] text-milk/85">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
