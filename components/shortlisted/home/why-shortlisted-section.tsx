"use client"

import { X } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

const PRIMARY_BLUE = "#00BAE8"

const problems: { title: string; description: string }[] = [
  {
    title: "Ghosted Applications",
    description:
      "Applying daily but receiving no interview calls? We fix the visibility gap between you and recruiters.",
  },
  {
    title: "Missed Opportunities",
    description:
      "Missing crucial campus drives or off-campus deadlines? Our real-time tracker keeps you ahead of every window.",
  },
  {
    title: "Zero Structure",
    description:
      "No clarity on what to study or how to prepare? Get a roadmap built by industry veterans for the modern market.",
  },
  {
    title: "ATS Rejections",
    description:
      "Resume getting rejected automatically by bots? Our AI-powered analysis ensures your profile passes every filter.",
  },
]

export function WhyShortlistedSection() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted && resolvedTheme === "dark"
  const sectionBgColor = isDark ? "#1a1f2e" : "#ffffff"
  const cardBg = isDark ? "#2a3441" : "#ffffff"
  const cardBorder = isDark ? "#374151" : "#D0D0D0"
  const titleColor = isDark ? "#ffffff" : "#111827"
  const descColor = isDark ? "#d1d5db" : "#374151"

  return (
    <section
      className="relative py-16 lg:py-24"
      style={{ backgroundColor: sectionBgColor }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 max-w-[1600px]">
        {/* Title block - 40px gap to next section */}
        <div className="text-center mb-10 px-2 sm:px-0">
          <h2
            className="font-semibold text-[36px] max-[375px]:text-[32px] sm:text-[48px] md:text-[56px] lg:text-[64px] leading-[1.1] font-poppins mb-4 break-words"
            style={{ color: titleColor }}
          >
            Why SHORTLISTED Exists
          </h2>
          <p
            className="font-normal text-base max-[375px]:text-sm sm:text-lg md:text-xl lg:text-2xl font-poppins"
            style={{ color: descColor }}
          >
            You&apos;re stuck in a loop. We&apos;re here to break it.
          </p>
        </div>

        {/* Problem cards - single row of 4 on large screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 max-w-[1600px] mx-auto mb-10">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="rounded-2xl p-4 min-h-[200px] flex flex-col gap-8 text-left"
              style={{
                backgroundColor: cardBg,
                border: `1px solid ${cardBorder}`,
                boxShadow: "0 4px 4px rgba(0, 0, 0, 0.25)",
              }}
            >
              {/* Icon + title row */}
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-red-500">
                  <X className="w-4 h-4 text-white stroke-[2.5]" />
                </div>
                <h3
                  className="font-semibold text-lg sm:text-xl font-poppins"
                  style={{ color: titleColor }}
                >
                  {problem.title}
                </h3>
              </div>
              {/* Description - 32px gap from icon+title */}
              <p
                className="font-normal text-sm sm:text-base leading-relaxed font-poppins flex-1"
                style={{ color: descColor }}
              >
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        {/* Concluding statement - no separator */}
        <div className="text-center">
          <p className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold font-poppins">
            <span style={{ color: titleColor }}>
              It&apos;s time for execution{" "}
            </span>
            <span style={{ color: PRIMARY_BLUE }}>over effort</span>
          </p>
        </div>
      </div>
    </section>
  )
}
