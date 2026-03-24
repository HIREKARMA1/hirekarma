import React from "react"
import Link from "next/link"

type HeroCtaButtonProps = {
  label: string
  className?: string
  href?: string
  onClick?: () => void
}

export function HeroCtaButton({
  label,
  className = "",
  href,
  onClick,
}: HeroCtaButtonProps) {
  const classes = [
    "inline-flex items-center justify-center rounded-full",
    "px-10 py-4",
    "font-bold text-white tracking-wide",
    "bg-[#00F2FF] hover:bg-[#00D8EF]",
    "shadow-[0_25px_60px_-25px_rgba(0,186,232,0.75)]",
    "transition-transform duration-200 hover:scale-[1.02]",
    "w-full sm:w-auto",
    className,
  ].join(" ")

  if (href) {
    return (
      <Link href={href} className={classes}>
        {label}
      </Link>
    )
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {label}
    </button>
  )
}

