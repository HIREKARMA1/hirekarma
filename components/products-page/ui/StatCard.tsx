import { IconBadge, getAccentColor, getProductIcon } from "./IconBadge";

import type { ImpactStat } from "@/types/products-page";

interface StatCardProps {
  stat: ImpactStat;
}

export function StatCard({ stat }: StatCardProps) {
  const Icon = getProductIcon(stat.icon);
  const color = getAccentColor(stat.accentKey);

  return (
    <div className="flex flex-col items-center gap-3 text-center sm:gap-4">
      <IconBadge icon={Icon} color={color} size="lg" />
      <div className="space-y-1">
        <p className="text-xl font-bold text-white sm:text-2xl">{stat.value}</p>
        <p className="text-xs text-white/55 sm:text-sm">{stat.label}</p>
      </div>
    </div>
  );
}
