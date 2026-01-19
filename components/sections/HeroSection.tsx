"use client";

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';
import HeroBanner from '../home/HeroBanner';

// Lazy load below-the-fold sections for better initial load
const ImpactSection = dynamic(() => import('../home/ImpactSection'), {
  loading: () => <div className="min-h-screen" />,
  ssr: true
});

const ProblemStatement = dynamic(() => import('../home/ProblemStatement'), {
  loading: () => <div className="min-h-screen" />,
  ssr: true
});

const FutureReadySection = dynamic(() => import('../home/FutureReadySection'), {
  loading: () => <div className="min-h-screen" />,
  ssr: true
});

const Testimonials = dynamic(() => import('../home/Testimonials'), {
  loading: () => <div className="min-h-screen" />,
  ssr: true
});

const FAQ = dynamic(() => import('../home/FAQ'), {
  loading: () => <div className="min-h-screen" />,
  ssr: true
});

const Partners = dynamic(() => import('../home/Partners'), {
  loading: () => <div className="min-h-screen" />,
  ssr: true
});

const CertificationsSection = dynamic(() => import('../home/CertificationsSection'), {
  loading: () => <div className="min-h-screen" />,
  ssr: true
});

const HeroSection: React.FC = () => {
  return (
    <section className={`relative min-h-screen transition-all duration-500`}>
      {/* Hero Banner loads immediately (above the fold) */}
      <HeroBanner />
      
      {/* Lazy loaded sections (below the fold) */}
      <Suspense fallback={<div className="min-h-screen" />}>
        <ImpactSection />
      </Suspense>
      
      <Suspense fallback={<div className="min-h-screen" />}>
        <ProblemStatement />
      </Suspense>
      
      <Suspense fallback={<div className="min-h-screen" />}>
        <FutureReadySection />
      </Suspense>
      
      <Suspense fallback={<div className="min-h-screen" />}>
        <Testimonials />
      </Suspense>
      
      <Suspense fallback={<div className="min-h-screen" />}>
        <FAQ />
      </Suspense>
      
      <Suspense fallback={<div className="min-h-screen" />}>
        <Partners />
      </Suspense>
      
      <Suspense fallback={<div className="min-h-screen" />}>
        <CertificationsSection />
      </Suspense>
    </section>
  );
};

export default HeroSection;

