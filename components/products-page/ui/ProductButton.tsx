"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { theme } from "@/config/theme";
import { resolveHref } from "@/lib/config/env";
import { cn } from "@/lib/utils/cn";
import type { CtaLink } from "@/types/products-page";

interface ProductButtonProps {
  cta: CtaLink;
  className?: string;
  fullWidth?: boolean;
  accentColor?: string;
  accentTextColor?: string;
}

export function ProductButton({
  cta,
  className,
  fullWidth = false,
  accentColor,
  accentTextColor,
}: ProductButtonProps) {
  const href = resolveHref(cta.hrefKey);
  const isExternal = href.startsWith("http");

  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300";

  const variants: Record<CtaLink["variant"], string> = {
    primary: "hover:shadow-lg",
    outline: "border bg-transparent text-white hover:bg-white/5",
    ghost: "border border-white/30 bg-transparent text-white hover:border-white/50",
  };

  const style =
    cta.variant === "primary"
      ? {
          backgroundColor: accentColor ?? theme.colors.primary,
          color: accentTextColor ?? "#ffffff",
          borderColor: "transparent",
        }
      : cta.variant === "outline"
        ? { borderColor: "rgba(255,255,255,0.35)" }
        : undefined;

  const linkClass = cn(
    base,
    variants[cta.variant],
    fullWidth && "w-full",
    className
  );

  const content = (
    <>
      {cta.label}
      <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
    </>
  );

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClass}
        style={style}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={linkClass} style={style}>
      {content}
    </Link>
  );
}
