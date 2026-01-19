"use client";

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const HeroBanner: React.FC = () => {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme } = useTheme();

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

                {/* Right Content - Hero Video */}
                <div className="relative">
                    <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] overflow-hidden rounded-2xl">
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="auto"
                            controls={false}
                            disablePictureInPicture
                            disableRemotePlayback
                            className="w-full h-full object-cover block outline-none border-0 pointer-events-none"
                        >
                            <source
                                src="https://hirekarma.s3.us-east-1.amazonaws.com/hirekarma_ui/home_ui/hero.mp4"
                                type="video/mp4"
                            />
                        </video>
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="auto"
                            controls={false}
                            disablePictureInPicture
                            disableRemotePlayback
                            className="w-full h-full object-cover block outline-none border-0 pointer-events-none"
                        >
                            <source
                                src="https://hirekarma.s3.us-east-1.amazonaws.com/hirekarma_ui/home_ui/hero.mp4"
                                type="video/mp4"
                            />
                        </video>

                    </div>
                </div>


            </div>
        </div>
    );
};

export default HeroBanner;