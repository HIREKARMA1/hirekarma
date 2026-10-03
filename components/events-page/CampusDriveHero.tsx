"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Banknote, Calendar, Check, GraduationCap, MapPin, Sparkles, Star } from "lucide-react";

import type { CampusDriveItem, EventsPageItem } from "@/types/events-page";

export interface HeroDriveSlide {
  id: string;
  co: string;
  title: string;
  lede: string;
  date: string;
  place: string;
  pkg: string;
  elig: string;
  c: string; // company accent color
  glow: string; // background glow color
  img?: string;
  registeredCount: number;
  badgeLabel?: string;
  badgeSub?: string;
  detailHref: string;
  applyHref: string;
}

const DEFAULT_SLIDES: HeroDriveSlide[] = [
  {
    id: "tech-m",
    co: "Tech Mahindra",
    title: "Tech Mahindra is hiring freshers from campus",
    lede: "Associate Software Engineer role. Register before the deadline to get your online test slot.",
    date: "1 Oct 2026",
    place: "Bhubaneswar",
    pkg: "₹3.6 LPA",
    elig: "B.Tech CSE / IT",
    c: "#a4123f",
    glow: "#4f8dff",
    img: "https://hirekarma.s3.us-east-1.amazonaws.com/hirekarma_ui/about-us/culture/bputojob-min.jpg",
    registeredCount: 102,
    badgeLabel: "Top recruiter",
    badgeSub: "Hiring this month",
    detailHref: "/events/campus-drives",
    applyHref: "https://disha.hirekarma.in/jobs?category=campus_drive",
  },
  {
    id: "infosys",
    co: "Infosys",
    title: "Infosys is hiring freshers in a virtual drive",
    lede: "Systems Engineer role. Attend from home with a laptop and a stable internet connection.",
    date: "8 Oct 2026",
    place: "Online",
    pkg: "₹3.8 LPA",
    elig: "All branches, 60%+",
    c: "#0a6cc4",
    glow: "#35c2d6",
    img: "https://hirekarma.s3.us-east-1.amazonaws.com/hirekarma_ui/about-us/culture/diwali-celibration.jpg",
    registeredCount: 123,
    badgeLabel: "High package",
    badgeSub: "Virtual Drive",
    detailHref: "/events/campus-drives",
    applyHref: "https://disha.hirekarma.in/jobs?category=campus_drive",
  },
  {
    id: "wipro",
    co: "Wipro",
    title: "Wipro is hiring freshers in an off-campus drive",
    lede: "Project Engineer role. Openings are limited, so apply early to get shortlisted for the test.",
    date: "15 Oct 2026",
    place: "Bengaluru",
    pkg: "₹4.0 LPA",
    elig: "B.Tech, 2026 batch",
    c: "#5b2a86",
    glow: "#9b7bff",
    img: "https://hirekarma.s3.us-east-1.amazonaws.com/hirekarma_ui/about-us/culture/potloak.jpg",
    registeredCount: 88,
    badgeLabel: "National drive",
    badgeSub: "Fast track selection",
    detailHref: "/events/campus-drives",
    applyHref: "https://disha.hirekarma.in/jobs?category=campus_drive",
  },
];

function formatEventDate(iso: string) {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;
  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function CampusDriveHero({
  drives = [],
  featuredEvents = [],
  activeTab,
  onTabChange,
}: {
  drives?: CampusDriveItem[];
  featuredEvents?: EventsPageItem[];
  activeTab: "campus" | "upcoming";
  onTabChange: (tab: "campus" | "upcoming") => void;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [appliedSet, setAppliedSet] = useState<Set<string>>(new Set());
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Build slides from incoming drives/events or fallback
  const slides: HeroDriveSlide[] = useMemo(() => {
    if (activeTab === "campus" && drives.length > 0) {
      return drives.slice(0, 5).map((drive, idx) => {
        const fall = DEFAULT_SLIDES[idx % DEFAULT_SLIDES.length];
        const salaryText =
          drive.ctc_after_probation ||
          (drive.salary_min
            ? `${drive.salary_currency || "₹"}${drive.salary_min}${drive.salary_max ? ` - ${drive.salary_max}` : ""} LPA`
            : fall.pkg);

        return {
          id: drive.id || `drive-${idx}`,
          co: drive.company_name || "Campus Partner",
          title: drive.title || `${drive.company_name} Campus Placement Drive`,
          lede:
            drive.description ||
            `${drive.company_name} is conducting a campus drive for eligible graduates. Apply to secure your test slot.`,
          date: drive.campus_drive_date ? formatEventDate(drive.campus_drive_date) : fall.date,
          place: drive.location || (drive.mode_of_work === "remote" ? "Online" : "Bhubaneswar"),
          pkg: salaryText,
          elig: drive.job_type ? `${drive.job_type} · ${drive.mode_of_work || "Full-time"}` : fall.elig,
          c: idx === 0 ? "#a4123f" : idx === 1 ? "#0a6cc4" : "#5b2a86",
          glow: idx === 0 ? "#4f8dff" : idx === 1 ? "#35c2d6" : "#9b7bff",
          img: drive.company_logo || fall.img,
          registeredCount: 85 + idx * 24,
          badgeLabel: "Top recruiter",
          badgeSub: "Hiring this month",
          detailHref: drive.detail_href || "/events/campus-drives",
          applyHref: drive.visit_href || "https://disha.hirekarma.in/jobs?category=campus_drive",
        };
      });
    }

    if (activeTab === "upcoming" && featuredEvents.length > 0) {
      return featuredEvents.slice(0, 5).map((evt, idx) => {
        const fall = DEFAULT_SLIDES[idx % DEFAULT_SLIDES.length];
        return {
          id: evt.id || `event-${idx}`,
          co: evt.organizer_name || "HireKarma Initiative",
          title: evt.title,
          lede:
            evt.short_description ||
            "Join this interactive career preparation session with industry mentors and live quiz.",
          date: evt.event_start_date ? formatEventDate(evt.event_start_date) : fall.date,
          place: evt.venue || (evt.mode === "online" ? "Online Live Session" : "Main Campus"),
          pkg: "Career Readiness",
          elig: evt.mode === "online" ? "Virtual Live Session" : "On-Campus Session",
          c: idx === 0 ? "#0a6cc4" : idx === 1 ? "#a4123f" : "#1d52c4",
          glow: idx === 0 ? "#35c2d6" : idx === 1 ? "#4f8dff" : "#818cf8",
          img: evt.banner_url || fall.img,
          registeredCount: 140 + idx * 35,
          badgeLabel: "Featured Event",
          badgeSub: "Interactive Session",
          detailHref: `/events/${encodeURIComponent(evt.slug)}`,
          applyHref: evt.visit_href || `/events/${encodeURIComponent(evt.slug)}`,
        };
      });
    }

    return DEFAULT_SLIDES;
  }, [activeTab, drives, featuredEvents]);

  // Clamp current index if slides change
  const currentSlide = slides[currentIndex % slides.length] || DEFAULT_SLIDES[0];
  const isApplied = appliedSet.has(currentSlide.id);

  // Auto slide timer
  useEffect(() => {
    if (isHovered) return;
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [slides.length, isHovered, currentIndex]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleApplyClick = (e: React.MouseEvent) => {
    if (currentSlide.applyHref.startsWith("http")) {
      // Let standard link open or mark applied
      setAppliedSet((prev) => new Set(prev).add(currentSlide.id));
      showToast(`Redirecting to registration for ${currentSlide.co}...`);
    } else {
      setAppliedSet((prev) => new Set(prev).add(currentSlide.id));
      showToast(`Registered for ${currentSlide.co}! Check your email for next steps.`);
    }
  };

  return (
    <div className="w-full">
      {/* Tab Switcher */}
      <div className="mb-4 inline-flex gap-1 rounded-full border border-[#dde3f0] bg-white p-1 shadow-sm sm:mb-5">
        <button
          type="button"
          onClick={() => {
            onTabChange("campus");
            setCurrentIndex(0);
          }}
          className={`rounded-full px-5 py-2 text-xs font-bold transition-all sm:text-sm ${
            activeTab === "campus"
              ? "bg-[#1d4ea8] text-white shadow-md shadow-[#1d4ea8]/30"
              : "text-[#5a6580] hover:text-[#101a33]"
          }`}
        >
          Campus drives
        </button>
        <button
          type="button"
          onClick={() => {
            onTabChange("upcoming");
            setCurrentIndex(0);
          }}
          className={`rounded-full px-5 py-2 text-xs font-bold transition-all sm:text-sm ${
            activeTab === "upcoming"
              ? "bg-[#1d4ea8] text-white shadow-md shadow-[#1d4ea8]/30"
              : "text-[#5a6580] hover:text-[#101a33]"
          }`}
        >
          Upcoming events
        </button>
      </div>

      {/* Main Hero Card */}
      <section
        className="relative overflow-hidden rounded-[24px] text-white shadow-[0_20px_50px_rgba(16,26,51,0.25)] transition-all duration-500"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          background: `
            radial-gradient(620px 380px at 88% 8%, ${currentSlide.glow}70 0, transparent 70%),
            radial-gradient(520px 320px at 0% 100%, rgba(79, 141, 255, 0.35) 0, transparent 70%),
            linear-gradient(125deg, #071647 0%, #0f2f84 50%, #1d52c4 100%)
          `,
          boxShadow: "0 30px 60px -20px rgba(10,31,92,0.55), inset 0 0 0 1px rgba(255,255,255,0.08)",
          minHeight: "460px",
        }}
      >
        {/* Dot pattern overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.18) 1px, transparent 1.5px)",
            backgroundSize: "22px 22px",
            maskImage: "linear-gradient(90deg, transparent 20%, #000 100%)",
            WebkitMaskImage: "linear-gradient(90deg, transparent 20%, #000 100%)",
          }}
          aria-hidden
        />

        {/* Decorative Ring */}
        <div
          className="pointer-events-none absolute -top-10 right-[2%] h-[420px] w-[420px] rounded-full opacity-60 max-lg:hidden"
          style={{
            border: "2px solid rgba(255,255,255,0.18)",
            boxShadow: "0 0 0 38px rgba(255,255,255,0.05), 0 0 0 80px rgba(255,255,255,0.03)",
          }}
          aria-hidden
        />

        {/* Company Badge Pill Top Right */}
        <div className="absolute right-6 top-6 z-20 flex items-center gap-2.5 rounded-full bg-white px-4 py-2 text-[14px] font-extrabold text-[#101a33] shadow-[0_10px_26px_rgba(0,0,0,0.25)] max-sm:left-6 max-sm:right-auto max-sm:top-4 sm:right-8 sm:top-7">
          <span
            className="h-3 w-3 rounded-full"
            style={{ backgroundColor: currentSlide.c }}
          />
          <span>{currentSlide.co}</span>
        </div>

        {/* Floating Right Artwork Frame */}
        <div className="absolute right-8 top-20 z-10 hidden w-[380px] lg:block xl:right-11 xl:top-24 xl:w-[410px]">
          <div className="relative h-[225px] w-full overflow-hidden rounded-[22px] border border-white/35 bg-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.35)] backdrop-blur-sm">
            {currentSlide.img ? (
              <Image
                src={currentSlide.img}
                alt={currentSlide.title}
                fill
                sizes="420px"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-600/30 to-indigo-900/40 p-6 text-center text-xl font-bold">
                {currentSlide.co}
              </div>
            )}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>

          {/* Floating Badge Top Right */}
          <div className="absolute -right-3 -top-3 z-20 flex items-center gap-2 rounded-[14px] bg-white px-3.5 py-2 text-xs font-bold text-[#101a33] shadow-[0_12px_28px_rgba(0,0,0,0.28)]">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#fff4d6] text-[#f5a524]">
              <Star className="h-4 w-4 fill-[#f5a524]" />
            </span>
            <div>
              <span>{currentSlide.badgeLabel || "Top recruiter"}</span>
              <small className="block text-[11px] font-medium text-[#5a6580]">
                {currentSlide.badgeSub || "Hiring this month"}
              </small>
            </div>
          </div>

          {/* Floating Badge Bottom Left */}
          <div className="absolute -bottom-3 -left-4 z-20 flex items-center gap-2.5 rounded-[14px] bg-white px-3.5 py-2 text-xs font-bold text-[#101a33] shadow-[0_12px_28px_rgba(0,0,0,0.28)]">
            <div className="flex -space-x-2 overflow-hidden">
              <span className="inline-block h-6 w-6 rounded-full border-2 border-white bg-[#f59e0b]" />
              <span className="inline-block h-6 w-6 rounded-full border-2 border-white bg-[#10b981]" />
              <span className="inline-block h-6 w-6 rounded-full border-2 border-white bg-[#6366f1]" />
            </div>
            <div>
              <span>{currentSlide.registeredCount}+ registered</span>
              <small className="block text-[11px] font-medium text-[#5a6580]">
                Join them today
              </small>
            </div>
          </div>
        </div>

        {/* Content Box (Left) */}
        <div className="relative z-10 max-w-[620px] px-6 pb-28 pt-16 sm:px-9 sm:pb-32 sm:pt-14 lg:pt-12">
          {/* Live indicator */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-3.5 py-1.5 text-xs font-semibold backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ff5a4d] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#ff5a4d]" />
            </span>
            <span>Live now · closes soon</span>
          </div>

          {/* Main Title */}
          <h1 className="mt-4 line-clamp-3 text-2xl font-extrabold leading-[1.15] tracking-tight text-white drop-shadow-sm sm:text-3xl lg:text-[38px]">
            {currentSlide.title}
          </h1>

          {/* Subtitle / Lede */}
          <p className="mt-3 line-clamp-2 max-w-[48ch] text-sm leading-relaxed text-white/85 sm:text-base">
            {currentSlide.lede}
          </p>

          {/* CTA Buttons */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href={currentSlide.applyHref}
              target={currentSlide.applyHref.startsWith("http") ? "_blank" : undefined}
              rel={currentSlide.applyHref.startsWith("http") ? "noopener noreferrer" : undefined}
              onClick={handleApplyClick}
              className={`inline-flex h-12 min-w-[150px] items-center justify-center gap-2 rounded-xl px-6 text-[15px] font-bold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg ${
                isApplied
                  ? "bg-[#22c55e] text-white shadow-emerald-900/30"
                  : "bg-gradient-to-b from-white to-[#e9f0ff] text-[#12399a] shadow-[0_8px_22px_rgba(0,0,0,0.25)] hover:bg-white"
              }`}
            >
              {isApplied ? (
                <>
                  <Check className="h-4 w-4" /> Applied ✓
                </>
              ) : (
                <>
                  Apply now <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </>
              )}
            </a>

            <Link
              href={currentSlide.detailHref}
              className="inline-flex h-12 items-center justify-center rounded-xl border border-white/50 bg-white/10 px-6 text-[15px] font-bold text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              View details
            </Link>
          </div>
        </div>

        {/* Mobile Artwork Display */}
        <div className="relative mx-5 -mt-20 mb-4 block h-[180px] overflow-hidden rounded-2xl border border-white/30 shadow-lg lg:hidden">
          {currentSlide.img ? (
            <Image
              src={currentSlide.img}
              alt={currentSlide.title}
              fill
              className="object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-blue-900 text-lg font-bold">
              {currentSlide.co}
            </div>
          )}
          <div className="absolute bottom-2 left-2 flex items-center gap-2 rounded-lg bg-black/60 px-2.5 py-1 text-xs backdrop-blur-md">
            <Star className="h-3 w-3 text-yellow-400 fill-yellow-400" />
            <span>{currentSlide.registeredCount}+ registered</span>
          </div>
        </div>

        {/* Glass Info Strip (Bottom) */}
        <div className="relative mx-4 mb-4 grid grid-cols-2 overflow-hidden rounded-2xl border border-white/30 bg-gradient-to-b from-white/20 to-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.2)] backdrop-blur-md sm:mx-6 sm:mb-6 sm:grid-cols-4">
          {/* Tile 1: Date */}
          <div className="flex items-center gap-3 border-b border-r border-white/20 p-3.5 sm:border-b-0 sm:p-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/20">
              <Calendar className="h-4 w-4 text-white" />
            </div>
            <div className="min-w-0">
              <small className="block text-[11px] font-medium text-white/75">Date</small>
              <strong className="block truncate text-sm font-bold leading-snug">{currentSlide.date}</strong>
            </div>
          </div>

          {/* Tile 2: Location */}
          <div className="flex items-center gap-3 border-b border-white/20 p-3.5 sm:border-b-0 sm:border-r sm:p-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/20">
              <MapPin className="h-4 w-4 text-white" />
            </div>
            <div className="min-w-0">
              <small className="block text-[11px] font-medium text-white/75">Location</small>
              <strong className="block truncate text-sm font-bold leading-snug">{currentSlide.place}</strong>
            </div>
          </div>

          {/* Tile 3: Package */}
          <div className="flex items-center gap-3 border-r border-white/20 p-3.5 sm:p-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/20">
              <Banknote className="h-4 w-4 text-white" />
            </div>
            <div className="min-w-0">
              <small className="block text-[11px] font-medium text-white/75">Package</small>
              <strong className="block truncate text-sm font-bold leading-snug">{currentSlide.pkg}</strong>
            </div>
          </div>

          {/* Tile 4: Eligibility */}
          <div className="flex items-center gap-3 p-3.5 sm:p-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/20">
              <GraduationCap className="h-4 w-4 text-white" />
            </div>
            <div className="min-w-0">
              <small className="block text-[11px] font-medium text-white/75">Eligibility</small>
              <strong className="block truncate text-sm font-bold leading-snug">{currentSlide.elig}</strong>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Indicator Dots */}
      <div className="mt-4 flex items-center justify-center gap-2.5">
        {slides.map((_, idx) => {
          const isActive = idx === currentIndex;
          return (
            <button
              key={`dot-${idx}`}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`relative h-2.5 rounded-full transition-all duration-300 ${
                isActive
                  ? "w-8 bg-[#1d4ea8] shadow-sm"
                  : "w-2.5 bg-[#dde3f0] hover:bg-[#9aa6bf]"
              }`}
            >
              {isActive && !isHovered && (
                <span
                  key={`progress-${idx}`}
                  className="absolute inset-0 rounded-full bg-white/40"
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

      <style jsx>{`
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
        <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-xl bg-[#101a33] px-5 py-3 text-sm font-semibold text-white shadow-2xl transition-all duration-300">
          {toastMessage}
        </div>
      )}
    </div>
  );
}
