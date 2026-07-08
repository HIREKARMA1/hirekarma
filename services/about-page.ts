import type {
  AboutPageContent,
  Locale,
  LocalizedText,
  ResolvedTeamMember,
  TeamCategory,
  TeamMember,
} from "@/types/about-page";

import enContent from "@/data/about-page/en.json";
import hiContent from "@/data/about-page/hi.json";
import odContent from "@/data/about-page/od.json";
import peopleData from "@/data/people.json";

const contentMap: Record<Locale, AboutPageContent> = {
  en: enContent as AboutPageContent,
  hi: hiContent as AboutPageContent,
  od: odContent as AboutPageContent,
};

/**
 * Content loader - swap this implementation to fetch from a Python API later.
 */
export async function fetchAboutPageContent(
  locale: Locale
): Promise<AboutPageContent> {
  return contentMap[locale] ?? contentMap.en;
}

export function getAboutPageContentSync(locale: Locale): AboutPageContent {
  return contentMap[locale] ?? contentMap.en;
}

export function pickLocalized(
  text: LocalizedText | string,
  locale: Locale
): string {
  if (typeof text === "string") return text;
  return text[locale] ?? text.en;
}

export function getTeamMembers(locale: Locale): ResolvedTeamMember[] {
  const people = peopleData as TeamMember[];
  return people.map((member) => ({
    name: pickLocalized(member.name, locale),
    role: pickLocalized(member.role, locale),
    category: member.category,
    image: member.image,
    description: pickLocalized(member.description, locale),
    socialLinks: member.socialLinks,
  }));
}

export function getTeamByCategory(
  locale: Locale,
  category: TeamCategory
): ResolvedTeamMember[] {
  return getTeamMembers(locale).filter((m) => m.category === category);
}
