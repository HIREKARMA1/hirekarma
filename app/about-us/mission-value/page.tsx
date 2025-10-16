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

                    {/* Mission Section - Text Left, Visual Right */}
                    <div className="relative content-container py-36">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            {/* Left Content */}
                            <div className="space-y-8 lg:space-y-10">
                                <div className="space-y-6">
                                    <h2 className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight ${mounted && resolvedTheme === 'dark'
                                            ? 'text-gray-100'
                                            : 'text-gray-900'
                                        }`}>
                                        OUR MISSION
                                        <span className={`block mt-2 text-lg sm:text-xl lg:text-2xl xl:text-3xl font-medium ${mounted && resolvedTheme === 'dark'
                                                ? 'text-blue-400'
                                                : 'text-blue-600'
                                            }`}>
                                            Precision in Purpose, Excellence in Execution
                                        </span>
                                    </h2>
                                </div>

                                <div className="space-y-4">
                                    <p className={`text-lg sm:text-xl leading-relaxed max-w-2xl ${mounted && resolvedTheme === 'dark'
                                            ? 'text-gray-300'
                                            : 'text-gray-600'
                                        }`}>
                                            
                                    </p>
                                </div>
     
                            </div>


                            {/* Right: Visual */}
                            <div className="relative">
                                <div className={`relative w-full h-[420px] lg:h-[460px] rounded-3xl border overflow-hidden shadow-2xl ${mounted && resolvedTheme === 'dark' ? 'bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900 border-gray-600' : 'bg-gradient-to-br from-gray-50 via-white to-gray-100 border-gray-200'}`}>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className={`w-24 h-24 rounded-full flex items-center justify-center ${mounted && resolvedTheme === 'dark' ? 'bg-gradient-to-br from-blue-700 to-cyan-500' : 'bg-gradient-to-br from-blue-500 to-cyan-400'}`}>
                                            <Target className="w-12 h-12 text-white" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Vision Section - Text Left, Visual Right */}
                    <div className="relative content-container py-16">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            {/* Left: Text */}
                            <div className="space-y-6 max-w-2xl">
                                <h2 className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight ${mounted && resolvedTheme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>
                                    OUR VISION
                                </h2>
                                <h3 className={`text-xl sm:text-2xl font-semibold mt-4 mb-2 ${mounted && resolvedTheme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
                                    Illuminating Pathways to Success
                                </h3>
                                <p className={`text-lg sm:text-xl leading-relaxed ${mounted && resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                                    Our clear vision illuminates a future where every student&apos;s potential is seen and realized. We look beyond barriers of background or location, foreseeing a world where technology-driven insights, mentorship clarity, and data-powered learning light the path from education to meaningful employment.
                                </p>
                            </div>

                            {/* Right: Visual */}
                            <div className="relative">
                                <div className={`relative w-full h-[420px] lg:h-[460px] rounded-3xl border overflow-hidden shadow-2xl ${mounted && resolvedTheme === 'dark' ? 'bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900 border-gray-600' : 'bg-gradient-to-br from-gray-50 via-white to-gray-100 border-gray-200'}`}>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className={`w-24 h-24 rounded-full flex items-center justify-center ${mounted && resolvedTheme === 'dark' ? 'bg-gradient-to-br from-purple-700 to-pink-500' : 'bg-gradient-to-br from-purple-500 to-pink-400'}`}>
                                            <Eye className="w-12 h-12 text-white" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Values Section - Text Left, Visual Right */}
                    <div className="relative content-container py-16">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            {/* Left: Text */}
                            <div className="space-y-6 max-w-2xl">
                                <h2 className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight ${mounted && resolvedTheme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>
                                    OUR VALUES
                                </h2>
                                <h3 className={`text-xl sm:text-2xl font-semibold mt-4 mb-2 ${mounted && resolvedTheme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
                                    Guiding Stars of Our Journey
                                </h3>
                                <p className={`text-lg sm:text-xl leading-relaxed ${mounted && resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                                    Like guiding stars, our core values of inclusivity, transparency, and innovation light the way forward. We create a stellar community where excellence shines through continuous learning, and the brilliance of shared growth illuminates new opportunities for both students and partners.
                                </p>
                            </div>

                            {/* Right: Visual */}
                            <div className="relative">
                                <div className={`relative w-full h-[420px] lg:h-[460px] rounded-3xl border overflow-hidden shadow-2xl ${mounted && resolvedTheme === 'dark' ? 'bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900 border-gray-600' : 'bg-gradient-to-br from-gray-50 via-white to-gray-100 border-gray-200'}`}>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className={`w-24 h-24 rounded-full flex items-center justify-center ${mounted && resolvedTheme === 'dark' ? 'bg-gradient-to-br from-emerald-700 to-teal-500' : 'bg-gradient-to-br from-emerald-500 to-teal-400'}`}>
                                            <Star className="w-12 h-12 text-white" />
                                        </div>
                                    </div>
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
