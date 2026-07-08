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
import { getPartnersPageContentSync } from "@/services/partners-page";
import type { Locale, PartnersPageContent } from "@/types/partners-page";

interface PartnersLocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  content: PartnersPageContent;
}

const PartnersLocaleContext =
  createContext<PartnersLocaleContextValue | null>(null);

export function PartnersLocaleProvider({
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

  const content = useMemo(
    () => getPartnersPageContentSync(locale),
    [locale]
  );

  if (!hydrated) {
    return (
      <PartnersLocaleContext.Provider
        value={{
          locale: DEFAULT_LOCALE,
          setLocale,
          content: getPartnersPageContentSync(DEFAULT_LOCALE),
        }}
      >
        {children}
      </PartnersLocaleContext.Provider>
    );
  }

  return (
    <PartnersLocaleContext.Provider value={{ locale, setLocale, content }}>
      {children}
    </PartnersLocaleContext.Provider>
  );
}

export function usePartnersLocale() {
  const ctx = useContext(PartnersLocaleContext);
  if (!ctx) {
    throw new Error(
      "usePartnersLocale must be used within PartnersLocaleProvider"
    );
  }
  return ctx;
}
