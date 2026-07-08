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
import { getContactPageContentSync } from "@/services/contact-page";
import type { ContactPageContent, Locale } from "@/types/contact-page";

interface ContactLocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  content: ContactPageContent;
}

const ContactLocaleContext = createContext<ContactLocaleContextValue | null>(
  null
);

export function ContactLocaleProvider({
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

  const content = useMemo(() => getContactPageContentSync(locale), [locale]);

  if (!hydrated) {
    return (
      <ContactLocaleContext.Provider
        value={{
          locale: DEFAULT_LOCALE,
          setLocale,
          content: getContactPageContentSync(DEFAULT_LOCALE),
        }}
      >
        {children}
      </ContactLocaleContext.Provider>
    );
  }

  return (
    <ContactLocaleContext.Provider value={{ locale, setLocale, content }}>
      {children}
    </ContactLocaleContext.Provider>
  );
}

export function useContactLocale() {
  const ctx = useContext(ContactLocaleContext);
  if (!ctx) {
    throw new Error(
      "useContactLocale must be used within ContactLocaleProvider"
    );
  }
  return ctx;
}
