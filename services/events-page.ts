import fallbackContent from "@/data/events-page/en.json";
import type {
  CampusDriveItem,
  EventMode,
  EventUiStatus,
  EventsPageContent,
  EventsPageItem,
} from "@/types/events-page";

const DISHA_PUBLIC_EVENTS_URL =
  "https://api.disha.hirekarma.in/api/v1/events/public?limit=50";
const DISHA_CAMPUS_DRIVES_URL =
  "https://api.disha.hirekarma.in/api/v1/public/jobs/?is_campus_drive=true&limit=50";
const DISHA_JOBS_BASE = "https://disha.hirekarma.in/jobs";

const fallback = fallbackContent as EventsPageContent;

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

function mapEvent(raw: Record<string, unknown>): EventsPageItem | null {
  const slug = typeof raw.slug === "string" ? raw.slug.trim() : "";
  const title = typeof raw.title === "string" ? raw.title.trim() : "";
  if (!slug || !title) return null;

  const description =
    typeof raw.short_description === "string"
      ? stripHtml(raw.short_description)
      : typeof raw.subtitle === "string"
        ? stripHtml(raw.subtitle)
        : "";

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
    venue: typeof raw.venue === "string" ? raw.venue : undefined,
    event_start_date:
      typeof raw.event_start_date === "string" ? raw.event_start_date : "",
    status: asEventStatus(raw.contest_status, raw.registration_state),
  };
}

function jobVisitHref(raw: Record<string, unknown>) {
  const slug = typeof raw.slug === "string" ? raw.slug.trim() : "";
  if (slug.includes("/")) {
    const [company, ...rest] = slug.split("/");
    const role = rest.join("/");
    if (company && role) {
      return `${DISHA_JOBS_BASE}/${encodeURIComponent(company)}/${encodeURIComponent(role)}`;
    }
  }

  const id = typeof raw.id === "string" ? raw.id : "";
  return id ? `${DISHA_JOBS_BASE}?id=${encodeURIComponent(id)}` : DISHA_JOBS_BASE;
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

function mapCampusDrive(raw: Record<string, unknown>): CampusDriveItem | null {
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
    visit_href: jobVisitHref(raw),
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
  const response = await fetch(url, { next: { revalidate: 30 } });
  if (!response.ok) return null;
  return response.json();
}

function asRecordList(value: unknown): Record<string, unknown>[] {
  if (!Array.isArray(value)) return [];
  return value.filter(
    (item): item is Record<string, unknown> =>
      Boolean(item) && typeof item === "object"
  );
}

function payloadList(data: unknown, key: "events" | "jobs") {
  if (!data || typeof data !== "object") return [];
  return asRecordList((data as Record<string, unknown>)[key]);
}

export async function getEventsPageContent(): Promise<EventsPageContent> {
  try {
    const [eventsData, jobsData] = await Promise.all([
      fetchJson(DISHA_PUBLIC_EVENTS_URL),
      fetchJson(DISHA_CAMPUS_DRIVES_URL),
    ]);

    const events = payloadList(eventsData, "events")
      .map(mapEvent)
      .filter((item): item is EventsPageItem => item !== null)
      .sort((a, b) => {
        const rank = statusRank(a.status) - statusRank(b.status);
        if (rank !== 0) return rank;
        return (
          new Date(b.event_start_date).getTime() -
          new Date(a.event_start_date).getTime()
        );
      });

    const liveCampusDrives = payloadList(jobsData, "jobs")
      .map(mapCampusDrive)
      .filter((item): item is CampusDriveItem => item !== null);

    return {
      ...fallback,
      events: events.length ? events : fallback.events,
      liveCampusDrives,
    };
  } catch {
    return { ...fallback, liveCampusDrives: fallback.liveCampusDrives ?? [] };
  }
}

export function getEventsPageFallback(): EventsPageContent {
  return fallback;
}
