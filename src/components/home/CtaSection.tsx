import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router'
import { btnPrimary, btnSecondaryDark } from '@/lib/styles'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

export default function CtaSection() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  // slow vine-branch rotation on scroll
  const rotate = useTransform(scrollYProgress, [0, 1], [-12, 14])

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
        className="pointer-events-none absolute -right-16 -top-16 w-[380px] opacity-[0.15]"
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
          შეუერთდი <span className="font-display italic text-gold-400">ეკოსისტემას</span>
        </h2>
        <p className="mx-auto mt-5 max-w-[56ch] leading-[1.7] text-milk/80">
          დაგვიკავშირდი — ვიმსჯელოთ, რომელი კომპანია ან პროგრამა შეესაბამება შენს ბიზნესს.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link to="/contact" className={btnPrimary}>
            დაგვიკავშირდი
          </Link>
          <Link to="/ecosystem" className={btnSecondaryDark}>
            ნახე კომპანიები
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
