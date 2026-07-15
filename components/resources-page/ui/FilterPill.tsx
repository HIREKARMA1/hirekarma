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
          ? "border-slate-900 bg-slate-900 text-white dark:border-white/30 dark:bg-white/10 dark:text-white"
          : "border-slate-300 text-slate-600 hover:border-slate-400 hover:text-slate-900 dark:border-white/15 dark:text-white/90 dark:hover:border-white/25 dark:hover:text-white"
      )}
    >
      {label}
    </button>
  );
}
