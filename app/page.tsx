"use client";

import React from 'react';
import Navbar from '../components/layout/Navbar';
import HeroSection from '../components/sections/HeroSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import SolutionsSection from '../components/sections/SolutionsSection';

const LandingPage: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <SolutionsSection />
    </div>
  );
};

export default LandingPage;