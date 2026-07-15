"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { Instagram, Linkedin, Mail, Users } from "lucide-react";

import { Loader } from "@/components/shortlisted/ui/loader";
import { useAboutLocale } from "@/contexts/AboutLocaleContext";
import { getTeamByCategory } from "@/services/about-page";
import { theme } from "@/config/theme";
import type {
  LeadershipBadgeTone,
  ResolvedTeamMember,
  TeamCategory,
} from "@/types/about-page";

const tones: LeadershipBadgeTone[] = [
  "blue",
  "orange",
  "green",
  "sky",
  "yellow",
  "red",
];

const toneColor: Record<LeadershipBadgeTone, string> = {
  blue: theme.colors.primary,
  sky: theme.colors.secondary,
  orange: theme.colors.orange,
  green: theme.colors.green,
  yellow: theme.colors.yellow,
  red: theme.colors.red,
};

function MemberPortrait({
  src,
  name,
  accent,
  badge,
  badgeDarkText,
}: {
  src: string;
  name: string;
  accent: string;
  badge: string;
  badgeDarkText: boolean;
}) {
  const [loaded, setLoaded] = useState(false);
  const initial = name.trim().charAt(0).toUpperCase() || "?";

  return (
    <div className="relative mx-auto w-[72%]">
      <div
        className="absolute -inset-x-1.5 -bottom-1.5 -top-0.5 rounded-xl opacity-90"
        style={{ backgroundColor: `${accent}22` }}
        aria-hidden
      />

      <div
        className="relative aspect-[3/3.4] overflow-hidden rounded-xl bg-gray-100 shadow-md ring-1 ring-white"
        style={{ outline: `1px solid ${accent}33` }}
      >
        {src ? (
          <>
            <Image
              src={src}
              alt={name}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 28vw, 14vw"
              className={`object-cover object-[center_18%] transition duration-500 group-hover:scale-105 ${
                loaded ? "opacity-100" : "opacity-0"
              }`}
              onLoad={() => setLoaded(true)}
            />
            {!loaded && (
              <div className="absolute inset-0 animate-pulse bg-gray-200" />
            )}
          </>
        ) : (
          <div
            className="flex h-full w-full items-center justify-center text-3xl font-bold text-white"
            style={{
              background: `linear-gradient(145deg, ${theme.colors.primary}, ${theme.colors.secondary})`,
            }}
          >
            {initial}
          </div>
        )}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      <span
        className="absolute -bottom-2.5 left-1/2 z-10 max-w-[92%] -translate-x-1/2 truncate rounded-full px-2.5 py-0.5 text-[9px] font-semibold shadow"
        style={{
          backgroundColor: accent,
          color: badgeDarkText ? "#111827" : "#ffffff",
        }}
      >
        {badge}
      </span>
    </div>
  );
}

function SocialButton({
  href,
  label,
  accent,
  children,
}: {
  href: string;
  label: string;
  accent: string;
  children: React.ReactNode;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={label}
      className="flex h-7 w-7 items-center justify-center rounded-full border text-gray-500 transition hover:text-white"
      style={{ borderColor: theme.colors.line }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = accent;
        e.currentTarget.style.borderColor = accent;
        e.currentTarget.style.color =
          accent === theme.colors.yellow ? "#111827" : "#fff";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = "transparent";
        e.currentTarget.style.borderColor = theme.colors.line;
        e.currentTarget.style.color = "";
      }}
    >
      {children}
    </a>
  );
}

export default function LeadershipProfilesSection() {
  const { locale, content } = useAboutLocale();
  const {
    teamLabel,
    tabs,
    loading,
    emptyTitle,
    emptyDescription,
    linkedinAria,
    instagramAria,
    emailAria,
  } = content.people;

  const [activeTab, setActiveTab] = useState<TeamCategory>("leadership");
  const [isLoading, setIsLoading] = useState(false);
  const [members, setMembers] = useState<ResolvedTeamMember[]>(() =>
    getTeamByCategory(locale, "leadership")
  );

  useEffect(() => {
    let cancelled = false;
    setIsLoading(true);
    const timer = window.setTimeout(() => {
      const next = getTeamByCategory(locale, activeTab);
      if (!cancelled) {
        setMembers(next);
        setIsLoading(false);
      }
    }, 120);
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [locale, activeTab]);

  const gridClass = useMemo(() => {
    const n = members.length;
    if (n <= 1) return "grid-cols-1 max-w-xs";
    if (n === 2) return "grid-cols-1 sm:grid-cols-2 max-w-xl";
    if (n === 3) return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
    return "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5";
  }, [members.length]);

  const tabOrder: TeamCategory[] = ["leadership", "core", "advisory"];

  return (
    <section className="bg-white py-5 sm:py-6">
      <div className="content-container">
        <div className="mb-5 space-y-3">
          <p
            className="text-[11px] font-semibold uppercase tracking-[0.16em]"
            style={{ color: theme.colors.primary }}
          >
            {teamLabel}
          </p>
          <div className="flex flex-wrap items-center justify-start gap-2.5">
            {tabOrder.map((category) => {
              const active = activeTab === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveTab(category)}
                  disabled={isLoading}
                  className={`rounded-full px-5 py-2.5 text-sm font-semibold transition disabled:opacity-60 sm:px-6 sm:py-3 sm:text-[15px] ${
                    active
                      ? "text-white shadow-md"
                      : "border bg-white text-gray-700 hover:border-[#1b52a4]/40 hover:text-[#1b52a4]"
                  }`}
                  style={
                    active
                      ? { backgroundColor: theme.colors.primary }
                      : { borderColor: theme.colors.line }
                  }
                >
                  {tabs[category]}
                </button>
              );
            })}
          </div>
        </div>

        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-8">
            <Loader
              size="lg"
              className="border-[#1b52a4] border-t-transparent"
            />
            <p className="mt-2 text-sm text-gray-500">{loading}</p>
          </div>
        ) : members.length > 0 ? (
          <div data-hk-stagger className={`grid gap-3 sm:gap-4 ${gridClass}`}>
            {members.map((member, index) => {
              const tone = tones[index % tones.length];
              const accent = toneColor[tone];

              return (
                <article
                  key={`${member.category}-${member.name}-${index}`}
                  className="group relative rounded-xl border bg-white px-3 pb-3 pt-4 transition hover:shadow-md"
                  style={{ borderColor: theme.colors.line }}
                >
                  <MemberPortrait
                    src={member.image}
                    name={member.name}
                    accent={accent}
                    badge={member.role}
                    badgeDarkText={tone === "yellow"}
                  />

                  <div className="mt-5 space-y-1 text-center">
                    <h3 className="text-sm font-bold text-[#0f1622]">
                      {member.name}
                    </h3>
                    <p
                      className="line-clamp-2 text-[11px] font-semibold leading-snug"
                      style={{ color: accent }}
                    >
                      {member.role}
                    </p>
                    <p className="mx-auto line-clamp-2 max-w-[98%] text-[11px] leading-snug text-gray-600">
                      {member.description}
                    </p>
                    <div className="flex justify-center gap-1 pt-0.5">
                      {member.socialLinks.linkedin ? (
                        <SocialButton
                          href={member.socialLinks.linkedin}
                          label={linkedinAria}
                          accent={theme.colors.primary}
                        >
                          <Linkedin className="h-3 w-3" />
                        </SocialButton>
                      ) : null}
                      {member.socialLinks.instagram ? (
                        <SocialButton
                          href={member.socialLinks.instagram}
                          label={instagramAria}
                          accent={theme.colors.orange}
                        >
                          <Instagram className="h-3 w-3" />
                        </SocialButton>
                      ) : null}
                      {member.socialLinks.email ? (
                        <SocialButton
                          href={member.socialLinks.email}
                          label={emailAria}
                          accent={theme.colors.secondary}
                        >
                          <Mail className="h-3 w-3" />
                        </SocialButton>
                      ) : null}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="py-8 text-center">
            <Users className="mx-auto mb-2 h-8 w-8 text-gray-600" />
            <h3 className="text-sm font-bold text-gray-700">{emptyTitle}</h3>
            <p className="mt-1 text-xs text-gray-500">{emptyDescription}</p>
          </div>
        )}
      </div>
    </section>
  );
}
