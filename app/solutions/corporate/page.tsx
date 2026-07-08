"use client";

import React from "react";
import { SolutionsLocaleProvider } from "@/contexts/SolutionsLocaleContext";
import HeroSection from "@/components/solutions/corporate/HeroSection";
import ProblemSection from "@/components/solutions/corporate/ProblemSection";
import SolutionSection from "@/components/solutions/corporate/SolutionSection";

function ForCorporatePageInner() {
  return (
    <main className="relative z-0 min-h-screen w-full">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
    </main>
  );
}

export default function ForCorporatePage() {
  return (
    <SolutionsLocaleProvider>
      <ForCorporatePageInner />
    </SolutionsLocaleProvider>
  );
}
