"use client";

import Image from "next/image";
import Link from "next/link";

import EcosystemDiagram from "@/components/home/EcosystemDiagram";
import footerPartners from "@/data/footer-partners.json";
import { withHighlightMark } from "@/components/shared/HighlightMark";
import { theme } from "@/config/theme";
import { useHomeLocale } from "@/contexts/HomeLocaleContext";

const trustLogos = footerPartners.slice(0, 5);

export default function HeroBanner() {
  const { content } = useHomeLocale();
  const { heroBanner } = content;
  const primary = theme.colors.primary;

  return (
    <section className="relative overflow-hidden bg-white">
      <div
        className="pointer-events-none absolute right-0 top-0 h-[28rem] w-[28rem] rounded-full blur-[100px]"
        style={{
          background:
            "radial-gradient(circle, rgba(0,162,229,0.14) 0%, rgba(27,82,164,0.08) 40%, transparent 70%)",
        }}
        aria-hidden
      />

      <div className="relative content-container pb-10 pt-16 lg:pb-14 lg:pt-20">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-8 xl:gap-12">
          <div className="min-w-0 space-y-6">
            <h1 className="text-[2rem] font-bold leading-[1.12] tracking-tight text-[#0f1622] sm:text-[2.5rem] lg:text-[2.75rem]">
              {withHighlightMark(
                heroBanner.heading,
                heroBanner.headingHighlight
              )}
            </h1>

            <p className="max-w-xl text-[15px] leading-relaxed text-[#0f1622]/65 sm:text-base">
              {heroBanner.description}
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href={heroBanner.primaryCta.href}
                className="inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-semibold text-white transition hover:brightness-110"
                style={{ backgroundColor: primary }}
              >
                {heroBanner.primaryCta.label}
                <span aria-hidden>→</span>
              </Link>
              <Link
                href={heroBanner.secondaryCta.href}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#d5d9e0] bg-white px-5 py-3 text-sm font-semibold text-[#0f1622] transition hover:border-[#0f1622]/35"
              >
                {heroBanner.secondaryCta.label}
                <span aria-hidden>→</span>
              </Link>
            </div>

            <div className="pt-1">
              <p className="text-xs text-[#0f1622]/45">{heroBanner.partnersNote}</p>
              <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-3">
                {trustLogos.map((partner) => (
                  <div
                    key={partner.id}
                    className="relative h-8 w-[4.5rem] grayscale opacity-70 transition hover:opacity-100 hover:grayscale-0 sm:h-9 sm:w-20"
                  >
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain"
                      sizes="80px"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="min-w-0">
            <EcosystemDiagram />
          </div>
        </div>
      </div>
    </section>
  );
}
