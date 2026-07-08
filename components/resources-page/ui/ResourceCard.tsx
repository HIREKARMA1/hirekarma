import Link from "next/link";

import type { ResourceHubItem } from "@/types/resources-page";

import { ResourceCardVisual } from "./ResourceCardVisual";

interface ResourceCardProps {
  item: ResourceHubItem;
  readMoreLabel: string;
}

export function ResourceCard({ item, readMoreLabel }: ResourceCardProps) {
  const href = `/resources/blog/${item.slug}`;

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_4px_24px_rgba(15,23,42,0.08)] ring-1 ring-slate-100 transition duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_16px_40px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-white/4 dark:shadow-[0_4px_24px_rgba(0,0,0,0.2)] dark:ring-white/5 dark:hover:border-white/20 dark:hover:shadow-[0_16px_40px_rgba(0,0,0,0.35)]">
      <ResourceCardVisual
        tag={item.tag}
        image={item.image}
        variant={item.visualVariant}
      />

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="mb-2 text-lg leading-snug font-semibold tracking-tight text-gray-900 dark:text-white">
          <Link
            href={href}
            className="transition-colors group-hover:text-[#00a2e5]"
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
            className="font-bold whitespace-nowrap text-[#f58020] transition-colors hover:text-[#f15a2b]"
          >
            {readMoreLabel}
          </Link>
        </div>
      </div>
    </article>
  );
}
