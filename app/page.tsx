"use client";

import React, { Suspense } from 'react';
import dynamic from 'next/dynamic';

// Lazy load HeroSection for better code splitting
const HeroSection = dynamic(() => import('../components/sections/HeroSection'), {
  loading: () => <div className="min-h-screen bg-white dark:bg-gray-950" />,
  ssr: true
});

const LandingPage: React.FC = () => {
  return (
    <main className="min-h-screen">
      <Suspense fallback={<div className="min-h-screen bg-white dark:bg-gray-950" />}>
        <HeroSection />
      </Suspense>
    </main>
  );
};

export default LandingPage;