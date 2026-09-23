import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { theme } from "@/config/theme";

interface EventsPlaceholderPageProps {
  title: string;
  description: string;
}

export default function EventsPlaceholderPage({
  title,
  description,
}: EventsPlaceholderPageProps) {
  const ink = theme.colors.ink;
  const primary = theme.colors.primary;

  return (
    <main className="min-h-screen bg-white">
      <section className="relative overflow-hidden" style={{ backgroundColor: ink }}>
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div
            className="absolute inset-0 opacity-35"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,162,229,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,162,229,0.05) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
          <div
            className="absolute -left-20 top-0 h-72 w-72 rounded-full blur-[110px]"
            style={{ backgroundColor: "rgba(27,82,164,0.4)" }}
          />
          <div
            className="absolute right-0 top-1/4 h-64 w-64 rounded-full blur-[100px]"
            style={{ backgroundColor: "rgba(0,162,229,0.22)" }}
          />
        </div>

        <div className="relative content-container pb-16 pt-28 lg:pb-24 lg:pt-36">
          <div className="mx-auto max-w-2xl text-center">
            <p
              className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em]"
              style={{ color: theme.colors.secondary }}
            >
              Events
            </p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {title}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-white/75 sm:text-lg">
              {description}
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-1.5 rounded-lg px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-110"
                style={{ backgroundColor: primary }}
              >
                Back to Home
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="https://disha.hirekarma.in/events"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-white/25 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                View Upcoming Events
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
