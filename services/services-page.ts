import type { Locale, ServicesPageContent } from "@/types/services-page";

import enContent from "@/data/services-page/en.json";

/**
 * Services content loader.
 *
 * v1 ships English copy for all locales (hi/od fall back to `en`) so the
 * Services section can go live without blocking on translation. When the
 * content team supplies hi/od variants, add `@/data/services-page/{hi,od}.json`
 * and swap them into the map below. This is also the hook point for a future
 * CMS-backed loader (see spec §"Out of scope").
 */
const contentMap: Record<Locale, ServicesPageContent> = {
  en: enContent as ServicesPageContent,
  hi: enContent as ServicesPageContent,
  od: enContent as ServicesPageContent,
};

export function getServicesPageContentSync(locale: Locale): ServicesPageContent {
  return contentMap[locale] ?? contentMap.en;
}

export async function fetchServicesPageContent(
  locale: Locale
): Promise<ServicesPageContent> {
  return contentMap[locale] ?? contentMap.en;
}

export function getDivisionContentSync(locale: Locale, slug: string) {
  const content = getServicesPageContentSync(locale);
  return content.divisions[slug];
}
