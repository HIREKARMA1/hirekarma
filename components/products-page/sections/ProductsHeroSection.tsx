"use client";

import { Users } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";

import { theme } from "@/config/theme";
import { useProductsLocale } from "@/contexts/ProductsLocaleContext";
import {
  getProductsPageMediaSync,
  getSlideAlt,
  resolveMediaSrc,
} from "@/services/products-page-media";
import { AnimatedHeroHeading } from "../ui/AnimatedHeroHeading";
import { AutoSlideGallery } from "../ui/AutoSlideGallery";
import { ContainerScroll } from "../container-scroll/ContainerScroll";
import { SectionLabel } from "../ui/SectionLabel";
import { TextBlurReveal } from "../ui/TextBlurReveal";
import { Vortex } from "../ui/Vortex";
import { HeroTrustBand } from "./HeroTrustBand";

/** 1=heading 2=description 3=footer 4=tablet 5=trust */
type HeroStep = 1 | 2 | 3 | 4 | 5;

export function ProductsHeroSection() {
  const { content, locale } = useProductsLocale();
  const { hero } = content;
  const media = getProductsPageMediaSync();

  const slides = media.hero.tabletSlides.map((slide) => ({
    src: resolveMediaSrc(slide.src),
    alt: getSlideAlt(slide, locale),
  }));

  const [step, setStep] = useState<HeroStep>(1);

  const advance = useCallback((next: HeroStep) => {
    setStep(next);
  }, []);

  useEffect(() => {
    if (step !== 4) return;
    const timer = window.setTimeout(() => advance(5), 1200);
    return () => window.clearTimeout(timer);
  }, [step, advance]);

  return (
    <section
      className={`relative flex w-full flex-col ${
        step < 4 ? "min-h-[100dvh]" : "min-h-0"
      }`}
      style={{
        background: `linear-gradient(180deg, #070b14 0%, ${theme.colors.heroBg} 60%, ${theme.colors.heroBg} 100%)`,
      }}
    >
      <div
        className="pointer-events-none absolute -top-24 -right-32 h-[560px] w-[560px] rounded-full blur-[140px]"
        style={{ backgroundColor: theme.colors.heroGlowPrimary }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-32 left-0 h-[300px] w-[300px] rounded-full blur-[120px]"
        style={{ backgroundColor: "rgba(27, 82, 164, 0.10)" }}
        aria-hidden
      />

      <div className="pointer-events-none absolute inset-0 max-lg:opacity-35 lg:opacity-100" aria-hidden>
        <Vortex
          transparentBackground
          particleCount={theme.vortex.particleCount}
          rangeY={theme.vortex.rangeY}
          baseHue={theme.vortex.baseHue}
          containerClassName="h-full w-full"
        />
      </div>

      <div
        className={`relative z-10 flex w-full min-w-0 flex-col content-container pt-20 sm:pt-24 lg:pt-28 ${
          step < 4 ? "min-h-[100dvh] pb-6" : "pb-4 sm:pb-5 lg:pb-5"
        }`}
      >
        <div className="relative flex flex-col gap-5 max-lg:gap-4 lg:grid lg:flex-1 lg:grid-cols-[1fr_1.15fr] lg:items-center lg:gap-8 xl:gap-12">
          {/* Left — text column */}
          <div className="order-1 flex min-w-0 flex-col text-left max-lg:flex-none lg:min-h-0 lg:flex-1 lg:justify-center">
            <div className="space-y-5 rounded-2xl border border-white/5 bg-black/30 px-5 py-6 backdrop-blur-md sm:space-y-6 sm:px-6 lg:border-0 lg:bg-transparent lg:p-0 lg:backdrop-blur-none">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <SectionLabel>{hero.label}</SectionLabel>
              </motion.div>

              <AnimatedHeroHeading
                heading={hero.heading}
                active={step >= 1}
                onComplete={() => advance(2)}
              />

              <p className="min-h-[5.5rem] max-w-lg text-left text-lg font-medium leading-[1.7] text-white/92 sm:min-h-[6rem] sm:text-xl lg:min-h-0 lg:text-lg lg:font-normal lg:leading-[1.75] lg:text-white/90">
                <TextBlurReveal
                  text={hero.description}
                  active={step >= 2}
                  onComplete={() => advance(3)}
                />
              </p>

              <div className="flex min-h-[4.5rem] max-w-lg items-start gap-3 sm:min-h-[5rem] lg:min-h-0">
                <Users
                  className={`mt-1 h-5 w-5 shrink-0 text-white/85 transition-opacity duration-300 ${step >= 3 ? "opacity-100" : "opacity-0"}`}
                  strokeWidth={1.75}
                  aria-hidden
                />
                <p className="text-left text-base font-medium leading-[1.65] text-white/88 sm:text-lg lg:text-base lg:font-normal lg:text-white/80">
                  <TextBlurReveal
                    text={hero.footerNote}
                    active={step >= 3}
                    onComplete={() => advance(4)}
                  />
                </p>
              </div>
            </div>
          </div>

          {/* Right — stacks below text on mobile; side-by-side on desktop */}
          <div
            className={`order-2 w-full min-w-0 lg:relative lg:py-4 xl:py-6 ${
              step < 4 ? "max-lg:hidden" : "max-lg:mt-1"
            }`}
            aria-hidden={step < 4}
          >
            <ContainerScroll compact showTablet={step >= 4}>
              <AutoSlideGallery
                images={slides}
                imageClassName="max-lg:object-[78%_center] lg:object-center"
              />
            </ContainerScroll>
          </div>
        </div>

        {/* Trust band — pinned to bottom with clear space above next section */}
        <div className="mt-auto shrink-0 pt-2" aria-hidden={step < 5}>
          <div
            className={`transition-opacity duration-500 ease-out ${
              step >= 5 ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
          >
            <HeroTrustBand />
          </div>
        </div>
      </div>
    </section>
  );
}
