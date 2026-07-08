"use client";

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { Briefcase } from 'lucide-react';

const HeroSection: React.FC = () => {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="relative content-container pt-20 pb-20">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center min-h-[85vh]">
                {/* Left Content */}
                <div className="space-y-8 lg:space-y-10">
                    <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full ${mounted && resolvedTheme === 'dark'
                        ? 'bg-blue-900/30 border border-blue-700/50'
                        : 'bg-blue-100 border border-blue-200'
                        }`}>
                        <Briefcase className={`w-4 h-4 ${mounted && resolvedTheme === 'dark' ? 'text-blue-400' : 'text-blue-700'
                            }`} />
                        <span className={`text-sm font-semibold ${mounted && resolvedTheme === 'dark' ? 'text-blue-400' : 'text-blue-700'
                            }`}>For Corporate</span>
                    </div>

                    <div className="space-y-6">
                        <h1 className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight transition-colors duration-500 ${mounted && resolvedTheme === 'dark' ? 'text-gray-100' : 'text-gray-900'
                            }`}>
                            Hire Smarter, Faster
                            <span className={`block mt-2 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium transition-colors duration-500 ${mounted && resolvedTheme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'
                                }`}>
                                and Fairer
                            </span>
                        </h1>
                    </div>

                    <div className="space-y-4">
                        <p className={`text-lg sm:text-xl leading-relaxed max-w-2xl transition-colors duration-500 ${mounted && resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                            }`}>
                            Revolutionize your early talent pipeline with HireKarma&apos;s <strong className={`${mounted && resolvedTheme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                                }`}>end-to-end corporate hiring suite</strong>.
                            Tap into a network of thousands of pre-vetted, job-ready graduates from India&apos;s top colleges,
                            accelerate your campus hiring cycles, and leverage data for <strong className={`${mounted && resolvedTheme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                                }`}>predictive hiring</strong>-all through one
                            seamless HRTech gateway.
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className={`px-8 py-4 font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 ${mounted && resolvedTheme === 'dark'
                            ? 'bg-blue-600 text-white hover:bg-blue-700'
                            : 'bg-blue-600 text-white hover:bg-blue-700'
                            }`}>
                            Get Started
                        </button>
                    </div>
                </div>

                {/* Right Content - Image */}
                <div className="relative">
                    <div className="rounded-3xl overflow-hidden shadow-2xl">
                        <Image
                            src="/corporate.jpg"
                            alt="Corporate hiring excellence"
                            width={600}
                            height={500}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                    <div className={`absolute -bottom-6 -left-6 w-32 h-32 rounded-full blur-3xl ${mounted && resolvedTheme === 'dark' ? 'bg-blue-500/30' : 'bg-blue-200/50'
                        }`}></div>
                    <div className={`absolute -top-6 -right-6 w-40 h-40 rounded-full blur-3xl ${mounted && resolvedTheme === 'dark' ? 'bg-cyan-500/30' : 'bg-cyan-200/50'
                        }`}></div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;

