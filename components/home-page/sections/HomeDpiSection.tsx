"use client";

import { useHomeLocale } from "@/contexts/HomeLocaleContext";
import { GradientHeading } from "@/components/products-page/ui/GradientHeading";
import { ProductButton } from "@/components/products-page/ui/ProductButton";
import { SectionLabel } from "@/components/products-page/ui/SectionLabel";

export function HomeDpiSection() {
  const { content } = useHomeLocale();
  const { dpi } = content;

  return (
    <section className="relative border-t border-white/10 py-14 sm:py-16 lg:py-20">
      <div className="content-container relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-2xl space-y-4">
            <SectionLabel>{dpi.label}</SectionLabel>
            <GradientHeading heading={dpi.heading} as="h2" size="section" />
            <p className="text-sm leading-relaxed text-white/70 sm:text-base">
              {dpi.description}
            </p>
            <ProductButton cta={dpi.cta} />
          </div>

          <div className="grid grid-cols-3 gap-3 sm:gap-4">
            {dpi.partners.map((partner) => (
              <div
                key={partner.id}
                className="flex aspect-[4/3] items-center justify-center rounded-2xl border border-white/10 bg-white/[0.05] px-3 text-center"
              >
                {partner.logo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-10 w-auto max-w-full object-contain brightness-0 invert sm:max-h-12"
                  />
                ) : (
                  <span className="text-sm font-bold tracking-wide text-white/85 sm:text-base">
                    {partner.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
