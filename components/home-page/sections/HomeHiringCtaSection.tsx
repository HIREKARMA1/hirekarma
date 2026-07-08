"use client";

import { useHomeLocale } from "@/contexts/HomeLocaleContext";
import { ProductButton } from "@/components/products-page/ui/ProductButton";
import { theme } from "@/config/theme";

export function HomeHiringCtaSection() {
  const { content } = useHomeLocale();
  const { hiring } = content;

  return (
    <section className="relative py-10 sm:py-12 lg:py-14">
      <div className="content-container relative z-10">
        <div
          className="overflow-hidden rounded-3xl border border-white/10 px-6 py-10 sm:px-10 sm:py-12"
          style={{
            background: `linear-gradient(120deg, ${theme.colors.surfaceDark} 0%, #0a1628 55%, rgba(27,82,164,0.35) 100%)`,
          }}
        >
          <div className="max-w-2xl space-y-4">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
              {hiring.heading}
            </h2>
            <p className="text-sm leading-relaxed text-white/75 sm:text-base">
              {hiring.description}
            </p>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <ProductButton cta={hiring.primaryCta} />
              <ProductButton cta={hiring.secondaryCta} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
