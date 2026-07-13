"use client";

import { theme } from "@/config/theme";
import type { Locale } from "@/types/products-page";

import type { ImpactStat } from "@/types/products-page";
import { IconBadge, getProductIcon } from "./IconBadge";
import { NumberTicker } from "./NumberTicker";

/** Brand palette - one solid color per impact stat card. */
const STAT_PALETTE = [
  theme.colors.primary,
  theme.colors.secondary,
  theme.colors.orange,
  theme.colors.yellow,
  theme.colors.green,
] as const;

interface StatCardProps {
  stat: ImpactStat;
  colorIndex: number;
  locale: Locale;
}

export function StatCard({ stat, colorIndex, locale }: StatCardProps) {
  const Icon = getProductIcon(stat.icon);
  const color = STAT_PALETTE[colorIndex % STAT_PALETTE.length];

  return (
    <div className="group relative flex flex-col items-center overflow-hidden rounded-2xl border border-slate-200 bg-white px-3 py-5 text-center shadow-[0_4px_24px_rgba(15,23,42,0.08)] backdrop-blur-sm transition-colors duration-300 hover:border-slate-300 hover:bg-slate-50 dark:border-white/10 dark:bg-white/[0.04] dark:shadow-[0_4px_24px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.05)] dark:hover:border-white/15 dark:hover:bg-white/[0.06] sm:rounded-3xl sm:px-4 sm:py-6">
      <div
        className="absolute inset-x-0 top-0 h-0.5 opacity-90"
        style={{ backgroundColor: color }}
        aria-hidden
      />

      <IconBadge
        icon={Icon}
        color={color}
        size="md"
        className="mb-3 shadow-[0_0_16px_rgba(0,0,0,0.2)] sm:mb-4"
      />

      <NumberTicker
        value={stat.value}
        locale={locale}
        className="text-xl font-bold tabular-nums tracking-tight sm:text-2xl lg:text-3xl"
        style={{ color }}
      />
      <p className="mt-1.5 text-[11px] font-medium leading-snug text-slate-600 sm:text-xs dark:text-white/60 sm:dark:text-white/55">
        {stat.label}
      </p>
    </div>
  );
}
