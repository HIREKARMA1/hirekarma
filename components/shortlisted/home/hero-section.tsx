"use client"

import { Button } from "@/components/shortlisted/ui/button"
import { Check } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { cn } from "@/lib/shortlisted/utils"
import Link from "next/link"

const PRIMARY_BLUE = "#00BAE8"

export function HeroSection() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted && resolvedTheme === "dark"
  const sectionBgColor = isDark ? "#1a1f2e" : "#ffffff"
  const blurColor = isDark ? "rgba(0, 186, 232, 0.35)" : "rgba(0, 186, 232, 0.65)"

  const features = [
    "Live jobs & campus drives",
    "Offline + online execution",
    "Solviq + DISHA premium access",
    "Only 12 students per batch",
  ]

  return (
    <section
      className="relative min-h-screen md:min-h-0 md:py-8 lg:min-h-screen lg:py-0 pt-0 flex items-center max-[375px]:pt-2 overflow-hidden"
      style={{ backgroundColor: sectionBgColor, touchAction: "pan-y" }}
    >
      {/* Light blue gradient overlay - left side */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: isDark
            ? "linear-gradient(135deg, rgba(42, 52, 65, 0.4) 0%, transparent 50%)"
            : "linear-gradient(135deg, rgba(238, 247, 255, 0.9) 0%, rgba(255,255,255,0.4) 40%, transparent 70%)",
        }}
      />

      {/* Blurred decorative rectangle - left (larger blur) */}
      <div
        className="absolute w-[140px] h-[160px] sm:w-[175px] sm:h-[202px] pointer-events-none z-0 left-4 sm:left-6 top-40 sm:top-[192px]"
        style={{
          backgroundColor: blurColor,
          filter: "blur(80px)",
          borderRadius: "8px",
        }}
        aria-hidden
      />

      {/* Blurred decorative circle - right (smaller blur) */}
      <div
        className="absolute w-[120px] h-[140px] sm:w-[175px] sm:h-[202px] pointer-events-none z-0 rounded-full right-4 sm:right-8 lg:right-20 top-[55%] sm:top-[391px]"
        style={{
          backgroundColor: blurColor,
          filter: "blur(80px)",
        }}
        aria-hidden
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 max-w-[1600px] relative z-10">
        <div className="flex flex-col items-center w-full">
          {/* Content - centered horizontally */}
          <div className="flex flex-col gap-[30px] z-10 px-2 sm:px-0 w-full max-w-[1212px] items-center text-center">
            {/* Main Heading - 2 lines: "Get Shortlisted Faster." / "Get Placed Smarter." */}
            <h1
              className="font-semibold text-[36px] max-[375px]:text-[32px] sm:text-[48px] md:text-[56px] lg:text-[64px] lg:leading-[1.375] leading-[1.1] font-poppins break-words"
              style={{ color: isDark ? "#ffffff" : "#111827" }}
            >
              Get <span style={{ color: PRIMARY_BLUE }}>Shortlisted</span> Faster.
              <br />
              Get <span style={{ color: PRIMARY_BLUE }}>Placed</span> Smarter.
            </h1>

            {/* Sub Heading */}
            <p
              className="font-normal text-base max-[375px]:text-sm sm:text-lg md:text-xl lg:text-2xl font-poppins"
              style={{ color: isDark ? "#d1d5db" : "#374151" }}
            >
              60-day premium placement acceleration program for unplaced students.
            </p>

            {/* Features - 2 columns grid, centered */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 w-full max-w-[750px] lg:max-w-[800px]">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div
                    className="flex-shrink-0 mt-0.5 flex items-center justify-center w-6 h-6 rounded-full"
                    style={{ backgroundColor: PRIMARY_BLUE }}
                  >
                    <Check className="w-4 h-4 text-white stroke-[2.5]" />
                  </div>
                  <span
                    className="font-normal text-[20px] leading-relaxed font-poppins lg:whitespace-nowrap"
                    style={{ color: isDark ? "#ffffff" : "#111827" }}
                  >
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center items-center">
              <Link
                href="https://forms.gle/oDq7HQkzx6zk3Nz76"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "rounded-lg px-5 py-2 font-semibold text-[20px] font-poppins",
                  "flex items-center justify-center gap-2 h-auto w-full sm:w-auto",
                  "transition-colors duration-200",
                  "bg-[#00BAE8] hover:bg-[#0091cc] text-white"
                )}
              >
                Register Now
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-shrink-0 drop-shadow-[0_0_2px_rgba(255,255,255,0.8)]"
                >
                  <path
                    d="M5 12H19M19 12L13 6M19 12L13 18"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              <div className="relative group w-full sm:w-auto">
                <Button
                  variant="outline"
                  className={cn(
                    "border-2 bg-transparent rounded-lg px-5 py-2 font-semibold text-[20px] font-poppins h-auto w-full sm:w-auto",
                    isDark ? "hover:bg-gray-800" : "hover:bg-gray-100"
                  )}
                  style={{
                    borderColor: isDark ? "#ffffff" : "#111827",
                    color: isDark ? "#ffffff" : "#111827",
                  }}
                >
                  Check Eligibility
                </Button>
                <div
                  className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 text-white text-sm font-poppins rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50"
                  style={{
                    backgroundColor: isDark ? "#374151" : "#111827",
                  }}
                >
                  For 2025 & 2026 Graduates
                  <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1">
                    <div
                      className="border-4 border-transparent w-0 h-0"
                      style={{
                        borderTopColor: isDark ? "#374151" : "#111827",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
