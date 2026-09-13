import type { Lang } from './LanguageContext'

/** English pages live under the /en path prefix; everything else is Georgian. */
export function langFromPath(pathname: string): Lang {
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'ka'
}

/** Map a pathname to its equivalent in the given language's prefix. */
export function localizedPath(pathname: string, lang: Lang): string {
  const rest = pathname.replace(/^\/en(?=\/|$)/, '') || '/'
  if (lang === 'en') return rest === '/' ? '/en' : `/en${rest}`
  return rest
}
