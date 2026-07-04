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
        "inline-flex items-center gap-0.5 rounded-full border border-white/15 bg-white/5 p-1 backdrop-blur-sm",
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
              ? "bg-white/15 text-white"
              : "text-white/55 hover:text-white/80"
          )}
          aria-pressed={locale === code}
        >
          {LOCALE_LABELS[code]}
        </button>
      ))}
    </div>
  );
}
