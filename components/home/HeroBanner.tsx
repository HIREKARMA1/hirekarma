"use client";

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';

const HeroBanner: React.FC = () => {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme } = useTheme();
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="relative content-container pt-20 sm:pt-16 md:pt-20 pb-12 sm:pb-16 md:pb-20">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-[85vh]">

                {/* Left Content - Clean and Modern */}
                <div className="space-y-6 sm:space-y-8 lg:space-y-10 px-[5px] sm:px-0">
                    {/* Main Heading */}
                    <div className="space-y-4 sm:space-y-6">
                        <h1 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-bold leading-tight tracking-tight transition-colors duration-500 ${mounted && resolvedTheme === 'dark'
                            ? 'text-gray-100'
                            : 'text-gray-900'
                            }`}>
                            Transforming Talent Ecosystems
                            <span className={`block mt-1 sm:mt-2 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium transition-colors duration-500 ${mounted && resolvedTheme === 'dark'
                                ? 'text-cyan-400'
                                : 'text-cyan-600'
                                }`}>
                                with AI, Automation, and Analytics
                            </span>
                        </h1>
                    </div>

                    {/* Paragraph */}
                    <div className="space-y-3 sm:space-y-4">
                        <p className={`text-justify sm:text-left text-base sm:text-lg md:text-xl leading-relaxed max-w-full sm:max-w-xl md:max-w-2xl transition-colors duration-500 ${mounted && resolvedTheme === 'dark'
                            ? 'text-gray-300'
                            : 'text-gray-600'
                            }`}>
                            HireKarma bridges the gap between education and industry through smart technology and data-driven insights. From career readiness for students to hiring automation for companies and analytics for institutions, HireKarma connects all stakeholders in one intelligent ecosystem. Join the growing network of organizations, universities, and learners shaping the future of talent with HireKarma.
                        </p>
                    </div>
                </div>

                {/* Right Content - Hero Image */}
                <div className="relative px-0 sm:px-5 md:px-5">
                    <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] overflow-hidden rounded-2xl">
                        <Image
                            src="https://hirekarma.s3.us-east-1.amazonaws.com/hirekarma_ui/home_ui/Hero.gif"
                            alt="Hero animation - HireKarma platform showcase"
                            fill
                            priority
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

export default HeroBanner;


