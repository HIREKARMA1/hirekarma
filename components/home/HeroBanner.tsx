"use client";

import Image from "next/image";
import Link from "next/link";
import {
  BarChart3,
  Briefcase,
  Building2,
  GraduationCap,
  MapPin,
  Users,
} from "lucide-react";

import EcosystemDiagram from "@/components/home/EcosystemDiagram";
import { NumberTicker } from "@/components/products-page/ui/NumberTicker";
import footerPartners from "@/data/footer-partners.json";
import { withHighlightMark } from "@/components/shared/HighlightMark";
import { theme } from "@/config/theme";
import { useHomeLocale } from "@/contexts/HomeLocaleContext";

const trustLogos = footerPartners.slice(0, 5);
const icons = [Users, GraduationCap, Briefcase, Building2, MapPin, BarChart3];

export default function HeroBanner() {
  const { content, locale } = useHomeLocale();
  const { heroBanner, statsBar } = content;
  const primary = theme.colors.primary;

  return (
    <section className="relative flex min-h-[calc(100dvh-4.5rem)] flex-col overflow-hidden bg-white lg:min-h-[calc(100dvh-4.75rem)]">
      <div
        className="pointer-events-none absolute right-0 top-0 h-[22rem] w-[22rem] rounded-full blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, rgba(0,162,229,0.14) 0%, rgba(27,82,164,0.08) 40%, transparent 70%)",
        }}
        aria-hidden
      />

      {/* Hero content */}
      <div className="relative flex flex-1 flex-col justify-center content-container py-6 sm:py-8 lg:py-6">
        <div className="grid items-center gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-6 xl:gap-8">
          <div className="min-w-0 space-y-4 sm:space-y-5">
            <h1 className="text-[1.75rem] font-bold leading-[1.12] tracking-tight text-[#0f1622] sm:text-[2.15rem] lg:text-[2.4rem]">
              {withHighlightMark(
                heroBanner.heading,
                heroBanner.headingHighlight
              )}
            </h1>

            <p className="max-w-xl text-[15px] leading-relaxed text-[#334155] sm:text-[16px]">
              {heroBanner.description}
            </p>

            <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center">
              <Link
                href={heroBanner.primaryCta.href}
                className="inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-110"
                style={{ backgroundColor: primary }}
              >
                {heroBanner.primaryCta.label}
                <span aria-hidden>→</span>
              </Link>
              {/* <Link
                href={heroBanner.secondaryCta.href}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#d5d9e0] bg-white px-5 py-2.5 text-sm font-semibold text-[#0f1622] transition hover:border-[#0f1622]/35"
              >
                {heroBanner.secondaryCta.label}
                <span aria-hidden>→</span>
              </Link> */}
            </div>

            <div className="pt-0.5">
              <p className="text-sm text-[#475569]">{heroBanner.partnersNote}</p>
              <div className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-2">
                {trustLogos.map((partner) => (
                  <div
                    key={partner.id}
                    className="relative h-7 w-[4rem] grayscale opacity-70 transition hover:opacity-100 hover:grayscale-0 sm:h-8 sm:w-[4.5rem]"
                  >
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain"
                      sizes="72px"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[min(100%,420px)] lg:max-w-[min(100%,460px)] xl:max-w-[500px]">
            <EcosystemDiagram />
          </div>
        </div>
      </div>

      {/* Impact — same section, bottom of first fold */}
      <div
        className="relative mt-auto shrink-0"
        style={{ backgroundColor: theme.colors.ink }}
      >
        <div className="content-container py-5 sm:py-6">
          <div className="grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-3 lg:grid-cols-6 lg:gap-x-2">
            {statsBar.items.map((item, index) => {
              const Icon = icons[index % icons.length];
              return (
                <div
                  key={item.id}
                  className="flex flex-col items-start gap-1.5 sm:flex-row sm:items-center sm:gap-2.5"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10">
                    <Icon
                      className="h-3.5 w-3.5 text-white/90"
                      strokeWidth={1.75}
                    />
                  </span>
                  <div>
                    <NumberTicker
                      value={item.value}
                      locale={locale}
                      className="text-lg font-bold leading-none tracking-tight text-white sm:text-xl"
                    />
                    <p className="mt-1 text-[12px] leading-snug text-white/85 sm:text-[13px]">
                      {item.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
