import type { Locale, SakshamPageContent } from "@/types/saksham-page";

import enContent from "@/data/saksham-page/en.json";
import hiContent from "@/data/saksham-page/hi.json";
import odContent from "@/data/saksham-page/od.json";

const contentMap: Record<Locale, SakshamPageContent> = {
  en: enContent as SakshamPageContent,
  hi: hiContent as SakshamPageContent,
  od: odContent as SakshamPageContent,
};

export async function fetchSakshamPageContent(
  locale: Locale
): Promise<SakshamPageContent> {
  return contentMap[locale] ?? contentMap.en;
}

export function getSakshamPageContentSync(locale: Locale): SakshamPageContent {
  return contentMap[locale] ?? contentMap.en;
}
