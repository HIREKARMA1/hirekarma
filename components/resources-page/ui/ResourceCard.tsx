import Link from "next/link";

import { theme } from "@/config/theme";
import type { ResourceCardVariant, ResourceHubItem } from "@/types/resources-page";
import { cn } from "@/lib/utils/cn";

import { ResourceCardVisual } from "./ResourceCardVisual";

const cardShell: Record<
  ResourceCardVariant,
  { light: string; dark: string; ring: string }
> = {
  default: {
    light: "border-blue-200 bg-linear-to-b from-blue-50 to-white",
    dark: "dark:border-blue-400/30 dark:bg-linear-to-b dark:from-blue-950/40 dark:to-[#0c1018]",
    ring: "ring-blue-100 dark:ring-blue-500/10",
  },
  alt: {
    light: "border-emerald-200 bg-linear-to-b from-emerald-50 to-white",
    dark: "dark:border-emerald-400/30 dark:bg-linear-to-b dark:from-emerald-950/40 dark:to-[#0c1018]",
    ring: "ring-emerald-100 dark:ring-emerald-500/10",
  },
  warm: {
    light: "border-orange-200 bg-linear-to-b from-orange-50 to-white",
    dark: "dark:border-orange-400/30 dark:bg-linear-to-b dark:from-orange-950/35 dark:to-[#0c1018]",
    ring: "ring-orange-100 dark:ring-orange-500/10",
  },
  sky: {
    light: "border-cyan-200 bg-linear-to-b from-cyan-50 to-white",
    dark: "dark:border-cyan-400/30 dark:bg-linear-to-b dark:from-cyan-950/40 dark:to-[#0c1018]",
    ring: "ring-cyan-100 dark:ring-cyan-500/10",
  },
  deep: {
    light: "border-rose-200 bg-linear-to-b from-rose-50 to-white",
    dark: "dark:border-rose-400/30 dark:bg-linear-to-b dark:from-rose-950/35 dark:to-[#0c1018]",
    ring: "ring-rose-100 dark:ring-rose-500/10",
  },
  gold: {
    light: "border-amber-200 bg-linear-to-b from-amber-50 to-white",
    dark: "dark:border-amber-400/30 dark:bg-linear-to-b dark:from-amber-950/30 dark:to-[#0c1018]",
    ring: "ring-amber-100 dark:ring-amber-500/10",
  },
};

interface ResourceCardProps {
  item: ResourceHubItem;
  readMoreLabel: string;
}

export function ResourceCard({ item, readMoreLabel }: ResourceCardProps) {
  const href = `/resources/blog/${item.slug}`;
  const variant = item.visualVariant;
  const accent =
    theme.resourceCardAccents[variant] ?? theme.resourceCardAccents.default;
  const shell = cardShell[variant] ?? cardShell.default;

  return (
    <article
      className={cn(
        "group flex flex-col overflow-hidden rounded-2xl border shadow-[0_4px_24px_rgba(15,23,42,0.08)] ring-1 transition duration-200 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(15,23,42,0.12)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_16px_40px_rgba(0,0,0,0.35)]",
        shell.light,
        shell.dark,
        shell.ring
      )}
    >
      <div
        className="h-1.5 w-full shrink-0"
        style={{ backgroundColor: accent.main }}
        aria-hidden
      />

      <ResourceCardVisual
        tag={item.tag}
        image={item.image}
        variant={variant}
        accentColor={accent.main}
      />

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="mb-2 text-lg leading-snug font-semibold tracking-tight text-gray-900 dark:text-white">
          <Link
            href={href}
            className="transition-colors"
            onMouseEnter={(e) => {
              e.currentTarget.style.color = accent.hover;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "";
            }}
          >
            {item.title}
          </Link>
        </h3>

        <p className="mb-5 flex-1 text-sm leading-relaxed text-slate-600 dark:text-white/65">
          {item.excerpt}
        </p>

        <div className="flex items-center justify-between gap-3 text-sm text-slate-500 dark:text-white/55">
          <time dateTime={item.dateIso}>{item.date}</time>
          <Link
            href={href}
            className="font-bold whitespace-nowrap transition-opacity hover:opacity-80"
            style={{ color: accent.main }}
          >
            {readMoreLabel}
          </Link>
        </div>
      </div>
    </article>
  );
}
