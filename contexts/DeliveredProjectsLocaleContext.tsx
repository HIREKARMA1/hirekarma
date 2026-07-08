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
import { getDeliveredProjectsContentSync } from "@/services/delivered-projects-page";
import type {
  DeliveredProjectsContent,
  Locale,
} from "@/types/delivered-projects-page";

interface DeliveredProjectsLocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  content: DeliveredProjectsContent;
}

const DeliveredProjectsLocaleContext =
  createContext<DeliveredProjectsLocaleContextValue | null>(null);

export function DeliveredProjectsLocaleProvider({
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
    () => getDeliveredProjectsContentSync(locale),
    [locale]
  );

  if (!hydrated) {
    return (
      <DeliveredProjectsLocaleContext.Provider
        value={{
          locale: DEFAULT_LOCALE,
          setLocale,
          content: getDeliveredProjectsContentSync(DEFAULT_LOCALE),
        }}
      >
        {children}
      </DeliveredProjectsLocaleContext.Provider>
    );
  }

  return (
    <DeliveredProjectsLocaleContext.Provider
      value={{ locale, setLocale, content }}
    >
      {children}
    </DeliveredProjectsLocaleContext.Provider>
  );
}

export function useDeliveredProjectsLocale() {
  const ctx = useContext(DeliveredProjectsLocaleContext);
  if (!ctx) {
    throw new Error(
      "useDeliveredProjectsLocale must be used within DeliveredProjectsLocaleProvider"
    );
  }
  return ctx;
}
