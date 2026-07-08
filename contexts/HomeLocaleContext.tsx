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
import { getHomePageContentSync } from "@/services/home-page";
import type { HomePageContent, Locale } from "@/types/home-page";

interface HomeLocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  content: HomePageContent;
}

const HomeLocaleContext = createContext<HomeLocaleContextValue | null>(null);

export function HomeLocaleProvider({
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

  const content = useMemo(() => getHomePageContentSync(locale), [locale]);

  if (!hydrated) {
    return (
      <HomeLocaleContext.Provider
        value={{
          locale: DEFAULT_LOCALE,
          setLocale,
          content: getHomePageContentSync(DEFAULT_LOCALE),
        }}
      >
        {children}
      </HomeLocaleContext.Provider>
    );
  }

  return (
    <HomeLocaleContext.Provider value={{ locale, setLocale, content }}>
      {children}
    </HomeLocaleContext.Provider>
  );
}

export function useHomeLocale() {
  const ctx = useContext(HomeLocaleContext);
  if (!ctx) {
    throw new Error("useHomeLocale must be used within HomeLocaleProvider");
  }
  return ctx;
}
