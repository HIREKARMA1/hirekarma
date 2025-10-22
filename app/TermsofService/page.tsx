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
                                    Terms and Conditions
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
                                        These Terms and Conditions govern the use of HireKarma&apos;s website, services, and platforms (collectively referred to as the &quot;Services&quot;). By accessing or using our Services, you agree to be bound by these Terms. If you do not agree, you may not use the Services.
                                    </p>
                                </section>

                                {/* Eligibility */}
                                <section className="space-y-4">
                                    <h2 className={`text-2xl font-bold ${mounted && resolvedTheme === 'dark' ? 'text-white' : 'text-gray-900'
                                        }`}>
                                        2. Eligibility
                                    </h2>
                                    <p className={`text-lg leading-relaxed ${mounted && resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                                        }`}>
                                        To use the HireKarma platform, you must be at least 18 years of age or have parental/guardian consent. By using the Services, you represent that you meet these eligibility conditions.
                                    </p>
                                </section>

                                {/* Account Registration */}
                                <section className="space-y-4">
                                    <h2 className={`text-2xl font-bold ${mounted && resolvedTheme === 'dark' ? 'text-white' : 'text-gray-900'
                                        }`}>
                                        3. Account Registration
                                    </h2>
                                    <p className={`text-lg leading-relaxed ${mounted && resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                                        }`}>
                                        Users must provide accurate, complete, and updated information during registration. You are responsible for maintaining the confidentiality of your login credentials and for all activities under your account. HireKarma shall not be liable for unauthorized use of your account.
                                    </p>
                                </section>

                                {/* Use of Services */}
                                <section className="space-y-4">
                                    <h2 className={`text-2xl font-bold ${mounted && resolvedTheme === 'dark' ? 'text-white' : 'text-gray-900'
                                        }`}>
                                        4. Use of Services
                                    </h2>
                                    <div className={`space-y-4 text-lg leading-relaxed ${mounted && resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                                        }`}>
                                        <p>Users agree to use the platform solely for lawful purposes, such as recruitment, job search, or career-related activities. Prohibited uses include:</p>
                                        <ul className="list-disc pl-6 space-y-2">
                                            <li>Uploading misleading or fraudulent information.</li>
                                            <li>Sharing confidential or proprietary data without authorization.</li>
                                            <li>Disrupting or attempting to exploit the platform.</li>
                                        </ul>
                                        <p className="mt-4">Violation of these rules may lead to suspension or termination of your account.</p>
                                    </div>
                                </section>

                                {/* Employer and Candidate Responsibilities */}
                                <section className="space-y-4">
                                    <h2 className={`text-2xl font-bold ${mounted && resolvedTheme === 'dark' ? 'text-white' : 'text-gray-900'
                                        }`}>
                                        5. Employer and Candidate Responsibilities
                                    </h2>
                                    <div className={`space-y-4 text-lg leading-relaxed ${mounted && resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                                        }`}>
                                        <ul className="list-disc pl-6 space-y-2">
                                            <li>Employers are responsible for the accuracy of job postings and compliance with applicable employment laws.</li>
                                            <li>Candidates are responsible for ensuring the truthfulness of their submitted profiles and documents.</li>
                                        </ul>
                                        <p className="mt-4">HireKarma acts only as an intermediary between job seekers and employers and does not guarantee employment outcomes.</p>
                                    </div>
                                </section>

                                {/* Fees and Payments */}
                                <section className="space-y-4">
                                    <h2 className={`text-2xl font-bold ${mounted && resolvedTheme === 'dark' ? 'text-white' : 'text-gray-900'
                                        }`}>
                                        6. Fees and Payments
                                    </h2>
                                    <p className={`text-lg leading-relaxed ${mounted && resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                                        }`}>
                                        Certain features or services may be available on a paid basis. By purchasing such services, you agree to pay all applicable fees per the pricing displayed on the platform. All payments are processed securely through authorized payment gateways.
                                    </p>
                                </section>

                                {/* Intellectual Property */}
                                <section className="space-y-4">
                                    <h2 className={`text-2xl font-bold ${mounted && resolvedTheme === 'dark' ? 'text-white' : 'text-gray-900'
                                        }`}>
                                        7. Intellectual Property
                                    </h2>
                                    <p className={`text-lg leading-relaxed ${mounted && resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                                        }`}>
                                        All content on the HireKarma platform, including trademarks, logos, software, and materials, is the property of HireKarma Private Limited or its licensors. Users may not copy, modify, or distribute any content without prior written consent.
                                    </p>
                                </section>

                                {/* Limitation of Liability */}
                                <section className="space-y-4">
                                    <h2 className={`text-2xl font-bold ${mounted && resolvedTheme === 'dark' ? 'text-white' : 'text-gray-900'
                                        }`}>
                                        8. Limitation of Liability
                                    </h2>
                                    <p className={`text-lg leading-relaxed ${mounted && resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                                        }`}>
                                        HireKarma is not responsible for any direct, indirect, incidental, or consequential damages resulting from your use or inability to use the Services. The platform is provided &quot;as is&quot; without any warranties, express or implied.
                                    </p>
                                </section>

                                {/* Changes to the Terms */}
                                <section className="space-y-4">
                                    <h2 className={`text-2xl font-bold ${mounted && resolvedTheme === 'dark' ? 'text-white' : 'text-gray-900'
                                        }`}>
                                        9. Changes to the Terms
                                    </h2>
                                    <p className={`text-lg leading-relaxed ${mounted && resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                                        }`}>
                                        HireKarma reserves the right to modify these Terms at any time without prior notice. Updated Terms will take effect immediately upon posting. Continued use of the Services constitutes acceptance of the modified Terms.
                                    </p>
                                </section>

                                {/* Governing Law */}
                                <section className="space-y-4">
                                    <h2 className={`text-2xl font-bold ${mounted && resolvedTheme === 'dark' ? 'text-white' : 'text-gray-900'
                                        }`}>
                                        10. Governing Law
                                    </h2>
                                    <p className={`text-lg leading-relaxed ${mounted && resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                                        }`}>
                                        These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising shall fall under the exclusive jurisdiction of the courts located in Bangalore, Karnataka.
                                    </p>
                                </section>

                                {/* Contact Information */}
                                <section className="space-y-4">
                                    <h2 className={`text-2xl font-bold ${mounted && resolvedTheme === 'dark' ? 'text-white' : 'text-gray-900'
                                        }`}>
                                        11. Contact Information
                                    </h2>
                                    <div className={`text-lg leading-relaxed ${mounted && resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                                        }`}>
                                        <p className="mb-4">For questions or concerns regarding these Terms and Conditions, please contact:</p>
                                        <div className="space-y-2">
                                            <p><strong className={mounted && resolvedTheme === 'dark' ? 'text-white' : 'text-gray-900'}>HireKarma Private Limited</strong></p>
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
                                            <p><strong className={mounted && resolvedTheme === 'dark' ? 'text-white' : 'text-gray-900'}>Address:</strong> HireKarma Private Limited, Bangalore, India</p>
                                        </div>
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

export default TermsOfService;
