export type CompanyCategory = 'tech' | 'packaging' | 'logistics' | 'education'
export type CompanyId =
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

export interface Company {
  id: CompanyId
  name: string
  logo: string
  category: CompanyCategory
  url: string
}

/** Accent color per category (badge / card top strip) */
export const CATEGORY_COLORS: Record<CompanyCategory, string> = {
  tech: '#5A6B3F',
  packaging: '#C9A227',
  logistics: '#8A1E42',
  education: '#DDBC4E',
}

export const COMPANIES: Company[] = [
  {
    id: 'winelens',
    name: 'Winelens.ge',
    logo: '/logo-winelens.svg',
    category: 'tech',
    url: 'https://winelens.ge',
  },
  {
    id: 'vineai',
    name: 'VineAI.ge',
    logo: '/logo-vineai.svg',
    category: 'tech',
    url: 'https://vineai.ge',
  },
  {
    id: 'agroai',
    name: 'AgroAI.ge',
    logo: '/logo-agroai.svg',
    category: 'tech',
    url: 'https://agroai.ge',
  },
  {
    id: 'oeno',
    name: 'Oeno.ge',
    logo: '/logo-oeno.svg',
    category: 'tech',
    url: 'https://oeno.ge',
  },
  {
    id: 'vidrala',
    name: 'Vidrala.ge',
    logo: '/logo-vidrala.svg',
    category: 'packaging',
    url: 'https://vidrala.ge',
  },
  {
    id: 'agglotap',
    name: 'AggloTap.ge',
    logo: '/logo-agglotap.svg',
    category: 'packaging',
    url: 'https://agglotap.ge',
  },
  {
    id: 'portugaliacork',
    name: 'PortugalCork.ge',
    logo: '/logo-portugaliacork.svg',
    category: 'packaging',
    url: 'https://portugaliacork.ge',
  },
  {
    id: 'filtrox',
    name: 'Filtrox.ge',
    logo: '/logo-filtrox.svg',
    category: 'packaging',
    url: 'https://filtrox.ge',
  },
  {
    id: 'primelogistics',
    name: 'Primelogistics.ge',
    logo: '/logo-primelogistics.svg',
    category: 'logistics',
    url: 'https://primelogistics.ge',
  },
  {
    id: 'gs',
    name: 'GS Consulting',
    logo: '/logo-gs.svg',
    category: 'logistics',
    url: 'https://gsconsulting.ge',
  },
]
