"use client"

import { usePathname } from "next/navigation"
import { ThemeProvider as HireKarmaThemeProvider } from "@/components/layout/ThemeProvider"

export function ConditionalThemeProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isShortlistedRoute = pathname?.startsWith("/shortlisted")

  // Don't wrap shortlisted routes with HireKarma ThemeProvider
  // They have their own ThemeProvider in their layout
  if (isShortlistedRoute) {
    return <>{children}</>
  }

  return <HireKarmaThemeProvider>{children}</HireKarmaThemeProvider>
}
