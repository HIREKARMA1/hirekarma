"use client";

import { SectionLabel } from "@/components/products-page/ui/SectionLabel";
import { useResourcesLocale } from "@/contexts/ResourcesLocaleContext";
import { ResourcesLanguageSwitcher } from "../ui/ResourcesLanguageSwitcher";

export function ResourcesHeroSection() {
  const { content, locale, setLocale } = useResourcesLocale();
  const { hero } = content;

  return (
    <section className="relative border-b border-slate-200 pt-24 pb-12 sm:pt-28 sm:pb-14 lg:pt-32 lg:pb-16 dark:border-white/10">
      <div className="relative z-10 content-container">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <SectionLabel>{hero.badge}</SectionLabel>
          <ResourcesLanguageSwitcher locale={locale} onChange={setLocale} />
        </div>

        <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">
          {hero.heading}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-white/70">
          {hero.lead}
        </p>
      </div>
    </section>
  );
}
