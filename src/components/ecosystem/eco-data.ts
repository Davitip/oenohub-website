export type EcoCategoryId = 'tech' | 'distribution' | 'packaging' | 'logistics'
export type FilterKey = 'all' | EcoCategoryId

export interface EcoCompany {
  id:
    | 'winehub'
    | 'winelens'
    | 'vineai'
    | 'agroai'
    | 'oeno'
    | 'vidrala'
    | 'agglotap'
    | 'portugaliacork'
    | 'filtrox'
    | 'primelogistics'
    | 'gs'
  name: string
  logo: string
  url: string
  linkLabel: string
  category: EcoCategoryId
}

export interface EcoCategory {
  id: EcoCategoryId
  anchor: string
  badgeClass: string
  sectionClass: string
  cardClass: string
  /** alternate x-direction stagger for section B */
  alternate?: boolean
  decor?: 'cork'
}

export const ECO_CATEGORIES: EcoCategory[] = [
  {
    id: 'tech',
    anchor: 'cat-tech',
    badgeClass: 'border-vine-green/25 bg-vine-green/10 text-vine-green',
    sectionClass: 'bg-cream-50',
    cardClass: 'border-cream-200 bg-cream-100',
  },
  {
    id: 'distribution',
    anchor: 'cat-distribution',
    badgeClass: 'border-burgundy-700/30 bg-burgundy-700/10 text-burgundy-800',
    sectionClass: 'bg-cream-100',
    cardClass: 'border-cream-200 bg-cream-50',
    alternate: true,
  },
  {
    id: 'packaging',
    anchor: 'cat-packaging',
    badgeClass: 'border-gold-500/30 bg-gold-500/15 text-[#8A6D12]',
    sectionClass: 'bg-cream-100',
    cardClass: 'border-cream-200 bg-cream-50',
    alternate: true,
    decor: 'cork',
  },
  {
    id: 'logistics',
    anchor: 'cat-logistics',
    badgeClass: 'border-burgundy-700/25 bg-burgundy-700/10 text-burgundy-700',
    sectionClass: 'bg-cream-50',
    cardClass: 'border-cream-200 bg-cream-100',
  },
]

export const FILTER_PILLS: { key: FilterKey }[] = [
  { key: 'all' },
  { key: 'tech' },
  { key: 'distribution' },
  { key: 'packaging' },
  { key: 'logistics' },
]

export const ECO_COMPANIES: EcoCompany[] = [
  {
    id: 'winehub',
    name: 'Wine Hub',
    logo: '/logo-winehub.svg',
    url: 'https://www.facebook.com/winehub.ge',
    linkLabel: 'facebook.com/winehub.ge',
    category: 'distribution',
  },
  {
    id: 'winelens',
    name: 'Winelens.ge',
    logo: '/logo-winelens.svg',
    url: 'https://winelens.ge',
    linkLabel: 'winelens.ge',
    category: 'tech',
  },
  {
    id: 'vineai',
    name: 'VineAI.ge',
    logo: '/logo-vineai.svg',
    url: 'https://vineai.ge',
    linkLabel: 'vineai.ge',
    category: 'tech',
  },
  {
    id: 'agroai',
    name: 'AgroAI.ge',
    logo: '/logo-agroai.svg',
    url: 'https://agroai.ge',
    linkLabel: 'agroai.ge',
    category: 'tech',
  },
  {
    id: 'oeno',
    name: 'Oeno.ge',
    logo: '/logo-oeno.svg',
    url: 'https://oeno.ge',
    linkLabel: 'oeno.ge',
    category: 'tech',
  },
  {
    id: 'vidrala',
    name: 'Vidrala.ge',
    logo: '/logo-vidrala.svg',
    url: 'https://vidrala.ge',
    linkLabel: 'vidrala.ge',
    category: 'packaging',
  },
  {
    id: 'agglotap',
    name: 'AggloTap.ge',
    logo: '/logo-agglotap.svg',
    url: 'https://agglotap.ge',
    linkLabel: 'agglotap.ge',
    category: 'packaging',
  },
  {
    id: 'portugaliacork',
    name: 'PortugalCork.ge',
    logo: '/logo-portugaliacork.svg',
    url: 'https://portugaliacork.ge',
    linkLabel: 'portugaliacork.ge',
    category: 'packaging',
  },
  {
    id: 'filtrox',
    name: 'Filtrox.ge',
    logo: '/logo-filtrox.svg',
    url: 'https://filtrox.ge',
    linkLabel: 'filtrox.ge',
    category: 'packaging',
  },
  {
    id: 'primelogistics',
    name: 'Primelogistics.ge',
    logo: '/logo-primelogistics.svg',
    url: 'https://primelogistics.ge',
    linkLabel: 'primelogistics.ge',
    category: 'logistics',
  },
  {
    id: 'gs',
    name: 'GS Consulting',
    logo: '/logo-gs.svg',
    url: 'https://gsconsulting.ge',
    linkLabel: 'gsconsulting.ge',
    category: 'logistics',
  },
]

export const companiesByCategory = (id: EcoCategoryId) =>
  ECO_COMPANIES.filter((c) => c.category === id)
