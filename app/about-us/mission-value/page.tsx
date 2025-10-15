"use client";

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Navbar from '../../../components/layout/Navbar';
import Footer from '../../../components/layout/Footer';
import WavyBackground from '../../../components/layout/WavyBackground';
import { Target, Eye, Star } from 'lucide-react';

const MissionValuePage: React.FC = () => {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className={`min-h-screen flex flex-col ${
            mounted && resolvedTheme === 'dark' 
                ? 'bg-gray-900' 
                : 'bg-white'
        }`}>
            <Navbar />
            
            <main className="flex-grow">
                {/* Main Section with consistent background */}
                <section className={`relative min-h-screen ${
                    mounted && resolvedTheme === 'dark' 
                        ? 'bg-gray-900' 
                        : 'bg-white'
                }`}>
                    {/* Wavy Background */}
                    <WavyBackground variant="primary" intensity="medium" />
                    
                    {/* Header Section - Left-Right Layout */}
                    <div className="relative content-container pt-32 pb-8">
                        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                            {/* Left Content - Header and Description */}
                            <div className="space-y-2 lg:space-y-1">
                                <div className="space-y-4">
                                    <h1 className={`text-2xl sm:text-4xl lg:text-4xl xl:text-6xl font-bold leading-tight tracking-tight ${
                                        mounted && resolvedTheme === 'dark' 
                                            ? 'text-gray-100' 
                                            : 'text-gray-900'
                                    }`}>
                                        Mission & Values
                                    </h1>
                                </div>

                                <div className="space-y-3">
                                    <p className={`text-lg sm:text-xl leading-relaxed max-w-2xl ${
                                        mounted && resolvedTheme === 'dark' 
                                            ? 'text-gray-300' 
                                            : 'text-gray-600'
                                    }`}>
                                        Our commitment to <strong className={`${
                                            mounted && resolvedTheme === 'dark' 
                                                ? 'text-gray-200' 
                                                : 'text-gray-700'
                                        }`}>transforming campus recruitment</strong> through technology, innovation, and <strong className={`${
                                            mounted && resolvedTheme === 'dark' 
                                                ? 'text-gray-200' 
                                                : 'text-gray-700'
                                        }`}>inclusive practices</strong>.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mission, Vision & Values Section - Three Column Layout */}
                    <div className="relative content-container py-8">
                        <div className="max-w-7xl mx-auto">
                            <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
                                {/* Mission Column */}
                                <div className={`text-center p-6 lg:p-8 rounded-2xl border transition-all duration-300 hover:scale-105 ${
                                    mounted && resolvedTheme === 'dark'
                                        ? 'bg-gradient-to-br from-blue-900/20 to-blue-800/10 border-blue-700/30'
                                        : 'bg-gradient-to-br from-blue-50 to-blue-100/50 border-blue-200'
                                }`}>
                                    {/* Large Icon - Placeholder for target symbol */}
                                    <div className={`w-20 h-20 mx-auto mb-4 rounded-full border-4 flex items-center justify-center ${
                                        mounted && resolvedTheme === 'dark'
                                            ? 'bg-blue-900/30 border-blue-600/50'
                                            : 'bg-blue-100/80 border-blue-300/70'
                                    }`}>
                                        <Target className={`w-10 h-10 ${
                                            mounted && resolvedTheme === 'dark' 
                                                ? 'text-blue-400' 
                                                : 'text-blue-600'
                                        }`} />
                                </div>
                                
                                    {/* Title */}
                                    <h2 className={`text-2xl lg:text-3xl font-bold mb-3 ${
                                        mounted && resolvedTheme === 'dark' 
                                            ? 'text-gray-100' 
                                            : 'text-gray-900'
                                    }`}>
                                        OUR MISSION
                                    </h2>

                                    {/* Underline */}
                                    <div className={`w-16 h-1 mx-auto mb-5 rounded-full ${
                                        mounted && resolvedTheme === 'dark' 
                                            ? 'bg-cyan-400' 
                                            : 'bg-cyan-600'
                                    }`}></div>

                                    {/* Small Icon */}
                                    <div className={`w-10 h-10 mx-auto mb-4 rounded-full border-2 flex items-center justify-center ${
                                        mounted && resolvedTheme === 'dark'
                                            ? 'bg-blue-900/20 border-blue-600/40'
                                            : 'bg-blue-100/60 border-blue-300/60'
                                    }`}>
                                        <Target className={`w-6 h-6 ${
                                            mounted && resolvedTheme === 'dark' 
                                                ? 'text-blue-400' 
                                                : 'text-blue-600'
                                        }`} />
                                    </div>

                                    {/* Description */}
                                    <p className={`text-sm leading-relaxed ${
                                        mounted && resolvedTheme === 'dark' 
                                            ? 'text-gray-300' 
                                            : 'text-gray-600'
                                    }`}>
                                        To transform campus recruitment through AI automation, predictive analytics, and community-driven engagement, 
                                        ensuring no student is left behind in their career journey while empowering educational institutions 
                                        and employers with efficient, transparent hiring processes.
                                    </p>
                                </div>

                                {/* Vision Column */}
                                <div className={`text-center p-6 lg:p-8 rounded-2xl border transition-all duration-300 hover:scale-105 ${
                                    mounted && resolvedTheme === 'dark'
                                        ? 'bg-gradient-to-br from-purple-900/20 to-purple-800/10 border-purple-700/30'
                                        : 'bg-gradient-to-br from-purple-50 to-purple-100/50 border-purple-200'
                                }`}>
                                    {/* Large Icon - Placeholder for lightbulb symbol */}
                                    <div className={`w-20 h-20 mx-auto mb-4 rounded-full border-4 flex items-center justify-center ${
                                        mounted && resolvedTheme === 'dark'
                                            ? 'bg-purple-900/30 border-purple-600/50'
                                            : 'bg-purple-100/80 border-purple-300/70'
                                    }`}>
                                        <Eye className={`w-10 h-10 ${
                                            mounted && resolvedTheme === 'dark' 
                                                ? 'text-purple-400' 
                                                : 'text-purple-600'
                                        }`} />
                                        </div>

                                    {/* Title */}
                                    <h2 className={`text-2xl lg:text-3xl font-bold mb-3 ${
                                        mounted && resolvedTheme === 'dark' 
                                            ? 'text-gray-100' 
                                            : 'text-gray-900'
                                    }`}>
                                        OUR VISION
                                    </h2>

                                    {/* Underline */}
                                    <div className={`w-16 h-1 mx-auto mb-5 rounded-full ${
                                        mounted && resolvedTheme === 'dark' 
                                            ? 'bg-cyan-400' 
                                            : 'bg-cyan-600'
                                    }`}></div>

                                    {/* Small Icon */}
                                    <div className={`w-10 h-10 mx-auto mb-4 rounded-full border-2 flex items-center justify-center ${
                                        mounted && resolvedTheme === 'dark'
                                            ? 'bg-purple-900/20 border-purple-600/40'
                                            : 'bg-purple-100/60 border-purple-300/60'
                                    }`}>
                                        <Eye className={`w-6 h-6 ${
                                            mounted && resolvedTheme === 'dark' 
                                                ? 'text-purple-400' 
                                                : 'text-purple-600'
                                        }`} />
                                    </div>

                                    {/* Description */}
                                    <p className={`text-sm leading-relaxed ${
                                        mounted && resolvedTheme === 'dark' 
                                            ? 'text-gray-300' 
                                            : 'text-gray-600'
                                    }`}>
                                        To create a world where every student, regardless of their background or location, 
                                        has equal access to meaningful career opportunities through technology-enabled solutions 
                                        that bridge the gap between academia and industry.
                                    </p>
                            </div>

                                {/* Values Column */}
                                <div className={`text-center p-6 lg:p-8 rounded-2xl border transition-all duration-300 hover:scale-105 ${
                                    mounted && resolvedTheme === 'dark'
                                        ? 'bg-gradient-to-br from-emerald-900/20 to-emerald-800/10 border-emerald-700/30'
                                        : 'bg-gradient-to-br from-emerald-50 to-emerald-100/50 border-emerald-200'
                                }`}>
                                    {/* Large Icon - Placeholder for hand holding star symbol */}
                                    <div className={`w-20 h-20 mx-auto mb-4 rounded-full border-4 flex items-center justify-center ${
                                        mounted && resolvedTheme === 'dark'
                                            ? 'bg-emerald-900/30 border-emerald-600/50'
                                            : 'bg-emerald-100/80 border-emerald-300/70'
                                    }`}>
                                        <Star className={`w-10 h-10 ${
                                            mounted && resolvedTheme === 'dark' 
                                                ? 'text-emerald-400' 
                                                : 'text-emerald-600'
                                        }`} />
                                    </div>

                                    {/* Title */}
                                    <h2 className={`text-2xl lg:text-3xl font-bold mb-3 ${
                                        mounted && resolvedTheme === 'dark' 
                                            ? 'text-gray-100' 
                                            : 'text-gray-900'
                                    }`}>
                                        OUR VALUES
                                    </h2>

                                    {/* Underline */}
                                    <div className={`w-16 h-1 mx-auto mb-5 rounded-full ${
                                        mounted && resolvedTheme === 'dark' 
                                            ? 'bg-cyan-400' 
                                            : 'bg-cyan-600'
                                    }`}></div>

                                    {/* Small Icon */}
                                    <div className={`w-10 h-10 mx-auto mb-4 rounded-full border-2 flex items-center justify-center ${
                                        mounted && resolvedTheme === 'dark'
                                            ? 'bg-emerald-900/20 border-emerald-600/40'
                                            : 'bg-emerald-100/60 border-emerald-300/60'
                                    }`}>
                                        <Star className={`w-6 h-6 ${
                                            mounted && resolvedTheme === 'dark' 
                                                ? 'text-emerald-400' 
                                                : 'text-emerald-600'
                                        }`} />
                                    </div>

                                    {/* Description */}
                                    <p className={`text-sm leading-relaxed ${
                                        mounted && resolvedTheme === 'dark' 
                                            ? 'text-gray-300' 
                                            : 'text-gray-600'
                                    }`}>
                                        Inclusivity & Equal Opportunity, Transparency & Trust, Innovation & Impact, 
                                        Community & Progress, Excellence & Quality, and Growth & Development guide 
                                        everything we do and shape how we serve our community.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
};

export default MissionValuePage;
