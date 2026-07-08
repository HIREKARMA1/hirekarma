import mediaData from "@/data/products-page/media.json";
import { resolveAssetPath } from "@/lib/config/env";
import type { Locale, ProductsPageMedia, SlideImage } from "@/types/products-page";

const media = mediaData as ProductsPageMedia;

/**
 * Media loader - swap to API fetch when backend is ready.
 */
export async function fetchProductsPageMedia(): Promise<ProductsPageMedia> {
  return media;
}

export function getProductsPageMediaSync(): ProductsPageMedia {
  return media;
}

export function getSlideAlt(slide: SlideImage, locale: Locale): string {
  return slide.alt[locale] ?? slide.alt.en;
}

export function resolveMediaSrc(path: string): string {
  return resolveAssetPath(path);
}
