"use client";

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { TrendingUp } from 'lucide-react';

const SolutionSection: React.FC = () => {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="relative content-container py-20">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                {/* Left Content */}
                <div className="space-y-8 lg:space-y-10">
                    <div className="space-y-6">
                        <h2 className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight ${mounted && resolvedTheme === 'dark'
                            ? 'text-gray-100'
                            : 'text-gray-900'
                            }`}>
                            Our Transformative Solution
                            <span className={`block mt-2 text-lg sm:text-xl lg:text-2xl xl:text-3xl font-medium ${mounted && resolvedTheme === 'dark'
                                ? 'text-emerald-400'
                                : 'text-emerald-600'
                                }`}>
                                AI-Powered Innovation
                            </span>
                        </h2>
                    </div>

                    <div className="space-y-4">
                        <p className={`text-lg sm:text-xl leading-relaxed max-w-2xl ${mounted && resolvedTheme === 'dark'
                            ? 'text-gray-300'
                            : 'text-gray-600'
                            }`}>
                            The founders set out to <strong className={`${mounted && resolvedTheme === 'dark'
                                ? 'text-gray-200'
                                : 'text-gray-700'
                                }`}>transform campus recruitment</strong> through AI automation, <strong className={`${mounted && resolvedTheme === 'dark'
                                    ? 'text-gray-200'
                                    : 'text-gray-700'
                                    }`}>predictive analytics</strong>, and community-driven engagement. Our platform streamlines the entire hiring journey.
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
                                backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='${mounted && resolvedTheme === 'dark' ? '%23ffffff' : '%23000000'
                                    }' fill-opacity='0.1'%3E%3Cpath d='M40 40c0-22.091-17.909-40-40-40s-40 17.909-40 40 17.909 40 40 40 40-17.909 40-40zM0 40c0-22.091 17.909-40 40-40s40 17.909 40 40-17.909 40-40 40S0 62.091 0 40z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                                backgroundRepeat: 'repeat'
                            }}></div>
                        </div>

                        {/* Placeholder content */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center space-y-6">
                                <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center ${mounted && resolvedTheme === 'dark'
                                    ? 'bg-gradient-to-br from-emerald-600 to-teal-600'
                                    : 'bg-gradient-to-br from-emerald-500 to-teal-500'
                                    }`}>
                                    <TrendingUp className="w-10 h-10 text-white" />
                                </div>
                                <div className="space-y-2">
                                    <p className={`font-semibold text-lg ${mounted && resolvedTheme === 'dark'
                                        ? 'text-gray-200'
                                        : 'text-gray-700'
                                        }`}>Solution Visualization</p>
                                    <p className={`text-sm max-w-xs mx-auto ${mounted && resolvedTheme === 'dark'
                                        ? 'text-gray-400'
                                        : 'text-gray-500'
                                        }`}>GIF showcasing our AI-powered platform and features</p>
                                </div>
                            </div>
                        </div>

                        {/* Decorative elements */}
                        <div className={`absolute top-12 right-12 w-16 h-16 rounded-full animate-pulse ${mounted && resolvedTheme === 'dark'
                            ? 'bg-gradient-to-r from-emerald-500/30 to-teal-500/30'
                            : 'bg-gradient-to-r from-emerald-400/20 to-teal-400/20'
                            }`}></div>
                        <div className={`absolute bottom-12 left-12 w-12 h-12 rounded-full animate-pulse delay-1000 ${mounted && resolvedTheme === 'dark'
                            ? 'bg-gradient-to-r from-green-500/30 to-emerald-500/30'
                            : 'bg-gradient-to-r from-green-400/20 to-emerald-400/20'
                            }`}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SolutionSection;

