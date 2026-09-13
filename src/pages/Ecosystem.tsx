import { ArrowRight, Factory, Network, PackageCheck, Sprout, Truck } from 'lucide-react'
import { Link } from 'react-router'
import { useLang } from '@/i18n/LanguageContext'
import { brands } from '@/lib/brandLogos'

const pillarData = [
  {
    key: 'grow',
    number: '01',
    title: 'GROW',
    icon: Sprout,
    brands: [
      ['VineAI', 'https://vineai.ge'],
      ['AgroAI', 'https://agroai.ge'],
    ],
  },
  {
    key: 'make',
    number: '02',
    title: 'MAKE',
    icon: Factory,
    brands: [
      ['Oeno', 'https://oeno.ge'],
      ['FILTROX', 'https://filtrox.ge'],
    ],
  },
  {
    key: 'pack',
    number: '03',
    title: 'PACK',
    icon: PackageCheck,
    brands: [
      ['Vidrala', 'https://vidrala.ge'],
      ['Portugalia Cork', 'https://portugaliacork.ge'],
      ['Agglotap', 'https://agglotap.ge'],
    ],
  },
  {
    key: 'move',
    number: '04',
    title: 'MOVE & SCALE',
    icon: Truck,
    brands: [
      ['Prime Logistics', 'https://primelogistics.ge'],
      ['GS Consulting', ''],
    ],
  },
] as const

export default function Ecosystem() {
  const { lang } = useLang()
  const c = lang === 'ka' ? ka : en

  return (
    <div className="bg-cream-100 text-ink-900">
      <section className="relative overflow-hidden bg-hero-gradient px-6 pb-24 pt-36 text-ink-900 md:px-10 lg:px-16 lg:pb-32 lg:pt-44 xl:px-20">
        <div className="absolute inset-0 opacity-[0.5] [background-image:linear-gradient(to_right,rgba(0,0,0,.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,.04)_1px,transparent_1px)] [background-size:10vw_10vw]" />
        <div className="relative mx-auto grid max-w-[1500px] gap-14 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gold-600">OENO HUB / OPERATING MODEL</span>
            <h1 className="mt-8 max-w-5xl font-sans text-[clamp(4rem,8vw,9rem)] leading-[.84] tracking-[-0.055em]">
              {c.hero.line1}
              <em className="mt-3 block font-medium not-italic text-gold-600">{c.hero.line2}</em>
            </h1>
          </div>
          <div className="border-l border-black/10 pl-6 lg:pb-3 lg:pl-8">
            <p className="max-w-xl text-sm leading-7 text-ink-600 md:text-base">{c.hero.lead}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1500px] px-6 py-24 md:px-10 lg:px-16 lg:py-32 xl:px-20">
        <div className="grid gap-10 lg:grid-cols-[.55fr_1.45fr]">
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-600">01 / {c.pillarsLabel}</span>
          <div>
            <p className="mb-5 text-sm text-gold-600">{c.pillarsKicker}</p>
            <h2 className="max-w-5xl font-sans text-[clamp(3rem,5.4vw,6.5rem)] leading-[.96] tracking-[-0.05em]">{c.pillarsTitle}</h2>
          </div>
        </div>

        <div className="mt-16 grid gap-px bg-black/10 lg:grid-cols-2">
          {pillarData.map((pillar) => {
            const Icon = pillar.icon
            const copy = c.pillars[pillar.key]
            return (
              <article key={pillar.key} className="min-h-[430px] bg-white p-7 transition hover:bg-cream-100 md:p-10">
                <div className="flex items-center justify-between text-gold-600">
                  <Icon className="h-8 w-8 stroke-[1.2]" />
                  <span className="text-[10px] tracking-[0.18em]">{pillar.number}</span>
                </div>
                <h3 className="mt-14 text-sm font-semibold tracking-[0.18em]">{pillar.title}</h3>
                <p className="mt-5 max-w-xl font-sans text-3xl leading-tight md:text-4xl">{copy.title}</p>
                <p className="mt-5 max-w-xl text-sm leading-7 text-black/50">{copy.text}</p>
                <div className="mt-10 flex flex-wrap gap-2 border-t border-black/10 pt-5">
                  {pillar.brands.map(([name, href]) =>
                    href ? (
                      <a key={name} href={href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-black/10 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.13em] transition hover:border-gold-600 hover:text-gold-700">
                        {name}<ArrowRight className="h-3 w-3" />
                      </a>
                    ) : (
                      <span key={name} className="inline-flex items-center border border-black/10 px-3 py-2 text-[9px] font-semibold uppercase tracking-[0.13em]">{name}</span>
                    ),
                  )}
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <section className="bg-white text-ink-900">
        <div className="mx-auto max-w-[1500px] px-6 py-24 md:px-10 lg:px-16 lg:py-32 xl:px-20">
          <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-600">02 / {c.flow.label}</span>
              <h2 className="mt-7 max-w-2xl font-sans text-[clamp(3rem,5vw,6rem)] leading-[.94] tracking-[-0.05em]">{c.flow.title}</h2>
            </div>
            <div className="grid gap-px bg-black/10 sm:grid-cols-2">
              {c.flow.steps.map((step, index) => (
                <div key={step.title} className="min-h-52 bg-cream-100 p-6 md:p-7">
                  <span className="text-[9px] tracking-[0.18em] text-gold-600">0{index + 1}</span>
                  <h3 className="mt-8 font-sans text-2xl">{step.title}</h3>
                  <p className="mt-3 text-xs leading-6 text-ink-600">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1500px] px-6 py-24 md:px-10 lg:px-16 lg:py-32 xl:px-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-600">03 / {c.network.label}</span>
            <h2 className="mt-7 max-w-3xl font-sans text-[clamp(3rem,5vw,6rem)] leading-[.95] tracking-[-0.05em]">{c.network.title}</h2>
            <p className="mt-7 max-w-2xl text-sm leading-7 text-ink-600 md:text-base">{c.network.lead}</p>
          </div>
          <div className="relative grid min-h-[420px] place-items-center border border-black/10 bg-white">
            <div className="absolute inset-[8%] rounded-full border border-black/10" />
            <div className="absolute inset-[19%] rounded-full border border-dashed border-gold-500/40" />
            <div className="relative z-10 grid h-44 w-44 place-items-center rounded-full bg-burgundy-900 text-white shadow-[0_0_60px_rgba(61,10,24,.20)]">
              <div className="text-center">
                <Network className="mx-auto h-6 w-6 text-gold-400" />
                <strong className="mt-3 block text-lg tracking-[0.16em]">OENO HUB</strong>
                <span className="mt-2 block text-[8px] uppercase tracking-[0.16em] text-white/40">{c.network.core}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-600">{c.network.brandsLabel}</span>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
            {brands.map((b) => {
              const cell = (
                <>
                  <img src={b.logo} alt={b.name} className="h-9 w-auto max-w-[80%] object-contain transition group-hover:scale-105" />
                  <span className="mt-3 block text-center text-[8px] uppercase tracking-[0.14em] text-ink-400">{b.name}</span>
                </>
              )
              return b.href ? (
                <a key={b.name} href={b.href} target="_blank" rel="noreferrer" className="group -ml-px -mt-px flex min-h-28 flex-col items-center justify-center border border-black/10 bg-cream-100 p-5 transition hover:bg-white">
                  {cell}
                </a>
              ) : (
                <div key={b.name} className="group -ml-px -mt-px flex min-h-28 flex-col items-center justify-center border border-black/10 bg-cream-100 p-5">
                  {cell}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-black/10 bg-white text-ink-900">
        <div className="mx-auto grid max-w-[1500px] items-end gap-12 px-6 py-20 md:px-10 lg:grid-cols-[1.2fr_.8fr] lg:px-16 lg:py-24 xl:px-20">
          <h2 className="max-w-4xl font-sans text-[clamp(3rem,5.5vw,6.5rem)] leading-[.92] tracking-[-0.05em]">{c.cta.title}</h2>
          <div>
            <p className="max-w-xl text-sm leading-7 text-ink-600 md:text-base">{c.cta.lead}</p>
            <Link to="/contact" className="mt-7 inline-flex min-h-14 items-center gap-10 rounded-full bg-burgundy-900 px-8 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-all duration-200 hover:bg-burgundy-700 active:scale-[0.97]">
              {c.cta.button}<ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

const en = {
  hero: { line1: 'Specialized inside.', line2: 'Simple outside.', lead: 'OENO HUB reduces nine separate specialist entry points into four customer-facing operating pillars. The customer starts with an objective; the platform coordinates the specialists behind it.' },
  pillarsLabel: 'FOUR OPERATING PILLARS',
  pillarsKicker: 'Customer-facing simplicity, specialist depth behind the interface.',
  pillarsTitle: 'The ecosystem is organized around the work to be done.',
  pillars: {
    grow: { title: 'Vineyard & Agriculture Intelligence', text: 'Digital monitoring, agronomic intelligence, diagnostics and AI-assisted field decision support.' },
    make: { title: 'Production & Process Technology', text: 'Enology, beverage process technology and professional filtration across critical production stages.' },
    pack: { title: 'Packaging & Closure Systems', text: 'Glass packaging plus natural and technical closure solutions aligned with product and bottling requirements.' },
    move: { title: 'Logistics, Strategy & Scale', text: 'International logistics, fulfillment, sourcing, commercial coordination and project strategy.' },
  },
  flow: {
    label: 'HOW THE HUB OPERATES',
    title: 'One brief moves through the whole system.',
    steps: [
      { title: 'Objective first', text: 'The project begins with the customer’s business and technical requirement.' },
      { title: 'System mapping', text: 'OENO HUB identifies the relevant workstreams and dependencies.' },
      { title: 'Specialist assignment', text: 'The right companies enter the project without forcing the customer to manage the hand-offs.' },
      { title: 'Coordinated delivery', text: 'Quotations, documents, logistics and follow-up move through one accountable interface.' },
    ],
  },
  network: { label: 'SPECIALIST NETWORK', title: 'The brands remain specialists. OENO HUB becomes the operating layer.', lead: 'The purpose is not to blur company identities or imply ownership. Each company retains its role and expertise; OENO HUB coordinates the customer journey across them.', core: 'coordinated interface', brandsLabel: 'PARTNER BRANDS' },
  cta: { title: 'Bring us the objective.', lead: 'Tell us what you are building, upgrading or trying to solve. We will assemble the relevant workstreams around it.', button: 'Start a project brief' },
}

const ka = {
  hero: { line1: 'შიგნით — სპეციალიზებული.', line2: 'გარედან — მარტივი.', lead: 'OENO HUB ცხრა ცალკე სპეციალიზებულ შესასვლელს ოთხ გასაგებ ოპერაციულ მიმართულებად აერთიანებს. მომხმარებელი იწყებს მიზნიდან; პლატფორმა კი შესაბამის სპეციალისტებს კოორდინირებს.' },
  pillarsLabel: 'ოთხი ოპერაციული მიმართულება',
  pillarsKicker: 'მომხმარებლისთვის სიმარტივე, სისტემის შიგნით — სპეციალისტების სიღრმე.',
  pillarsTitle: 'ეკოსისტემა ორგანიზებულია სამუშაოს გარშემო — არა იურიდიული სტრუქტურის გარშემო.',
  pillars: {
    grow: { title: 'ვენახისა და აგროკულტურების ინტელექტი', text: 'ციფრული მონიტორინგი, აგრონომიული ინტელექტი, დიაგნოსტიკა და AI-ზე დაფუძნებული საველე გადაწყვეტილებები.' },
    make: { title: 'წარმოება და პროცესის ტექნოლოგია', text: 'ენოლოგია, სასმელების ტექნოლოგია და პროფესიონალური ფილტრაცია წარმოების კრიტიკულ ეტაპებზე.' },
    pack: { title: 'შეფუთვა და საცობის სისტემები', text: 'მინის შეფუთვა და ბუნებრივი/ტექნიკური საცობების გადაწყვეტები პროდუქტისა და ჩამოსხმის მოთხოვნებთან შესაბამისობაში.' },
    move: { title: 'ლოგისტიკა, სტრატეგია და მასშტაბირება', text: 'საერთაშორისო ლოგისტიკა, fulfillment, sourcing, კომერციული კოორდინაცია და პროექტის სტრატეგია.' },
  },
  flow: {
    label: 'როგორ მუშაობს HUB',
    title: 'ერთი brief გადის მთელ სისტემაში.',
    steps: [
      { title: 'ჯერ მიზანი', text: 'პროექტი იწყება მომხმარებლის ბიზნეს და ტექნიკური მოთხოვნით.' },
      { title: 'სისტემის რუკა', text: 'OENO HUB ადგენს შესაბამის მიმართულებებსა და მათ შორის დამოკიდებულებებს.' },
      { title: 'სპეციალისტების ჩართვა', text: 'სწორი კომპანიები ერთვებიან ისე, რომ კლიენტს მათი კოორდინირება ცალ-ცალკე არ უწევს.' },
      { title: 'ერთიანი მიწოდება', text: 'შეთავაზებები, დოკუმენტები, ლოგისტიკა და follow-up ერთი პასუხისმგებელი ინტერფეისით იმართება.' },
    ],
  },
  network: { label: 'სპეციალისტების ქსელი', title: 'ბრენდები რჩებიან სპეციალისტებად. OENO HUB ხდება ოპერაციული ფენა.', lead: 'მიზანი არ არის კომპანიების იდენტობის შერწყმა ან საკუთრების შთაბეჭდილების შექმნა. თითოეული კომპანია ინარჩუნებს თავის როლსა და ექსპერტიზას; OENO HUB კი კლიენტის გზას მათ შორის კოორდინირებს.', core: 'კოორდინირებული ინტერფეისი', brandsLabel: 'პარტნიორი ბრენდები' },
  cta: { title: 'მოგვიტანე მიზანი.', lead: 'გვითხარი რას აშენებ, რას აახლებ ან რა პრობლემის გადაწყვეტას ცდილობ. შესაბამის სამუშაო მიმართულებებს ერთ პროექტად შევკრავთ.', button: 'პროექტის brief-ის დაწყება' },
}
