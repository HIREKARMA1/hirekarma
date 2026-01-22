"use client"

import { usePathname } from "next/navigation"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

export function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isShortlistedRoute = pathname?.startsWith("/shortlisted")

  return (
    <>
      {!isShortlistedRoute && <Navbar />}
      {children}
      {!isShortlistedRoute && <Footer />}
    </>
  )
}
