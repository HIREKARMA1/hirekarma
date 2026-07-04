import { Check } from "lucide-react";

import { cn } from "@/lib/utils/cn";

interface FeatureCheckItemProps {
  text: string;
  accentColor: string;
  className?: string;
}

export function FeatureCheckItem({
  text,
  accentColor,
  className,
}: FeatureCheckItemProps) {
  return (
    <li className={cn("flex items-start gap-3 text-sm leading-relaxed", className)}>
      <span
        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
        style={{ backgroundColor: `${accentColor}18`, color: accentColor }}
      >
        <Check className="h-3 w-3" strokeWidth={3} aria-hidden />
      </span>
      <span className="text-gray-600">{text}</span>
    </li>
  );
}
