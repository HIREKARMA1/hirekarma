"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Quote,
} from "lucide-react";

import { theme } from "@/config/theme";
import type { ImpactStoryDetail } from "@/types/impact-page";

function StoryCta({
  href,
  label,
  variant = "primary",
}: {
  href: string;
  label: string;
  variant?: "primary" | "outline";
}) {
  const isExternal = href.startsWith("http");
  const className =
    variant === "primary"
      ? "inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-white transition hover:brightness-110"
      : "inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[#e6e8ec] bg-white px-4 py-3 text-sm font-semibold text-[#0f1622] transition hover:border-[#00a2e5]/4 hover:text-[#1b52a4]";
  const style =
    variant === "primary"
      ? { backgroundColor: theme.colors.primary }
      : undefined;

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        style={style}
      >
        {label}
        <ArrowUpRight className="h-4 w-4" />
      </a>
    );
  }

  return (
    <Link href={href} className={className} style={style}>
      {label}
      <ArrowRight className="h-4 w-4" />
    </Link>
  );
}

export function ImpactStoryDetailView({
  story,
}: {
  story: ImpactStoryDetail;
  partnersNote?: string;
}) {
  const accent = theme.colors.secondary;

  return (
    <main className="relative min-h-screen w-full overflow-x-clip bg-[#f6f8fb]">
      {/* Editorial header — same rhythm as blog articles */}
      <section className="relative bg-white pt-24 pb-8 sm:pt-28 sm:pb-10 lg:pt-32">
        <div className="content-container">
          <Link
            href="/impact#browse-stories"
            className="inline-flex items-center gap-1 text-sm font-semibold text-slate-500 transition hover:text-[#00a2e5]"
          >
            ← Back to Impact
          </Link>

          <p
            className="mt-6 text-[11px] font-semibold uppercase tracking-[0.18em]"
            style={{ color: accent }}
          >
            {story.label}
          </p>

          <h1 className="mt-3 max-w-4xl text-3xl font-bold tracking-tight text-[#0f1622] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
            {story.heading}{" "}
            <span style={{ color: theme.colors.primary }}>
              {story.headingAccent}
            </span>
          </h1>

          <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
            {story.description}
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-slate-500">
            {story.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[#e6e8ec] bg-[#f6f8fb] px-3 py-1 text-[12px] font-semibold text-[#0f1622]/7"
              >
                {tag}
              </span>
            ))}
            <span className="text-slate-300">·</span>
            <span>{story.breadcrumb}</span>
          </div>
        </div>
      </section>

      {/* Body: article + sticky sidebar */}
      <section className="relative pb-14 pt-2 sm:pb-16 sm:pt-4">
        <div className="content-container">
          <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_280px] xl:gap-10">
            <article className="min-w-0">
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-[#e6e8ec] bg-white shadow-[0_12px_40px_rgba(15,22,34,0.06)]">
                <Image
                  src={story.heroImage}
                  alt={story.heroImageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 100vw, 820px"
                  priority
                />
              </div>

              <div className="mt-8 space-y-8 rounded-2xl border border-[#e6e8ec] bg-white p-5 ring-1 ring-slate-100 sm:p-8">
                {story.columns.map((column) => (
                  <section key={column.title}>
                    <h2 className="text-xl font-bold tracking-tight text-[#0f1622]">
                      {column.title}
                    </h2>
                    <ul className="mt-4 space-y-3">
                      {column.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 text-[15px] leading-relaxed text-slate-600"
                        >
                          <CheckCircle2
                            className="mt-0.5 h-5 w-5 shrink-0"
                            style={{ color: accent }}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}

                {story.metrics && story.metrics.length > 0 ? (
                  <section>
                    <h2 className="text-xl font-bold tracking-tight text-[#0f1622]">
                      Results at a glance
                    </h2>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      {story.metrics.map((metric) => (
                        <div
                          key={`${metric.value}-${metric.label}`}
                          className="rounded-2xl border border-[#e6e8ec] bg-[#f6f8fb] px-4 py-4"
                        >
                          <p
                            className="text-2xl font-bold tracking-tight"
                            style={{ color: theme.colors.primary }}
                          >
                            {metric.value}
                          </p>
                          <p className="mt-1 text-sm text-slate-600">
                            {metric.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>
                ) : null}

                {story.approaches && story.approaches.length > 0 ? (
                  <section>
                    <h2 className="text-xl font-bold tracking-tight text-[#0f1622]">
                      How we approached it
                    </h2>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {story.approaches.map((item) => (
                        <div
                          key={item.title}
                          className="rounded-2xl border border-[#e6e8ec] bg-[#f6f8fb] px-4 py-4"
                        >
                          <h3 className="text-sm font-bold text-[#0f1622]">
                            {item.title}
                          </h3>
                          <p className="mt-1 text-sm leading-relaxed text-slate-600">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>
                ) : null}
              </div>

              <section className="mt-8 rounded-2xl border border-[#e6e8ec] bg-white p-6 ring-1 ring-slate-100 sm:p-8">
                <Quote
                  className="h-8 w-8"
                  style={{ color: theme.colors.primary }}
                />
                <blockquote className="mt-3 text-lg leading-relaxed text-[#0f1622]/85 sm:text-xl">
                  “{story.quote}”
                </blockquote>
                <div className="mt-5 flex items-center gap-3">
                  {story.quoteImage ? (
                    <div className="relative h-12 w-12 overflow-hidden rounded-full border-2 border-white shadow">
                      <Image
                        src={story.quoteImage}
                        alt={story.quoteName}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </div>
                  ) : (
                    <span
                      className="grid size-12 place-items-center rounded-full text-sm font-bold text-white"
                      style={{ background: theme.gradients.brand }}
                      aria-hidden
                    >
                      HK
                    </span>
                  )}
                  <div>
                    <p className="text-sm font-bold text-[#0f1622]">
                      {story.quoteName}
                    </p>
                    <p className="text-[12px] text-slate-500">
                      {story.quoteRole}
                    </p>
                  </div>
                </div>
              </section>
            </article>

            <aside className="h-fit rounded-2xl border border-[#e6e8ec] bg-white p-5 ring-1 ring-slate-100 lg:sticky lg:top-24">
              <h4 className="text-sm font-bold text-[#0f1622]">Continue</h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Explore the product behind this story, or browse more Impact
                case studies.
              </p>

              <div className="mt-4 space-y-2.5">
                <StoryCta
                  href={story.primaryCta.href}
                  label={story.primaryCta.label}
                  variant="primary"
                />
                <StoryCta
                  href={story.secondaryCta.href}
                  label={story.secondaryCta.label}
                  variant="outline"
                />
              </div>

              <hr className="my-5 border-[#e6e8ec]" />

              <h4 className="text-sm font-bold text-[#0f1622]">Focus areas</h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {story.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[#f6f8fb] px-2.5 py-1 text-[11px] font-semibold text-[#0f1622]/7"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
