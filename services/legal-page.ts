import type { LegalPageContent, Locale } from "@/types/legal-page";

import enContent from "@/data/legal-page/en.json";
import hiContent from "@/data/legal-page/hi.json";
import odContent from "@/data/legal-page/od.json";

const contentMap: Record<Locale, LegalPageContent> = {
  en: enContent as LegalPageContent,
  hi: hiContent as LegalPageContent,
  od: odContent as LegalPageContent,
};

export async function fetchLegalPageContent(
  locale: Locale
): Promise<LegalPageContent> {
  return contentMap[locale] ?? contentMap.en;
}

export function getLegalPageContentSync(locale: Locale): LegalPageContent {
  return contentMap[locale] ?? contentMap.en;
}
