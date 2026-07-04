import type { Locale, ProductsPageContent } from "@/types/products-page";

import enContent from "@/data/products-page/en.json";
import hiContent from "@/data/products-page/hi.json";
import odContent from "@/data/products-page/od.json";

const contentMap: Record<Locale, ProductsPageContent> = {
  en: enContent as ProductsPageContent,
  hi: hiContent as ProductsPageContent,
  od: odContent as ProductsPageContent,
};

/**
 * Content loader — swap this implementation to fetch from a Python API later.
 */
export async function fetchProductsPageContent(
  locale: Locale
): Promise<ProductsPageContent> {
  return contentMap[locale] ?? contentMap.en;
}

export function getProductsPageContentSync(
  locale: Locale
): ProductsPageContent {
  return contentMap[locale] ?? contentMap.en;
}
