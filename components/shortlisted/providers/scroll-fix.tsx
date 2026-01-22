"use client"

import { useEffect } from "react"

/**
 * Component to fix scrolling issues on Android devices
 * Ensures that touch events and scrolling work properly
 */
export function ScrollFix() {
  useEffect(() => {
    // Force enable scrolling on mobile devices
    const enableScrolling = () => {
      const html = document.documentElement
      const body = document.body

      // Remove any height constraints that might prevent scrolling
      html.style.height = "auto"
      html.style.minHeight = "100%"
      body.style.height = "auto"
      body.style.minHeight = "100vh"

      // Ensure overflow is set correctly - use scroll instead of auto
      html.style.overflowY = "scroll"
      html.style.overflowX = "hidden"
      body.style.overflowY = "scroll"
      body.style.overflowX = "hidden"

      // Enable touch scrolling
      ;(html.style as any).webkitOverflowScrolling = "touch"
      ;(body.style as any).webkitOverflowScrolling = "touch"

      // Set touch action to allow panning
      html.style.touchAction = "pan-y pan-x"
      body.style.touchAction = "pan-y pan-x"

      // Ensure body can scroll
      body.style.position = "relative"
      html.style.position = "relative"

      // Remove any overscroll behavior that might prevent scrolling
      body.style.overscrollBehaviorY = "auto"
      body.style.overscrollBehaviorX = "none"
    }

    // Run immediately
    enableScrolling()

    // Also run after delays to ensure it applies after all CSS loads
    const timeouts = [
      setTimeout(enableScrolling, 100),
      setTimeout(enableScrolling, 500),
      setTimeout(enableScrolling, 1000)
    ]

    // Ensure touch events don't prevent scrolling
    const handleTouchStart = (e: TouchEvent) => {
      // Don't prevent default - allow scrolling
    }

    const handleTouchMove = (e: TouchEvent) => {
      // Only prevent default if it's a horizontal scroll attempt on a horizontal-only container
      const target = e.target as HTMLElement
      const horizontalOnly = target.closest('[style*="touch-action: pan-x"]') || 
                            target.closest('.overflow-x-hidden')
      
      if (!horizontalOnly) {
        // Allow vertical scrolling
        return
      }
    }

    document.addEventListener("touchstart", handleTouchStart, { passive: true })
    document.addEventListener("touchmove", handleTouchMove, { passive: true })

    return () => {
      timeouts.forEach(clearTimeout)
      document.removeEventListener("touchstart", handleTouchStart)
      document.removeEventListener("touchmove", handleTouchMove)
    }
  }, [])

  return null
}
