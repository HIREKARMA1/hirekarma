"use client";

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const ProblemStatement: React.FC = () => {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="relative content-container py-20">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                {/* Left Content - Problem Statement */}
                <div className="space-y-8 lg:space-y-10">
                    {/* Section Header */}
                    <div className="space-y-6">
                        <h2 className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight ${mounted && resolvedTheme === 'dark'
                            ? 'text-gray-100'
                            : 'text-gray-900'
                            }`}>
                            The Problem We Solve
                            <span className={`block mt-2 text-lg sm:text-xl lg:text-2xl xl:text-3xl font-medium ${mounted && resolvedTheme === 'dark'
                                ? 'text-red-400'
                                : 'text-red-600'
                                }`}>
                                Campus Hiring Challenges
                            </span>
                        </h2>
                    </div>

                    {/* Paragraph */}
                    <div className="space-y-4">
                        <p className={`text-lg sm:text-xl leading-relaxed max-w-2xl ${mounted && resolvedTheme === 'dark'
                            ? 'text-gray-300'
                            : 'text-gray-600'
                            }`}>
                            Traditional campus hiring processes are <strong className={`${mounted && resolvedTheme === 'dark'
                                ? 'text-gray-200'
                                : 'text-gray-700'
                                }`}>time-consuming</strong>, <strong className={`${mounted && resolvedTheme === 'dark'
                                    ? 'text-gray-200'
                                    : 'text-gray-700'
                                    }`}>inefficient</strong>, and often result in <strong className={`${mounted && resolvedTheme === 'dark'
                                        ? 'text-gray-200'
                                        : 'text-gray-700'
                                        }`}>poor matches</strong> between students and companies.
                        </p>
                        <p className={`text-lg sm:text-xl leading-relaxed max-w-2xl ${mounted && resolvedTheme === 'dark'
                            ? 'text-gray-300'
                            : 'text-gray-600'
                            }`}>
                            Colleges struggle with <strong className={`${mounted && resolvedTheme === 'dark'
                                ? 'text-gray-200'
                                : 'text-gray-700'
                                }`}>manual coordination</strong>, <strong className={`${mounted && resolvedTheme === 'dark'
                                    ? 'text-gray-200'
                                    : 'text-gray-700'
                                    }`}>lack of data insights</strong>, and <strong className={`${mounted && resolvedTheme === 'dark'
                                        ? 'text-gray-200'
                                        : 'text-gray-700'
                                        }`}>limited reach</strong> to quality employers.
                        </p>
                    </div>
                </div>

                {/* Right Content - GIF Placeholder */}
                <div className="relative">
                    <div className={`relative w-full h-[500px] lg:h-[600px] rounded-3xl border overflow-hidden shadow-2xl ${mounted && resolvedTheme === 'dark'
                        ? 'bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900 border-gray-600'
                        : 'bg-gradient-to-br from-gray-50 via-white to-gray-100 border-gray-200'
                        }`}>
                        {/* Animated background pattern */}
                        <div className="absolute inset-0 opacity-5">
                            <div className="w-full h-full" style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='${mounted && resolvedTheme === 'dark' ? '%23ffffff' : '%23000000'
                                    }' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                                backgroundRepeat: 'repeat'
                            }}></div>
                        </div>

                        {/* Placeholder content */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center space-y-6">
                                <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center ${mounted && resolvedTheme === 'dark'
                                    ? 'bg-gradient-to-br from-red-600 to-orange-600'
                                    : 'bg-gradient-to-br from-red-500 to-orange-500'
                                    }`}>
                                    <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                                    </svg>
                                </div>
                                <div className="space-y-2">
                                    <p className={`font-semibold text-lg ${mounted && resolvedTheme === 'dark'
                                        ? 'text-gray-200'
                                        : 'text-gray-700'
                                        }`}>Problem Visualization</p>
                                    <p className={`text-sm max-w-xs mx-auto ${mounted && resolvedTheme === 'dark'
                                        ? 'text-gray-400'
                                        : 'text-gray-500'
                                        }`}>Interactive GIF or video showcasing campus hiring challenges will be displayed here</p>
                                </div>
                            </div>
                        </div>

                        {/* Enhanced decorative elements with animations */}
                        <div className={`absolute top-12 right-12 w-16 h-16 rounded-full animate-pulse ${mounted && resolvedTheme === 'dark'
                            ? 'bg-gradient-to-r from-red-500/30 to-orange-500/30'
                            : 'bg-gradient-to-r from-red-400/20 to-orange-400/20'
                            }`}></div>
                        <div className={`absolute bottom-12 left-12 w-12 h-12 rounded-full animate-pulse delay-1000 ${mounted && resolvedTheme === 'dark'
                            ? 'bg-gradient-to-r from-yellow-500/30 to-red-500/30'
                            : 'bg-gradient-to-r from-yellow-400/20 to-red-400/20'
                            }`}></div>
                        <div className={`absolute top-1/3 right-8 w-8 h-8 rounded-full animate-pulse delay-500 ${mounted && resolvedTheme === 'dark'
                            ? 'bg-gradient-to-r from-orange-500/30 to-red-500/30'
                            : 'bg-gradient-to-r from-orange-400/20 to-red-400/20'
                            }`}></div>
                        <div className={`absolute bottom-1/3 left-8 w-10 h-10 rounded-full animate-pulse delay-700 ${mounted && resolvedTheme === 'dark'
                            ? 'bg-gradient-to-r from-red-500/30 to-pink-500/30'
                            : 'bg-gradient-to-r from-red-400/20 to-pink-400/20'
                            }`}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProblemStatement;
