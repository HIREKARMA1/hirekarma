"use client";

import Link from "next/link";
import { ArrowRight, Clock3 } from "lucide-react";

import { useContactLocale } from "@/contexts/ContactLocaleContext";
import { theme } from "@/config/theme";

export default function ContactHeroSection() {
  const { content } = useContactLocale();
  const { hero } = content;

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: theme.colors.ink }}
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div
          className="absolute -left-16 top-8 h-56 w-56 rounded-full blur-[90px]"
          style={{ backgroundColor: "rgba(27,82,164,0.4)" }}
        />
        <div
          className="absolute right-0 top-1/4 h-64 w-64 rounded-full blur-[100px]"
          style={{ backgroundColor: "rgba(0,162,229,0.22)" }}
        />
      </div>

      <div className="relative content-container pb-8 pt-7 lg:pb-10 lg:pt-9">
        <div className="max-w-2xl space-y-3">
          <p
            className="text-xs font-semibold uppercase tracking-[0.16em]"
            style={{ color: theme.colors.secondary }}
          >
            {hero.label}
          </p>
          <h1 className="text-[1.75rem] font-bold leading-[1.2] tracking-tight text-white sm:text-3xl lg:text-[2.25rem]">
            {hero.title}{" "}
            <span style={{ color: theme.colors.secondary }}>
              {hero.titleHighlight}
            </span>
          </h1>
          <p className="max-w-xl text-[15px] leading-relaxed text-white/90 sm:text-base">
            {hero.description}
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <span className="inline-flex items-center gap-2 text-sm text-white/85">
              <span
                className="flex h-6 w-6 items-center justify-center rounded-full"
                style={{ backgroundColor: "rgba(0,162,229,0.15)" }}
              >
                <Clock3
                  className="h-3 w-3"
                  style={{ color: theme.colors.secondary }}
                />
              </span>
              {hero.tagline}
            </span>
            <Link
              href="#contact-form"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-white transition hover:text-[#00a2e5]"
            >
              {hero.formJump}
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
