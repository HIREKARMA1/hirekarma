"use client";

import Image from "next/image";
import {
  Briefcase,
  Building2,
  GraduationCap,
  MapPin,
  Sparkles,
  Users,
} from "lucide-react";

import { useAboutLocale } from "@/contexts/AboutLocaleContext";
import { theme } from "@/config/theme";
import type { AboutOfficeCard } from "@/types/about-page";

const pillarIcons = [GraduationCap, Users, Briefcase] as const;

const badgeColor: Record<AboutOfficeCard["badgeTone"], string> = {
  primary: theme.colors.primary,
  green: theme.colors.green,
  secondary: theme.colors.secondary,
};

function OfficeCard({ office }: { office: AboutOfficeCard }) {
  const accent = badgeColor[office.badgeTone];

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] shadow-[0_16px_40px_rgba(0,0,0,0.25)]">
      <div className="relative h-44 overflow-hidden sm:h-48">
        <Image
          src={office.image}
          alt={office.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1622] via-transparent to-transparent" />
        <span
          className="absolute left-3 top-3 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white shadow-md"
          style={{ backgroundColor: accent }}
        >
          {office.badge}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-4 px-5 pb-5 pt-4">
        <div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" style={{ color: accent }} />
            <h3 className="text-lg font-bold text-white">{office.city}</h3>
          </div>
          <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-white/80">
            {office.role}
          </p>
          <p className="mt-3 text-[13px] leading-relaxed text-white/90">
            {office.description}
          </p>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
          <div className="flex items-start gap-2.5">
            <Building2
              className="mt-0.5 h-4 w-4 shrink-0"
              style={{ color: theme.colors.secondary }}
            />
            <p className="text-[12px] leading-relaxed text-white/90">
              {office.address}
            </p>
          </div>
        </div>

        <div className="mt-auto rounded-xl border border-white/10 bg-white/[0.03] p-3">
          <div className="flex items-start gap-2.5">
            <Sparkles
              className="mt-0.5 h-4 w-4 shrink-0"
              style={{ color: accent }}
            />
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wide text-white/80">
                {office.whyTitle}
              </p>
              <p className="mt-1 text-[12px] leading-relaxed text-white/90">
                {office.whyBody}
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function LocationsOfficesSection() {
  const { content } = useAboutLocale();
  const { section, pillars, offices } = content.locations;
  const ink = theme.colors.ink;

  return (
    <section className="relative w-full" style={{ backgroundColor: ink }}>
      <div className="content-container pb-8 pt-0 sm:pb-10">
        <div className="mx-auto max-w-xl text-center">
          <p
            className="text-[10px] font-semibold uppercase tracking-[0.18em]"
            style={{ color: theme.colors.secondary }}
          >
            {section.label}
          </p>
          <h2 className="mt-1.5 text-xl font-bold tracking-tight text-white sm:text-2xl">
            {section.heading}
          </h2>
          <div
            className="mx-auto mt-2.5 h-1 w-12 rounded-full"
            style={{ backgroundColor: theme.colors.primary }}
            aria-hidden
          />
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          {pillars.map((pillar, index) => {
            const Icon = pillarIcons[index] ?? Users;
            return (
              <div
                key={pillar.id}
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3.5 text-center sm:text-left"
              >
                <span
                  className="mx-auto mb-2.5 flex h-9 w-9 items-center justify-center rounded-xl text-white sm:mx-0"
                  style={{ backgroundColor: theme.colors.primary }}
                >
                  <Icon className="h-4 w-4" />
                </span>
                <h3 className="text-sm font-bold text-white">{pillar.title}</h3>
                <p className="mt-1 text-[12px] leading-snug text-white/85">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {offices.map((office) => (
            <OfficeCard key={office.id} office={office} />
          ))}
        </div>
      </div>
    </section>
  );
}
