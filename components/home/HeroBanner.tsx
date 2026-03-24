"use client";

import React, { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { HeroConstellationNetwork } from "./hero/HeroConstellationNetwork"
import { HeroFeatureCarousel, type HeroCarouselSlide } from "./hero/HeroFeatureCarousel"
import heroSlidesRaw from "@/data/hero-carousel.json"

const HeroBanner: React.FC = () => {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted && resolvedTheme === "dark"
  const heroSlides = heroSlidesRaw as HeroCarouselSlide[]

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background (covers the wavy background so the hero matches the screenshot) */}
      <div
        className="absolute inset-0"
        style={
          isDark
            ? {
                background:
                  "linear-gradient(135deg, rgba(0,242,255,0.22) 0%, rgba(9,46,59,1) 28%, rgba(44,28,86,1) 62%, rgba(68,36,129,1) 100%)",
              }
            : {
                background:
                  "linear-gradient(90deg, rgba(224,251,255,1) 0%, rgba(243,232,255,1) 55%, rgba(237,233,254,1) 100%)",
              }
        }
      />

      {/* Decorative orbs */}
      <div
        className="absolute -top-32 left-1/3 w-130 h-130 rounded-full blur-3xl opacity-60"
        style={
          isDark
            ? { background: "rgba(0,242,255,0.35)" }
            : { background: "rgba(0,242,255,0.18)" }
        }
        aria-hidden
      />
      <div
        className="absolute top-10 right-1/4 w-115 h-115 rounded-full blur-3xl opacity-45"
        style={
          isDark
            ? { background: "rgba(255,0,229,0.35)" }
            : { background: "rgba(255,0,229,0.18)" }
        }
        aria-hidden
      />

      {/* Dots + connected lines overlay */}
      <HeroConstellationNetwork isDark={isDark} />

      {/* Extra vignette for screenshot contrast */}
      <div
        className="absolute inset-0"
        style={
          isDark
            ? {
                background:
                  "radial-gradient(1200px 600px at 50% 15%, rgba(0,0,0,0) 0%, rgba(0,0,0,0.28) 65%, rgba(0,0,0,0.48) 100%)",
              }
            : {
                background:
                  "radial-gradient(900px 500px at 50% 15%, rgba(255,255,255,0) 0%, rgba(255,255,255,0.65) 65%, rgba(255,255,255,0.85) 100%)",
              }
        }
        aria-hidden
      />

      <div className="relative z-10 content-container flex items-center justify-center min-h-screen pt-30 sm:pt-34 pb-16">
        <div className="w-full max-w-none flex flex-col items-center text-center">
          <HeroFeatureCarousel slides={heroSlides} isDark={isDark} />
        </div>
      </div>
    </div>
  )
}

export default HeroBanner


