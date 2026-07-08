"use client";

import { useProductsLocale } from "@/contexts/ProductsLocaleContext";
import { theme } from "@/config/theme";
import { ProductsSectionHeader } from "../ui/ProductsSectionHeader";
import { StatCard } from "../ui/StatCard";

export function ImpactStatsSection() {
  const { content } = useProductsLocale();
  const { impact } = content;

  return (
    <section className="relative border-t border-slate-200 py-14 sm:py-16 lg:py-20 dark:border-white/10">
      <div className="relative z-10 content-container">
        <ProductsSectionHeader
          label={impact.label}
          heading={impact.heading}
          accentColor={theme.colors.orange}
        />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-5 lg:gap-5">
          {impact.stats.map((stat, index) => (
            <StatCard key={stat.id} stat={stat} colorIndex={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
