"use client";

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Navbar from '../../../components/layout/Navbar';
import Footer from '../../../components/layout/Footer';
import WavyBackground from '../../../components/layout/WavyBackground';
import HeroSection from '../../../components/solutions/corporate/HeroSection';
import ProblemSection from '../../../components/solutions/corporate/ProblemSection';
import SolutionSection from '../../../components/solutions/corporate/SolutionSection';

const ForCorporatePage: React.FC = () => {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className={`min-h-screen flex flex-col transition-all duration-500 ${mounted && resolvedTheme === 'dark' ? 'bg-gray-900' : 'bg-white'
            }`}>
            <Navbar />

            <main className="flex-grow">
                <section className={`relative transition-all duration-500 ${mounted && resolvedTheme === 'dark' ? 'bg-gray-900' : 'bg-white'
                    }`}>
                    {/* Wavy Background */}
                    <WavyBackground variant="primary" intensity="strong" />

                    {/* Section 1: The Impact (Hire Smarter) */}
                    <HeroSection />

                    {/* Section 2: The Challenges (The Hurdles Corporates Face) */}
                    <ProblemSection />

                    {/* Section 3: The Solution (How HireKarma Bridges the Gap) */}
                    <SolutionSection />

                </section>
            </main>

            <Footer />
        </div>
    );
};

export default ForCorporatePage;

