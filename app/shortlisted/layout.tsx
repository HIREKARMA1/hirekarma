import type { Metadata, Viewport } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/shortlisted/providers/theme-provider'
import { ScrollFix } from '@/components/shortlisted/providers/scroll-fix'
import { Toaster } from 'react-hot-toast'
import { Navbar } from '@/components/shortlisted/ui/navbar'

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-poppins',
})

export const metadata: Metadata = {
    title: 'Shortlisted - Get Shortlisted Faster. Get Placed Smarter.',
    description: '60-day premium placement acceleration program for unplaced students.',
}

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
    viewportFit: 'cover'
}

export default function ShortlistedLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className={poppins.className}>
            <ScrollFix />
            <ThemeProvider
                defaultTheme="dark"
                enableSystem={false}
                disableTransitionOnChange
            >
                <Navbar />
                {children}
                <Toaster
                    position="top-right"
                    toastOptions={{
                        duration: 4000,
                        style: {
                            background: 'var(--toast-bg)',
                            color: 'var(--toast-color)',
                            border: '1px solid var(--toast-border)',
                        },
                    }}
                />
            </ThemeProvider>
        </div>
    )
}

