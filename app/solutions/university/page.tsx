"use client";

import React from "react";
import { SolutionsLocaleProvider } from "@/contexts/SolutionsLocaleContext";
import HeroSection from "@/components/solutions/university/HeroSection";
import ProblemSection from "@/components/solutions/university/ProblemSection";
import SolutionSection from "@/components/solutions/university/SolutionSection";

function ForUniversityPageInner() {
  return (
    <main className="relative z-0 min-h-screen w-full">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
    </main>
  );
}

export default function ForUniversityPage() {
  return (
    <SolutionsLocaleProvider>
      <ForUniversityPageInner />
    </SolutionsLocaleProvider>
  );
}
