"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Check, Users } from "lucide-react"
import Link from "next/link"

const PRIMARY_BLUE = "#00BAE8"

const batchIncludes = [
  "Offline kickstart (first 4 days) with ATS resume rebuild & interview prep",
  "60-day placement execution with live jobs & campus drives",
  "Premium Solviq AI mock interviews & DISHA job platform access",
  "Continuous mentoring — only 12 students per batch",
]

export default function PricingSection() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const isDark = mounted && resolvedTheme === "dark"
  const sectionBg = isDark ? "#1a1f2e" : "#F0F9F4"
  const titleColor = isDark ? "#ffffff" : "#111827"
  const descColor = isDark ? "#d1d5db" : "#374151"
  const cardBg = isDark ? "#2a3441" : "#ffffff"
  const cardBorder = isDark ? "#374151" : "#E6E7EB"

  return (
    <section
      id="pricing"
      className="relative py-16 lg:py-24 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: sectionBg }}
    >
      <div className="container mx-auto max-w-[1000px]">
        <div className="text-center mb-10">
          <h2
            className="font-semibold text-[36px] max-[375px]:text-[32px] sm:text-[48px] md:text-[56px] lg:text-[64px] leading-[1.1] font-poppins mb-4 break-words"
            style={{ color: titleColor }}
          >
            Program Pricing
          </h2>
          <p
            className="font-normal text-base max-[375px]:text-sm sm:text-lg md:text-xl lg:text-2xl font-poppins max-w-3xl mx-auto"
            style={{ color: descColor }}
          >
            One batch. One outcome. Placement execution — not another online course.
          </p>
        </div>

        <div
          className="rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg"
          style={{
            backgroundColor: cardBg,
            border: `1px solid ${cardBorder}`,
          }}
        >
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Users className="w-5 h-5" style={{ color: PRIMARY_BLUE }} />
                <span
                  className="text-sm font-semibold font-poppins uppercase tracking-wide"
                  style={{ color: PRIMARY_BLUE }}
                >
                  Shortlisted Batch
                </span>
              </div>
              <p
                className="font-normal text-base sm:text-lg leading-relaxed font-poppins"
                style={{ color: descColor }}
              >
                SHORTLISTED is HireKarma&apos;s intensive placement program for 2025/2026
                batch students who are ready to execute — not watch more videos. Each batch
                is capped at 12 students so every participant gets personalized mentoring,
                offline kickstart, and live job execution through Solviq and DISHA for 60
                days.
              </p>
            </div>
            <div className="flex-shrink-0 text-center sm:text-right">
              <p
                className="font-bold text-4xl sm:text-5xl font-poppins"
                style={{ color: titleColor }}
              >
                ₹12,000
              </p>
              <p className="text-sm font-poppins mt-1" style={{ color: descColor }}>
                one-time subscription per batch
              </p>
            </div>
          </div>

          <ul className="space-y-3 mb-8">
            {batchIncludes.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <div
                  className="flex-shrink-0 mt-0.5 flex items-center justify-center w-6 h-6 rounded-full"
                  style={{ backgroundColor: PRIMARY_BLUE }}
                >
                  <Check className="w-4 h-4 text-white stroke-[2.5]" />
                </div>
                <span
                  className="font-normal text-base sm:text-lg font-poppins leading-relaxed"
                  style={{ color: descColor }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <p className="text-sm font-poppins" style={{ color: descColor }}>
            Refunds are governed by our{" "}
            <Link
              href="/shortlisted/refund-policy"
              className="font-semibold hover:underline"
              style={{ color: PRIMARY_BLUE }}
            >
              Refund Policy
            </Link>
            . Eligibility-based admission; limited seats per batch.
          </p>
        </div>
      </div>
    </section>
  )
}
