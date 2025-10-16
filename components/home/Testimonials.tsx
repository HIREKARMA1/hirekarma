"use client";

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import testimonialsData from '../../data/testimonial.json';
import SectionHeader from '../shared/SectionHeader';

const Testimonials: React.FC = () => {
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
                    title="Testimonials"
                    description="Hear from colleges, universities, and corporate partners who have transformed their hiring processes with HireKarma"
                    alignment="left"
                />
            </div>

            {/* Testimonials Cards Container */}
            <div className="relative overflow-hidden">
                {/* Animated Testimonials Cards */}
                <div className="flex animate-testimonials-scroll space-x-4 sm:space-x-6">
                    {/* First Set of Cards */}
                    {testimonialsData.testimonials.map((testimonial, index) => (
                        <div
                            key={`first-${index}`}
                            className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[360px] lg:w-96"
                        >
                            <div className={`p-5 sm:p-6 rounded-2xl border transition-all duration-500 hover:scale-105 hover:shadow-xl h-full ${mounted && resolvedTheme === 'dark'
                                    ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700'
                                    : 'bg-gradient-to-br from-white to-gray-50 border-gray-200'
                                }`}>
                                {/* Top Row - Profile Section */}
                                <div className="flex items-center gap-3 sm:gap-4 mb-4">
                                    <div className="flex-shrink-0">
                                        <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 transition-colors duration-500 ${mounted && resolvedTheme === 'dark'
                                                ? 'border-gray-600'
                                                : 'border-gray-200'
                                            }`}>
                                            <img
                                                src={testimonial.image}
                                                alt={testimonial.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h4 className={`font-semibold text-sm sm:text-base truncate transition-colors duration-500 ${mounted && resolvedTheme === 'dark'
                                                ? 'text-gray-100'
                                                : 'text-gray-900'
                                            }`}>
                                            {testimonial.name}
                                        </h4>
                                        <p className={`text-xs sm:text-sm truncate transition-colors duration-500 ${mounted && resolvedTheme === 'dark'
                                                ? 'text-blue-400'
                                                : 'text-blue-600'
                                            }`}>
                                            {testimonial.designation}
                                        </p>
                                        <p className={`text-xs sm:text-sm truncate transition-colors duration-500 ${mounted && resolvedTheme === 'dark'
                                                ? 'text-gray-400'
                                                : 'text-gray-500'
                                            }`}>
                                            {testimonial.institution}
                                        </p>
                                    </div>
                                </div>

                                {/* Bottom Row - Feedback */}
                                <div className={`border-t pt-4 transition-colors duration-500 ${mounted && resolvedTheme === 'dark'
                                        ? 'border-gray-700'
                                        : 'border-gray-200'
                                    }`}>
                                    <p className={`text-xs sm:text-sm leading-relaxed transition-colors duration-500 ${mounted && resolvedTheme === 'dark'
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

            {/* CSS Animation (add this to globals.css if not already present) */}
            <style jsx>{`
        @keyframes testimonials-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 2));
          }
        }
        
        .animate-testimonials-scroll {
          animation: testimonials-scroll 30s linear infinite;
        }
        
        .animate-testimonials-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
        </div>
    );
};

export default Testimonials;

