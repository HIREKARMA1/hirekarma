"use client";

import React from "react";
import { SolutionsLocaleProvider } from "@/contexts/SolutionsLocaleContext";
import HeroSection from "@/components/solutions/students/HeroSection";
import ProblemSection from "@/components/solutions/students/ProblemSection";
import SolutionSection from "@/components/solutions/students/SolutionSection";

function ForStudentsPageInner() {
  return (
    <main className="relative z-0 min-h-screen w-full">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
    </main>
  );
}

export default function ForStudentsPage() {
  return (
    <SolutionsLocaleProvider>
      <ForStudentsPageInner />
    </SolutionsLocaleProvider>
  );
}
