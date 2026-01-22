"use client"

import { usePathname } from "next/navigation"
import dynamic from "next/dynamic"

const WavyBackground = dynamic(() => import("@/components/layout/WavyBackground"), {
  ssr: true,
  loading: () => null,
})

export function ConditionalWavyBackground() {
  const pathname = usePathname()
  const isShortlistedRoute = pathname?.startsWith("/shortlisted")

  if (isShortlistedRoute) {
    return null
  }

  return <WavyBackground variant="primary" intensity="medium" density="sparse" />
}
