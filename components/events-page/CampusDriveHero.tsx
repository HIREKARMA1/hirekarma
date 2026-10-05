"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Banknote, Calendar, Check, GraduationCap, MapPin, Sparkles, Star } from "lucide-react";

import { PosterFrame } from "@/components/events-page/PosterFrame";
import type { CampusDriveItem, EventsPageItem } from "@/types/events-page";

export interface HeroTileInfo {
  label: string;
  value: string;
}

export interface HeroDriveSlide {
  id: string;
  type: "campus" | "upcoming";
  co: string;
  title: string;
  lede: string;
  tile1: HeroTileInfo; // Date
  tile2: HeroTileInfo; // Location / Venue
  tile3: HeroTileInfo; // Package / Format
  tile4: HeroTileInfo; // Eligibility / Audience
  c: string; // company accent color
  glow: string; // background glow color
  img?: string; // Strictly only if provided by the drive or event data
  registeredCount: number;
  badgeLabel?: string;
  badgeSub?: string;
  detailHref: string;
  applyHref: string;
}

function cleanTitle(raw: string): string {
  if (!raw) return "Campus Placement Drive";
  return raw
    .replace(/^\[SEED\]\s*/i, "")
    .replace(/\s*—\s*\d+%\+?\s*Match.*$/i, "")
    .replace(/\s*-\s*\d+%\+?\s*Match.*$/i, "")
    .replace(/\s*\(SEED\)\s*/i, "")
    .trim();
}

function formatSalary(drive: CampusDriveItem): string {
  if (drive.ctc_after_probation) return drive.ctc_after_probation;
  if (drive.ctc_with_probation) return drive.ctc_with_probation;
  if (!drive.salary_min) return "Best in Industry";

  const cleanNum = (val: string) => {
    const cleaned = val.replace(/[^\d.]/g, "");
    const num = parseFloat(cleaned);
    if (isNaN(num)) return val;
    // If it's 900000 -> 9 LPA
    if (num >= 100000) {
      const inLakhs = num / 100000;
      return `${inLakhs % 1 === 0 ? inLakhs.toFixed(0) : inLakhs.toFixed(1)}`;
    }
    return `${num}`;
  };

  const min = cleanNum(drive.salary_min);
  const max = drive.salary_max ? cleanNum(drive.salary_max) : null;
  const currency = "₹";

  if (max) {
    return `${currency}${min} - ${max} LPA`;
  }
  return `${currency}${min} LPA`;
}

function formatEventDate(iso: string) {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;
  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function isValidImageUrl(url?: string): boolean {
  if (!url) return false;
  const trimmed = url.trim();
  return (
    trimmed.length > 5 &&
    (trimmed.startsWith("http://") ||
      trimmed.startsWith("https://") ||
      trimmed.startsWith("/"))
  );
}

export function CampusDriveHero({
  drives = [],
  programs = [],
  featuredEvents = [],
  activeTab = "campus",
}: {
  drives?: CampusDriveItem[];
  programs?: EventsPageItem[];
  featuredEvents?: EventsPageItem[];
  activeTab?: "campus" | "upcoming";
  onTabChange?: (tab: "campus" | "upcoming") => void;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [appliedSet, setAppliedSet] = useState<Set<string>>(new Set());
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Build slides strictly from live/open items and only include given images
  const slides: HeroDriveSlide[] = useMemo(() => {
    if (activeTab === "campus") {
      // Strictly show active & open campus drive programs
      const livePrograms = programs.filter(
        (prog) => prog.status === "live" || prog.status === "open"
      );

      if (livePrograms.length > 0) {
        return livePrograms.map((prog, idx) => {
          const bannerImg = isValidImageUrl(prog.banner_url) ? prog.banner_url.trim() : undefined;
          const cleanedRoleTitle = cleanTitle(prog.title);
          const company = prog.organizer_name || "Campus Drive";
          const dateVal = prog.event_start_date ? formatEventDate(prog.event_start_date) : "Upcoming Drive";
          const locationVal = prog.venue || (prog.mode === "online" ? "Online Live Drive" : prog.mode === "hybrid" ? "Hybrid / Campus" : "Main Campus");
          const formatVal = prog.mode === "online" ? "Virtual Online Drive" : "On-Campus Recruitment";

          return {
            id: prog.id || `prog-${idx}`,
            type: "campus",
            co: company,
            title: cleanedRoleTitle,
            lede:
              prog.subtitle ||
              prog.short_description ||
              `Exclusive campus placement drive by ${company}. Register now to secure your test and interview slot.`,
            tile1: { label: "Drive Date", value: dateVal },
            tile2: { label: "Venue / Location", value: locationVal },
            tile3: { label: "Drive Format", value: formatVal },
            tile4: { label: "Eligibility", value: "2025 & 2026 Batch Graduates" },
            c: idx === 0 ? "#a4123f" : idx === 1 ? "#0a6cc4" : idx === 2 ? "#5b2a86" : "#0d9488",
            glow: idx === 0 ? "#4f8dff" : idx === 1 ? "#35c2d6" : idx === 2 ? "#9b7bff" : "#34d399",
            img: bannerImg,
            registeredCount: 85 + idx * 24,
            badgeLabel: "Top recruiter",
            badgeSub: "Hiring this month",
            detailHref: prog.slug
              ? `/events/campus-drives/program/${encodeURIComponent(prog.slug)}`
              : (prog.visit_href || "/events/campus-drives"),
            applyHref: prog.visit_href || "https://disha.hirekarma.in/jobs?category=campus_drive",
          };
        });
      }

      // Fallback to active live campus job drives if no programs exist
      if (drives.length > 0) {
        return drives.map((drive, idx) => {
          const salaryText = formatSalary(drive);
          const cleanedRoleTitle = cleanTitle(drive.title || `${drive.company_name} Campus Placement Drive`);
          const company = drive.company_name || "Top Recruiter";
          const givenImage = isValidImageUrl(drive.company_logo) ? drive.company_logo.trim() : undefined;
          const dateVal = drive.campus_drive_date ? formatEventDate(drive.campus_drive_date) : "Oct 2026";
          const locationVal = drive.location || (drive.mode_of_work === "remote" ? "Online" : "Main Campus");
          const eligVal = drive.job_type ? `${drive.job_type} · ${drive.mode_of_work || "Full-time"}` : "2025 / 2026 Batch";

          return {
            id: drive.id || `drive-${idx}`,
            type: "campus",
            co: company,
            title: cleanedRoleTitle,
            lede: `Exclusive campus recruitment drive for ${company}. Register now to secure your test and interview slot.`,
            tile1: { label: "Drive Date", value: dateVal },
            tile2: { label: "Location", value: locationVal },
            tile3: { label: "Package", value: salaryText },
            tile4: { label: "Eligibility", value: eligVal },
            c: idx === 0 ? "#a4123f" : idx === 1 ? "#0a6cc4" : "#5b2a86",
            glow: idx === 0 ? "#4f8dff" : idx === 1 ? "#35c2d6" : "#9b7bff",
            img: givenImage,
            registeredCount: 85 + idx * 24,
            badgeLabel: "Top recruiter",
            badgeSub: "Hiring this month",
            detailHref: drive.detail_href || "/events/campus-drives",
            applyHref: drive.visit_href || "https://disha.hirekarma.in/jobs?category=campus_drive",
          };
        });
      }
    }

    if (activeTab === "upcoming") {
      // Strictly only open and live upcoming events
      const liveEvents = featuredEvents.filter(
        (evt) => evt.status === "live" || evt.status === "open"
      );

      if (liveEvents.length > 0) {
        return liveEvents.map((evt, idx) => {
          const cleanedEventTitle = cleanTitle(evt.title);
          // Strictly only use given banner image from event data
          const givenImage = isValidImageUrl(evt.banner_url) ? evt.banner_url.trim() : undefined;
          const dateVal = evt.event_start_date ? formatEventDate(evt.event_start_date) : "Upcoming";
          const venueVal = evt.venue || (evt.mode === "online" ? "Online Live Session" : "Main Campus Auditorium");
          const formatVal = evt.mode === "online" ? "Interactive Live Webinar" : "In-Person Workshop";

          return {
            id: evt.id || `event-${idx}`,
            type: "upcoming",
            co: evt.organizer_name || "HireKarma Initiative",
            title: cleanedEventTitle,
            lede: evt.subtitle || "Interactive live session with industry mentors and career leaders. Open to all registered students.",
            tile1: { label: "Event Date", value: dateVal },
            tile2: { label: "Venue", value: venueVal },
            tile3: { label: "Session Format", value: formatVal },
            tile4: { label: "Target Audience", value: "Open to All Students" },
            c: idx === 0 ? "#0a6cc4" : idx === 1 ? "#a4123f" : "#1d52c4",
            glow: idx === 0 ? "#35c2d6" : idx === 1 ? "#4f8dff" : "#818cf8",
            img: givenImage,
            registeredCount: 140 + idx * 35,
            badgeLabel: "Featured Event",
            badgeSub: "Interactive Session",
            detailHref: `/events/${encodeURIComponent(evt.slug)}`,
            applyHref: evt.visit_href || `/events/${encodeURIComponent(evt.slug)}`,
          };
        });
      }
    }

    // Return empty array if no live/open drives or events exist
    return [];
  }, [activeTab, drives, programs, featuredEvents]);

  // Reset index on tab or slides count change
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeTab, slides.length]);

  // Auto slide timer (6s per slide) strictly when there are 2 or more slides and not paused/hovered
  useEffect(() => {
    if (isHovered || isPaused || slides.length <= 1) return;
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [slides.length, isHovered, isPaused]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  // If no open/live/upcoming items exist, do not render any banner
  if (slides.length === 0) {
    return null;
  }

  const currentSlide = slides[currentIndex % slides.length];
  const isApplied = appliedSet.has(currentSlide.id);
  const isCampusType = currentSlide.type === "campus";
  const hasGivenImage = Boolean(currentSlide.img && currentSlide.img.trim().length > 0);

  const handleApplyClick = () => {
    setAppliedSet((prev) => new Set(prev).add(currentSlide.id));
    showToast(`Redirecting to registration for ${currentSlide.co}...`);
  };

  return (
    <div className="w-full">
      {/* Main Hero Card (Light Theme - Fixed Dimensions) */}
      <section
        className={`hero relative overflow-hidden rounded-[24px] border border-[#e1e8f4] text-[#0f1b33] transition-all duration-500 ${
          !hasGivenImage ? "no-image" : ""
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          background: `
            radial-gradient(520px 340px at 88% 20%, rgba(0,162,229,.16) 0, transparent 70%),
            radial-gradient(420px 280px at 0% 110%, rgba(245,128,32,.10) 0, transparent 70%),
            radial-gradient(360px 240px at 100% 110%, rgba(9,136,85,.10) 0, transparent 70%),
            linear-gradient(135deg, #ffffff 0%, #f3f7fd 100%)
          `,
          boxShadow: "0 24px 50px -28px rgba(27,82,164,.35), 0 2px 6px rgba(15,27,51,.04)",
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

        {/* Main Body Grid / Row */}
        <div className="hero-body relative z-10 flex h-full w-full flex-col lg:flex-row lg:items-start lg:justify-between">
          {/* Left Text Column: fixed width, pinned tags & buttons */}
          <div className="content">
            {/* Live Indicator Pill Row */}
            <div className="pills flex flex-wrap items-center gap-2.5">
              <div className="live inline-flex items-center gap-2 rounded-full border border-[#d6e2f5] bg-white/80 px-3 py-1 text-xs font-semibold text-[#1b52a4] shadow-sm backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ff5a4d] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#ff5a4d]" />
                </span>
                <span>{isCampusType ? "Live now · closes soon" : "Featured Event · Open"}</span>
              </div>
              <span className="live alt rounded-full border border-[#d6e2f5] bg-[#eef3fb] px-3 py-1 text-xs font-bold text-[#1b52a4]">
                {currentSlide.co}
              </span>
            </div>

            {/* Clamped Title (Max 2 lines, no descender cut-off) */}
            <h1>{currentSlide.title}</h1>

            {/* Feature Highlights Row */}
            <div className="tags-row flex flex-wrap items-center gap-2 text-xs font-medium">
              {isCampusType ? (
                <>
                  <span className="inline-flex items-center gap-1.5 rounded-lg border border-[#dbe4f2] bg-[#f1f5fb] px-2.5 py-1 text-[#24344f]">
                    <span className="text-amber-500">⚡</span> Fast-Track Hiring
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-lg border border-[#dbe4f2] bg-[#f1f5fb] px-2.5 py-1 text-[#24344f]">
                    <span className="text-emerald-600">🎯</span> Direct Interview Slot
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-lg border border-[#dbe4f2] bg-[#f1f5fb] px-2.5 py-1 text-[#24344f]">
                    <span className="text-sky-600">🎓</span> 2026 Batch Eligible
                  </span>
                </>
              ) : (
                <>
                  <span className="inline-flex items-center gap-1.5 rounded-lg border border-[#dbe4f2] bg-[#f1f5fb] px-2.5 py-1 text-[#24344f]">
                    <span className="text-amber-500">🎙️</span> Live Q&A Session
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-lg border border-[#dbe4f2] bg-[#f1f5fb] px-2.5 py-1 text-[#24344f]">
                    <span className="text-emerald-600">🏆</span> Certificate of Attendance
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-lg border border-[#dbe4f2] bg-[#f1f5fb] px-2.5 py-1 text-[#24344f]">
                    <span className="text-sky-600">💡</span> Career Mentorship
                  </span>
                </>
              )}
            </div>

            {/* CTA Buttons Row (Pinned below tags at margin-top: 18px) */}
            <div className="cta flex flex-wrap items-center gap-3">
              <a
                href={currentSlide.applyHref}
                target={currentSlide.applyHref.startsWith("http") ? "_blank" : undefined}
                rel={currentSlide.applyHref.startsWith("http") ? "noopener noreferrer" : undefined}
                onClick={handleApplyClick}
                className={`inline-flex h-11 min-w-[145px] items-center justify-center gap-2 rounded-xl px-5 text-sm font-bold transition-all duration-200 hover:-translate-y-0.5 ${
                  isApplied
                    ? "bg-[#098855] text-white shadow-[0_10px_22px_-8px_rgba(9,136,85,0.6)]"
                    : "bg-[#1b52a4] text-white shadow-[0_10px_22px_-8px_rgba(27,82,164,0.6)] hover:bg-[#16438a] hover:shadow-[0_14px_26px_-8px_rgba(27,82,164,0.7)]"
                }`}
              >
                {isApplied ? (
                  <>
                    <Check className="h-4 w-4" /> Registered ✓
                  </>
                ) : (
                  <>
                    {isCampusType ? "Apply now" : "Register now"}{" "}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </a>

              <Link
                href={currentSlide.detailHref}
                className="inline-flex h-11 items-center justify-center rounded-xl border border-[#c9d8f0] bg-white px-5 text-sm font-bold text-[#1b52a4] shadow-sm transition hover:border-[#1b52a4] hover:bg-[#eef3fb]"
              >
                View details
              </Link>
            </div>
          </div>

          {/* Right Poster Frame (Interactive Zoom Modal + Registered Bubble) */}
          {hasGivenImage && currentSlide.img && (
            <PosterFrame
              src={currentSlide.img}
              alt={currentSlide.title}
              onOpenChange={(isOpen) => setIsPaused(isOpen)}
            >
              {/* Single Registered Bubble (Lowered to bottom-right corner) */}
              <div className="fc c1">
                <span className="pi">
                  <svg
                    viewBox="0 0 24 24"
                  >
                    <circle cx="9" cy="8" r="3.2" />
                    <path d="M3 20c0-3.4 2.7-6 6-6s6 2.6 6 6" />
                    <circle cx="17" cy="9" r="2.4" />
                    <path d="M16 14.2c3 0 5 2 5 5" />
                  </svg>
                </span>
                <div className="leading-tight">
                  <span>{currentSlide.registeredCount}+ registered</span>
                  <small>
                    Join them today
                  </small>
                </div>
              </div>
            </PosterFrame>
          )}
        </div>

        {/* Clean Light Info Strip (Pinned at bottom on desktop, responsive) */}
        <div className="info-strip absolute bottom-4 left-6 right-6 z-20 grid grid-cols-2 overflow-hidden rounded-2xl border border-[#e1e8f4] bg-white shadow-[0_10px_26px_-16px_rgba(27,82,164,0.35)] sm:grid-cols-4 lg:bottom-6 lg:left-10 lg:right-10">
          {/* Tile 1: Date */}
          <div className="flex items-center gap-3 border-b border-r border-[#e9eef7] p-3 sm:border-b-0 sm:p-3.5">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[rgba(0,162,229,0.12)] text-[#0086bd]">
              <Calendar className="h-4 w-4" />
            </div>
            <div className="min-w-0">
              <small className="block text-[10.5px] font-medium text-[#6b7a93]">{currentSlide.tile1.label}</small>
              <strong className="block truncate text-xs font-bold leading-snug text-[#0f1b33] sm:text-[13px]">{currentSlide.tile1.value}</strong>
            </div>
          </div>

          {/* Tile 2: Location / Venue */}
          <div className="flex items-center gap-3 border-b border-[#e9eef7] p-3 sm:border-b-0 sm:border-r sm:p-3.5">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[rgba(245,128,32,0.13)] text-[#d96a0b]">
              <MapPin className="h-4 w-4" />
            </div>
            <div className="min-w-0">
              <small className="block text-[10.5px] font-medium text-[#6b7a93]">{currentSlide.tile2.label}</small>
              <strong className="block truncate text-xs font-bold leading-snug text-[#0f1b33] sm:text-[13px]">{currentSlide.tile2.value}</strong>
            </div>
          </div>

          {/* Tile 3: Format / Package */}
          <div className="flex items-center gap-3 border-r border-[#e9eef7] p-3 sm:p-3.5">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[rgba(254,196,13,0.20)] text-[#a87800]">
              <Banknote className="h-4 w-4" />
            </div>
            <div className="min-w-0">
              <small className="block text-[10.5px] font-medium text-[#6b7a93]">{currentSlide.tile3.label}</small>
              <strong className="block truncate text-xs font-bold leading-snug text-[#0f1b33] sm:text-[13px]">{currentSlide.tile3.value}</strong>
            </div>
          </div>

          {/* Tile 4: Eligibility / Audience */}
          <div className="flex items-center gap-3 p-3 sm:p-3.5">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[rgba(9,136,85,0.12)] text-[#098855]">
              <GraduationCap className="h-4 w-4" />
            </div>
            <div className="min-w-0">
              <small className="block text-[10.5px] font-medium text-[#6b7a93]">{currentSlide.tile4.label}</small>
              <strong className="block truncate text-xs font-bold leading-snug text-[#0f1b33] sm:text-[13px]">{currentSlide.tile4.value}</strong>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Indicator Dots (Strictly shown only when 2 or more slides exist) */}
      {slides.length > 1 && (
        <div className="mt-3.5 flex items-center justify-center gap-2">
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
                      animation: "fillProgress 6s linear forwards",
                      transformOrigin: "left",
                    }}
                  />
                )}
              </button>
            );
          })}
        </div>
      )}

      {/* Embedded CSS for Exact Uniform Dimensions, Positioning & Zoom */}
      <style jsx>{`
        /* ---------- Size + position ---------- */
        .hero {
          --hero-h: 420px;                 /* was 460 */
          --fw: 480px;                     /* poster width, was 500 */
          height: var(--hero-h);
          width: 100%;
          min-width: 0;
          overflow: hidden;
          position: relative;
          border-radius: 24px;
        }

        /* text block is centred in the space above the info strip, matching the poster */
        .hero .content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 100%;
          width: calc(100% - var(--fw) - 96px);   /* text column adapts to the poster width */
          max-width: none;
          padding: 24px 24px 108px 40px;
          min-width: 0;
          box-sizing: border-box;
        }

        .hero.no-image .content {
          width: 100%;
          max-width: 760px;
        }

        /* the title now has more room */
        .hero h1 {
          height: auto;
          margin: 18px 0 0;
          font-size: clamp(28px, 3vw, 40px);
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          overflow-wrap: anywhere;
          line-height: 1.15;
          padding-bottom: 0.06em;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: #0f1b33;
        }

        .hero .tags-row {
          margin-top: 14px;
        }

        .hero .cta {
          margin-top: 24px;
        }

        /* poster */
        .hero :global(.frame) {
          position: absolute;
          width: var(--fw);
          height: auto;
          aspect-ratio: 16/9;              /* poster keeps its shape on every slide */
          right: 44px;
          /* centre the poster in the space above the info strip */
          top: calc((var(--hero-h) - 108px - var(--fw) * 0.5625) / 2);
          cursor: zoom-in;
          transition: transform 0.3s ease;
          border-radius: 20px;
          border: 1px solid #e1e8f4;
          background: #ffffff;
          box-shadow: 0 22px 44px -18px rgba(27, 82, 164, 0.35);
          z-index: 15;
        }

        .hero :global(.frame:hover) {
          transform: translateY(-4px);
        }

        .hero :global(.frame .art) {
          width: 100%;
          height: 100%;
          padding: 0;
          background: transparent;
          object-fit: contain;
          border-radius: 20px;
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

        /* ---------- Smaller laptops + mobile ---------- */
        @media (max-width: 1280px) {
          .hero {
            --fw: 420px;
          }
        }

        @media (max-width: 1100px) {
          .hero {
            --fw: 360px;
          }
        }

        @media (max-width: 860px) {
          .hero {
            height: auto;
            min-height: 620px;
          }
          .hero .hero-body {
            flex-direction: column;
            height: auto;
          }
          .hero .content {
            width: 100%;
            height: auto;
            justify-content: flex-start;
            padding: 28px 22px 8px;
          }
          .hero .tags-row {
            margin-top: 16px;
          }
          .hero :global(.frame) {
            position: relative;
            left: 22px;
            right: 22px;
            top: 0;
            margin: 16px auto 36px;
            width: min(340px, calc(100% - 44px));
            height: auto;
          }
          .hero :global(.fc.c1) {
            left: auto;
            right: 10px;
            bottom: -22px;
          }
          .hero :global(.info-strip) {
            position: relative;
            left: 0;
            right: 0;
            bottom: 0;
            margin: 16px 22px 24px;
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

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-xl bg-[#101a33] px-5 py-2.5 text-xs font-semibold text-white shadow-2xl transition-all duration-300">
          {toastMessage}
        </div>
      )}
    </div>
  );
}


