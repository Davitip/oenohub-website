import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router'
import { ghostLinkDark } from '@/lib/styles'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

const CARDS = [
  {
    image: '/edu-sommelier.png',
    alt: 'სომელიე ღვინის ბოკალით მარანში',
    badge: 'ოფიციალური ფრანჩაიზი კავკასიაში',
    title: 'International Sommelier Guild',
    body: 'სომელიეთა სერტიფიცირება და პროფესიული ტრენინგები — საერთაშორისო დიპლომით. OenoHub.ge წარმოადგენს გილდიას კავკასიის რეგიონში.',
    cta: 'გაეცანი პროგრამებს',
  },
  {
    image: '/edu-whisky.png',
    alt: 'ვისკის დეგუსტაციის ჭიქები მურა მაგიდაზე',
    badge: 'ოფიციალური ფრანჩაიზი კავკასიაში',
    title: 'Edinburgh Whisky Academy',
    body: 'ვისკის განათლება და სერტიფიკატები შოტლანდიური აკადემიისგან — სასმელის ინდუსტრიის პროფესიონალებისა და ენთუზიასტებისთვის.',
    cta: 'გაეცანი კურსებს',
  },
]

export default function EducationFranchise() {
  return (
    <section data-theme="dark" className="relative overflow-hidden bg-burgundy-900 py-[72px] lg:py-[120px]">
      <div className="grain-overlay" aria-hidden="true" />
      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-12">
        {/* centered header */}
        <motion.div
          className="mx-auto mb-14 max-w-2xl text-center"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-20% 0px' }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <p className="mb-3 flex items-center justify-center gap-3 text-xs font-semibold tracking-[0.06em] text-gold-400">
            <span className="inline-block h-px w-8 bg-gold-500" />
            განათლება
            <span className="inline-block h-px w-8 bg-gold-500" />
          </p>
          <h2 className="font-serif text-3xl font-semibold text-milk lg:text-[44px] lg:leading-[1.15]">
            საერთაშორისო სტანდარტები,{' '}
            <span className="font-display italic text-gold-400">ადგილობრივად</span>
          </h2>
        </motion.div>

        <motion.div
          className="grid gap-8 md:grid-cols-2"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-15% 0px' }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
        >
          {CARDS.map((c) => (
            <motion.article
              key={c.title}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
              }}
              className="group overflow-hidden rounded-[20px] border border-gold-500/25 bg-burgundy-950/60 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold-500/50 hover:shadow-card-hover"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={c.image}
                  alt={c.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <span className="animate-badge-pulse absolute left-5 top-5 rounded-full bg-gold-500 px-4 py-1.5 text-[11px] font-semibold tracking-[0.08em] text-burgundy-950">
                  {c.badge}
                </span>
              </div>
              <div className="flex flex-col gap-4 p-8">
                <h3 className="font-display text-2xl font-semibold text-gold-300">{c.title}</h3>
                <p className="text-sm leading-[1.7] text-milk/80">{c.body}</p>
                <Link to="/education" className={ghostLinkDark}>
                  {c.cta}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
