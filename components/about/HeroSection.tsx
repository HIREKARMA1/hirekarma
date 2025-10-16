"use client";

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

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
                    <div className="space-y-6">
                        <h1 className={`text-2xl sm:text-4xl lg:text-4xl xl:text-6xl font-bold leading-tight tracking-tight ${mounted && resolvedTheme === 'dark'
                            ? 'text-gray-100'
                            : 'text-gray-900'
                            }`}>
                            Bridging the Gap Between
                            <span className={`block mt-2 text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-medium ${mounted && resolvedTheme === 'dark'
                                ? 'text-cyan-400'
                                : 'text-cyan-600'
                                }`}>
                                Academia & Industry
                            </span>
                        </h1>
                    </div>

                    <div className="space-y-4">
                        <p className={`text-lg sm:text-xl leading-relaxed max-w-2xl ${mounted && resolvedTheme === 'dark'
                            ? 'text-gray-300'
                            : 'text-gray-600'
                            }`}>
                            Founded in <strong className={`${mounted && resolvedTheme === 'dark'
                                ? 'text-gray-200'
                                : 'text-gray-700'
                                }`}>Bhubaneswar in 2020</strong>, HireKarma emerged from a vision to <strong className={`${mounted && resolvedTheme === 'dark'
                                    ? 'text-gray-200'
                                    : 'text-gray-700'
                                    }`}>transform campus recruitment</strong> through AI automation and community-driven engagement.
                        </p>
                    </div>
                </div>

                {/* Right Content - Animated Placeholder */}
                <div className="relative">
                    <div className={`relative w-full h-[500px] lg:h-[600px] rounded-3xl border overflow-hidden shadow-2xl ${mounted && resolvedTheme === 'dark'
                        ? 'bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900 border-gray-600'
                        : 'bg-gradient-to-br from-gray-50 via-white to-gray-100 border-gray-200'
                        }`}>
                        {/* Animated background pattern */}
                        <div className="absolute inset-0 opacity-5">
                            <div className="w-full h-full" style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='${mounted && resolvedTheme === 'dark' ? '%23ffffff' : '%23000000'
                                    }' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zM0 20c0-11.046 8.954-20 20-20s20 8.954 20 20-8.954 20-20 20S0 31.046 0 20z'/%3E%3C/g%3E%3C/svg%3E")`,
                                backgroundRepeat: 'repeat'
                            }}></div>
                        </div>

                        {/* Placeholder content */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center space-y-6">
                                <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center ${mounted && resolvedTheme === 'dark'
                                    ? 'bg-gradient-to-br from-cyan-600 to-blue-600'
                                    : 'bg-gradient-to-br from-cyan-500 to-blue-500'
                                    }`}>
                                    <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div className="space-y-2">
                                    <p className={`font-semibold text-lg ${mounted && resolvedTheme === 'dark'
                                        ? 'text-gray-200'
                                        : 'text-gray-700'
                                        }`}>Origin Story Animation</p>
                                    <p className={`text-sm max-w-xs mx-auto ${mounted && resolvedTheme === 'dark'
                                        ? 'text-gray-400'
                                        : 'text-gray-500'
                                        }`}>GIF showcasing our journey and founding story</p>
                                </div>
                            </div>
                        </div>

                        {/* Decorative elements */}
                        <div className={`absolute top-12 right-12 w-16 h-16 rounded-full animate-pulse ${mounted && resolvedTheme === 'dark'
                            ? 'bg-gradient-to-r from-cyan-500/30 to-blue-500/30'
                            : 'bg-gradient-to-r from-cyan-400/20 to-blue-400/20'
                            }`}></div>
                        <div className={`absolute bottom-12 left-12 w-12 h-12 rounded-full animate-pulse delay-1000 ${mounted && resolvedTheme === 'dark'
                            ? 'bg-gradient-to-r from-blue-500/30 to-purple-500/30'
                            : 'bg-gradient-to-r from-blue-400/20 to-purple-400/20'
                            }`}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;

