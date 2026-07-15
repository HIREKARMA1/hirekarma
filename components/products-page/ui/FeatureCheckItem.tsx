import { Check } from "lucide-react";

import { cn } from "@/lib/utils/cn";

interface FeatureCheckItemProps {
  text: string;
  accentColor: string;
  className?: string;
  variant?: "light" | "dark";
}

export function FeatureCheckItem({
  text,
  accentColor,
  className,
  variant = "light",
}: FeatureCheckItemProps) {
  return (
    <li className={cn("flex items-start gap-2.5 text-[13px] leading-snug sm:text-sm sm:leading-relaxed", className)}>
      <span
        className="mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full sm:h-5 sm:w-5"
        style={{ backgroundColor: `${accentColor}20`, color: accentColor }}
      >
        <Check className="h-2.5 w-2.5 sm:h-3 sm:w-3" strokeWidth={3} aria-hidden />
      </span>
      <span
        className={
          variant === "dark"
            ? "text-slate-600 dark:text-white/90"
            : "text-gray-600"
        }
      >
        {text}
      </span>
    </li>
  );
}
