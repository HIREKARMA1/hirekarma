import type { ImpactPageContent, Locale } from "@/types/impact-page";
import en from "@/data/impact-page/en.json";
import hi from "@/data/impact-page/hi.json";
import od from "@/data/impact-page/od.json";

const contentByLocale: Record<Locale, ImpactPageContent> = {
  en: en as ImpactPageContent,
  hi: hi as ImpactPageContent,
  od: od as ImpactPageContent,
};

export function getImpactPageContentSync(locale: Locale = "en"): ImpactPageContent {
  return contentByLocale[locale] ?? contentByLocale.en;
}

export function getImpactStoryBySlug(slug: string, locale: Locale = "en") {
  return getImpactPageContentSync(locale).details.find((story) => story.slug === slug);
}

export function getAllImpactSlugs(): string[] {
  return getImpactPageContentSync("en").details.map((story) => story.slug);
}
