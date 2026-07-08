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
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-[0_4px_24px_rgba(0,0,0,0.2)] ring-1 ring-white/5 transition duration-200 hover:-translate-y-1 hover:border-white/20 hover:shadow-[0_16px_40px_rgba(0,0,0,0.35)]">
      <ResourceCardVisual
        tag={item.tag}
        image={item.image}
        variant={item.visualVariant}
      />

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="mb-2 text-lg leading-snug font-semibold tracking-tight text-white">
          <Link
            href={href}
            className="transition-colors group-hover:text-[#00a2e5]"
          >
            {item.title}
          </Link>
        </h3>

        <p className="mb-5 flex-1 text-sm leading-relaxed text-white/65">
          {item.excerpt}
        </p>

        <div className="flex items-center justify-between gap-3 text-sm text-white/55">
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
