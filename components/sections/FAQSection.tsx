"use client";

import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection: React.FC = () => {
    const [expandedItems, setExpandedItems] = useState<{ [key: string]: boolean }>({
        'faq-1': false,
        'faq-2': false,
        'faq-3': false,
        'faq-4': false,
    });

    const toggleExpanded = (itemKey: string) => {
        setExpandedItems(prev => ({
            ...prev,
            [itemKey]: !prev[itemKey]
        }));
    };

    const faqData = [
        {
            key: 'faq-1',
            question: 'How does HireKarma help colleges improve placement rates?',
            answer: 'HireKarma connects colleges with top recruiters and equips students with industry-relevant skills, increasing their placement success significantly.'
        },
        {
            key: 'faq-2',
            question: 'What types of roles does HireKarma recruit for?',
            answer: 'HireKarma recruits for entry to mid-level positions in tech, marketing, HR, operations, sales, and more across diverse industries.'
        },
        {
            key: 'faq-3',
            question: 'Can companies hire from multiple colleges at once?',
            answer: 'Yes. Our Centralized Placement System allows companies to post once and hire from multiple colleges in real-time.'
        },
        {
            key: 'faq-4',
            question: 'Is the skill development program customized?',
            answer: 'Yes, HireKarma designs skill training programs based on student profiles, industry needs, and future job trends.'
        }
    ];

    return (
        <>
            {/* FAQ Schema for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": faqData.map(faq => ({
                            "@type": "Question",
                            "name": faq.question,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": faq.answer
                            }
                        }))
                    })
                }}
            />

            <section className="relative bg-white py-20 lg:py-32">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-30">
                    <div className="w-full h-full" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                        backgroundRepeat: 'repeat'
                    }}></div>
                </div>

                <div className="relative content-container">
                    {/* Header Section */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                            Frequently asked questions
                        </h2>
                        <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                            Stuck on something? We&apos;re here to help with all your questions and answers in one place.
                        </p>
                    </div>

                    {/* FAQ Grid */}
                    <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {faqData.map((faq) => (
                            <div key={faq.key} className="group">
                                <div className="bg-white rounded-2xl border border-gray-200 hover:border-cyan-300 hover:shadow-lg transition-all duration-300 overflow-hidden">
                                    <button
                                        onClick={() => toggleExpanded(faq.key)}
                                        className="w-full px-8 py-6 text-left flex items-start space-x-4 hover:bg-gray-50 transition-colors duration-200"
                                    >
                                        {/* Icon */}
                                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full flex items-center justify-center group-hover:from-cyan-200 group-hover:to-blue-200 transition-all duration-300">
                                            <HelpCircle className="w-6 h-6 text-cyan-600" />
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-cyan-600 transition-colors duration-200">
                                                {faq.question}
                                            </h3>
                                            {expandedItems[faq.key] && (
                                                <p className="text-gray-600 leading-relaxed">
                                                    {faq.answer}
                                                </p>
                                            )}
                                        </div>

                                        {/* Chevron */}
                                        <div className="flex-shrink-0 ml-4">
                                            {expandedItems[faq.key] ? (
                                                <ChevronUp className="w-5 h-5 text-cyan-600" />
                                            ) : (
                                                <ChevronDown className="w-5 h-5 text-cyan-600" />
                                            )}
                                        </div>
                                    </button>

                                    {/* Expanded Content */}
                                    {expandedItems[faq.key] && (
                                        <div className="px-8 pb-6 border-t border-gray-100">
                                            <div className="pt-4">
                                                <p className="text-gray-600 leading-relaxed">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Additional Help Section */}
                    {/* <div className="mt-16 text-center">
                        <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-8 max-w-4xl mx-auto">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Still have questions?</h3>
                            <p className="text-gray-600 mb-6">
                                Can&apos;t find the answer you&apos;re looking for? Please chat with our friendly team.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-xl hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                                    Contact Support
                                </button>
                                <button className="px-8 py-3 border-2 border-cyan-300 text-cyan-700 font-semibold rounded-xl hover:bg-cyan-50 hover:border-cyan-400 transition-all duration-300">
                                    View Documentation
                                </button>
                            </div>
                        </div>
                    </div> */}
                </div>
            </section>
        </>
    );
};

export default FAQSection;
