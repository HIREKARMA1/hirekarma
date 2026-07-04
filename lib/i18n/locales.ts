import type { Locale } from "@/types/products-page";

export const LOCALES: Locale[] = ["en", "hi", "od"];

export const LOCALE_LABELS: Record<Locale, string> = {
  en: "English",
  hi: "हिन्दी",
  od: "ଓଡ଼ିଆ",
};

export const DEFAULT_LOCALE: Locale = "en";

export const LOCALE_STORAGE_KEY = "hirekarma-products-locale";
