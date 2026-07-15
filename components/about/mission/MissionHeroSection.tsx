"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Briefcase,
  Building2,
  Compass,
  Cpu,
  GraduationCap,
  MapPin,
  Users,
} from "lucide-react";

import { useAboutLocale } from "@/contexts/AboutLocaleContext";
import { theme } from "@/config/theme";
import { HighlightedHeadingParts } from "@/components/shared/HighlightMark";

const GRAD_PHOTO =
  "https://hirekarma.s3.us-east-1.amazonaws.com/shortlisted/herosection3.jpeg";

type ProductAccentKey = keyof typeof theme.productAccents;

type EcosystemProduct = {
  id: string;
  accentKey: ProductAccentKey;
  name: string;
  short: string;
  blurb: string;
  metric: string;
  metricLabel: string;
  Icon: typeof GraduationCap;
  rows: { label: string; value: string }[];
};

const PRODUCTS: EcosystemProduct[] = [
  {
    id: "disha",
    accentKey: "disha",
    name: "DISHA",
    short: "Campus recruitment",
    blurb: "Placement drives, offers & TPO analytics",
    metric: "128",
    metricLabel: "drives live",
    Icon: GraduationCap,
    rows: [
      { label: "Drive queue", value: "12 today" },
      { label: "Offers tracked", value: "86" },
      { label: "TPO view", value: "Realtime" },
    ],
  },
  {
    id: "solviq",
    accentKey: "solviq",
    name: "SolviqAI",
    short: "AI readiness",
    blurb: "Resume, skills & mock interview coaching",
    metric: "91%",
    metricLabel: "readiness",
    Icon: Cpu,
    rows: [
      { label: "ATS score", value: "92/100" },
      { label: "Mock rounds", value: "4 done" },
      { label: "Skill gaps", value: "2 left" },
    ],
  },
  {
    id: "lakshya",
    accentKey: "lakshya",
    name: "Lakshya",
    short: "Hiring ecosystem",
    blurb: "Students, campuses & recruiters in one flow",
    metric: "3",
    metricLabel: "stakeholders",
    Icon: Users,
    rows: [
      { label: "Campus", value: "Connected" },
      { label: "Recruiter", value: "Shortlisting" },
      { label: "Student", value: "Applied" },
    ],
  },
  {
    id: "shortlisted",
    accentKey: "shortlisted",
    name: "Shortlisted",
    short: "Virtual placement",
    blurb: "AI-matched jobs with human coordination",
    metric: "12",
    metricLabel: "batch size",
    Icon: Briefcase,
    rows: [
      { label: "Match score", value: "96%" },
      { label: "Applications", value: "18 live" },
      { label: "Coordinator", value: "On call" },
    ],
  },
  {
    id: "janasamadhan",
    accentKey: "janasamadhan",
    name: "Janasamadhan",
    short: "Public grievance",
    blurb: "Citizen complaints routed with transparency",
    metric: "98%",
    metricLabel: "resolved",
    Icon: Building2,
    rows: [
      { label: "Ticket", value: "#JS-2041" },
      { label: "Department", value: "Routed" },
      { label: "SLA", value: "On track" },
    ],
  },
  {
    id: "amagopalpur",
    accentKey: "amagopalpur",
    name: "AMA Gopalpur",
    short: "Constituency map",
    blurb: "Assets, projects & development progress",
    metric: "64%",
    metricLabel: "progress",
    Icon: MapPin,
    rows: [
      { label: "Projects", value: "42 live" },
      { label: "Departments", value: "11" },
      { label: "Geo view", value: "Mapped" },
    ],
  },
];

function MetricBar({
  accent,
  width,
}: {
  accent: string;
  width: string;
}) {
  return (
    <div className="h-1.5 overflow-hidden rounded-full bg-gray-100">
      <div
        className="h-full rounded-full transition-all duration-700 ease-out"
        style={{ width, backgroundColor: accent }}
      />
    </div>
  );
}

function ProductPreview({ product }: { product: EcosystemProduct }) {
  const accent = theme.productAccents[product.accentKey];
  const { Icon } = product;
  const textOnAccent =
    product.accentKey === "shortlisted" ? "#111827" : "#ffffff";

  return (
    <div
      key={product.id}
      className="animate-[hk-mv-fade_0.45s_ease]"
    >
      <div className="flex items-start justify-between gap-3 border-b border-gray-100 px-3.5 pb-2.5 pt-3">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <span
              className="flex h-8 w-8 items-center justify-center rounded-lg shadow-sm"
              style={{ backgroundColor: accent.main, color: textOnAccent }}
            >
              <Icon className="h-4 w-4" />
            </span>
            <div className="min-w-0">
              <p className="text-[13px] font-bold leading-none text-[#0f1622]">
                {product.name}
              </p>
              <p className="mt-1 text-[10px] font-medium text-gray-500">
                {product.short}
              </p>
            </div>
          </div>
          <p className="mt-2 text-[11px] leading-snug text-gray-600">
            {product.blurb}
          </p>
        </div>
        <div
          className="shrink-0 rounded-xl px-2.5 py-2 text-center"
          style={{ backgroundColor: accent.bg }}
        >
          <p
            className="text-lg font-extrabold leading-none tabular-nums"
            style={{ color: accent.main }}
          >
            {product.metric}
          </p>
          <p className="mt-1 text-[9px] font-semibold uppercase tracking-wide text-gray-500">
            {product.metricLabel}
          </p>
        </div>
      </div>

      <div className="space-y-2 px-3.5 py-3">
        {product.rows.map((row, i) => (
          <div key={row.label} className="space-y-1">
            <div className="flex items-center justify-between text-[11px]">
              <span className="font-medium text-gray-500">{row.label}</span>
              <span className="font-bold text-[#0f1622]">{row.value}</span>
            </div>
            <MetricBar
              accent={accent.main}
              width={`${78 - i * 12}%`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

/** HireKarma product ecosystem — cycles through all six platforms. */
function MissionHeroVisual({ alt }: { alt: string }) {
  const [active, setActive] = useState(0);
  const product = PRODUCTS[active];
  const accent = theme.productAccents[product.accentKey];

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % PRODUCTS.length);
    }, 2600);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="relative hidden h-[320px] w-full lg:block">
      <style>{`
        @keyframes hk-mv-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        @keyframes hk-mv-fade {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes hk-mv-ring {
          0%, 100% { transform: scale(1); opacity: 0.55; }
          50% { transform: scale(1.08); opacity: 0.9; }
        }
        .hk-mv-float { animation: hk-mv-float 5.4s ease-in-out infinite; }
        .hk-mv-ring { animation: hk-mv-ring 2.8s ease-in-out infinite; }
      `}</style>

      <div
        className="pointer-events-none absolute -right-4 top-0 h-44 w-44 rounded-full blur-3xl transition-colors duration-700"
        style={{ backgroundColor: `${accent.main}40` }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-8 left-10 h-28 w-28 rounded-full blur-3xl"
        style={{ backgroundColor: "rgba(0,162,229,0.18)" }}
        aria-hidden
      />

      {/* Impact photo */}
      <div className="absolute bottom-12 right-0 top-0 z-10 w-[52%] overflow-hidden rounded-2xl shadow-[0_22px_48px_rgba(0,0,0,0.42)] ring-1 ring-white/15">
        <Image
          src={GRAD_PHOTO}
          alt={alt}
          fill
          sizes="(max-width: 1280px) 26vw, 280px"
          className="object-cover object-[center_28%]"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(205deg, transparent 30%, rgba(15,22,34,0.72) 100%)",
          }}
          aria-hidden
        />
        <div className="absolute bottom-3 left-3 right-3">
          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-white/90">
            Product ecosystem
          </p>
          <p className="text-sm font-bold text-white">
            Campus → Career → Governance
          </p>
        </div>
      </div>

      {/* Active product card */}
      <div className="hk-mv-float absolute left-0 top-0 z-30 w-[255px] overflow-hidden rounded-2xl bg-white shadow-[0_24px_56px_rgba(0,0,0,0.36)] ring-1 ring-black/5">
        <div
          className="h-1 w-full transition-colors duration-500"
          style={{ backgroundColor: accent.main }}
        />
        <ProductPreview product={product} />
      </div>

      {/* Ecosystem hub chip */}
      <div className="absolute right-[8%] top-[38%] z-20 flex items-center gap-2 rounded-full border border-white/20 bg-[#0f1622]/80 px-2.5 py-1.5 backdrop-blur-md">
        <span
          className="hk-mv-ring flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-extrabold text-white"
          style={{ backgroundColor: theme.colors.primary }}
        >
          6
        </span>
        <div>
          <p className="text-[10px] font-bold leading-none text-white">
            HireKarma
          </p>
          <p className="mt-0.5 text-[9px] text-white/85">platforms live</p>
        </div>
      </div>

      {/* All products rail */}
      <div className="absolute bottom-0 left-0 right-0 z-30 grid grid-cols-6 gap-1.5">
        {PRODUCTS.map((item, index) => {
          const itemAccent = theme.productAccents[item.accentKey];
          const isActive = index === active;
          const ItemIcon = item.Icon;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setActive(index)}
              className={`flex flex-col items-center gap-1 rounded-xl border px-1 py-2 transition duration-300 ${
                isActive
                  ? "border-transparent bg-white shadow-[0_10px_24px_rgba(0,0,0,0.28)]"
                  : "border-white/10 bg-white/10 hover:bg-white/16"
              }`}
              aria-label={item.name}
              aria-pressed={isActive}
            >
              <span
                className="flex h-7 w-7 items-center justify-center rounded-full transition"
                style={{
                  backgroundColor: isActive ? itemAccent.main : `${itemAccent.main}33`,
                  color: isActive
                    ? item.accentKey === "shortlisted"
                      ? "#111827"
                      : "#ffffff"
                    : itemAccent.main,
                }}
              >
                <ItemIcon className="h-3.5 w-3.5" />
              </span>
              <span
                className={`max-w-full truncate text-[9px] font-bold leading-none ${
                  isActive ? "text-[#0f1622]" : "text-white/90"
                }`}
              >
                {item.name.split(" ")[0]}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function MissionHeroSection() {
  const { content } = useAboutLocale();
  const { hero, mission } = content.mission;
  const ink = theme.colors.ink;

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: ink }}
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div
          className="absolute left-0 top-1/4 h-[200px] w-[200px] rounded-full blur-[80px]"
          style={{ backgroundColor: "rgba(27,82,164,0.35)" }}
        />
        <div
          className="absolute right-0 top-[15%] h-[240px] w-[240px] rounded-full blur-[90px]"
          style={{ backgroundColor: "rgba(0,162,229,0.22)" }}
        />
      </div>

      <div className="relative content-container pb-6 pt-6 lg:pb-7 lg:pt-8">
        <div className="grid items-center gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-8">
          <div className="min-w-0 space-y-3">
            <p
              className="text-[10px] font-semibold uppercase tracking-[0.16em]"
              style={{ color: theme.colors.secondary }}
            >
              {hero.label}
            </p>

            <h1 className="text-2xl font-bold leading-[1.2] tracking-tight text-white sm:text-[1.75rem] lg:text-[1.85rem] xl:text-[2rem]">
              <HighlightedHeadingParts
                heading={hero.heading}
                highlight={hero.headingHighlight}
              />
            </h1>

            <p className="max-w-2xl text-sm leading-snug text-white/90 lg:text-[15px]">
              {hero.description}
            </p>

            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
              <Link
                href={hero.primaryCta.href}
                className="inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-white transition hover:brightness-110"
                style={{ backgroundColor: theme.colors.primary }}
              >
                {hero.primaryCta.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={hero.secondaryCta.href}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/55 hover:bg-white/5"
              >
                {hero.secondaryCta.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="flex items-center gap-2 text-xs text-white/85">
              <span
                className="flex h-6 w-6 items-center justify-center rounded-full"
                style={{ backgroundColor: "rgba(0,162,229,0.15)" }}
              >
                <Compass
                  className="h-3 w-3"
                  style={{ color: theme.colors.secondary }}
                />
              </span>
              {hero.tagline}
            </div>
          </div>

          <MissionHeroVisual alt={mission.imageAlt} />
        </div>
      </div>
    </section>
  );
}
