"use client";

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

const PrivacyPolicy = () => {
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
                    <div className="relative content-container py-20">
                        <div className="max-w-4xl mx-auto">
                            {/* Header */}
                            <div className="space-y-4 mb-12">
                                <h1 className={`text-4xl lg:text-5xl font-bold ${mounted && resolvedTheme === 'dark' ? 'text-white' : 'text-gray-900'
                                    }`}>
                                    Privacy Policy
                                </h1>
                                <p className={`text-lg ${mounted && resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                                    }`}>
                                    Last updated: October 22, 2025
                                </p>
                            </div>

                            {/* Content Sections */}
                            <div className="space-y-12">
                                {/* Introduction */}
                                <section className="space-y-4">
                                    <h2 className={`text-2xl font-bold ${mounted && resolvedTheme === 'dark' ? 'text-white' : 'text-gray-900'
                                        }`}>
                                        1. Introduction
                                    </h2>
                                    <p className={`text-lg leading-relaxed ${mounted && resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                                        }`}>
                                        Welcome to HireKarma (hirekarma.in). HireKarma Private Limited is committed to protecting your privacy and ensuring that your personal information is handled responsibly. This Privacy Policy outlines how we collect, use, store, and protect your data when you use our website and services.
                                    </p>
                                </section>

                                {/* Information We Collect */}
                                <section className="space-y-4">
                                    <h2 className={`text-2xl font-bold ${mounted && resolvedTheme === 'dark' ? 'text-white' : 'text-gray-900'
                                        }`}>
                                        2. Information We Collect
                                    </h2>
                                    <div className={`space-y-6 text-lg leading-relaxed ${mounted && resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                                        }`}>
                                        <div>
                                            <h3 className={`text-xl font-semibold mb-2 ${mounted && resolvedTheme === 'dark' ? 'text-white' : 'text-gray-900'
                                                }`}>Personal Information:</h3>
                                            <p>Details such as your name, email address, contact number, education, work experience, and other information you share during registration or job applications.</p>
                                        </div>
                                        <div>
                                            <h3 className={`text-xl font-semibold mb-2 ${mounted && resolvedTheme === 'dark' ? 'text-white' : 'text-gray-900'
                                                }`}>Payment Information:</h3>
                                            <p>If you use our paid services, payment details, including card information and billing address, are processed securely through authorized payment gateways.</p>
                                        </div>
                                        <div>
                                            <h3 className={`text-xl font-semibold mb-2 ${mounted && resolvedTheme === 'dark' ? 'text-white' : 'text-gray-900'
                                                }`}>Technical Information:</h3>
                                            <p>Information such as your IP address, browser type, and device data is collected to improve functionality and ensure platform performance.</p>
                                        </div>
                                        <div>
                                            <h3 className={`text-xl font-semibold mb-2 ${mounted && resolvedTheme === 'dark' ? 'text-white' : 'text-gray-900'
                                                }`}>Cookies and Tracking Technologies:</h3>
                                            <p>Cookies and similar tools are used to enhance user experience and analyze website usage. You can manage your preferences in browser settings.</p>
                                        </div>
                                    </div>
                                </section>

                                {/* How We Use Your Information */}
                                <section className="space-y-4">
                                    <h2 className={`text-2xl font-bold ${mounted && resolvedTheme === 'dark' ? 'text-white' : 'text-gray-900'
                                        }`}>
                                        3. How We Use Your Information
                                    </h2>
                                    <div className={`space-y-4 text-lg leading-relaxed ${mounted && resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                                        }`}>
                                        <p>Your data is used for:</p>
                                        <ul className="list-disc pl-6 space-y-2">
                                            <li>Providing and improving services including recruitment, job matching, and career guidance.</li>
                                            <li>Processing payments and managing your account.</li>
                                            <li>Communicating about updates, promotions, and service notifications.</li>
                                            <li>Analyzing website usage and improving user experience.</li>
                                            <li>Complying with legal requirements and safeguarding our rights.</li>
                                        </ul>
                                    </div>
                                </section>

                                {/* Sharing of Your Information */}
                                <section className="space-y-4">
                                    <h2 className={`text-2xl font-bold ${mounted && resolvedTheme === 'dark' ? 'text-white' : 'text-gray-900'
                                        }`}>
                                        4. Sharing of Your Information
                                    </h2>
                                    <div className={`space-y-4 text-lg leading-relaxed ${mounted && resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                                        }`}>
                                        <p>HireKarma does not sell or rent personal information. We may share data only as follows:</p>
                                        <ul className="list-disc pl-6 space-y-2">
                                            <li><strong className={mounted && resolvedTheme === 'dark' ? 'text-white' : 'text-gray-900'}>Employers and Recruiters:</strong> To support hiring and job placement activities.</li>
                                            <li><strong className={mounted && resolvedTheme === 'dark' ? 'text-white' : 'text-gray-900'}>Service Providers:</strong> For tasks like analytics, payment processing, or marketing under confidentiality agreements.</li>
                                            <li><strong className={mounted && resolvedTheme === 'dark' ? 'text-white' : 'text-gray-900'}>Legal Authorities:</strong> To comply with lawful requests or regulations.</li>
                                        </ul>
                                    </div>
                                </section>

                                {/* Data Security */}
                                <section className="space-y-4">
                                    <h2 className={`text-2xl font-bold ${mounted && resolvedTheme === 'dark' ? 'text-white' : 'text-gray-900'
                                        }`}>
                                        5. Data Security
                                    </h2>
                                    <p className={`text-lg leading-relaxed ${mounted && resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                                        }`}>
                                        We employ appropriate organizational and technical safeguards to protect your personal data from unauthorized access, loss, or disclosure. However, as with all internet-based operations, absolute security cannot be guaranteed.
                                    </p>
                                </section>

                                {/* Your Rights */}
                                <section className="space-y-4">
                                    <h2 className={`text-2xl font-bold ${mounted && resolvedTheme === 'dark' ? 'text-white' : 'text-gray-900'
                                        }`}>
                                        6. Your Rights
                                    </h2>
                                    <div className={`space-y-4 text-lg leading-relaxed ${mounted && resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                                        }`}>
                                        <p>You may exercise the following rights regarding your data:</p>
                                        <ul className="list-disc pl-6 space-y-2">
                                            <li><strong className={mounted && resolvedTheme === 'dark' ? 'text-white' : 'text-gray-900'}>Access:</strong> Request a copy of your personal data.</li>
                                            <li><strong className={mounted && resolvedTheme === 'dark' ? 'text-white' : 'text-gray-900'}>Correction:</strong> Ask for corrections of inaccurate or incomplete information.</li>
                                            <li><strong className={mounted && resolvedTheme === 'dark' ? 'text-white' : 'text-gray-900'}>Deletion:</strong> Request the deletion of your personal data, subject to legal obligations.</li>
                                            <li><strong className={mounted && resolvedTheme === 'dark' ? 'text-white' : 'text-gray-900'}>Objection:</strong> Object to certain types of data processing.</li>
                                        </ul>
                                        <p className="mt-4">
                                            Requests should be sent to{' '}
                                            <a
                                                href="mailto:info@hirekarma.in"
                                                className={`font-semibold transition-colors duration-200 ${mounted && resolvedTheme === 'dark'
                                                    ? 'text-cyan-400 hover:text-cyan-300'
                                                    : 'text-cyan-600 hover:text-cyan-700'
                                                    }`}
                                            >
                                                info@hirekarma.in
                                            </a>
                                        </p>
                                    </div>
                                </section>

                                {/* Data Retention */}
                                <section className="space-y-4">
                                    <h2 className={`text-2xl font-bold ${mounted && resolvedTheme === 'dark' ? 'text-white' : 'text-gray-900'
                                        }`}>
                                        7. Data Retention
                                    </h2>
                                    <p className={`text-lg leading-relaxed ${mounted && resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                                        }`}>
                                        HireKarma retains your personal information only as long as necessary for the purposes outlined in this policy or as required by applicable law.
                                    </p>
                                </section>

                                {/* Third-Party Websites */}
                                <section className="space-y-4">
                                    <h2 className={`text-2xl font-bold ${mounted && resolvedTheme === 'dark' ? 'text-white' : 'text-gray-900'
                                        }`}>
                                        8. Third-Party Websites
                                    </h2>
                                    <p className={`text-lg leading-relaxed ${mounted && resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                                        }`}>
                                        Our website may link to third-party sites. HireKarma is not responsible for these external sites&apos; privacy practices and encourages users to review their policies.
                                    </p>
                                </section>

                                {/* Changes to This Privacy Policy */}
                                <section className="space-y-4">
                                    <h2 className={`text-2xl font-bold ${mounted && resolvedTheme === 'dark' ? 'text-white' : 'text-gray-900'
                                        }`}>
                                        9. Changes to This Privacy Policy
                                    </h2>
                                    <p className={`text-lg leading-relaxed ${mounted && resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                                        }`}>
                                        This policy may be updated periodically. Updates will be posted on our website, and continued use of the platform implies agreement with the revised terms.
                                    </p>
                                </section>

                                {/* Contact Us */}
                                <section className="space-y-4">
                                    <h2 className={`text-2xl font-bold ${mounted && resolvedTheme === 'dark' ? 'text-white' : 'text-gray-900'
                                        }`}>
                                        10. Contact Us
                                    </h2>
                                    <div className={`text-lg leading-relaxed ${mounted && resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                                        }`}>
                                        <p className="mb-4">For any queries or concerns regarding this Privacy Policy, you may contact:</p>
                                        <p>
                                            <strong className={mounted && resolvedTheme === 'dark' ? 'text-white' : 'text-gray-900'}>Email:</strong>{' '}
                                            <a
                                                href="mailto:info@hirekarma.in"
                                                className={`font-semibold transition-colors duration-200 ${mounted && resolvedTheme === 'dark'
                                                    ? 'text-cyan-400 hover:text-cyan-300'
                                                    : 'text-cyan-600 hover:text-cyan-700'
                                                    }`}
                                            >
                                                info@hirekarma.in
                                            </a>
                                        </p>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

        </div>
    );
};

export default PrivacyPolicy;
