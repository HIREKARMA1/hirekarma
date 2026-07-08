"use client";

import { useResourcesLocale } from "@/contexts/ResourcesLocaleContext";

import { ResourceCard } from "../ui/ResourceCard";
import { ResourcesCtaBand } from "../ui/ResourcesCtaBand";

export function ResourcesBrowseSection() {
  const { content } = useResourcesLocale();
  const { browse, items, cta } = content;

  return (
    <section className="relative py-12 sm:py-16 lg:py-20">
      <div className="relative z-10 content-container">
        <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl dark:text-white">
          {browse.title}
        </h2>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-3 sm:mt-8">
          {items.map((item) => (
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
