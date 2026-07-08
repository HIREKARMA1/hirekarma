"use client";

import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown, Languages } from "lucide-react";
import { useTheme } from "next-themes";

import { useSiteLocale } from "@/contexts/SiteLocaleContext";
import { LOCALES, LOCALE_LABELS } from "@/lib/i18n/locales";
import { cn } from "@/lib/utils/cn";
import type { Locale } from "@/types/products-page";

interface LanguageDropdownProps {
  className?: string;
}

export function LanguageDropdown({ className }: LanguageDropdownProps) {
  const { locale, setLocale, content } = useSiteLocale();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const isDark = mounted && resolvedTheme === "dark";

  const selectLocale = (next: Locale) => {
    setLocale(next);
    setOpen(false);
  };

  return (
    <div ref={rootRef} className={cn("relative", className)}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={content.nav.language}
        onClick={() => setOpen((value) => !value)}
        className={cn(
          "inline-flex items-center gap-1.5 rounded-lg px-2.5 py-2 text-sm font-medium transition-all duration-200",
          isDark
            ? "text-gray-300 hover:bg-cyan-950 hover:text-cyan-400"
            : "text-gray-700 hover:bg-cyan-50 hover:text-cyan-600"
        )}
      >
        <Languages className="size-4 shrink-0" aria-hidden />
        <span className="hidden sm:inline">{LOCALE_LABELS[locale]}</span>
        <ChevronDown
          className={cn(
            "size-3.5 shrink-0 transition-transform duration-200",
            open && "rotate-180"
          )}
          aria-hidden
        />
      </button>

      {open ? (
        <div
          role="listbox"
          aria-label={content.nav.language}
          className={cn(
            "absolute right-0 z-50 mt-2 min-w-[10.5rem] overflow-hidden rounded-xl border shadow-2xl backdrop-blur-xl",
            isDark
              ? "border-gray-800/50 bg-gray-900"
              : "border-gray-100/80 bg-white"
          )}
        >
          <div className="p-1.5">
            {LOCALES.map((code) => {
              const active = locale === code;
              return (
                <button
                  key={code}
                  type="button"
                  role="option"
                  aria-selected={active}
                  onClick={() => selectLocale(code)}
                  className={cn(
                    "flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors",
                    active
                      ? isDark
                        ? "bg-cyan-950 text-cyan-400"
                        : "bg-cyan-50 text-cyan-700"
                      : isDark
                        ? "text-gray-300 hover:bg-gray-800 hover:text-cyan-400"
                        : "text-gray-700 hover:bg-cyan-50 hover:text-cyan-600"
                  )}
                >
                  <span>{LOCALE_LABELS[code]}</span>
                  {active ? <Check className="size-4 shrink-0" aria-hidden /> : null}
                </button>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );
}
