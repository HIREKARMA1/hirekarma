"use client";

import { getProductAccent } from "@/config/theme";
import type { ItServiceItem } from "@/types/other-initiatives-page";
import { FeatureCheckList } from "@/components/products-page/ui/FeatureCheckList";
import {
  getAccentColor,
  getProductIcon,
  IconBadge,
} from "@/components/products-page/ui/IconBadge";
import { CardBody, CardContainer, CardItem } from "@/components/products-page/ui/3d-card";

interface ItServiceCardProps {
  service: ItServiceItem;
}

export function ItServiceCard({ service }: ItServiceCardProps) {
  const accent = getProductAccent(service.accentKey);
  const Icon = getProductIcon(service.icon);
  const iconColor = getAccentColor(service.accentKey);

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
          <IconBadge
            icon={Icon}
            color={iconColor}
            size="md"
            className="mb-4 shadow-[0_0_16px_rgba(0,0,0,0.15)]"
          />
          <h3 className="text-lg font-bold tracking-tight text-gray-900 dark:text-white sm:text-xl">
            {service.title}
          </h3>
          <p
            className="mt-0.5 text-[11px] font-semibold uppercase tracking-[0.12em] sm:text-xs sm:tracking-[0.14em]"
            style={{ color: accent.main }}
          >
            {service.subtitle}
          </p>
        </CardItem>

        <CardItem
          translateZ={50}
          className="relative flex flex-1 flex-col px-5 pb-5 pt-3 sm:px-6 sm:pb-6"
        >
          <p className="mb-4 text-sm leading-relaxed text-slate-600 dark:text-white/70 sm:text-[15px]">
            {service.description}
          </p>
          <FeatureCheckList features={service.features} accentColor={accent.main} />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
