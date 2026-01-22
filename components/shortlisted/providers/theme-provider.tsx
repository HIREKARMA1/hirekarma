"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider, useTheme } from "next-themes"

// Wrapper component to apply dark class to a scoped container instead of HTML
function ShortlistedThemeWrapper({ children }: { children: React.ReactNode }) {
    const { resolvedTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)
    
    React.useEffect(() => {
        setMounted(true)
    }, [])
    
    // Apply dark class to wrapper based on resolved theme
    const isDark = mounted && resolvedTheme === "dark"
    
    return (
        <div 
            className={`shortlisted-theme-container min-h-screen w-full bg-white ${isDark ? "dark" : ""} ${isDark ? "dark:bg-[#1a1f2e]" : ""}`} 
            style={{ 
                overflowY: 'visible', 
                overflowX: 'hidden',
                touchAction: 'pan-y',
                WebkitOverflowScrolling: 'touch'
            }}
        >
            {children}
        </div>
    )
}

interface ThemeProviderProps {
    children: React.ReactNode
    attribute?: string
    defaultTheme?: "light" | "dark" | "system"
    enableSystem?: boolean
    disableTransitionOnChange?: boolean
    storageKey?: string
}

export function ThemeProvider({ 
    children, 
    attribute = "data-shortlisted-theme", // Use data attribute to prevent applying to HTML
    defaultTheme = "system",
    enableSystem = true,
    disableTransitionOnChange = true,
    ...props 
}: ThemeProviderProps) {
    return (
        <NextThemesProvider 
            {...props}
            storageKey="shortlisted-theme"
            attribute={attribute as any}
            defaultTheme={defaultTheme}
            enableSystem={enableSystem}
            disableTransitionOnChange={disableTransitionOnChange}
        >
            <ShortlistedThemeWrapper>
                {children}
            </ShortlistedThemeWrapper>
        </NextThemesProvider>
    )
}
