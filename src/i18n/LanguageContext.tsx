import { createContext, useContext, useEffect, useMemo, type ReactNode } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { en } from './en'
import { langFromPath, localizedPath } from './localePath'
import { ka } from './ka'

export type Lang = 'ka' | 'en'
export type Dictionary = typeof ka

const STORAGE_KEY = 'oenohub-lang'

const DICTS: Record<Lang, Dictionary> = { ka, en }

interface LanguageContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  /** The full dictionary for the active language. */
  d: Dictionary
  /** Resolve a dotted key path (e.g. 'nav.home') to a string. */
  t: (path: string) => string
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function resolvePath(dict: unknown, path: string): string {
  let node: unknown = dict
  for (const part of path.split('.')) {
    if (node == null || typeof node !== 'object') return path
    node = (node as Record<string, unknown>)[part]
  }
  return typeof node === 'string' ? node : path
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const location = useLocation()
  const navigate = useNavigate()
  // The URL is the source of truth: /en/* renders English, everything else Georgian.
  // localStorage only disambiguates the very first visit before any navigation.
  const lang: Lang = langFromPath(location.pathname)

  useEffect(() => {
    document.documentElement.lang = lang
    window.localStorage.setItem(STORAGE_KEY, lang)
  }, [lang])

  const value = useMemo<LanguageContextValue>(() => {
    const d = DICTS[lang]
    return {
      lang,
      setLang: (next: Lang) => {
        if (next === lang) return
        const target = localizedPath(location.pathname, next)
        navigate(target + location.search + location.hash)
      },
      d,
      t: (path: string) => resolvePath(d, path),
    }
  }, [lang, location.pathname, location.search, location.hash, navigate])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLang(): LanguageContextValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used within LanguageProvider')
  return ctx
}
