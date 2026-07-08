"use client";

import { useMemo, useState } from "react";

import { useResourcesLocale } from "@/contexts/ResourcesLocaleContext";

import { FilterPill } from "../ui/FilterPill";
import { ResourceCard } from "../ui/ResourceCard";
import { ResourcesCtaBand } from "../ui/ResourcesCtaBand";

export function ResourcesBrowseSection() {
  const { content } = useResourcesLocale();
  const { browse, items, cta } = content;
  const [activeFilter, setActiveFilter] = useState(browse.filters[0]?.id ?? "all");

  const visibleItems = useMemo(() => {
    if (activeFilter === "all") return items;
    return items.filter((item) => item.category === activeFilter);
  }, [activeFilter, items]);

  return (
    <section className="relative py-12 sm:py-16 lg:py-20">
      <div className="relative z-10 content-container">
        <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
          {browse.title}
        </h2>

        <div
          className="mt-6 mb-8 flex flex-wrap gap-2"
          role="tablist"
          aria-label={browse.title}
        >
          {browse.filters.map((filter) => (
            <FilterPill
              key={filter.id}
              label={filter.label}
              active={activeFilter === filter.id}
              onClick={() => setActiveFilter(filter.id)}
            />
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {visibleItems.map((item) => (
            <ResourceCard
              key={item.id}
              item={item}
              readMoreLabel={browse.readMore}
            />
          ))}
        </div>

        <div className="mt-12 sm:mt-16">
          <ResourcesCtaBand cta={cta} />
        </div>
      </div>
    </section>
  );
}
