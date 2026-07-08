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
import { getProductsPageContentSync } from "@/services/products-page";
import type { Locale, ProductsPageContent } from "@/types/products-page";

interface ProductsLocaleContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  content: ProductsPageContent;
}

const ProductsLocaleContext = createContext<ProductsLocaleContextValue | null>(
  null
);

export function ProductsLocaleProvider({
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
    () => getProductsPageContentSync(locale),
    [locale]
  );

  if (!hydrated) {
    return (
      <ProductsLocaleContext.Provider
        value={{
          locale: DEFAULT_LOCALE,
          setLocale,
          content: getProductsPageContentSync(DEFAULT_LOCALE),
        }}
      >
        {children}
      </ProductsLocaleContext.Provider>
    );
  }

  return (
    <ProductsLocaleContext.Provider value={{ locale, setLocale, content }}>
      {children}
    </ProductsLocaleContext.Provider>
  );
}

export function useProductsLocale() {
  const ctx = useContext(ProductsLocaleContext);
  if (!ctx) {
    throw new Error("useProductsLocale must be used within ProductsLocaleProvider");
  }
  return ctx;
}
