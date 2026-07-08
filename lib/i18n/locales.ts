import type { Locale } from "@/types/products-page";

export const LOCALES: Locale[] = ["en", "hi", "od"];

export const LOCALE_LABELS: Record<Locale, string> = {
  en: "English",
  hi: "हिन्दी",
  od: "ଓଡ଼ିଆ",
};

export const DEFAULT_LOCALE: Locale = "en";

/** Primary site-wide locale preference (navbar language dropdown). */
export const SITE_LOCALE_STORAGE_KEY = "hirekarma-locale";

/** @deprecated Prefer SITE_LOCALE_STORAGE_KEY - kept for migration reads */
export const LOCALE_STORAGE_KEY = "hirekarma-products-locale";
/** @deprecated Prefer SITE_LOCALE_STORAGE_KEY - kept for migration reads */
export const RESOURCES_LOCALE_STORAGE_KEY = "hirekarma-resources-locale";

export function isLocale(value: string | null | undefined): value is Locale {
  return value === "en" || value === "hi" || value === "od";
}

export function readStoredLocale(): Locale {
  if (typeof window === "undefined") return DEFAULT_LOCALE;

  const primary = localStorage.getItem(SITE_LOCALE_STORAGE_KEY);
  if (isLocale(primary)) return primary;

  const legacyProducts = localStorage.getItem(LOCALE_STORAGE_KEY);
  if (isLocale(legacyProducts)) return legacyProducts;

  const legacyResources = localStorage.getItem(RESOURCES_LOCALE_STORAGE_KEY);
  if (isLocale(legacyResources)) return legacyResources;

  return DEFAULT_LOCALE;
}

export function writeStoredLocale(locale: Locale) {
  if (typeof window === "undefined") return;
  localStorage.setItem(SITE_LOCALE_STORAGE_KEY, locale);
  // Keep legacy keys in sync so older page contexts stay aligned.
  localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  localStorage.setItem(RESOURCES_LOCALE_STORAGE_KEY, locale);
  document.documentElement.lang = locale === "od" ? "or" : locale;
  window.dispatchEvent(
    new CustomEvent("hirekarma-locale-change", { detail: locale })
  );
}
