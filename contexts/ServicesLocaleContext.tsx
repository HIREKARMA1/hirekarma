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
import { getServicesPageContentSync } from "@/services/services-page";
import type { Locale, ServicesPageContent } from "@/types/services-page";

interface ServicesLocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  content: ServicesPageContent;
}

const ServicesLocaleContext = createContext<ServicesLocaleContextValue | null>(
  null
);

export function ServicesLocaleProvider({
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

  const content = useMemo(() => getServicesPageContentSync(locale), [locale]);

  if (!hydrated) {
    return (
      <ServicesLocaleContext.Provider
        value={{
          locale: DEFAULT_LOCALE,
          setLocale,
          content: getServicesPageContentSync(DEFAULT_LOCALE),
        }}
      >
        {children}
      </ServicesLocaleContext.Provider>
    );
  }

  return (
    <ServicesLocaleContext.Provider value={{ locale, setLocale, content }}>
      {children}
    </ServicesLocaleContext.Provider>
  );
}

export function useServicesLocale() {
  const ctx = useContext(ServicesLocaleContext);
  if (!ctx) {
    throw new Error(
      "useServicesLocale must be used within ServicesLocaleProvider"
    );
  }
  return ctx;
}
