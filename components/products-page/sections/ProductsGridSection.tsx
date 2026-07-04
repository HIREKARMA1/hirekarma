"use client";

import { useProductsLocale } from "@/contexts/ProductsLocaleContext";
import { SectionLabel } from "../ui/SectionLabel";
import { ProductDetailCard } from "./ProductDetailCard";

export function ProductsGridSection() {
  const { content } = useProductsLocale();
  const { productsSection } = content;

  return (
    <section className="relative z-0 bg-white pb-14 pt-8 sm:pb-16 sm:pt-10 lg:pb-20 lg:pt-12">
      <div className="content-container">
        <div className="mx-auto mb-12 max-w-3xl space-y-4 text-center sm:mb-16">
          <SectionLabel variant="light">{productsSection.label}</SectionLabel>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">
            {productsSection.heading}
          </h2>
          <p className="text-base leading-relaxed text-gray-600 sm:text-lg">
            {productsSection.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {productsSection.items.map((product) => (
            <ProductDetailCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
