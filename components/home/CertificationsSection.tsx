"use client";

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import SectionHeader from '../shared/SectionHeader';

// Certifications Data
const certificationsData = [
    {
        name: "DPIIT Recognized",
        logo: "/DPIIT.png",
        description: "Department for Promotion of Industry and Internal Trade",
        category: "Government",
        colors: { dark: 'blue', light: 'blue' }
    },
    {
        name: "ISO Certified",
        logo: "/iso.png",
        description: "International Organization for Standardization",
        category: "Quality",
        colors: { dark: 'green', light: 'green' }
    },
    {
        name: "MSME Registered",
        logo: "/MSME.png",
        description: "Ministry of Micro, Small and Medium Enterprises",
        category: "Registration",
        colors: { dark: 'purple', light: 'purple' }
    },
    {
        name: "Startup Odisha",
        logo: "/StartupOdisha.png",
        description: "Startup Odisha Initiative",
        category: "Startup",
        colors: { dark: 'orange', light: 'orange' }
    },
    {
        name: "NASSCOM",
        logo: "/nasscome.png",
        description: "National Association of Software and Service Companies",
        category: "Technology",
        colors: { dark: 'red', light: 'red' }
    }
];

const getColorClasses = (color: string, isDark: boolean) => {
    const colorMap: { [key: string]: { bg: string, border: string, badge: string, badgeText: string } } = {
        blue: {
            bg: isDark ? 'bg-blue-900/20' : 'bg-blue-50/50',
            border: isDark ? 'border-blue-700/40' : 'border-blue-200/60',
            badge: isDark ? 'bg-blue-600/70 text-white' : 'bg-blue-100/80 text-blue-800',
            badgeText: isDark ? 'text-blue-400' : 'text-blue-600'
        },
        green: {
            bg: isDark ? 'bg-green-900/20' : 'bg-green-50/50',
            border: isDark ? 'border-green-700/40' : 'border-green-200/60',
            badge: isDark ? 'bg-green-600/70 text-white' : 'bg-green-100/80 text-green-800',
            badgeText: isDark ? 'text-green-400' : 'text-green-600'
        },
        purple: {
            bg: isDark ? 'bg-purple-900/20' : 'bg-purple-50/50',
            border: isDark ? 'border-purple-700/40' : 'border-purple-200/60',
            badge: isDark ? 'bg-purple-600/70 text-white' : 'bg-purple-100/80 text-purple-800',
            badgeText: isDark ? 'text-purple-400' : 'text-purple-600'
        },
        orange: {
            bg: isDark ? 'bg-orange-900/20' : 'bg-orange-50/50',
            border: isDark ? 'border-orange-700/40' : 'border-orange-200/60',
            badge: isDark ? 'bg-orange-600/70 text-white' : 'bg-orange-100/80 text-orange-800',
            badgeText: isDark ? 'text-orange-400' : 'text-orange-600'
        },
        red: {
            bg: isDark ? 'bg-red-900/20' : 'bg-red-50/50',
            border: isDark ? 'border-red-700/40' : 'border-red-200/60',
            badge: isDark ? 'bg-red-600 text-white' : 'bg-red-100 text-red-800/50',
            badgeText: isDark ? 'text-red-400' : 'text-red-600'
        }
    };
    return colorMap[color] || colorMap.blue;
};

const CertificationsSection: React.FC = () => {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="relative content-container py-12 sm:py-16 md:py-20">
            {/* Section Header */}
            <div className="mb-12 sm:mb-16">
                <SectionHeader
                    title="Recognised & Certified By"
                    description="Our platform meets the highest industry standards and is recognized by leading certification bodies and technology partners worldwide."
                    alignment="left"
                />
            </div>

            {/* Certifications Grid */}
            <div className="w-full space-y-6 sm:space-y-8">
                {/* First 4 certifications in 2x2 grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                    {certificationsData.slice(0, 4).map((cert, index) => {
                        const colors = getColorClasses(cert.colors.dark, mounted && resolvedTheme === 'dark');

                        return (
                            <div
                                key={index}
                                className={`group relative p-4 sm:p-5 md:p-6 rounded-xl border-2 transition-all duration-500 hover:brightness-110 h-auto min-h-[120px] sm:min-h-[130px] md:min-h-[140px] ${colors.bg} ${colors.border}`}
                            >
                                {/* Category Badge */}
                                <div className={`absolute -top-2 sm:-top-2.5 left-3 px-3 py-1 rounded-full text-xs font-semibold ${colors.badge}`}>
                                    {cert.category}
                                </div>

                                {/* Card Content */}
                                <div className="flex items-center gap-3 sm:gap-4 mt-2">
                                    {/* Logo */}
                                    <div className="flex-shrink-0">
                                        <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-lg overflow-hidden">
                                            <img
                                                src={cert.logo}
                                                alt={cert.name}
                                                className="w-full h-full object-cover"
                                                onError={(e) => {
                                                    const target = e.currentTarget as HTMLImageElement;
                                                    target.style.display = 'none';
                                                    const fallback = target.nextElementSibling as HTMLDivElement;
                                                    if (fallback) fallback.style.display = 'flex';
                                                }}
                                            />
                                            <div
                                                className="w-full h-full flex items-center justify-center text-xl font-bold hidden"
                                                style={{
                                                    background: mounted && resolvedTheme === 'dark' ? '#10b981' : '#059669',
                                                    color: 'white'
                                                }}
                                            >
                                                {cert.name.charAt(0)}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 min-w-0">
                                        <h3 className={`text-sm sm:text-base font-bold mb-1 text-left transition-colors duration-500 ${mounted && resolvedTheme === 'dark'
                                            ? 'text-gray-100'
                                            : 'text-gray-900'
                                            }`}>
                                            {cert.name}
                                        </h3>
                                        <p className={`text-xs sm:text-sm leading-tight text-left transition-colors duration-500 ${mounted && resolvedTheme === 'dark'
                                            ? 'text-gray-400'
                                            : 'text-gray-600'
                                            }`}>
                                            {cert.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Hover Effect Overlay */}
                                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-emerald-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                        );
                    })}
                </div>

                {/* NASSCOM - Centered */}
                <div className="flex justify-center">
                    <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/5">
                        {certificationsData.slice(4, 5).map((cert, index) => {
                            const colors = getColorClasses(cert.colors.dark, mounted && resolvedTheme === 'dark');

                            return (
                                <div
                                    key={index + 4}
                                    className={`group relative p-4 sm:p-5 md:p-6 rounded-xl border-2 transition-all duration-500 hover:brightness-110 h-auto min-h-[120px] sm:min-h-[130px] md:min-h-[140px] ${colors.bg} ${colors.border}`}
                                >
                                    {/* Category Badge */}
                                    <div className={`absolute -top-2 sm:-top-2.5 left-3 px-3 py-1 rounded-full text-xs font-semibold ${colors.badge}`}>
                                        {cert.category}
                                    </div>

                                    {/* Card Content */}
                                    <div className="flex items-center gap-3 sm:gap-4 mt-2">
                                        {/* Logo */}
                                        <div className="flex-shrink-0">
                                            <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-lg overflow-hidden">
                                                <img
                                                    src={cert.logo}
                                                    alt={cert.name}
                                                    className="w-full h-full object-cover"
                                                    onError={(e) => {
                                                        const target = e.currentTarget as HTMLImageElement;
                                                        target.style.display = 'none';
                                                        const fallback = target.nextElementSibling as HTMLDivElement;
                                                        if (fallback) fallback.style.display = 'flex';
                                                    }}
                                                />
                                                <div
                                                    className="w-full h-full flex items-center justify-center text-xl font-bold hidden"
                                                    style={{
                                                        background: mounted && resolvedTheme === 'dark' ? '#10b981' : '#059669',
                                                        color: 'white'
                                                    }}
                                                >
                                                    {cert.name.charAt(0)}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 min-w-0">
                                            <h3 className={`text-sm sm:text-base font-bold mb-1 text-left transition-colors duration-500 ${mounted && resolvedTheme === 'dark'
                                                ? 'text-gray-100'
                                                : 'text-gray-900'
                                                }`}>
                                                {cert.name}
                                            </h3>
                                            <p className={`text-xs sm:text-sm leading-tight text-left transition-colors duration-500 ${mounted && resolvedTheme === 'dark'
                                                ? 'text-gray-400'
                                                : 'text-gray-600'
                                                }`}>
                                                {cert.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Hover Effect Overlay */}
                                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-emerald-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CertificationsSection;

