import type { EventMode } from "@/types/events-page";

import { formatCardLocation } from "@/lib/utils/cardLocationLabel";

function defaultVenueForMode(mode?: EventMode | string): string {
  const normalized = (mode ?? "").toLowerCase();
  if (normalized === "online") return "Online";
  if (normalized === "hybrid") return "Hybrid / Campus";
  return "On campus";
}

export function resolveDriveCardLocation(
  venue: string | undefined,
  mode?: EventMode | string,
) {
  const trimmed = venue?.trim() ?? "";
  const raw = trimmed || defaultVenueForMode(mode);
  return formatCardLocation(raw);
}

export function resolveJobCardLocation(
  location: string | undefined,
  modeOfWork?: string,
) {
  const trimmed = location?.trim() ?? "";
  if (trimmed) return formatCardLocation(trimmed);

  const normalized = (modeOfWork ?? "").toLowerCase().replace(/-/g, "_");
  if (normalized === "remote") return formatCardLocation("Remote");
  if (normalized === "hybrid") return formatCardLocation("Hybrid");
  if (normalized === "onsite" || normalized === "offline") {
    return formatCardLocation("On site");
  }
  return formatCardLocation("On site");
}

export function companyFromDriveTitle(title: string): string | undefined {
  const parts = title.split(/\s[–—-]\s/u);
  if (parts.length < 2) return undefined;
  const tail = parts[parts.length - 1]?.trim() ?? "";
  if (tail.length < 2 || tail.length > 120) return undefined;
  return tail;
}

export function driveCardCompanyLine(options: {
  title: string;
  organizerName?: string;
  companyName?: string;
  subtitle?: string;
}): string | undefined {
  const company = options.companyName?.trim();
  if (company) return company;

  const organizer = options.organizerName?.trim();
  if (organizer) return organizer;

  const fromTitle = companyFromDriveTitle(options.title);
  if (fromTitle) return fromTitle;

  const subtitle = options.subtitle?.trim();
  if (subtitle && subtitle.length <= 100) return subtitle;

  return undefined;
}
