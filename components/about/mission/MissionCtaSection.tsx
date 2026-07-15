"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { useAboutLocale } from "@/contexts/AboutLocaleContext";
import { theme } from "@/config/theme";

export default function MissionCtaSection() {
  const { content } = useAboutLocale();
  const { cta } = content.mission;

  return (
    <section
      className="border-t py-5 sm:py-6"
      style={{
        borderColor: theme.colors.line,
        backgroundColor: theme.colors.soft,
      }}
    >
      <div className="content-container">
        <div
          className="flex flex-col gap-3 rounded-xl px-4 py-3.5 sm:flex-row sm:items-center sm:justify-between sm:px-5"
          style={{
            background: `linear-gradient(135deg, ${theme.colors.primary} 0%, #15418a 50%, ${theme.colors.secondary} 100%)`,
          }}
        >
          <div className="min-w-0">
            <h2 className="text-base font-bold text-white sm:text-lg">
              {cta.title}
            </h2>
            <p className="mt-0.5 text-xs text-white/80 sm:text-sm">
              {cta.description}
            </p>
          </div>
          <Link
            href={cta.button.href}
            className="inline-flex shrink-0 items-center gap-2 self-start rounded-lg bg-white px-4 py-2 text-sm font-semibold text-gray-900 transition hover:bg-white/90 sm:self-auto"
          >
            {cta.button.label}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
