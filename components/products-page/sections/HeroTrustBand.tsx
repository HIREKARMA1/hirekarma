"use client";

import PartnersMarquee from "@/components/layout/PartnersMarquee";
import { useProductsLocale } from "@/contexts/ProductsLocaleContext";

/** Same partners scroll as the site footer — uniform cards, smooth pace. */
export function HeroTrustBand() {
  const { content } = useProductsLocale();

  return (
    <div className="flex min-w-0 flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
      <p className="w-full shrink-0 text-left text-sm font-medium leading-snug text-[#0f1622]/55 sm:max-w-[200px] lg:max-w-[220px]">
        {content.partners.text}
      </p>
      <PartnersMarquee edgeColor="#ffffff" />
    </div>
  );
}
