import type { Dictionary } from './LanguageContext'

/** English dictionary — mirrors ka.ts exactly. */
export const en: Dictionary = {
  nav: {
    home: 'Home',
    ecosystem: 'Ecosystem',
    education: 'Education',
    about: 'About Us',
    contact: 'Contact',
    cta: 'Get in Touch',
    logoAria: 'OenoHub.ge — Home',
    mainNavAria: 'Main navigation',
    mobileNavAria: 'Mobile navigation',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    switchLangAria: 'Switch language',
  },
  footer: {
    tagline:
      'A unified ecosystem for the wine and agro industry — from vineyard to glass, under one brand.',
    ecosystem: 'Ecosystem',
    navigation: 'Navigation',
    contact: 'Contact',
    city: 'Tbilisi, Georgia',
    rights: '© 2025 OenoHub.ge — All rights reserved',
    franchises: 'Franchises: International Sommelier Guild · Edinburgh Whisky Academy',
  },
  common: {
    logoSuffix: 'logo',
  },
  companies: {
    categories: {
      tech: 'Technology & AI',
      distribution: 'Distribution',
      packaging: 'Production & Packaging',
      logistics: 'Logistics & Services',
      education: 'Education',
    },
    items: {
      winehub: {
        description:
          'Exclusive distributor of small and medium wineries — wine and spirits.',
      },
      winelens: {
        description: 'A digital analytics and management platform for winemakers.',
      },
      vineai: {
        description: 'An AI assistant for viticulture: monitoring, diagnostics, 21 modules.',
      },
      agroai: {
        description: 'An agro-AI platform for the whole of agriculture.',
      },
      oeno: {
        description: 'A digital oenology platform and product catalogue.',
      },
      vidrala: {
        description: 'Premium glass packaging: wine bottles of any shape and volume.',
      },
      agglotap: {
        description: 'Agglomerated corks for sealing wine bottles.',
      },
      portugaliacork: {
        description: 'Portuguese natural cork — premium stoppers.',
      },
      filtrox: {
        description: 'Filtration systems for the wine and beverage industry.',
      },
      primelogistics: {
        description: 'Logistics, a 200 m² warehouse, 3PL services.',
      },
      gs: {
        description: 'Strategy and consulting for the wine and agro business.',
      },
    },
  },
  home: {
    hero: {
      eyebrow: 'A unified ecosystem for the wine industry',
      h1: ['“From', 'vineyard', 'to', 'glass', '— one ecosystem”'],
      sub: 'OenoHub.ge unites the full wine and agro value chain: technology, production and packaging, logistics and education — 11 companies, one vision.',
      ctaPrimary: 'Explore the Ecosystem',
      ctaSecondary: 'Education & Franchises',
      scroll: 'Scroll down',
    },
    trust: {
      facts: [
        'ecosystem companies',
        'international franchises',
        'of warehouse space',
        'AI modules for viticulture',
      ],
      areaSuffix: ' m²',
    },
    chain: {
      eyebrow: 'How the ecosystem works',
      heading: 'A complete chain, a single responsibility',
      diagramAria: 'Ecosystem chain diagram',
      stages: [
        {
          title: 'Technology & AI',
          companies: 'Winelens.ge · VineAI.ge · AgroAI.ge · Oeno.ge',
          text: 'Digital tools for vineyard monitoring, winemaking protocols and agro-analytics.',
        },
        {
          title: 'Production & Packaging',
          companies: 'Vidrala.ge · AggloTap.ge · PortugalCork.ge · Filtrox.ge',
          text: 'Glass bottles, natural and agglomerated corks, filtration systems — European quality.',
        },
        {
          title: 'Logistics & Services',
          companies: 'Primelogistics.ge · GS Consulting',
          text: 'Warehouse management, 3PL services and strategic consulting for going to market.',
        },
        {
          title: 'Education',
          companies: 'International Sommelier Guild · Edinburgh Whisky Academy',
          text: 'International certification for sommeliers and whisky specialists in the Caucasus region.',
        },
      ],
    },
    carousel: {
      eyebrow: 'Our ecosystem companies',
      headingPre: '11 companies — ',
      headingItalic: 'one standard',
      text: 'Each company covers its own link in the ecosystem chain — together they form a complete service for the wine and agro business.',
      all: 'All companies',
      explore: 'Explore',
    },
    edu: {
      eyebrow: 'Education',
      headingPre: 'International standards, ',
      headingItalic: 'delivered locally',
      badge: 'Official franchise in the Caucasus',
      cards: [
        {
          alt: 'A sommelier with a glass of wine in a cellar',
          title: 'International Sommelier Guild',
          body: 'Sommelier certification and professional training with an international diploma. OenoHub.ge represents the Guild in the Caucasus region.',
          cta: 'Explore programs',
        },
        {
          alt: 'Whisky tasting glasses on a dark wooden table',
          title: 'Edinburgh Whisky Academy',
          body: 'Whisky education and certificates from the Scottish academy — for beverage-industry professionals and enthusiasts.',
          cta: 'Explore courses',
        },
      ],
    },
    stats: [
      'companies in the ecosystem',
      'industry directions',
      'international franchises',
      'unified platform',
    ],
    quote: {
      text: '“Wine begins in the vineyard and ends in an experience — we unite every link along the way.”',
      by: '— The OenoHub.ge Team',
    },
    cta: {
      headingPre: 'Join the ',
      headingItalic: 'ecosystem',
      text: 'Get in touch — let’s discuss which company or program best fits your business.',
      primary: 'Contact Us',
      secondary: 'See the Companies',
    },
  },
  eco: {
    hero: {
      eyebrow: '— ECOSYSTEM —',
      h1: ['“11', 'companies,', 'one', 'vision”'],
      sub: 'The OenoHub.ge ecosystem covers the full wine and agro value chain — from technology in the vineyard to production and packaging, logistics and international education.',
    },
    filter: {
      label: 'Category:',
      all: 'All',
      education: 'Education',
    },
    categories: {
      tech: {
        badge: 'Technology & AI',
        heading: '“Digital tools for the vineyard and the cellar”',
        blurb: 'AI analytics, monitoring and oenological protocols — data-driven decisions.',
      },
      distribution: {
        badge: 'Distribution',
        heading: '“Giving small and medium wineries a voice in the market”',
        blurb:
          'Exclusive distribution across HoReCa and retail — the company where it all began.',
      },
      packaging: {
        badge: 'Production & Packaging',
        heading: '“European-quality packaging for Georgian wine”',
        blurb: 'Bottles, corks and filtration — everything that preserves a wine’s form and quality.',
      },
      logistics: {
        badge: 'Logistics & Services',
        heading: '“Infrastructure and expertise”',
        blurb: 'From warehouse to strategy — the backbone that makes the ecosystem whole.',
      },
    },
    details: 'Learn more',
    detailsNoun: 'Details',
    founderBadge: 'Founding company',
    modal: {
      features: 'Key features',
      member: 'OenoHub.ge — ecosystem member',
      visit: 'Visit website',
    },
    companies: {
      winehub: {
        tagline: 'Exclusive distributor of small and medium wineries',
        description:
          'Wine Hub is the founding company of the ecosystem — where it all began: exclusive distribution of small and medium wineries across wine and spirits.',
        long: [
          'Wine Hub is the founding company of the OenoHub.ge ecosystem — where it all began: an exclusive distributor of small and medium wineries for wine and spirits, based in Tbilisi (8 G. Kartozia St, 0177).',
          'The company works with independent wineries whose voices are rarely heard in large retail chains: Wine Hub places their products across HoReCa and retail — with curation, logistics and brand support.',
          'It was Wine Hub’s daily practice that revealed the industry’s gaps — technology, packaging, logistics and education — the gaps the ecosystem’s other companies were later created to fill.',
        ],
        chips: ['Exclusive distribution', 'Small & medium wineries', 'HoReCa and retail network'],
        linkLabel: 'Facebook page',
      },
      winelens: {
        tagline: 'Digital wine analytics and management',
        description:
          'The winemaker’s everyday tool: vineyard monitoring, winemaking protocols, a variety catalogue and pest diagnostics — on a single platform.',
        long: [
          'Winelens.ge is the winemaker’s everyday digital instrument: vineyard monitoring, winemaking protocols, a variety catalogue and pest diagnostics — all on one platform.',
          'The platform combines a seasonal vineyard calendar, a log of technological operations and a cellar-management module — at any stage, the winemaker sees what happened, what is happening and what must happen in their cellar.',
          'Winelens.ge is integrated with the ecosystem’s other companies: its analytics feed on VineAI’s vineyard-monitoring data, while its winemaking protocols draw on Oeno.ge’s oenological knowledge base.',
        ],
        chips: ['Vineyard monitoring', 'Winemaking protocols', 'Variety catalogue', 'Pest diagnostics'],
      },
      vineai: {
        tagline: 'An AI assistant for viticulture',
        description:
          'Artificial intelligence at every step in the vineyard: satellite monitoring, leaf scanning for early disease detection and 21 specialized modules for viticulture.',
        long: [
          'VineAI.ge applies artificial intelligence at every step of viticulture: satellite monitoring to assess vineyard condition, leaf scanning for early disease detection and 21 specialized AI modules for the grower.',
          'The platform processes satellite imagery, weather data and photo diagnostics so that the grower can catch a disease at its earliest, invisible stage and plan the harvest forecast with precision.',
          'VineAI’s recommendations account for the specifics of Georgian varieties and terroir — from Rkatsiteli to Saperavi, grounded in the real conditions of Kakhetian and Kartlian vineyards.',
        ],
        chips: ['Satellite monitoring', 'Leaf scanning', '21 AI modules', 'Disease forecasting'],
      },
      agroai: {
        tagline: 'Agro AI for all of agriculture',
        description:
          'An AI platform for Georgia’s farmers: pest recognition from photos, personalized agronomic advice and market integration for selling produce.',
        long: [
          'AgroAI.ge is an artificial-intelligence platform for Georgia’s farmers: pest recognition from photos, personalized agronomic advice and market integration for selling produce.',
          'A farmer photographs a crop with a mobile phone, and the platform identifies the pest or disease within seconds, offering a concrete, locally adapted treatment plan.',
          'AgroAI.ge places the wine industry in a broader agro context — the ecosystem’s technological expertise now serves all of agriculture.',
        ],
        chips: ['Pest recognition', 'Agro advice', 'Market integration', 'For farmers'],
      },
      oeno: {
        tagline: 'A digital oenology platform',
        description:
          'A digital center of oenology: a catalogue of fining agents and products, winemaking protocols and technical documentation — the cellar’s everyday workbench.',
        long: [
          'Oeno.ge is a digital center of oenology: a catalogue of fining agents and products, winemaking protocols and technical documentation — the cellar’s everyday workbench.',
          'The platform gathers yeasts, fining agents and oenological materials with full technical specifications — dosing, conditions of use and compliance certificates.',
          'Oeno.ge’s protocols are grounded in practicing oenologists’ experience and, together with the ecosystem’s other companies — Filtrox and Vidrala — cover the full wine-production cycle.',
        ],
        chips: ['Product catalogue', 'Fining agents', 'Oenological protocols', 'Technical documentation'],
      },
      vidrala: {
        tagline: 'Premium glass packaging',
        description:
          'Vidrala glass wine bottles — in various shapes, colors and volumes. A European manufacturing standard that begins shaping a wine’s image before the label.',
        long: [
          'Vidrala.ge supplies Georgia with glass wine bottles from the European manufacturer Vidrala — in various shapes, colors and volumes, from Bordeaux and Burgundy silhouettes to bespoke series.',
          'The bottle is a wine’s first touch with the consumer: the quality, weight and color of the glass define the product’s positioning before the label ever does. The Vidrala standard makes that first touch premium.',
          'The team provides full customs and logistics support — from order to delivery at the cellar door, via the ecosystem’s Primelogistics infrastructure.',
        ],
        chips: ['Bottles', 'Various shapes and volumes', 'European production', 'Customs support'],
      },
      agglotap: {
        tagline: 'Agglomerated corks',
        description:
          'AggloTap agglomerated corks — a modern, reliable and economical wine-closure solution with technological precision.',
        long: [
          'AggloTap.ge produces and supplies agglomerated corks — a modern, reliable and economical wine-closure solution with technological precision.',
          'Agglomerated cork provides a stable, predictable seal without TCA risk — every stopper has identical density and elasticity, which is critical for large-scale production.',
          'The range also includes technical stoppers for sparkling and spirits — batches selected through tasting and laboratory control.',
        ],
        chips: ['Agglomerated cork', 'Consistent quality', 'Technical stoppers', 'Mass production'],
      },
      portugaliacork: {
        tagline: 'Portuguese natural cork',
        description:
          'Natural cork stoppers imported from Portugal — premium quality, a sustainable and renewable material for long-term wine aging.',
        long: [
          'PortugalCork.ge supplies Georgian cellars with natural cork stoppers imported from Portugal — a premium, sustainable and renewable material.',
          'Natural cork is the gold standard of long-term wine aging: its micro-oxygenation gently develops aromatics and softens tannins — from Saperavi to any reserve collection.',
          'Every batch undergoes laboratory control in Portugal, while delivery runs through the ecosystem’s logistics chain — with temperature control and full documentation.',
        ],
        chips: ['Natural cork', 'Portuguese raw material', 'Premium segment', 'Sustainability'],
      },
      filtrox: {
        tagline: 'Filtration systems',
        description:
          'Filtrox filtration systems and filter sheets — for the wine and beverage industry. Purity and stability in every liter.',
        long: [
          'Filtrox.ge represents the Swiss company Filtrox’s filtration systems and filter sheets in Georgia — for the wine and beverage industry.',
          'Filtration guarantees a wine’s clarity and microbiological stability: choosing the right sheet — surface, sterile or polishing — defines the quality of every liter.',
          'The team provides equipment selection, installation and on-site technical support — fully compatible with Oeno.ge’s oenological protocols.',
        ],
        chips: ['Filter sheets', 'Filtration equipment', 'Wine & beverages', 'Technical support'],
      },
      primelogistics: {
        tagline: 'Logistics and warehouse management',
        description:
          'A 200 m² modern warehouse, digital inventory management and full 3PL services — with conditions suited to wine and agro products.',
        long: [
          'Primelogistics.ge is the ecosystem’s logistical backbone: a 200 m² modern warehouse, digital inventory management and full 3PL services.',
          'Wine and agro products are sensitive cargo — temperature control, precise location tracking and documented storage conditions are standard procedure.',
          'Primelogistics serves every company in the ecosystem: from Vidrala’s bottles to Filtrox’s equipment — storage, accounting and distribution from a single system.',
        ],
        chips: ['200 m² warehouse', 'Inventory management', '3PL services', 'Temperature control'],
      },
      gs: {
        tagline: 'Strategic consulting',
        description:
          'Consulting services for the wine and agro business: strategy, technology audits and go-to-market plans — grounded in the ecosystem’s experience.',
        long: [
          'GS Consulting provides consulting services to the wine and agro business: strategy, technology audits and go-to-market plans — grounded in the ecosystem’s practical experience.',
          'The team works with cellars, vineyards and agro-startups: building business models, financial modeling, export strategy and digital-transformation roadmaps.',
          'GS Consulting’s advantage is its insider’s view of the ecosystem — its recommendations are written with the tools and infrastructure that work daily across OenoHub.ge’s companies.',
        ],
        chips: ['Business strategy', 'Technology audit', 'Go-to-market', 'Export support'],
      },
    },
    eduBand: {
      badge: 'Education',
      text: 'The ecosystem’s educational arm — the official representation of two international franchises in the Caucasus region.',
      link: 'Education page',
    },
    flow: {
      eyebrow: '— ONE CHAIN —',
      headingPre: 'How we work ',
      headingItalic: 'together',
      sub: 'Four directions join into a single chain — the client receives a complete service, from vineyard to market.',
      stages: ['Technology', 'Production & Packaging', 'Logistics', 'Education'],
    },
    cta: {
      headingPre: 'Not sure ',
      headingItalic: 'where to start?',
      text: 'Write to us — we’ll advise which ecosystem company or combination precisely covers your needs.',
      primary: 'Contact Us',
    },
  },
  education: {
    hero: {
      eyebrow: '— EDUCATION & CERTIFICATION —',
      h1: ['“World-class', 'education', '—', 'in', 'the Caucasus”'],
      subPre: 'OenoHub.ge is the official franchise holder of ',
      subMid1: ' and ',
      subMid2: ' in the Caucasus region. International diplomas and professional standards — locally, in Georgian.',
      primary: 'Sommelier Programs',
      secondary: 'Whisky Courses',
      alt1: 'A sommelier with a glass of wine in a dark cellar',
      alt2: 'Whisky glasses on a dark wooden table',
    },
    banner: {
      text: '“OenoHub.ge — official franchise holder in the Caucasus region”',
    },
    franchiseBadge: 'Official franchise · Caucasus region',
    quoteOpen: '“',
    quoteClose: '”',
    programCta: 'Request a Program',
    isg: {
      lead: 'The international standard of sommelier training — now in the Caucasus. Professional courses, tasting technique and the art of service, crowned by an international certificate.',
      programs: [
        {
          title: 'Foundation Sommelier Course',
          desc: 'Wine history, key regions, tasting fundamentals, service etiquette.',
        },
        {
          title: 'Tasting Technique',
          desc: 'Blind tasting, an aroma library, structural analysis.',
        },
        {
          title: 'Certification & Exam',
          desc: 'Assessment to the international standard and the ISG diploma.',
        },
      ],
      checklist: [
        'An internationally recognized diploma',
        'Practical tastings with Georgian and international wines',
        'A connection to the Caucasus sommelier network',
      ],
      imageAlt: 'A sommelier in a dark cellar with a glass of wine',
      emblemAlt: 'International Sommelier Guild emblem',
    },
    ewa: {
      lead: 'Official programs of the Scottish whisky academy in the Caucasus region — for beverage-industry professionals, bar managers and whisky enthusiasts.',
      programs: [
        {
          title: 'Foundation Whisky Course',
          desc: 'The production process, regions, styles and terminology.',
        },
        {
          title: 'Tasting & Assessment',
          desc: 'Professional tasting methodology, aroma and flavor profiles.',
        },
        {
          title: 'Certificate & Career',
          desc: 'An EWA certificate — a qualification recognized across the industry.',
        },
      ],
      checklist: [
        'The official Edinburgh Whisky Academy certificate',
        'Scottish teaching methodology and materials',
        'Practical sessions with premium whisky samples',
      ],
      imageAlt: 'Whisky glasses on a dark wooden table',
      emblemAlt: 'Edinburgh Whisky Academy emblem',
    },
    audience: {
      eyebrow: '— AUDIENCE —',
      heading: '“Who these programs are for”',
      items: [
        { title: 'HoReCa Professionals', desc: 'Waiters, bartenders, restaurant managers' },
        { title: 'The Wine Industry', desc: 'Winemakers, distributors, importers' },
        { title: 'Enthusiasts', desc: 'Wine and whisky lovers in search of depth' },
        { title: 'Career Builders', desc: 'Those planning a professional step into the industry' },
      ],
    },
    steps: {
      eyebrow: '— THE PROCESS —',
      heading: '“How to enroll”',
      items: [
        { title: 'Application', desc: 'Fill in the form or contact us directly.' },
        { title: 'Consultation', desc: 'Together we choose the right program and group.' },
        { title: 'Studies', desc: 'Theoretical and practical sessions in Tbilisi.' },
        { title: 'Certificate', desc: 'An international diploma from ISG or EWA.' },
      ],
    },
    cta: {
      headingPre: 'Begin your ',
      headingItalic: 'professional',
      headingPost: ' journey',
      text: 'Sommelier studies or whisky — both paths begin with a single application.',
      primary: 'Send an Application',
      secondary: 'See the Ecosystem',
    },
  },
  about: {
    hero: {
      eyebrow: '— ABOUT US —',
      title: ['One', 'brand', '—', 'an entire', 'industry'],
      sub: 'OenoHub.ge was born of a simple idea: the Georgian wine industry deserves a unified, modern, interconnected ecosystem — from vineyard to glass.',
    },
    story: {
      eyebrow: '— OUR STORY —',
      heading: 'How the ecosystem took shape',
      paragraphs: [
        'Georgia is the cradle of wine — with an 8,000-year tradition. But tradition alone is not enough: a modern industry demands technology, quality packaging, logistics and education. These gaps were visible in the daily work of thousands of Georgian winemakers.',
        'The OenoHub.ge ecosystem was created precisely to fill these gaps — step by step: first digital tools for viticulture and oenology, then European supplies of packaging and filtration, logistics and consulting, and finally international education.',
        'Today, 11 companies work as a single organism. Each is a leader in its field; together they form a complete chain the Georgian wine industry has never had before.',
      ],
    },
    mission: {
      cards: [
        {
          title: 'Mission',
          text: 'To deliver tools, quality and knowledge to every player in the wine and agro industry — from a single trusted source.',
        },
        {
          title: 'Vision',
          text: 'The Caucasus as a modern center of the wine industry — where tradition and technology strengthen one another.',
        },
        {
          title: 'Values',
          text: 'Quality without compromise · Transparent partnership · Sharing knowledge · Sustainable development.',
        },
      ],
    },
    ring: {
      headingPre: 'A circle that never ',
      italic1: 'begins',
      headingMid: ' and never ',
      italic2: 'ends',
      labels: ['Technology', 'Production', 'Packaging', 'Logistics', 'Education'],
      alt: 'OenoHub.ge ecosystem ring diagram',
      text: 'Our ecosystem is not linear — it is circular. Education creates professionals who use our technology; technology grows production; production needs packaging and logistics — and everything returns once more to knowledge.',
    },
    timeline: {
      eyebrow: '— THE JOURNEY —',
      heading: 'Stages of the ecosystem’s formation',
      stages: [
        {
          title: 'The beginning — Wine Hub',
          text: 'It all began with Wine Hub — the distribution of small and medium wineries. Then Winelens.ge and Oeno.ge laid the digital foundation of the wine industry, followed by VineAI.ge and AgroAI.ge — AI in viticulture and agriculture.',
        },
        {
          title: 'The packaging stage',
          text: 'Vidrala.ge, AggloTap.ge and PortugalCork.ge: three pillars of European packaging — glass, technical and natural cork.',
        },
        {
          title: 'Filtration & quality',
          text: 'Filtrox.ge joined the ecosystem with its standard of wine purity.',
        },
        {
          title: 'Logistics & expertise',
          text: 'Primelogistics.ge’s 200 m² warehouse and GS Consulting’s strategic team joined the chain.',
        },
        {
          title: 'The education stage',
          text: 'The International Sommelier Guild and Edinburgh Whisky Academy franchises for the Caucasus — closing the ecosystem’s full circle.',
        },
      ],
    },
    atmosphere: {
      quote: '“We are building an industry that our children, too, will inherit.”',
      alt: 'The OenoHub.ge team in a wine cellar',
    },
    cta: {
      headingPre: 'Discover the ',
      headingItalic: 'ecosystem',
      headingPost: ' up close',
      primary: '11 Companies',
      secondary: 'Contact',
    },
  },
  contact: {
    hero: {
      eyebrow: '— CONTACT —',
      h1: 'Get in Touch',
      sub: 'Whether you want to join the ecosystem, order packaging, earn a certification or need a consultation — one message is enough.',
    },
    form: {
      title: 'Send Us a Message',
      name: 'Full name',
      namePh: 'e.g. Giorgi Meladze',
      email: 'Email',
      phone: 'Phone (optional)',
      phonePh: '+995 5__ __ __ __',
      topic: 'Topic',
      topicPh: 'Choose a topic…',
      topics: [
        'General question',
        'Technology & AI (Winelens · VineAI · AgroAI · Oeno)',
        'Production & packaging (Vidrala · AggloTap · PortugalCork · Filtrox)',
        'Logistics & consulting (Primelogistics · GS Consulting)',
        'Education (Sommelier Guild · Whisky Academy)',
        'Partnership',
      ],
      message: 'Message',
      messagePh: 'Tell us briefly what you’re interested in…',
      submit: 'Send',
      errName: 'Please enter your full name',
      errEmail: 'Please enter your email',
      errEmailFormat: 'The email format is incorrect',
      errTopic: 'Please choose a topic',
      errMessage: 'Please write a message',
      successTitle: 'Message sent!',
      successText: 'We’ll get back to you soon.',
      backHome: 'Back to Home',
    },
    direct: {
      title: 'Direct Contact',
      address: 'Address',
      addressValue: 'Tbilisi, Georgia',
      email: 'Email',
      phone: 'Phone',
      hours: 'Working hours',
      hoursValue: 'Mon–Fri, 10:00–19:00',
      socials: 'Social media',
    },
    directory: {
      eyebrow: '— QUICK ACCESS —',
      heading: 'Straight to the company',
      text: 'Know exactly what you need? Choose a company and go directly to its website.',
    },
    faq: {
      eyebrow: '— QUESTIONS —',
      heading: 'Frequently Asked Questions',
      items: [
        {
          q: 'What is OenoHub.ge?',
          a: 'A unified ecosystem platform bringing together 11 wine and agro-industry companies and two international education franchises — from technology to education.',
        },
        {
          q: 'How do I order packaging (bottles, corks)?',
          a: 'Choose the relevant company (Vidrala.ge, AggloTap.ge, PortugalCork.ge) and go to its website, or write to us here — we’ll route you to the right team.',
        },
        {
          q: 'Where are the sommelier and whisky courses held?',
          a: 'In Tbilisi, at the OenoHub.ge training space. We are the official franchise holder of the International Sommelier Guild and the Edinburgh Whisky Academy in the Caucasus region.',
        },
        {
          q: 'Is an international certificate issued?',
          a: 'Yes. Upon completing the ISG and EWA programs you receive the respective organization’s official, internationally recognized certificate.',
        },
        {
          q: 'I’m a farmer — which service helps me?',
          a: 'AgroAI.ge (pest recognition and advice) and VineAI.ge (for viticulture); for production and sales — the ecosystem’s other companies.',
        },
        {
          q: 'Is partnership with the ecosystem possible?',
          a: 'Yes, we are open to collaboration. Choose the “Partnership” topic in the form or write to us at info@oenohub.ge.',
        },
      ],
    },
    location: {
      text: 'Tbilisi, Georgia — in the heart of the homeland of wine',
      link: 'Home page',
    },
  },
}
