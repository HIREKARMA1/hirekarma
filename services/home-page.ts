import type { HomePageContent, Locale } from "@/types/home-page";

import enContent from "@/data/home-page/en.json";
import hiContent from "@/data/home-page/hi.json";
import odContent from "@/data/home-page/od.json";

import enProducts from "@/data/home-page/products/en.json";
import hiProducts from "@/data/home-page/products/hi.json";
import odProducts from "@/data/home-page/products/od.json";

import enTestimonials from "@/data/home-page/testimonials/en.json";
import hiTestimonials from "@/data/home-page/testimonials/hi.json";
import odTestimonials from "@/data/home-page/testimonials/od.json";

function mergeHomeContent(
  base: HomePageContent,
  products: { items: HomePageContent["productsSection"]["items"] },
  testimonials: { items: HomePageContent["testimonials"]["items"] }
): HomePageContent {
  return {
    ...base,
    productsSection: {
      ...base.productsSection,
      items: products.items,
    },
    testimonials: {
      ...base.testimonials,
      items: testimonials.items,
    },
  };
}

const contentMap: Record<Locale, HomePageContent> = {
  en: mergeHomeContent(
    enContent as HomePageContent,
    enProducts,
    enTestimonials
  ),
  hi: mergeHomeContent(
    hiContent as HomePageContent,
    hiProducts,
    hiTestimonials
  ),
  od: mergeHomeContent(
    odContent as HomePageContent,
    odProducts,
    odTestimonials
  ),
};

/**
 * Content loader - swap this implementation to fetch from a Python API later.
 */
export async function fetchHomePageContent(
  locale: Locale
): Promise<HomePageContent> {
  return contentMap[locale] ?? contentMap.en;
}

export function getHomePageContentSync(locale: Locale): HomePageContent {
  return contentMap[locale] ?? contentMap.en;
}
