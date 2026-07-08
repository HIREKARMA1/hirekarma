"use client";

import { usePathname } from "next/navigation";

import { ProductsPageBackground } from "@/components/products-page/ui/ProductsPageBackground";

/** Site-wide Aceternity grid backdrop for HireKarma routes. */
export function ConditionalGridBackground() {
  const pathname = usePathname();
  const isShortlistedRoute = pathname?.startsWith("/shortlisted");

  if (isShortlistedRoute) {
    return null;
  }

  return <ProductsPageBackground />;
}
