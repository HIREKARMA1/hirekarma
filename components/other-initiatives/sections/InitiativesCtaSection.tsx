"use client";

import { useOtherInitiativesLocale } from "@/contexts/OtherInitiativesLocaleContext";
import { theme } from "@/config/theme";
import { GradientHeading } from "@/components/products-page/ui/GradientHeading";
import { InitiativeButton } from "../ui/InitiativeButton";

export function InitiativesCtaSection() {
  const { content } = useOtherInitiativesLocale();
  const { cta } = content;

  return (
    <section className="relative border-t border-slate-200 py-16 sm:py-20 lg:py-24 dark:border-white/10">
      <div className="relative z-10 content-container">
        <div className="mx-auto max-w-3xl text-center">
          <GradientHeading
            heading={cta.heading}
            as="h2"
            size="section"
            layout="stacked"
            accentColor={theme.colors.primary}
            className="mb-6"
          />
          <p className="mb-8 text-base leading-relaxed text-slate-600 dark:text-white/70 sm:text-lg">
            {cta.description}
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            {cta.buttons.map((button) => (
              <InitiativeButton
                key={button.label}
                cta={button}
                accentColor={
                  button.variant === "primary" ? theme.colors.primary : undefined
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
