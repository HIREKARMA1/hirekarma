"use client";

import { useProductsLocale } from "@/contexts/ProductsLocaleContext";
import { theme } from "@/config/theme";
import { ProductsSectionHeader } from "../ui/ProductsSectionHeader";
import { ProductDetailCard } from "./ProductDetailCard";

export function ProductsGridSection() {
  const { content } = useProductsLocale();
  const { productsSection } = content;

  return (
    <section id="product-stack" className="relative w-full scroll-mt-24 bg-white py-8 sm:py-10 lg:py-12">
      <div className="relative z-10 content-container">
        <ProductsSectionHeader
          label={productsSection.label}
          heading={productsSection.heading}
          accentColor={theme.colors.primary}
          className="mb-6 max-w-2xl space-y-2 sm:mb-8 sm:space-y-3"
        />

        {productsSection.description ? (
          <p className="-mt-3 mb-6 max-w-2xl text-sm leading-snug text-[#0f1622]/55 sm:-mt-4 sm:mb-7">
            {productsSection.description}
          </p>
        ) : null}

        <div className="grid grid-cols-1 items-stretch gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {productsSection.items.map((product) => (
            <ProductDetailCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
