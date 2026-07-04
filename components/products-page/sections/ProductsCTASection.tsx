"use client";

import { theme } from "@/config/theme";
import { useProductsLocale } from "@/contexts/ProductsLocaleContext";
import { GradientHeading } from "../ui/GradientHeading";
import { ProductButton } from "../ui/ProductButton";

export function ProductsCTASection() {
  const { content } = useProductsLocale();
  const { cta } = content;

  return (
    <section className="relative py-12 sm:py-16 lg:py-20">
      <div className="content-container">
        <div
          className="overflow-hidden rounded-3xl border border-white/10 p-8 sm:p-10 lg:p-14"
          style={{
            background: `linear-gradient(135deg, ${theme.colors.surfaceDark} 0%, ${theme.colors.heroBg} 100%)`,
          }}
        >
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="space-y-4 text-center lg:text-left">
              <GradientHeading heading={cta.heading} size="cta" />
              <p
                className="mx-auto max-w-lg text-base leading-relaxed lg:mx-0"
                style={{ color: theme.colors.textMuted }}
              >
                {cta.description}
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {cta.buttons.map((button, index) => (
                <ProductButton
                  key={`${button.hrefKey}-${index}`}
                  cta={button}
                  fullWidth={index === cta.buttons.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
