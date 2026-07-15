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
import { getImpactPageContentSync } from "@/services/impact-page";
import type { ImpactPageContent, Locale } from "@/types/impact-page";

interface ImpactLocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  content: ImpactPageContent;
}

const ImpactLocaleContext = createContext<ImpactLocaleContextValue | null>(null);

export function ImpactLocaleProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);

  useEffect(() => {
    setLocaleState(readStoredLocale());

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

  const content = useMemo(() => getImpactPageContentSync(locale), [locale]);

  const value = useMemo(
    () => ({ locale, setLocale, content }),
    [locale, setLocale, content]
  );

  return (
    <ImpactLocaleContext.Provider value={value}>
      {children}
    </ImpactLocaleContext.Provider>
  );
}

export function useImpactLocale() {
  const ctx = useContext(ImpactLocaleContext);
  if (!ctx) {
    throw new Error("useImpactLocale must be used within ImpactLocaleProvider");
  }
  return ctx;
}
