"use client";

import { ProductsLocaleProvider } from "@/contexts/ProductsLocaleContext";
import { ProductsHeroSection } from "./sections/ProductsHeroSection";
import { ProductsGridSection } from "./sections/ProductsGridSection";
import { ImpactStatsSection } from "./sections/ImpactStatsSection";
import { ProductsCTASection } from "./sections/ProductsCTASection";

function ProductsPageInner() {
  return (
    <main className="products-page min-h-screen">
      <ProductsHeroSection />
      <ProductsGridSection />
      <ImpactStatsSection />
      <ProductsCTASection />
    </main>
  );
}

export function ProductsPageContent() {
  return (
    <ProductsLocaleProvider>
      <ProductsPageInner />
    </ProductsLocaleProvider>
  );
}
