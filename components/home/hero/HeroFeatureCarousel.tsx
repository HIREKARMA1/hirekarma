"use client"

import React, { useEffect, useMemo, useState } from "react"
import { HeroCtaButton } from "./HeroCtaButton"
import { StudentsPlacedBadge } from "./StudentsPlacedBadge"
import { HeroHeadline } from "./HeroHeadline"

export type HeroCarouselSlide = {
  id: string
  focusTitle: string
  headlineLines: Array<{
    text: string
    variant: "white" | "gradient"
  }>
  description: string
  ctaLabel: string
  ctaHref: string
  badgeText: string
  badgePosition: "right" | "below"
}

type HeroFeatureCarouselProps = {
  slides: HeroCarouselSlide[]
  isDark: boolean
  autoMs?: number
}

function splitByNewline(text: string) {
  return text.split("\n").filter((t) => t !== "")
}

export function HeroFeatureCarousel({
  slides,
  isDark,
  autoMs = 10000,
}: HeroFeatureCarouselProps) {
  const normalizedSlides = useMemo(() => slides.filter(Boolean), [slides])

  const [activeIndex, setActiveIndex] = useState(0)

  const len = normalizedSlides.length

  useEffect(() => {
    if (len <= 1) return

    const id = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % len)
    }, autoMs)

    return () => window.clearInterval(id)
  }, [autoMs, len])

  const slide = normalizedSlides[activeIndex]
  if (!slide) return null
  const descriptionLines = splitByNewline(slide.description)

  return (
    <div className="relative w-full">
      <div
        className={[
          "mx-auto w-full max-w-none rounded-3xl",
          "px-4 sm:px-8 md:px-10 lg:px-12 py-6 sm:py-8 lg:py-10",
          "border border-white/12 backdrop-blur-[2px]",
          isDark
            ? "bg-[linear-gradient(180deg,rgba(255,255,255,0.025)_0%,rgba(255,255,255,0.008)_100%)] shadow-[0_10px_35px_-25px_rgba(0,0,0,0.55)]"
            : "bg-white/20 shadow-[0_10px_35px_-25px_rgba(15,23,42,0.22)]",
        ].join(" ")}
      >
        <div
          key={slide.id}
          className={[
            "animate-in fade-in-0 slide-in-from-bottom-2 duration-700",
            "ease-[cubic-bezier(0.22,1,0.36,1)]",
          ].join(" ")}
        >
          {/* Compact feature chip to make the top area richer */}
          <div className="mb-5 flex justify-center">
            <span
              className={[
                "inline-flex items-center rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold tracking-wide",
                "border border-white/15 bg-white/10",
                isDark ? "text-white/90" : "text-gray-700",
              ].join(" ")}
            >
              {slide.focusTitle}
            </span>
          </div>

          {/* Main headline (changes per slide) */}
          <HeroHeadline isDark={isDark} headlineLines={slide.headlineLines} />

          <p
            className={[
              "mt-6 max-w-215 leading-relaxed text-center mx-auto",
              "text-sm sm:text-base md:text-lg lg:text-xl",
              isDark ? "text-gray-300" : "text-gray-600",
            ].join(" ")}
          >
            {descriptionLines.map((line, idx) => (
              <React.Fragment key={`${slide.id}-line-${idx}`}>
                {line}
                {idx < descriptionLines.length - 1 ? <br /> : null}
              </React.Fragment>
            ))}
          </p>

          {/* subtle divider glow to break empty vertical space */}
          <div className="mt-7 flex justify-center">
            <div className="h-px w-full max-w-160 bg-linear-to-r from-transparent via-white/35 to-transparent" />
          </div>

          {slide.badgePosition === "right" ? (
            <div className="mt-7 w-full flex flex-col sm:flex-row items-center justify-center gap-6">
              <HeroCtaButton
                label={slide.ctaLabel}
                href={slide.ctaHref}
                className="w-65"
              />
              <StudentsPlacedBadge text={slide.badgeText} />
            </div>
          ) : (
            <div className="mt-7 w-full flex flex-col items-center justify-center gap-4">
              <HeroCtaButton
                label={slide.ctaLabel}
                href={slide.ctaHref}
                className="w-65"
              />
              <StudentsPlacedBadge text={slide.badgeText} />
            </div>
          )}
        </div>
      </div>

      {len > 1 ? (
        <>
          {/* bottom tab bar */}
          <div className="mt-8 mx-auto w-full max-w-fit rounded-xl border border-white/10 bg-white/5 p-2 backdrop-blur-sm">
            <div className="w-full flex items-center justify-center gap-2 flex-wrap">
            {normalizedSlides.map((s, idx) => {
              const active = idx === activeIndex
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={[
                    "px-4 py-2 rounded-md text-xs sm:text-sm transition-all",
                    "border border-white/10 bg-white/5",
                    active
                      ? "text-white border-[#00F2FF]/60 bg-[#00F2FF]/18 shadow-[0_0_20px_-10px_rgba(0,242,255,0.9)]"
                      : "text-white/70 hover:bg-white/10 hover:text-white/90",
                  ].join(" ")}
                >
                  {s.focusTitle}
                </button>
              )
            })}
            </div>
          </div>
        </>
      ) : null}
    </div>
  )
}

