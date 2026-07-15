"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, GraduationCap, Sparkles, Users } from "lucide-react";

import { useAboutLocale } from "@/contexts/AboutLocaleContext";
import { theme } from "@/config/theme";
import { HighlightedHeadingParts } from "@/components/shared/HighlightMark";

const PHOTOS = {
  team: {
    src: "https://hirekarma.s3.us-east-1.amazonaws.com/hirekarma_ui/about-us/culture/bputojob-min.jpg",
    alt: "Team collaboration",
  },
  celebration: {
    src: "https://hirekarma.s3.us-east-1.amazonaws.com/hirekarma_ui/about-us/culture/diwali-celibration.jpg",
    alt: "Team celebration",
  },
  workspace: {
    src: "https://hirekarma.s3.us-east-1.amazonaws.com/hirekarma_ui/about-us/culture/potloak.jpg",
    alt: "Team at work",
  },
} as const;

function MaskedPhoto({
  src,
  alt,
  className,
  sizes = "(max-width: 1024px) 50vw, 22vw",
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className ?? ""}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className={`object-cover transition duration-700 ${
          loaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
        }`}
        onLoad={() => setLoaded(true)}
      />
      {!loaded && <div className="absolute inset-0 animate-pulse bg-white/10" />}
    </div>
  );
}

const PURPOSE_LABELS = [
  {
    title: "Lead",
    caption: "Own outcomes",
    Icon: Users,
    color: theme.colors.primary,
  },
  {
    title: "Learn",
    caption: "Grow together",
    Icon: GraduationCap,
    color: theme.colors.secondary,
  },
  {
    title: "Build",
    caption: "Ship impact",
    Icon: Sparkles,
    color: theme.colors.orange,
  },
] as const;

/** Clean overlapping stack — no blob/circle masks. */
function HeroPhotoComposition() {
  return (
    <div className="mx-auto w-full max-w-md space-y-3 lg:mx-0 lg:max-w-none">
      <div className="relative h-[250px] w-full lg:h-[270px]">
        <style>{`
          @keyframes hk-rise {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-4px); }
          }
          .hk-rise { animation: hk-rise 6s ease-in-out infinite; }
        `}</style>

        <div
          className="absolute inset-x-[6%] inset-y-[8%] rounded-3xl opacity-80 blur-2xl"
          style={{
            background: `linear-gradient(135deg, ${theme.colors.primary}40, ${theme.colors.secondary}28)`,
          }}
          aria-hidden
        />

        {/* Primary — wide cover photo */}
        <div className="hk-rise absolute inset-x-0 top-0 z-10 h-[70%] overflow-hidden rounded-2xl shadow-[0_18px_40px_rgba(0,0,0,0.45)] ring-1 ring-white/15">
          <MaskedPhoto
            {...PHOTOS.team}
            className="h-full w-full"
            sizes="(max-width: 1024px) 90vw, 40vw"
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent"
            aria-hidden
          />
        </div>

        {/* Secondary — bottom left, slight tilt */}
        <div className="absolute bottom-0 left-0 z-20 h-[44%] w-[47%] -rotate-2 overflow-hidden rounded-xl shadow-[0_16px_32px_rgba(0,0,0,0.5)] ring-2 ring-[#0f1622]">
          <div
            className="absolute inset-x-0 top-0 z-10 h-0.5"
            style={{ backgroundColor: theme.colors.yellow }}
            aria-hidden
          />
          <MaskedPhoto {...PHOTOS.celebration} className="h-full w-full" />
        </div>

        {/* Tertiary — bottom right, slight tilt */}
        <div className="absolute bottom-1 right-0 z-30 h-[46%] w-[49%] rotate-2 overflow-hidden rounded-xl shadow-[0_18px_36px_rgba(0,0,0,0.55)] ring-2 ring-white/20">
          <div
            className="absolute inset-y-0 left-0 z-10 w-0.5"
            style={{ backgroundColor: theme.colors.secondary }}
            aria-hidden
          />
          <MaskedPhoto {...PHOTOS.workspace} className="h-full w-full" />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {PURPOSE_LABELS.map(({ title, caption, Icon, color }) => (
          <div
            key={title}
            className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.06] px-3 py-2.5 backdrop-blur-sm transition hover:bg-white/[0.1]"
          >
            <span
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white shadow-md"
              style={{ backgroundColor: color }}
            >
              <Icon className="h-4 w-4" />
            </span>
            <div className="min-w-0">
              <p className="text-sm font-bold leading-none text-white">{title}</p>
              <p className="mt-1 truncate text-[11px] leading-none text-white/85">
                {caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function LeadershipHeroSection() {
  const { content } = useAboutLocale();
  const { hero } = content.people;
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
        <div className="grid items-center gap-5 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.85fr)] lg:gap-6 xl:gap-8">
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

            <p className="text-sm leading-snug text-white/90 lg:text-[15px]">
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
                <Users
                  className="h-3 w-3"
                  style={{ color: theme.colors.secondary }}
                />
              </span>
              {hero.tagline}
            </div>
          </div>

          <div className="hidden lg:block">
            <HeroPhotoComposition />
          </div>
        </div>
      </div>
    </section>
  );
}
