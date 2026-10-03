"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Calendar, MapPin, Search } from "lucide-react";

import { NameCover } from "@/components/events-page/NameCover";
import { CampusDriveHero } from "@/components/events-page/CampusDriveHero";

import { theme } from "@/config/theme";
import { env } from "@/lib/config/env";
import type {
  CampusDriveItem,
  EventMode,
  EventUiStatus,
  EventsPageContent,
  EventsPageItem,
} from "@/types/events-page";

const CONFIGURED_SITE = env.dishaUrl.replace(/\/$/, "") || "https://disha.hirekarma.in";
const LIVE_LISTING_SITE = /localhost|127\.0\.0\.1/i.test(CONFIGURED_SITE)
  ? "https://disha.hirekarma.in"
  : CONFIGURED_SITE;
const DISHA_EVENT_BASE = `${LIVE_LISTING_SITE}/events`;
const DISHA_CAMPUS_DRIVES_PAGE = `${LIVE_LISTING_SITE}/jobs?category=campus_drive`;

export type EventsFocus = "overview" | "campus" | "upcoming";

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

function visitHref(event: EventsPageItem) {
  if (event.visit_href) return event.visit_href;
  return `${CONFIGURED_SITE}/events/${encodeURIComponent(event.slug)}`;
}

function eventDetailHref(event: EventsPageItem) {
  if (event.visit_href?.includes("/campus-drives/")) {
    return event.visit_href;
  }
  return `/events/${encodeURIComponent(event.slug)}`;
}

function eventApplyHref(event: EventsPageItem) {
  const base = visitHref(event);
  if (base.includes("register=1")) return base;
  const join = base.includes("?") ? "&" : "?";
  if (base.includes("/campus-drives/")) {
    return `${base}${join}register=1&action=register`;
  }
  return `${base}${join}register=1`;
}

function CardActions({
  detailHref,
  applyHref,
  detailLabel = "View details",
  applyLabel = "Apply",
  paired = false,
  showApply = true,
}: {
  detailHref: string;
  applyHref: string;
  detailLabel?: string;
  applyLabel?: string;
  paired?: boolean;
  showApply?: boolean;
}) {
  const buttonClass = paired
    ? "inline-flex flex-1 items-center justify-center rounded-lg px-3 py-2 text-[13px] font-semibold"
    : "inline-flex items-center rounded-md px-3 py-1.5 text-[12px] font-semibold";

  return (
    <div className={`mt-auto flex gap-2 pt-3 ${paired ? "" : "flex-wrap"}`}>
      {detailHref.startsWith("http") ? (
        <a
          href={detailHref}
          target="_blank"
          rel="noopener noreferrer"
          className={`${buttonClass} border border-[#1b52a4] text-[#1b52a4] transition hover:bg-[#1b52a4]/5`}
        >
          {detailLabel}
        </a>
      ) : (
        <Link
          href={detailHref}
          className={`${buttonClass} border border-[#1b52a4] text-[#1b52a4] transition hover:bg-[#1b52a4]/5`}
        >
          {detailLabel}
        </Link>
      )}
      {showApply ? (
      <a
        href={applyHref}
        target="_blank"
        rel="noopener noreferrer"
        className={`${buttonClass} gap-1 bg-[#1b52a4] text-white transition hover:brightness-110`}
      >
        {applyLabel}
        {paired ? null : <ArrowUpRight className="h-3.5 w-3.5" />}
      </a>
      ) : null}
    </div>
  );
}

function matchesDriveQuery(job: CampusDriveItem, needle: string) {
  if (!needle) return true;
  return (
    job.title.toLowerCase().includes(needle) ||
    job.company_name.toLowerCase().includes(needle) ||
    (job.location ?? "").toLowerCase().includes(needle)
  );
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

function eventStatusRank(status: EventUiStatus) {
  if (status === "live") return 0;
  if (status === "open") return 1;
  return 2;
}

function pickFeaturedEvent(items: EventsPageItem[]) {
  return (
    items.find((event) => event.status === "live") ??
    items.find((event) => event.status === "open") ??
    items.find((event) => event.status === "closed") ??
    null
  );
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
    <span className="inline-flex shrink-0 items-center gap-1 text-[10px] font-bold uppercase tracking-wide text-[#1b52a4]">
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1b52a4]/70" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#1b52a4]" />
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
      style={{ backgroundColor: theme.colors.primary }}
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
  accent,
}: {
  event: EventsPageItem;
  accent: string;
}) {
  return (
    <section className="grid overflow-hidden rounded-2xl bg-[#0f1622] shadow-[0_16px_40px_rgba(15,22,34,0.18)] lg:grid-cols-[1.15fr_1fr]">
      <div className="relative min-h-[200px] lg:min-h-[280px]">
        <NameCover
          src={event.banner_url}
          name={event.title}
          className="absolute inset-0 h-full w-full text-3xl"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0f1622] via-[#0f1622]/20 to-transparent lg:bg-gradient-to-r" />
      </div>
      <div className="relative flex flex-col justify-center px-5 py-6 sm:px-8">
        <div className="flex flex-wrap items-center gap-2">
          {event.status === "live" ? (
            <LivePill large />
          ) : (
            <span
              className="rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white"
              style={{
                backgroundColor: event.status === "open" ? theme.colors.primary : "#64748b",
              }}
            >
              {event.status === "open" ? "Open" : "Closed"}
            </span>
          )}
          <span className="text-[12px] font-semibold uppercase tracking-[0.16em] text-white/70">
            {event.status === "live"
              ? "Happening now"
              : event.status === "open"
                ? "Open"
                : "Closed"}
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
        <CardActions
          detailHref={eventDetailHref(event)}
          applyHref={eventApplyHref(event)}
          showApply={event.can_register !== false}
        />
      </div>
    </section>
  );
}

function CampusDriveBoard({
  drives,
  heading,
  headingAccent,
  preview,
  viewAllLabel = "View all",
  viewAllHref = DISHA_CAMPUS_DRIVES_PAGE,
}: {
  drives: CampusDriveItem[];
  heading: string;
  headingAccent: string;
  preview?: number;
  viewAllLabel?: string;
  viewAllHref?: string;
}) {
  const visible = preview ? drives.slice(0, preview) : drives;

  return (
    <section id="campus-drives" className="relative pl-4 sm:pl-5">
      <span
        aria-hidden
        className="absolute bottom-0 left-0 top-0 w-1 overflow-hidden rounded-full bg-[#1b52a4]"
      >
        <span className="absolute inset-0 animate-pulse bg-[#1b52a4]/70" />
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
          <p className="mt-1 text-[13px] font-semibold text-[#1b52a4]">
            Happening now
          </p>
        </div>
        <a
          href={viewAllHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-1 pt-1 text-[13px] font-semibold text-[#1b52a4] underline-offset-4 transition hover:underline"
        >
          {viewAllLabel}
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
            <CampusDriveCard key={job.id} job={job} />
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

function CampusDriveCard({ job }: { job: CampusDriveItem }) {
  const pay = formatCampusPay(job);
  const details = [
    cityLabel(job.location),
    job.campus_drive_date ? formatEventDate(job.campus_drive_date) : "",
    jobTypeLabel(job.job_type),
    workModeLabel(job.mode_of_work),
  ]
    .filter(Boolean)
    .join(" · ");

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#e6e8ec] bg-white shadow-[0_4px_14px_rgba(15,22,34,0.04)] transition hover:-translate-y-1 hover:border-[#1b52a4]/40 hover:shadow-[0_14px_28px_rgba(27,82,164,0.12)]">
      <div className="relative aspect-video bg-[#e8eef8]">
        <NameCover
          src={job.company_logo}
          name={job.company_name || job.title}
          className="absolute inset-0 h-full w-full text-2xl"
        />
      </div>
      <div className="flex flex-1 flex-col gap-1.5 p-4">
        <div className="flex items-start gap-2">
          <h3 className="min-w-0 flex-1 text-[15px] font-bold leading-snug text-[#0f1622]">
            {job.title}
          </h3>
          <CompactLiveMark />
        </div>
        <p className="text-xs text-[#64748b]">{job.company_name}</p>
        <p className="truncate text-[14px] font-bold leading-tight text-[#1b52a4]">{pay}</p>
        {details ? <p className="truncate text-[12px] text-[#64748b]">{details}</p> : null}
        <CardActions detailHref={job.detail_href || "/events/campus-drives"} applyHref={job.visit_href} />
      </div>
    </article>
  );
}

function EventCard({
  event,
  accent,
  primary,
}: {
  event: EventsPageItem;
  accent: string;
  primary: string;
}) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-[#e6e8ec] bg-white shadow-[0_4px_16px_rgba(15,22,34,0.04)] transition hover:-translate-y-0.5 hover:border-[#1b52a4]/40 hover:shadow-[0_12px_28px_rgba(15,22,34,0.08)]">
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#e8eef8]">
        <NameCover
          src={event.banner_url}
          name={event.title}
          className="absolute inset-0 h-full w-full text-2xl"
        />
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
        <CardActions
          detailHref={eventDetailHref(event)}
          applyHref={eventApplyHref(event)}
          detailLabel={
            event.visit_href?.includes("/campus-drives/")
              ? "View Campus Drive"
              : "View Event"
          }
          applyLabel={
            event.visit_href?.includes("/campus-drives/")
              ? "Register Campus Drive"
              : "Register Event"
          }
          paired
          showApply={event.can_register !== false}
        />
      </div>
    </article>
  );
}

function SectionSwitch({ focus }: { focus: EventsFocus }) {
  const items: { id: EventsFocus; label: string; href: string }[] = [
    { id: "campus", label: "Campus Drive", href: "/events/campus-drives" },
    { id: "upcoming", label: "Upcoming Events", href: "/events/upcoming" },
  ];

  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {items.map((item) => {
        const active = focus === item.id;
        return (
          <Link
            key={item.id}
            href={item.href}
            className={`rounded-full px-3 py-1.5 text-[12px] font-semibold transition ${
              active
                ? "bg-[#1b52a4] text-white"
                : "border border-[#e6e8ec] bg-[#f6f8fb] text-[#334155] hover:border-[#1b52a4]/35"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}

function DishaListingLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex shrink-0 items-center gap-1 pt-1 text-[13px] font-semibold text-[#1b52a4] underline-offset-4 transition hover:underline"
    >
      {label}
      <ArrowUpRight className="h-3.5 w-3.5" />
    </a>
  );
}

export function EventsPageView({
  content,
  focus = "overview",
}: {
  content: EventsPageContent;
  focus?: EventsFocus;
}) {
  const { hero: pageHero, events, campusDrives, liveCampusDrives, campusPrograms } = content;
  const accent = theme.colors.secondary;
  const primary = theme.colors.primary;
  const drives = liveCampusDrives ?? [];
  const programs = campusPrograms ?? [];
  const [query, setQuery] = useState("");
  const [heroTab, setHeroTab] = useState<"campus" | "upcoming">(
    focus === "campus" ? "campus" : focus === "upcoming" ? "upcoming" : "campus"
  );
  const [eventScope, setEventScope] = useState<"all" | "open" | "closed">("all");
  const needle = query.trim().toLowerCase();

  const filteredDrives = useMemo(
    () => drives.filter((job) => matchesDriveQuery(job, needle)),
    [drives, needle]
  );

  const filteredPrograms = useMemo(
    () => programs.filter((event) => matchesEventQuery(event, needle)),
    [programs, needle]
  );

  const eventSource = events;

  const searchedEvents = useMemo(
    () => eventSource.filter((event) => matchesEventQuery(event, needle)),
    [eventSource, needle]
  );

  const filteredEvents = useMemo(
    () =>
      searchedEvents
        .filter((event) => {
          if (eventScope === "open") return event.status === "live" || event.status === "open";
          if (eventScope === "closed") return event.status === "closed";
          return true;
        })
        .sort((a, b) => eventStatusRank(a.status) - eventStatusRank(b.status)),
    [searchedEvents, eventScope]
  );

  const isOverview = focus === "overview";
  const isCampus = focus === "campus";

  const featuredEvent = isCampus ? null : pickFeaturedEvent(events);
  const featuredProgram = isCampus ? pickFeaturedEvent(programs) : null;

  const hasMatches = isOverview
    ? filteredDrives.length > 0 || searchedEvents.length > 0
    : isCampus
      ? filteredPrograms.length > 0
      : searchedEvents.length > 0;

  const hero = isOverview
    ? pageHero
    : isCampus
      ? {
          label: "Campus Drive",
          heading: campusDrives.heading || "Campus drives",
          headingAccent: campusDrives.headingAccent,
          description:
            "Live drives stay up front. Visit opens that drive on Disha, and All campus drives opens the full Disha list.",
          searchPlaceholder: "Search campus drives",
        }
      : {
          label: "Upcoming Events",
          heading: "Upcoming",
          headingAccent: "Events",
          description:
            "Open and live events from Disha. Visit opens the event on Disha.",
          searchPlaceholder: "Search upcoming events",
        };

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
              {isOverview ? null : <SectionSwitch focus={focus} />}
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

      <div className="content-container space-y-6 py-5">
        <CampusDriveHero
          drives={drives}
          featuredEvents={events}
          activeTab={heroTab}
          onTabChange={setHeroTab}
        />
        {!hasMatches ? (
          isOverview ? (
            <p className="text-sm text-[#475569]">No matches for this search.</p>
          ) : (
            <div className="space-y-3">
              <p className="text-sm text-[#475569]">
                {isCampus
                  ? "No campus drives to show right now."
                  : "No upcoming events to show right now."}
              </p>
              <DishaListingLink
                href={isCampus ? DISHA_CAMPUS_DRIVES_PAGE : DISHA_EVENT_BASE}
                label={isCampus ? "All campus drives" : "All events on Disha"}
              />
            </div>
          )
        ) : (
          <>
            {isOverview && filteredDrives.length > 0 ? (
              <CampusDriveBoard
                drives={filteredDrives}
                heading={campusDrives.heading}
                headingAccent={campusDrives.headingAccent}
                preview={isOverview ? 4 : undefined}
                viewAllLabel={isOverview ? "View all" : "All campus drives"}
                viewAllHref={
                  isOverview ? DISHA_CAMPUS_DRIVES_PAGE : `${CONFIGURED_SITE}/campus-drives`
                }
              />
            ) : null}

            {isCampus && filteredPrograms.length > 0 ? (
              <section id="all-campus-drives">
                <div className="flex flex-wrap items-end justify-between gap-3">
                  <div>
                    <h2 className="text-lg font-bold tracking-tight text-[#0f1622] sm:text-xl">
                      All campus drives
                    </h2>
                    <p className="mt-1 text-sm text-[#64748b]">
                      Every published campus drive from Disha. Visit opens it there.
                    </p>
                  </div>
                  <DishaListingLink
                    href={`${CONFIGURED_SITE}/campus-drives`}
                    label="All campus drives"
                  />
                </div>
                <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {filteredPrograms.map((event) => (
                    <EventCard
                      key={event.id}
                      event={event}
                      accent={accent}
                      primary={primary}
                    />
                  ))}
                </div>
              </section>
            ) : null}

            {!isCampus && searchedEvents.length > 0 ? (
              <section id={isOverview ? "all-events" : "upcoming-events"}>
                <div className="flex flex-wrap items-end justify-between gap-3">
                  <div>
                    <h2 className="text-lg font-bold tracking-tight text-[#0f1622] sm:text-xl">
                      {isOverview ? "All Events" : "Upcoming events"}
                    </h2>
                    <p className="mt-1 text-sm text-[#64748b]">
                      Discover opportunities happening near you
                    </p>
                  </div>
                  <DishaListingLink href={DISHA_EVENT_BASE} label="View all" />
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  <LocationChip
                    label="All"
                    active={eventScope === "all"}
                    onClick={() => setEventScope("all")}
                  />
                  <LocationChip
                    label="Open"
                    active={eventScope === "open"}
                    onClick={() => setEventScope("open")}
                  />
                  <LocationChip
                    label="Close"
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
