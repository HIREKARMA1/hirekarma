import { env } from "@/lib/config/env";
import type { EventsPageItem } from "@/types/events-page";

const CONFIGURED_SITE =
  env.dishaUrl.replace(/\/$/, "") || "https://disha.hirekarma.in";

export function eventsPageVisitHref(event: EventsPageItem) {
  if (event.visit_href) return event.visit_href;
  return `${CONFIGURED_SITE}/events/${encodeURIComponent(event.slug)}`;
}

export function eventsPageDetailHref(event: EventsPageItem) {
  if (event.visit_href?.includes("/campus-drives/")) {
    return event.visit_href;
  }
  return `/events/${encodeURIComponent(event.slug)}`;
}

export function eventsPageApplyHref(event: EventsPageItem) {
  const base = eventsPageVisitHref(event);
  if (base.includes("register=1")) return base;
  const join = base.includes("?") ? "&" : "?";
  if (base.includes("/campus-drives/")) {
    return `${base}${join}register=1&action=register`;
  }
  return `${base}${join}register=1`;
}
