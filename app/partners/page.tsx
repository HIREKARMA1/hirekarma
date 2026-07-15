"use client";

import Link from "next/link";
import {
  ArrowRight,
  Award,
  Briefcase,
  GraduationCap,
  Handshake,
} from "lucide-react";

import PartnersMarquee from "@/components/layout/PartnersMarquee";
import { withHighlightMark } from "@/components/shared/HighlightMark";
import {
  PartnersLocaleProvider,
  usePartnersLocale,
} from "@/contexts/PartnersLocaleContext";
import { localizeNumerals } from "@/lib/i18n/localizeNumerals";
import corporateData from "@/data/corporate.json";
import companyData from "@/data/company.json";
import { theme } from "@/config/theme";

type LogoPartner = { id: number | string; name: string; logo: string };

function PartnersPageInner() {
  const { locale, content } = usePartnersLocale();
  const { hero, stats, college, corporate, mission, cta } = content;
  const ink = theme.colors.ink;
  const primary = theme.colors.primary;
  const accent = theme.colors.secondary;
  const universities = corporateData.corpo as LogoPartner[];
  const corporates = companyData.conpanies as LogoPartner[];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ backgroundColor: ink }}>
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
            className="absolute -left-20 top-0 h-72 w-72 rounded-full blur-[110px]"
            style={{ backgroundColor: "rgba(27,82,164,0.4)" }}
          />
          <div
            className="absolute right-0 top-1/4 h-64 w-64 rounded-full blur-[100px]"
            style={{ backgroundColor: "rgba(0,162,229,0.22)" }}
          />
        </div>

        <div className="relative content-container pb-10 pt-6 lg:pb-12 lg:pt-8">
          <div className="mx-auto max-w-3xl text-center">
            <p
              className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em]"
              style={{ color: accent }}
            >
              <Handshake className="h-3.5 w-3.5" />
              {hero.badge}
            </p>
            <h1 className="mt-3 text-[1.9rem] font-bold leading-[1.15] tracking-tight text-white sm:text-[2.35rem] lg:text-[2.6rem]">
              {withHighlightMark(hero.title, hero.titleHighlight)}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-white/90 sm:text-[15px]">
              {hero.description}
            </p>
            <p className="mx-auto mt-3 max-w-xl text-xs leading-relaxed text-white/80 sm:text-sm">
              {hero.trustLine}
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ backgroundColor: ink }}>
        <div className="content-container border-t border-white/10 py-7 sm:py-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <p className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  {localizeNumerals(stat.value, locale)}
                </p>
                <p className="mt-1.5 text-sm text-white/85">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* University partners */}
      <section className="bg-[#f6f8fb] py-12 sm:py-16">
        <div className="content-container">
          <div className="mx-auto max-w-3xl text-center">
            <p
              className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em]"
              style={{ color: accent }}
            >
              <GraduationCap className="h-3.5 w-3.5" />
              {college.badge}
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#0f1622] sm:text-[1.85rem] lg:text-[2rem]">
              {withHighlightMark(college.title, college.titleHighlight, {
                nowrap: false,
              })}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#334155]">
              {college.description}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[#475569]">
              {college.detail}
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {college.benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-2xl border border-[#e6e8ec] bg-white p-5"
              >
                <h3 className="text-sm font-bold text-[#0f1622]">
                  {benefit.title}
                </h3>
                <p className="mt-1.5 text-[13px] leading-snug text-[#334155]">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-[#e6e8ec] bg-white px-3 py-5 sm:px-5">
            <PartnersMarquee
              partners={universities.map((p) => ({
                id: String(p.id),
                name: p.name,
                logo: p.logo,
              }))}
              durationSeconds={100}
              uniformChips
              edgeColor="#ffffff"
            />
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {college.partners.map((partner) => (
              <article
                key={partner.id}
                className="rounded-2xl border border-[#e6e8ec] bg-white p-5"
              >
                <div className="flex items-start gap-3">
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white"
                    style={{ backgroundColor: primary }}
                  >
                    <GraduationCap className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-sm font-bold leading-snug text-[#0f1622]">
                      {partner.name}
                    </h3>
                    <p className="mt-1.5 text-[13px] leading-snug text-[#334155]">
                      {partner.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate partners */}
      <section className="bg-white py-12 sm:py-16">
        <div className="content-container">
          <div className="mx-auto max-w-3xl text-center">
            <p
              className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em]"
              style={{ color: accent }}
            >
              <Briefcase className="h-3.5 w-3.5" />
              {corporate.badge}
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#0f1622] sm:text-[1.85rem] lg:text-[2rem]">
              {withHighlightMark(corporate.title, corporate.titleHighlight, {
                nowrap: false,
              })}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#334155]">
              {corporate.description}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[#475569]">
              {corporate.detail}
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {corporate.benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-2xl border border-[#e6e8ec] bg-[#f8f9fb] p-5"
              >
                <h3 className="text-sm font-bold text-[#0f1622]">
                  {benefit.title}
                </h3>
                <p className="mt-1.5 text-[13px] leading-snug text-[#334155]">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-[#e6e8ec] bg-[#f8f9fb] px-3 py-5 sm:px-5">
            <PartnersMarquee
              partners={corporates.map((p) => ({
                id: String(p.id),
                name: p.name,
                logo: p.logo,
              }))}
              durationSeconds={140}
              uniformChips
              edgeColor="#f8f9fb"
            />
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {corporate.partners.map((partner) => (
              <article
                key={partner.id}
                className="rounded-2xl border border-[#e6e8ec] bg-white p-5"
              >
                <div className="flex items-start gap-3">
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white"
                    style={{ backgroundColor: theme.colors.orange }}
                  >
                    <Briefcase className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-sm font-bold leading-snug text-[#0f1622]">
                      {partner.name}
                    </h3>
                    <p className="mt-1.5 text-[13px] leading-snug text-[#334155]">
                      {partner.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-[#f6f8fb] py-12 sm:py-14">
        <div className="content-container">
          <div className="mx-auto max-w-3xl text-center">
            <span
              className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl text-white"
              style={{ backgroundColor: primary }}
            >
              <Award className="h-6 w-6" />
            </span>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-[#0f1622] sm:text-[1.75rem]">
              {withHighlightMark(mission.title, mission.titleHighlight)}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#334155] sm:text-[15px]">
              {mission.paragraph1}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-[#475569]">
              {mission.paragraph2}
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-10 sm:py-12">
        <div className="content-container">
          <div
            className="relative overflow-hidden rounded-2xl px-6 py-8 sm:px-10 sm:py-10"
            style={{
              background: `linear-gradient(135deg, ${primary} 0%, #143a7a 48%, ${accent} 140%)`,
            }}
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-25"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
              aria-hidden
            />
            <div className="relative flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                  {withHighlightMark(cta.title, cta.titleHighlight)}
                </h2>
                <p className="mt-2 text-sm leading-snug text-white/80">
                  {cta.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2.5">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold transition hover:bg-white/90"
                  style={{ color: primary }}
                >
                  {cta.primary}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/40 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
                >
                  {cta.secondary}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function PartnersPage() {
  return (
    <PartnersLocaleProvider>
      <PartnersPageInner />
    </PartnersLocaleProvider>
  );
}
