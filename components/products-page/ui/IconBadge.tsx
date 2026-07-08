import {
  Briefcase,
  Building2,
  Cpu,
  GraduationCap,
  MapPin,
  ShieldCheck,
  Users,
  type LucideIcon,
} from "lucide-react";

import { theme } from "@/config/theme";
import { getProductAccent } from "@/config/theme";
import { cn } from "@/lib/utils/cn";
import type { ImpactStat, ProductItem } from "@/types/products-page";

const iconMap: Record<string, LucideIcon> = {
  "graduation-cap": GraduationCap,
  cpu: Cpu,
  "shield-check": ShieldCheck,
  users: Users,
  briefcase: Briefcase,
  building: Building2,
  "map-pin": MapPin,
};

export function getProductIcon(name: string) {
  return iconMap[name] ?? Cpu;
}

export function getAccentColor(
  key: ImpactStat["accentKey"] | ProductItem["accentKey"]
): string {
  if (key === "primary") return theme.colors.primary;
  return getProductAccent(key).main;
}

interface IconBadgeProps {
  icon: LucideIcon;
  color: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const badgeSizes = {
  sm: "h-9 w-9",
  md: "h-11 w-11",
  lg: "h-12 w-12",
};

const iconSizes = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-6 w-6",
};

export function IconBadge({
  icon: Icon,
  color,
  size = "md",
  className,
}: IconBadgeProps) {
  return (
    <span
      className={cn(
        "flex shrink-0 items-center justify-center rounded-xl",
        badgeSizes[size],
        className
      )}
      style={{
        backgroundColor: `${color}14`,
        color,
        border: `1px solid ${color}30`,
      }}
    >
      <Icon className={iconSizes[size]} aria-hidden />
    </span>
  );
}
