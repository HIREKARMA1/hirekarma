"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

import { theme } from "@/config/theme";
import { useImpactLocale } from "@/contexts/ImpactLocaleContext";

function FilterPill({
  active,
  label,
  onClick,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-3 py-1.5 text-[12px] font-semibold transition ${
        active
          ? "border-transparent text-white"
          : "border-[#e6e8ec] bg-white text-[#0f1622]/70 hover:border-[#00a2e5]/40"
      }`}
      style={
        active
          ? { backgroundColor: theme.colors.primary }
          : undefined
      }
    >
      {label}
    </button>
  );
}

export function ImpactBrowseSection() {
  const { content } = useImpactLocale();
  const { browse } = content;
  const [division, setDivision] = useState("all");
  const [type, setType] = useState("all");
  const accent = theme.colors.secondary;

  const stories = useMemo(() => {
    return browse.stories.filter((story) => {
      const divisionOk = division === "all" || story.divisionId === division;
      const typeOk = type === "all" || story.typeId === type;
      return divisionOk && typeOk;
    });
  }, [browse.stories, division, type]);

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

        <div className="mt-6 space-y-3">
          <div>
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-[#0f1622]/45">
              {browse.divisionFiltersLabel}
            </p>
            <div className="flex flex-wrap gap-2">
              {browse.divisionFilters.map((filter) => (
                <FilterPill
                  key={filter.id}
                  label={filter.label}
                  active={division === filter.id}
                  onClick={() => setDivision(filter.id)}
                />
              ))}
            </div>
          </div>
          <div>
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-[#0f1622]/45">
              {browse.typeFiltersLabel}
            </p>
            <div className="flex flex-wrap gap-2">
              {browse.typeFilters.map((filter) => (
                <FilterPill
                  key={filter.id}
                  label={filter.label}
                  active={type === filter.id}
                  onClick={() => setType(filter.id)}
                />
              ))}
            </div>
          </div>
        </div>

        {stories.length === 0 ? (
          <p className="mt-10 text-sm text-[#0f1622]/55">{browse.empty}</p>
        ) : (
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {stories.map((story) => (
              <article
                key={story.id}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#e6e8ec] bg-white shadow-[0_8px_28px_rgba(15,22,34,0.06)] transition hover:border-[#00a2e5]/35 hover:shadow-[0_14px_36px_rgba(15,22,34,0.1)]"
              >
                <div className="relative h-44 overflow-hidden bg-[#f6f8fb]">
                  <Image
                    src={story.image}
                    alt={story.imageAlt}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute right-2.5 top-2.5 flex flex-wrap justify-end gap-1.5">
                    <span
                      className="rounded-full px-2 py-0.5 text-[10px] font-bold text-white"
                      style={{ backgroundColor: theme.colors.primary }}
                    >
                      {story.divisionLabel}
                    </span>
                    <span className="rounded-full bg-white/95 px-2 py-0.5 text-[10px] font-bold text-[#0f1622]">
                      {story.typeLabel}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col px-4 pb-4 pt-3.5">
                  <h3 className="text-[1.05rem] font-bold tracking-tight text-[#0f1622]">
                    {story.title}
                  </h3>
                  <p className="mt-1 flex items-center gap-1 text-[12px] text-[#0f1622]/50">
                    <MapPin className="h-3 w-3 shrink-0" style={{ color: accent }} />
                    {story.location}
                  </p>
                  <p className="mt-2 line-clamp-3 text-[13px] leading-snug text-[#0f1622]/60">
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
