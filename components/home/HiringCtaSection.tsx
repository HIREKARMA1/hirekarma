"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { theme } from "@/config/theme";
import { useHomeLocale } from "@/contexts/HomeLocaleContext";
import { withHighlightMark } from "@/components/shared/HighlightMark";

export default function HiringCtaSection() {
  const { content } = useHomeLocale();
  const { hiringCta } = content;

  return (
    <section className="bg-white py-10 sm:py-12">
      <div className="content-container">
        <div
          className="relative overflow-hidden rounded-2xl px-6 py-8 sm:px-10 sm:py-10"
          style={{
            background: `linear-gradient(135deg, ${theme.colors.primary} 0%, #143a7a 48%, ${theme.colors.secondary} 140%)`,
          }}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-25"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
            aria-hidden
          />
          <div className="relative flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                {withHighlightMark(
                  hiringCta.heading,
                  hiringCta.headingHighlight
                )}
              </h2>
              <p className="mt-2 text-sm leading-snug text-white/80">
                {hiringCta.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              <Link
                href={hiringCta.primaryCta.href}
                className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold transition hover:bg-white/90"
                style={{ color: theme.colors.primary }}
              >
                {hiringCta.primaryCta.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={hiringCta.secondaryCta.href}
                className="inline-flex items-center gap-2 rounded-xl border border-white/40 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                {hiringCta.secondaryCta.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
