"use client";

import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  Cpu,
  Globe,
  GraduationCap,
  Users,
} from "lucide-react";

import { theme } from "@/config/theme";
import { useImpactLocale } from "@/contexts/ImpactLocaleContext";
import type { ImpactDivisionStat } from "@/types/impact-page";

const iconMap: Record<ImpactDivisionStat["icon"], typeof Briefcase> = {
  briefcase: Briefcase,
  graduation: GraduationCap,
  cpu: Cpu,
  globe: Globe,
  users: Users,
  book: BookOpen,
};

export function ImpactHeroSection() {
  const { content } = useImpactLocale();
  const { hero } = content;
  const accent = theme.colors.secondary;

  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: theme.colors.ink }}
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div
          className="absolute inset-0 opacity-35"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,162,229,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,162,229,0.05) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div
          className="absolute -left-20 top-0 h-80 w-80 rounded-full blur-[110px]"
          style={{ backgroundColor: "rgba(27,82,164,0.4)" }}
        />
        <div
          className="absolute right-0 top-1/4 h-72 w-72 rounded-full blur-[100px]"
          style={{ backgroundColor: "rgba(0,162,229,0.22)" }}
        />
      </div>

      <div className="relative content-container pb-8 pt-6 lg:pb-10 lg:pt-8">
        <div className="flex flex-col items-start gap-5 lg:flex-row lg:items-center lg:gap-5 xl:gap-6">
          <div className="min-w-0 flex-1 space-y-4">
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.2em]"
              style={{ color: accent }}
            >
              {hero.label}
            </p>

            <h1 className="text-[1.85rem] font-bold leading-[1.15] tracking-tight text-white sm:text-[2.15rem] lg:text-[2.35rem] xl:whitespace-nowrap">
              {hero.heading}{" "}
              <span style={{ color: accent }}>{hero.headingAccent}</span>
            </h1>

            <p className="max-w-2xl whitespace-pre-line text-sm leading-snug text-white/90 sm:text-[15px]">
              {hero.description}
            </p>

            <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center">
              <Link
                href={hero.primaryCta.href}
                className="inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-110"
                style={{ backgroundColor: accent }}
              >
                {hero.primaryCta.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={hero.secondaryCta.href}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-white/55 hover:bg-white/5"
              >
                {hero.secondaryCta.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="flex items-start gap-2.5 pt-1 text-sm text-white/85">
              <span
                className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
                style={{ backgroundColor: "rgba(0,162,229,0.15)" }}
              >
                <Users className="h-3.5 w-3.5" style={{ color: accent }} />
              </span>
              <p className="leading-snug">{hero.note}</p>
            </div>
          </div>

          {/* Overview tablet — sits tight beside copy */}
          <div className="w-full shrink-0 sm:mx-auto sm:max-w-[400px] lg:mx-0 lg:w-[min(100%,400px)] xl:w-[420px]">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#121826] p-3 shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
              <div className="rounded-xl bg-[#0d121c] p-3.5 sm:p-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/80">
                  {hero.overviewTitle}
                </p>

                <div className="mt-3 grid grid-cols-2 gap-2">
                  {hero.overviewStats.map((stat) => (
                    <div
                      key={stat.id}
                      className="rounded-lg border border-white/8 bg-white/[0.03] px-2.5 py-2"
                    >
                      <p
                        className="text-lg font-bold leading-none"
                        style={{ color: accent }}
                      >
                        {stat.value}
                      </p>
                      <p className="mt-1 text-[10px] leading-snug text-white/85">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                <p className="mt-3.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/90">
                  {hero.divisionsTitle}
                </p>
                <div className="mt-2 grid grid-cols-3 gap-1.5">
                  {hero.divisions.map((div) => {
                    const Icon = iconMap[div.icon];
                    return (
                      <div
                        key={div.id}
                        className="rounded-md border border-white/8 bg-white/[0.03] px-1.5 py-1.5 text-center"
                      >
                        <Icon
                          className="mx-auto h-3.5 w-3.5"
                          style={{ color: accent }}
                        />
                        <p className="mt-1 truncate text-[9px] text-white/85">
                          {div.label}
                        </p>
                        <p className="text-[11px] font-bold text-white">
                          {div.count}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <p className="mt-3.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/90">
                  {hero.snapshotTitle}
                </p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {hero.snapshotStats.map((stat) => (
                    <span
                      key={stat.id}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-2 py-1 text-[10px] text-white/90"
                    >
                      <span className="font-bold text-white">{stat.value}</span>{" "}
                      {stat.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
