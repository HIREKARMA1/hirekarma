"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { useServicesLocale } from "@/contexts/ServicesLocaleContext";
import { theme } from "@/config/theme";
import { FadeInUp } from "@/components/shared/FadeInUp";
import { withHighlightMark } from "@/components/shared/HighlightMark";
import { getServiceIcon } from "./ui/serviceIcons";
import { hexToRgba } from "./ui/sections";

export function ServicesLandingView() {
  const { content } = useServicesLocale();
  const { landing } = content;

  return (
    <main className="relative z-0 min-h-screen w-full overflow-x-clip bg-white">
      {/* Hero */}
      <section
        className="relative overflow-hidden pt-28 pb-14 sm:pt-32 sm:pb-16"
        style={{
          background: `linear-gradient(180deg, ${theme.colors.heroBgLight} 0%, #ffffff 100%)`,
        }}
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-60"
          style={{ background: theme.gradients.heroGlow }}
          aria-hidden
        />
        <div className="relative content-container">
          {landing.hero.eyebrow ? (
            <span
              className="inline-flex items-center rounded-full px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.14em] text-white"
              style={{ backgroundColor: theme.colors.primary }}
            >
              {landing.hero.eyebrow}
            </span>
          ) : null}
          <h1 className="mt-4 max-w-4xl text-3xl font-bold leading-[1.12] tracking-tight text-[#0f1622] sm:text-4xl lg:text-5xl">
            {withHighlightMark(
              landing.hero.heading,
              landing.hero.headingHighlight,
              { nowrap: false }
            )}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#334155] sm:text-lg">
            {landing.hero.description}
          </p>
          {landing.supportingLine ? (
            <p className="mt-6 max-w-3xl rounded-2xl border border-[#e6e8ec] bg-white/70 p-4 text-[15px] leading-relaxed text-[#475569]">
              {landing.supportingLine}
            </p>
          ) : null}
        </div>
      </section>

      {/* Cards grid */}
      <section className="bg-white">
        <div className="content-container py-10 sm:py-14">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {landing.cards.map((card) => {
              const Icon = getServiceIcon(card.icon);
              return (
                <FadeInUp key={card.id}>
                  <Link
                    href={`/services/${card.slug}`}
                    className="group flex h-full flex-col rounded-3xl border border-[#e6e8ec] bg-white p-6 shadow-[0_4px_24px_rgba(15,23,42,0.05)] transition hover:-translate-y-1 hover:border-[#cbd5e1] hover:shadow-[0_16px_40px_rgba(15,23,42,0.1)]"
                  >
                    <span
                      className="flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-sm"
                      style={{ backgroundColor: card.accent }}
                    >
                      <Icon className="h-6 w-6" />
                    </span>
                    <h2 className="mt-5 text-xl font-bold tracking-tight text-[#0f1622]">
                      {card.title}
                    </h2>
                    <p className="mt-2 flex-1 text-[15px] leading-relaxed text-[#475569]">
                      {card.description}
                    </p>
                    <span
                      className="mt-4 inline-flex w-fit items-center rounded-full px-3 py-1 text-[12px] font-semibold"
                      style={{
                        backgroundColor: hexToRgba(card.accent, 0.1),
                        color: card.accent,
                      }}
                    >
                      {card.stat}
                    </span>
                    <span
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold transition group-hover:gap-2.5"
                      style={{ color: card.accent }}
                    >
                      Learn more
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                </FadeInUp>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-white">
        <div className="content-container pb-16 pt-4 sm:pb-20">
          <FadeInUp
            className="relative overflow-hidden rounded-3xl px-6 py-10 text-center sm:px-10 sm:py-14"
            style={{ backgroundColor: theme.colors.ink }}
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-80"
              style={{ background: theme.gradients.heroGlow }}
              aria-hidden
            />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                {landing.footerCta.heading}
              </h2>
              {landing.footerCta.description ? (
                <p className="mt-3 text-[15px] leading-relaxed text-white/75 sm:text-base">
                  {landing.footerCta.description}
                </p>
              ) : null}
              <Link
                href="/contact?service=services-overview"
                className="mt-7 inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-[15px] font-semibold text-white shadow-lg transition hover:brightness-110"
                style={{ backgroundColor: theme.colors.primary }}
              >
                {landing.footerCta.buttonLabel}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>
    </main>
  );
}
