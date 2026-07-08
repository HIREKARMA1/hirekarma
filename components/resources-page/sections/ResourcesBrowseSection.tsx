"use client";

import { useResourcesLocale } from "@/contexts/ResourcesLocaleContext";

import { ResourceCard } from "../ui/ResourceCard";
import { ResourcesCtaBand } from "../ui/ResourcesCtaBand";

export function ResourcesBrowseSection() {
  const { content } = useResourcesLocale();
  const { browse, items, cta } = content;

  return (
    <section className="relative py-7 sm:py-9 lg:py-10">
      <div className="relative z-10 content-container">
        <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl dark:text-white">
          {browse.title}
        </h2>

        <div className="mt-4 grid gap-5 sm:mt-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3">
          {items.map((item) => (
            <ResourceCard
              key={item.id}
              item={item}
              readMoreLabel={browse.readMore}
            />
          ))}
        </div>

        <div className="mt-10 sm:mt-12">
          <ResourcesCtaBand cta={cta} />
        </div>
      </div>
    </section>
  );
}
