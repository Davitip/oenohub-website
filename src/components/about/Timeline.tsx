import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

const STAGES = [
  {
    title: 'ტექნოლოგიების ეტაპი',
    text: 'დაიწყო Winelens.ge-ით და Oeno.ge-ით: ღვინის ინდუსტრიის ციფრული ფუნდამენტი. შემდეგ VineAI.ge და AgroAI.ge — AI მევენახეობასა და სოფლის მეურნეობაში.',
  },
  {
    title: 'ტარის ეტაპი',
    text: 'Vidrala.ge, AggloTap.ge და PortugalCork.ge: ევროპული ტარის სამი სვეტი — მინა, ტექნიკური და ბუნებრივი ქორქი.',
  },
  {
    title: 'ფილტრაცია და ხარისხი',
    text: 'Filtrox.ge შეუერთდა ეკოსისტემას, ღვინის სიწმინდის სტანდარტით.',
  },
  {
    title: 'ლოგისტიკა და ექსპერტიზა',
    text: 'Primelogistics.ge-ს 200 მ² საწყობი და GS Consulting-ის სტრატეგიული გუნდი დაკავშირდა ჯაჭვს.',
  },
  {
    title: 'განათლების ეტაპი',
    text: 'International Sommelier Guild-ისა და Edinburgh Whisky Academy-ს ფრანჩაიზები კავკასიისთვის — ეკოსისტემის სრული წრის დახურვა.',
  },
]

export default function Timeline() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.8', 'end 0.2'] })
  const lineScale = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1]), {
    stiffness: 60,
    damping: 20,
  })

  return (
    <section className="relative overflow-hidden bg-cream-50 py-[72px] lg:py-[120px]">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-12">
        {/* section header */}
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-20% 0px' }}
            transition={{ duration: 0.7, ease: EASE }}
            className="text-xs font-semibold tracking-[0.22em] text-gold-500"
          >
            — გზა —
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20% 0px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
            className="mt-4 font-serif text-3xl font-semibold leading-[1.15] text-ink-900 lg:text-[44px]"
          >
            ეკოსისტემის ფორმირების ეტაპები
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: '-20% 0px' }}
            transition={{ duration: 0.9, delay: 0.3, ease: EASE }}
            className="mx-auto mt-6 h-px w-32 origin-left bg-gold-line"
            aria-hidden="true"
          />
        </div>

        {/* timeline */}
        <div ref={ref} className="relative mx-auto mt-16 max-w-4xl">
          {/* base line */}
          <div
            className="absolute left-4 top-0 h-full w-px bg-cream-200 md:left-1/2 md:-translate-x-1/2"
            aria-hidden="true"
          />
          {/* gold drawing line */}
          <motion.div
            className="absolute left-4 top-0 h-full w-px origin-top bg-gold-500 md:left-1/2 md:-translate-x-1/2"
            style={{ scaleY: lineScale }}
            aria-hidden="true"
          />

          <ol className="flex flex-col gap-12 md:gap-16">
            {STAGES.map((s, i) => {
              const left = i % 2 === 0
              return (
                <li key={s.title} className="relative">
                  {/* node dot */}
                  <motion.span
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: '-15% 0px' }}
                    transition={{ type: 'spring', stiffness: 300, damping: 18, delay: 0.1 }}
                    className="absolute left-4 top-6 z-10 flex h-5 w-5 -translate-x-1/2 items-center justify-center rounded-full border border-gold-500 bg-cream-50 md:left-1/2"
                    aria-hidden="true"
                  >
                    <span className="h-2 w-2 rounded-full bg-gold-500" />
                  </motion.span>

                  <motion.div
                    initial={{ opacity: 0, x: left ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-15% 0px' }}
                    transition={{ duration: 0.8, ease: EASE }}
                    className={`ml-12 md:ml-0 md:w-[calc(50%-2.5rem)] ${
                      left ? '' : 'md:ml-[calc(50%+2.5rem)]'
                    }`}
                  >
                    <div className="rounded-[20px] border border-cream-200 bg-cream-100 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover lg:p-8">
                      <p className="font-display text-3xl font-semibold italic text-gold-500">
                        {String(i + 1).padStart(2, '0')}
                      </p>
                      <h3 className="mt-2 font-serif text-xl font-semibold text-ink-900 lg:text-2xl">
                        {s.title}
                      </h3>
                      <p className="mt-3 leading-[1.7] text-ink-600">{s.text}</p>
                    </div>
                  </motion.div>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
