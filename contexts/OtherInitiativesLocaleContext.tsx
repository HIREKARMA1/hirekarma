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
import { getOtherInitiativesContentSync } from "@/services/other-initiatives-page";
import type {
  Locale,
  OtherInitiativesPageContent,
} from "@/types/other-initiatives-page";

interface OtherInitiativesLocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  content: OtherInitiativesPageContent;
}

const OtherInitiativesLocaleContext =
  createContext<OtherInitiativesLocaleContextValue | null>(null);

export function OtherInitiativesLocaleProvider({
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
    () => getOtherInitiativesContentSync(locale),
    [locale]
  );

  if (!hydrated) {
    return (
      <OtherInitiativesLocaleContext.Provider
        value={{
          locale: DEFAULT_LOCALE,
          setLocale,
          content: getOtherInitiativesContentSync(DEFAULT_LOCALE),
        }}
      >
        {children}
      </OtherInitiativesLocaleContext.Provider>
    );
  }

  return (
    <OtherInitiativesLocaleContext.Provider
      value={{ locale, setLocale, content }}
    >
      {children}
    </OtherInitiativesLocaleContext.Provider>
  );
}

export function useOtherInitiativesLocale() {
  const ctx = useContext(OtherInitiativesLocaleContext);
  if (!ctx) {
    throw new Error(
      "useOtherInitiativesLocale must be used within OtherInitiativesLocaleProvider"
    );
  }
  return ctx;
}
