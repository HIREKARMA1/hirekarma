"use client";

import React from 'react';
import HeroSection from '../../../components/about/HeroSection';
import JourneySection from '../../../components/about/JourneySection';
import ChallengeSection from '../../../components/about/ChallengeSection';
import SolutionSection from '../../../components/about/SolutionSection';

const OurStoryPage: React.FC = () => {
    

    return (
        <section className={`relative min-h-screen transition-all duration-500`}>
                    {/* Hero Content */}
                    <HeroSection />

                    {/* The Journey Begins Section */}
                    <JourneySection />

                    {/* The Challenge Section */}
                    <ChallengeSection />

                    {/* Our Solution Section */}
                    <SolutionSection />

        </section>
    );
};

export default OurStoryPage;

