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
import { getSolutionsPageContentSync } from "@/services/solutions-page";
import type { Locale, SolutionsPageContent } from "@/types/solutions-page";

interface SolutionsLocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  content: SolutionsPageContent;
}

const SolutionsLocaleContext =
  createContext<SolutionsLocaleContextValue | null>(null);

export function SolutionsLocaleProvider({
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
    () => getSolutionsPageContentSync(locale),
    [locale]
  );

  if (!hydrated) {
    return (
      <SolutionsLocaleContext.Provider
        value={{
          locale: DEFAULT_LOCALE,
          setLocale,
          content: getSolutionsPageContentSync(DEFAULT_LOCALE),
        }}
      >
        {children}
      </SolutionsLocaleContext.Provider>
    );
  }

  return (
    <SolutionsLocaleContext.Provider value={{ locale, setLocale, content }}>
      {children}
    </SolutionsLocaleContext.Provider>
  );
}

export function useSolutionsLocale() {
  const ctx = useContext(SolutionsLocaleContext);
  if (!ctx) {
    throw new Error(
      "useSolutionsLocale must be used within SolutionsLocaleProvider"
    );
  }
  return ctx;
}
