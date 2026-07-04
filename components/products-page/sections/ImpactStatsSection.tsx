"use client";

import { useProductsLocale } from "@/contexts/ProductsLocaleContext";
import { GradientHeading } from "../ui/GradientHeading";
import { SectionLabel } from "../ui/SectionLabel";
import { StatCard } from "../ui/StatCard";

export function ImpactStatsSection() {
  const { content } = useProductsLocale();
  const { impact } = content;

  return (
    <section className="relative border-t border-white/10 py-14 sm:py-16 lg:py-20">
      <div className="relative z-10 content-container">
        <div className="mb-12 max-w-3xl space-y-5 sm:mb-16 sm:space-y-6">
          <SectionLabel>{impact.label}</SectionLabel>

          <GradientHeading
            heading={impact.heading}
            as="h2"
            size="section"
            layout="stacked"
          />

          <p className="max-w-2xl text-base font-medium leading-[1.7] text-white/88 sm:text-lg lg:font-normal lg:leading-[1.75] lg:text-white/80">
            {impact.description}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-5 lg:gap-5">
          {impact.stats.map((stat, index) => (
            <StatCard key={stat.id} stat={stat} colorIndex={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
