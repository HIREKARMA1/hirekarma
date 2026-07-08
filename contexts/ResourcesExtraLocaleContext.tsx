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
import { getResourcesExtraContentSync } from "@/services/resources-extra";
import type {
  Locale,
  ResourcesExtraContent,
} from "@/types/resources-extra";

interface ResourcesExtraLocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  content: ResourcesExtraContent;
}

const ResourcesExtraLocaleContext =
  createContext<ResourcesExtraLocaleContextValue | null>(null);

export function ResourcesExtraLocaleProvider({
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
    () => getResourcesExtraContentSync(locale),
    [locale]
  );

  const value = useMemo(
    () => ({ locale, setLocale, content }),
    [locale, setLocale, content]
  );

  if (!hydrated) {
    return (
      <ResourcesExtraLocaleContext.Provider
        value={{
          locale: DEFAULT_LOCALE,
          setLocale,
          content: getResourcesExtraContentSync(DEFAULT_LOCALE),
        }}
      >
        {children}
      </ResourcesExtraLocaleContext.Provider>
    );
  }

  return (
    <ResourcesExtraLocaleContext.Provider value={value}>
      {children}
    </ResourcesExtraLocaleContext.Provider>
  );
}

export function useResourcesExtraLocale() {
  const ctx = useContext(ResourcesExtraLocaleContext);
  if (!ctx) {
    throw new Error(
      "useResourcesExtraLocale must be used within ResourcesExtraLocaleProvider"
    );
  }
  return ctx;
}
