import { motion, useScroll, useTransform } from 'framer-motion'
import { Component, lazy, Suspense, useRef, type ReactNode } from 'react'
import { Link } from 'react-router'
import { scrollToId } from '@/hooks/use-lenis'
import { useLang } from '@/i18n/LanguageContext'
import { btnPrimary, btnSecondaryDark } from '@/lib/styles'

const WineMist = lazy(() => import('./WineMist'))

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

/** Hide the WebGL canvas silently if WebGL is unavailable (CSS blobs remain). */
class WebGLBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false }
  static getDerivedStateFromError() {
    return { failed: true }
  }
  render() {
    return this.state.failed ? null : this.props.children
  }
}

function WordReveal({ words, delay }: { words: { text: string; gold?: boolean }[]; delay: number }) {
  return (
    <>
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden pb-1 align-bottom">
          <motion.span
            className={`inline-block ${w.gold ? 'text-gold-400' : ''}`}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: delay + i * 0.09, duration: 0.9, ease: EASE }}
          >
            {w.text}
            {i < words.length - 1 ? ' ' : ''}
          </motion.span>
        </span>
      ))}
    </>
  )
}

export default function Hero() {
  const { d } = useLang()
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  // background 0.35x, content 0.85x parallax
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '35%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])

  const h1Words = d.home.hero.h1.map((text, i) => ({
    text,
    gold: i === d.home.hero.h1.length - 1,
  }))

  return (
    <section
      ref={ref}
      data-theme="dark"
      className="bg-hero-gradient relative -mt-20 flex min-h-[100dvh] items-center justify-center overflow-hidden"
    >
      {/* cellar photo, blend overlay, parallax 0.35x */}
      <motion.div className="absolute inset-0" style={{ y: bgY }} aria-hidden="true">
        <img
          src="/hero-cellar.png"
          alt=""
          className="h-[135%] w-full object-cover opacity-45 mix-blend-overlay"
        />
      </motion.div>

      {/* CSS radial-gradient blob fallback / base glow */}
      <div
        className="absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(40% 30% at 30% 40%, rgba(166,38,80,0.25), transparent 70%), radial-gradient(35% 28% at 72% 60%, rgba(201,162,39,0.14), transparent 70%)',
        }}
      />

      {/* 3D wine mist particles */}
      <WebGLBoundary>
        <Suspense fallback={null}>
          <div className="absolute inset-0" aria-hidden="true">
            <WineMist />
          </div>
        </Suspense>
      </WebGLBoundary>

      <div className="grain-overlay" aria-hidden="true" />

      {/* content, parallax 0.85x */}
      <motion.div
        className="relative z-10 mx-auto max-w-[900px] px-6 pb-28 pt-40 text-center"
        style={{ y: contentY }}
      >
        {/* eyebrow with animated gold lines */}
        <div className="mb-8 flex items-center justify-center gap-4">
          <motion.span
            className="h-px w-10 origin-right bg-gold-500"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.2, duration: 0.6, ease: EASE }}
          />
          <motion.span
            className="text-xs font-semibold tracking-[0.06em] text-gold-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {d.home.hero.eyebrow}
          </motion.span>
          <motion.span
            className="h-px w-10 origin-left bg-gold-500"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.2, duration: 0.6, ease: EASE }}
          />
        </div>

        <h1 className="font-serif text-[40px] font-semibold leading-[1.08] tracking-[-0.01em] text-milk md:text-6xl lg:text-[72px]">
          <WordReveal words={h1Words} delay={0.45} />
        </h1>

        <motion.p
          className="mx-auto mt-8 max-w-[62ch] text-base leading-[1.7] text-milk/80 md:text-lg"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7, ease: EASE }}
        >
          {d.home.hero.sub}
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12, delayChildren: 1.1 } },
          }}
        >
          <motion.button
            type="button"
            onClick={() => scrollToId('chain')}
            className={btnPrimary}
            variants={{
              hidden: { opacity: 0, y: 24 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
            }}
          >
            {d.home.hero.ctaPrimary}
          </motion.button>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 24 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
            }}
          >
            <Link to="/education" className={btnSecondaryDark}>
              {d.home.hero.ctaSecondary}
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* scroll indicator */}
      <motion.button
        type="button"
        onClick={() => scrollToId('chain')}
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        aria-label={d.home.hero.scroll}
      >
        <span className="text-[11px] font-medium tracking-[0.2em] text-gold-400/80">
          {d.home.hero.scroll}
        </span>
        <span className="animate-scroll-bounce block h-10 w-px bg-gradient-to-b from-gold-500 to-transparent" />
      </motion.button>
    </section>
  )
}
