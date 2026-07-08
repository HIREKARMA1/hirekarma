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
import { getSiteContentSync } from "@/services/site-content";
import type { Locale } from "@/types/products-page";
import type { SiteContent } from "@/types/site";

interface SiteLocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  content: SiteContent;
  hydrated: boolean;
}

const SiteLocaleContext = createContext<SiteLocaleContextValue | null>(null);

export function SiteLocaleProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const stored = readStoredLocale();
    setLocaleState(stored);
    document.documentElement.lang = stored === "od" ? "or" : stored;
    setHydrated(true);
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    writeStoredLocale(next);
  }, []);

  const content = useMemo(() => getSiteContentSync(locale), [locale]);

  const value = useMemo(
    () => ({ locale, setLocale, content, hydrated }),
    [locale, setLocale, content, hydrated]
  );

  if (!hydrated) {
    return (
      <SiteLocaleContext.Provider
        value={{
          locale: DEFAULT_LOCALE,
          setLocale,
          content: getSiteContentSync(DEFAULT_LOCALE),
          hydrated: false,
        }}
      >
        {children}
      </SiteLocaleContext.Provider>
    );
  }

  return (
    <SiteLocaleContext.Provider value={value}>
      {children}
    </SiteLocaleContext.Provider>
  );
}

export function useSiteLocale() {
  const ctx = useContext(SiteLocaleContext);
  if (!ctx) {
    throw new Error("useSiteLocale must be used within SiteLocaleProvider");
  }
  return ctx;
}
