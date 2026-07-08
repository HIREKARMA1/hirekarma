"use client";

import Image from "next/image";

import { useHomeLocale } from "@/contexts/HomeLocaleContext";
import { GradientHeading } from "@/components/products-page/ui/GradientHeading";
import { SectionLabel } from "@/components/products-page/ui/SectionLabel";
import { theme } from "@/config/theme";

export function HomeTestimonialsSection() {
  const { content } = useHomeLocale();
  const { testimonials } = content;
  const featured =
    testimonials.items.find((item) => item.featured) ?? testimonials.items[0];
  const others = testimonials.items.filter((item) => item.id !== featured?.id);

  if (!featured) return null;

  return (
    <section className="relative border-t border-white/10 py-14 sm:py-16 lg:py-20">
      <div className="content-container relative z-10">
        <div className="mb-8 max-w-2xl space-y-3 sm:mb-10">
          <SectionLabel>{testimonials.label}</SectionLabel>
          <GradientHeading
            heading={testimonials.heading}
            as="h2"
            size="section"
          />
        </div>

        <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <article className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">
            <div className="relative aspect-[4/3]">
              <Image
                src={featured.image}
                alt={featured.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                <p className="text-lg font-semibold text-white sm:text-xl">
                  {featured.name}
                </p>
                <p className="mt-1 text-sm text-white/70">
                  {featured.designation}
                </p>
              </div>
            </div>
            <div className="p-5 sm:p-6">
              <p className="text-sm leading-relaxed text-white/80 sm:text-base">
                “{featured.quote}”
              </p>
            </div>
          </article>

          <div className="grid gap-4 sm:grid-cols-2">
            {others.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
              >
                <p className="mb-4 text-sm leading-relaxed text-white/75">
                  “{item.quote}”
                </p>
                <div className="flex items-center gap-3">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full border border-white/15">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      {item.name}
                    </p>
                    <p
                      className="text-xs"
                      style={{ color: theme.colors.textMuted }}
                    >
                      {item.designation}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
