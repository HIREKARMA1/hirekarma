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
        "inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 p-1 backdrop-blur-sm",
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
              ? "bg-white/15 text-white"
              : "text-white/60 hover:text-white"
          )}
        >
          {LOCALE_LABELS[code]}
        </button>
      ))}
    </div>
  );
}
