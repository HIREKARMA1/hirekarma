"use client";

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Target } from 'lucide-react';

const ChallengeSection: React.FC = () => {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="relative content-container py-20">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                {/* Right Content - Animated Placeholder (appears first on mobile) */}
                <div className="relative lg:order-2 order-1">
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
                                    <Target className="w-10 h-10 text-white" />
                                </div>
                                <div className="space-y-2">
                                    <p className={`font-semibold text-lg ${mounted && resolvedTheme === 'dark'
                                        ? 'text-gray-200'
                                        : 'text-gray-700'
                                        }`}>Challenge Visualization</p>
                                    <p className={`text-sm max-w-xs mx-auto ${mounted && resolvedTheme === 'dark'
                                        ? 'text-gray-400'
                                        : 'text-gray-500'
                                        }`}>GIF showcasing the challenges in campus recruitment</p>
                                </div>
                            </div>
                        </div>

                        {/* Decorative elements */}
                        <div className={`absolute top-12 right-12 w-16 h-16 rounded-full animate-pulse ${mounted && resolvedTheme === 'dark'
                            ? 'bg-gradient-to-r from-red-500/30 to-orange-500/30'
                            : 'bg-gradient-to-r from-red-400/20 to-orange-400/20'
                            }`}></div>
                        <div className={`absolute bottom-12 left-12 w-12 h-12 rounded-full animate-pulse delay-1000 ${mounted && resolvedTheme === 'dark'
                            ? 'bg-gradient-to-r from-orange-500/30 to-yellow-500/30'
                            : 'bg-gradient-to-r from-orange-400/20 to-yellow-400/20'
                            }`}></div>
                    </div>
                </div>

                {/* Left Content */}
                <div className="space-y-8 lg:space-y-10 lg:order-1 order-2">
                    <div className="space-y-6">
                        <h2 className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight ${mounted && resolvedTheme === 'dark'
                            ? 'text-gray-100'
                            : 'text-gray-900'
                            }`}>
                            The Challenge We Saw
                            <span className={`block mt-2 text-lg sm:text-xl lg:text-2xl xl:text-3xl font-medium ${mounted && resolvedTheme === 'dark'
                                ? 'text-red-400'
                                : 'text-red-600'
                                }`}>
                                Campus Hiring Roadblocks
                            </span>
                        </h2>
                    </div>

                    <div className="space-y-4">
                        <p className={`text-lg sm:text-xl leading-relaxed max-w-2xl ${mounted && resolvedTheme === 'dark'
                            ? 'text-gray-300'
                            : 'text-gray-600'
                            }`}>
                            Recognizing that many <strong className={`${mounted && resolvedTheme === 'dark'
                                ? 'text-gray-200'
                                : 'text-gray-700'
                                }`}>talented graduates face roadblocks</strong> to meaningful employment, we identified the <strong className={`${mounted && resolvedTheme === 'dark'
                                    ? 'text-gray-200'
                                    : 'text-gray-700'
                                    }`}>critical gap</strong> between what students learn in college and what industries actually need.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChallengeSection;

