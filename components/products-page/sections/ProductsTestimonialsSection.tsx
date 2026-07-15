"use client";

import { theme } from "@/config/theme";
import { useProductsLocale } from "@/contexts/ProductsLocaleContext";
import { TestimonialsWithCarousel } from "../ui/TestimonialsCarousel";

export function ProductsTestimonialsSection() {
  const { content } = useProductsLocale();
  const { testimonials } = content;

  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: theme.colors.ink }}
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div
          className="absolute -left-20 top-10 h-56 w-56 rounded-full blur-[100px]"
          style={{ backgroundColor: "rgba(27,82,164,0.35)" }}
        />
        <div
          className="absolute right-0 bottom-0 h-64 w-64 rounded-full blur-[110px]"
          style={{ backgroundColor: "rgba(0,162,229,0.18)" }}
        />
      </div>

      <div className="relative z-10 content-container">
        <TestimonialsWithCarousel
          label={testimonials.label}
          heading={testimonials.heading}
          accentColor={theme.colors.secondary}
          testimonials={testimonials.items}
        />
      </div>
    </section>
  );
}
