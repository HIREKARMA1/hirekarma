"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  DEFAULT_LOCALE,
  readStoredLocale,
  writeStoredLocale,
} from "@/lib/i18n/locales";
import { getAboutPageContentSync } from "@/services/about-page";
import type { AboutPageContent, Locale } from "@/types/about-page";

interface AboutLocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  content: AboutPageContent;
}

const AboutLocaleContext = createContext<AboutLocaleContextValue | null>(null);

export function AboutLocaleProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setLocaleState(readStoredLocale());
    setHydrated(true);

    const onLocaleChange = (event: Event) => {
      const detail = (event as CustomEvent<Locale>).detail;
      if (detail) setLocaleState(detail);
      else setLocaleState(readStoredLocale());
    };

    window.addEventListener("hirekarma-locale-change", onLocaleChange);
    return () =>
      window.removeEventListener("hirekarma-locale-change", onLocaleChange);
  }, []);

  useEffect(() => {
    const onStorage = () => setLocaleState(readStoredLocale());
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    writeStoredLocale(next);
  }, []);

  const content = useMemo(() => getAboutPageContentSync(locale), [locale]);

  if (!hydrated) {
    return (
      <AboutLocaleContext.Provider
        value={{
          locale: DEFAULT_LOCALE,
          setLocale,
          content: getAboutPageContentSync(DEFAULT_LOCALE),
        }}
      >
        {children}
      </AboutLocaleContext.Provider>
    );
  }

  return (
    <AboutLocaleContext.Provider value={{ locale, setLocale, content }}>
      {children}
    </AboutLocaleContext.Provider>
  );
}

export function useAboutLocale() {
  const ctx = useContext(AboutLocaleContext);
  if (!ctx) {
    throw new Error("useAboutLocale must be used within AboutLocaleProvider");
  }
  return ctx;
}
