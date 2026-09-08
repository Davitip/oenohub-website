import { motion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

const PARAGRAPHS = [
  'საქართველო ღვინის სამშობლოა — 8000 წლიანი ტრადიციით. მაგრამ ტრადიცია თავისთავად არ კმარა: თანამედროვე ინდუსტრია მოითხოვს ტექნოლოგიას, ხარისხიან ტარას, ლოგისტიკას და განათლებას. ეს ხვრელები ათასობით ქართული მეღვინის ყოველდღიურობაში ჩანდა.',
  'OenoHub.ge-ს ეკოსისტემა სწორედ ამ ხვრელების შესავსებად შეიქმნა — ეტაპობრივად: ჯერ ციფრული ინსტრუმენტები მევენახეობისა და ენოლოგიისთვის, შემდეგ ტარისა და ფილტრაციის ევროპული მიწოდება, ლოგისტიკა და კონსალტინგი, ბოლოს კი — საერთაშორისო განათლება.',
  'დღეს 10 კომპანია მუშაობს როგორც ერთი ორგანიზმი. თითოეული — თავის სფეროში ლიდერი, ერთად კი — სრული ჯაჭვი, რომელსაც ქართული ღვინის ინდუსტრია არასდროს ჰყოლია.',
]

export default function Story() {
  return (
    <section className="relative overflow-hidden bg-cream-50 py-[72px] lg:py-[120px]">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-12 px-6 lg:grid-cols-12 lg:gap-8 lg:px-12">
        {/* sticky headline column */}
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-[120px]">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-20% 0px' }}
              transition={{ duration: 0.7, ease: EASE }}
              className="text-xs font-semibold tracking-[0.22em] text-gold-500"
            >
              — ამბავი —
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20% 0px' }}
              transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
              className="mt-4 font-serif text-3xl font-semibold leading-[1.15] text-ink-900 lg:text-[44px]"
            >
              როგორ ჩამოყალიბდა ეკოსისტემა
            </motion.h2>
            <motion.img
              src="/vine-branch.svg"
              alt=""
              aria-hidden="true"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.2 }}
              viewport={{ once: true }}
              transition={{ duration: 2, delay: 0.4, ease: EASE }}
              className="mt-10 hidden w-[280px] lg:block"
            />
          </div>
        </div>

        {/* editorial paragraphs */}
        <div className="flex flex-col gap-8 lg:col-span-7">
          {PARAGRAPHS.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20% 0px' }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: EASE }}
              className="max-w-[62ch] text-lg leading-[1.7] text-ink-600 first:text-xl first:text-ink-900"
            >
              {p}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  )
}
