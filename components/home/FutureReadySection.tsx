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

                {/* Right Content - Visualization */}
                <div className="relative">
                    <div className={`relative w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[600px] rounded-2xl sm:rounded-3xl border overflow-hidden shadow-2xl transition-all duration-500 ${mounted && resolvedTheme === 'dark'
                            ? 'bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900 border-gray-600'
                            : 'bg-gradient-to-br from-gray-50 via-white to-gray-100 border-gray-200'
                        }`}>
                        {/* Animated background pattern */}
                        <div className="absolute inset-0 opacity-5">
                            <div
                                className="w-full h-full"
                                style={{
                                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='${mounted && resolvedTheme === 'dark' ? '%23ffffff' : '%23000000'
                                        }' fill-opacity='0.1'%3E%3Cpath d='M40 40c0-22.091-17.909-40-40-40s-40 17.909-40 40 17.909 40 40 40 40-17.909 40-40zM0 40c0-22.091 17.909-40 40-40s40 17.909 40 40-17.909 40-40 40S0 62.091 0 40z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                                    backgroundRepeat: 'repeat'
                                }}
                            ></div>
                        </div>

                        {/* Placeholder content */}
                        <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6">
                            <div className="text-center space-y-4 sm:space-y-6">
                                <div className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full flex items-center justify-center transition-all duration-500 ${mounted && resolvedTheme === 'dark'
                                        ? 'bg-gradient-to-br from-emerald-600 to-teal-600'
                                        : 'bg-gradient-to-br from-emerald-500 to-teal-500'
                                    }`}>
                                    <svg
                                        className="w-8 h-8 sm:w-10 sm:h-10 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M13 10V3L4 14h7v7l9-11h-7z"
                                        />
                                    </svg>
                                </div>
                                <div className="space-y-2">
                                    <p className={`font-semibold text-base sm:text-lg transition-colors duration-500 ${mounted && resolvedTheme === 'dark'
                                            ? 'text-gray-200'
                                            : 'text-gray-700'
                                        }`}>
                                        Future-Ready Implementation
                                    </p>
                                    <p className={`text-xs sm:text-sm max-w-xs mx-auto transition-colors duration-500 ${mounted && resolvedTheme === 'dark'
                                            ? 'text-gray-400'
                                            : 'text-gray-500'
                                        }`}>
                                        Next-generation technology showcase and implementation preview will be displayed here
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Decorative animated elements */}
                        <div className={`absolute top-8 sm:top-12 right-8 sm:right-12 w-12 h-12 sm:w-16 sm:h-16 rounded-full animate-pulse transition-all duration-500 ${mounted && resolvedTheme === 'dark'
                                ? 'bg-gradient-to-r from-emerald-500/30 to-teal-500/30'
                                : 'bg-gradient-to-r from-emerald-400/20 to-teal-400/20'
                            }`}></div>
                        <div className={`absolute bottom-8 sm:bottom-12 left-8 sm:left-12 w-10 h-10 sm:w-12 sm:h-12 rounded-full animate-pulse transition-all duration-500 ${mounted && resolvedTheme === 'dark'
                                ? 'bg-gradient-to-r from-blue-500/30 to-cyan-500/30'
                                : 'bg-gradient-to-r from-blue-400/20 to-cyan-400/20'
                            }`} style={{ animationDelay: '1000ms' }}></div>
                        <div className={`absolute top-1/3 right-6 sm:right-8 w-6 h-6 sm:w-8 sm:h-8 rounded-full animate-pulse transition-all duration-500 ${mounted && resolvedTheme === 'dark'
                                ? 'bg-gradient-to-r from-purple-500/30 to-indigo-500/30'
                                : 'bg-gradient-to-r from-purple-400/20 to-indigo-400/20'
                            }`} style={{ animationDelay: '500ms' }}></div>
                        <div className={`absolute bottom-1/3 left-6 sm:left-8 w-8 h-8 sm:w-10 sm:h-10 rounded-full animate-pulse transition-all duration-500 ${mounted && resolvedTheme === 'dark'
                                ? 'bg-gradient-to-r from-green-500/30 to-emerald-500/30'
                                : 'bg-gradient-to-r from-green-400/20 to-emerald-400/20'
                            }`} style={{ animationDelay: '700ms' }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FutureReadySection;

