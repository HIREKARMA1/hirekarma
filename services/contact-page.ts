import type { ContactPageContent, Locale } from "@/types/contact-page";

import enContent from "@/data/contact-page/en.json";
import hiContent from "@/data/contact-page/hi.json";
import odContent from "@/data/contact-page/od.json";

const contentMap: Record<Locale, ContactPageContent> = {
  en: enContent as ContactPageContent,
  hi: hiContent as ContactPageContent,
  od: odContent as ContactPageContent,
};

/**
 * Content loader - swap this implementation to fetch from a Python API later.
 */
export async function fetchContactPageContent(
  locale: Locale
): Promise<ContactPageContent> {
  return contentMap[locale] ?? contentMap.en;
}

export function getContactPageContentSync(
  locale: Locale
): ContactPageContent {
  return contentMap[locale] ?? contentMap.en;
}
