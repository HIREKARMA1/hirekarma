"use client";

import { ProductsLocaleProvider } from "@/contexts/ProductsLocaleContext";
import { ProductsPageBackground } from "./ui/ProductsPageBackground";
import { ProductsHeroSection } from "./sections/ProductsHeroSection";
import { ProductsGridSection } from "./sections/ProductsGridSection";
import { ImpactStatsSection } from "./sections/ImpactStatsSection";
import { ProductsTestimonialsSection } from "./sections/ProductsTestimonialsSection";

function ProductsPageInner() {
  return (
    <>
      <ProductsPageBackground />

      <main className="products-page relative z-0 min-h-screen w-full max-w-full overflow-x-clip">
        <ProductsHeroSection />
        <ProductsGridSection />
        <ImpactStatsSection />
        <ProductsTestimonialsSection />
      </main>
    </>
  );
}

export function ProductsPageContent() {
  return (
    <ProductsLocaleProvider>
      <ProductsPageInner />
    </ProductsLocaleProvider>
  );
}
