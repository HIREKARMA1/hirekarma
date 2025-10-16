"use client";

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import WavyBackground from '../../components/layout/WavyBackground';

const TermsOfService = () => {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className={`min-h-screen flex flex-col ${mounted && resolvedTheme === 'dark' ? 'bg-gray-900' : 'bg-white'
            }`}>
            <Navbar />

            <main className="flex-grow">
                <section className={`relative ${mounted && resolvedTheme === 'dark' ? 'bg-gray-900' : 'bg-white'
                    }`}>
                    {/* Wavy Background */}
                    <WavyBackground variant="primary" intensity="light" />

                    <div className="relative content-container py-20">
                        <div className="max-w-4xl mx-auto">
                            {/* Header */}
                            <div className="space-y-4 mb-12">
                                <h1 className={`text-4xl lg:text-5xl font-bold ${mounted && resolvedTheme === 'dark' ? 'text-white' : 'text-gray-900'
                                    }`}>
                                    Terms of Service
                                </h1>
                                <p className={`text-lg ${mounted && resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                                    }`}>
                                    Last updated: October 16, 2025
                                </p>
                            </div>

                            {/* Content Sections */}
                            <div className="space-y-12">
                                {/* Agreement */}
                                <section className="space-y-4">
                                    <h2 className={`text-2xl font-bold ${mounted && resolvedTheme === 'dark' ? 'text-white' : 'text-gray-900'
                                        }`}>
                                        1. Agreement to Terms
                                    </h2>
                                    <p className={`text-lg leading-relaxed ${mounted && resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                                        }`}>
                                        By accessing and using HireKarma&apos;s platform and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                                    </p>
                                </section>

                                {/* Services */}
                                <section className="space-y-4">
                                    <h2 className={`text-2xl font-bold ${mounted && resolvedTheme === 'dark' ? 'text-white' : 'text-gray-900'
                                        }`}>
                                        2. Services Description
                                    </h2>
                                    <div className={`space-y-4 text-lg leading-relaxed ${mounted && resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                                        }`}>
                                        <p>HireKarma provides a platform that:</p>
                                        <ul className="list-disc pl-6 space-y-2">
                                            <li>Connects students with potential employers</li>
                                            <li>Facilitates campus recruitment processes</li>
                                            <li>Offers skill assessment and development tools</li>
                                            <li>Provides career guidance and resources</li>
                                            <li>Enables communication between parties</li>
                                        </ul>
                                    </div>
                                </section>

                                {/* User Responsibilities */}
                                <section className="space-y-4">
                                    <h2 className={`text-2xl font-bold ${mounted && resolvedTheme === 'dark' ? 'text-white' : 'text-gray-900'
                                        }`}>
                                        3. User Responsibilities
                                    </h2>
                                    <div className={`space-y-4 text-lg leading-relaxed ${mounted && resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                                        }`}>
                                        <p>Users agree to:</p>
                                        <ul className="list-disc pl-6 space-y-2">
                                            <li>Provide accurate and truthful information</li>
                                            <li>Maintain confidentiality of account credentials</li>
                                            <li>Comply with all applicable laws and regulations</li>
                                            <li>Not misuse or abuse the platform</li>
                                            <li>Respect other users&apos; rights and privacy</li>
                                        </ul>
                                    </div>
                                </section>

                                {/* Intellectual Property */}
                                <section className="space-y-4">
                                    <h2 className={`text-2xl font-bold ${mounted && resolvedTheme === 'dark' ? 'text-white' : 'text-gray-900'
                                        }`}>
                                        4. Intellectual Property
                                    </h2>
                                    <p className={`text-lg leading-relaxed ${mounted && resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                                        }`}>
                                        All content on HireKarma, including but not limited to text, graphics, logos, and software, is the property of HireKarma and is protected by intellectual property laws. Users may not copy, modify, or distribute this content without explicit permission.
                                    </p>
                                </section>

                                {/* Limitation of Liability */}
                                <section className="space-y-4">
                                    <h2 className={`text-2xl font-bold ${mounted && resolvedTheme === 'dark' ? 'text-white' : 'text-gray-900'
                                        }`}>
                                        5. Limitation of Liability
                                    </h2>
                                    <p className={`text-lg leading-relaxed ${mounted && resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                                        }`}>
                                        HireKarma is not liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services. We do not guarantee employment or hiring outcomes.
                                    </p>
                                </section>

                                {/* Changes to Terms */}
                                <section className="space-y-4">
                                    <h2 className={`text-2xl font-bold ${mounted && resolvedTheme === 'dark' ? 'text-white' : 'text-gray-900'
                                        }`}>
                                        6. Changes to Terms
                                    </h2>
                                    <p className={`text-lg leading-relaxed ${mounted && resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                                        }`}>
                                        We reserve the right to modify these terms at any time. We will notify users of significant changes. Continued use of our services after changes constitutes acceptance of the new terms.
                                    </p>
                                </section>

                                {/* Contact */}
                                <section className="space-y-4">
                                    <h2 className={`text-2xl font-bold ${mounted && resolvedTheme === 'dark' ? 'text-white' : 'text-gray-900'
                                        }`}>
                                        7. Contact Us
                                    </h2>
                                    <p className={`text-lg leading-relaxed ${mounted && resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                                        }`}>
                                        For questions about these Terms of Service, please contact us at:{' '}
                                        <a
                                            href="mailto:legal@hirekarma.com"
                                            className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
                                        >
                                            legal@hirekarma.com
                                        </a>
                                    </p>
                                </section>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default TermsOfService;
