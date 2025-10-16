"use client";

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import WavyBackground from '../../components/layout/WavyBackground';

const PrivacyPolicy = () => {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className={`min-h-screen flex flex-col ${
            mounted && resolvedTheme === 'dark' ? 'bg-gray-900' : 'bg-white'
        }`}>
            <Navbar />

            <main className="flex-grow">
                <section className={`relative ${
                    mounted && resolvedTheme === 'dark' ? 'bg-gray-900' : 'bg-white'
                }`}>
                    {/* Wavy Background */}
                    <WavyBackground variant="primary" intensity="subtle" />

                    <div className="relative content-container py-20">
                        <div className="max-w-4xl mx-auto">
                            {/* Header */}
                            <div className="space-y-4 mb-12">
                                <h1 className={`text-4xl lg:text-5xl font-bold ${
                                    mounted && resolvedTheme === 'dark' ? 'text-white' : 'text-gray-900'
                                }`}>
                                    Privacy Policy
                                </h1>
                                <p className={`text-lg ${
                                    mounted && resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                                }`}>
                                    Last updated: October 16, 2025
                                </p>
                            </div>

                            {/* Content Sections */}
                            <div className="space-y-12">
                                {/* Introduction */}
                                <section className="space-y-4">
                                    <h2 className={`text-2xl font-bold ${
                                        mounted && resolvedTheme === 'dark' ? 'text-white' : 'text-gray-900'
                                    }`}>
                                        1. Introduction
                                    </h2>
                                    <p className={`text-lg leading-relaxed ${
                                        mounted && resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                                    }`}>
                                        HireKarma ("we", "our", or "us") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you use our platform.
                                    </p>
                                </section>

                                {/* Information We Collect */}
                                <section className="space-y-4">
                                    <h2 className={`text-2xl font-bold ${
                                        mounted && resolvedTheme === 'dark' ? 'text-white' : 'text-gray-900'
                                    }`}>
                                        2. Information We Collect
                                    </h2>
                                    <div className={`space-y-4 text-lg leading-relaxed ${
                                        mounted && resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                                    }`}>
                                        <p>We collect information that you provide directly to us, including:</p>
                                        <ul className="list-disc pl-6 space-y-2">
                                            <li>Personal identification information (name, email address, phone number)</li>
                                            <li>Educational background and qualifications</li>
                                            <li>Professional experience and skills</li>
                                            <li>Resume/CV and portfolio materials</li>
                                            <li>Communication preferences and history</li>
                                        </ul>
                                    </div>
                                </section>

                                {/* How We Use Your Information */}
                                <section className="space-y-4">
                                    <h2 className={`text-2xl font-bold ${
                                        mounted && resolvedTheme === 'dark' ? 'text-white' : 'text-gray-900'
                                    }`}>
                                        3. How We Use Your Information
                                    </h2>
                                    <div className={`space-y-4 text-lg leading-relaxed ${
                                        mounted && resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                                    }`}>
                                        <p>We use the information we collect to:</p>
                                        <ul className="list-disc pl-6 space-y-2">
                                            <li>Facilitate job matching and recruitment processes</li>
                                            <li>Improve and personalize our services</li>
                                            <li>Communicate with you about opportunities and updates</li>
                                            <li>Analyze platform usage and enhance user experience</li>
                                            <li>Ensure platform security and prevent fraud</li>
                                        </ul>
                                    </div>
                                </section>

                                {/* Data Security */}
                                <section className="space-y-4">
                                    <h2 className={`text-2xl font-bold ${
                                        mounted && resolvedTheme === 'dark' ? 'text-white' : 'text-gray-900'
                                    }`}>
                                        4. Data Security
                                    </h2>
                                    <p className={`text-lg leading-relaxed ${
                                        mounted && resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                                    }`}>
                                        We implement appropriate security measures to protect your personal information. This includes encryption, secure servers, and regular security assessments. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                                    </p>
                                </section>

                                {/* Your Rights */}
                                <section className="space-y-4">
                                    <h2 className={`text-2xl font-bold ${
                                        mounted && resolvedTheme === 'dark' ? 'text-white' : 'text-gray-900'
                                    }`}>
                                        5. Your Rights
                                    </h2>
                                    <div className={`space-y-4 text-lg leading-relaxed ${
                                        mounted && resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                                    }`}>
                                        <p>You have the right to:</p>
                                        <ul className="list-disc pl-6 space-y-2">
                                            <li>Access your personal data</li>
                                            <li>Correct inaccurate data</li>
                                            <li>Request deletion of your data</li>
                                            <li>Object to data processing</li>
                                            <li>Receive a copy of your data</li>
                                        </ul>
                                    </div>
                                </section>

                                {/* Contact Us */}
                                <section className="space-y-4">
                                    <h2 className={`text-2xl font-bold ${
                                        mounted && resolvedTheme === 'dark' ? 'text-white' : 'text-gray-900'
                                    }`}>
                                        6. Contact Us
                                    </h2>
                                    <p className={`text-lg leading-relaxed ${
                                        mounted && resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                                    }`}>
                                        If you have any questions about this Privacy Policy, please contact us at:{' '}
                                        <a 
                                            href="mailto:privacy@hirekarma.com" 
                                            className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
                                        >
                                            privacy@hirekarma.com
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

export default PrivacyPolicy;
