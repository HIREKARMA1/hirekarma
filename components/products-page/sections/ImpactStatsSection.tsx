"use client";

import { useProductsLocale } from "@/contexts/ProductsLocaleContext";
import { theme } from "@/config/theme";
import { ProductsSectionHeader } from "../ui/ProductsSectionHeader";
import { StatCard } from "../ui/StatCard";

export function ImpactStatsSection() {
  const { content } = useProductsLocale();
  const { impact } = content;

  return (
    <section className="relative border-t border-[#e6e8ec] bg-[#f6f8fb] py-8 dark:border-white/10 dark:bg-transparent sm:py-10 lg:py-12">
      <div className="relative z-10 content-container">
        <ProductsSectionHeader
          label={impact.label}
          heading={impact.heading}
          accentColor={theme.colors.orange}
          className="mb-6 max-w-2xl space-y-2 sm:mb-8 sm:space-y-3"
        />

        <div data-hk-stagger className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
          {impact.stats.map((stat, index) => (
            <StatCard key={stat.id} stat={stat} colorIndex={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
