import { motion } from 'framer-motion'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { useLang } from '@/i18n/LanguageContext'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

export default function Faq() {
  const { d } = useLang()
  const FAQS = d.contact.faq.items
  return (
    <section className="bg-cream-100 py-[72px] lg:py-[120px]">
      <div className="mx-auto max-w-[800px] px-6">
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-20% 0px' }}
            transition={{ duration: 0.7, ease: EASE }}
            className="text-xs font-semibold tracking-[0.22em] text-gold-500"
          >
            {d.contact.faq.eyebrow}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20% 0px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
            className="mt-4 font-serif text-3xl font-semibold leading-[1.15] text-ink-900 lg:text-[44px]"
          >
            {d.contact.faq.heading}
          </motion.h2>
        </div>

        <Accordion type="single" collapsible className="mt-12 flex flex-col gap-4">
          {FAQS.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.6, delay: i * 0.07, ease: EASE }}
            >
              <AccordionItem
                value={`faq-${i}`}
                className="rounded-2xl border border-cream-200 bg-cream-50 px-6 transition-colors duration-300 hover:border-gold-500/40 data-[state=open]:border-gold-500/50"
              >
                <AccordionTrigger className="py-5 text-left font-serif text-lg font-semibold text-ink-900 hover:no-underline [&>svg]:text-gold-500 [&>svg]:transition-transform [&>svg]:duration-300">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="leading-[1.7] text-ink-600">{f.a}</AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
