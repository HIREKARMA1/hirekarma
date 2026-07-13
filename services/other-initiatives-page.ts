import type {
  Locale,
  OtherInitiativesPageContent,
} from "@/types/other-initiatives-page";
import type { LocalizedText } from "@/types/products-page";

import enContent from "@/data/other-initiatives/en.json";
import hiContent from "@/data/other-initiatives/hi.json";
import odContent from "@/data/other-initiatives/od.json";
import mediaData from "@/data/other-initiatives/media.json";

const contentMap: Record<Locale, OtherInitiativesPageContent> = {
  en: enContent as OtherInitiativesPageContent,
  hi: hiContent as OtherInitiativesPageContent,
  od: odContent as OtherInitiativesPageContent,
};

export function getOtherInitiativesContentSync(
  locale: Locale
): OtherInitiativesPageContent {
  return contentMap[locale] ?? contentMap.en;
}

export async function fetchOtherInitiativesContent(
  locale: Locale
): Promise<OtherInitiativesPageContent> {
  return getOtherInitiativesContentSync(locale);
}

export interface InitiativeSlide {
  src: string;
  alt: LocalizedText;
}

export function getOtherInitiativesMediaSync() {
  return mediaData;
}

export function getInitiativeSlideAlt(
  slide: InitiativeSlide,
  locale: Locale
): string {
  return slide.alt[locale] ?? slide.alt.en;
}

export function resolveInitiativeMediaSrc(src: string): string {
  if (src.startsWith("http") || src.startsWith("/")) return src;
  return `/${src}`;
}
