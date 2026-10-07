import type {
  CampusDriveItem,
  EventMode,
  EventUiStatus,
  EventsPageItem,
} from "@/types/events-page";
import {
  eventsPageApplyHref,
  eventsPageDetailHref,
} from "@/lib/utils/eventsPageLinks";
import {
  resolveDriveCardLocation,
  resolveJobCardLocation,
} from "@/lib/utils/driveCardDisplay";

export interface HeroTileInfo {
  label: string;
  value: string;
}

export interface HeroDriveSlide {
  id: string;
  type: "campus" | "upcoming";
  co: string;
  title: string;
  lede: string;
  statusPill?: string;
  tagLabels: string[];
  tiles: HeroTileInfo[];
  img?: string;
  posterStat?: { primary: string; secondary?: string };
  detailHref: string;
  applyHref: string;
  showApply: boolean;
}

const MODE_LABEL: Record<EventMode, string> = {
  online: "Online",
  offline: "Offline",
  hybrid: "Hybrid",
};

export function cleanHeroTitle(raw: string): string {
  if (!raw) return "";
  return raw
    .replace(/^\[SEED\]\s*/i, "")
    .replace(/\s*—\s*\d+%\+?\s*Match.*$/i, "")
    .replace(/\s*-\s*\d+%\+?\s*Match.*$/i, "")
    .replace(/\s*\(SEED\)\s*/i, "")
    .trim();
}

export function formatHeroDate(iso?: string | null) {
  if (!iso?.trim()) return undefined;
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso.trim();
  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

function stripHtml(value: string) {
  return value.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

function truncateTile(value: string, maxLen = 96) {
  const text = value.trim();
  if (text.length <= maxLen) return text;
  return `${text.slice(0, maxLen - 1)}…`;
}

function heroTiles(...tiles: (HeroTileInfo | null | undefined)[]) {
  return tiles.filter(
    (tile): tile is HeroTileInfo =>
      Boolean(tile?.value?.trim() && tile.label?.trim()),
  );
}

export function heroStatusPill(
  status: EventUiStatus,
  registrationEndIso?: string | null,
) {
  if (status === "closed") return "Closed";
  const base = status === "live" ? "Live now" : "Open for registration";
  const closes = formatHeroDate(registrationEndIso);
  if (closes) return `${base} · Closes ${closes}`;
  return base;
}

function heroTagsFromProgram(item: EventsPageItem) {
  const tags: string[] = [];
  const category = item.category?.trim();
  if (category) tags.push(category);
  for (const label of item.visibility_labels ?? []) {
    const trimmed = label?.trim();
    if (trimmed) tags.push(trimmed);
  }
  return tags.slice(0, 4);
}

function isValidImageUrl(url?: string): boolean {
  if (!url) return false;
  const trimmed = url.trim();
  return (
    trimmed.length > 5 &&
    (trimmed.startsWith("http://") ||
      trimmed.startsWith("https://") ||
      trimmed.startsWith("/"))
  );
}

function formatJobSalary(drive: CampusDriveItem): string | undefined {
  if (drive.ctc_after_probation?.trim()) return drive.ctc_after_probation.trim();
  if (drive.ctc_with_probation?.trim()) return drive.ctc_with_probation.trim();
  if (!drive.salary_min?.trim()) return undefined;

  const cleanNum = (val: string) => {
    const cleaned = val.replace(/[^\d.]/g, "");
    const num = parseFloat(cleaned);
    if (Number.isNaN(num)) return val;
    if (num >= 100000) {
      const inLakhs = num / 100000;
      return `${inLakhs % 1 === 0 ? inLakhs.toFixed(0) : inLakhs.toFixed(1)}`;
    }
    return `${num}`;
  };

  const min = cleanNum(drive.salary_min);
  const max = drive.salary_max ? cleanNum(drive.salary_max) : null;
  if (max) return `₹${min} - ${max} LPA`;
  return `₹${min} LPA`;
}

export function slideFromCampusProgram(prog: EventsPageItem): HeroDriveSlide {
  const title = cleanHeroTitle(prog.title);
  const company = prog.organizer_name?.trim() || "";
  const locationVal =
    prog.venue?.trim() ||
    resolveDriveCardLocation(undefined, prog.mode).display;

  const eligibilityRaw = prog.eligibility?.trim();
  const tiles = heroTiles(
    formatHeroDate(prog.event_start_date)
      ? { label: "Drive Date", value: formatHeroDate(prog.event_start_date)! }
      : null,
    locationVal ? { label: "Venue / Location", value: locationVal } : null,
    prog.mode
      ? { label: "Mode", value: MODE_LABEL[prog.mode] }
      : null,
    typeof prog.job_count === "number" && prog.job_count > 0
      ? {
          label: "Roles",
          value: `${prog.job_count} job${prog.job_count === 1 ? "" : "s"}`,
        }
      : null,
    eligibilityRaw
      ? {
          label: "Eligibility",
          value: truncateTile(stripHtml(eligibilityRaw)),
        }
      : null,
  ).slice(0, 4);

  const lede =
    prog.subtitle?.trim() || prog.short_description?.trim() || "";

  return {
    id: prog.id,
    type: "campus",
    co: company || title,
    title,
    lede,
    statusPill: heroStatusPill(prog.status, prog.registration_end_date),
    tagLabels: heroTagsFromProgram(prog),
    tiles,
    img: isValidImageUrl(prog.banner_url)
      ? prog.banner_url.trim()
      : undefined,
    detailHref: eventsPageDetailHref(prog),
    applyHref: eventsPageApplyHref(prog),
    showApply: prog.can_register !== false,
  };
}

export function slideFromCampusJob(drive: CampusDriveItem): HeroDriveSlide {
  const title = cleanHeroTitle(drive.title);
  const company = drive.company_name?.trim() || "";
  const { display: locationVal } = resolveJobCardLocation(
    drive.location,
    drive.mode_of_work,
  );
  const salary = formatJobSalary(drive);
  const jobTypeLine = [drive.job_type, drive.mode_of_work]
    .map((part) => part?.trim())
    .filter(Boolean)
    .join(" · ");

  const tiles = heroTiles(
    formatHeroDate(drive.campus_drive_date)
      ? {
          label: "Drive Date",
          value: formatHeroDate(drive.campus_drive_date)!,
        }
      : null,
    locationVal ? { label: "Location", value: locationVal } : null,
    salary ? { label: "Package", value: salary } : null,
    jobTypeLine ? { label: "Job type", value: jobTypeLine } : null,
  );

  return {
    id: drive.id,
    type: "campus",
    co: company || title,
    title,
    lede: drive.description?.trim() || "",
    tagLabels: [],
    tiles,
    img: isValidImageUrl(drive.company_logo)
      ? drive.company_logo.trim()
      : undefined,
    detailHref: drive.detail_href || "/events/campus-drives",
    applyHref: drive.visit_href,
    showApply: true,
  };
}

export function slideFromUpcomingEvent(evt: EventsPageItem): HeroDriveSlide {
  const title = cleanHeroTitle(evt.title);
  const organizer = evt.organizer_name?.trim() || "";
  const locationVal =
    evt.venue?.trim() ||
    resolveDriveCardLocation(undefined, evt.mode).display;

  const audienceRaw = evt.eligibility?.trim();
  const tiles = heroTiles(
    formatHeroDate(evt.event_start_date)
      ? { label: "Event Date", value: formatHeroDate(evt.event_start_date)! }
      : null,
    locationVal ? { label: "Venue", value: locationVal } : null,
    evt.mode ? { label: "Mode", value: MODE_LABEL[evt.mode] } : null,
    audienceRaw
      ? {
          label: "Eligibility",
          value: truncateTile(stripHtml(audienceRaw)),
        }
      : null,
  );

  const lede =
    evt.subtitle?.trim() || evt.short_description?.trim() || "";

  const count = evt.registration_count;
  const posterStat =
    typeof count === "number" && count > 0
      ? {
          primary: `${count} registered`,
          secondary: undefined,
        }
      : undefined;

  return {
    id: evt.id,
    type: "upcoming",
    co: organizer || title,
    title,
    lede,
    statusPill: heroStatusPill(evt.status, evt.registration_end_date),
    tagLabels: heroTagsFromProgram(evt),
    tiles,
    img: isValidImageUrl(evt.banner_url) ? evt.banner_url.trim() : undefined,
    posterStat,
    detailHref: eventsPageDetailHref(evt),
    applyHref: eventsPageApplyHref(evt),
    showApply: evt.can_register !== false,
  };
}
