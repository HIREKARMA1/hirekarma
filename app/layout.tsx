import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import WavyBackground from "@/components/layout/WavyBackground";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

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
      <body
        className={`${roboto.variable} antialiased`}
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
