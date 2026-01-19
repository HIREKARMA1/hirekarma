"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';
import testimonialsData from '../../data/testimonial.json';
import SectionHeader from '../shared/SectionHeader';

const Testimonials: React.FC = () => {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme } = useTheme();
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeftStart, setScrollLeftStart] = useState(0);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Handle mouse down or touch start to begin dragging
    const handleDragStart = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
        if (scrollContainerRef.current) {
            const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
            setIsDragging(true);
            setStartX(clientX);
            setScrollLeftStart(scrollContainerRef.current.scrollLeft);
            scrollContainerRef.current.style.animationPlayState = 'paused';
        }
    };

    // Handle mouse move or touch move to scroll during drag
    const handleDragMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
        if (!isDragging || !scrollContainerRef.current) return;

        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        const walk = (clientX - startX) * 2; // Adjust scroll speed
        scrollContainerRef.current.scrollLeft = scrollLeftStart - walk;
    };

    // Handle mouse up, touch end, or leave to stop dragging and resume animation
    const handleDragEnd = () => {
        if (scrollContainerRef.current && isDragging) {
            setIsDragging(false);
            scrollContainerRef.current.style.animationPlayState = 'running';
        }
    };

    return (
        <div className="relative content-container py-8 sm:py-12 md:py-16 lg:py-20">
            {/* Section Header */}
            <div className="mb-8 sm:mb-12 md:mb-16">
                <SectionHeader
                    title="Testimonials"
                    description="Hear from colleges, universities, and corporate partners who have transformed their hiring processes with HireKarma"
                    alignment="left"
                />
            </div>

            {/* Testimonials Cards Container */}
            <div className="relative overflow-hidden">
                <div
                    ref={scrollContainerRef}
                    className={`flex animate-testimonials-scroll space-x-3 sm:space-x-4 md:space-x-6 overflow-x-hidden scrollbar-hide touch-pan-x will-change-transform`}
                    onMouseDown={handleDragStart}
                    onMouseMove={handleDragMove}
                    onMouseUp={handleDragEnd}
                    onMouseLeave={handleDragEnd}
                    onTouchStart={handleDragStart}
                    onTouchMove={handleDragMove}
                    onTouchEnd={handleDragEnd}
                    onTouchCancel={handleDragEnd}
                    onDragStart={(e) => e.preventDefault()} // Prevent default drag behavior
                    style={{ cursor: isDragging ? 'grabbing' : 'grab', touchAction: 'pan-x' }}
                >
                    {/* Duplicate the testimonials for seamless scrolling */}
                    {[...testimonialsData.testimonials, ...testimonialsData.testimonials].map((testimonial, index) => (
                        <div
                            key={`testimonial-${index}`}
                            className="flex-shrink-0 w-[240px] sm:w-[280px] md:w-[320px] lg:w-96"
                        >
                            <div className={`p-4 sm:p-5 md:p-6 rounded-2xl border transition-all duration-500 hover:scale-105 hover:shadow-xl h-full ${
                                mounted && resolvedTheme === 'dark'
                                    ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700'
                                    : 'bg-gradient-to-br from-white to-gray-50 border-gray-200'
                            }`}>
                                {/* Top Row - Profile Section */}
                                <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4">
                                    <div className="flex-shrink-0">
                                        <div className={`w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 rounded-full overflow-hidden border-2 transition-colors duration-500 ${
                                            mounted && resolvedTheme === 'dark'
                                                ? 'border-gray-600'
                                                : 'border-gray-200'
                                        }`}>
                                            <img
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                className="w-full h-full object-cover"
                                                loading="lazy"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h4 className={`font-semibold text-xs sm:text-sm md:text-base truncate transition-colors duration-500 ${
                                            mounted && resolvedTheme === 'dark'
                                                ? 'text-gray-100'
                                                : 'text-gray-900'
                                        }`}>
                                            {testimonial.name}
                                        </h4>
                                        <p className={`text-xs sm:text-sm truncate transition-colors duration-500 ${
                                            mounted && resolvedTheme === 'dark'
                                                ? 'text-blue-400'
                                                : 'text-blue-600'
                                        }`}>
                                            {testimonial.designation}
                                        </p>
                                        <p className={`text-xs sm:text-sm truncate transition-colors duration-500 ${
                                            mounted && resolvedTheme === 'dark'
                                                ? 'text-gray-400'
                                                : 'text-gray-500'
                                        }`}>
                                            {testimonial.institution}
                                        </p>
                                    </div>
                                </div>

                                {/* Bottom Row - Feedback */}
                                <div className={`border-t pt-3 sm:pt-4 transition-colors duration-500 ${
                                    mounted && resolvedTheme === 'dark'
                                        ? 'border-gray-700'
                                        : 'border-gray-200'
                                }`}>
                                    <p className={`text-xs sm:text-sm md:text-sm leading-relaxed transition-colors duration-500 ${
                                        mounted && resolvedTheme === 'dark'
                                            ? 'text-gray-300'
                                            : 'text-gray-600'
                                    }`}>
                                        &quot;{testimonial.feedback}&quot;
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* CSS Animation - Optimized for performance */}
            <style jsx>{`
                @keyframes testimonials-scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                
                .animate-testimonials-scroll {
                    animation: testimonials-scroll 15s linear infinite;
                    display: flex;
                    width: 200%;
                    backface-visibility: hidden;
                    perspective: 1000px;
                }
                
                @media (max-width: 1023px) {
                    .animate-testimonials-scroll {
                        animation: testimonials-scroll 8s linear infinite;
                    }
                }
                
                .animate-testimonials-scroll:hover {
                    animation-play-state: paused;
                }
                
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
                
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                
                .will-change-transform {
                    will-change: transform;
                }
            `}</style>
        </div>
    );
};

export default Testimonials;