"use client";

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';

const ProblemStatement: React.FC = () => {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme } = useTheme();
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="relative content-container py-12 sm:py-16 md:py-20">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center">
                {/* Left Content - Problem Statement */}
                <div className="space-y-6 sm:space-y-8 lg:space-y-10">
                    {/* Section Header */}
                    <div className="space-y-4 sm:space-y-6">
                        <h2 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight ${mounted && resolvedTheme === 'dark'
                            ? 'text-gray-100'
                            : 'text-gray-900'
                            }`}>
                            The Problem We Solve
                            <span className={`block mt-1 sm:mt-2 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium ${mounted && resolvedTheme === 'dark'
                                ? 'text-red-400'
                                : 'text-red-600'
                                }`}>
                                Traditional Talent Ecosystem Gaps
                            </span>
                        </h2>
                    </div>

                    {/* Paragraph */}
                    <div className="space-y-3 sm:space-y-4">
                        <p className={`text-base sm:text-lg md:text-xl leading-relaxed max-w-full sm:max-w-xl md:max-w-2xl ${mounted && resolvedTheme === 'dark'
                            ? 'text-gray-300'
                            : 'text-gray-600'
                            }`}>
                            The traditional talent ecosystem is <strong className={`${mounted && resolvedTheme === 'dark'
                                ? 'text-gray-200'
                                : 'text-gray-700'
                                }`}>fragmented and inefficient</strong>. Students struggle to meet industry expectations, institutions lack data-driven insights, and employers find it hard to identify job-ready talent. This leads to mismatches, longer hiring cycles, and a widening gap between education and employability.
                        </p>
                    </div>
                </div>

                {/* Right Content - Problem Statement Image (same width/sizing as Hero right column) */}
                <div className="relative px-0 sm:px-5 md:px-5">
                    <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] overflow-hidden rounded-2xl">
                        <Image
                            src="https://hirekarma.s3.us-east-1.amazonaws.com/hirekarma_ui/home_ui/problemStatemen.gif"
                            alt="Problem Statement visualization - Talent ecosystem gaps and challenges"
                            fill
                            quality={85}
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
                            className={`object-contain object-center transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                            onLoad={() => setImageLoaded(true)}
                        />

                        {/* Loading skeleton */}
                        {!imageLoaded && (
                            <div className={`absolute inset-0 rounded-2xl animate-pulse ${mounted && resolvedTheme === 'dark'
                                ? 'bg-gray-800'
                                : 'bg-gray-200'
                                }`} />
                        )}

                        {/* Fallback content for browsers that don't support images */}
                        <div className={`absolute inset-0 flex items-center justify-center rounded-2xl hidden ${mounted && resolvedTheme === 'dark'
                            ? 'bg-gray-900/50 backdrop-blur-sm'
                            : 'bg-white/50 backdrop-blur-sm'
                            }`}>
                            <div className="text-center space-y-4">
                                <div className={`w-12 sm:w-16 h-12 sm:h-16 mx-auto rounded-full flex items-center justify-center ${mounted && resolvedTheme === 'dark'
                                    ? 'bg-gray-700/80'
                                    : 'bg-gray-200/80'
                                    }`}>
                                    <svg className={`w-6 sm:w-8 h-6 sm:h-8 ${mounted && resolvedTheme === 'dark'
                                        ? 'text-gray-300'
                                        : 'text-gray-500'
                                        }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <p className={`font-medium text-sm sm:text-base ${mounted && resolvedTheme === 'dark'
                                    ? 'text-gray-200'
                                    : 'text-gray-600'
                                    }`}>Animation not supported</p>
                                <p className={`text-xs sm:text-sm ${mounted && resolvedTheme === 'dark'
                                    ? 'text-gray-300'
                                    : 'text-gray-500'
                                    }`}>Your browser doesn&apos;t support image playback</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProblemStatement;