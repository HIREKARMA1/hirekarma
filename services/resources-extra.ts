import type {
  Locale,
  ResourcesExtraContent,
} from "@/types/resources-extra";

import enContent from "@/data/resources-extra/en.json";
import hiContent from "@/data/resources-extra/hi.json";
import odContent from "@/data/resources-extra/od.json";

const contentMap: Record<Locale, ResourcesExtraContent> = {
  en: enContent as ResourcesExtraContent,
  hi: hiContent as ResourcesExtraContent,
  od: odContent as ResourcesExtraContent,
};

/**
 * Content loader - swap this implementation to fetch from a Python API later.
 */
export async function fetchResourcesExtraContent(
  locale: Locale
): Promise<ResourcesExtraContent> {
  return contentMap[locale] ?? contentMap.en;
}

export function getResourcesExtraContentSync(
  locale: Locale
): ResourcesExtraContent {
  return contentMap[locale] ?? contentMap.en;
}
