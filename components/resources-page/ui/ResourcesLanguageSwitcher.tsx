"use client";

import { LOCALES, LOCALE_LABELS } from "@/lib/i18n/locales";
import { cn } from "@/lib/utils/cn";
import type { Locale } from "@/types/resources-page";

interface ResourcesLanguageSwitcherProps {
  locale: Locale;
  onChange: (locale: Locale) => void;
  className?: string;
}

export function ResourcesLanguageSwitcher({
  locale,
  onChange,
  className,
}: ResourcesLanguageSwitcherProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white/80 p-1 backdrop-blur-sm dark:border-white/15 dark:bg-white/5",
        className
      )}
      role="group"
      aria-label="Language"
    >
      {LOCALES.map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => onChange(code)}
          className={cn(
            "rounded-full px-3 py-1.5 text-xs font-semibold transition-colors",
            locale === code
              ? "bg-slate-900 text-white dark:bg-white/15 dark:text-white"
              : "text-slate-600 hover:text-slate-900 dark:text-white/60 dark:hover:text-white"
          )}
        >
          {LOCALE_LABELS[code]}
        </button>
      ))}
    </div>
  );
}
