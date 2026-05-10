"use client";

import * as React from "react";

import type { Locale } from "@/lib/content";

type LanguageContextValue = {
  locale: Locale;
  toggleLocale: () => void;
  setLocale: (locale: Locale) => void;
};

const LanguageContext = React.createContext<LanguageContextValue | undefined>(undefined);

const STORAGE_KEY = "btc-language";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = React.useState<Locale>("en");

  React.useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (stored === "en" || stored === "hi") {
      setLocaleState(stored);
    }
  }, []);

  const setLocale = React.useCallback((value: Locale) => {
    setLocaleState(value);
    window.localStorage.setItem(STORAGE_KEY, value);
  }, []);

  const toggleLocale = React.useCallback(() => {
    setLocale(locale === "en" ? "hi" : "en");
  }, [locale, setLocale]);

  const value = React.useMemo(
    () => ({
      locale,
      toggleLocale,
      setLocale,
    }),
    [locale, setLocale, toggleLocale],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = React.useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }

  return context;
}
