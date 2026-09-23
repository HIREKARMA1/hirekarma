"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Sparkles,
} from "lucide-react";

import type { PastEvent } from "@/types/past-events";
import { theme } from "@/config/theme";

const ease = [0.22, 1, 0.36, 1] as const;

type PastEventGalleryPageProps = {
  event: PastEvent;
};

export default function PastEventGalleryPage({ event }: PastEventGalleryPageProps) {
  const photos = event.gallery;
  const count = photos.length;
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const safeIndex = count === 0 ? 0 : ((activeIndex % count) + count) % count;
  const active = photos[safeIndex] ?? event.heroImage;
  const paragraphs = (event.body ?? event.description)
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);

  const primary = theme.colors.primary;
  const secondary = theme.colors.secondary;

  const goPrev = useCallback(() => {
    if (count <= 1) return;
    setDirection(-1);
    setActiveIndex((i) => (i - 1 + count) % count);
  }, [count]);

  const goNext = useCallback(() => {
    if (count <= 1) return;
    setDirection(1);
    setActiveIndex((i) => (i + 1) % count);
  }, [count]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [goNext, goPrev]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return;
    const endX = e.changedTouches[0]?.clientX ?? touchStartX.current;
    const delta = endX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(delta) < 48) return;
    if (delta > 0) goPrev();
    else goNext();
  };

  return (
    <main className="min-h-screen bg-[#f6f8fb]">
      <div className="content-container py-8 sm:py-10 lg:py-12">
        <div className="mx-auto max-w-4xl overflow-hidden rounded-[24px] border border-[#e6e8ec] bg-white shadow-[0_20px_60px_rgba(15,22,34,0.08)]">
          {/* Header */}
          <div className="flex items-center gap-3 border-b border-[#e6e8ec] px-4 py-4 sm:px-6">
            <Link
              href="/events/past-gallery"
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#e6e8ec] bg-[#f6f8fb] text-[#0f1622] transition hover:border-[#cbd5e1] hover:bg-white"
              aria-label="Back to Past Events"
            >
              <ArrowLeft className="h-4 w-4" />
            </Link>
            <h1 className="min-w-0 flex-1 text-center text-[15px] font-semibold tracking-tight text-[#0f1622] sm:text-base">
              Past Events Gallery
            </h1>
            <span className="w-10 shrink-0" aria-hidden />
          </div>

          {/* Event image — full-frame cover like before */}
          <div className="bg-[#f6f8fb] px-3 pt-3 sm:px-5 sm:pt-5">
            <div
              className="relative overflow-hidden rounded-[20px] bg-white shadow-[0_12px_40px_rgba(15,22,34,0.1)]"
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              <div className="relative h-[240px] w-full sm:h-[360px] lg:h-[420px]">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={active.src + safeIndex}
                    custom={direction}
                    className="absolute inset-0 overflow-hidden"
                    initial={{ opacity: 0, x: direction >= 0 ? 40 : -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: direction >= 0 ? -40 : 40 }}
                    transition={{ duration: 0.3, ease }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={active.src}
                      alt={active.alt}
                      className="h-full w-full object-cover object-center"
                      draggable={false}
                    />
                  </motion.div>
                </AnimatePresence>

                {count > 1 ? (
                  <>
                    <motion.button
                      type="button"
                      onClick={goPrev}
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.94 }}
                      className="absolute left-3 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/80 bg-white/95 text-[#1b52a4] shadow-[0_8px_24px_rgba(15,22,34,0.18)] backdrop-blur-md transition hover:bg-white sm:left-4"
                      aria-label="Previous photo"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </motion.button>
                    <motion.button
                      type="button"
                      onClick={goNext}
                      whileHover={{ scale: 1.08 }}
                      whileTap={{ scale: 0.94 }}
                      className="absolute right-3 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/80 bg-white/95 text-[#1b52a4] shadow-[0_8px_24px_rgba(15,22,34,0.18)] backdrop-blur-md transition hover:bg-white sm:right-4"
                      aria-label="Next photo"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </motion.button>
                  </>
                ) : null}

                <div className="absolute bottom-3 left-1/2 z-10 -translate-x-1/2 rounded-full border border-white/70 bg-white/95 px-3 py-1 text-[12px] font-semibold tracking-wide text-[#0f1622] shadow-sm backdrop-blur-md sm:bottom-4">
                  {safeIndex + 1} / {count || 1}
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="bg-[#f6f8fb] px-3 py-4 sm:px-5 sm:py-6">
            <div className="rounded-[20px] border border-[#e6e8ec] bg-white px-5 py-5 shadow-[0_8px_30px_rgba(15,22,34,0.05)] sm:rounded-[24px] sm:px-7 sm:py-7">
              <span
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white shadow-sm"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${primary} 0%, ${secondary} 100%)`,
                }}
              >
                <Sparkles className="h-3.5 w-3.5" aria-hidden />
                {event.category}
              </span>

              <h2 className="mt-4 max-w-2xl text-[1.45rem] font-bold leading-snug tracking-tight text-[#0f1622] sm:text-[1.85rem]">
                {event.title}
              </h2>

              <div className="mt-3.5 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-[#64748b]">
                <span className="inline-flex items-center gap-2">
                  <CalendarDays
                    className="h-4 w-4 shrink-0"
                    style={{ color: secondary }}
                  />
                  {event.date}
                </span>
                <span className="inline-flex items-center gap-2">
                  <MapPin
                    className="h-4 w-4 shrink-0"
                    style={{ color: secondary }}
                  />
                  {event.location}
                </span>
              </div>

              <div className="mt-5 max-w-2xl space-y-4 border-t border-[#eef1f5] pt-5">
                {paragraphs.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-[15px] leading-[1.75] text-[#475569] sm:text-[16px]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
