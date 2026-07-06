"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { theme } from "@/config/theme";
import { formatTestimonialQuote } from "@/lib/utils/testimonial-quote";
import type { HeadingParts, TestimonialItem } from "@/types/products-page";
import { GradientHeading } from "./GradientHeading";
import { SectionLabel } from "./SectionLabel";

const ITEMS_PER_PAGE = 3;

const CARD_ACCENTS = [
  theme.colors.primary,
  theme.colors.secondary,
  theme.colors.orange,
  theme.colors.yellow,
  theme.colors.green,
  theme.colors.red,
] as const;

interface TestimonialsWithCarouselProps {
  label: string;
  heading: HeadingParts;
  accentColor?: string;
  testimonials: TestimonialItem[];
}

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="size-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {direction === "left" ? (
        <path d="m15 18-6-6 6-6" />
      ) : (
        <path d="m9 18 6-6-6-6" />
      )}
    </svg>
  );
}

/**
 * Aceternity UI — Testimonials With Carousel (HireKarma brand palette)
 * @see https://ui.aceternity.com/blocks/testimonials/testimonials-with-carousel
 */
export function TestimonialsWithCarousel({
  label,
  heading,
  accentColor = theme.colors.yellow,
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

  const navButtonClass =
    "flex size-10 items-center justify-center rounded-full border border-white/15 text-white/85 transition duration-200 hover:border-white/25 hover:bg-white/10 hover:text-white active:scale-[0.98]";

  return (
    <div className="py-12 md:py-20">
      <SectionLabel>{label}</SectionLabel>

      <div className="mt-4 flex items-center justify-between gap-4">
        <GradientHeading
          heading={heading}
          as="h2"
          size="section"
          layout="inline"
          accentColor={accentColor}
          className="min-w-0 flex-1"
        />

        {totalPages > 1 ? (
          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              aria-label="Previous testimonials"
              onClick={handlePrev}
              className={navButtonClass}
            >
              <ChevronIcon direction="left" />
            </button>
            <button
              type="button"
              aria-label="Next testimonials"
              onClick={handleNext}
              className={navButtonClass}
            >
              <ChevronIcon direction="right" />
            </button>
          </div>
        ) : null}
      </div>

      <div className="mt-8 md:mt-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
              exit: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
            }}
            className="grid gap-4 md:grid-cols-3"
          >
            {visible.map((testimonial, index) => {
              const accent = CARD_ACCENTS[(page * ITEMS_PER_PAGE + index) % CARD_ACCENTS.length];
              const { display, full, isTruncated } = formatTestimonialQuote(testimonial.quote);

              return (
                <motion.div
                  key={testimonial.id}
                  variants={{
                    hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
                    visible: {
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                      transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
                    },
                    exit: {
                      opacity: 0,
                      y: -20,
                      filter: "blur(8px)",
                      transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
                    },
                  }}
                  className="relative flex h-[280px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-4 shadow-[0_4px_24px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.05)] ring-1 ring-white/5 backdrop-blur-sm sm:h-[300px] md:rounded-2xl md:p-6"
                >
                  <div
                    className="absolute inset-x-0 top-0 h-0.5 opacity-90"
                    style={{ backgroundColor: accent }}
                    aria-hidden
                  />

                  <p
                    className="line-clamp-6 text-base leading-relaxed text-white/85 sm:text-xl sm:leading-relaxed"
                    title={isTruncated ? full : undefined}
                  >
                    {display}
                  </p>

                  <div className="mt-auto flex shrink-0 items-center gap-3 pt-6">
                    <div
                      className="relative size-8 shrink-0 overflow-hidden rounded-full"
                      style={{ boxShadow: `0 0 0 2px ${accent}55` }}
                    >
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                        sizes="32px"
                      />
                    </div>
                    <div className="flex min-w-0 flex-col">
                      <span className="truncate text-sm font-medium text-white">
                        {testimonial.name}
                      </span>
                      <span
                        className="truncate text-xs"
                        style={{ color: `${accent}cc` }}
                      >
                        {testimonial.designation}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

/** @deprecated Use TestimonialsWithCarousel */
export const TestimonialsCarousel = TestimonialsWithCarousel;
