"use client";

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';

const FutureReadySection: React.FC = () => {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme } = useTheme();

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
                            Future-Ready Implementation
                            <span className={`block mt-2 text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl font-medium transition-colors duration-500 ${mounted && resolvedTheme === 'dark'
                                ? 'text-emerald-400'
                                : 'text-emerald-600'
                                }`}>
                                Next-Gen Campus Solutions
                            </span>
                        </h2>
                    </div>

                    {/* Description */}
                    <div className="space-y-4">
                        <p className={`text-base sm:text-lg md:text-xl leading-relaxed transition-colors duration-500 ${mounted && resolvedTheme === 'dark'
                            ? 'text-gray-300'
                            : 'text-gray-600'
                            }`}>
                            Our platform is built with <strong className={`transition-colors duration-500 ${mounted && resolvedTheme === 'dark'
                                ? 'text-gray-200'
                                : 'text-gray-700'
                                }`}>cutting-edge technology</strong> and <strong className={`transition-colors duration-500 ${mounted && resolvedTheme === 'dark'
                                    ? 'text-gray-200'
                                    : 'text-gray-700'
                                    }`}>scalable architecture</strong> to meet the evolving needs of modern campus recruitment.
                        </p>
                        <p className={`text-base sm:text-lg md:text-xl leading-relaxed transition-colors duration-500 ${mounted && resolvedTheme === 'dark'
                            ? 'text-gray-300'
                            : 'text-gray-600'
                            }`}>
                            From <strong className={`transition-colors duration-500 ${mounted && resolvedTheme === 'dark'
                                ? 'text-gray-200'
                                : 'text-gray-700'
                                }`}>AI-powered matching</strong> to <strong className={`transition-colors duration-500 ${mounted && resolvedTheme === 'dark'
                                    ? 'text-gray-200'
                                    : 'text-gray-700'
                                    }`}>real-time analytics</strong>, we provide institutions with the tools they need to stay ahead in the digital transformation era.
                        </p>
                    </div>

                    {/* Read More Button */}
                    <div className="pt-2 sm:pt-4">
                        <Link
                            href="/about-us/our-story"
                            className={`inline-flex items-center px-5 py-2.5 sm:px-6 sm:py-3 font-semibold rounded-lg transition-all duration-500 border-2 hover:shadow-lg transform hover:-translate-y-0.5 ${mounted && resolvedTheme === 'dark'
                                ? 'border-emerald-600 text-emerald-400 hover:bg-emerald-600 hover:text-white'
                                : 'border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white'
                                }`}
                        >
                            <span>Read More</span>
                            <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Link>
                    </div>
                </div>


                <div className="relative w-full h-[220px] xs:h-[280px] sm:h-[320px] md:h-[350px] lg:h-[420px]">
                    <video
                        src="https://hirekarma.s3.us-east-1.amazonaws.com/hirekarma_ui/home_ui/HirekarmaSolution.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover rounded-2xl"
                    />

                    {/* Fallback content */}
                    <div
                        className={`absolute inset-0 flex items-center justify-center rounded-2xl hidden ${mounted && resolvedTheme === 'dark'
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

