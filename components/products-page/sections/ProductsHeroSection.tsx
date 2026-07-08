"use client";

import { Users } from "lucide-react";

import { useProductsLocale } from "@/contexts/ProductsLocaleContext";
import {
  getProductsPageMediaSync,
  getSlideAlt,
  resolveMediaSrc,
} from "@/services/products-page-media";
import { AutoSlideGallery } from "../ui/AutoSlideGallery";
import { ContainerScroll } from "../container-scroll/ContainerScroll";
import { GradientHeading } from "../ui/GradientHeading";
import { SectionLabel } from "../ui/SectionLabel";
import { HeroTrustBand } from "./HeroTrustBand";

export function ProductsHeroSection() {
  const { content, locale } = useProductsLocale();
  const { hero } = content;
  const media = getProductsPageMediaSync();

  const slides = media.hero.tabletSlides.map((slide) => ({
    src: resolveMediaSrc(slide.src),
    alt: getSlideAlt(slide, locale),
  }));

  return (
    <section className="relative flex w-full max-w-full flex-col">
      <div className="relative z-10 flex w-full min-w-0 max-w-full flex-col content-container pb-4 pt-20 sm:pb-5 sm:pt-24 lg:pb-5 lg:pt-28">
        <div className="relative flex flex-col gap-5 max-lg:gap-4 lg:grid lg:grid-cols-[1fr_1.15fr] lg:items-center lg:gap-8 xl:gap-12">
          <div className="order-1 flex min-w-0 flex-col text-left max-lg:flex-none lg:justify-center">
            <div className="space-y-5 max-lg:rounded-2xl max-lg:border max-lg:border-slate-200/80 max-lg:bg-white/70 max-lg:px-5 max-lg:py-6 max-lg:backdrop-blur-md max-lg:dark:border-white/10 max-lg:dark:bg-black/30 sm:max-lg:space-y-6 sm:max-lg:px-6 lg:space-y-5">
              <SectionLabel>{hero.label}</SectionLabel>

              <GradientHeading
                heading={hero.heading}
                as="h1"
                size="hero"
                layout="stacked"
                className="font-extrabold lg:font-bold"
              />

              <p className="max-w-lg text-left text-lg font-medium leading-[1.7] text-gray-700 sm:text-xl lg:text-lg lg:font-normal lg:leading-[1.75] dark:text-white/92 lg:dark:text-white/90">
                {hero.description}
              </p>

              <div className="flex max-w-lg items-start gap-3">
                <Users
                  className="mt-1 h-5 w-5 shrink-0 text-gray-600 dark:text-white/85"
                  strokeWidth={1.75}
                  aria-hidden
                />
                <p className="text-left text-base font-medium leading-[1.65] text-gray-600 sm:text-lg lg:text-base lg:font-normal dark:text-white/88 lg:dark:text-white/80">
                  {hero.footerNote}
                </p>
              </div>
            </div>
          </div>

          <div className="order-2 w-full min-w-0 max-lg:mt-1 lg:py-4 xl:py-6">
            <ContainerScroll compact showTablet>
              <AutoSlideGallery
                images={slides}
                imageClassName="max-lg:object-[78%_center] lg:object-center"
              />
            </ContainerScroll>
          </div>
        </div>

        <div className="mt-auto shrink-0 pt-2">
          <HeroTrustBand />
        </div>
      </div>
    </section>
  );
}
