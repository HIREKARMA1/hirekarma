"use client";

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useHomeLocale } from '@/contexts/HomeLocaleContext';

const FutureReadySection: React.FC = () => {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme } = useTheme();
    const { content } = useHomeLocale();
    const { futureReadySection } = content;

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="relative content-container py-12 sm:py-16 md:py-20">
            <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 md:gap-16 lg:gap-20 items-center">

                {/* Left Content */}
                <div className="space-y-6 sm:space-y-8 lg:space-y-10">
                    {/* Section Header */}
                    <div className="space-y-4 sm:space-y-6">
                        <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight transition-colors duration-500 ${mounted && resolvedTheme === 'dark'
                            ? 'text-gray-100'
                            : 'text-gray-900'
                            }`}>
                            {futureReadySection.heading}
                            <span className={`block mt-2 text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-medium transition-colors duration-500 ${mounted && resolvedTheme === 'dark'
                                ? 'text-emerald-400'
                                : 'text-emerald-600'
                                }`}>
                                {futureReadySection.subheading}
                            </span>
                        </h2>
                    </div>

                    {/* Description */}
                    <div className="space-y-4">
                        <p className={`text-base sm:text-lg md:text-xl leading-relaxed transition-colors duration-500 ${mounted && resolvedTheme === 'dark'
                            ? 'text-gray-300'
                            : 'text-gray-600'
                            }`}>
                            {futureReadySection.description}
                        </p>
                    </div>

                    {/* Read More Button */}
                    <div className="pt-2 sm:pt-4">
                        <Link
                            href="/about-us/our-story"
                            className={`group relative inline-flex items-center overflow-hidden px-5 py-2.5 sm:px-6 sm:py-3 font-semibold rounded-lg transition-all duration-500 hover:brightness-110 border-2 ${mounted && resolvedTheme === 'dark'
                                ? 'border-emerald-600 text-emerald-400 hover:bg-emerald-600 hover:text-white'
                                : 'border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white'
                                }`}
                        >
                            <span className="relative z-10">{futureReadySection.cta}</span>
                            <svg className="relative z-10 ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                            <span className="pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-br from-emerald-500/5 to-blue-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden />
                        </Link>
                    </div>
                </div>


                <div className="relative px-0 sm:px-5 md:px-5 w-full h-[220px] xs:h-[280px] sm:h-[320px] md:h-[350px] lg:h-[600px] xl:h-[650px] flex items-center justify-center overflow-hidden rounded-[20px]">
                    <video
                        src="https://hirekarma.s3.us-east-1.amazonaws.com/hirekarma_ui/home_ui/HirekarmaSolution1.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-contain"
                    />

                    {/* Fallback content */}
                    <div
                        className={`absolute inset-0 rounded-[20px] hidden ${mounted && resolvedTheme === 'dark'
                                ? 'bg-gray-900/50 backdrop-blur-sm'
                                : 'bg-white/50 backdrop-blur-sm'
                            }`}
                    >
                        <div className="text-center space-y-4">
                            <div
                                className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center ${mounted && resolvedTheme === 'dark'
                                        ? 'bg-gray-700/80'
                                        : 'bg-gray-200/80'
                                    }`}
                            >
                                <svg
                                    className={`w-8 h-8 ${mounted && resolvedTheme === 'dark'
                                            ? 'text-gray-300'
                                            : 'text-gray-500'
                                        }`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                                    />
                                </svg>
                            </div>
                            <p
                                className={`font-medium ${mounted && resolvedTheme === 'dark'
                                        ? 'text-gray-200'
                                        : 'text-gray-600'
                                    }`}
                            >
                                Animation not supported
                            </p>
                            <p
                                className={`text-sm ${mounted && resolvedTheme === 'dark'
                                        ? 'text-gray-300'
                                        : 'text-gray-500'
                                    }`}
                            >
                                Your browser doesn&apos;t support video playback
                            </p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default FutureReadySection;

