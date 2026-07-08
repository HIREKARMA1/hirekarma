"use client";

import HeroSection from "@/components/saksham/HeroSection";
import ProblemSection from "@/components/saksham/ProblemSection";
import SolutionSection from "@/components/saksham/SolutionSection";
import JourneySection from "@/components/saksham/JourneySection";
import AIAdvantageSection from "@/components/saksham/AiAdvantagesSection";
import ResultsAnalyticsSection from "@/components/saksham/ResultsAnalyticsSection";
import CTASection from "@/components/saksham/CTASection";
import { SakshamLocaleProvider } from "@/contexts/SakshamLocaleContext";

function SakshamPageContent() {
  return (
    <section className="relative min-h-screen transition-all duration-500">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <JourneySection />
      <AIAdvantageSection />
      <ResultsAnalyticsSection />
      <CTASection />
    </section>
  );
}

export default function SakshamPage() {
  return (
    <SakshamLocaleProvider>
      <SakshamPageContent />
    </SakshamLocaleProvider>
  );
}
