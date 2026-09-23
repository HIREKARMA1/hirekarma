"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import Image from "next/image";
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

type GalleryLightboxProps = {
  open: boolean;
  event: PastEvent | null;
  activeIndex: number;
  onClose: () => void;
  onIndexChange: (index: number) => void;
};

const ease = [0.22, 1, 0.36, 1] as const;

export default function GalleryLightbox({
  open,
  event,
  activeIndex,
  onClose,
  onIndexChange,
}: GalleryLightboxProps) {
  const titleId = useId();
  const touchStartX = useRef<number | null>(null);
  const [direction, setDirection] = useState(0);

  const photos = event?.gallery ?? [];
  const count = photos.length;
  const safeIndex = count === 0 ? 0 : ((activeIndex % count) + count) % count;
  const active = photos[safeIndex] ?? event?.heroImage;
  const bodyText = event?.body ?? event?.description ?? "";
  const paragraphs = bodyText
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter(Boolean);

  const primary = theme.colors.primary;
  const secondary = theme.colors.secondary;

  const goPrev = useCallback(() => {
    if (count <= 1) return;
    setDirection(-1);
    onIndexChange((safeIndex - 1 + count) % count);
  }, [count, onIndexChange, safeIndex]);

  const goNext = useCallback(() => {
    if (count <= 1) return;
    setDirection(1);
    onIndexChange((safeIndex + 1) % count);
  }, [count, onIndexChange, safeIndex]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [goNext, goPrev, onClose, open]);

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
    <AnimatePresence>
      {open && event && active ? (
        <motion.div
          className="fixed inset-0 z-[100] flex items-stretch justify-center sm:items-center sm:p-5 lg:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
        >
          <button
            type="button"
            className="absolute inset-0 bg-[#0f1622]/45 backdrop-blur-sm"
            aria-label="Close gallery"
            onClick={onClose}
          />

          <motion.div
            className="relative z-10 flex h-full w-full max-w-4xl flex-col overflow-hidden border border-[#e6e8ec] bg-white shadow-[0_32px_80px_rgba(15,22,34,0.18)] sm:h-auto sm:max-h-[92vh] sm:rounded-[24px]"
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.32, ease }}
          >
            {/* Sticky header — HireKarma light theme */}
            <header className="sticky top-0 z-20 flex shrink-0 items-center gap-3 border-b border-[#e6e8ec] bg-white/90 px-4 py-3.5 backdrop-blur-xl sm:px-6 sm:py-4">
              <motion.button
                type="button"
                onClick={onClose}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#e6e8ec] bg-[#f6f8fb] text-[#0f1622] transition hover:border-[#cbd5e1] hover:bg-white"
                aria-label="Back to past events"
              >
                <ArrowLeft className="h-4 w-4" />
              </motion.button>
              <h2
                id={titleId}
                className="min-w-0 flex-1 text-center text-[15px] font-semibold tracking-tight text-[#0f1622] sm:text-base"
              >
                Past Events Gallery
              </h2>
              <span className="w-10 shrink-0" aria-hidden />
            </header>

            <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain scroll-smooth bg-[#f6f8fb]">
              {/* Hero image */}
              <div className="px-3 pt-3 sm:px-5 sm:pt-5">
                <div
                  className="group relative overflow-hidden rounded-[20px] bg-white sm:rounded-[24px]"
                  style={{
                    boxShadow: "0 12px 40px rgba(15,22,34,0.1)",
                  }}
                  onTouchStart={onTouchStart}
                  onTouchEnd={onTouchEnd}
                >
                  <div className="relative h-[240px] w-full sm:h-[340px] lg:h-[400px]">
                    <AnimatePresence mode="wait" custom={direction}>
                      <motion.div
                        key={active.src + safeIndex}
                        custom={direction}
                        className="absolute inset-0 overflow-hidden"
                        initial={{ opacity: 0, x: direction >= 0 ? 48 : -48 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: direction >= 0 ? -48 : 48 }}
                        transition={{ duration: 0.32, ease }}
                      >
                        <Image
                          src={active.src}
                          alt={active.alt}
                          fill
                          className="object-cover object-center transition duration-700 ease-out group-hover:scale-[1.03]"
                          style={{
                            objectFit: "cover",
                            objectPosition: "center center",
                          }}
                          sizes="(max-width: 768px) 100vw, 896px"
                          priority
                        />
                      </motion.div>
                    </AnimatePresence>

                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0f1622]/25 via-transparent to-transparent" />

                    {count > 1 ? (
                      <>
                        <motion.button
                          type="button"
                          onClick={goPrev}
                          whileHover={{ scale: 1.08 }}
                          whileTap={{ scale: 0.94 }}
                          className="absolute left-3 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/80 bg-white/90 text-[#1b52a4] shadow-[0_8px_24px_rgba(15,22,34,0.18)] backdrop-blur-md transition hover:bg-white sm:left-4 sm:h-12 sm:w-12"
                          aria-label="Previous photo"
                        >
                          <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
                        </motion.button>
                        <motion.button
                          type="button"
                          onClick={goNext}
                          whileHover={{ scale: 1.08 }}
                          whileTap={{ scale: 0.94 }}
                          className="absolute right-3 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/80 bg-white/90 text-[#1b52a4] shadow-[0_8px_24px_rgba(15,22,34,0.18)] backdrop-blur-md transition hover:bg-white sm:right-4 sm:h-12 sm:w-12"
                          aria-label="Next photo"
                        >
                          <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
                        </motion.button>
                      </>
                    ) : null}

                    <div className="absolute bottom-3 left-1/2 z-10 -translate-x-1/2 rounded-full border border-white/70 bg-white/90 px-3 py-1 text-[12px] font-semibold tracking-wide text-[#0f1622] shadow-sm backdrop-blur-md sm:bottom-4">
                      {safeIndex + 1} / {count || 1}
                    </div>
                  </div>
                </div>
              </div>

              {/* Event details */}
              <div className="px-3 py-4 sm:px-5 sm:py-6">
                <motion.div
                  className="rounded-[20px] border border-[#e6e8ec] bg-white px-5 py-5 shadow-[0_8px_30px_rgba(15,22,34,0.06)] sm:rounded-[24px] sm:px-7 sm:py-7"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.25, ease }}
                >
                  <span
                    className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-white shadow-sm"
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${primary} 0%, ${secondary} 100%)`,
                    }}
                  >
                    <Sparkles className="h-3.5 w-3.5" aria-hidden />
                    {event.category}
                  </span>

                  <h3 className="mt-4 max-w-2xl text-[1.45rem] font-bold leading-snug tracking-tight text-[#0f1622] sm:text-[1.85rem]">
                    {event.title}
                  </h3>

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
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
