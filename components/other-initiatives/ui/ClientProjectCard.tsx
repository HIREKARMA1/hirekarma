"use client";

import Image from "next/image";

import { getProductAccent } from "@/config/theme";
import type { ClientProjectItem } from "@/types/other-initiatives-page";
import { CardBody, CardContainer, CardItem } from "@/components/products-page/ui/3d-card";
import { InitiativeButton } from "./InitiativeButton";

interface ClientProjectCardProps {
  project: ClientProjectItem;
}

export function ClientProjectCard({ project }: ClientProjectCardProps) {
  const accent = getProductAccent(project.accentKey);

  return (
    <CardContainer containerClassName="h-full w-full py-0" className="h-full w-full">
      <CardBody className="group/card relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-linear-to-b from-white via-slate-50 to-white shadow-[0_4px_24px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:from-white/[0.08] dark:via-[#0d1118]/95 dark:to-[#080b10]/98 dark:shadow-[0_4px_24px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.06)] sm:rounded-3xl">
        <div
          className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-50 blur-3xl transition-opacity duration-500 group-hover/card:opacity-80"
          style={{ backgroundColor: `${accent.main}55` }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-0.5 opacity-80"
          style={{ backgroundColor: accent.main }}
          aria-hidden
        />

        <CardItem translateZ={45} className="relative w-full px-5 pb-0 pt-5">
          <span
            className="mb-3 inline-flex rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide"
            style={{
              backgroundColor: accent.bg,
              color: accent.main,
              border: `1px solid ${accent.border}`,
            }}
          >
            {project.clientType}
          </span>
          <h3 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white sm:text-xl">
            {project.title}
          </h3>
          <p
            className="mt-0.5 text-[11px] font-semibold uppercase tracking-[0.12em] sm:text-xs sm:tracking-[0.14em]"
            style={{ color: accent.main }}
          >
            {project.subtitle}
          </p>
        </CardItem>

        <CardItem translateZ={75} className="relative w-full px-4 pt-3 sm:px-5 sm:pt-4">
          <div
            className="overflow-hidden rounded-xl border p-1 shadow-[0_16px_48px_rgba(15,23,42,0.12)] dark:shadow-[0_16px_48px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.08)]"
            style={{
              borderColor: accent.border,
              backgroundColor: accent.bg,
            }}
          >
            <div className="relative aspect-[18/10] overflow-hidden rounded-lg bg-slate-100 dark:bg-[#0a0e14]">
              <Image
                src={project.image}
                alt={`${project.title} preview`}
                fill
                className="object-cover object-center transition-transform duration-500 group-hover/card:scale-[1.02]"
                sizes="(max-width: 768px) 90vw, 33vw"
                unoptimized={project.image.startsWith("https://")}
              />
            </div>
          </div>
        </CardItem>

        <CardItem
          translateZ={50}
          className="relative flex flex-1 flex-col px-5 pb-5 pt-4 sm:px-6 sm:pb-6"
        >
          <p className="mb-5 flex-1 text-sm leading-relaxed text-slate-600 dark:text-white/70 sm:text-[15px]">
            {project.description}
          </p>
          <InitiativeButton
            cta={project.cta}
            accentColor={accent.main}
            accentTextColor={accent.contrastText}
            fullWidth
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
