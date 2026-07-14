"use client";

import { Users } from "lucide-react";

import { useProductsLocale } from "@/contexts/ProductsLocaleContext";
import { theme } from "@/config/theme";
import {
  getProductsPageMediaSync,
  getSlideAlt,
  getSlideLabel,
  resolveMediaSrc,
} from "@/services/products-page-media";
import { AutoSlideGallery } from "../ui/AutoSlideGallery";
import { ProductButton } from "../ui/ProductButton";
import { HeroTrustBand } from "./HeroTrustBand";

export function ProductsHeroSection() {
  const { content, locale } = useProductsLocale();
  const { hero } = content;
  const media = getProductsPageMediaSync();

  const slides = media.hero.tabletSlides.map((slide) => ({
    src: resolveMediaSrc(slide.src),
    alt: getSlideAlt(slide, locale),
    label: getSlideLabel(slide, locale),
  }));

  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative z-10 content-container pb-5 pt-16 lg:pb-6 lg:pt-[4.5rem]">
        <div className="flex flex-col items-start gap-5 lg:flex-row lg:items-center lg:gap-6 xl:gap-8">
          {/* Copy */}
          <div className="min-w-0 flex-1 space-y-3.5 lg:max-w-[42rem]">
            <p
              className="text-[10px] font-semibold uppercase tracking-[0.18em]"
              style={{ color: theme.colors.secondary }}
            >
              {hero.label}
            </p>

            <h1 className="text-[1.65rem] font-bold leading-[1.2] tracking-tight text-[#0f1622] sm:text-[1.9rem] xl:text-[2.1rem] xl:whitespace-nowrap">
              <span>{hero.heading.part1} </span>
              <span style={{ color: theme.colors.primary }}>
                {hero.heading.gradient}
              </span>
              {hero.heading.part2 ? (
                <span> {hero.heading.part2}</span>
              ) : null}
            </h1>

            <p className="max-w-xl text-sm leading-snug text-[#0f1622]/65">
              {hero.description}
            </p>

            <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center">
              <ProductButton
                cta={hero.primaryCta}
                accentColor={theme.colors.primary}
                className="rounded-lg px-4 py-2.5"
              />
              <ProductButton
                cta={hero.secondaryCta}
                className="rounded-lg px-4 py-2.5"
              />
            </div>

            <div className="flex items-start gap-2 pt-0.5 text-xs text-[#0f1622]/55">
              <Users
                className="mt-0.5 h-3.5 w-3.5 shrink-0"
                style={{ color: theme.colors.secondary }}
              />
              <p className="leading-snug">{hero.footerNote}</p>
            </div>
          </div>

          {/* Product preview — sits beside copy, no empty mid-column */}
          <div className="w-full shrink-0 lg:w-[min(100%,400px)] xl:w-[440px]">
            <div className="overflow-hidden rounded-2xl border-[3px] border-[#2a3140] bg-[#1a1f2e] p-2 shadow-[0_20px_50px_rgba(15,22,34,0.2)]">
              <div className="overflow-hidden rounded-xl bg-[#0d1117]">
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <AutoSlideGallery
                    images={slides}
                    imageClassName="object-contain object-center bg-[#0d1117]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t border-[#e6e8ec] pt-4">
          <HeroTrustBand />
        </div>
      </div>
    </section>
  );
}
