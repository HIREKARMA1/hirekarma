"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

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
  edgeColor,
  className,
}: LogoMarqueeProps) {
  const { resolvedTheme } = useTheme();
  const [isPaused, setIsPaused] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!logos.length) return null;

  const isDark = !mounted || resolvedTheme === "dark";
  const resolvedEdgeColor =
    edgeColor ?? (isDark ? theme.colors.heroBg : theme.colors.heroBgLight);

  const animationClass =
    direction === "left"
      ? "animate-partners-scroll-left"
      : "animate-partners-scroll-right";

  const gap = variant === "mono" ? "gap-1" : "gap-1";

  return (
    <div
      className={cn("relative w-full max-w-full overflow-hidden", className)}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 sm:w-20"
        style={{
          background: `linear-gradient(to right, ${resolvedEdgeColor}, transparent)`,
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 sm:w-20"
        style={{
          background: `linear-gradient(to left, ${resolvedEdgeColor}, transparent)`,
        }}
        aria-hidden
      />

      <div
        className={cn("hk-marquee-track flex w-max items-center", gap, animationClass)}
        style={{
          animationDuration: `${speedSeconds}s`,
          animationPlayState: isPaused ? "paused" : "running",
        }}
      >
        {[0, 1].map((copy) => (
          <div
            key={copy}
            className={cn("flex items-center", gap)}
            aria-hidden={copy === 1}
          >
            {logos.map((logo, index) => (
              <TrustLogoChip
                key={`${copy}-${logo.id}`}
                name={logo.name}
                logo={logo.logo}
                variant={variant}
                colorIndex={copy * logos.length + index}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
