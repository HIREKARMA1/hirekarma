import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import WavyBackground from "@/components/layout/WavyBackground";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <div className="relative min-h-screen">
        {/* Wavy Background */}
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
