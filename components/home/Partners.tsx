"use client";

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import corporateData from '../../data/corporate.json';
import companyData from '../../data/company.json';
import SectionHeader from '../shared/SectionHeader';

const Partners: React.FC = () => {
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
                    title="Our Partners"
                    description="Trusted by leading companies and educational institutions across India who rely on HireKarma for their campus placement needs."
                    alignment="left"
                />
            </div>

            {/* Partners Logos - Two Rows */}
            <div className="relative overflow-hidden space-y-10 sm:space-y-12 md:space-y-14">
                {/* University Partners Row */}
                <div className="space-y-3 sm:space-y-4">
                    <h3 className={`text-base sm:text-lg font-semibold transition-colors duration-500 ${mounted && resolvedTheme === 'dark'
                            ? 'text-gray-200'
                            : 'text-gray-700'
                        }`}>
                        University Partners
                    </h3>
                    <div className="relative overflow-hidden">
                        <div className="flex animate-partners-scroll-left space-x-3 sm:space-x-4">
                            {corporateData.corpo.map((company, index) => (
                                <div
                                    key={`company-${index}`}
                                    className="flex-shrink-0"
                                >
                                    <div className={`w-48 h-24 sm:w-56 sm:h-28 md:w-60 md:h-28 rounded-lg border-2 flex items-center justify-center transition-all duration-500 hover:scale-105 ${mounted && resolvedTheme === 'dark'
                                            ? 'bg-gradient-to-br from-blue-900/20 to-blue-800/10 border-blue-700/30'
                                            : 'bg-gradient-to-br from-blue-50 to-blue-100/50 border-blue-200'
                                        }`}>
                                        <div className="flex flex-col items-center justify-center space-y-2 p-2">
                                            <img
                                                src={company.logo}
                                                alt={company.name}
                                                className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 object-contain"
                                                onError={(e) => {
                                                    const target = e.currentTarget as HTMLImageElement;
                                                    target.style.display = 'none';
                                                    const fallback = target.nextElementSibling as HTMLSpanElement;
                                                    if (fallback) fallback.style.display = 'block';
                                                }}
                                            />
                                            <span
                                                className={`font-semibold text-xs text-center px-2 hidden transition-colors duration-500 ${mounted && resolvedTheme === 'dark'
                                                        ? 'text-blue-300'
                                                        : 'text-blue-700'
                                                    }`}
                                            >
                                                {company.name}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Corporate Partners Row */}
                <div className="space-y-3 sm:space-y-4">
                    <h3 className={`text-base sm:text-lg font-semibold transition-colors duration-500 ${mounted && resolvedTheme === 'dark'
                            ? 'text-gray-200'
                            : 'text-gray-700'
                        }`}>
                        Corporate Partners
                    </h3>
                    <div className="relative overflow-hidden">
                        <div className="flex animate-partners-scroll-right space-x-3 sm:space-x-4">
                            {companyData.conpanies.map((corporate, index) => (
                                <div
                                    key={`corporate-${index}`}
                                    className="flex-shrink-0"
                                >
                                    <div className={`w-48 h-24 sm:w-56 sm:h-28 md:w-60 md:h-28 rounded-lg border-2 flex items-center justify-center transition-all duration-500 hover:scale-105 ${mounted && resolvedTheme === 'dark'
                                            ? 'bg-gradient-to-br from-purple-900/20 to-purple-800/10 border-purple-700/30'
                                            : 'bg-gradient-to-br from-purple-50 to-purple-100/50 border-purple-200'
                                        }`}>
                                        <div className="flex flex-col items-center justify-center space-y-2 p-2">
                                            <img
                                                src={corporate.logo}
                                                alt={corporate.name}
                                                className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 object-contain"
                                                onError={(e) => {
                                                    const target = e.currentTarget as HTMLImageElement;
                                                    target.style.display = 'none';
                                                    const fallback = target.nextElementSibling as HTMLSpanElement;
                                                    if (fallback) fallback.style.display = 'block';
                                                }}
                                            />
                                            <span
                                                className={`font-semibold text-xs text-center px-2 hidden transition-colors duration-500 ${mounted && resolvedTheme === 'dark'
                                                        ? 'text-purple-300'
                                                        : 'text-purple-700'
                                                    }`}
                                            >
                                                {corporate.name}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* CSS Animations (add this to globals.css if not already present) */}
            <style jsx>{`
        @keyframes partners-scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 2));
          }
        }

        @keyframes partners-scroll-right {
          0% {
            transform: translateX(calc(-100% / 2));
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .animate-partners-scroll-left {
          animation: partners-scroll-left 40s linear infinite;
        }

        .animate-partners-scroll-right {
          animation: partners-scroll-right 40s linear infinite;
        }
        
        .animate-partners-scroll-left:hover,
        .animate-partners-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>
        </div>
    );
};

export default Partners;

