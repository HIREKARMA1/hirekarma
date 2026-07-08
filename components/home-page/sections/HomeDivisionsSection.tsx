"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { useHomeLocale } from "@/contexts/HomeLocaleContext";
import { GradientHeading } from "@/components/products-page/ui/GradientHeading";
import { SectionLabel } from "@/components/products-page/ui/SectionLabel";
import { resolveHref } from "@/lib/config/env";
import { homeAccentMap } from "../ui/home-accents";

export function HomeDivisionsSection() {
  const { content } = useHomeLocale();
  const { divisions } = content;

  return (
    <section className="relative py-14 sm:py-16 lg:py-20">
      <div className="content-container relative z-10">
        <div className="mb-8 flex flex-col gap-4 sm:mb-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-3">
            <SectionLabel>{divisions.label}</SectionLabel>
            <GradientHeading heading={divisions.heading} as="h2" size="section" />
            <p className="text-sm leading-relaxed text-white/70 sm:text-base">
              {divisions.description}
            </p>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#00a2e5] transition hover:text-[#38bdf8]"
          >
            {divisions.linkLabel}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {divisions.items.map((item) => {
            const color = homeAccentMap[item.accent];
            return (
              <Link
                key={item.id}
                href={resolveHref(item.hrefKey)}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition duration-300 hover:-translate-y-1 hover:border-white/20 sm:p-6"
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-40 transition group-hover:opacity-60"
                  style={{
                    background: `linear-gradient(145deg, ${color}55 0%, transparent 55%)`,
                  }}
                  aria-hidden
                />
                <div className="relative z-10">
                  <p
                    className="mb-6 text-sm font-bold tracking-widest"
                    style={{ color }}
                  >
                    {item.number}
                  </p>
                  <h3 className="mb-2 text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/70">
                    {item.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
