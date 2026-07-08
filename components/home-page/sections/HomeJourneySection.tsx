"use client";

import { ArrowRight } from "lucide-react";

import { useHomeLocale } from "@/contexts/HomeLocaleContext";
import { SectionLabel } from "@/components/products-page/ui/SectionLabel";
import { theme } from "@/config/theme";

export function HomeJourneySection() {
  const { content } = useHomeLocale();
  const { journey } = content;

  return (
    <section className="relative border-y border-white/10 py-10 sm:py-12">
      <div className="content-container relative z-10">
        <div className="mb-6 text-center sm:mb-8">
          <SectionLabel className="justify-center text-center">
            {journey.label}
          </SectionLabel>
          <h2 className="mt-3 text-xl font-bold tracking-tight text-white sm:text-2xl">
            {journey.heading}
          </h2>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {journey.steps.map((step, index) => (
            <div key={step.id} className="flex items-center gap-2 sm:gap-3">
              <div
                className="rounded-full border border-white/15 bg-white/[0.05] px-3 py-2 text-xs font-semibold text-white sm:px-4 sm:text-sm"
                style={{
                  boxShadow: `0 0 20px ${theme.colors.secondary}22`,
                }}
              >
                {step.label}
              </div>
              {index < journey.steps.length - 1 ? (
                <ArrowRight
                  className="hidden h-4 w-4 text-white/35 sm:block"
                  aria-hidden
                />
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
