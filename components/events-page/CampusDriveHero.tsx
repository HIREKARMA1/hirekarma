"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Banknote,
  Calendar,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  MapPin,
  Tag,
  Users,
} from "lucide-react";

const AUTO_SLIDE_MS = 5000;

import { PosterFrame } from "@/components/events-page/PosterFrame";
import type {
  HeroDriveSlide,
  HeroTileInfo,
} from "@/lib/utils/campusDriveHeroDisplay";
import {
  slideFromCampusProgram,
  slideFromUpcomingEvent,
} from "@/lib/utils/campusDriveHeroDisplay";
import type { EventsPageItem } from "@/types/events-page";

const TILE_ICONS = [Calendar, MapPin, Banknote, GraduationCap] as const;

const HERO_TAG_LIMIT = 3;

function formatHeroTagLabel(raw: string) {
  const trimmed = raw.trim();
  if (!trimmed) return "";
  const normalized = trimmed.replace(/[\s-]+/g, "_").toLowerCase();
  if (normalized === "campus_drive") return "Campus drive";
  return trimmed
    .replace(/_/g, " ")
    .replace(/\b([a-z])/g, (_, letter: string) => letter.toUpperCase());
}

function heroTagHint(raw: string, index: number) {
  const normalized = raw.trim().replace(/[\s-]+/g, "_").toLowerCase();
  if (index === 0 || normalized.includes("campus")) {
    return "Program category from Disha";
  }
  return "Who can see this program";
}

export function CampusDriveHero({
  programs = [],
  featuredEvents = [],
  activeTab = "campus",
}: {
  programs?: EventsPageItem[];
  featuredEvents?: EventsPageItem[];
  activeTab?: "campus" | "upcoming";
  onTabChange?: (tab: "campus" | "upcoming") => void;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const slides: HeroDriveSlide[] = useMemo(() => {
    if (activeTab === "campus") {
      const livePrograms = programs.filter(
        (prog) => prog.status === "live" || prog.status === "open",
      );
      if (livePrograms.length > 0) {
        return livePrograms
          .map((prog) => slideFromCampusProgram(prog))
          .filter((slide) => slide.title.length > 0);
      }
    }

    if (activeTab === "upcoming") {
      const liveEvents = featuredEvents.filter(
        (evt) => evt.status === "live" || evt.status === "open",
      );
      return liveEvents
        .map((evt) => slideFromUpcomingEvent(evt))
        .filter((slide) => slide.title.length > 0);
    }

    return [];
  }, [activeTab, programs, featuredEvents]);

  // Reset index on tab or slides count change
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeTab, slides.length]);

  // Auto slide timer (5s per slide) when 2+ slides and not paused/hovered
  useEffect(() => {
    if (isHovered || isPaused || slides.length <= 1) return;
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, AUTO_SLIDE_MS);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [slides.length, isHovered, isPaused, currentIndex]);

  if (slides.length === 0) {
    return null;
  }

  const currentSlide = slides[currentIndex % slides.length];
  const isCampusType = currentSlide.type === "campus";
  const hasGivenImage = Boolean(currentSlide.img && currentSlide.img.trim().length > 0);
  const stripTiles = currentSlide.tiles;
  const heroLayoutClass = [
    "hero",
    hasGivenImage ? "has-poster" : "no-image",
  ].join(" ");

  const goPrev = () => {
    if (slides.length <= 1) return;
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goNext = () => {
    if (slides.length <= 1) return;
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const handleHeroKeyDown = (e: React.KeyboardEvent) => {
    if (slides.length <= 1) return;
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      goPrev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      goNext();
    }
  };

  return (
    <div className="w-full">
      <div
        className="relative w-full px-4 sm:px-5"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onKeyDown={handleHeroKeyDown}
        tabIndex={slides.length > 1 ? 0 : undefined}
        aria-roledescription={slides.length > 1 ? "carousel" : undefined}
      >
      {/* Main Hero Card (Light Theme - Fixed Dimensions) */}
      <section
        className={`${heroLayoutClass} relative overflow-hidden rounded-[24px] border border-[#e1e8f4] text-[#0f1b33] transition-all duration-500`}
        style={{
          background: `
            radial-gradient(520px 340px at 88% 20%, rgba(0,162,229,.16) 0, transparent 70%),
            radial-gradient(420px 280px at 0% 110%, rgba(245,128,32,.10) 0, transparent 70%),
            radial-gradient(360px 240px at 100% 110%, rgba(9,136,85,.10) 0, transparent 70%),
            linear-gradient(135deg, #ffffff 0%, #f3f7fd 100%)
          `,
        }}
      >
        {/* Dot pattern overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(27,82,164,0.10) 1px, transparent 1.5px)",
            backgroundSize: "22px 22px",
            maskImage: "linear-gradient(90deg, transparent 20%, #000 100%)",
            WebkitMaskImage: "linear-gradient(90deg, transparent 20%, #000 100%)",
          }}
          aria-hidden
        />

        {/* Decorative Ring */}
        <div
          className="pointer-events-none absolute -top-12 right-[4%] h-[380px] w-[380px] rounded-full opacity-50 max-lg:hidden"
          style={{
            border: "2px solid rgba(0,162,229,0.22)",
            boxShadow: "0 0 0 38px rgba(0,162,229,0.05), 0 0 0 80px rgba(0,162,229,0.03)",
          }}
          aria-hidden
        />

        <div className="hero-inner relative z-10">
        <div className="hero-body flex w-full min-h-0 flex-col">
          <div className="hero-text relative z-20 flex min-w-0 flex-1 flex-col justify-start">
            {/* Live Indicator Pill Row */}
            <div className="pills flex flex-wrap items-center gap-2.5">
              {currentSlide.statusPill ? (
                <div className="live inline-flex items-center gap-2 rounded-full border border-[#d6e2f5] bg-white/80 px-3 py-1 text-xs font-semibold text-[#1b52a4] shadow-sm backdrop-blur-md">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ff5a4d] opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#ff5a4d]" />
                  </span>
                  <span>{currentSlide.statusPill}</span>
                </div>
              ) : null}
              {currentSlide.co ? (
                <span className="live alt rounded-full border border-[#d6e2f5] bg-[#eef3fb] px-3 py-1 text-xs font-bold text-[#1b52a4]">
                  {currentSlide.co}
                </span>
              ) : null}
            </div>

            <h1 className="hero-title mt-[18px] line-clamp-2 text-[clamp(1.375rem,3vw,2.5rem)] font-extrabold leading-[1.15] tracking-tight text-[#0f1b33]">
              {currentSlide.title}
            </h1>

            {currentSlide.tagLabels.length > 0 ? (
              <ul
                className="tags-row m-0 mt-3 flex list-none flex-wrap items-center gap-2 p-0"
                aria-label="Program tags"
              >
                {currentSlide.tagLabels.slice(0, HERO_TAG_LIMIT).map((tag, idx) => {
                  const label = formatHeroTagLabel(tag);
                  if (!label) return null;
                  const isCategory = idx === 0;
                  return (
                    <li key={`${tag}-${idx}`}>
                      <span
                        title={heroTagHint(tag, idx)}
                        className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-semibold tracking-wide sm:text-xs ${
                          isCategory
                            ? "border-[#c9d8f0] bg-[#eef3fb] text-[#1b52a4]"
                            : "border-[#e2e8f0] bg-white text-[#64748b]"
                        }`}
                      >
                        {isCategory ? (
                          <Tag className="h-3 w-3 shrink-0 opacity-80" aria-hidden />
                        ) : (
                          <Users className="h-3 w-3 shrink-0 opacity-70" aria-hidden />
                        )}
                        {label}
                      </span>
                    </li>
                  );
                })}
              </ul>
            ) : null}

            <div className="cta flex w-full flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
              {currentSlide.showApply ? (
                currentSlide.applyHref.startsWith("http") ? (
                  <a
                    href={currentSlide.applyHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 w-full min-w-0 items-center justify-center gap-2 rounded-xl bg-[#1b52a4] px-5 text-sm font-bold text-white shadow-[0_10px_22px_-8px_rgba(27,82,164,0.6)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#16438a] hover:shadow-[0_14px_26px_-8px_rgba(27,82,164,0.7)] sm:w-auto sm:min-w-[145px]"
                  >
                    {isCampusType ? "Apply now" : "Register now"}{" "}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                ) : (
                  <Link
                    href={currentSlide.applyHref}
                    className="inline-flex h-11 w-full min-w-0 items-center justify-center gap-2 rounded-xl bg-[#1b52a4] px-5 text-sm font-bold text-white shadow-[0_10px_22px_-8px_rgba(27,82,164,0.6)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#16438a] hover:shadow-[0_14px_26px_-8px_rgba(27,82,164,0.7)] sm:w-auto sm:min-w-[145px]"
                  >
                    {isCampusType ? "Apply now" : "Register now"}{" "}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                )
              ) : null}

              {currentSlide.detailHref.startsWith("http") ? (
                <a
                  href={currentSlide.detailHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 w-full min-w-0 items-center justify-center rounded-xl border border-[#c9d8f0] bg-white px-5 text-sm font-bold text-[#1b52a4] shadow-sm transition hover:border-[#1b52a4] hover:bg-[#eef3fb] sm:w-auto"
                >
                  View details
                </a>
              ) : (
                <Link
                  href={currentSlide.detailHref}
                  className="inline-flex h-11 w-full min-w-0 items-center justify-center rounded-xl border border-[#c9d8f0] bg-white px-5 text-sm font-bold text-[#1b52a4] shadow-sm transition hover:border-[#1b52a4] hover:bg-[#eef3fb] sm:w-auto"
                >
                  View details
                </Link>
              )}
            </div>
          </div>

          {/* Right Poster Frame (Interactive Zoom Modal + Registered Bubble) */}
          {hasGivenImage && currentSlide.img ? (
            <div className="hero-poster relative z-10 shrink-0">
            <PosterFrame
              src={currentSlide.img}
              alt={currentSlide.title}
              onOpenChange={(isOpen) => setIsPaused(isOpen)}
            >
              {currentSlide.posterStat ? (
                <div className="fc c1">
                  <span className="pi">
                    <svg viewBox="0 0 24 24">
                      <circle cx="9" cy="8" r="3.2" />
                      <path d="M3 20c0-3.4 2.7-6 6-6s6 2.6 6 6" />
                      <circle cx="17" cy="9" r="2.4" />
                      <path d="M16 14.2c3 0 5 2 5 5" />
                    </svg>
                  </span>
                  <div className="leading-tight">
                    <span>{currentSlide.posterStat.primary}</span>
                    {currentSlide.posterStat.secondary ? (
                      <small>{currentSlide.posterStat.secondary}</small>
                    ) : null}
                  </div>
                </div>
              ) : null}
            </PosterFrame>
            </div>
          ) : null}
        </div>

        {stripTiles.length > 0 ? (
          <div className="info-strip grid overflow-hidden rounded-2xl border border-[#e1e8f4] bg-white shadow-[0_10px_26px_-16px_rgba(27,82,164,0.35)]">
            {stripTiles.map((tile: HeroTileInfo, idx: number) => {
              const Icon = TILE_ICONS[idx % TILE_ICONS.length];
              return (
                <div
                  key={`${tile.label}-${idx}`}
                  className="info-strip-cell flex items-start gap-3 p-3 sm:items-center sm:p-3.5"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[rgba(0,162,229,0.12)] text-[#0086bd]">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <small className="block text-[10.5px] font-medium text-[#6b7a93]">
                      {tile.label}
                    </small>
                    <strong className="info-strip-value block text-xs font-bold leading-snug text-[#0f1b33] sm:text-[13px]">
                      {tile.value}
                    </strong>
                  </div>
                </div>
              );
            })}
          </div>
        ) : null}
        </div>
      </section>

        {slides.length > 1 && (
          <>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              aria-label="Previous slide"
              className="absolute left-3 top-1/2 z-30 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-[#d6e2f5] bg-white/95 text-[#1b52a4] shadow-md backdrop-blur-sm transition hover:bg-white hover:shadow-lg min-[861px]:flex sm:h-10 sm:w-10"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              aria-label="Next slide"
              className="absolute right-3 top-1/2 z-30 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-[#d6e2f5] bg-white/95 text-[#1b52a4] shadow-md backdrop-blur-sm transition hover:bg-white hover:shadow-lg min-[861px]:flex sm:h-10 sm:w-10"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}
      </div>

      {/* Navigation Indicator Dots (Strictly shown only when 2 or more slides exist) */}
      {slides.length > 1 && (
        <div className="mt-3.5 flex items-center justify-center gap-2.5 px-2 min-[861px]:gap-2">
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous slide"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#d6e2f5] bg-white text-[#1b52a4] shadow-sm min-[861px]:hidden"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          {slides.map((_, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={`dot-${idx}`}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`relative h-2 rounded-full transition-all duration-300 ${
                  isActive
                    ? "w-7 bg-[#1b52a4] shadow-sm"
                    : "w-2 bg-[#d6e2f5] hover:bg-[#9aa6bf]"
                }`}
              >
                {isActive && !isHovered && !isPaused && (
                  <span
                    key={`progress-${idx}`}
                    className="absolute inset-0 rounded-full bg-[#1b52a4]/40"
                    style={{
                      animation: `fillProgress ${AUTO_SLIDE_MS}ms linear forwards`,
                      transformOrigin: "left",
                    }}
                  />
                )}
              </button>
            );
          })}
          <button
            type="button"
            onClick={goNext}
            aria-label="Next slide"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#d6e2f5] bg-white text-[#1b52a4] shadow-sm min-[861px]:hidden"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}

      {/* Embedded CSS for Exact Uniform Dimensions, Positioning & Zoom */}
      <style jsx>{`
        /* ---------- Size + layout ---------- */
        .hero {
          --fw: min(400px, 38vw);
          --hero-inset-x: 20px;
          --hero-inset-y: 20px;
          width: 100%;
          min-width: 0;
          position: relative;
          border-radius: 24px;
        }

        @media (min-width: 640px) {
          .hero {
            --hero-inset-x: 24px;
            --hero-inset-y: 24px;
          }
        }

        @media (min-width: 1024px) {
          .hero {
            --hero-inset-x: 40px;
            --hero-inset-y: 28px;
            --fw: min(440px, 36vw);
          }
        }

        .hero .hero-inner {
          display: flex;
          flex-direction: column;
          gap: 20px;
          padding: var(--hero-inset-y) var(--hero-inset-x);
          box-sizing: border-box;
        }

        .hero .hero-body {
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding: 0;
          box-sizing: border-box;
        }

        .hero.no-image .hero-body {
          max-width: 760px;
        }

        .hero.has-poster .hero-body {
          display: grid;
          grid-template-columns: minmax(0, 1fr) minmax(200px, var(--fw));
          align-items: start;
          column-gap: 28px;
          row-gap: 16px;
        }

        .hero .info-strip {
          width: 100%;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1px;
          padding: 1px;
          background: #e9eef7;
        }

        @media (min-width: 1024px) {
          .hero .info-strip {
            grid-template-columns: repeat(4, minmax(0, 1fr));
          }
        }

        .hero .info-strip-cell {
          background: #ffffff;
        }

        .hero .info-strip-value {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          overflow-wrap: anywhere;
        }

        .hero .hero-text {
          min-width: 0;
          width: 100%;
        }

        .hero .hero-poster {
          width: 100%;
          max-width: var(--fw);
          justify-self: end;
        }

        .hero .tags-row {
          margin-top: 14px;
        }

        .hero .cta {
          margin-top: 24px;
        }

        .hero :global(.frame) {
          position: relative;
          width: 100%;
          height: auto;
          aspect-ratio: 16/9;
          overflow: hidden;
          cursor: zoom-in;
          transition: transform 0.3s ease;
          border-radius: 20px;
          border: 1px solid #e1e8f4;
          background: #ffffff;
          box-shadow: 0 22px 44px -18px rgba(27, 82, 164, 0.35);
        }

        .hero :global(.frame:hover) {
          transform: translateY(-4px);
        }

        .hero :global(.frame .art) {
          width: 100%;
          height: 100%;
          padding: 0;
          background: transparent;
          object-fit: cover;
          object-position: center;
          border-radius: 0;
          display: block;
          transition: box-shadow 0.3s;
        }

        .hero :global(.frame:hover .art) {
          box-shadow: 0 30px 56px -18px rgba(27, 82, 164, 0.5);
        }

        /* ---------- Enlarge button + hint ---------- */
        .hero :global(.zoom-btn) {
          position: absolute;
          top: 12px;
          right: 12px;
          z-index: 3;
          width: 38px;
          height: 38px;
          border-radius: 11px;
          border: 1px solid rgba(255, 255, 255, 0.8);
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(8px);
          display: grid;
          place-items: center;
          cursor: pointer;
          box-shadow: 0 6px 16px -6px rgba(15, 27, 51, 0.45);
          opacity: 0;
          transform: translateY(-4px);
          transition: opacity 0.2s, transform 0.2s;
        }

        .hero :global(.zoom-btn svg) {
          width: 18px;
          height: 18px;
          stroke: #1b52a4;
          fill: none;
          stroke-width: 2.2;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .hero :global(.frame:hover .zoom-btn),
        .hero :global(.zoom-btn:focus-visible) {
          opacity: 1;
          transform: none;
        }

        .hero :global(.zoom-hint) {
          position: absolute;
          left: 50%;
          bottom: 14px;
          z-index: 3;
          transform: translate(-50%, 6px);
          background: rgba(15, 27, 51, 0.8);
          color: #fff;
          font-weight: 600;
          font-size: 12.5px;
          line-height: 1;
          padding: 8px 14px;
          border-radius: 999px;
          opacity: 0;
          pointer-events: none;
          white-space: nowrap;
          transition: opacity 0.2s, transform 0.2s;
        }

        .hero :global(.frame:hover .zoom-hint) {
          opacity: 1;
          transform: translate(-50%, 0);
        }

        /* touch screens: no hover, so the button is always visible */
        @media (hover: none) {
          .hero :global(.zoom-btn) {
            opacity: 1;
            transform: none;
          }
          .hero :global(.zoom-hint) {
            display: none;
          }
        }

        /* ---------- Registered bubble styling ---------- */
        .hero :global(.fc.c1) {
          position: absolute;
          left: auto;
          right: -14px;
          bottom: -30px;
          z-index: 20;
          display: flex;
          align-items: center;
          gap: 10px;
          border-radius: 14px;
          border: 1px solid #e8edf6;
          background: #ffffff;
          padding: 8px 14px;
          font-size: 11.5px;
          font-weight: 700;
          color: #101a33;
          box-shadow: 0 12px 26px -10px rgba(15, 27, 51, 0.25);
        }

        .hero :global(.pi) {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: #e6efff;
          display: grid;
          place-items: center;
          flex-shrink: 0;
        }

        .hero :global(.pi svg) {
          width: 17px;
          height: 17px;
          stroke: #1d4ea8;
          fill: none;
          stroke-width: 2;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .hero :global(.fc.c1 small) {
          display: block;
          font-size: 10px;
          font-weight: 500;
          color: #5a6580;
        }

        @media (max-width: 1023px) {
          .hero.has-poster .hero-body {
            grid-template-columns: 1fr;
          }
          .hero .hero-poster {
            max-width: min(100%, 360px);
            margin-inline: auto;
            order: 2;
          }
          .hero .hero-text {
            order: 1;
          }
        }

        @media (max-width: 860px) {
          .hero {
            overflow: visible;
          }
          .hero .pills {
            gap: 8px;
          }
          .hero .tags-row {
            margin-top: 12px;
            gap: 8px;
          }
          .hero .cta {
            margin-top: 16px;
          }
          .hero :global(.fc.c1) {
            left: 50%;
            right: auto;
            transform: translateX(-50%);
            bottom: 8px;
            max-width: calc(100% - 20px);
            white-space: nowrap;
          }
        }

        @keyframes fillProgress {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
      `}</style>

    </div>
  );
}


