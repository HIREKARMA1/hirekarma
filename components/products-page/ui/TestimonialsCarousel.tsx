"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

import { theme } from "@/config/theme";
import { formatTestimonialQuote } from "@/lib/utils/testimonial-quote";
import type { HeadingParts, TestimonialItem } from "@/types/products-page";

const ITEMS_PER_PAGE = 3;

const CARD_ACCENTS = [
  theme.colors.primary,
  theme.colors.secondary,
  theme.colors.orange,
  theme.colors.green,
  theme.colors.yellow,
] as const;

interface TestimonialsWithCarouselProps {
  label: string;
  heading: HeadingParts;
  accentColor?: string;
  testimonials: TestimonialItem[];
}

/**
 * HireKarma testimonials — brand-aligned carousel (no blur/noise motion).
 */
export function TestimonialsWithCarousel({
  label,
  heading,
  accentColor = theme.colors.secondary,
  testimonials,
}: TestimonialsWithCarouselProps) {
  const [page, setPage] = useState(0);

  const totalPages = Math.max(1, Math.ceil(testimonials.length / ITEMS_PER_PAGE));

  const visible = useMemo(() => {
    const start = page * ITEMS_PER_PAGE;
    return testimonials.slice(start, start + ITEMS_PER_PAGE);
  }, [page, testimonials]);

  const handlePrev = () => setPage((p) => (p - 1 + totalPages) % totalPages);
  const handleNext = () => setPage((p) => (p + 1) % totalPages);

  if (!testimonials.length) return null;

  return (
    <div className="py-8 sm:py-10 lg:py-12">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="min-w-0 max-w-2xl space-y-2">
          <p
            className="text-[10px] font-semibold uppercase tracking-[0.18em]"
            style={{ color: accentColor }}
          >
            {label}
          </p>
          <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl lg:text-[1.75rem]">
            {heading.part1}{" "}
            <span style={{ color: accentColor }}>{heading.gradient}</span>
            {heading.part2 ? ` ${heading.part2}` : null}
          </h2>
        </div>

        {totalPages > 1 ? (
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Previous testimonials"
              onClick={handlePrev}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/80 transition hover:border-white/40 hover:bg-white/10 hover:text-white"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Next testimonials"
              onClick={handleNext}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/80 transition hover:border-white/40 hover:bg-white/10 hover:text-white"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        ) : null}
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {visible.map((testimonial, index) => {
          const accent =
            CARD_ACCENTS[(page * ITEMS_PER_PAGE + index) % CARD_ACCENTS.length];
          const { display, full, isTruncated } = formatTestimonialQuote(
            testimonial.quote
          );

          return (
            <article
              key={`${testimonial.id}-${page}`}
              className="flex h-full min-h-[260px] flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-white/20 hover:bg-white/[0.06]"
            >
              <div
                className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl text-white"
                style={{ backgroundColor: accent }}
              >
                <Quote className="h-4 w-4" />
              </div>

              <p
                className="text-[14px] leading-relaxed text-white/90"
                title={isTruncated ? full : undefined}
              >
                {display}
              </p>

              <div className="mt-auto flex items-center gap-3 border-t border-white/10 pt-4">
                <div
                  className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full"
                  style={{ boxShadow: `0 0 0 2px ${accent}` }}
                >
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    sizes="44px"
                  />
                </div>
                <div className="min-w-0">
                  <p className="truncate text-sm font-bold text-white">
                    {testimonial.name}
                  </p>
                  <p className="mt-0.5 line-clamp-2 text-xs leading-snug text-white/85">
                    {testimonial.designation}
                  </p>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {totalPages > 1 ? (
        <div className="mt-5 flex items-center justify-center gap-1.5">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to testimonials page ${i + 1}`}
              aria-current={i === page}
              onClick={() => setPage(i)}
              className={`h-1.5 rounded-full transition ${
                i === page ? "w-6 bg-white" : "w-1.5 bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}

/** @deprecated Use TestimonialsWithCarousel */
export const TestimonialsCarousel = TestimonialsWithCarousel;
