import type { Locale, HomePageContent } from "@/types/home-page";

import enContent from "@/data/home-page/en.json";
import hiContent from "@/data/home-page/hi.json";
import odContent from "@/data/home-page/od.json";

const contentMap: Record<Locale, HomePageContent> = {
  en: enContent as HomePageContent,
  hi: hiContent as HomePageContent,
  od: odContent as HomePageContent,
};

export function getHomePageContentSync(locale: Locale): HomePageContent {
  return contentMap[locale] ?? contentMap.en;
}

export async function fetchHomePageContent(
  locale: Locale
): Promise<HomePageContent> {
  return getHomePageContentSync(locale);
}
