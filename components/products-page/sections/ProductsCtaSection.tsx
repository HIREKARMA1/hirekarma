"use client";

import { theme } from "@/config/theme";
import { useProductsLocale } from "@/contexts/ProductsLocaleContext";
import { ProductButton } from "../ui/ProductButton";

export function ProductsCtaSection() {
  const { content } = useProductsLocale();
  const { cta } = content;

  return (
    <section className="relative bg-white py-8 sm:py-10">
      <div className="content-container">
        <div
          className="relative overflow-hidden rounded-2xl px-6 py-8 sm:px-10 sm:py-9"
          style={{
            background: `linear-gradient(135deg, ${theme.colors.primary} 0%, #143a7a 48%, ${theme.colors.secondary} 140%)`,
          }}
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-25"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
            aria-hidden
          />

          <div className="relative flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                {cta.heading.part1}{" "}
                <span style={{ color: theme.colors.yellow }}>
                  {cta.heading.gradient}
                </span>
              </h2>
              <p className="mt-2 text-sm leading-snug text-white/80">
                {cta.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {cta.buttons.map((button) => (
                <ProductButton
                  key={`${button.hrefKey}-${button.label}`}
                  cta={button}
                  accentColor={
                    button.variant === "primary" ? "#ffffff" : undefined
                  }
                  accentTextColor={
                    button.variant === "primary"
                      ? theme.colors.primary
                      : undefined
                  }
                  className={
                    button.variant === "outline"
                      ? "rounded-lg border-white/40 px-4 py-2.5 text-white hover:border-white hover:bg-white/10"
                      : "rounded-lg px-4 py-2.5 shadow-md"
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
