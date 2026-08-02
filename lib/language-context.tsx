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

type Language = 'en' | 'ar'

type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
  toggleLanguage: () => void
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

    if (savedLanguage === 'en' || savedLanguage === 'ar') {
      setLanguage(savedLanguage)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('ics-pro-language', language)

    document.documentElement.lang = language
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
  }, [language])

  const toggleLanguage = () => {
    setLanguage((current) => (current === 'en' ? 'ar' : 'en'))
  }

  const t = language === 'ar' ? ar : en
  const dir = language === 'ar' ? 'rtl' : 'ltr'

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
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