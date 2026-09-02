"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

import { theme } from "@/config/theme";
import { useImpactLocale } from "@/contexts/ImpactLocaleContext";

export function ImpactBrowseSection() {
  const { content } = useImpactLocale();
  const { browse } = content;
  const accent = theme.colors.secondary;

  return (
    <section id="browse-stories" className="scroll-mt-24 bg-white py-10 sm:py-12">
      <div className="content-container">
        <div className="max-w-2xl">
          <p
            className="text-[11px] font-semibold uppercase tracking-[0.18em]"
            style={{ color: accent }}
          >
            {browse.label}
          </p>
          <h2 className="mt-1.5 text-2xl font-bold tracking-tight text-[#0f1622] sm:text-[1.75rem]">
            {browse.heading}
          </h2>
        </div>

        {browse.stories.length === 0 ? (
          <p className="mt-10 text-sm text-[#475569]">{browse.empty}</p>
        ) : (
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {browse.stories.map((story) => (
              <article
                key={story.id}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#e6e8ec] bg-white shadow-[0_8px_28px_rgba(15,22,34,0.06)] transition hover:border-[#00a2e5]/35 hover:shadow-[0_14px_36px_rgba(15,22,34,0.1)]"
              >
                <div className="relative aspect-video overflow-hidden bg-[#f6f8fb]">
                  {story.image ? (
                    <Image
                      src={story.image}
                      alt={story.imageAlt}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  ) : (
                    <div
                      className="flex h-full w-full items-center justify-center"
                      style={{ background: theme.gradients.brand }}
                      aria-hidden
                    >
                      <span className="text-4xl font-bold tracking-tight text-white/90">
                        {story.title
                          .split(/\s+/)
                          .filter(Boolean)
                          .slice(0, 2)
                          .map((part) => part[0])
                          .join("")
                          .toUpperCase()}
                      </span>
                    </div>
                  )}
                  <div className="absolute bottom-2.5 left-2.5 flex flex-wrap gap-1.5">
                    <span
                      className="rounded-full px-2.5 py-0.5 text-[10px] font-bold text-white shadow-sm"
                      style={{ backgroundColor: theme.colors.primary }}
                    >
                      {story.divisionLabel}
                    </span>
                    <span className="rounded-full bg-white/95 px-2.5 py-0.5 text-[10px] font-bold text-[#0f1622] shadow-sm backdrop-blur-sm">
                      {story.typeLabel}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col px-4 pb-4 pt-3.5">
                  <h3 className="text-[1.05rem] font-bold tracking-tight text-[#0f1622]">
                    {story.title}
                  </h3>
                  <p className="mt-1 flex items-center gap-1.5 text-[12px] font-medium text-[#475569]">
                    <MapPin className="h-3.5 w-3.5 shrink-0" style={{ color: accent }} />
                    <span>{story.location}</span>
                  </p>
                  <p className="mt-2 line-clamp-3 text-[13px] leading-snug text-[#334155]">
                    {story.summary}
                  </p>
                  <Link
                    href={`/impact/${story.slug}`}
                    className="mt-auto inline-flex items-center gap-1.5 pt-3.5 text-sm font-semibold transition hover:gap-2"
                    style={{ color: theme.colors.primary }}
                  >
                    {story.readMore}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
