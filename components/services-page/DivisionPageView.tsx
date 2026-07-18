"use client";

import { Info } from "lucide-react";

import { useServicesLocale } from "@/contexts/ServicesLocaleContext";
import { theme } from "@/config/theme";
import type { DivisionSectionKey } from "@/types/services-page";

import { DivisionHero } from "./ui/DivisionHero";
import {
  BulletList,
  Callout,
  CardSection,
  CaseStudyGrid,
  CrossLinks,
  FlowDiagram,
  ProcessSteps,
  ProjectShowcase,
  ServiceCta,
  ServiceTestimonial,
  StatBar,
  SubCardPair,
} from "./ui/sections";

function Band({
  children,
  tinted = false,
}: {
  children: React.ReactNode;
  tinted?: boolean;
}) {
  return (
    <section className={tinted ? "bg-[#f6f8fb]" : "bg-white"}>
      <div className="content-container py-10 sm:py-14">{children}</div>
    </section>
  );
}

export function DivisionPageView({ slug }: { slug: string }) {
  const { content } = useServicesLocale();
  const division = content.divisions[slug];

  if (!division) {
    return (
      <main className="content-container py-40 text-center">
        <h1 className="text-2xl font-bold text-[#0f1622]">Service not found</h1>
      </main>
    );
  }

  const accent = division.accent ?? theme.colors.primary;
  const breadcrumbLabel = division.hero.eyebrow ?? division.meta.title;

  const renderSection = (key: DivisionSectionKey, index: number) => {
    const tinted = index % 2 === 1;

    switch (key) {
      case "stats":
        if (!division.stats?.length) return null;
        return (
          <Band key={key} tinted={tinted}>
            <StatBar
              items={division.stats}
              accent={accent}
              note={division.statsNote}
            />
          </Band>
        );
      case "subCards":
        if (!division.subCards) return null;
        return (
          <Band key={key} tinted={tinted}>
            <SubCardPair
              heading={division.subCards.heading}
              description={division.subCards.description}
              items={division.subCards.items}
              accent={accent}
            />
          </Band>
        );
      case "modules":
        if (!division.modules) return null;
        return (
          <Band key={key} tinted={tinted}>
            <CardSection section={division.modules} accent={accent} />
          </Band>
        );
      case "process":
        if (!division.process) return null;
        return (
          <Band key={key} tinted={tinted}>
            <ProcessSteps section={division.process} accent={accent} />
          </Band>
        );
      case "cardSections":
        if (!division.cardSections?.length) return null;
        return (
          <Band key={key} tinted={tinted}>
            <div className="space-y-12">
              {division.cardSections.map((section) => (
                <CardSection
                  key={section.heading}
                  section={section}
                  accent={accent}
                />
              ))}
            </div>
          </Band>
        );
      case "cardSections2":
        if (!division.cardSections2?.length) return null;
        return (
          <Band key={key} tinted={tinted}>
            <div className="space-y-12">
              {division.cardSections2.map((section) => (
                <CardSection
                  key={section.heading}
                  section={section}
                  accent={accent}
                />
              ))}
            </div>
          </Band>
        );
      case "partners":
        if (!division.partners) return null;
        return (
          <Band key={key} tinted={tinted}>
            <CardSection section={division.partners} accent={accent} />
          </Band>
        );
      case "callout":
        if (!division.callout) return null;
        return (
          <Band key={key} tinted={tinted}>
            <Callout callout={division.callout} accent={accent} />
          </Band>
        );
      case "flow":
        if (!division.flow) return null;
        return (
          <Band key={key} tinted={tinted}>
            <FlowDiagram
              label={division.flow.label}
              heading={division.flow.heading}
              description={division.flow.description}
              steps={division.flow.steps}
              accent={accent}
            />
          </Band>
        );
      case "bulletGroups":
        if (!division.bulletGroups?.length) return null;
        return (
          <Band key={key} tinted={tinted}>
            <div className="space-y-6">
              {division.bulletGroups.map((group) => (
                <BulletList key={group.heading} group={group} accent={accent} />
              ))}
            </div>
          </Band>
        );
      case "caseStudies":
        if (!division.caseStudies) return null;
        return (
          <Band key={key} tinted={tinted}>
            <CaseStudyGrid
              heading={division.caseStudies.heading}
              description={division.caseStudies.description}
              items={division.caseStudies.items}
              accent={accent}
            />
          </Band>
        );
      case "projects":
        if (!division.projects) return null;
        return (
          <Band key={key} tinted={tinted}>
            <ProjectShowcase
              label={division.projects.label}
              heading={division.projects.heading}
              description={division.projects.description}
              items={division.projects.items}
              accent={accent}
            />
          </Band>
        );
      case "testimonial":
        if (!division.testimonial) return null;
        return (
          <Band key={key} tinted={tinted}>
            <ServiceTestimonial
              testimonial={division.testimonial}
              accent={accent}
            />
          </Band>
        );
      case "crossLinks":
        if (!division.crossLinks?.length) return null;
        return (
          <Band key={key} tinted={tinted}>
            <CrossLinks links={division.crossLinks} accent={accent} />
          </Band>
        );
      default:
        return null;
    }
  };

  const showStandaloneStatsNote =
    !!division.statsNote && !division.stats?.length;

  return (
    <main className="relative z-0 min-h-screen w-full overflow-x-clip bg-white">
      <DivisionHero
        hero={division.hero}
        accent={accent}
        breadcrumbLabel={breadcrumbLabel}
      />

      {showStandaloneStatsNote ? (
        <div className="content-container">
          <div className="flex items-start gap-2.5 rounded-2xl border border-[#fde68a] bg-[#fffbeb] px-4 py-3 text-sm text-[#92400e]">
            <Info className="mt-0.5 h-4 w-4 shrink-0" />
            <span>{division.statsNote}</span>
          </div>
        </div>
      ) : null}

      {division.order.map((key, index) => renderSection(key, index))}

      <section className="bg-white">
        <div className="content-container pb-16 pt-4 sm:pb-20">
          <ServiceCta cta={division.cta} accent={accent} />
        </div>
      </section>
    </main>
  );
}
