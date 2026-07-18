"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Check, Quote } from "lucide-react";

import { theme } from "@/config/theme";
import { FadeInUp } from "@/components/shared/FadeInUp";
import { withHighlightMark } from "@/components/shared/HighlightMark";
import { getServiceIcon } from "./serviceIcons";
import type {
  ServiceBulletGroup,
  ServiceCallout,
  ServiceCardSection,
  ServiceCaseStudy,
  ServiceCtaContent,
  ServiceCrossLink,
  ServiceProcessSection,
  ServiceProjectCard,
  ServiceStat,
  ServiceSubCard,
  ServiceTestimonialContent,
} from "@/types/services-page";

export function hexToRgba(hex: string, alpha: number) {
  const cleaned = hex.replace("#", "");
  const full =
    cleaned.length === 3
      ? cleaned
          .split("")
          .map((c) => c + c)
          .join("")
      : cleaned;
  const n = parseInt(full, 16);
  const r = (n >> 16) & 255;
  const g = (n >> 8) & 255;
  const b = n & 255;
  return `rgba(${r},${g},${b},${alpha})`;
}

const COLUMN_CLASS: Record<number, string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
};

/* ------------------------------------------------------------------ */

export function SectionHeading({
  label,
  heading,
  headingHighlight,
  description,
  align = "left",
  accent = theme.colors.primary,
}: {
  label?: string;
  heading: string;
  headingHighlight?: string;
  description?: string;
  align?: "left" | "center";
  accent?: string;
}) {
  const alignClass = align === "center" ? "mx-auto text-center" : "";
  return (
    <div className={`max-w-2xl ${alignClass}`}>
      {label ? (
        <p
          className="text-[12px] font-semibold uppercase tracking-[0.16em]"
          style={{ color: accent }}
        >
          {label}
        </p>
      ) : null}
      <h2 className="mt-2 text-2xl font-bold leading-tight tracking-tight text-[#0f1622] sm:text-3xl lg:text-[2.1rem]">
        {withHighlightMark(heading, headingHighlight, { nowrap: false })}
      </h2>
      {description ? (
        <p className="mt-3 text-[15px] leading-relaxed text-[#475569] sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}

/* ------------------------------------------------------------------ */

export function StatBar({
  items,
  accent = theme.colors.primary,
  note,
}: {
  items: ServiceStat[];
  accent?: string;
  note?: string;
}) {
  return (
    <FadeInUp>
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {items.map((stat) => (
          <div
            key={stat.label}
            className="relative flex flex-col items-center overflow-hidden rounded-2xl border border-[#e6e8ec] bg-white px-3 py-5 text-center shadow-[0_4px_24px_rgba(15,23,42,0.06)] sm:px-4 sm:py-6"
          >
            <div
              className="absolute inset-x-0 top-0 h-0.5"
              style={{ backgroundColor: accent }}
              aria-hidden
            />
            <span
              className="text-2xl font-bold tabular-nums tracking-tight sm:text-3xl"
              style={{ color: accent }}
            >
              {stat.value}
            </span>
            <span className="mt-1.5 text-xs font-medium leading-snug text-[#475569] sm:text-sm">
              {stat.label}
            </span>
            {stat.placeholder ? (
              <span className="mt-1 rounded-full bg-[#fef3c7] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[#92400e]">
                Placeholder
              </span>
            ) : null}
          </div>
        ))}
      </div>
      {note ? (
        <p className="mt-3 text-center text-xs italic text-[#94a3b8]">{note}</p>
      ) : null}
    </FadeInUp>
  );
}

/* ------------------------------------------------------------------ */

export function CardSection({
  section,
  accent = theme.colors.primary,
}: {
  section: ServiceCardSection;
  accent?: string;
}) {
  const columns = COLUMN_CLASS[section.columns ?? 3] ?? COLUMN_CLASS[3];
  return (
    <div>
      <SectionHeading
        label={section.label}
        heading={section.heading}
        description={section.description}
        accent={accent}
      />
      <div className={`mt-8 grid grid-cols-1 gap-4 ${columns}`}>
        {section.items.map((item) => {
          const Icon = getServiceIcon(item.icon);
          return (
            <FadeInUp
              key={item.title}
              className="group rounded-2xl border border-[#e6e8ec] bg-white p-5 shadow-[0_4px_24px_rgba(15,23,42,0.05)] transition hover:-translate-y-0.5 hover:border-[#cbd5e1] hover:shadow-[0_12px_32px_rgba(15,23,42,0.08)]"
            >
              <span
                className="flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-sm"
                style={{ backgroundColor: accent }}
              >
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-[15px] font-bold text-[#0f1622]">
                {item.title}
              </h3>
              {item.description ? (
                <p className="mt-1.5 text-sm leading-relaxed text-[#475569]">
                  {item.description}
                </p>
              ) : null}
            </FadeInUp>
          );
        })}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */

export function ProcessSteps({
  section,
  accent = theme.colors.primary,
}: {
  section: ServiceProcessSection;
  accent?: string;
}) {
  return (
    <div>
      <SectionHeading
        label={section.label}
        heading={section.heading}
        description={section.description}
        accent={accent}
      />
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {section.steps.map((step, index) => (
          <FadeInUp
            key={step.title}
            className="relative rounded-2xl border border-[#e6e8ec] bg-white p-5 shadow-[0_4px_24px_rgba(15,23,42,0.05)]"
          >
            <div className="flex items-center gap-3">
              <span
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                style={{ backgroundColor: accent }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-[15px] font-bold text-[#0f1622]">
                {step.title}
              </h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-[#475569]">
              {step.description}
            </p>
          </FadeInUp>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */

export function SubCardPair({
  heading,
  description,
  items,
  accent = theme.colors.primary,
}: {
  heading?: string;
  description?: string;
  items: ServiceSubCard[];
  accent?: string;
}) {
  return (
    <div>
      {heading ? (
        <SectionHeading
          heading={heading}
          description={description}
          accent={accent}
        />
      ) : null}
      <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
        {items.map((item) => {
          const inner = (
            <div
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border p-6 transition hover:-translate-y-0.5 sm:p-7"
              style={{
                borderColor: hexToRgba(item.accent, 0.25),
                background: `linear-gradient(135deg, ${hexToRgba(
                  item.accent,
                  0.06
                )}, ${hexToRgba(item.accent, 0.02)})`,
              }}
            >
              <span
                className="inline-flex w-fit items-center rounded-full px-3 py-1 text-lg font-extrabold tracking-tight text-white"
                style={{ backgroundColor: item.accent }}
              >
                {item.name}
              </span>
              <p className="mt-4 text-lg font-semibold leading-snug text-[#0f1622]">
                {item.tagline}
              </p>
              {item.description ? (
                <p className="mt-2 text-sm leading-relaxed text-[#475569]">
                  {item.description}
                </p>
              ) : null}
              <span
                className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold transition group-hover:gap-2.5"
                style={{ color: item.accent }}
              >
                {item.cta ?? "Learn more"}
                <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          );

          return item.external ? (
            <a
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >
              {inner}
            </a>
          ) : (
            <Link key={item.id} href={item.href} className="block h-full">
              {inner}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */

export function BulletList({
  group,
  accent = theme.colors.primary,
}: {
  group: ServiceBulletGroup;
  accent?: string;
}) {
  return (
    <FadeInUp className="rounded-3xl border border-[#e6e8ec] bg-white p-6 shadow-[0_4px_24px_rgba(15,23,42,0.05)] sm:p-8">
      <h3 className="text-xl font-bold tracking-tight text-[#0f1622]">
        {group.heading}
      </h3>
      {group.description ? (
        <p className="mt-2 text-[15px] leading-relaxed text-[#475569]">
          {group.description}
        </p>
      ) : null}
      <ul className="mt-5 grid gap-3 sm:grid-cols-2">
        {group.items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span
              className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-white"
              style={{ backgroundColor: accent }}
            >
              <Check className="h-3 w-3" strokeWidth={3} />
            </span>
            <span className="text-sm leading-relaxed text-[#334155]">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </FadeInUp>
  );
}

/* ------------------------------------------------------------------ */

export function Callout({
  callout,
  accent = theme.colors.primary,
}: {
  callout: ServiceCallout;
  accent?: string;
}) {
  return (
    <FadeInUp
      className="relative overflow-hidden rounded-3xl p-6 sm:p-8"
      style={{
        background: `linear-gradient(135deg, ${hexToRgba(
          accent,
          0.1
        )}, ${hexToRgba(accent, 0.03)})`,
        border: `1px solid ${hexToRgba(accent, 0.22)}`,
      }}
    >
      {callout.heading ? (
        <h3
          className="text-lg font-bold tracking-tight"
          style={{ color: accent }}
        >
          {callout.heading}
        </h3>
      ) : null}
      <p className="mt-2 text-[15px] leading-relaxed text-[#334155] sm:text-base">
        {callout.text}
      </p>
      {callout.href && callout.linkLabel ? (
        <Link
          href={callout.href}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold transition hover:gap-2.5"
          style={{ color: accent }}
        >
          {callout.linkLabel}
          <ArrowRight className="h-4 w-4" />
        </Link>
      ) : null}
    </FadeInUp>
  );
}

/* ------------------------------------------------------------------ */

export function FlowDiagram({
  label,
  heading,
  description,
  steps,
  accent = theme.colors.primary,
}: {
  label?: string;
  heading: string;
  description?: string;
  steps: { title: string; description?: string }[];
  accent?: string;
}) {
  return (
    <div>
      <SectionHeading
        label={label}
        heading={heading}
        description={description}
        accent={accent}
      />
      <div className="mt-8 flex flex-col gap-3 lg:flex-row lg:items-stretch">
        {steps.map((step, index) => (
          <div key={step.title} className="flex items-stretch lg:flex-1">
            <FadeInUp
              className="flex-1 rounded-2xl border border-[#e6e8ec] bg-white p-5 shadow-[0_4px_24px_rgba(15,23,42,0.05)]"
              delay={index * 0.05}
            >
              <span
                className="text-[12px] font-bold uppercase tracking-wider"
                style={{ color: accent }}
              >
                Step {index + 1}
              </span>
              <h3 className="mt-2 text-[15px] font-bold text-[#0f1622]">
                {step.title}
              </h3>
              {step.description ? (
                <p className="mt-1.5 text-sm leading-relaxed text-[#475569]">
                  {step.description}
                </p>
              ) : null}
            </FadeInUp>
            {index < steps.length - 1 ? (
              <div
                className="mx-1 flex items-center justify-center text-[#cbd5e1]"
                aria-hidden
              >
                <ArrowRight className="hidden h-5 w-5 lg:block" />
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */

export function ServiceTestimonial({
  testimonial,
  accent = theme.colors.primary,
}: {
  testimonial: ServiceTestimonialContent;
  accent?: string;
}) {
  return (
    <FadeInUp
      className="relative overflow-hidden rounded-3xl border border-[#e6e8ec] bg-white p-6 shadow-[0_8px_32px_rgba(15,23,42,0.06)] sm:p-9"
    >
      <Quote
        className="absolute right-6 top-6 h-10 w-10 opacity-10"
        style={{ color: accent }}
        aria-hidden
      />
      <p className="max-w-3xl text-lg font-medium leading-relaxed text-[#0f1622] sm:text-xl">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="mt-6 flex items-center gap-3">
        {testimonial.image ? (
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            width={48}
            height={48}
            className="h-12 w-12 rounded-full object-cover"
          />
        ) : (
          <span
            className="flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold text-white"
            style={{ backgroundColor: accent }}
          >
            {testimonial.name.charAt(0)}
          </span>
        )}
        <div>
          <p className="text-[15px] font-bold text-[#0f1622]">
            {testimonial.name}
          </p>
          <p className="text-sm text-[#475569]">
            {testimonial.role}
            {testimonial.org ? `, ${testimonial.org}` : ""}
          </p>
        </div>
      </div>
    </FadeInUp>
  );
}

/* ------------------------------------------------------------------ */

export function CaseStudyGrid({
  heading,
  description,
  items,
  accent = theme.colors.primary,
}: {
  heading: string;
  description?: string;
  items: ServiceCaseStudy[];
  accent?: string;
}) {
  return (
    <div>
      <SectionHeading heading={heading} description={description} accent={accent} />
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <FadeInUp
            key={item.name}
            className="flex flex-col overflow-hidden rounded-2xl border border-[#e6e8ec] bg-white shadow-[0_4px_24px_rgba(15,23,42,0.05)]"
          >
            <div
              className="flex h-40 items-center justify-center"
              style={{
                background: `linear-gradient(135deg, ${hexToRgba(
                  accent,
                  0.18
                )}, ${hexToRgba(accent, 0.05)})`,
              }}
            >
              {item.image ? (
                <Image
                  src={item.image}
                  alt={item.name}
                  width={320}
                  height={160}
                  className="h-full w-full object-cover"
                />
              ) : (
                <span
                  className="flex h-16 w-16 items-center justify-center rounded-full text-2xl font-bold text-white"
                  style={{ backgroundColor: accent }}
                >
                  {item.name.charAt(0)}
                </span>
              )}
            </div>
            <div className="flex flex-1 flex-col p-5">
              <p className="text-[15px] leading-relaxed text-[#334155]">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className="mt-4 pt-3">
                <p className="text-sm font-bold text-[#0f1622]">{item.name}</p>
                {item.role ? (
                  <p className="text-xs text-[#64748b]">{item.role}</p>
                ) : null}
              </div>
            </div>
          </FadeInUp>
        ))}
      </div>
      <p className="mt-4 text-xs italic text-[#94a3b8]">
        {/* CMS hook: replace static stories with a case-studies collection in a future phase. */}
        Stories shown with placeholder visuals — swap for photography when available.
      </p>
    </div>
  );
}

/* ------------------------------------------------------------------ */

export function ProjectShowcase({
  label,
  heading,
  description,
  items,
  accent = theme.colors.primary,
}: {
  label?: string;
  heading: string;
  description?: string;
  items: ServiceProjectCard[];
  accent?: string;
}) {
  return (
    <div>
      <SectionHeading
        label={label}
        heading={heading}
        description={description}
        accent={accent}
      />
      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((project) => {
          const isLive = project.live !== false && !!project.href;

          const card = (
            <FadeInUp className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#e6e8ec] bg-white shadow-[0_4px_24px_rgba(15,23,42,0.05)] transition hover:-translate-y-0.5 hover:border-[#cbd5e1] hover:shadow-[0_12px_32px_rgba(15,23,42,0.08)]">
              <div className="relative aspect-16/10 overflow-hidden bg-[#f1f5f9]">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-300 group-hover:scale-[1.03]"
                />
                {!isLive ? (
                  <span className="absolute right-3 top-3 rounded-full bg-[#0f1622]/85 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-white backdrop-blur">
                    Coming soon
                  </span>
                ) : null}
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-[15px] font-bold text-[#0f1622]">
                  {project.name}
                </h3>
                {project.description ? (
                  <p className="mt-1.5 text-sm leading-relaxed text-[#475569]">
                    {project.description}
                  </p>
                ) : null}
                <span
                  className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold transition group-hover:gap-2.5"
                  style={{ color: isLive ? accent : "#94a3b8" }}
                >
                  {isLive ? (
                    <>
                      Visit site
                      <ArrowUpRight className="h-4 w-4" />
                    </>
                  ) : (
                    "Not live yet"
                  )}
                </span>
              </div>
            </FadeInUp>
          );

          return isLive ? (
            <a
              key={project.name}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >
              {card}
            </a>
          ) : (
            <div key={project.name} className="h-full">
              {card}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */

export function ServiceCta({
  cta,
  accent = theme.colors.primary,
}: {
  cta: ServiceCtaContent;
  accent?: string;
}) {
  const href = `/contact?service=${encodeURIComponent(cta.service)}`;
  return (
    <FadeInUp
      as="section"
      className="relative overflow-hidden rounded-3xl px-6 py-10 text-center sm:px-10 sm:py-14"
      style={{ backgroundColor: theme.colors.ink }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{
          background: `radial-gradient(ellipse at 30% 20%, ${hexToRgba(
            accent,
            0.35
          )}, transparent 55%), radial-gradient(ellipse at 80% 80%, ${hexToRgba(
            theme.colors.secondary,
            0.2
          )}, transparent 50%)`,
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-2xl">
        <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
          {cta.heading}
        </h2>
        {cta.description ? (
          <p className="mt-3 text-[15px] leading-relaxed text-white/75 sm:text-base">
            {cta.description}
          </p>
        ) : null}
        <Link
          href={href}
          className="mt-7 inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-[15px] font-semibold text-white shadow-lg transition hover:brightness-110"
          style={{ backgroundColor: accent }}
        >
          {cta.buttonLabel}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </FadeInUp>
  );
}

/* ------------------------------------------------------------------ */

export function CrossLinks({
  links,
  accent = theme.colors.primary,
}: {
  links: ServiceCrossLink[];
  accent?: string;
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="group flex items-center justify-between gap-4 rounded-2xl border border-[#e6e8ec] bg-[#f6f8fb] p-4 transition hover:border-[#cbd5e1] hover:bg-white"
        >
          <span className="text-sm leading-relaxed text-[#334155]">
            {link.text}
          </span>
          <span
            className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold transition group-hover:gap-2.5"
            style={{ color: accent }}
          >
            {link.label}
            <ArrowRight className="h-4 w-4" />
          </span>
        </Link>
      ))}
    </div>
  );
}
