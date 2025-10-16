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

                {/* Right Content - Problem Statement GIF */}
                <div className="relative">
                    {/* Problem Statement GIF */}
                    <div className="relative w-full h-[350px] lg:h-[450px]">
                        <img
                            src="https://hirekarma.s3.us-east-1.amazonaws.com/hirekarma_ui/home_ui/problemStatementSection.gif"
                            alt="Problem Statement animation"
                            className="w-full h-full object-cover rounded-2xl"
                        />
                        {/* Fallback content for browsers that don't support images (rare, but kept for structure) */}
                        <div className={`absolute inset-0 flex items-center justify-center rounded-2xl hidden ${mounted && resolvedTheme === 'dark'
                            ? 'bg-gray-900/50 backdrop-blur-sm'
                            : 'bg-white/50 backdrop-blur-sm'
                            }`}>
                            <div className="text-center space-y-4">
                                <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center ${mounted && resolvedTheme === 'dark'
                                    ? 'bg-gray-700/80'
                                    : 'bg-gray-200/80'
                                    }`}>
                                    <svg className={`w-8 h-8 ${mounted && resolvedTheme === 'dark'
                                        ? 'text-gray-300'
                                        : 'text-gray-500'
                                        }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <p className={`font-medium ${mounted && resolvedTheme === 'dark'
                                    ? 'text-gray-200'
                                    : 'text-gray-600'
                                    }`}>Animation not supported</p>
                                <p className={`text-sm ${mounted && resolvedTheme === 'dark'
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
