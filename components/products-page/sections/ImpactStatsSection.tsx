"use client";

import { useProductsLocale } from "@/contexts/ProductsLocaleContext";
import { StatCard } from "../ui/StatCard";
import { SectionLabel } from "../ui/SectionLabel";

export function ImpactStatsSection() {
  const { content } = useProductsLocale();
  const { impact } = content;

  return (
    <section className="border-t border-gray-100 bg-gray-50 py-14 sm:py-16 lg:py-20">
      <div className="content-container">
        <div className="mb-10 text-center sm:mb-12">
          <SectionLabel variant="light" className="text-center">
            {impact.label}
          </SectionLabel>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5 lg:gap-6">
          {impact.stats.map((stat) => (
            <StatCard key={stat.id} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
