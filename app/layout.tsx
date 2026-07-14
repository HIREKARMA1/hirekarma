import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ConditionalThemeProvider } from "@/components/layout/ConditionalThemeProvider";
import { ConditionalLayout } from "@/components/layout/ConditionalLayout";
import { ConditionalGridBackground } from "@/components/layout/ConditionalGridBackground";
import { Toaster } from "react-hot-toast";

/** Site-wide typeface — Inter (same family as harkx.ai), with a clear UI scale. */
const inter = Inter({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HireKarma | India's Talent Infrastructure",
  description:
    "HireKarma connects skill development, AI-powered placement preparation, campus recruitment, IT consulting, staff augmentation, and digital public infrastructure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <link rel="preconnect" href="https://randomuser.me" />
        <link
          rel="preconnect"
          href="https://hirekarma.s3.us-east-1.amazonaws.com"
        />
        <link rel="dns-prefetch" href="https://randomuser.me" />
        <link
          rel="dns-prefetch"
          href="https://hirekarma.s3.us-east-1.amazonaws.com"
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <div className="relative min-h-screen">
          <ConditionalThemeProvider>
            <ConditionalGridBackground />
            <ConditionalLayout>{children}</ConditionalLayout>
          </ConditionalThemeProvider>
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 3000,
            }}
          />
        </div>
      </body>
    </html>
  );
}
