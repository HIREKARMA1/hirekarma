import type { Locale, PartnersPageContent } from "@/types/partners-page";

import enContent from "@/data/partners-page/en.json";
import hiContent from "@/data/partners-page/hi.json";
import odContent from "@/data/partners-page/od.json";

const contentMap: Record<Locale, PartnersPageContent> = {
  en: enContent as PartnersPageContent,
  hi: hiContent as PartnersPageContent,
  od: odContent as PartnersPageContent,
};

/**
 * Content loader - swap this implementation to fetch from a Python API later.
 */
export async function fetchPartnersPageContent(
  locale: Locale
): Promise<PartnersPageContent> {
  return contentMap[locale] ?? contentMap.en;
}

export function getPartnersPageContentSync(
  locale: Locale
): PartnersPageContent {
  return contentMap[locale] ?? contentMap.en;
}
