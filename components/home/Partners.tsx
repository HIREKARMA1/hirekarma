"use client";

import Link from "next/link";

import PartnersMarquee from "@/components/layout/PartnersMarquee";
import { withHighlightMark } from "@/components/shared/HighlightMark";
import corporateData from "@/data/corporate.json";
import companyData from "@/data/company.json";
import { theme } from "@/config/theme";
import { useHomeLocale } from "@/contexts/HomeLocaleContext";

type PartnerLogo = { id: number | string; name: string; logo: string };

function PartnerScrollBand({
  label,
  partners,
  durationSeconds,
}: {
  label: string;
  partners: PartnerLogo[];
  durationSeconds: number;
}) {
  return (
    <div className="space-y-3">
      <p className="text-center text-sm font-semibold text-white/85">{label}</p>
      <PartnersMarquee
        partners={partners.map((p) => ({
          id: String(p.id),
          name: p.name,
          logo: p.logo,
        }))}
        durationSeconds={durationSeconds}
        uniformChips
      />
    </div>
  );
}

export default function Partners() {
  const { content } = useHomeLocale();
  const { partners } = content;
  const universities = corporateData.corpo as PartnerLogo[];
  const corporates = companyData.conpanies as PartnerLogo[];
  const ink = theme.colors.ink;

  return (
    <section className="relative overflow-hidden py-12 sm:py-14" style={{ backgroundColor: ink }}>
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div
          className="absolute left-1/2 top-0 h-56 w-[70%] -translate-x-1/2 rounded-full blur-[100px]"
          style={{ backgroundColor: "rgba(0,162,229,0.14)" }}
        />
      </div>

      <div className="relative content-container">
        <div className="mx-auto max-w-2xl text-center">
          <p
            className="text-[12px] font-semibold uppercase tracking-[0.18em]"
            style={{ color: theme.colors.secondary }}
          >
            {partners.subheading}
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-[1.85rem]">
            {withHighlightMark(partners.heading, partners.headingHighlight)}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-white/85">
            {partners.description}
          </p>
        </div>

        <div className="mt-8 space-y-6 rounded-2xl border border-white/10 bg-white/[0.03] px-3 py-5 sm:px-5 sm:py-6">
          <PartnerScrollBand
            label={partners.universityPartnersLabel}
            partners={universities}
            durationSeconds={45}
          />
          <div className="border-t border-white/10" />
          <PartnerScrollBand
            label={partners.corporatePartnersLabel}
            partners={corporates}
            durationSeconds={55}
          />
          <div className="flex justify-center pt-1">
            <Link
              href="/partners"
              className="text-sm font-bold transition hover:brightness-110"
              style={{ color: theme.colors.orange }}
            >
              See all partners →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
