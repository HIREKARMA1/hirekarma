import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ConditionalThemeProvider } from "@/components/layout/ConditionalThemeProvider";
import { ConditionalLayout } from "@/components/layout/ConditionalLayout";
import { ConditionalWavyBackground } from "@/components/layout/ConditionalWavyBackground";

const roboto = Roboto({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ["latin"],
  variable: "--font-roboto",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "HireKarma - Streamline Your Hiring Process",
  description: "Transform your hiring process with HireKarma's innovative platform. Find the right talent faster and more efficiently.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        {/* Preconnect to external resources */}
        <link rel="preconnect" href="https://randomuser.me" />
        <link rel="preconnect" href="https://hirekarma.s3.us-east-1.amazonaws.com" />
        <link rel="dns-prefetch" href="https://randomuser.me" />
        <link rel="dns-prefetch" href="https://hirekarma.s3.us-east-1.amazonaws.com" />
      </head>
      <body
        className={`${roboto.variable} antialiased`}
      >
      <div className="relative min-h-screen">
        {/* Wavy Background - Only for HireKarma routes */}
        <ConditionalWavyBackground />
        <ConditionalThemeProvider>
          <ConditionalLayout>
            {children}
          </ConditionalLayout>
        </ConditionalThemeProvider>
      </div>
      </body>
    </html>
  );
}
