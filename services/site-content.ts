import type { Locale, SiteContent } from "@/types/site";

import enContent from "@/data/site/en.json";
import hiContent from "@/data/site/hi.json";
import odContent from "@/data/site/od.json";

const contentMap: Record<Locale, SiteContent> = {
  en: enContent as SiteContent,
  hi: hiContent as SiteContent,
  od: odContent as SiteContent,
};

export function getSiteContentSync(locale: Locale): SiteContent {
  return contentMap[locale] ?? contentMap.en;
}

export async function fetchSiteContent(locale: Locale): Promise<SiteContent> {
  return contentMap[locale] ?? contentMap.en;
}
