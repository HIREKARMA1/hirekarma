"use client";

import { useProductsLocale } from "@/contexts/ProductsLocaleContext";
import { GradientHeading } from "../ui/GradientHeading";
import { SectionLabel } from "../ui/SectionLabel";
import { ProductDetailCard } from "./ProductDetailCard";

export function ProductsGridSection() {
  const { content } = useProductsLocale();
  const { productsSection } = content;

  return (
    <section className="relative w-full max-w-full py-14 sm:py-16 lg:py-20">
      <div className="relative z-10 content-container">
        <div className="mb-12 max-w-3xl space-y-5 sm:mb-16 sm:space-y-6">
          <SectionLabel>{productsSection.label}</SectionLabel>

          <GradientHeading
            heading={productsSection.heading}
            as="h2"
            size="section"
            layout="stacked"
          />

          <p className="max-w-2xl text-base font-medium leading-[1.7] text-white/88 sm:text-lg lg:font-normal lg:leading-[1.75] lg:text-white/80">
            {productsSection.description}
          </p>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {productsSection.items.map((product) => (
            <ProductDetailCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
