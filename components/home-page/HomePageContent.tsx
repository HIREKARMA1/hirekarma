"use client";

import { HomeLocaleProvider } from "@/contexts/HomeLocaleContext";
import { HomePageBackground } from "./ui/HomePageBackground";
import { HomeHeroSection } from "./sections/HomeHeroSection";
import { HomeStatsSection } from "./sections/HomeStatsSection";
import { HomeDivisionsSection } from "./sections/HomeDivisionsSection";
import { HomeJourneySection } from "./sections/HomeJourneySection";
import { HomeFeaturedProductsSection } from "./sections/HomeFeaturedProductsSection";
import { HomeTestimonialsSection } from "./sections/HomeTestimonialsSection";
import { HomeHiringCtaSection } from "./sections/HomeHiringCtaSection";
import { HomeDpiSection } from "./sections/HomeDpiSection";

function HomePageInner() {
  return (
    <>
      <HomePageBackground />
      <main className="home-page relative z-0 min-h-screen w-full max-w-full overflow-x-clip">
        <HomeHeroSection />
        <HomeStatsSection />
        <HomeDivisionsSection />
        <HomeJourneySection />
        <HomeFeaturedProductsSection />
        <HomeTestimonialsSection />
        <HomeHiringCtaSection />
        <HomeDpiSection />
      </main>
    </>
  );
}

export function HomePageContent() {
  return (
    <HomeLocaleProvider>
      <HomePageInner />
    </HomeLocaleProvider>
  );
}
