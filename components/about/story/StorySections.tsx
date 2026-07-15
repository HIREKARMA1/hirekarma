"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Building2,
  Cpu,
  GraduationCap,
  Lightbulb,
  MapPin,
  Rocket,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

import {
  HighlightMark,
  HighlightedHeadingParts,
  withHighlightMark,
} from "@/components/shared/HighlightMark";
import { theme } from "@/config/theme";
import { useAboutLocale } from "@/contexts/AboutLocaleContext";
import { localizeNumerals } from "@/lib/i18n/localizeNumerals";

const ease = [0.22, 1, 0.36, 1] as const;
const TIMELINE_ACCENTS = [
  theme.colors.primary,
  theme.colors.secondary,
  theme.colors.orange,
  theme.colors.green,
] as const;

const TIMELINE_ICONS = [MapPin, Building2, Cpu, Rocket] as const;

const PATH_STEPS = [
  { id: "campus", label: "Campus", detail: "Tier-2 & 3 colleges", Icon: GraduationCap },
  { id: "ready", label: "Ready", detail: "Skills & interviews", Icon: Sparkles },
  { id: "hire", label: "Hire", detail: "Drives & shortlists", Icon: Building2 },
  { id: "career", label: "Career", detail: "Lasting opportunity", Icon: Rocket },
] as const;

const LIVE_PRODUCTS = [
  { name: "DISHA", role: "Campus placement" },
  { name: "SolviqAI", role: "Career readiness" },
  { name: "Lakshya", role: "Hiring ecosystem" },
  { name: "Shortlisted", role: "Virtual placement" },
] as const;

function StoryHeroVisual() {
  const { locale, content } = useAboutLocale();
  const journey = content.story.journey;
  const timeline = content.story.timeline?.items ?? [];
  const [pathStep, setPathStep] = useState(0);
  const [milestone, setMilestone] = useState(0);
  const [product, setProduct] = useState(0);

  useEffect(() => {
    const a = window.setInterval(
      () => setPathStep((i) => (i + 1) % PATH_STEPS.length),
      2200
    );
    const b = window.setInterval(
      () => setMilestone((i) => (i + 1) % Math.max(timeline.length, 1)),
      2800
    );
    const c = window.setInterval(
      () => setProduct((i) => (i + 1) % LIVE_PRODUCTS.length),
      2400
    );
    return () => {
      window.clearInterval(a);
      window.clearInterval(b);
      window.clearInterval(c);
    };
  }, [timeline.length]);

  const activePath = PATH_STEPS[pathStep];
  const activeMilestone = timeline[milestone] ?? timeline[0];
  const activeProduct = LIVE_PRODUCTS[product];

  return (
    <div className="relative mx-auto w-full max-w-[420px] lg:max-w-none">
      <style>{`
        @keyframes hk-story-shine {
          0%, 100% { opacity: 0.45; }
          50% { opacity: 0.9; }
        }
        .hk-story-shine { animation: hk-story-shine 2.8s ease-in-out infinite; }
      `}</style>

      <div
        className="pointer-events-none absolute -right-6 -top-8 h-40 w-40 rounded-full blur-3xl"
        style={{ backgroundColor: "rgba(0,162,229,0.28)" }}
        aria-hidden
      />

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease }}
        className="relative overflow-hidden rounded-2xl border border-white/12 bg-gradient-to-br from-white/[0.09] to-white/[0.03] shadow-[0_24px_60px_rgba(0,0,0,0.35)] backdrop-blur-sm"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/80">
              Origin snapshot
            </p>
            <p className="mt-0.5 text-sm font-bold text-white">How HireKarma started</p>
          </div>
          <span
            className="hk-story-shine rounded-full px-2.5 py-1 text-[10px] font-bold text-[#0f1622]"
            style={{ backgroundColor: theme.colors.yellow }}
          >
            Est. {localizeNumerals(journey.foundedCard.value, locale)}
          </span>
        </div>

        <div className="space-y-3.5 p-4">
          {/* Founding facts */}
          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-xl border border-white/10 bg-[#0f1622]/55 px-3 py-2.5">
              <div className="flex items-center gap-1.5 text-white/85">
                <MapPin className="h-3.5 w-3.5" style={{ color: theme.colors.secondary }} />
                <span className="text-[10px] font-semibold uppercase tracking-[0.12em]">
                  {journey.foundedCard.label}
                </span>
              </div>
              <p className="mt-1 text-[15px] font-bold text-white">
                {localizeNumerals(journey.foundedCard.value, locale)}
              </p>
              <p className="text-[11px] text-white/85">{journey.foundedCard.detail}</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-[#0f1622]/55 px-3 py-2.5">
              <div className="flex items-center gap-1.5 text-white/85">
                <Target className="h-3.5 w-3.5" style={{ color: theme.colors.orange }} />
                <span className="text-[10px] font-semibold uppercase tracking-[0.12em]">
                  {journey.focusCard.label}
                </span>
              </div>
              <p className="mt-1 text-[15px] font-bold text-white">
                {localizeNumerals(journey.focusCard.value, locale)}
              </p>
              <p className="text-[11px] text-white/85">{journey.focusCard.detail}</p>
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white/80">
              Founders
            </p>
            <div className="mt-1.5 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 text-[12px] font-semibold text-white">
                <Users className="h-3.5 w-3.5 text-white/90" />
                {journey.founder1}
              </span>
              <span className="text-[11px] text-white/90">&</span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 text-[12px] font-semibold text-white">
                <Users className="h-3.5 w-3.5 text-white/90" />
                {journey.founder2}
              </span>
            </div>
          </div>

          {/* Animated pathway */}
          <div>
            <div className="mb-2 flex items-center justify-between">
              <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white/80">
                The pathway we built
              </p>
              <p className="text-[11px] font-medium text-white/85">
                {activePath.label}: {activePath.detail}
              </p>
            </div>
            <div className="grid grid-cols-4 gap-1.5">
              {PATH_STEPS.map((step, index) => {
                const Icon = step.Icon;
                const active = index === pathStep;
                return (
                  <button
                    key={step.id}
                    type="button"
                    onClick={() => setPathStep(index)}
                    className={`relative rounded-xl border px-1.5 py-2.5 text-center transition duration-300 ${
                      active
                        ? "border-transparent text-white shadow-[0_10px_24px_rgba(0,0,0,0.25)]"
                        : "border-white/10 bg-white/[0.04] text-white/85 hover:bg-white/[0.08]"
                    }`}
                    style={
                      active
                        ? {
                            backgroundColor:
                              index === 3 ? theme.colors.yellow : theme.colors.primary,
                            color: index === 3 ? "#0f1622" : "#ffffff",
                          }
                        : undefined
                    }
                  >
                    <Icon className="mx-auto h-4 w-4" />
                    <span className="mt-1 block text-[10px] font-bold">{step.label}</span>
                    {index < PATH_STEPS.length - 1 ? (
                      <span
                        className="absolute -right-1 top-1/2 hidden h-px w-2 -translate-y-1/2 sm:block"
                        style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
                        aria-hidden
                      />
                    ) : null}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Milestone + product row */}
          <div className="grid gap-2 sm:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-[#0f1622]/55 px-3 py-2.5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white/80">
                Milestone
              </p>
              {activeMilestone ? (
                <motion.div
                  key={activeMilestone.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 }}
                >
                  <p
                    className="mt-1 text-[11px] font-bold uppercase tracking-[0.12em]"
                    style={{ color: theme.colors.secondary }}
                  >
                    {activeMilestone.year}
                  </p>
                  <p className="mt-0.5 text-[13px] font-bold leading-snug text-white">
                    {activeMilestone.title}
                  </p>
                </motion.div>
              ) : null}
              <div className="mt-2 flex gap-1">
                {timeline.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    aria-label={item.title}
                    onClick={() => setMilestone(index)}
                    className="h-1.5 flex-1 rounded-full transition"
                    style={{
                      backgroundColor:
                        index === milestone
                          ? theme.colors.secondary
                          : "rgba(255,255,255,0.15)",
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-[#0f1622]/55 px-3 py-2.5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white/80">
                Now shipping
              </p>
              <motion.div
                key={activeProduct.name}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35 }}
              >
                <p className="mt-1 text-[15px] font-bold text-white">
                  {activeProduct.name}
                </p>
                <p className="text-[11px] text-white/85">{activeProduct.role}</p>
              </motion.div>
              <div className="mt-2 flex flex-wrap gap-1">
                {LIVE_PRODUCTS.map((item, index) => (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => setProduct(index)}
                    className={`rounded-full px-2 py-0.5 text-[9px] font-semibold transition ${
                      index === product
                        ? "bg-white text-[#0f1622]"
                        : "bg-white/10 text-white/85 hover:bg-white/15"
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Impact strip */}
          <div className="grid grid-cols-3 gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-2 py-2.5">
            {[
              { value: "22,000+", label: "Careers shaped" },
              { value: "60+", label: "College partners" },
              { value: "4", label: "Core products" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-sm font-bold text-white sm:text-[15px]">
                  {localizeNumerals(stat.value, locale)}
                </p>
                <p className="mt-0.5 text-[9px] leading-tight text-white/85 sm:text-[10px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function AnimatedPanel({
  accent,
  icon: Icon,
  label,
  children,
}: {
  accent: string;
  icon: typeof Target;
  label: string;
  children: ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, ease }}
      className="group relative overflow-hidden rounded-2xl border border-[#e6e8ec] bg-white p-4 shadow-[0_8px_24px_rgba(15,22,34,0.04)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_32px_rgba(15,22,34,0.08)] sm:p-5"
    >
      <div
        className="absolute -right-8 -top-8 h-28 w-28 rounded-full opacity-20 blur-2xl transition group-hover:opacity-35"
        style={{ backgroundColor: accent }}
        aria-hidden
      />
      <div className="relative flex items-start gap-3">
        <span
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white"
          style={{ backgroundColor: accent }}
        >
          <Icon className="h-5 w-5" strokeWidth={2} />
        </span>
        <div className="min-w-0">
          <p
            className="text-[10px] font-semibold uppercase tracking-[0.16em]"
            style={{ color: accent }}
          >
            {label}
          </p>
          <div className="mt-1.5 text-sm leading-relaxed text-[#334155]">
            {children}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function StoryHeroSection() {
  const { content } = useAboutLocale();
  const hero = content.story.hero;

  return (
    <section
      className="relative overflow-x-clip overflow-y-visible"
      style={{ backgroundColor: theme.colors.ink }}
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div
          className="absolute left-[-10%] top-[-10%] h-72 w-72 rounded-full blur-[100px]"
          style={{ backgroundColor: "rgba(27,82,164,0.35)" }}
        />
        <div
          className="absolute bottom-0 right-[-5%] h-64 w-64 rounded-full blur-[90px]"
          style={{ backgroundColor: "rgba(0,162,229,0.22)" }}
        />
      </div>

      <div className="relative content-container pb-8 pt-6 sm:pb-10 lg:pt-8">
        <div className="grid items-center gap-7 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-10">
          <div className="min-w-0 space-y-3">
            <p
              className="text-[10px] font-semibold uppercase tracking-[0.16em]"
              style={{ color: theme.colors.secondary }}
            >
              {hero.label}
            </p>
            <h1 className="max-w-xl text-[1.65rem] font-bold leading-[1.18] tracking-tight text-white sm:text-[1.9rem] lg:text-[2.05rem]">
              <HighlightedHeadingParts
                heading={hero.heading}
                highlight={hero.headingHighlight}
              />
            </h1>
            <p className="max-w-lg text-[13px] leading-relaxed text-white/90 sm:text-sm">
              {hero.description}
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              <Link
                href={hero.primaryCta.href}
                className="inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-[13px] font-semibold text-white transition hover:brightness-110"
                style={{ backgroundColor: theme.colors.primary }}
              >
                {hero.primaryCta.label}
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                href={hero.secondaryCta.href}
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/28 px-3.5 py-2 text-[13px] font-semibold text-white transition hover:bg-white/5"
              >
                {hero.secondaryCta.label}
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          <div className="min-w-0 overflow-visible px-1 sm:px-2">
            <StoryHeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

export function StoryNarrativeSection() {
  const { content } = useAboutLocale();
  const { journey, challenge, solution } = content.story;

  const panels = [
    {
      id: "origin",
      accent: theme.colors.primary,
      icon: Sparkles,
      label: journey.subtitle,
      title: journey.panelTitle || "Why we started",
      titleHighlight: journey.panelTitleHighlight,
      body: journey.closing,
    },
    {
      id: "challenge",
      accent: theme.colors.orange,
      icon: Target,
      label: challenge.subtitle,
      title: challenge.title,
      titleHighlight: challenge.titleHighlight,
      body: challenge.summary,
      fallback: (
        <>
          {challenge.beforeHighlight1}{" "}
          <HighlightMark nowrap={false}>{challenge.highlight1}</HighlightMark>{" "}
          {challenge.betweenHighlights}{" "}
          <HighlightMark nowrap={false}>{challenge.highlight2}</HighlightMark>
          {challenge.afterHighlights}
        </>
      ),
    },
    {
      id: "solution",
      accent: theme.colors.green,
      icon: Lightbulb,
      label: solution.subtitle,
      title: solution.title,
      titleHighlight: solution.titleHighlight,
      body: solution.summary,
      fallback: (
        <>
          {solution.beforeHighlight1}{" "}
          <HighlightMark nowrap={false}>{solution.highlight1}</HighlightMark>{" "}
          {solution.betweenHighlights}{" "}
          <HighlightMark nowrap={false}>{solution.highlight2}</HighlightMark>
          {solution.afterHighlights}
        </>
      ),
    },
  ] as const;

  return (
    <section className="bg-[#f6f8fb] py-9 sm:py-11">
      <div className="content-container">
        <div className="mb-6 max-w-2xl">
          <p
            className="text-[10px] font-semibold uppercase tracking-[0.16em]"
            style={{ color: theme.colors.secondary }}
          >
            {journey.subtitle}
          </p>
          <h2 className="mt-1.5 text-xl font-bold tracking-tight text-[#0f1622] sm:text-[1.55rem]">
            {withHighlightMark(journey.title, journey.titleHighlight, {
              nowrap: false,
            })}
          </h2>
          <p className="mt-2 text-[13px] leading-relaxed text-[#334155] sm:text-sm">
            {journey.beforeFounded}
            <HighlightMark>{journey.founded}</HighlightMark>
            {journey.afterFoundedBeforeFounder1}
            <strong className="font-semibold text-[#0f1622]">
              {journey.founder1}
            </strong>
            {journey.betweenFounders}
            <strong className="font-semibold text-[#0f1622]">
              {journey.founder2}
            </strong>
            {journey.afterFounders}
          </p>
        </div>

        <div className="grid gap-3 md:grid-cols-3">
          {panels.map((panel) => (
            <AnimatedPanel
              key={panel.id}
              accent={panel.accent}
              icon={panel.icon}
              label={panel.label}
            >
              <p className="mb-1.5 text-[14px] font-bold leading-snug text-[#0f1622]">
                {withHighlightMark(panel.title, panel.titleHighlight, {
                  nowrap: false,
                })}
              </p>
              <p className="text-[13px] leading-relaxed text-[#334155]">
                {"fallback" in panel && !panel.body
                  ? panel.fallback
                  : panel.body}
              </p>
            </AnimatedPanel>
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineProgress({ progress }: { progress: number }) {
  return (
    <motion.div
      className="absolute left-0 top-0 h-full rounded-full"
      style={{
        background: `linear-gradient(90deg, ${theme.colors.primary}, ${theme.colors.secondary}, ${theme.colors.orange}, ${theme.colors.green})`,
      }}
      initial={{ width: "0%" }}
      animate={{ width: `${Math.max(8, progress * 100)}%` }}
      transition={{ duration: 0.65, ease }}
    />
  );
}

export function StoryTimelineSection() {
  const { content } = useAboutLocale();
  const timeline = content.story.timeline;
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.25 });
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!timeline?.items?.length || !inView) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % timeline.items.length);
    }, 3200);
    return () => window.clearInterval(id);
  }, [inView, timeline?.items?.length]);

  if (!timeline?.items?.length) return null;

  const progress = (active + 1) / timeline.items.length;

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-white py-9 sm:py-11"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, ${theme.colors.secondary}55, transparent)`,
        }}
        aria-hidden
      />

      <div className="content-container">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p
              className="text-[10px] font-semibold uppercase tracking-[0.16em]"
              style={{ color: theme.colors.secondary }}
            >
              {timeline.label}
            </p>
            <h2 className="mt-1.5 text-xl font-bold tracking-tight text-[#0f1622] sm:text-[1.55rem]">
              {withHighlightMark(timeline.heading, timeline.headingHighlight, {
                nowrap: false,
              })}
            </h2>
            {timeline.description ? (
              <p className="mt-2 text-[13px] leading-relaxed text-[#334155] sm:text-sm">
                {timeline.description}
              </p>
            ) : null}
          </div>
          <p className="hidden text-[12px] text-[#475569] sm:block">
            {timeline.items.length} milestones
          </p>
        </div>

        {/* Desktop / tablet horizontal timeline */}
        <div className="relative mt-8 hidden md:block">
          <div className="relative mb-8 h-1.5 overflow-hidden rounded-full bg-[#e8ecf2]">
            <TimelineProgress progress={progress} />
          </div>

          <ol className="grid grid-cols-4 gap-3">
            {timeline.items.map((item, index) => {
              const accent = TIMELINE_ACCENTS[index % TIMELINE_ACCENTS.length];
              const Icon = TIMELINE_ICONS[index % TIMELINE_ICONS.length];
              const isActive = active === index;

              return (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: index * 0.08, ease }}
                >
                  <button
                    type="button"
                    onClick={() => setActive(index)}
                    className={`relative w-full rounded-2xl border p-4 text-left transition duration-300 ${
                      isActive
                        ? "border-transparent bg-[#0f1622] text-white shadow-[0_16px_36px_rgba(15,22,34,0.22)]"
                        : "border-[#e6e8ec] bg-[#f8fafc] hover:border-[#00a2e5]/35 hover:bg-white"
                    }`}
                  >
                    <span
                      className="absolute -top-[1.55rem] left-4 flex h-8 w-8 items-center justify-center rounded-full text-white shadow-md ring-4 ring-white"
                      style={{ backgroundColor: accent }}
                    >
                      <Icon className="h-3.5 w-3.5" />
                    </span>

                    <p
                      className={`mt-3 text-[11px] font-bold uppercase tracking-[0.14em] ${
                        isActive ? "text-white/85" : ""
                      }`}
                      style={isActive ? undefined : { color: accent }}
                    >
                      {item.year}
                    </p>
                    <h3
                      className={`mt-1.5 text-[14px] font-bold leading-snug ${
                        isActive ? "text-white" : "text-[#0f1622]"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`mt-1.5 text-[12px] leading-relaxed ${
                        isActive ? "text-white/90" : "text-[#334155]"
                      }`}
                    >
                      {item.description}
                    </p>
                  </button>
                </motion.li>
              );
            })}
          </ol>
        </div>

        {/* Mobile vertical timeline */}
        <ol className="relative mt-7 space-y-0 md:hidden">
          <div
            className="absolute bottom-2 left-[15px] top-2 w-[2px] rounded-full"
            style={{
              background: `linear-gradient(180deg, ${theme.colors.primary}, ${theme.colors.secondary}, ${theme.colors.orange}, ${theme.colors.green})`,
            }}
            aria-hidden
          />
          {timeline.items.map((item, index) => {
            const accent = TIMELINE_ACCENTS[index % TIMELINE_ACCENTS.length];
            const Icon = TIMELINE_ICONS[index % TIMELINE_ICONS.length];
            return (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.45, delay: index * 0.06, ease }}
                className="relative flex gap-3.5 pb-6 last:pb-0"
              >
                <span
                  className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white shadow-md ring-4 ring-white"
                  style={{ backgroundColor: accent }}
                >
                  <Icon className="h-3.5 w-3.5" />
                </span>
                <div className="min-w-0 rounded-xl border border-[#e6e8ec] bg-[#f8fafc] px-3.5 py-3">
                  <p
                    className="text-[10px] font-bold uppercase tracking-[0.14em]"
                    style={{ color: accent }}
                  >
                    {item.year}
                  </p>
                  <h3 className="mt-1 text-sm font-bold text-[#0f1622]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[12px] leading-relaxed text-[#334155]">
                    {item.description}
                  </p>
                </div>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

export function StoryCtaSection() {
  const { content } = useAboutLocale();
  const cta = content.story.cta;
  if (!cta) return null;

  return (
    <section className="bg-[#f6f8fb] pb-10 pt-2 sm:pb-12">
      <div className="content-container">
        <div
          className="relative overflow-hidden rounded-2xl px-5 py-6 sm:px-8 sm:py-7"
          style={{
            background: `linear-gradient(125deg, ${theme.colors.primary} 0%, #143a7a 52%, ${theme.colors.secondary} 130%)`,
          }}
        >
          <motion.div
            className="pointer-events-none absolute -right-10 top-0 h-40 w-40 rounded-full blur-3xl"
            style={{ backgroundColor: "rgba(254,196,13,0.28)" }}
            animate={{ opacity: [0.35, 0.65, 0.35], scale: [1, 1.08, 1] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden
          />
          <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-lg">
              <h2 className="text-lg font-bold tracking-tight text-white sm:text-xl">
                {withHighlightMark(cta.title, cta.titleHighlight)}
              </h2>
              <p className="mt-1.5 text-[13px] leading-snug text-white/90">
                {cta.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Link
                href={cta.primary.href}
                className="inline-flex items-center gap-1.5 rounded-lg bg-white px-3.5 py-2 text-[13px] font-semibold transition hover:bg-white/90"
                style={{ color: theme.colors.primary }}
              >
                {cta.primary.label}
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              {cta.secondary ? (
                <Link
                  href={cta.secondary.href}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-white/40 px-3.5 py-2 text-[13px] font-semibold text-white transition hover:bg-white/10"
                >
                  {cta.secondary.label}
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
