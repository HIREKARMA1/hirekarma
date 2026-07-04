"use client";

import { useState } from "react";

import { theme } from "@/config/theme";
import { cn } from "@/lib/utils/cn";
import type { TrustLogo, TrustSettings } from "@/types/products-page";
import { TrustLogoChip } from "./TrustLogoChip";

interface LogoMarqueeProps {
  logos: TrustLogo[];
  speedSeconds?: number;
  direction?: "left" | "right";
  variant?: TrustSettings["variant"];
  edgeColor?: string;
  className?: string;
}

export function LogoMarquee({
  logos,
  speedSeconds = 40,
  direction = "left",
  variant = "mono",
  edgeColor = theme.colors.heroBg,
  className,
}: LogoMarqueeProps) {
  const [isPaused, setIsPaused] = useState(false);

  if (!logos.length) return null;

  const animationClass =
    direction === "left"
      ? "animate-partners-scroll-left"
      : "animate-partners-scroll-right";

  const gap = variant === "mono" ? "gap-5 sm:gap-8 md:gap-12" : "gap-5 sm:gap-6";

  return (
    <div
      className={cn("relative w-full max-w-full overflow-hidden", className)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 sm:w-20"
        style={{ background: `linear-gradient(to right, ${edgeColor}, transparent)` }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 sm:w-20"
        style={{ background: `linear-gradient(to left, ${edgeColor}, transparent)` }}
        aria-hidden
      />

      <div
        className={cn("flex w-max items-center", gap, animationClass)}
        style={{
          animationDuration: `${speedSeconds}s`,
          animationPlayState: isPaused ? "paused" : "running",
        }}
      >
        {[0, 1].map((copy) => (
          <div key={copy} className={cn("flex items-center", gap)} aria-hidden={copy === 1}>
            {logos.map((logo) => (
              <TrustLogoChip
                key={`${copy}-${logo.id}`}
                name={logo.name}
                logo={logo.logo}
                variant={variant}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
