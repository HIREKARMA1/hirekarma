"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';
import corporateData from '../../data/corporate.json';
import companyData from '../../data/company.json';
import SectionHeader from '../shared/SectionHeader';

const Partners: React.FC = () => {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme } = useTheme();

    // Refs for scroll containers
    const universityScrollRef = useRef<HTMLDivElement>(null);
    const corporateScrollRef = useRef<HTMLDivElement>(null);

    // State for University Partners drag and scroll
    const [isDraggingUni, setIsDraggingUni] = useState(false);
    const [startXUni, setStartXUni] = useState(0);
    const [scrollLeftUniStart, setScrollLeftUniStart] = useState(0);

    // State for Corporate Partners drag and scroll
    const [isDraggingCorp, setIsDraggingCorp] = useState(false);
    const [startXCorp, setStartXCorp] = useState(0);
    const [scrollLeftCorpStart, setScrollLeftCorpStart] = useState(0);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Handle drag start (mouse or touch) for University Partners
    const handleDragStartUni = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
        if (universityScrollRef.current) {
            const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
            setIsDraggingUni(true);
            setStartXUni(clientX);
            setScrollLeftUniStart(universityScrollRef.current.scrollLeft);
            universityScrollRef.current.style.animationPlayState = 'paused';
        }
    };

    // Handle drag start (mouse or touch) for Corporate Partners
    const handleDragStartCorp = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
        if (corporateScrollRef.current) {
            const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
            setIsDraggingCorp(true);
            setStartXCorp(clientX);
            setScrollLeftCorpStart(corporateScrollRef.current.scrollLeft);
            corporateScrollRef.current.style.animationPlayState = 'paused';
        }
    };

    // Handle drag move (mouse or touch) for both sections
    const handleDragMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
        if (!isDraggingUni && !isDraggingCorp) return;

        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        if (isDraggingUni && universityScrollRef.current) {
            const walk = (clientX - startXUni) * 2; // Adjust scroll speed
            universityScrollRef.current.scrollLeft = scrollLeftUniStart - walk;
        } else if (isDraggingCorp && corporateScrollRef.current) {
            const walk = (clientX - startXCorp) * 2; // Adjust scroll speed
            corporateScrollRef.current.scrollLeft = scrollLeftCorpStart - walk;
        }
    };

    // Handle drag end (mouse or touch) for University Partners
    const handleDragEndUni = () => {
        if (universityScrollRef.current && isDraggingUni) {
            setIsDraggingUni(false);
            universityScrollRef.current.style.animationPlayState = 'running';
        }
    };

    // Handle drag end (mouse or touch) for Corporate Partners
    const handleDragEndCorp = () => {
        if (corporateScrollRef.current && isDraggingCorp) {
            setIsDraggingCorp(false);
            corporateScrollRef.current.style.animationPlayState = 'running';
        }
    };

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
                    <h3 className={`text-base sm:text-lg font-semibold transition-colors duration-500 ${
                        mounted && resolvedTheme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                    }`}>
                        University Partners
                    </h3>
                    <div
                        ref={universityScrollRef}
                        className={`flex animate-partners-scroll space-x-3 sm:space-x-4 overflow-x-hidden scrollbar-hide touch-pan-x`}
                        onMouseDown={handleDragStartUni}
                        onMouseMove={handleDragMove}
                        onMouseUp={handleDragEndUni}
                        onMouseLeave={handleDragEndUni}
                        onTouchStart={handleDragStartUni}
                        onTouchMove={handleDragMove}
                        onTouchEnd={handleDragEndUni}
                        onTouchCancel={handleDragEndUni}
                        onDragStart={(e) => e.preventDefault()}
                        style={{ cursor: isDraggingUni ? 'grabbing' : 'grab', touchAction: 'pan-x' }}
                    >
                        {/* Duplicate the university partners for seamless scrolling */}
                        {[...corporateData.corpo, ...corporateData.corpo].map((company, index) => (
                            <div
                                key={`company-${index}`}
                                className="flex-shrink-0 w-48 sm:w-56 md:w-60"
                            >
                                <div className={`h-24 sm:h-28 md:h-28 rounded-lg border-2 flex items-center justify-center transition-all duration-500 hover:scale-105 ${
                                    mounted && resolvedTheme === 'dark'
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
                                            className={`font-semibold text-xs text-center px-2 hidden transition-colors duration-500 ${
                                                mounted && resolvedTheme === 'dark' ? 'text-blue-300' : 'text-blue-700'
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

                {/* Corporate Partners Row */}
                <div className="space-y-3 sm:space-y-4">
                    <h3 className={`text-base sm:text-lg font-semibold transition-colors duration-500 ${
                        mounted && resolvedTheme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                    }`}>
                        Corporate Partners
                    </h3>
                    <div
                        ref={corporateScrollRef}
                        className={`flex animate-partners-scroll space-x-3 sm:space-x-4 overflow-x-hidden scrollbar-hide touch-pan-x`}
                        onMouseDown={handleDragStartCorp}
                        onMouseMove={handleDragMove}
                        onMouseUp={handleDragEndCorp}
                        onMouseLeave={handleDragEndCorp}
                        onTouchStart={handleDragStartCorp}
                        onTouchMove={handleDragMove}
                        onTouchEnd={handleDragEndCorp}
                        onTouchCancel={handleDragEndCorp}
                        onDragStart={(e) => e.preventDefault()}
                        style={{ cursor: isDraggingCorp ? 'grabbing' : 'grab', touchAction: 'pan-x' }}
                    >
                        {/* Duplicate the corporate partners for seamless scrolling */}
                        {[...companyData.conpanies, ...companyData.conpanies].map((corporate, index) => (
                            <div
                                key={`corporate-${index}`}
                                className="flex-shrink-0 w-48 sm:w-56 md:w-60"
                            >
                                <div className={`h-24 sm:h-28 md:h-28 rounded-lg border-2 flex items-center justify-center transition-all duration-500 hover:scale-105 ${
                                    mounted && resolvedTheme === 'dark'
                                        ? 'bg-gradient-to-br from-blue-900/20 to-blue-800/10 border-blue-700/30'
                                        : 'bg-gradient-to-br from-blue-50 to-blue-100/50 border-blue-200'
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
                                            className={`font-semibold text-xs text-center px-2 hidden transition-colors duration-500 ${
                                                mounted && resolvedTheme === 'dark' ? 'text-blue-300' : 'text-blue-700'
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

            {/* CSS for smooth scrolling and animations */}
            <style jsx>{`
                @keyframes partners-scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%); /* Move half the width of the duplicated content */
                    }
                }

                .animate-partners-scroll {
                    animation: partners-scroll 20s linear infinite;
                    display: flex;
                    width: 200%; /* Double the width to accommodate duplicated content */
                }

                .animate-partners-scroll:hover {
                    animation-play-state: paused;
                }

                @media (max-width: 1023px) {
                    .animate-partners-scroll {
                        animation: partners-scroll 10s linear infinite;
                    }
                }

                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }

                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </div>
    );
};

export default Partners;