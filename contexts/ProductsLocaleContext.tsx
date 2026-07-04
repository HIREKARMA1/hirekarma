"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { DEFAULT_LOCALE, LOCALE_STORAGE_KEY } from "@/lib/i18n/locales";
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
    const stored = localStorage.getItem(LOCALE_STORAGE_KEY) as Locale | null;
    if (stored && ["en", "hi", "od"].includes(stored)) {
      setLocaleState(stored);
    }
    setHydrated(true);
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    localStorage.setItem(LOCALE_STORAGE_KEY, next);
    document.documentElement.lang = next === "od" ? "or" : next;
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
