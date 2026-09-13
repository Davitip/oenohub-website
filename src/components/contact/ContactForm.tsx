import { motion } from 'framer-motion'
import { ChevronDown, Clock, Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import { useState } from 'react'
import type { ChangeEvent, FocusEvent } from 'react'
import { Link } from 'react-router'
import { cn } from '@/lib/utils'
import { btnPrimary } from '@/lib/styles'
import { useLang } from '@/i18n/LanguageContext'

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]


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

function validate(values: FormValues, msg: { errName: string; errEmail: string; errEmailFormat: string; errTopic: string; errMessage: string }): Errors {
  const errors: Errors = {}
  if (!values.name.trim()) errors.name = msg.errName
  if (!values.email.trim()) errors.email = msg.errEmail
  else if (!EMAIL_RE.test(values.email.trim())) errors.email = msg.errEmailFormat
  if (!values.topic) errors.topic = msg.errTopic
  if (!values.message.trim()) errors.message = msg.errMessage
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


const SOCIALS = [
  { icon: Facebook, label: 'Facebook', href: 'https://facebook.com' },
  { icon: Instagram, label: 'Instagram', href: 'https://instagram.com' },
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
]

export default function ContactForm() {
  const { d } = useLang()
  const f = d.contact.form
  const TOPICS = f.topics
  const COORDS: { icon: typeof Phone; label: string; value: string; href?: string; wa?: string }[] = [
    { icon: MapPin, label: d.contact.direct.address, value: d.contact.direct.addressValue },
    { icon: Mail, label: d.contact.direct.email, value: 'info@oenohub.ge', href: 'mailto:info@oenohub.ge' },
    { icon: Phone, label: d.contact.direct.phone, value: '+995 510 10 20 90', href: 'tel:+995510102090', wa: 'https://wa.me/995510102090' },
    { icon: Phone, label: d.contact.direct.phone, value: '+995 577 14 14 87', href: 'tel:+995577141487', wa: 'https://wa.me/995577141487' },
    { icon: Clock, label: d.contact.direct.hours, value: d.contact.direct.hoursValue },
  ]
  const [values, setValues] = useState<FormValues>(INITIAL)
  const [errors, setErrors] = useState<Errors>({})
  const [submitted, setSubmitted] = useState(false)

  const set = (key: keyof FormValues) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const next = { ...values, [key]: e.target.value }
    setValues(next)
    if (errors[key]) setErrors(validate(next, f))
  }

  const onBlur = (key: keyof FormValues) => (_e: FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    if (values[key].trim() !== '' || errors[key]) setErrors(validate(values, f))
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate(values, f)
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
                <h3 className="mt-6 font-sans text-2xl font-semibold text-ink-900">
                  {f.successTitle}
                </h3>
                <p className="mt-2 text-ink-600">{f.successText}</p>
                <Link to="/" className={cn(btnPrimary, 'mt-8')}>
                  {f.backHome}
                </Link>
              </motion.div>
            ) : (
              <>
                <h3 className="font-sans text-2xl font-semibold text-ink-900">
                  {f.title}
                </h3>
                <form onSubmit={onSubmit} noValidate className="mt-8 flex flex-col gap-6">
                  <Field label={f.name} error={errors.name}>
                    <input
                      type="text"
                      required
                      value={values.name}
                      onChange={set('name')}
                      onBlur={onBlur('name')}
                      placeholder={f.namePh}
                      className={cn(inputBase, errors.name && inputError)}
                    />
                  </Field>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <Field label={f.email} error={errors.email}>
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
                    <Field label={f.phone}>
                      <input
                        type="tel"
                        value={values.phone}
                        onChange={set('phone')}
                        placeholder={f.phonePh}
                        className={inputBase}
                      />
                    </Field>
                  </div>

                  <Field label={f.topic} error={errors.topic}>
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
                          {f.topicPh}
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

                  <Field label={f.message} error={errors.message}>
                    <textarea
                      required
                      rows={5}
                      value={values.message}
                      onChange={set('message')}
                      onBlur={onBlur('message')}
                      placeholder={f.messagePh}
                      className={cn(inputBase, 'resize-y', errors.message && inputError)}
                    />
                  </Field>

                  <button type="submit" className={cn(btnPrimary, 'w-full')}>
                    {f.submit} <span aria-hidden="true">→</span>
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
              <h3 className="font-sans text-2xl font-semibold">{d.contact.direct.title}</h3>
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
                      {c.wa && <a
                          href={c.wa}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-1 inline-flex items-center gap-1.5 text-sm text-gold-400/90 underline-offset-4 transition-colors hover:text-gold-300 hover:underline"
                        >
                          <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.87 9.87 0 0 0 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm0 18.03a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.07.81.82-3-.2-.31a8.08 8.08 0 0 1-1.24-4.31c0-4.47 3.64-8.11 8.12-8.11 4.47 0 8.11 3.64 8.11 8.11s-3.64 8.12-8.11 8.12zm4.45-6.07c-.24-.12-1.44-.71-1.66-.79-.22-.08-.39-.12-.55.12-.16.24-.63.79-.77.96-.14.16-.28.18-.53.06-.24-.12-1.03-.38-1.96-1.21-.72-.65-1.21-1.44-1.36-1.68-.14-.24-.01-.37.11-.49.11-.11.24-.28.37-.42.12-.14.16-.24.24-.4.08-.16.04-.31-.02-.43-.06-.12-.55-1.32-.75-1.81-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.43.06-.65.31-.22.24-.86.84-.86 2.05 0 1.21.88 2.37 1 2.53.12.16 1.72 2.63 4.18 3.69.58.25 1.04.4 1.4.52.59.19 1.12.16 1.54.1.47-.07 1.44-.59 1.64-1.16.2-.57.2-1.05.14-1.16-.06-.1-.22-.16-.46-.28z" />
                          </svg>
                          WhatsApp
                        </a>}
                    </div>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-8 h-px w-full bg-gold-line" aria-hidden="true" />

              <div className="mt-6">
                <p className="text-xs font-semibold tracking-[0.06em] text-milk/60">
                  {d.contact.direct.socials}
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
