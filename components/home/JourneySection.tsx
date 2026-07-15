"use client";

import {
  BookOpen,
  Briefcase,
  CheckCircle2,
  Link2,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";

import { theme } from "@/config/theme";
import { useHomeLocale } from "@/contexts/HomeLocaleContext";
import { withHighlightMark } from "@/components/shared/HighlightMark";

const stepMeta = [
  { Icon: BookOpen, color: theme.colors.primary },
  { Icon: Sparkles, color: theme.colors.secondary },
  { Icon: CheckCircle2, color: theme.colors.green },
  { Icon: Link2, color: theme.colors.orange },
  { Icon: Briefcase, color: theme.colors.primary },
  { Icon: TrendingUp, color: theme.colors.secondary },
  { Icon: Users, color: theme.colors.yellow },
] as const;

export default function JourneySection() {
  const { content } = useHomeLocale();
  const { journey } = content;

  return (
    <section
      className="relative overflow-hidden py-12 sm:py-14"
      style={{ backgroundColor: theme.colors.ink }}
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,162,229,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,162,229,0.06) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div
          className="absolute left-1/2 top-0 h-40 w-[36rem] -translate-x-1/2 rounded-full blur-[90px]"
          style={{ backgroundColor: "rgba(0,162,229,0.18)" }}
        />
      </div>

      <div className="relative content-container">
        <div className="mx-auto max-w-2xl text-center">
          <p
            className="text-[12px] font-semibold uppercase tracking-[0.2em]"
            style={{ color: theme.colors.secondary }}
          >
            {journey.label}
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-[1.85rem]">
            {withHighlightMark(journey.heading, journey.headingHighlight)}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-white/85">
            {journey.description}
          </p>
        </div>

        {/* Desktop / tablet timeline */}
        <div className="relative mt-10 hidden md:block">
          <div
            className="absolute left-[6%] right-[6%] top-[2.15rem] h-[2px] rounded-full"
            style={{
              background: `linear-gradient(90deg, ${theme.colors.primary}, ${theme.colors.secondary}, ${theme.colors.green}, ${theme.colors.orange})`,
              opacity: 0.55,
            }}
            aria-hidden
          />

          <ol className="relative grid grid-cols-7 gap-3">
            {journey.steps.map((step, index) => {
              const meta = stepMeta[index % stepMeta.length];
              const { Icon, color } = meta;
              return (
                <li key={step.id} className="flex flex-col items-center text-center">
                  <span
                    className="relative z-10 flex h-[4.3rem] w-[4.3rem] flex-col items-center justify-center rounded-2xl border border-white/10 bg-[#121826] shadow-[0_12px_30px_rgba(0,0,0,0.35)]"
                    style={{ boxShadow: `0 0 0 1px ${color}33, 0 12px 30px rgba(0,0,0,0.35)` }}
                  >
                    <span
                      className="mb-1 text-[12px] font-bold tracking-wide"
                      style={{ color }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <Icon className="h-5 w-5" style={{ color }} />
                  </span>
                  <p className="mt-3 text-sm font-bold text-white">{step.label}</p>
                  <p className="mt-1 text-[12px] leading-snug text-white/80">
                    {step.description}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>

        {/* Mobile horizontal cards */}
        <div className="mt-8 -mx-4 overflow-x-auto px-4 pb-2 md:hidden">
          <ol className="flex w-max gap-3">
            {journey.steps.map((step, index) => {
              const meta = stepMeta[index % stepMeta.length];
              const { Icon, color } = meta;
              return (
                <li
                  key={step.id}
                  className="w-[11.5rem] shrink-0 rounded-2xl border border-white/10 bg-[#121826] p-4"
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className="flex h-10 w-10 items-center justify-center rounded-xl"
                      style={{ backgroundColor: `${color}22`, color }}
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-[12px] font-bold" style={{ color }}>
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <p className="text-sm font-bold text-white">{step.label}</p>
                    </div>
                  </div>
                  <p className="mt-3 text-[13px] leading-snug text-white/80">
                    {step.description}
                  </p>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
