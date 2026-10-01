import { env } from "@/lib/config/env";

const LIVE_API_BASE = "https://api.disha.hirekarma.in";
const LIVE_SITE_BASE = "https://disha.hirekarma.in";

function trimSlash(value: string) {
  return value.replace(/\/$/, "");
}

function isLoopback(value: string) {
  return /localhost|127\.0\.0\.1/i.test(value);
}

const configuredApi = trimSlash(env.apiBaseUrl || LIVE_API_BASE);
const configuredSite = trimSlash(env.dishaUrl || LIVE_SITE_BASE);

function sources() {
  const local = { api: configuredApi, site: configuredSite };
  const live = { api: LIVE_API_BASE, site: LIVE_SITE_BASE };
  if (
    process.env.NODE_ENV === "development" &&
    isLoopback(configuredApi) &&
    configuredApi !== LIVE_API_BASE
  ) {
    return [local, live];
  }
  return [local];
}

async function fetchJson(url: string): Promise<Record<string, unknown> | null> {
  try {
    const response = await fetch(url, { next: { revalidate: 30 } });
    if (!response.ok) return null;
    const data = await response.json();
    if (!data || typeof data !== "object") return null;
    return data as Record<string, unknown>;
  } catch {
    return null;
  }
}

async function fetchFirst(path: string) {
  for (const source of sources()) {
    const data = await fetchJson(`${source.api}${path}`);
    if (data) return { data, site: source.site };
  }
  return null;
}

export async function fetchPublicEvent(slug: string) {
  return fetchFirst(`/api/v1/events/public/${encodeURIComponent(slug)}`);
}

export async function fetchPublicJob(company: string, jobSlug: string) {
  return fetchFirst(
    `/api/v1/public/jobs/by-slug/${encodeURIComponent(company)}/${encodeURIComponent(jobSlug)}`
  );
}

export async function fetchPublicCampusProgram(slug: string) {
  return fetchFirst(`/api/v1/campus-drives/public/${encodeURIComponent(slug)}`);
}

export function eventApplyHref(site: string, slug: string) {
  return `${trimSlash(site)}/events/${encodeURIComponent(slug)}?register=1`;
}

export function jobApplyHref(site: string, company: string, jobSlug: string) {
  return `${trimSlash(site)}/jobs/${encodeURIComponent(company)}/${encodeURIComponent(jobSlug)}`;
}

export function programApplyHref(site: string, slug: string) {
  return `${trimSlash(site)}/campus-drives/${encodeURIComponent(slug)}`;
}
