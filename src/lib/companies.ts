export type CompanyCategory = 'tech' | 'packaging' | 'logistics' | 'education'

export interface Company {
  name: string
  logo: string
  description: string
  category: CompanyCategory
  url: string
}

export const CATEGORY_LABELS: Record<CompanyCategory, string> = {
  tech: 'ტექნოლოგია და AI',
  packaging: 'ტარა და წარმოება',
  logistics: 'ლოგისტიკა და სერვისები',
  education: 'განათლება',
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
    name: 'Winelens.ge',
    logo: '/logo-winelens.svg',
    description: 'ღვინის ციფრული ანალიტიკისა და მართვის პლატფორმა მეღვინეებისთვის.',
    category: 'tech',
    url: 'https://winelens.ge',
  },
  {
    name: 'VineAI.ge',
    logo: '/logo-vineai.svg',
    description: 'AI-დამხმარე მევენახეობისთვის: მონიტორინგი, დიაგნოსტიკა, 21 მოდული.',
    category: 'tech',
    url: 'https://vineai.ge',
  },
  {
    name: 'AgroAI.ge',
    logo: '/logo-agroai.svg',
    description: 'აგრო AI პლატფორმა მთელი სოფლის მეურნეობისთვის.',
    category: 'tech',
    url: 'https://agroai.ge',
  },
  {
    name: 'Oeno.ge',
    logo: '/logo-oeno.svg',
    description: 'ენოლოგიური ციფრული პლატფორმა და პროდუქტების კატალოგი.',
    category: 'tech',
    url: 'https://oeno.ge',
  },
  {
    name: 'Vidrala.ge',
    logo: '/logo-vidrala.svg',
    description: 'პრემიუმ მინის ტარა: ღვინის ბოთლები ნებისმიერი ფორმისა და მოცულობის.',
    category: 'packaging',
    url: 'https://vidrala.ge',
  },
  {
    name: 'AggloTap.ge',
    logo: '/logo-agglotap.svg',
    description: 'აგლომერირებული საცობები ღვინის დახურვისთვის.',
    category: 'packaging',
    url: 'https://agglotap.ge',
  },
  {
    name: 'PortugalCork.ge',
    logo: '/logo-portugaliacork.svg',
    description: 'პორტუგალიური ბუნებრივი ქორქი — პრემიუმ საცობები.',
    category: 'packaging',
    url: 'https://portugaliacork.ge',
  },
  {
    name: 'Filtrox.ge',
    logo: '/logo-filtrox.svg',
    description: 'ფილტრაციის სისტემები ღვინისა და სასმელების ინდუსტრიისთვის.',
    category: 'packaging',
    url: 'https://filtrox.ge',
  },
  {
    name: 'Primelogistics.ge',
    logo: '/logo-primelogistics.svg',
    description: 'ლოგისტიკა, 200 მ² საწყობი, 3PL სერვისები.',
    category: 'logistics',
    url: 'https://primelogistics.ge',
  },
  {
    name: 'GS Consulting',
    logo: '/logo-gs.svg',
    description: 'სტრატეგია და კონსალტინგი ღვინისა და აგრო ბიზნესისთვის.',
    category: 'logistics',
    url: 'https://gsconsulting.ge',
  },
]
