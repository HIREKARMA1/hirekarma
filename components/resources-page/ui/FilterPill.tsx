"use client";

import { cn } from "@/lib/utils/cn";

interface FilterPillProps {
  label: string;
  active?: boolean;
  onClick: () => void;
}

export function FilterPill({ label, active = false, onClick }: FilterPillProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full border px-4 py-2 text-sm font-semibold transition-colors",
        active
          ? "border-white/30 bg-white/10 text-white"
          : "border-white/15 text-white/70 hover:border-white/25 hover:text-white"
      )}
    >
      {label}
    </button>
  );
}
