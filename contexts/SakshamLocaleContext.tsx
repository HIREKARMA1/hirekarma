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
import { getSakshamPageContentSync } from "@/services/saksham-page";
import type { Locale, SakshamPageContent } from "@/types/saksham-page";

interface SakshamLocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  content: SakshamPageContent;
}

const SakshamLocaleContext = createContext<SakshamLocaleContextValue | null>(
  null
);

export function SakshamLocaleProvider({
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

  const content = useMemo(() => getSakshamPageContentSync(locale), [locale]);

  if (!hydrated) {
    return (
      <SakshamLocaleContext.Provider
        value={{
          locale: DEFAULT_LOCALE,
          setLocale,
          content: getSakshamPageContentSync(DEFAULT_LOCALE),
        }}
      >
        {children}
      </SakshamLocaleContext.Provider>
    );
  }

  return (
    <SakshamLocaleContext.Provider value={{ locale, setLocale, content }}>
      {children}
    </SakshamLocaleContext.Provider>
  );
}

export function useSakshamLocale() {
  const ctx = useContext(SakshamLocaleContext);
  if (!ctx) {
    throw new Error(
      "useSakshamLocale must be used within SakshamLocaleProvider"
    );
  }
  return ctx;
}
