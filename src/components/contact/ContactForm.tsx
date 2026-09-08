import { motion } from 'framer-motion'
import { ChevronDown, Clock, Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import { useState } from 'react'
import type { ChangeEvent, FocusEvent } from 'react'
import { Link } from 'react-router'
import { cn } from '@/lib/utils'
import { btnPrimary } from '@/lib/styles'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

const TOPICS = [
  'ზოგადი კითხვა',
  'ტექნოლოგია და AI (Winelens · VineAI · AgroAI · Oeno)',
  'ტარა და წარმოება (Vidrala · AggloTap · PortugalCork · Filtrox)',
  'ლოგისტიკა და კონსალტინგი (Primelogistics · GS Consulting)',
  'განათლება (Sommelier Guild · Whisky Academy)',
  'პარტნიორობა',
]

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

interface FormValues {
  name: string
  email: string
  phone: string
  topic: string
  message: string
}

type Errors = Partial<Record<keyof FormValues, string>>

const INITIAL: FormValues = { name: '', email: '', phone: '', topic: '', message: '' }

function validate(values: FormValues): Errors {
  const errors: Errors = {}
  if (!values.name.trim()) errors.name = 'შეიყვანე სახელი და გვარი'
  if (!values.email.trim()) errors.email = 'შეიყვანე ელ.ფოსტა'
  else if (!EMAIL_RE.test(values.email.trim())) errors.email = 'ელ.ფოსტის ფორმატი არასწორია'
  if (!values.topic) errors.topic = 'აირჩიე თემა'
  if (!values.message.trim()) errors.message = 'დაწერე შეტყობინება'
  return errors
}

const inputBase =
  'w-full rounded-xl border border-cream-200 bg-milk px-4 py-3.5 text-ink-900 placeholder:text-ink-400 transition-all duration-300 outline-none focus:border-gold-500 focus:shadow-[0_0_0_2px_rgba(201,162,39,0.25)]'
const inputError =
  'border-burgundy-600 focus:border-burgundy-600 focus:shadow-[0_0_0_2px_rgba(138,30,66,0.2)]'

function Field({
  label,
  error,
  children,
}: {
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <label className="group block">
      <span className="mb-2 block text-sm font-medium text-ink-900 transition-all duration-300 group-focus-within:text-xs group-focus-within:tracking-[0.02em] group-focus-within:text-burgundy-700">
        {label}
      </span>
      {children}
      {error && (
        <motion.span
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-1.5 block text-xs font-medium text-burgundy-600"
        >
          {error}
        </motion.span>
      )}
    </label>
  )
}

const COORDS = [
  { icon: MapPin, label: 'მისამართი', value: 'თბილისი, საქართველო' },
  { icon: Mail, label: 'ელ.ფოსტა', value: 'info@oenohub.ge', href: 'mailto:info@oenohub.ge' },
  { icon: Phone, label: 'ტელეფონი', value: '+995 555 00 00 00', href: 'tel:+995555000000' },
  { icon: Clock, label: 'სამუშაო საათები', value: 'ორშ–პარ, 10:00–19:00' },
]

const SOCIALS = [
  { icon: Facebook, label: 'Facebook', href: 'https://facebook.com' },
  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
]

export default function ContactForm() {
  const [values, setValues] = useState<FormValues>(INITIAL)
  const [errors, setErrors] = useState<Errors>({})
  const [submitted, setSubmitted] = useState(false)

  const set = (key: keyof FormValues) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const next = { ...values, [key]: e.target.value }
    setValues(next)
    if (errors[key]) setErrors(validate(next))
  }

  const onBlur = (key: keyof FormValues) => (_e: FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    if (values[key].trim() !== '' || errors[key]) setErrors(validate(values))
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate(values)
    setErrors(errs)
    if (Object.keys(errs).length === 0) setSubmitted(true)
  }

  return (
    <section className="bg-cream-50 py-[72px] lg:py-[120px]">
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-8 px-6 lg:grid-cols-12 lg:px-12">
        {/* form card */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-20% 0px' }}
          transition={{ duration: 0.7, ease: EASE }}
          className="lg:col-span-7"
        >
          <div className="rounded-[20px] border border-cream-200 bg-cream-50 p-6 shadow-sm lg:p-10">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="flex min-h-[480px] flex-col items-center justify-center text-center"
              >
                <motion.svg
                  viewBox="0 0 64 64"
                  className="h-20 w-20"
                  aria-hidden="true"
                >
                  <motion.circle
                    cx="32"
                    cy="32"
                    r="28"
                    fill="none"
                    stroke="#C9A227"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.9, ease: EASE }}
                  />
                  <motion.path
                    d="M20 33 L29 42 L45 24"
                    fill="none"
                    stroke="#C9A227"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.6, delay: 0.7, ease: EASE }}
                  />
                </motion.svg>
                <h3 className="mt-6 font-serif text-2xl font-semibold text-ink-900">
                  შეტყობინება გაიგზავნა!
                </h3>
                <p className="mt-2 text-ink-600">მალე დაგიკავშირდებით.</p>
                <Link to="/" className={cn(btnPrimary, 'mt-8')}>
                  მთავარზე დაბრუნება
                </Link>
              </motion.div>
            ) : (
              <>
                <h3 className="font-serif text-2xl font-semibold text-ink-900">
                  გამოგვიგზავნე შეტყობინება
                </h3>
                <form onSubmit={onSubmit} noValidate className="mt-8 flex flex-col gap-6">
                  <Field label="სახელი და გვარი" error={errors.name}>
                    <input
                      type="text"
                      required
                      value={values.name}
                      onChange={set('name')}
                      onBlur={onBlur('name')}
                      placeholder="მაგ. გიორგი მელაძე"
                      className={cn(inputBase, errors.name && inputError)}
                    />
                  </Field>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <Field label="ელ.ფოსტა" error={errors.email}>
                      <input
                        type="email"
                        required
                        value={values.email}
                        onChange={set('email')}
                        onBlur={onBlur('email')}
                        placeholder="name@example.ge"
                        className={cn(inputBase, errors.email && inputError)}
                      />
                    </Field>
                    <Field label="ტელეფონი (არასავალდებულო)">
                      <input
                        type="tel"
                        value={values.phone}
                        onChange={set('phone')}
                        placeholder="+995 5__ __ __ __"
                        className={inputBase}
                      />
                    </Field>
                  </div>

                  <Field label="თემა" error={errors.topic}>
                    <div className="relative">
                      <select
                        required
                        value={values.topic}
                        onChange={set('topic')}
                        onBlur={onBlur('topic')}
                        className={cn(
                          inputBase,
                          'appearance-none pr-11',
                          !values.topic && 'text-ink-400',
                          errors.topic && inputError,
                        )}
                      >
                        <option value="" disabled>
                          აირჩიე თემა…
                        </option>
                        {TOPICS.map((t) => (
                          <option key={t} value={t} className="text-ink-900">
                            {t}
                          </option>
                        ))}
                      </select>
                      <ChevronDown
                        className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gold-500"
                        aria-hidden="true"
                      />
                    </div>
                  </Field>

                  <Field label="შეტყობინება" error={errors.message}>
                    <textarea
                      required
                      rows={5}
                      value={values.message}
                      onChange={set('message')}
                      onBlur={onBlur('message')}
                      placeholder="მოგვიყევი მოკლედ, რა გაინტერესებს…"
                      className={cn(inputBase, 'resize-y', errors.message && inputError)}
                    />
                  </Field>

                  <button type="submit" className={cn(btnPrimary, 'w-full')}>
                    გაგზავნა <span aria-hidden="true">→</span>
                  </button>
                </form>
              </>
            )}
          </div>
        </motion.div>

        {/* coordinates card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-20% 0px' }}
          transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
          className="lg:col-span-5"
        >
          <div data-theme="dark" className="relative overflow-hidden rounded-[20px] bg-burgundy-900 p-6 text-milk lg:p-10">
            <div className="grain-overlay" aria-hidden="true" />
            <div className="relative">
              <h3 className="font-serif text-2xl font-semibold">პირდაპირი კავშირი</h3>
              <ul className="mt-8 flex flex-col gap-6">
                {COORDS.map((c, i) => (
                  <motion.li
                    key={c.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-20% 0px' }}
                    transition={{ duration: 0.6, delay: 0.3 + i * 0.08, ease: EASE }}
                    className="flex items-start gap-4"
                  >
                    <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold-500/40 text-gold-400">
                      <c.icon className="h-4 w-4" strokeWidth={1.8} />
                    </span>
                    <div>
                      <p className="text-xs font-semibold tracking-[0.06em] text-milk/60">
                        {c.label}
                      </p>
                      {c.href ? (
                        <a
                          href={c.href}
                          className="mt-0.5 inline-block text-lg text-milk underline-offset-4 transition-colors hover:text-gold-400 hover:underline hover:decoration-gold-500"
                        >
                          {c.value}
                        </a>
                      ) : (
                        <p className="mt-0.5 text-lg">{c.value}</p>
                      )}
                    </div>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-8 h-px w-full bg-gold-line" aria-hidden="true" />

              <div className="mt-6">
                <p className="text-xs font-semibold tracking-[0.06em] text-milk/60">
                  სოციალური ქსელები
                </p>
                <div className="mt-4 flex gap-3">
                  {SOCIALS.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={s.label}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-500/40 text-gold-400 transition-all duration-300 hover:bg-gold-500 hover:text-burgundy-950"
                    >
                      <s.icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
