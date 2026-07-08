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
  HOME_LOCALE_STORAGE_KEY,
} from "@/lib/i18n/locales";
import { getHomePageContentSync } from "@/services/home-page";
import type { HomePageContent, Locale } from "@/types/home-page";

interface HomeLocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  content: HomePageContent;
}

const HomeLocaleContext = createContext<HomeLocaleContextValue | null>(null);

export function HomeLocaleProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [locale, setLocaleState] = useState<Locale>(DEFAULT_LOCALE);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(HOME_LOCALE_STORAGE_KEY) as Locale | null;
    if (stored && ["en", "hi", "od"].includes(stored)) {
      setLocaleState(stored);
    }
    setHydrated(true);
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    localStorage.setItem(HOME_LOCALE_STORAGE_KEY, next);
    document.documentElement.lang = next === "od" ? "or" : next;
  }, []);

  const content = useMemo(() => getHomePageContentSync(locale), [locale]);

  const value = {
    locale: hydrated ? locale : DEFAULT_LOCALE,
    setLocale,
    content: hydrated ? content : getHomePageContentSync(DEFAULT_LOCALE),
  };

  return (
    <HomeLocaleContext.Provider value={value}>
      {children}
    </HomeLocaleContext.Provider>
  );
}

export function useHomeLocale() {
  const ctx = useContext(HomeLocaleContext);
  if (!ctx) {
    throw new Error("useHomeLocale must be used within HomeLocaleProvider");
  }
  return ctx;
}
