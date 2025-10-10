"use client";

import React from 'react';
import Navbar from '../components/layout/Navbar';
import HeroSection from '../components/sections/HeroSection';
import OurServicesSection from '../components/sections/OurServicesSection';
import FAQSection from '../components/sections/FAQSection';
import Footer from '../components/layout/Footer';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <OurServicesSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;