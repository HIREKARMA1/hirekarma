"use client";

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';

const SolutionSection: React.FC = () => {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="relative content-container py-20">
            <div className="max-w-7xl mx-auto">
                {/* Main 2-column grid for the section layout */}
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left Column: Header and Solutions */}
                    <div className="order-2 lg:order-1 space-y-10">
                        <div>
                            <h2
                                className={`text-3xl lg:text-4xl xl:text-5xl font-bold ${mounted && resolvedTheme === 'dark'
                                    ? 'text-gray-100'
                                    : 'text-gray-900'
                                    }`}
                            >
                                HireKarma Soluation
                            </h2>
                        </div>

                        {/* Solution List */}
                        <div className="space-y-6">
                            {/* Skill Training */}
                            <div className="flex items-start space-x-4">
                                <div
                                    className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl ${mounted && resolvedTheme === 'dark'
                                        ? 'bg-blue-500/20 text-blue-400'
                                        : 'bg-blue-100 text-blue-600'
                                        }`}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 14l9-5-9-5-9 5 9 5z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 14l6.16-3.422A12.083 12.083 0 0112 21.5 12.083 12.083 0 015.84 10.578L12 14z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3
                                        className={`text-xl font-semibold ${mounted && resolvedTheme === 'dark'
                                            ? 'text-gray-100'
                                            : 'text-gray-900'
                                            }`}
                                    >
                                        Real-World Skill Training
                                    </h3>
                                    <p
                                        className={`text-base ${mounted && resolvedTheme === 'dark'
                                            ? 'text-gray-400'
                                            : 'text-gray-600'
                                            }`}
                                    >
                                        Learn practical skills directly aligned with the latest industry demands through guided training and live projects.
                                    </p>
                                </div>
                            </div>

                            {/* Direct Industry Connect */}
                            <div className="flex items-start space-x-4">
                                <div
                                    className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl ${mounted && resolvedTheme === 'dark'
                                        ? 'bg-green-500/20 text-green-400'
                                        : 'bg-green-100 text-green-600'
                                        }`}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
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
                                <div>
                                    <h3
                                        className={`text-xl font-semibold ${mounted && resolvedTheme === 'dark'
                                            ? 'text-gray-100'
                                            : 'text-gray-900'
                                            }`}
                                    >
                                        Direct Industry Connect
                                    </h3>
                                    <p
                                        className={`text-base ${mounted && resolvedTheme === 'dark'
                                            ? 'text-gray-400'
                                            : 'text-gray-600'
                                            }`}
                                    >
                                        Gain exposure to hiring managers and top recruiters through our company partnerships and job placement drives.
                                    </p>
                                </div>
                            </div>

                            {/* Career Mentorship */}
                            <div className="flex items-start space-x-4">
                                <div
                                    className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl ${mounted && resolvedTheme === 'dark'
                                        ? 'bg-yellow-500/20 text-yellow-400'
                                        : 'bg-yellow-100 text-yellow-600'
                                        }`}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 8v4l3 3"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 4a8 8 0 100 16 8 8 0 000-16z"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3
                                        className={`text-xl font-semibold ${mounted && resolvedTheme === 'dark'
                                            ? 'text-gray-100'
                                            : 'text-gray-900'
                                            }`}
                                    >
                                        Personalized Career Mentorship
                                    </h3>
                                    <p
                                        className={`text-base ${mounted && resolvedTheme === 'dark'
                                            ? 'text-gray-400'
                                            : 'text-gray-600'
                                            }`}
                                    >
                                        Receive one-on-one mentorship from industry experts to guide your career path and build your professional confidence.
                                    </p>
                                </div>
                            </div>

                            {/* Interview Preparation */}
                            <div className="flex items-start space-x-4">
                                <div
                                    className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl ${mounted && resolvedTheme === 'dark'
                                        ? 'bg-red-500/20 text-red-400'
                                        : 'bg-red-100 text-red-600'
                                        }`}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                </div>
                                <div>
                                    <h3
                                        className={`text-xl font-semibold ${mounted && resolvedTheme === 'dark'
                                            ? 'text-gray-100'
                                            : 'text-gray-900'
                                            }`}
                                    >
                                        Interview & Resume Mastery
                                    </h3>
                                    <p
                                        className={`text-base ${mounted && resolvedTheme === 'dark'
                                            ? 'text-gray-400'
                                            : 'text-gray-600'
                                            }`}
                                    >
                                        Master resume building, personal branding, and mock interview preparation to stand out confidently before recruiters.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Image */}
                    <div className="order-1 lg:order-2 relative">
                        <div className="rounded-3xl overflow-hidden shadow-2xl">
                            <Image
                                src="/students.jpg"
                                alt="Students achieving success"
                                width={600}
                                height={500}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                        <div
                            className={`absolute -bottom-6 -left-6 w-32 h-32 rounded-full blur-3xl ${mounted && resolvedTheme === 'dark'
                                ? 'bg-blue-500/30'
                                : 'bg-blue-200/50'
                                }`}
                        ></div>
                        <div
                            className={`absolute -top-6 -right-6 w-40 h-40 rounded-full blur-3xl ${mounted && resolvedTheme === 'dark'
                                ? 'bg-cyan-500/30'
                                : 'bg-cyan-200/50'
                                }`}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SolutionSection;

