"use client";

import { useHomeLocale } from "@/contexts/HomeLocaleContext";
import { GradientHeading } from "@/components/products-page/ui/GradientHeading";
import { ProductButton } from "@/components/products-page/ui/ProductButton";
import { SectionLabel } from "@/components/products-page/ui/SectionLabel";
import { homeAccentMap } from "../ui/home-accents";

export function HomeFeaturedProductsSection() {
  const { content } = useHomeLocale();
  const { featured } = content;

  return (
    <section className="relative py-14 sm:py-16 lg:py-20">
      <div className="content-container relative z-10">
        <div className="mb-8 max-w-2xl space-y-3 sm:mb-10">
          <SectionLabel>{featured.label}</SectionLabel>
          <GradientHeading heading={featured.heading} as="h2" size="section" />
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {featured.products.map((product) => {
            const accent = homeAccentMap[product.accent];
            const isDark = product.tone === "dark";
            return (
              <article
                key={product.id}
                className={`overflow-hidden rounded-2xl border border-white/10 p-6 sm:p-8 ${
                  isDark ? "bg-[#0b1220]" : "bg-white/[0.06]"
                }`}
              >
                <div className="flex flex-col gap-6 lg:flex-row lg:items-center">
                  <div className="flex-1 space-y-4">
                    <p
                      className="text-sm font-bold tracking-[0.2em] uppercase"
                      style={{ color: accent }}
                    >
                      {product.title}
                    </p>
                    <p className="text-sm leading-relaxed text-white/75 sm:text-base">
                      {product.description}
                    </p>
                    <ProductButton
                      cta={product.cta}
                      accentColor={accent}
                    />
                  </div>
                  <div
                    className="w-full rounded-xl border border-white/10 bg-black/25 p-4 lg:max-w-[220px]"
                    style={{ boxShadow: `inset 0 0 0 1px ${accent}33` }}
                  >
                    <p className="text-xs font-medium text-white/50">
                      {product.metricLabel}
                    </p>
                    <p
                      className="mt-2 text-2xl font-bold tracking-tight"
                      style={{ color: accent }}
                    >
                      {product.metricValue}
                    </p>
                    <div className="mt-4 space-y-2">
                      {[72, 56, 84].map((width) => (
                        <div
                          key={width}
                          className="h-2 rounded-full bg-white/10"
                        >
                          <div
                            className="h-2 rounded-full"
                            style={{
                              width: `${width}%`,
                              backgroundColor: accent,
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
