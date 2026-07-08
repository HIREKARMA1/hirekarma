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
  RESOURCES_LOCALE_STORAGE_KEY,
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
    const stored = localStorage.getItem(
      RESOURCES_LOCALE_STORAGE_KEY
    ) as Locale | null;
    if (stored && ["en", "hi", "od"].includes(stored)) {
      setLocaleState(stored);
    }
    setHydrated(true);
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    localStorage.setItem(RESOURCES_LOCALE_STORAGE_KEY, next);
    document.documentElement.lang = next === "od" ? "or" : next;
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
