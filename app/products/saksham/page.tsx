"use client";
import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import HeroSection from '../../../components/saksham/HeroSection';
import ProblemSection from '../../../components/saksham/ProblemSection';
import SolutionSection from '../../../components/saksham/SolutionSection';
import JourneySection from '../../../components/saksham/JourneySection';
import AIAdvantageSection from '@/components/saksham/AiAdvantagesSection';
import ResultsAnalyticsSection from '@/components/saksham/ResultsAnalyticsSection';
import CTASection from '@/components/saksham/CTASection';

const SakshamPage = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
   <section className={`relative min-h-screen transition-all duration-500`}>
      {/* Hero Section */}
      <HeroSection />
      
      {/* Problem Section */}
      <ProblemSection />
      
      {/* Solution Section */}
      <SolutionSection />
      
      {/* Journey Section */}
      <JourneySection />

      {/* AI Advantage Section */}
      <AIAdvantageSection />

      {/* Results Analytics Section */}
      <ResultsAnalyticsSection />

      {/* CTA Section */}
      <CTASection />
    </section>
  );
};

export default SakshamPage;