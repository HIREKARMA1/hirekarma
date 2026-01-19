import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import dynamic from "next/dynamic";

// Lazy load WavyBackground to improve initial paint
const WavyBackground = dynamic(() => import("@/components/layout/WavyBackground"), {
  ssr: true,
  loading: () => null,
});

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
        {/* Wavy Background - Lazy loaded */}
        <WavyBackground variant="primary" intensity="medium" density="sparse" />
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </div>
      </body>
    </html>
  );
}
