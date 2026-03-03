import React, { createContext, useContext, useState, ReactNode } from "react";
import en from "./locales/en.json";
import ur from "./locales/ur.json";

const translations = { en, ur };
export type Language = keyof typeof translations;
let currentLanguage: Language = "en";

export function setLanguage(lang: Language) {
  if (translations[lang]) {
    currentLanguage = lang;
  }
}

export function getLanguage(): Language {
  return currentLanguage;
}

export const availableLanguages: Language[] = Object.keys(translations) as Language[];

export function t(key: string): string {
  const parts = key.split(".");
  let value: any = translations[currentLanguage];
  for (const part of parts) {
    if (value == null) return key;
    value = value[part];
  }
  return typeof value === "string" ? value : key;
}

// --- React context for language changes ---
interface LanguageContextValue {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLang] = useState<Language>(currentLanguage);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang); // update internal var
    setLang(lang); // trigger React updates
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}

