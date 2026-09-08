import { motion } from 'framer-motion'
import { Cpu, GraduationCap, Network, Warehouse } from 'lucide-react'
import Counter from '@/components/Counter'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

const FACTS = [
  { icon: Network, value: 10, suffix: '', label: 'ეკოსისტემის კომპანია' },
  { icon: GraduationCap, value: 2, suffix: '', label: 'საერთაშორისო ფრანჩაიზა' },
  { icon: Warehouse, value: 200, suffix: ' მ²', label: 'საწყობის ფართი' },
  { icon: Cpu, value: 21, suffix: '', label: 'AI მოდული მევენახეობისთვის' },
]

export default function TrustStrip() {
  return (
    <section data-theme="dark" className="relative bg-burgundy-950">
      <div className="h-px w-full bg-gold-line" aria-hidden="true" />
      <div className="mx-auto max-w-[1280px] px-6 py-10 lg:px-12">
        <motion.div
          className="grid grid-cols-2 gap-8 md:grid-cols-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-15% 0px' }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
        >
          {FACTS.map((f) => (
            <motion.div
              key={f.label}
              className="flex items-center gap-4"
              variants={{
                hidden: { opacity: 0, y: 24 },
                show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
              }}
            >
              <f.icon className="h-7 w-7 shrink-0 text-gold-500" strokeWidth={1.5} />
              <div>
                <div className="font-display text-3xl font-semibold leading-none text-gold-400">
                  <Counter value={f.value} suffix={f.suffix} duration={1.4} />
                </div>
                <div className="mt-1.5 text-xs leading-snug text-milk/70">{f.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="h-px w-full bg-gold-line" aria-hidden="true" />
    </section>
  )
}
