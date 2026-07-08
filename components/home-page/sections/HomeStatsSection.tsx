"use client";

import { theme } from "@/config/theme";
import { useHomeLocale } from "@/contexts/HomeLocaleContext";
import { IconBadge, getProductIcon } from "@/components/products-page/ui/IconBadge";
import { NumberTicker } from "@/components/products-page/ui/NumberTicker";

const STAT_PALETTE = [
  theme.colors.primary,
  theme.colors.secondary,
  theme.colors.orange,
  theme.colors.yellow,
  theme.colors.green,
  theme.colors.red,
] as const;

export function HomeStatsSection() {
  const { content } = useHomeLocale();

  return (
    <section className="relative border-y border-white/10 bg-[#070b14]/80 py-8 sm:py-10">
      <div className="content-container relative z-10">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 lg:gap-4">
          {content.stats.map((stat, index) => {
            const color = STAT_PALETTE[index % STAT_PALETTE.length];
            const Icon = getProductIcon(stat.icon);
            return (
              <div
                key={stat.id}
                className="group relative flex flex-col items-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-5 text-center backdrop-blur-sm sm:rounded-3xl sm:px-4 sm:py-6"
              >
                <div
                  className="absolute inset-x-0 top-0 h-0.5 opacity-90"
                  style={{ backgroundColor: color }}
                  aria-hidden
                />
                <IconBadge
                  icon={Icon}
                  color={color}
                  size="md"
                  className="mb-3 sm:mb-4"
                />
                <NumberTicker
                  value={stat.value}
                  className="text-xl font-bold tabular-nums tracking-tight sm:text-2xl lg:text-3xl"
                  style={{ color }}
                />
                <p className="mt-1.5 text-[11px] font-medium leading-snug text-white/60 sm:text-xs">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
