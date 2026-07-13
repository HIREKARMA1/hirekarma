"use client";

import { useOtherInitiativesLocale } from "@/contexts/OtherInitiativesLocaleContext";
import { theme } from "@/config/theme";
import { ProductsSectionHeader } from "@/components/products-page/ui/ProductsSectionHeader";
import { StatCard } from "@/components/products-page/ui/StatCard";

export function InitiativesImpactSection() {
  const { content, locale } = useOtherInitiativesLocale();
  const { impact } = content;

  return (
    <section className="relative border-t border-slate-200 py-14 sm:py-16 lg:py-20 dark:border-white/10">
      <div className="relative z-10 content-container">
        <ProductsSectionHeader
          label={impact.label}
          heading={impact.heading}
          accentColor={theme.colors.orange}
        />

        <p className="mb-10 max-w-3xl text-base leading-relaxed text-slate-600 dark:text-white/70 sm:mb-12 sm:text-lg">
          {impact.description}
        </p>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-5 lg:gap-5">
          {impact.stats.map((stat, index) => (
            <StatCard key={stat.id} stat={stat} colorIndex={index} locale={locale} />
          ))}
        </div>
      </div>
    </section>
  );
}
