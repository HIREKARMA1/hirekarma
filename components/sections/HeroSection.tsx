"use client";

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import WavyBackground from '../layout/WavyBackground';
import HeroBanner from '../home/HeroBanner';
import ImpactSection from '../home/ImpactSection';
import ProblemStatement from '../home/ProblemStatement';
import FutureReadySection from '../home/FutureReadySection';
import Testimonials from '../home/Testimonials';
import FAQ from '../home/FAQ';
import Partners from '../home/Partners';
import CertificationsSection from '../home/CertificationsSection';

const HeroSection: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className={`relative min-h-screen transition-all duration-500 ${
      mounted && resolvedTheme === 'dark'
        ? 'bg-gray-900'
        : 'bg-white'
    }`}>
      {/* Wavy Background */}
      <WavyBackground variant="primary" intensity="medium" />

      {/* All Section Components */}
      <HeroBanner />
      <ImpactSection />
      <ProblemStatement />
      <FutureReadySection />
      <Testimonials />
      <FAQ />
      <Partners />
      <CertificationsSection />
    </section>
  );
};

export default HeroSection;

