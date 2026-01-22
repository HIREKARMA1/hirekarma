"use client"

import { X } from "lucide-react"
import { cn } from "@/lib/shortlisted/utils"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

const problems = [
  "Applying daily, no interview calls",
  "Missing campus drives",
  "No clarity, no structure",
  "Resume getting rejected automatically",
]

export function WhyShortlistedSection() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Check if dark theme is active - same pattern as navbar
  const isDark = mounted && resolvedTheme === "dark"
  
  const sectionBgColor = isDark ? "#1a1f2e" : "#ffffff"

  return (
    <section 
      className="relative py-16 lg:py-24"
      style={{ backgroundColor: sectionBgColor }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 max-w-[1600px]">
        {/* Title */}
        <div className="text-center mb-12 px-2 sm:px-0">
          <h1 
            className="font-semibold text-[36px] max-[375px]:text-[32px] sm:text-[48px] md:text-[56px] lg:text-[64px] leading-[1.1] font-poppins mb-4 break-words"
            style={{ color: isDark ? '#ffffff' : '#111827' }}
          >
            Why SHORTLISTED Exists
          </h1>
          
          <p 
            className="font-normal text-base max-[375px]:text-sm sm:text-lg md:text-xl lg:text-2xl font-poppins"
            style={{ color: isDark ? '#d1d5db' : '#374151' }}
          >
            You&apos;re stuck in a loop. We&apos;re here to break it.
          </p>
        </div>



        {/* Problems Grid - 2x2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 mb-8 lg:mb-12">
          {problems.map((problem, index) => (
            <div
              key={index}
              className={cn(
                "bg-[#fef2f2] dark:bg-[#FFE1E2] rounded-lg p-4",
                "flex items-center gap-4",
                "border border-pink-200 dark:border-pink-900/30"
              )}
            >
              {/* Red X Icon */}
              <div className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-red-500">
                <X className="w-3 h-3 text-white stroke-[3]" />
              </div>
              {/* Problem Text */}
              <p className="font-medium text-[20px] leading-relaxed text-gray-900 dark:text-[#474747] font-poppins">
                {problem}
              </p>
            </div>
          ))}
        </div>

        {/* Separator Line */}
        <div 
          className="w-full h-px my-8 lg:my-12"
          style={{ backgroundColor: isDark ? '#374151' : '#4b5563' }}
        />

        {/* Concluding Statement */}
        <div className="text-center">
          <p className="text-2xl lg:text-3xl xl:text-4xl font-bold font-poppins">
            <span 
              className="font-poppins"
              style={{ color: isDark ? '#ffffff' : '#111827' }}
            >
              It&apos;s time for execution{" "}
            </span>
            <span className="text-[#00a2e5]">over effort</span>
          </p>
        </div>
      </div>
    </section>
  )
}

