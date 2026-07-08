"use client"

import { usePathname } from "next/navigation"
import dynamic from "next/dynamic"

const WavyBackground = dynamic(() => import("@/components/layout/WavyBackground"), {
  ssr: true,
  loading: () => null,
})

export function ConditionalWavyBackground() {
  const pathname = usePathname()
  const isHomeRoute = pathname === "/"
  const isShortlistedRoute = pathname?.startsWith("/shortlisted")
  const isProductsRoute = pathname?.startsWith("/products")
  const isResourcesRoute = pathname?.startsWith("/resources")

  if (isHomeRoute || isShortlistedRoute || isProductsRoute || isResourcesRoute) {
    return null
  }

  return <WavyBackground variant="primary" intensity="medium" density="sparse" />
}
