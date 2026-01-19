"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

const ChallengeSection: React.FC = () => {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme } = useTheme();
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="relative content-container py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                {/* LEFT CONTENT */}
                <div className="space-y-8 lg:space-y-10 text-center lg:text-left order-1 lg:order-1">
                    <div className="space-y-6">
                        <h2
                            className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight ${mounted && resolvedTheme === "dark"
                                    ? "text-gray-100"
                                    : "text-gray-900"
                                }`}
                        >
                            The Challenge We Saw
                            <span
                                className={`block mt-2 text-lg sm:text-xl lg:text-2xl xl:text-3xl font-medium ${mounted && resolvedTheme === "dark"
                                        ? "text-red-400"
                                        : "text-red-600"
                                    }`}
                            >
                                Campus Hiring Roadblocks
                            </span>
                        </h2>
                    </div>

                    <div className="space-y-4">
                        <p
                            className={`text-base sm:text-lg leading-relaxed ${mounted && resolvedTheme === "dark"
                                    ? "text-gray-300"
                                    : "text-gray-600"
                                }`}
                        >
                            Recognizing that many{" "}
                            <strong
                                className={`${mounted && resolvedTheme === "dark"
                                        ? "text-gray-200"
                                        : "text-gray-700"
                                    }`}
                            >
                                talented graduates face roadblocks
                            </strong>{" "}
                            to meaningful employment, we identified the{" "}
                            <strong
                                className={`${mounted && resolvedTheme === "dark"
                                        ? "text-gray-200"
                                        : "text-gray-700"
                                    }`}
                            >
                                critical gap
                            </strong>{" "}
                            between what students learn in college and what industries actually
                            need.
                        </p>
                    </div>
                </div>

                {/* RIGHT CONTENT - HERO GIF */}
                <div className="relative order-2 lg:order-2 flex justify-center lg:justify-end mt-6 lg:mt-0">
                    <div className="relative w-full sm:w-[90%] md:w-[80%] lg:w-[100%] xl:w-[100%] h-[250px] sm:h-[200px] md:h-[300px] lg:h-[400px] xl:h-[500px] overflow-hidden rounded-2xl">
                        <Image
                            src="https://hirekarma.s3.us-east-1.amazonaws.com/hirekarma_ui/about-us/challenges_we_saw.gif"
                            alt="Campus hiring roadblocks challenges visualization"
                            fill
                            priority
                            quality={85}
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 50vw"
                            className={`object-cover object-left transition-opacity duration-300 ${
                                imageLoaded ? "opacity-100" : "opacity-0"
                            }`}
                            onLoad={() => setImageLoaded(true)}
                        />

                        {/* Loading skeleton */}
                        {!imageLoaded && (
                            <div
                                className={`absolute inset-0 rounded-2xl animate-pulse ${
                                    mounted && resolvedTheme === "dark"
                                        ? "bg-gray-800"
                                        : "bg-gray-200"
                                }`}
                            />
                        )}

                        {/* FALLBACK */}
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
    );
};

export default ChallengeSection;
