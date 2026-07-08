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
import { getResourcesHubContentSync } from "@/services/resources-hub";
import type { Locale, ResourcesHubContent } from "@/types/resources-page";

interface ResourcesLocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  content: ResourcesHubContent;
}

const ResourcesLocaleContext =
  createContext<ResourcesLocaleContextValue | null>(null);

export function ResourcesLocaleProvider({
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
    return () => window.removeEventListener("hirekarma-locale-change", onLocaleChange);
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
    () => getResourcesHubContentSync(locale),
    [locale]
  );

  const value = useMemo(
    () => ({ locale, setLocale, content }),
    [locale, setLocale, content]
  );

  if (!hydrated) {
    return (
      <ResourcesLocaleContext.Provider
        value={{
          locale: DEFAULT_LOCALE,
          setLocale,
          content: getResourcesHubContentSync(DEFAULT_LOCALE),
        }}
      >
        {children}
      </ResourcesLocaleContext.Provider>
    );
  }

  return (
    <ResourcesLocaleContext.Provider value={value}>
      {children}
    </ResourcesLocaleContext.Provider>
  );
}

export function useResourcesLocale() {
  const ctx = useContext(ResourcesLocaleContext);
  if (!ctx) {
    throw new Error(
      "useResourcesLocale must be used within ResourcesLocaleProvider"
    );
  }
  return ctx;
}
