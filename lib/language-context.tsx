'use client'

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'

import { en } from '@/translations/en'
import { ar } from '@/translations/ar'
import { ku } from '@/translations/ku'

type Language = 'en' | 'ar' | 'ku'

type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
  t: typeof en
  dir: 'ltr' | 'rtl'
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  useEffect(() => {
    const savedLanguage = localStorage.getItem('ics-pro-language')

    if (
      savedLanguage === 'en' ||
      savedLanguage === 'ar' ||
      savedLanguage === 'ku'
    ) {
      setLanguage(savedLanguage)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('ics-pro-language', language)

    document.documentElement.lang = language
    document.documentElement.dir =
      language === 'ar' || language === 'ku' ? 'rtl' : 'ltr'
  }, [language])

  const t =
    language === 'ar'
      ? ar
      : language === 'ku'
        ? ku
        : en

  const dir =
    language === 'ar' || language === 'ku' ? 'rtl' : 'ltr'

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
        dir,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }

  return context
}