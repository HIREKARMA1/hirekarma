import React from "react"

type GradientTextProps = {
  children: React.ReactNode
  className?: string
}

/**
 * Teal-to-purple gradient used in hero typography (e.g. "ECO").
 */
export function GradientText({ children, className = "" }: GradientTextProps) {
  return (
    <span
      className={[
        // Hero gradient: cyan -> purple -> pink
        "text-transparent bg-clip-text bg-linear-to-r from-[#00F2FF] via-[#8B5CF6] to-[#FF00E5]",
        className,
      ].join(" ")}
    >
      {children}
    </span>
  )
}

