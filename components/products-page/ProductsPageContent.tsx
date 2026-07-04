"use client";

import { useEffect } from "react";

import { ProductsLocaleProvider } from "@/contexts/ProductsLocaleContext";
import { usePreloadHeroImage } from "@/hooks/usePreloadHeroImage";
import {
  getProductsPageMediaSync,
  resolveMediaSrc,
} from "@/services/products-page-media";
import { ProductsPageLoader } from "./ui/ProductsPageLoader";
import { ProductsHeroSection } from "./sections/ProductsHeroSection";
import { ProductsGridSection } from "./sections/ProductsGridSection";
import { ImpactStatsSection } from "./sections/ImpactStatsSection";
import { ProductsCTASection } from "./sections/ProductsCTASection";

function ProductsPageInner() {
  const media = getProductsPageMediaSync();
  const firstSlide = resolveMediaSrc(media.hero.tabletSlides[0]?.src ?? "");
  const pageReady = usePreloadHeroImage(firstSlide);

  useEffect(() => {
    const html = document.documentElement;
    html.classList.add("products-page-scroll");

    if (!pageReady) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      html.classList.remove("products-page-scroll");
      document.body.style.overflow = "";
    };
  }, [pageReady]);

  if (!pageReady) {
    return <ProductsPageLoader />;
  }

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
