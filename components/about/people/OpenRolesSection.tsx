"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Plus } from "lucide-react";

import { useAboutLocale } from "@/contexts/AboutLocaleContext";
import { theme } from "@/config/theme";

export default function OpenRolesSection() {
  const { content } = useAboutLocale();
  const { openRoles, cta } = content.people;

  return (
    <section
      className="border-t py-5 sm:py-6"
      style={{
        borderColor: theme.colors.line,
        backgroundColor: theme.colors.soft,
      }}
    >
      <div className="content-container space-y-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p
              className="text-[10px] font-semibold uppercase tracking-[0.16em]"
              style={{ color: theme.colors.primary }}
            >
              {openRoles.label}
            </p>
            <h2 className="mt-0.5 text-lg font-bold tracking-tight text-gray-900 sm:text-xl">
              {openRoles.title}
            </h2>
          </div>
          <p className="max-w-md text-xs leading-snug text-gray-600 sm:text-right">
            {openRoles.description}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {openRoles.roles.map((role) => (
            <Link
              key={role.id}
              href={cta.button.href}
              className="group relative rounded-lg border bg-white p-2.5 transition hover:border-[#1b52a4]/40 hover:shadow-sm"
              style={{ borderColor: theme.colors.line }}
            >
              <span className="absolute right-1.5 top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#1b52a4]/10 text-[#1b52a4] transition group-hover:bg-[#1b52a4] group-hover:text-white">
                <Plus className="h-2.5 w-2.5" />
              </span>
              <h3 className="pr-5 text-xs font-bold leading-snug text-gray-900">
                {role.title}
              </h3>
              <p className="mt-0.5 line-clamp-2 text-[10px] leading-snug text-gray-600">
                {role.description}
              </p>
            </Link>
          ))}
        </div>

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
