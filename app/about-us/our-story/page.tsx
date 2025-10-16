"use client";

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Navbar from '../../../components/layout/Navbar';
import Footer from '../../../components/layout/Footer';
import WavyBackground from '../../../components/layout/WavyBackground';
import HeroSection from '../../../components/about/HeroSection';
import JourneySection from '../../../components/about/JourneySection';
import ChallengeSection from '../../../components/about/ChallengeSection';
import SolutionSection from '../../../components/about/SolutionSection';

const OurStoryPage: React.FC = () => {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className={`min-h-screen flex flex-col transition-all duration-500 ${mounted && resolvedTheme === 'dark'
                ? 'bg-gray-900'
                : 'bg-white'
            }`}>
            <Navbar />

            <main className="flex-grow">
                {/* Main Section with consistent background */}
                <section className={`relative min-h-screen transition-all duration-500 ${mounted && resolvedTheme === 'dark'
                        ? 'bg-gray-900'
                        : 'bg-white'
                    }`}>
                    {/* Wavy Background */}
                    <WavyBackground variant="primary" intensity="medium" />

                    {/* Hero Content */}
                    <HeroSection />

                    {/* The Journey Begins Section */}
                    <JourneySection />

                    {/* The Challenge Section */}
                    <ChallengeSection />

                    {/* Our Solution Section */}
                    <SolutionSection />
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default OurStoryPage;

