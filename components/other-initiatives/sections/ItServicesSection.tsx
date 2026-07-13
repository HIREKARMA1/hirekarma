"use client";

import { useOtherInitiativesLocale } from "@/contexts/OtherInitiativesLocaleContext";
import { theme } from "@/config/theme";
import { ProductsSectionHeader } from "@/components/products-page/ui/ProductsSectionHeader";
import { ItServiceCard } from "../ui/ItServiceCard";

export function ItServicesSection() {
  const { content } = useOtherInitiativesLocale();
  const { servicesSection } = content;

  return (
    <section className="relative w-full max-w-full border-t border-slate-200 py-14 sm:py-16 lg:py-20 dark:border-white/10">
      <div className="relative z-10 content-container">
        <ProductsSectionHeader
          label={servicesSection.label}
          heading={servicesSection.heading}
          accentColor={theme.colors.secondary}
        />

        <p className="mb-10 max-w-3xl text-base leading-relaxed text-slate-600 dark:text-white/70 sm:mb-12 sm:text-lg">
          {servicesSection.description}
        </p>

        <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {servicesSection.items.map((service) => (
            <ItServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
