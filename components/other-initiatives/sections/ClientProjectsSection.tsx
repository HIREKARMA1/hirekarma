"use client";

import { useOtherInitiativesLocale } from "@/contexts/OtherInitiativesLocaleContext";
import { theme } from "@/config/theme";
import { ProductsSectionHeader } from "@/components/products-page/ui/ProductsSectionHeader";
import { ClientProjectCard } from "../ui/ClientProjectCard";

export function ClientProjectsSection() {
  const { content } = useOtherInitiativesLocale();
  const { projectsSection } = content;

  return (
    <section className="relative w-full max-w-full py-14 sm:py-16 lg:py-20">
      <div className="relative z-10 content-container">
        <ProductsSectionHeader
          label={projectsSection.label}
          heading={projectsSection.heading}
          accentColor={theme.colors.red}
        />

        <p className="mb-10 max-w-3xl text-base leading-relaxed text-slate-600 dark:text-white/70 sm:mb-12 sm:text-lg">
          {projectsSection.description}
        </p>

        <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {projectsSection.items.map((project) => (
            <ClientProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
