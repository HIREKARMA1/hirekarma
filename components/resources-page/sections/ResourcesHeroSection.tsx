"use client";

import { GradientHeading } from "@/components/products-page/ui/GradientHeading";
import { SectionLabel } from "@/components/products-page/ui/SectionLabel";
import { theme } from "@/config/theme";
import { useResourcesLocale } from "@/contexts/ResourcesLocaleContext";

export function ResourcesHeroSection() {
  const { content } = useResourcesLocale();
  const { hero } = content;

  return (
    <section className="relative border-b border-slate-300 pt-8 pb-6 sm:pt-10 sm:pb-7 lg:pt-12 lg:pb-8 dark:border-white/20">
      <div className="relative z-10 content-container">
        <div className="mb-5">
          <SectionLabel>{hero.badge}</SectionLabel>
        </div>

        <GradientHeading
          heading={hero.heading}
          as="h1"
          size="section"
          layout="inline"
          accentColor={theme.colors.secondary}
          className="w-full max-w-none"
        />

        <p className="mt-3 w-full max-w-4xl text-base leading-relaxed text-slate-600 sm:mt-4 sm:text-lg dark:text-white/90">
          {hero.lead}
        </p>
      </div>
    </section>
  );
}
