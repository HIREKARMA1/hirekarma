"use client";

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { useHomeLocale } from '@/contexts/HomeLocaleContext';

const FAQ: React.FC = () => {
    const [mounted, setMounted] = useState(false);
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);
    const { resolvedTheme } = useTheme();
    const { content } = useHomeLocale();
    const { faq } = content;

    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleFAQ = (index: number) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    return (
        <div className="relative content-container py-12 sm:py-16 md:py-20">
            {/* Section Header */}
            <div className="mb-12 sm:mb-16 space-y-6">
                <h2 className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight ${mounted && resolvedTheme === 'dark'
                    ? 'text-gray-100'
                    : 'text-gray-900'
                    }`}>
                    {faq.heading}
                    <span className={`block mt-2 text-lg sm:text-xl lg:text-2xl xl:text-3xl font-medium ${mounted && resolvedTheme === 'dark'
                        ? 'text-indigo-400'
                        : 'text-indigo-600'
                        }`}>
                        {faq.subheading}
                    </span>
                </h2>
                <p className={`text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl ${mounted && resolvedTheme === 'dark'
                    ? 'text-gray-300'
                    : 'text-gray-600'
                    }`}>
                    {faq.description}
                </p>
            </div>

            {/* FAQ Items */}
            <div className="w-full space-y-3 sm:space-y-4">
                {faq.items.map((faqItem, index) => (
                    <div key={index} className="w-full">
                        <div className={`p-4 sm:p-5 md:p-6 rounded-xl border transition-all duration-500 hover:shadow-lg ${mounted && resolvedTheme === 'dark'
                                ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700'
                                : 'bg-gradient-to-br from-white to-gray-50 border-gray-200'
                            }`}>
                            <div className="flex items-center justify-between gap-4">
                                <h3 className={`font-semibold text-sm sm:text-base md:text-lg flex-1 transition-colors duration-500 ${mounted && resolvedTheme === 'dark'
                                        ? 'text-gray-100'
                                        : 'text-gray-900'
                                    }`}>
                                    {faqItem.question}
                                </h3>
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className={`flex-shrink-0 p-2 rounded-full transition-all duration-500 ${mounted && resolvedTheme === 'dark'
                                            ? 'hover:bg-gray-700'
                                            : 'hover:bg-gray-100'
                                        }`}
                                    aria-label={openFAQ === index ? "Close answer" : "Open answer"}
                                    aria-expanded={openFAQ === index}
                                >
                                    <svg
                                        className={`w-4 h-4 sm:w-5 sm:h-5 transition-all duration-500 ${openFAQ === index ? 'rotate-45' : ''
                                            } ${mounted && resolvedTheme === 'dark'
                                                ? 'text-gray-400'
                                                : 'text-gray-600'
                                            }`}
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                        />
                                    </svg>
                                </button>
                            </div>

                            {/* Answer - Collapsible */}
                            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFAQ === index ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                                }`}>
                                <div className={`pt-4 border-t transition-colors duration-500 ${mounted && resolvedTheme === 'dark'
                                        ? 'border-gray-700'
                                        : 'border-gray-200'
                                    }`}>
                                    <p className={`text-xs sm:text-sm md:text-base leading-relaxed transition-colors duration-500 ${mounted && resolvedTheme === 'dark'
                                            ? 'text-gray-300'
                                            : 'text-gray-600'
                                        }`}>
                                        {faqItem.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;
