import { motion } from 'framer-motion'
import { Link } from 'react-router'
import { btnPrimary, btnSecondaryDark } from '@/lib/styles'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

export default function AboutCta() {
  return (
    <section
      data-theme="dark"
      className="bg-hero-gradient-reversed relative overflow-hidden py-[72px] lg:py-[120px]"
    >
      <div className="grain-overlay" aria-hidden="true" />
      <motion.div
        className="relative mx-auto max-w-3xl px-6 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-20% 0px' }}
        transition={{ duration: 0.8, ease: EASE }}
      >
        <h2 className="font-serif text-3xl font-semibold text-milk lg:text-[44px] lg:leading-[1.15]">
          გაიცანი <span className="font-display italic text-gold-400">ეკოსისტემა</span> ახლოდან
        </h2>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link to="/ecosystem" className={btnPrimary}>
            10 კომპანია
          </Link>
          <Link to="/contact" className={btnSecondaryDark}>
            კონტაქტი
          </Link>
        </div>
      </motion.div>
    </section>
  )
}
