"use client";

import React from 'react';
import HeroBanner from '../home/HeroBanner';
import ImpactSection from '../home/ImpactSection';
import ProblemStatement from '../home/ProblemStatement';
import FutureReadySection from '../home/FutureReadySection';
import Testimonials from '../home/Testimonials';
import FAQ from '../home/FAQ';
import Partners from '../home/Partners';
import CertificationsSection from '../home/CertificationsSection';

const HeroSection: React.FC = () => {

  return (
    <section className={`relative min-h-screen transition-all duration-500`}>
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

