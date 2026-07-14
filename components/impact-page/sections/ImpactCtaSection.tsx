"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { theme } from "@/config/theme";
import { useImpactLocale } from "@/contexts/ImpactLocaleContext";
import PartnersMarquee from "@/components/layout/PartnersMarquee";

export function ImpactPartnersBand() {
  const { content } = useImpactLocale();

  return (
    <div style={{ backgroundColor: theme.colors.ink }}>
      <div className="content-container flex flex-col gap-3 border-t border-white/10 py-4 sm:flex-row sm:items-center sm:gap-5 sm:py-5">
        <p className="shrink-0 text-sm font-medium leading-snug text-white/70 sm:max-w-[220px]">
          {content.partnersNote}
        </p>
        <PartnersMarquee edgeColor={theme.colors.ink} />
      </div>
    </div>
  );
}

export function ImpactCtaSection() {
  const { content } = useImpactLocale();
  const { cta } = content;

  return (
    <section className="bg-white pb-10 pt-2 sm:pb-12">
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
                {cta.heading}{" "}
                <span style={{ color: theme.colors.yellow }}>
                  {cta.headingAccent}
                </span>
              </h2>
              <p className="mt-2 text-sm leading-snug text-white/80">
                {cta.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5">
              <Link
                href={cta.primaryCta.href}
                className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold transition hover:bg-white/90"
                style={{ color: theme.colors.primary }}
              >
                {cta.primaryCta.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={cta.secondaryCta.href}
                className="inline-flex items-center gap-2 rounded-lg border border-white/40 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
              >
                {cta.secondaryCta.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
