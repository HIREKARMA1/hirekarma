"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { theme } from "@/config/theme";
import { useHomeLocale } from "@/contexts/HomeLocaleContext";

export default function DpiSection() {
  const { content } = useHomeLocale();
  const { dpi } = content;

  return (
    <section className="bg-[#f6f8fb] py-12 sm:py-14">
      <div className="content-container">
        <div className="max-w-2xl">
          <p
            className="text-[11px] font-semibold uppercase tracking-[0.18em]"
            style={{ color: theme.colors.secondary }}
          >
            {dpi.label}
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#0f1622] sm:text-[1.85rem]">
            {dpi.heading}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-[#0f1622]/6">
            {dpi.description}
          </p>
          <Link
            href={dpi.cta.href}
            className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold"
            style={{ color: theme.colors.primary }}
          >
            {dpi.cta.label}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {dpi.partners.map((partner) => (
            <div
              key={partner.id}
              className="rounded-2xl border border-[#e6e8ec] bg-white px-5 py-5 shadow-[0_8px_24px_rgba(15,22,34,0.04)]"
            >
              <div className="relative mb-4 h-12 w-full">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain object-left"
                  sizes="200px"
                />
              </div>
              <h3 className="text-sm font-bold text-[#0f1622]">{partner.name}</h3>
              <p className="mt-1 text-[13px] leading-snug text-[#0f1622]/6">
                {partner.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
