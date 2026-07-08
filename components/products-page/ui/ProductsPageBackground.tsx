"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { theme } from "@/config/theme";

import { GridBackground } from "./GridBackground";

/** Fixed page backdrop for products and resources - Aceternity grid with brand tones. */
export function ProductsPageBackground() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = !mounted || resolvedTheme === "dark";
  const baseColor = isDark ? theme.colors.heroBg : theme.colors.heroBgLight;

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden
      style={{
        background: isDark
          ? `linear-gradient(180deg, #0a0f1a 0%, ${baseColor} 50%, #040608 100%)`
          : `linear-gradient(180deg, #ffffff 0%, ${baseColor} 45%, #e8eef6 100%)`,
      }}
    >
      <GridBackground
        lineColor={
          isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(15, 23, 42, 0.06)"
        }
        fadeColor={baseColor}
      />

      <div
        className="absolute inset-0"
        style={{
          background: isDark
            ? theme.gradients.heroGlow
            : "radial-gradient(ellipse at 20% 30%, rgba(27,82,164,0.1) 0%, transparent 50%), radial-gradient(ellipse at 80% 60%, rgba(0,162,229,0.08) 0%, transparent 50%)",
        }}
      />

      <div
        className="absolute -top-24 -right-32 h-[520px] w-[520px] rounded-full blur-[140px]"
        style={{
          backgroundColor: isDark
            ? theme.colors.heroGlowPrimary
            : theme.colors.heroGlowPrimaryLight,
        }}
      />
      <div
        className="absolute top-[38%] -left-28 h-[380px] w-[380px] rounded-full blur-[120px]"
        style={{
          backgroundColor: isDark
            ? theme.colors.heroGlowSecondary
            : theme.colors.heroGlowSecondaryLight,
        }}
      />
    </div>
  );
}
