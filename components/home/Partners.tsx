"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';
import corporateData from '../../data/corporate.json';
import companyData from '../../data/company.json';

const Partners: React.FC = () => {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme } = useTheme();

    const universityScrollRef = useRef<HTMLDivElement>(null);
    const corporateScrollRef = useRef<HTMLDivElement>(null);

    const [isDraggingUni, setIsDraggingUni] = useState(false);
    const [startXUni, setStartXUni] = useState(0);
    const [scrollLeftUniStart, setScrollLeftUniStart] = useState(0);

    const [isDraggingCorp, setIsDraggingCorp] = useState(false);
    const [startXCorp, setStartXCorp] = useState(0);
    const [scrollLeftCorpStart, setScrollLeftCorpStart] = useState(0);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Handle drag start (University)
    const handleDragStartUni = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
        if (universityScrollRef.current) {
            const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
            setIsDraggingUni(true);
            setStartXUni(clientX);
            setScrollLeftUniStart(universityScrollRef.current.scrollLeft);
            universityScrollRef.current.style.animationPlayState = 'paused';
        }
    };

    // Handle drag start (Corporate)
    const handleDragStartCorp = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
        if (corporateScrollRef.current) {
            const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
            setIsDraggingCorp(true);
            setStartXCorp(clientX);
            setScrollLeftCorpStart(corporateScrollRef.current.scrollLeft);
            corporateScrollRef.current.style.animationPlayState = 'paused';
        }
    };

    // Handle dragging movement
    const handleDragMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;

        if (isDraggingUni && universityScrollRef.current) {
            const walk = (clientX - startXUni) * 2;
            universityScrollRef.current.scrollLeft = scrollLeftUniStart - walk;
        } else if (isDraggingCorp && corporateScrollRef.current) {
            const walk = (clientX - startXCorp) * 2;
            corporateScrollRef.current.scrollLeft = scrollLeftCorpStart - walk;
        }
    };

    const handleDragEndUni = () => {
        if (universityScrollRef.current) {
            setIsDraggingUni(false);
            universityScrollRef.current.style.animationPlayState = 'running';
        }
    };

    const handleDragEndCorp = () => {
        if (corporateScrollRef.current) {
            setIsDraggingCorp(false);
            corporateScrollRef.current.style.animationPlayState = 'running';
        }
    };

    return (
        <div className="relative content-container py-12 sm:py-16 md:py-20">
            <div className="mb-12 sm:mb-16 space-y-6">
                <h2 className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight ${mounted && resolvedTheme === 'dark'
                    ? 'text-gray-100'
                    : 'text-gray-900'
                    }`}>
                    Our Partners
                    <span className={`block mt-2 text-lg sm:text-xl lg:text-2xl xl:text-3xl font-medium ${mounted && resolvedTheme === 'dark'
                        ? 'text-orange-400'
                        : 'text-orange-600'
                        }`}>
                        Trusted Collaboration Network
                    </span>
                </h2>
                <p className={`text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl ${mounted && resolvedTheme === 'dark'
                    ? 'text-gray-300'
                    : 'text-gray-600'
                    }`}>
                    Trusted by leading companies and educational institutions across India who rely on HireKarma for their campus placement needs.
                </p>
            </div>

            <div className="relative space-y-10 sm:space-y-12 md:space-y-14">
                {/* University Partners - scroll RIGHT to LEFT */}
                <div className="space-y-3 sm:space-y-4 overflow-x-hidden py-2 sm:py-3 md:py-4">
                    <h3 className={`text-base sm:text-lg font-semibold transition-colors duration-500 ${
                        mounted && resolvedTheme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                    }`}>
                        University Partners
                    </h3>
                    <div
                        ref={universityScrollRef}
                        className="flex animate-scroll-left space-x-3 sm:space-x-4 overflow-x-hidden scrollbar-hide touch-pan-x"
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
                        {[...corporateData.corpo, ...corporateData.corpo].map((company, index) => (
                            <div key={`uni-${index}`} className="flex-shrink-0 w-48 sm:w-56 md:w-60">
                                <div className={`group relative flex h-24 sm:h-28 md:h-28 items-center justify-center rounded-lg border-2 transition-all duration-500 hover:brightness-110 ${
                                    mounted && resolvedTheme === 'dark'
                                        ? 'bg-gradient-to-br from-blue-900/20 to-blue-800/10 border-blue-700/30'
                                        : 'bg-gradient-to-br from-blue-50 to-blue-100/50 border-blue-200'
                                }`}>
                                    <div className="relative z-10 flex flex-col items-center justify-center space-y-2 p-2">
                                        <img
                                            src={company.logo}
                                            alt={company.name}
                                            className={`w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 object-contain transition-all duration-500 ${
                                                mounted && resolvedTheme === 'dark'
                                                    ? 'bg-white/90 rounded-md p-1 shadow-[0_0_0_1px_rgba(148,163,184,0.35)]'
                                                    : ''
                                            }`}
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
                                    <div className="pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-br from-emerald-500/5 to-blue-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Corporate Partners - scroll LEFT to RIGHT */}
                <div className="space-y-3 sm:space-y-4 overflow-x-hidden py-2 sm:py-3 md:py-4">
                    <h3 className={`text-base sm:text-lg font-semibold transition-colors duration-500 ${
                        mounted && resolvedTheme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                    }`}>
                        Corporate Partners
                    </h3>
                    <div
                        ref={corporateScrollRef}
                        className="flex animate-scroll-right space-x-3 sm:space-x-4 overflow-x-hidden scrollbar-hide touch-pan-x"
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
                        {[...companyData.conpanies, ...companyData.conpanies].map((corporate, index) => (
                            <div key={`corp-${index}`} className="flex-shrink-0 w-48 sm:w-56 md:w-60">
                                <div className={`group relative flex h-24 sm:h-28 md:h-28 items-center justify-center rounded-lg border-2 transition-all duration-500 hover:brightness-110 ${
                                    mounted && resolvedTheme === 'dark'
                                        ? 'bg-gradient-to-br from-blue-900/20 to-blue-800/10 border-blue-700/30'
                                        : 'bg-gradient-to-br from-blue-50 to-blue-100/50 border-blue-200'
                                }`}>
                                    <div className="relative z-10 flex flex-col items-center justify-center space-y-2 p-2">
                                        <img
                                            src={corporate.logo}
                                            alt={corporate.name}
                                            className={`w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 object-contain transition-all duration-500 ${
                                                mounted && resolvedTheme === 'dark'
                                                    ? 'bg-white/90 rounded-md p-1 shadow-[0_0_0_1px_rgba(148,163,184,0.35)]'
                                                    : ''
                                            }`}
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
                                    <div className="pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-br from-emerald-500/5 to-blue-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx>{`
                /* LEFT to RIGHT Animation */
                @keyframes scroll-right {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0); }
                }

                /* RIGHT to LEFT Animation */
                @keyframes scroll-left {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }

                .animate-scroll-left {
                    animation: scroll-left 20s linear infinite;
                    display: flex;
                    width: 200%;
                }

                .animate-scroll-right {
                    animation: scroll-right 20s linear infinite;
                    display: flex;
                    width: 200%;
                }

                .animate-scroll-left:hover,
                .animate-scroll-right:hover {
                    animation-play-state: paused;
                }

                @media (max-width: 1023px) {
                    .animate-scroll-left,
                    .animate-scroll-right {
                        animation-duration: 10s;
                    }
                }

                .scrollbar-hide::-webkit-scrollbar { display: none; }
                .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
            `}</style>
        </div>
    );
};

export default Partners;
