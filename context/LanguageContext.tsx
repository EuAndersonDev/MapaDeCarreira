'use client';

import { createContext, useContext, useState } from 'react';

type Locale = 'pt' | 'en';
const LanguageContext = createContext<{
  locale: Locale
  toggleLocale: () => void
}>({ locale: 'pt', toggleLocale: () => {} });

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>('pt')
  const toggleLocale = () => setLocale(l => l === 'pt' ? 'en' : 'pt')
  return (
    <LanguageContext.Provider value={{ locale, toggleLocale }}>
      {children}
    </LanguageContext.Provider>
  )
}
export const useLanguage = () => useContext(LanguageContext)