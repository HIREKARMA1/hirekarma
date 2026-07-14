"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { useAboutLocale } from "@/contexts/AboutLocaleContext";
import { theme } from "@/config/theme";

export default function LocationsCtaSection() {
  const { content } = useAboutLocale();
  const { cta } = content.locations;

  return (
    <section
      className="relative w-full pb-8 sm:pb-10"
      style={{ backgroundColor: theme.colors.ink }}
    >
      <div className="content-container">
        <div
          className="relative overflow-hidden rounded-2xl px-6 py-8 sm:px-10 sm:py-10"
          style={{
            background: `linear-gradient(135deg, ${theme.colors.primary} 0%, #143a7a 45%, ${theme.colors.secondary} 140%)`,
          }}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
              backgroundSize: "36px 36px",
            }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full blur-3xl"
            style={{ backgroundColor: "rgba(254,196,13,0.25)" }}
            aria-hidden
          />

          <div className="relative flex flex-col items-start justify-between gap-5 lg:flex-row lg:items-center">
            <div className="max-w-xl">
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-[1.75rem]">
                {cta.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-white/80">
                {cta.description}
              </p>
            </div>
            <Link
              href={cta.button.href}
              className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold transition hover:bg-white/90"
              style={{ color: theme.colors.primary }}
            >
              {cta.button.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
