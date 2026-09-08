import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { en } from './en'
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

function readStoredLang(): Lang {
  if (typeof window === 'undefined') return 'ka'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  return stored === 'en' || stored === 'ka' ? stored : 'ka'
}

function resolvePath(dict: unknown, path: string): string {
  let node: unknown = dict
  for (const part of path.split('.')) {
    if (node == null || typeof node !== 'object') return path
    node = (node as Record<string, unknown>)[part]
  }
  return typeof node === 'string' ? node : path
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readStoredLang)

  useEffect(() => {
    document.documentElement.lang = lang
    window.localStorage.setItem(STORAGE_KEY, lang)
  }, [lang])

  const value = useMemo<LanguageContextValue>(() => {
    const d = DICTS[lang]
    return {
      lang,
      setLang: setLangState,
      d,
      t: (path: string) => resolvePath(d, path),
    }
  }, [lang])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLang(): LanguageContextValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used within LanguageProvider')
  return ctx
}
