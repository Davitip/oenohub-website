import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

export default function EducationBand() {
  return (
    <section className="bg-cream-50">
      <div className="mx-auto max-w-[1280px] px-6 pb-[72px] lg:px-12 lg:pb-[120px]">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15% 0px' }}
          transition={{ duration: 0.8, ease: EASE }}
          className="sheen relative overflow-hidden rounded-[20px] border border-gold-500/40 bg-gold-300/20 px-8 py-10 lg:px-12 lg:py-12"
        >
          <img
            src="/vine-branch.svg"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -right-10 -top-10 w-[220px] opacity-[0.12]"
          />
          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex items-center rounded-full border border-gold-500 bg-gold-500 px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.06em] text-burgundy-950">
                განათლება
              </span>
              <h3 className="mt-4 font-serif text-[22px] font-semibold leading-[1.25] text-ink-900 lg:text-[26px]">
                International Sommelier Guild · Edinburgh Whisky Academy
              </h3>
              <p className="mt-3 leading-[1.7] text-ink-600">
                ეკოსისტემის საგანმანათლებლო ფრთა — ორი საერთაშორისო ფრანჩაიზის ოფიციალური
                წარმომადგენლობა კავკასიის რეგიონში.
              </p>
            </div>
            <Link
              to="/education"
              className="group inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-burgundy-700 px-7 py-3 text-sm font-semibold text-burgundy-700 transition-all duration-300 hover:bg-burgundy-700/5"
            >
              განათლების გვერდი
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
