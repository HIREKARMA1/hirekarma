import type { HomePageContent, Locale } from "@/types/home-page";

import enContent from "@/data/home-page/en.json";
import hiContent from "@/data/home-page/hi.json";
import odContent from "@/data/home-page/od.json";

import enTestimonials from "@/data/home-page/testimonials/en.json";
import hiTestimonials from "@/data/home-page/testimonials/hi.json";
import odTestimonials from "@/data/home-page/testimonials/od.json";

function mergeHomeContent(
  base: Omit<HomePageContent, "testimonials"> & {
    testimonials: Omit<HomePageContent["testimonials"], "items">;
  },
  testimonials: { items: HomePageContent["testimonials"]["items"] }
): HomePageContent {
  return {
    ...(base as HomePageContent),
    testimonials: {
      ...base.testimonials,
      items: testimonials.items,
    },
  };
}

const contentMap: Record<Locale, HomePageContent> = {
  en: mergeHomeContent(enContent as HomePageContent, enTestimonials),
  hi: mergeHomeContent(hiContent as HomePageContent, hiTestimonials),
  od: mergeHomeContent(odContent as HomePageContent, odTestimonials),
};

export async function fetchHomePageContent(
  locale: Locale
): Promise<HomePageContent> {
  return contentMap[locale] ?? contentMap.en;
}

export function getHomePageContentSync(locale: Locale): HomePageContent {
  return contentMap[locale] ?? contentMap.en;
}
