import React from "react"
import { GradientText } from "./GradientText"

type HeroHeadlineProps = {
  isDark: boolean
  headlineLines: Array<{
    text: string
    variant: "white" | "gradient"
  }>
}

export function HeroHeadline({ isDark, headlineLines }: HeroHeadlineProps) {
  const white = isDark ? "text-white" : "text-gray-900"
  return (
    <h1
      className={[
        "font-bold leading-[0.95] tracking-tight text-center",
        "text-[44px] sm:text-[64px] md:text-[72px] lg:text-[116px] tracking-wider",
      ].join(" ")}
      aria-label="Transforming Talent Ecosystems"
    >
      {headlineLines.map((line, idx) => (
        <span key={`${line.text}-${idx}`} className="block">
          {line.variant === "gradient" ? (
            <GradientText>{line.text}</GradientText>
          ) : (
            <span className={white}>{line.text}</span>
          )}
        </span>
      ))}
    </h1>
  )
}

