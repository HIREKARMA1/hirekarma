import type { Locale, SolutionsPageContent } from "@/types/solutions-page";

import enContent from "@/data/solutions-page/en.json";
import hiContent from "@/data/solutions-page/hi.json";
import odContent from "@/data/solutions-page/od.json";

const contentMap: Record<Locale, SolutionsPageContent> = {
  en: enContent as SolutionsPageContent,
  hi: hiContent as SolutionsPageContent,
  od: odContent as SolutionsPageContent,
};

/**
 * Content loader - swap this implementation to fetch from a Python API later.
 */
export async function fetchSolutionsPageContent(
  locale: Locale
): Promise<SolutionsPageContent> {
  return contentMap[locale] ?? contentMap.en;
}

export function getSolutionsPageContentSync(
  locale: Locale
): SolutionsPageContent {
  return contentMap[locale] ?? contentMap.en;
}
