"use client";

import { theme } from "@/config/theme";
import { useProductsLocale } from "@/contexts/ProductsLocaleContext";
import { TestimonialsWithCarousel } from "../ui/TestimonialsCarousel";

export function ProductsTestimonialsSection() {
  const { content } = useProductsLocale();
  const { testimonials } = content;

  return (
    <section className="relative border-t border-slate-200 dark:border-white/10">
      <div className="relative z-10 content-container">
        <TestimonialsWithCarousel
          label={testimonials.label}
          heading={testimonials.heading}
          accentColor={theme.colors.green}
          testimonials={testimonials.items}
        />
      </div>
    </section>
  );
}