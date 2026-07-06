"use client";

import { useProductsLocale } from "@/contexts/ProductsLocaleContext";
import { theme } from "@/config/theme";
import { ProductsSectionHeader } from "../ui/ProductsSectionHeader";
import { ProductDetailCard } from "./ProductDetailCard";

export function ProductsGridSection() {
  const { content } = useProductsLocale();
  const { productsSection } = content;

  return (
    <section className="relative w-full max-w-full py-14 sm:py-16 lg:py-20">
      <div className="relative z-10 content-container">
        <ProductsSectionHeader
          label={productsSection.label}
          heading={productsSection.heading}
          accentColor={theme.colors.secondary}
        />

        <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {productsSection.items.map((product) => (
            <ProductDetailCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
