"use client";

import React from "react";
import { SolutionsLocaleProvider } from "@/contexts/SolutionsLocaleContext";
import HeroSection from "@/components/solutions/skill-development/HeroSection";
import ProblemSection from "@/components/solutions/skill-development/ProblemSection";
import SolutionSection from "@/components/solutions/skill-development/SolutionSection";

function ForSkillDevelopmentPageInner() {
  return (
    <main className="relative z-0 min-h-screen w-full">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
    </main>
  );
}

export default function ForSkillDevelopmentPage() {
  return (
    <SolutionsLocaleProvider>
      <ForSkillDevelopmentPageInner />
    </SolutionsLocaleProvider>
  );
}
