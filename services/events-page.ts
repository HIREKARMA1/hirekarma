import fallbackContent from "@/data/events-page/en.json";
import { env } from "@/lib/config/env";
import { resolveDriveCardLocation } from "@/lib/utils/driveCardDisplay";
import type {
  CampusDriveItem,
  EventMode,
  EventUiStatus,
  EventsPageContent,
  EventsPageItem,
} from "@/types/events-page";

function trimSlash(value: string) {
  return value.replace(/\/$/, "");
}

const LIVE_API_BASE = "https://api.disha.hirekarma.in";
const LIVE_SITE_BASE = "https://disha.hirekarma.in";

const DISHA_API_BASE = trimSlash(env.apiBaseUrl || LIVE_API_BASE);
const DISHA_SITE_BASE = trimSlash(env.dishaUrl || LIVE_SITE_BASE);

function isLoopback(value: string) {
  return /localhost|127\.0\.0\.1/i.test(value);
}

/** Local dev only. Production builds never merge the localhost catalog. */
const includeLiveCatalog =
  process.env.NODE_ENV === "development" && isLoopback(DISHA_API_BASE);

const fallback = {
  ...fallbackContent,
  campusPrograms: [],
} as EventsPageContent;

const MODES: EventMode[] = ["online", "offline", "hybrid"];

function stripHtml(value: string) {
  return value.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

function asMode(value: unknown): EventMode {
  return MODES.includes(value as EventMode) ? (value as EventMode) : "online";
}

function asEventStatus(
  contestStatus: unknown,
  registrationState: unknown
): EventUiStatus {
  const status = String(contestStatus ?? "").toLowerCase();
  if (status === "live") return "live";
  if (status === "upcoming" || status === "postponed") return "open";
  if (
    status === "closed" ||
    status === "archived" ||
    status === "cancelled" ||
    status === "draft"
  ) {
    return "closed";
  }
  if (registrationState === "registration_open" || registrationState === "event_started") {
    return registrationState === "event_started" ? "live" : "open";
  }
  if (registrationState === "event_completed" || registrationState === "registration_closed") {
    return "closed";
  }
  return "open";
}

function statusRank(status: EventUiStatus) {
  if (status === "live") return 0;
  if (status === "open") return 1;
  return 2;
}

function mapEvent(raw: Record<string, unknown>, siteBase: string): EventsPageItem | null {
  const slug = typeof raw.slug === "string" ? raw.slug.trim() : "";
  const title = typeof raw.title === "string" ? raw.title.trim() : "";
  if (!slug || !title) return null;

  const description =
    typeof raw.short_description === "string"
      ? stripHtml(raw.short_description)
      : typeof raw.subtitle === "string"
        ? stripHtml(raw.subtitle)
        : "";

  const participantCount =
    typeof raw.participant_count === "number"
      ? raw.participant_count
      : typeof raw.registration_count === "number"
        ? raw.registration_count
        : undefined;

  return {
    id: typeof raw.id === "string" ? raw.id : slug,
    slug,
    title,
    subtitle: typeof raw.subtitle === "string" ? raw.subtitle : undefined,
    short_description: description,
    banner_url: typeof raw.banner_url === "string" ? raw.banner_url : "",
    organizer_name:
      typeof raw.organizer_name === "string" ? raw.organizer_name : undefined,
    mode: asMode(raw.mode),
    venue:
      typeof raw.venue === "string" && raw.venue.trim()
        ? raw.venue.trim()
        : typeof raw.place === "string" && raw.place.trim()
          ? raw.place.trim()
          : undefined,
    event_start_date:
      typeof raw.event_start_date === "string" ? raw.event_start_date : "",
    event_end_date:
      typeof raw.event_end_date === "string" ? raw.event_end_date : undefined,
    registration_end_date:
      typeof raw.registration_end_date === "string"
        ? raw.registration_end_date
        : undefined,
    category: typeof raw.category === "string" ? raw.category : undefined,
    visibility_labels: Array.isArray(raw.visibility_labels)
      ? raw.visibility_labels.filter((v): v is string => typeof v === "string")
      : undefined,
    registration_count: participantCount,
    status: asEventStatus(raw.contest_status, raw.registration_state),
    visit_href: `${siteBase}/events/${encodeURIComponent(slug)}`,
  };
}

function jobLinks(raw: Record<string, unknown>, siteBase: string) {
  const jobsBase = `${siteBase}/jobs`;
  const listHref = `${jobsBase}?category=campus_drive`;
  const slug = typeof raw.slug === "string" ? raw.slug.trim() : "";
  if (slug.includes("/")) {
    const [company, ...rest] = slug.split("/");
    const role = rest.join("/");
    if (company && role) {
      const companyPath = encodeURIComponent(company);
      const rolePath = role.split("/").map(encodeURIComponent).join("/");
      return {
        visit_href: `${jobsBase}/${companyPath}/${rolePath}`,
        detail_href: `/events/campus-drives/${companyPath}/${rolePath}`,
      };
    }
  }
  return { visit_href: listHref, detail_href: "/events/campus-drives" };
}

function campusDriveVisitHref(slug: string, siteBase: string) {
  const base = `${siteBase}/campus-drives`;
  const trimmed = slug.trim();
  return trimmed ? `${base}/${encodeURIComponent(trimmed)}` : base;
}

function isLiveCampusDrive(raw: Record<string, unknown>) {
  return (
    raw.is_campus_drive === true &&
    raw.is_active === true &&
    raw.status === "active"
  );
}

function asOptionalString(value: unknown) {
  if (typeof value === "string") {
    const trimmed = value.trim();
    return trimmed || undefined;
  }
  if (typeof value === "number" && Number.isFinite(value)) {
    return String(value);
  }
  return undefined;
}

function mapCampusDrive(raw: Record<string, unknown>, siteBase: string): CampusDriveItem | null {
  if (!isLiveCampusDrive(raw)) return null;

  const title = typeof raw.title === "string" ? raw.title.trim() : "";
  const id = typeof raw.id === "string" ? raw.id : "";
  if (!title || !id) return null;

  const company =
    (typeof raw.company_name === "string" && raw.company_name.trim()) ||
    (typeof raw.corporate_name === "string" && raw.corporate_name.trim()) ||
    "Company";

  return {
    id,
    title,
    company_name: company,
    location: typeof raw.location === "string" ? raw.location : undefined,
    description:
      typeof raw.description === "string" ? stripHtml(raw.description) : "",
    company_logo: typeof raw.company_logo === "string" ? raw.company_logo : "",
    campus_drive_date:
      typeof raw.campus_drive_date === "string" ? raw.campus_drive_date : undefined,
    ...jobLinks(raw, siteBase),
    salary_min: asOptionalString(raw.salary_min),
    salary_max: asOptionalString(raw.salary_max),
    salary_currency: asOptionalString(raw.salary_currency),
    ctc_with_probation: asOptionalString(raw.ctc_with_probation),
    ctc_after_probation: asOptionalString(raw.ctc_after_probation),
    job_type: asOptionalString(raw.job_type),
    mode_of_work: asOptionalString(raw.mode_of_work),
  };
}

async function fetchJson(url: string): Promise<unknown> {
  try {
    const response = await fetch(url, { next: { revalidate: 30 } });
    if (!response.ok) return null;
    return response.json();
  } catch {
    return null;
  }
}

function asRecordList(value: unknown): Record<string, unknown>[] {
  if (!Array.isArray(value)) return [];
  return value.filter(
    (item): item is Record<string, unknown> =>
      Boolean(item) && typeof item === "object"
  );
}

function programStatus(
  startIso: string,
  endIso: string,
  registration: unknown
): EventUiStatus {
  const now = Date.now();
  const start = Date.parse(startIso);
  const end = Date.parse(endIso);
  if (Number.isFinite(end) && end < now) return "closed";
  if (
    Number.isFinite(start) &&
    start <= now &&
    (!Number.isFinite(end) || end >= now)
  ) {
    return "live";
  }
  if (registration === "closed") return "closed";
  return "open";
}

function mapCampusProgram(raw: Record<string, unknown>, siteBase: string): EventsPageItem | null {
  const title = typeof raw.title === "string" ? raw.title.trim() : "";
  const id = typeof raw.id === "string" ? raw.id : "";
  if (!title || !id) return null;

  const slug = typeof raw.slug === "string" ? raw.slug.trim() : "";
  const start =
    typeof raw.event_start_date === "string" ? raw.event_start_date : "";
  const end = typeof raw.event_end_date === "string" ? raw.event_end_date : "";
  const description =
    typeof raw.short_description === "string"
      ? stripHtml(raw.short_description)
      : typeof raw.subtitle === "string"
        ? stripHtml(raw.subtitle)
        : "";

  const mode = asMode(raw.mode);
  const venueRaw =
    typeof raw.venue === "string" && raw.venue.trim()
      ? raw.venue.trim()
      : undefined;
  const { full: venueLabel } = resolveDriveCardLocation(venueRaw, mode);

  const jobCount =
    typeof raw.job_count === "number" && Number.isFinite(raw.job_count)
      ? raw.job_count
      : undefined;

  return {
    id,
    slug: slug || id,
    title,
    subtitle: typeof raw.subtitle === "string" ? raw.subtitle : undefined,
    short_description: description,
    banner_url: typeof raw.banner_url === "string" ? raw.banner_url : "",
    organizer_name:
      typeof raw.organizer_name === "string" ? raw.organizer_name : undefined,
    mode,
    venue: venueLabel,
    event_start_date: start,
    event_end_date: end || undefined,
    registration_end_date:
      typeof raw.registration_end_date === "string"
        ? raw.registration_end_date
        : undefined,
    registration_start_date:
      typeof raw.registration_start_date === "string"
        ? raw.registration_start_date
        : undefined,
    eligibility:
      typeof raw.eligibility === "string" ? stripHtml(raw.eligibility) : undefined,
    category: typeof raw.category === "string" ? raw.category : undefined,
    visibility_labels: Array.isArray(raw.visibility_labels)
      ? raw.visibility_labels.filter((v): v is string => typeof v === "string")
      : undefined,
    job_count: jobCount,
    status: programStatus(start, end, raw.registration_status),
    visit_href: campusDriveVisitHref(slug, siteBase),
    can_register: raw.listing_status !== "hidden",
  };
}

function payloadList(data: unknown, key: "events" | "jobs" | "campus_drives") {
  if (!data || typeof data !== "object") return [];
  return asRecordList((data as Record<string, unknown>)[key]);
}

function sortEvents(events: EventsPageItem[]) {
  return [...events].sort((a, b) => {
    const rank = statusRank(a.status) - statusRank(b.status);
    if (rank !== 0) return rank;
    return (
      new Date(b.event_start_date).getTime() - new Date(a.event_start_date).getTime()
    );
  });
}

function sortPrograms(events: EventsPageItem[]) {
  return [...events].sort((a, b) => {
    const rank = statusRank(a.status) - statusRank(b.status);
    if (rank !== 0) return rank;
    return (
      new Date(a.event_start_date).getTime() - new Date(b.event_start_date).getTime()
    );
  });
}

function mergeByKey<T>(primary: T[], extra: T[], keyOf: (item: T) => string) {
  const seen = new Set(primary.map(keyOf));
  const merged = [...primary];
  for (const item of extra) {
    const key = keyOf(item);
    if (!key || seen.has(key)) continue;
    seen.add(key);
    merged.push(item);
  }
  return merged;
}

function listingPath(href: string | undefined, fallback: string) {
  if (!href) return fallback;
  try {
    const url = new URL(href);
    return `${url.pathname}${url.search}`;
  } catch {
    return href;
  }
}

async function loadCatalog(apiBase: string, siteBase: string) {
  const [eventsData, jobsData, programsData] = await Promise.all([
    fetchJson(`${apiBase}/api/v1/events/public?limit=50`),
    fetchJson(`${apiBase}/api/v1/public/jobs/?is_campus_drive=true&limit=50`),
    fetchJson(`${apiBase}/api/v1/campus-drives/public?limit=50`),
  ]);

  return {
    events: payloadList(eventsData, "events")
      .map((raw) => mapEvent(raw, siteBase))
      .filter((item): item is EventsPageItem => item !== null),
    liveCampusDrives: payloadList(jobsData, "jobs")
      .map((raw) => mapCampusDrive(raw, siteBase))
      .filter((item): item is CampusDriveItem => item !== null),
    campusPrograms: payloadList(programsData, "campus_drives")
      .map((raw) => mapCampusProgram(raw, siteBase))
      .filter((item): item is EventsPageItem => item !== null),
  };
}

export async function getEventsPageContent(): Promise<EventsPageContent> {
  try {
    const local = await loadCatalog(DISHA_API_BASE, DISHA_SITE_BASE);
    const live =
      includeLiveCatalog && DISHA_API_BASE !== LIVE_API_BASE
        ? await loadCatalog(LIVE_API_BASE, LIVE_SITE_BASE)
        : { events: [], liveCampusDrives: [], campusPrograms: [] };

    const events = sortEvents(
      mergeByKey(local.events, live.events, (event) => event.slug)
    );
    const liveCampusDrives = mergeByKey(
      local.liveCampusDrives,
      live.liveCampusDrives,
      (job) => listingPath(job.visit_href, job.id)
    );
    const campusPrograms = sortPrograms(
      mergeByKey(local.campusPrograms, live.campusPrograms, (event) => event.slug)
    );

    return {
      ...fallback,
      events: events.length ? events : fallback.events,
      liveCampusDrives,
      campusPrograms,
    };
  } catch {
    return {
      ...fallback,
      liveCampusDrives: fallback.liveCampusDrives ?? [],
      campusPrograms: [],
    };
  }
}

export function getEventsPageFallback(): EventsPageContent {
  return { ...fallback, campusPrograms: [] };
}
