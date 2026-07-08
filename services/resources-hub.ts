import type { Locale, ResourcesHubContent } from "@/types/resources-page";

import enContent from "@/data/resources-page/en.json";
import hiContent from "@/data/resources-page/hi.json";
import odContent from "@/data/resources-page/od.json";

const contentMap: Record<Locale, ResourcesHubContent> = {
  en: enContent as ResourcesHubContent,
  hi: hiContent as ResourcesHubContent,
  od: odContent as ResourcesHubContent,
};

/** Content loader — swap to a Python API later. */
export async function fetchResourcesHubContent(
  locale: Locale
): Promise<ResourcesHubContent> {
  return contentMap[locale] ?? contentMap.en;
}

export function getResourcesHubContentSync(
  locale: Locale
): ResourcesHubContent {
  return contentMap[locale] ?? contentMap.en;
}
