"use client";

import { LOCALES, LOCALE_LABELS } from "@/lib/i18n/locales";
import { cn } from "@/lib/utils/cn";
import { useProductsLocale } from "@/contexts/ProductsLocaleContext";
import type { Locale } from "@/types/products-page";

interface LanguageSwitcherProps {
  className?: string;
}

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const { locale, setLocale } = useProductsLocale();

  return (
    <div
      className={cn(
        "inline-flex items-center gap-0.5 rounded-full border border-slate-200 bg-white/80 p-1 backdrop-blur-sm dark:border-white/15 dark:bg-white/5",
        className
      )}
      role="group"
      aria-label="Select language"
    >
      {LOCALES.map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLocale(code as Locale)}
          className={cn(
            "rounded-full px-3 py-1.5 text-xs font-medium transition-colors",
            locale === code
              ? "bg-slate-900 text-white dark:bg-white/15 dark:text-white"
              : "text-slate-600 hover:text-slate-900 dark:text-white/85 dark:hover:text-white/80"
          )}
          aria-pressed={locale === code}
        >
          {LOCALE_LABELS[code]}
        </button>
      ))}
    </div>
  );
}
