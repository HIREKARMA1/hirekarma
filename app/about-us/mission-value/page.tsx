"use client";

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Target, Eye, Star } from 'lucide-react';

const MissionValuePage: React.FC = () => {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme } = useTheme();
    useEffect(() => setMounted(true), []);

    return (
        <div className={`min-h-screen flex flex-col transition-all duration-500`}>
            <main className="flex-grow">
                {/* Main Section with consistent background */}
                <section className={`relative min-h-screen transition-all duration-500`}>

                    {/* Mission Section - Text Left, Visual Right */}
                    <div className="relative content-container py-36">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            {/* Left Content */}
                            <div className="space-y-8 lg:space-y-10">
                                <div className="space-y-6">
                                    <h2 className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight ${mounted && resolvedTheme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>
                                        OUR MISSION
                                        <span className={`block mt-2 text-lg sm:text-xl lg:text-2xl xl:text-3xl font-medium ${mounted && resolvedTheme === 'dark' ? 'text-cyan-300' : 'text-cyan-700'}`}>
                                            Precision in Purpose, Excellence in Execution
                                        </span>
                                    </h2>
                                </div>

                                <div className="space-y-4">
                                    <p className={`text-lg sm:text-xl leading-relaxed max-w-2xl ${mounted && resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                                        Our mission is to bridge the gap between <b>academia and industry</b> by empowering students, universities, and employers with
                                        practical skill development, <b>data-driven insights</b>, and automation-first recruitment workflows. We aim to
                                        create equitable access to opportunities and measurable hiring outcomes for all stakeholders.
                                    </p>
                                </div>

                            </div>


                            {/* Right: Visual */}
                            {/* Right Content - Hero GIF */}
                            <div className="order-1 lg:order-2 flex justify-center">
                                <div className="relative w-full sm:w-[90%] md:w-[80%] lg:w-[95%] xl:w-[100%] h-[250px] sm:h-[320px] md:h-[420px] lg:h-[520px]">
                                    <img
                                        src="/Mission-removebg-preview.png"
                                        alt="Journey animation"
                                        className="w-full h-full object-cover "
                                    />

                                    {/* Fallback */}
                                    <div
                                        className={`absolute inset-0 flex items-center justify-center rounded-2xl hidden ${mounted && resolvedTheme === "dark"
                                                ? "bg-gray-900/50 backdrop-blur-sm"
                                                : "bg-white/50 backdrop-blur-sm"
                                            }`}
                                    >
                                        <div className="text-center space-y-4">
                                            <div
                                                className={`w-12 sm:w-16 h-12 sm:h-16 mx-auto rounded-full flex items-center justify-center ${mounted && resolvedTheme === "dark"
                                                        ? "bg-gray-700/80"
                                                        : "bg-gray-200/80"
                                                    }`}
                                            >
                                                <svg
                                                    className={`w-6 sm:w-8 h-6 sm:h-8 ${mounted && resolvedTheme === "dark"
                                                            ? "text-gray-300"
                                                            : "text-gray-500"
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
                                                className={`font-medium text-sm sm:text-base ${mounted && resolvedTheme === "dark"
                                                        ? "text-gray-200"
                                                        : "text-gray-600"
                                                    }`}
                                            >
                                                Animation not supported
                                            </p>
                                            <p
                                                className={`text-xs sm:text-sm ${mounted && resolvedTheme === "dark"
                                                        ? "text-gray-300"
                                                        : "text-gray-500"
                                                    }`}
                                            >
                                                Your browser doesn&apos;t support image playback
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Vision Section - Text Left, Visual Right */}
                    <div className="relative content-container py-16">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            {/* Left: Text */}
                            <div className="space-y-6 max-w-2xl">
                                <h2 className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight ${mounted && resolvedTheme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>
                                    OUR VISION
                                </h2>
                                <h3 className={`text-xl sm:text-2xl text-purple-700 font-semibold mt-4 mb-2 ${mounted && resolvedTheme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
                                    Illuminating Pathways to Success
                                </h3>
                                <p className={`text-lg sm:text-xl leading-relaxed ${mounted && resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                                    Our clear vision illuminates a future where every student&apos;s potential is seen and realized. We look beyond barriers of background or location, foreseeing a world where technology-driven insights, mentorship clarity, and data-powered learning light the path from education to meaningful employment.
                                </p>
                            </div>

                            {/* Right Content - Hero GIF */}
                            <div className="order-1 lg:order-2 flex justify-center">
                                <div className="relative w-full sm:w-[90%] md:w-[80%] lg:w-[95%] xl:w-[100%] h-[250px] sm:h-[320px] md:h-[420px] lg:h-[520px]">
                                    <img
                                        src="/vision-removebg-preview.png"
                                        alt="Journey animation"
                                        className="w-full h-full object-cover "
                                    />

                                    {/* Fallback */}
                                    <div
                                        className={`absolute inset-0 flex items-center justify-center rounded-2xl hidden ${mounted && resolvedTheme === "dark"
                                                ? "bg-gray-900/50 backdrop-blur-sm"
                                                : "bg-white/50 backdrop-blur-sm"
                                            }`}
                                    >
                                        <div className="text-center space-y-4">
                                            <div
                                                className={`w-12 sm:w-16 h-12 sm:h-16 mx-auto rounded-full flex items-center justify-center ${mounted && resolvedTheme === "dark"
                                                        ? "bg-gray-700/80"
                                                        : "bg-gray-200/80"
                                                    }`}
                                            >
                                                <svg
                                                    className={`w-6 sm:w-8 h-6 sm:h-8 ${mounted && resolvedTheme === "dark"
                                                            ? "text-gray-300"
                                                            : "text-gray-500"
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
                                                className={`font-medium text-sm sm:text-base ${mounted && resolvedTheme === "dark"
                                                        ? "text-gray-200"
                                                        : "text-gray-600"
                                                    }`}
                                            >
                                                Animation not supported
                                            </p>
                                            <p
                                                className={`text-xs sm:text-sm ${mounted && resolvedTheme === "dark"
                                                        ? "text-gray-300"
                                                        : "text-gray-500"
                                                    }`}
                                            >
                                                Your browser doesn&apos;t support image playback
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Values Section - Text Left, Visual Right */}
                    <div className="relative content-container py-24 pb-36">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            {/* Left: Text */}
                            <div className="space-y-6 max-w-2xl">
                                <h2 className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight ${mounted && resolvedTheme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>
                                    OUR VALUES
                                </h2>
                                <h3 className={`text-xl sm:text-2xl  font-semibold mt-4 mb-2 ${mounted && resolvedTheme === 'dark' ? 'text-emerald-400' : 'text-emerald-600'}`}>
                                    Guiding Stars of Our Journey
                                </h3>
                                <p className={`text-lg sm:text-xl leading-relaxed ${mounted && resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                                    Like guiding stars, our core values of inclusivity, transparency, and innovation light the way forward. We create a stellar community where excellence shines through continuous learning, and the brilliance of shared growth illuminates new opportunities for both students and partners.
                                </p>
                            </div>

                            {/* Right Content - Hero GIF */}
                            <div className="order-1 lg:order-2 flex justify-center">
                                <div className="relative w-full sm:w-[90%] md:w-[80%] lg:w-[95%] xl:w-[100%] h-[250px] sm:h-[320px] md:h-[420px] lg:h-[520px]">
                                    <img
                                        src="/Values-removebg-preview.png"
                                        alt="Journey animation"
                                        className="w-full h-full object-cover "
                                    />

                                    {/* Fallback */}
                                    <div
                                        className={`absolute inset-0 flex items-center justify-center rounded-2xl hidden ${mounted && resolvedTheme === "dark"
                                                ? "bg-gray-900/50 backdrop-blur-sm"
                                                : "bg-white/50 backdrop-blur-sm"
                                            }`}
                                    >
                                        <div className="text-center space-y-4">
                                            <div
                                                className={`w-12 sm:w-16 h-12 sm:h-16 mx-auto rounded-full flex items-center justify-center ${mounted && resolvedTheme === "dark"
                                                        ? "bg-gray-700/80"
                                                        : "bg-gray-200/80"
                                                    }`}
                                            >
                                                <svg
                                                    className={`w-6 sm:w-8 h-6 sm:h-8 ${mounted && resolvedTheme === "dark"
                                                            ? "text-gray-300"
                                                            : "text-gray-500"
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
                                                className={`font-medium text-sm sm:text-base ${mounted && resolvedTheme === "dark"
                                                        ? "text-gray-200"
                                                        : "text-gray-600"
                                                    }`}
                                            >
                                                Animation not supported
                                            </p>
                                            <p
                                                className={`text-xs sm:text-sm ${mounted && resolvedTheme === "dark"
                                                        ? "text-gray-300"
                                                        : "text-gray-500"
                                                    }`}
                                            >
                                                Your browser doesn&apos;t support image playback
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
        </div>
    );
};

export default MissionValuePage;
