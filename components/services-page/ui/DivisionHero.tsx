"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { theme } from "@/config/theme";
import { withHighlightMark } from "@/components/shared/HighlightMark";
import type { ServiceHeroContent } from "@/types/services-page";
import { hexToRgba } from "./sections";

export function DivisionHero({
  hero,
  accent = theme.colors.primary,
  breadcrumbLabel,
}: {
  hero: ServiceHeroContent;
  accent?: string;
  breadcrumbLabel: string;
}) {
  return (
    <section
      className="relative overflow-hidden pt-28 pb-14 sm:pt-32 sm:pb-16"
      style={{
        background: `linear-gradient(180deg, ${hexToRgba(
          accent,
          0.08
        )} 0%, ${theme.colors.soft} 60%, #ffffff 100%)`,
      }}
    >
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full blur-[100px]"
        style={{ backgroundColor: hexToRgba(accent, 0.18) }}
        aria-hidden
      />
      <div className="relative content-container">
        <nav
          className="mb-5 flex items-center gap-1.5 text-[13px] font-medium text-[#64748b]"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="transition hover:text-[#1b52a4]">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link href="/services" className="transition hover:text-[#1b52a4]">
            Services
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-[#0f1622]">{breadcrumbLabel}</span>
        </nav>

        {hero.eyebrow ? (
          <span
            className="inline-flex items-center rounded-full px-3 py-1 text-[12px] font-semibold uppercase tracking-[0.14em] text-white"
            style={{ backgroundColor: accent }}
          >
            {hero.eyebrow}
          </span>
        ) : null}

        <h1 className="mt-4 max-w-4xl text-3xl font-bold leading-[1.12] tracking-tight text-[#0f1622] sm:text-4xl lg:text-5xl">
          {withHighlightMark(hero.heading, hero.headingHighlight, {
            nowrap: false,
          })}
        </h1>

        <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#334155] sm:text-lg">
          {hero.description}
        </p>

        {hero.note ? (
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-[#475569]">
            {hero.note}
          </p>
        ) : null}
      </div>
    </section>
  );
}
