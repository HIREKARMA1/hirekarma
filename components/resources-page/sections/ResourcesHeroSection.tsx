"use client";

import { SectionLabel } from "@/components/products-page/ui/SectionLabel";
import { useResourcesLocale } from "@/contexts/ResourcesLocaleContext";
import { ResourcesLanguageSwitcher } from "../ui/ResourcesLanguageSwitcher";

export function ResourcesHeroSection() {
  const { content, locale, setLocale } = useResourcesLocale();
  const { hero } = content;

  return (
    <section className="relative border-b border-slate-300 pt-20 pb-6 sm:pt-24 sm:pb-7 lg:pt-28 lg:pb-8 dark:border-white/20">
      <div className="relative z-10 content-container">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3 sm:mb-5">
          <SectionLabel>{hero.badge}</SectionLabel>
          <ResourcesLanguageSwitcher locale={locale} onChange={setLocale} />
        </div>

        <h1 className="w-full max-w-none text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">
          {hero.heading}
        </h1>
        <p className="mt-3 w-full max-w-4xl text-base leading-relaxed text-slate-600 sm:mt-4 sm:text-lg dark:text-white/70">
          {hero.lead}
        </p>
      </div>
    </section>
  );
}
