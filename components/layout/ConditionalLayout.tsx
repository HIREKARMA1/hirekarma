"use client"

import { Suspense } from "react"
import { usePathname } from "next/navigation"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import { SiteLocaleProvider } from "@/contexts/SiteLocaleContext"
import { ScrollMotion } from "@/components/shared/ScrollMotion"
import { ClickMotion } from "@/components/shared/ClickMotion"
import { NavigationLoader } from "@/components/shared/NavigationLoader"

export function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isShortlistedRoute = pathname?.startsWith("/shortlisted")

  return (
    <SiteLocaleProvider>
      {!isShortlistedRoute && (
        <Suspense fallback={null}>
          <NavigationLoader />
        </Suspense>
      )}
      {!isShortlistedRoute && <ScrollMotion />}
      {!isShortlistedRoute && <ClickMotion />}
      {!isShortlistedRoute && <Navbar />}
      {/* Exact fixed-navbar clearance only — no extra empty band under the nav */}
      <div
        className={
          isShortlistedRoute
            ? undefined
            : "pt-[4.5rem] lg:pt-[4.75rem]"
        }
      >
        {children}
      </div>
      {!isShortlistedRoute && <Footer />}
    </SiteLocaleProvider>
  )
}
