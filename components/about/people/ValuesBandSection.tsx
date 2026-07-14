"use client";

import React from "react";
import { Heart, Lightbulb, Users } from "lucide-react";

import { useAboutLocale } from "@/contexts/AboutLocaleContext";
import { theme } from "@/config/theme";

const icons = {
  inclusive: Heart,
  innovative: Lightbulb,
  collaborative: Users,
} as const;

const valueThemes = {
  inclusive: {
    accent: theme.colors.primary,
    soft: "rgba(27, 82, 164, 0.08)",
    softStrong: "rgba(27, 82, 164, 0.16)",
    iconBg: theme.colors.primary,
  },
  innovative: {
    accent: theme.colors.orange,
    soft: "rgba(245, 128, 32, 0.09)",
    softStrong: "rgba(254, 196, 13, 0.22)",
    iconBg: theme.colors.orange,
  },
  collaborative: {
    accent: theme.colors.green,
    soft: "rgba(9, 136, 85, 0.08)",
    softStrong: "rgba(0, 162, 229, 0.12)",
    iconBg: theme.colors.green,
  },
} as const;

export default function ValuesBandSection() {
  const { content } = useAboutLocale();
  const { culture, philosophy } = content.people;

  return (
    <section className="bg-white py-5">
      <div className="content-container">
        <div className="overflow-hidden rounded-2xl shadow-[0_10px_30px_rgba(15,22,34,0.06)]">
          <div className="grid lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1.8fr)]">
            {/* Intro */}
            <div
              className="relative flex flex-col justify-center overflow-hidden px-5 py-5 sm:px-6 sm:py-6"
              style={{
                background: `linear-gradient(145deg, ${theme.colors.ink} 0%, #152238 55%, #1b52a4 140%)`,
              }}
            >
              <div
                className="pointer-events-none absolute -right-8 -top-10 h-28 w-28 rounded-full blur-2xl"
                style={{ backgroundColor: "rgba(0,162,229,0.35)" }}
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -bottom-10 left-6 h-24 w-24 rounded-full blur-2xl"
                style={{ backgroundColor: "rgba(254,196,13,0.2)" }}
                aria-hidden
              />

              <p
                className="relative text-[10px] font-semibold uppercase tracking-[0.18em]"
                style={{ color: theme.colors.secondary }}
              >
                {culture.title}
              </p>
              <h2 className="relative mt-2 text-lg font-bold leading-snug tracking-tight text-white sm:text-xl lg:whitespace-nowrap">
                {philosophy.title}
              </h2>
              <div
                className="relative mt-2.5 h-1 w-12 rounded-full"
                style={{ backgroundColor: theme.colors.yellow }}
                aria-hidden
              />
              <p className="relative mt-2.5 text-[13px] leading-snug text-white/70">
                {culture.description}
              </p>
            </div>

            {/* Values */}
            <div className="grid sm:grid-cols-3">
              {culture.values.map((value) => {
                const Icon = icons[value.id];
                const tone = valueThemes[value.id];

                return (
                  <div
                    key={value.id}
                    className="group relative px-5 py-5 transition duration-300 sm:px-5 sm:py-6"
                    style={{
                      background: `linear-gradient(180deg, ${tone.softStrong} 0%, ${tone.soft} 42%, #ffffff 100%)`,
                    }}
                  >
                    <div
                      className="absolute inset-x-0 top-0 h-1"
                      style={{ backgroundColor: tone.accent }}
                      aria-hidden
                    />

                    <span
                      className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-md transition duration-300 group-hover:scale-105"
                      style={{
                        backgroundColor: tone.iconBg,
                        boxShadow: `0 10px 20px ${tone.accent}33`,
                      }}
                    >
                      <Icon className="h-5 w-5" strokeWidth={2.25} />
                    </span>

                    <h3
                      className="text-[15px] font-bold tracking-tight"
                      style={{ color: theme.colors.ink }}
                    >
                      {value.title}
                    </h3>
                    <p className="mt-1.5 text-[12.5px] leading-relaxed text-gray-600">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
