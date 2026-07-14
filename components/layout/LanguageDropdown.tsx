"use client";

import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown, Languages } from "lucide-react";

import { useSiteLocale } from "@/contexts/SiteLocaleContext";
import { LOCALES, LOCALE_LABELS } from "@/lib/i18n/locales";
import { cn } from "@/lib/utils/cn";
import type { Locale } from "@/types/products-page";

interface LanguageDropdownProps {
  className?: string;
}

export function LanguageDropdown({ className }: LanguageDropdownProps) {
  const { locale, setLocale, content } = useSiteLocale();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

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
          "inline-flex items-center gap-1.5 rounded-lg px-2.5 py-2 text-[13px] font-semibold text-[#0f1622]/70 transition hover:bg-[#f6f8fb] hover:text-[#1b52a4]",
          open && "bg-[#f6f8fb] text-[#1b52a4]"
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
          className="absolute right-0 z-50 mt-2 min-w-[10.5rem] overflow-hidden rounded-xl border border-[#e6e8ec] bg-white shadow-[0_16px_40px_rgba(15,22,34,0.12)]"
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
                      ? "bg-[#e8f6fc] text-[#1b52a4]"
                      : "text-[#0f1622]/75 hover:bg-[#f6f8fb] hover:text-[#1b52a4]"
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
