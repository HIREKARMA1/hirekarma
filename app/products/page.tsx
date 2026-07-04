import type { Metadata } from "next";

import { ProductsPageContent } from "@/components/products-page/ProductsPageContent";
import { getProductsPageContentSync } from "@/services/products-page";

export function generateMetadata(): Metadata {
  const content = getProductsPageContentSync("en");

  return {
    title: content.meta.title,
    description: content.meta.description,
  };
}

export default function ProductsPage() {
  return <ProductsPageContent />;
}
