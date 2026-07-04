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
        <p className="text-xl font-bold text-gray-900 sm:text-2xl">{stat.value}</p>
        <p className="text-xs text-gray-500 sm:text-sm">{stat.label}</p>
      </div>
    </div>
  );
}
