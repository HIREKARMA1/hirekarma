"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Calendar, MapPin, Search } from "lucide-react";

import { theme } from "@/config/theme";
import type {
  CampusDriveItem,
  EventMode,
  EventUiStatus,
  EventsPageContent,
  EventsPageItem,
} from "@/types/events-page";

const DISHA_EVENT_BASE = "https://disha.hirekarma.in/events";
const DISHA_CAMPUS_DRIVES_PAGE =
  "https://disha.hirekarma.in/jobs?is_campus_drive=true";

const MODE_LABEL: Record<EventMode, string> = {
  online: "Online",
  offline: "Offline",
  hybrid: "Hybrid",
};

function formatEventDate(iso: string) {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;
  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function visitHref(slug: string) {
  return `${DISHA_EVENT_BASE}/${encodeURIComponent(slug)}`;
}

function matchesDriveQuery(job: CampusDriveItem, needle: string) {
  if (!needle) return true;
  return (
    job.title.toLowerCase().includes(needle) ||
    job.company_name.toLowerCase().includes(needle) ||
    (job.location ?? "").toLowerCase().includes(needle)
  );
}

function cityLabel(location?: string) {
  const value = location?.trim() ?? "";
  if (!value) return "";
  return value.split(",")[0]?.trim() ?? value;
}

function parsePayAmount(value?: string) {
  if (!value) return null;
  const amount = Number(value.replace(/,/g, ""));
  return Number.isFinite(amount) && amount > 0 ? amount : null;
}

function formatInr(amount: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

function formatCampusPay(job: CampusDriveItem) {
  const ctc =
    parsePayAmount(job.ctc_after_probation) ??
    parsePayAmount(job.ctc_with_probation);
  if (ctc) return formatInr(ctc);

  const min = parsePayAmount(job.salary_min);
  const max = parsePayAmount(job.salary_max);
  if (min && max) {
    return min === max ? formatInr(min) : `${formatInr(min)} – ${formatInr(max)}`;
  }
  if (min) return formatInr(min);
  if (max) return formatInr(max);
  return "Not disclosed";
}

const JOB_TYPE_LABEL: Record<string, string> = {
  full_time: "Full-time",
  part_time: "Part-time",
  internship: "Internship",
  contract: "Contract",
};

const WORK_MODE_LABEL: Record<string, string> = {
  onsite: "Onsite",
  offline: "Onsite",
  remote: "Remote",
  hybrid: "Hybrid",
};

function jobTypeLabel(value?: string) {
  if (!value) return "";
  return JOB_TYPE_LABEL[value] ?? value.replace(/_/g, " ");
}

function workModeLabel(value?: string) {
  if (!value) return "";
  return WORK_MODE_LABEL[value] ?? value.replace(/_/g, " ");
}

function eventStatusRank(status: EventUiStatus) {
  if (status === "live") return 0;
  if (status === "open") return 1;
  return 2;
}

function matchesEventQuery(event: EventsPageItem, needle: string) {
  if (!needle) return true;
  return [
    event.title,
    event.short_description,
    event.venue,
    event.organizer_name,
  ]
    .filter((value): value is string => Boolean(value))
    .some((value) => value.toLowerCase().includes(needle));
}

function CompactLiveMark() {
  return (
    <span className="inline-flex shrink-0 items-center gap-1 text-[10px] font-bold uppercase tracking-wide text-[#098855]">
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#098855]/70" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#098855]" />
      </span>
      Live
    </span>
  );
}

function LivePill({ large = false }: { large?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full font-bold uppercase tracking-wide text-white ${
        large ? "px-2.5 py-1 text-[11px]" : "px-2 py-0.5 text-[10px]"
      }`}
      style={{ backgroundColor: theme.colors.green }}
    >
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/80 opacity-75" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white" />
      </span>
      Live
    </span>
  );
}

function StatusPill({ status }: { status: EventUiStatus }) {
  if (status === "live") return <LivePill />;
  if (status === "open") {
    return (
      <span
        className="rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white"
        style={{ backgroundColor: theme.colors.primary }}
      >
        Open
      </span>
    );
  }
  return (
    <span className="rounded-full bg-[#64748b] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
      Closed
    </span>
  );
}

function LiveNowBanner({
  event,
  visitLabel,
  accent,
}: {
  event: EventsPageItem;
  visitLabel: string;
  accent: string;
}) {
  return (
    <a
      href={visitHref(event.slug)}
      target="_blank"
      rel="noopener noreferrer"
      className="group grid overflow-hidden rounded-2xl bg-[#0f1622] shadow-[0_16px_40px_rgba(15,22,34,0.18)] transition hover:shadow-[0_20px_48px_rgba(15,22,34,0.24)] lg:grid-cols-[1.15fr_1fr]"
    >
      <div className="relative min-h-[200px] lg:min-h-[280px]">
        {event.banner_url ? (
          <Image
            src={event.banner_url}
            alt={event.title}
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 55vw"
            priority
          />
        ) : (
          <div className="absolute inset-0 bg-[#1b52a4]" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f1622] via-[#0f1622]/20 to-transparent lg:bg-gradient-to-r" />
      </div>
      <div className="relative flex flex-col justify-center px-5 py-6 sm:px-8">
        <div className="flex flex-wrap items-center gap-2">
          <LivePill large />
          <span className="text-[12px] font-semibold uppercase tracking-[0.16em] text-white/70">
            Happening now
          </span>
        </div>
        <h2 className="mt-3 text-[1.35rem] font-bold leading-tight tracking-tight text-white sm:text-[1.65rem]">
          {event.title}
        </h2>
        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[13px] text-white/75">
          <span className="inline-flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" style={{ color: accent }} />
            {formatEventDate(event.event_start_date)}
          </span>
          {event.venue ? (
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" style={{ color: accent }} />
              {event.venue}
            </span>
          ) : null}
        </div>
        {event.short_description ? (
          <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-white/80">
            {event.short_description}
          </p>
        ) : null}
        <span
          className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-md px-4 py-2 text-sm font-semibold text-white transition group-hover:brightness-110"
          style={{ backgroundColor: theme.colors.green }}
        >
          {visitLabel}
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </a>
  );
}

const CAMPUS_DRIVE_PREVIEW = 4;

function CampusDriveBoard({
  drives,
  visitLabel,
  heading,
  headingAccent,
}: {
  drives: CampusDriveItem[];
  visitLabel: string;
  heading: string;
  headingAccent: string;
}) {
  const visible = drives.slice(0, CAMPUS_DRIVE_PREVIEW);

  return (
    <section id="campus-drives" className="relative pl-4 sm:pl-5">
      <span
        aria-hidden
        className="absolute bottom-0 left-0 top-0 w-1 overflow-hidden rounded-full bg-[#098855]"
      >
        <span className="absolute inset-0 animate-pulse bg-[#36c48a]" />
      </span>
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <div className="flex flex-wrap items-center gap-2.5">
            <LivePill large />
            <h2 className="text-xl font-bold tracking-tight text-[#0f1622] sm:text-[1.35rem]">
              {heading}
              {headingAccent ? ` ${headingAccent}` : ""}
            </h2>
          </div>
          <p className="mt-1 text-[13px] font-semibold text-[#098855]">
            Happening now
          </p>
        </div>
        <a
          href={DISHA_CAMPUS_DRIVES_PAGE}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-1 pt-1 text-[13px] font-semibold text-[#1b52a4] underline-offset-4 transition hover:underline"
        >
          View all
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>

      {visible.length === 0 ? (
        <p className="mt-5 text-sm text-[#475569]">
          No campus drives to show right now.
        </p>
      ) : (
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {visible.map((job) => (
            <CampusDriveCard key={job.id} job={job} visitLabel={visitLabel} />
          ))}
        </div>
      )}
    </section>
  );
}

function LocationChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full px-3 py-1.5 text-[12px] font-semibold transition ${
        active
          ? "bg-[#1b52a4] text-white"
          : "border border-[#e6e8ec] bg-white text-[#334155] hover:border-[#1b52a4]/35"
      }`}
    >
      {label}
    </button>
  );
}

function CampusDriveCard({
  job,
  visitLabel,
}: {
  job: CampusDriveItem;
  visitLabel: string;
}) {
  const city = cityLabel(job.location);
  const pay = formatCampusPay(job);
  const type = jobTypeLabel(job.job_type);
  const workMode = workModeLabel(job.mode_of_work);

  return (
    <a
      href={job.visit_href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full gap-3 rounded-xl border border-[#e6e8ec] bg-white p-3.5 shadow-[0_4px_14px_rgba(15,22,34,0.04)] transition hover:-translate-y-1 hover:border-[#098855]/45 hover:shadow-[0_14px_28px_rgba(9,136,85,0.12)]"
    >
      <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-lg border border-[#e6e8ec] bg-[#f6f8fb]">
        {job.company_logo ? (
          <Image
            src={job.company_logo}
            alt={job.company_name}
            fill
            className="object-contain p-1"
            sizes="48px"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-[10px] font-bold text-[#0f1622]">
            {job.company_name.slice(0, 2).toUpperCase()}
          </div>
        )}
      </div>
      <div className="flex min-w-0 flex-1 flex-col">
        <div className="flex items-center gap-2">
          <h3 className="min-w-0 flex-1 truncate text-[15px] font-bold leading-snug text-[#0f1622]">
            {job.title}
          </h3>
          <CompactLiveMark />
        </div>
        <p className="mt-0.5 truncate text-[12px] font-medium text-[#64748b]">
          {job.company_name}
        </p>
        <p className="mt-2 truncate text-[14px] font-bold leading-tight text-[#098855]">
          {pay}
        </p>
        <p className="mt-1.5 truncate text-[12px] text-[#64748b]">
          {[
            city,
            job.campus_drive_date
              ? formatEventDate(job.campus_drive_date)
              : "",
            type,
            workMode,
          ]
            .filter(Boolean)
            .join(" · ")}
        </p>
        <span className="mt-auto inline-flex items-center gap-1 pt-3 text-[13px] font-semibold text-[#1b52a4] underline-offset-4 transition group-hover:gap-1.5 group-hover:underline">
          {visitLabel}
          <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
        </span>
      </div>
    </a>
  );
}

function EventCard({
  event,
  visitLabel,
  accent,
  primary,
}: {
  event: EventsPageItem;
  visitLabel: string;
  accent: string;
  primary: string;
}) {
  return (
    <a
      href={visitHref(event.slug)}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-[#e6e8ec] bg-white shadow-[0_4px_16px_rgba(15,22,34,0.04)] transition hover:-translate-y-0.5 hover:border-[#1b52a4]/40 hover:shadow-[0_12px_28px_rgba(15,22,34,0.08)]"
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#0f1622]">
        {event.banner_url ? (
          <Image
            src={event.banner_url}
            alt={event.title}
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-[#0f1622] px-3 text-center text-sm font-semibold text-white/80">
            {event.title}
          </div>
        )}
        <div className="absolute bottom-2 left-2 flex flex-wrap gap-1.5">
          <StatusPill status={event.status} />
          <span
            className="rounded-full px-2 py-0.5 text-[10px] font-bold text-white"
            style={{ backgroundColor: primary }}
          >
            {MODE_LABEL[event.mode]}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col px-3.5 py-3">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-medium text-[#64748b]">
          <span className="inline-flex items-center gap-1">
            <Calendar className="h-3 w-3" style={{ color: accent }} />
            {formatEventDate(event.event_start_date)}
          </span>
          {event.venue ? (
            <span className="inline-flex min-w-0 items-center gap-1">
              <MapPin className="h-3 w-3 shrink-0" style={{ color: accent }} />
              <span className="truncate">{event.venue}</span>
            </span>
          ) : null}
        </div>
        <h3 className="mt-1.5 line-clamp-2 text-[15px] font-bold leading-snug tracking-tight text-[#0f1622]">
          {event.title}
        </h3>
        <span className="mt-auto inline-flex items-center gap-1 pt-3 text-[13px] font-semibold text-[#1b52a4] underline-offset-4 transition group-hover:underline">
          {visitLabel}
          <ArrowUpRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </a>
  );
}

export function EventsPageView({ content }: { content: EventsPageContent }) {
  const { hero, events, visitLabel, campusDrives, liveCampusDrives } = content;
  const accent = theme.colors.secondary;
  const primary = theme.colors.primary;
  const drives = liveCampusDrives ?? [];
  const [query, setQuery] = useState("");
  const [eventScope, setEventScope] = useState<"all" | "live" | "open" | "closed">(
    "all"
  );
  const needle = query.trim().toLowerCase();

  const filteredDrives = useMemo(
    () => drives.filter((job) => matchesDriveQuery(job, needle)),
    [drives, needle]
  );

  const searchedEvents = useMemo(
    () => events.filter((event) => matchesEventQuery(event, needle)),
    [events, needle]
  );

  const filteredEvents = useMemo(
    () =>
      searchedEvents
        .filter((event) => {
          if (eventScope === "live") return event.status === "live";
          if (eventScope === "open") return event.status === "live" || event.status === "open";
          if (eventScope === "closed") return event.status === "closed";
          return true;
        })
        .sort((a, b) => eventStatusRank(a.status) - eventStatusRank(b.status)),
    [searchedEvents, eventScope]
  );

  const featuredLive =
    eventScope === "closed"
      ? null
      : searchedEvents.find((event) => event.status === "live") ?? null;
  const showCampusSection = filteredDrives.length > 0;
  const showEventsSection = searchedEvents.length > 0;
  const hasMatches = showCampusSection || showEventsSection;

  return (
    <main className="min-h-screen bg-[#f6f8fb]">
      <section className="border-b border-[#e6e8ec] bg-white">
        <div className="content-container py-4">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
            <div className="min-w-0">
              <p
                className="text-[11px] font-semibold uppercase tracking-[0.2em]"
                style={{ color: accent }}
              >
                {hero.label}
              </p>
              <h1 className="mt-1 max-w-xl text-[1.45rem] font-bold leading-tight tracking-tight text-[#0f1622] sm:text-[1.7rem]">
                <span style={{ color: theme.colors.primary }}>{hero.heading}</span>{" "}
                {hero.headingAccent}
              </h1>
              <p className="mt-1.5 max-w-lg text-sm text-[#64748b]">{hero.description}</p>
            </div>

            <label className="flex w-full shrink-0 items-center gap-3 rounded-full border border-[#e6e8ec] bg-[#f6f8fb] px-4 py-2 shadow-[0_4px_16px_rgba(15,22,34,0.04)] transition focus-within:border-[#1b52a4]/35 focus-within:bg-white lg:mt-1 lg:w-[300px]">
              <Search className="h-4 w-4 shrink-0 text-[#94a3b8]" />
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={
                  hero.searchPlaceholder ?? "Search events or campus drives"
                }
                className="w-full bg-transparent text-[14px] text-[#0f1622] outline-none placeholder:text-[#94a3b8]"
              />
            </label>
          </div>
        </div>
      </section>

      <div className="content-container space-y-5 py-4">
        {!hasMatches ? (
          <p className="text-sm text-[#475569]">No matches for this search.</p>
        ) : (
          <>
            {showEventsSection && featuredLive ? (
              <section>
                <LiveNowBanner
                  event={featuredLive}
                  visitLabel={visitLabel}
                  accent={accent}
                />
              </section>
            ) : null}

            {showCampusSection ? (
              <CampusDriveBoard
                drives={filteredDrives}
                visitLabel={visitLabel}
                heading={campusDrives.heading}
                headingAccent={campusDrives.headingAccent}
              />
            ) : null}

            {showEventsSection ? (
              <section id="all-events">
                <h2 className="text-lg font-bold tracking-tight text-[#0f1622] sm:text-xl">
                  All Events
                </h2>
                <p className="mt-1 text-sm text-[#64748b]">
                  Discover opportunities happening near you
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <LocationChip
                    label="All"
                    active={eventScope === "all"}
                    onClick={() => setEventScope("all")}
                  />
                  <LocationChip
                    label="Live"
                    active={eventScope === "live"}
                    onClick={() => setEventScope("live")}
                  />
                  <LocationChip
                    label="Open"
                    active={eventScope === "open"}
                    onClick={() => setEventScope("open")}
                  />
                  <LocationChip
                    label="Closed"
                    active={eventScope === "closed"}
                    onClick={() => setEventScope("closed")}
                  />
                </div>

                {filteredEvents.length === 0 ? (
                  <p className="mt-6 text-sm text-[#475569]">
                    No events match this filter.
                  </p>
                ) : (
                  <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {filteredEvents.map((event) => (
                      <EventCard
                        key={event.id}
                        event={event}
                        visitLabel={visitLabel}
                        accent={accent}
                        primary={primary}
                      />
                    ))}
                  </div>
                )}
              </section>
            ) : null}
          </>
        )}
      </div>
    </main>
  );
}
