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
import { getLegalPageContentSync } from "@/services/legal-page";
import type { LegalPageContent, Locale } from "@/types/legal-page";

interface LegalLocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  content: LegalPageContent;
}

const LegalLocaleContext = createContext<LegalLocaleContextValue | null>(null);

export function LegalLocaleProvider({
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

  const content = useMemo(() => getLegalPageContentSync(locale), [locale]);

  if (!hydrated) {
    return (
      <LegalLocaleContext.Provider
        value={{
          locale: DEFAULT_LOCALE,
          setLocale,
          content: getLegalPageContentSync(DEFAULT_LOCALE),
        }}
      >
        {children}
      </LegalLocaleContext.Provider>
    );
  }

  return (
    <LegalLocaleContext.Provider value={{ locale, setLocale, content }}>
      {children}
    </LegalLocaleContext.Provider>
  );
}

export function useLegalLocale() {
  const ctx = useContext(LegalLocaleContext);
  if (!ctx) {
    throw new Error("useLegalLocale must be used within LegalLocaleProvider");
  }
  return ctx;
}
