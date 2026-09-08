import { motion, useScroll, useTransform } from 'framer-motion'
import { memo, useRef } from 'react'
import type { ReactNode } from 'react'
import { Link } from 'react-router'
import { btnPrimary, btnSecondaryDark } from '@/lib/styles'
import { EASE } from './shared'

/** Subtle gold glow pulse on the primary CTA — isolated & memoized perpetual animation. */
const GlowPulse = memo(function GlowPulse({ children }: { children: ReactNode }) {
  return (
    <motion.div
      className="rounded-full"
      animate={{
        boxShadow: [
          '0 0 0 0 rgba(201,162,39,0.25)',
          '0 0 24px 4px rgba(201,162,39,0.4)',
          '0 0 0 0 rgba(201,162,39,0.25)',
        ],
      }}
      transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  )
})

export default function EduCta() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const rotate = useTransform(scrollYProgress, [0, 1], [-10, 12])

  return (
    <section
      ref={ref}
      data-theme="dark"
      className="bg-hero-gradient-reversed relative overflow-hidden py-[72px] lg:py-[120px]"
    >
      <motion.img
        src="/vine-branch.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -left-16 -top-16 w-[360px] opacity-[0.15]"
        style={{ rotate }}
      />
      <div className="grain-overlay" aria-hidden="true" />

      <motion.div
        className="relative mx-auto max-w-3xl px-6 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-20% 0px' }}
        transition={{ duration: 0.8, ease: EASE }}
      >
        <h2 className="font-serif text-3xl font-semibold text-milk lg:text-[44px] lg:leading-[1.15]">
          დაიწყე შენი <span className="font-display italic text-gold-400">პროფესიული</span> გზა
        </h2>
        <p className="mx-auto mt-5 max-w-[56ch] leading-[1.7] text-milk/80">
          სომელიერობა თუ ვისკი — ორივე მიმართულება იწყება ერთი განაცხადით.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <GlowPulse>
            <Link to="/contact" className={btnPrimary}>
              განაცხადის გაგზავნა
            </Link>
          </GlowPulse>
          <Link to="/ecosystem" className={btnSecondaryDark}>
            ეკოსისტემის ნახვა
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
