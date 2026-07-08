import type {
  DeliveredProjectsContent,
  Locale,
} from "@/types/delivered-projects-page";

import enContent from "@/data/delivered-projects/en.json";
import hiContent from "@/data/delivered-projects/hi.json";
import odContent from "@/data/delivered-projects/od.json";

const contentMap: Record<Locale, DeliveredProjectsContent> = {
  en: enContent as DeliveredProjectsContent,
  hi: hiContent as DeliveredProjectsContent,
  od: odContent as DeliveredProjectsContent,
};

export async function fetchDeliveredProjectsContent(
  locale: Locale
): Promise<DeliveredProjectsContent> {
  return contentMap[locale] ?? contentMap.en;
}

export function getDeliveredProjectsContentSync(
  locale: Locale
): DeliveredProjectsContent {
  return contentMap[locale] ?? contentMap.en;
}
