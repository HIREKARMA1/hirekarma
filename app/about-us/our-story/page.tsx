"use client";

import React from "react";

import HeroSection from "@/components/about/HeroSection";
import JourneySection from "@/components/about/JourneySection";
import ChallengeSection from "@/components/about/ChallengeSection";
import SolutionSection from "@/components/about/SolutionSection";
import { AboutLocaleProvider } from "@/contexts/AboutLocaleContext";

function OurStoryInner() {
  return (
    <section className="relative min-h-screen transition-all duration-500">
      <HeroSection />
      <JourneySection />
      <ChallengeSection />
      <SolutionSection />
    </section>
  );
}

export default function OurStoryPage() {
  return (
    <AboutLocaleProvider>
      <OurStoryInner />
    </AboutLocaleProvider>
  );
}
