"use client";

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Navbar from '../../../components/layout/Navbar';
import Footer from '../../../components/layout/Footer';
import WavyBackground from '../../../components/layout/WavyBackground';
import { School, Target, Users, LineChart, Handshake, AlertTriangle } from 'lucide-react';

const ForUniversityPage: React.FC = () => {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    // A reusable list item component for the "Challenges" section
    const ChallengeListItem: React.FC<{ title: string; description: string }> = ({ title, description }) => (
        <div className="flex items-start gap-4">
            <div className={`w-12 h-12 rounded-lg flex-shrink-0 flex items-center justify-center mt-1 ${
                mounted && resolvedTheme === 'dark'
                    ? 'bg-red-900/30'
                    : 'bg-red-100'
            }`}>
                <AlertTriangle className={`w-6 h-6 ${
                    mounted && resolvedTheme === 'dark' ? 'text-red-400' : 'text-red-600'
                }`} />
            </div>
            <div>
                <h3 className={`text-lg font-bold ${
                    mounted && resolvedTheme === 'dark' ? 'text-gray-100' : 'text-gray-900'
                }`}>{title}</h3>
                <p className={`${
                    mounted && resolvedTheme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                }`}>{description}</p>
            </div>
        </div>
    );

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
                    <WavyBackground variant="primary" intensity="strong" />

                    {/* Section 1: The Impact (Transform Placement Outcomes) */}
                    <div className="relative content-container pt-20 pb-20">
                        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center min-h-[85vh]">
                            {/* Left Content */}
                            <div className="space-y-8 lg:space-y-10">
                                <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full ${
                                    mounted && resolvedTheme === 'dark'
                                        ? 'bg-blue-900/30 border border-blue-700/50'
                                        : 'bg-blue-100 border border-blue-200'
                                }`}>
                                    <School className={`w-4 h-4 ${
                                        mounted && resolvedTheme === 'dark' ? 'text-blue-400' : 'text-blue-700'
                                    }`} />
                                    <span className={`text-sm font-semibold ${
                                        mounted && resolvedTheme === 'dark' ? 'text-blue-400' : 'text-blue-700'
                                    }`}>For Universities</span>
                                </div>

                                <div className="space-y-6">
                                    <h1 className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight ${
                                        mounted && resolvedTheme === 'dark' ? 'text-gray-100' : 'text-gray-900'
                                    }`}>
                                        Transform Placement Outcomes
                                        <span className={`block mt-2 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium ${
                                            mounted && resolvedTheme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'
                                        }`}>
                                            with AI-Driven Insights
                                        </span>
                                    </h1>
                                </div>

                                <div className="space-y-4">
                                    <p className={`text-lg sm:text-xl leading-relaxed max-w-2xl ${
                                        mounted && resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                                    }`}>
                                        Empower your placement and training (T&P) cell with <strong className={`${
                                            mounted && resolvedTheme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                                        }`}>automation, analytics, and direct industry connectivity</strong>. 
                                        HireKarma enables universities to boost placement rates, build 
                                        stronger recruiter relationships, and deliver <strong className={`${
                                            mounted && resolvedTheme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                                        }`}>actionable employability data</strong> that enhances 
                                        both student and institute visibility.
                                    </p>
                                </div>

                                <div className="flex items-center gap-4">
                                    <button className={`px-8 py-4 font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 ${
                                        mounted && resolvedTheme === 'dark'
                                            ? 'bg-blue-600 text-white hover:bg-blue-700'
                                            : 'bg-blue-600 text-white hover:bg-blue-700'
                                    }`}>
                                        Get Started
                                    </button>
                                </div>
                            </div>

                            {/* Right Content - Image */}
                            <div className="relative">
                                <div className="rounded-3xl overflow-hidden shadow-2xl">
                                    <Image
                                        src="/university.jpg"
                                        alt="University campus excellence"
                                        width={600}
                                        height={500}
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                                <div className={`absolute -bottom-6 -left-6 w-32 h-32 rounded-full blur-3xl ${
                                    mounted && resolvedTheme === 'dark' ? 'bg-blue-500/30' : 'bg-blue-200/50'
                                }`}></div>
                                <div className={`absolute -top-6 -right-6 w-40 h-40 rounded-full blur-3xl ${
                                    mounted && resolvedTheme === 'dark' ? 'bg-cyan-500/30' : 'bg-cyan-200/50'
                                }`}></div>
                            </div>
                        </div>
                    </div>

                    {/* Section 2: The Challenges (The Hurdles Universities Face) */}
                    <div className="relative content-container py-20">
                        <div className="max-w-7xl mx-auto">
                            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                                {/* Left Side - Images */}
                                <div className="order-2 lg:order-1">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-4">
                                            <Image src="/university.jpg" alt="Campus placement challenges" width={300} height={400} className="w-full h-64 object-cover rounded-xl shadow-lg" />
                                            <Image src="/corporate.jpg" alt="Industry demands" width={300} height={300} className="w-full h-48 object-cover rounded-xl shadow-lg" />
                                        </div>
                                        <div className="space-y-4 pt-8">
                                            <Image src="/demo.png" alt="Placement analytics issues" width={300} height={300} className="w-full h-48 object-cover rounded-xl shadow-lg" />
                                            <Image src="/students.jpg" alt="Student employability gaps" width={300} height={400} className="w-full h-64 object-cover rounded-xl shadow-lg" />
                                        </div>
                                    </div>
                                </div>

                                {/* Right Side - Content */}
                                <div className="order-1 lg:order-2 space-y-10">
                                    <div>
                                        <h2 className={`text-3xl lg:text-4xl xl:text-5xl font-bold ${
                                            mounted && resolvedTheme === 'dark' ? 'text-gray-100' : 'text-gray-900'
                                        }`}>
                                            The Placement Efficiency Gap
                                            <span className={`block mt-2 text-2xl lg:text-3xl font-medium ${
                                                mounted && resolvedTheme === 'dark' ? 'text-red-400' : 'text-red-600'
                                            }`}>
                                                Why Boosting Employability is Challenging
                                            </span>
                                        </h2>
                                    </div>

                                    <div className="space-y-6">
                                        <ChallengeListItem
                                            title="Manual Placement Processes"
                                            description="Outdated, manual workflows for managing drives, eligibility, and recruiter coordination consume valuable T&P resources."
                                        />
                                        <ChallengeListItem
                                            title="Low Visibility to Recruiters"
                                            description="Limited access to top companies beyond traditional channels, reducing opportunities for high-quality placements."
                                        />
                                        <ChallengeListItem
                                            title="Inadequate Skill Assessment"
                                            description="Lack of standardized, data-driven tools to identify and bridge student skill gaps for industry readiness."
                                        />
                                        <ChallengeListItem
                                            title="Fragmented Data Insights"
                                            description="Disconnected systems make it hard to track employability trends, placement outcomes, and institutional performance."
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section 3: The Solution (How HireKarma Bridges the Gap) */}
                    <div className="relative content-container py-20">
                        <div className="max-w-7xl mx-auto">
                            {/* Main 2-column grid for the section layout */}
                            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                                {/* Left Column: Header and Solutions */}
                                <div className="order-2 lg:order-1 space-y-10">
                                    <div>
                                        <h2
                                            className={`text-3xl lg:text-4xl xl:text-5xl font-bold ${
                                                mounted && resolvedTheme === 'dark'
                                                    ? 'text-gray-100'
                                                    : 'text-gray-900'
                                            }`}
                                        >
                                            HireKarma Solution
                                        </h2>
                                    </div>

                                    {/* Solution List */}
                                    <div className="space-y-6">
                                        {/* End-to-End Management */}
                                        <div className="flex items-start space-x-4">
                                            <div
                                                className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl ${
                                                    mounted && resolvedTheme === 'dark'
                                                        ? 'bg-blue-500/20 text-blue-400'
                                                        : 'bg-blue-100 text-blue-600'
                                                }`}
                                            >
                                                <Target className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h3
                                                    className={`text-xl font-semibold ${
                                                        mounted && resolvedTheme === 'dark'
                                                            ? 'text-gray-100'
                                                            : 'text-gray-900'
                                                    }`}
                                                >
                                                    End-to-End Placement Management
                                                </h3>
                                                <p
                                                    className={`text-base ${
                                                        mounted && resolvedTheme === 'dark'
                                                            ? 'text-gray-400'
                                                            : 'text-gray-600'
                                                    }`}
                                                >
                                                    Automate and streamline entire placement cycles, from drive scheduling to recruiter coordination and reporting.
                                                </p>
                                            </div>
                                        </div>

                                        {/* Digital Resume Banks */}
                                        <div className="flex items-start space-x-4">
                                            <div
                                                className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl ${
                                                    mounted && resolvedTheme === 'dark'
                                                        ? 'bg-green-500/20 text-green-400'
                                                        : 'bg-green-100 text-green-600'
                                                }`}
                                            >
                                                <Users className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h3
                                                    className={`text-xl font-semibold ${
                                                        mounted && resolvedTheme === 'dark'
                                                            ? 'text-gray-100'
                                                            : 'text-gray-900'
                                                    }`}
                                                >
                                                    Digital Resume Banks
                                                </h3>
                                                <p
                                                    className={`text-base ${
                                                        mounted && resolvedTheme === 'dark'
                                                            ? 'text-gray-400'
                                                            : 'text-gray-600'
                                                    }`}
                                                >
                                                    Centralized, searchable student profiles with eligibility tracking, skill badges, and placement analytics.
                                                </p>
                                            </div>
                                        </div>

                                        {/* Skill Assessment Tools */}
                                        <div className="flex items-start space-x-4">
                                            <div
                                                className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl ${
                                                    mounted && resolvedTheme === 'dark'
                                                        ? 'bg-yellow-500/20 text-yellow-400'
                                                        : 'bg-yellow-100 text-yellow-600'
                                                }`}
                                            >
                                                <LineChart className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h3
                                                    className={`text-xl font-semibold ${
                                                        mounted && resolvedTheme === 'dark'
                                                            ? 'text-gray-100'
                                                            : 'text-gray-900'
                                                    }`}
                                                >
                                                    AI-Powered Skill Assessments
                                                </h3>
                                                <p
                                                    className={`text-base ${
                                                        mounted && resolvedTheme === 'dark'
                                                            ? 'text-gray-400'
                                                            : 'text-gray-600'
                                                    }`}
                                                >
                                                    Comprehensive assessments with personalized learning paths to enhance student employability and readiness.
                                                </p>
                                            </div>
                                        </div>

                                        {/* Recruiter Access */}
                                        <div className="flex items-start space-x-4">
                                            <div
                                                className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl ${
                                                    mounted && resolvedTheme === 'dark'
                                                        ? 'bg-red-500/20 text-red-400'
                                                        : 'bg-red-100 text-red-600'
                                                }`}
                                            >
                                                <Handshake className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h3
                                                    className={`text-xl font-semibold ${
                                                        mounted && resolvedTheme === 'dark'
                                                            ? 'text-gray-100'
                                                            : 'text-gray-900'
                                                    }`}
                                                >
                                                    Direct Recruiter Connectivity
                                                </h3>
                                                <p
                                                    className={`text-base ${
                                                        mounted && resolvedTheme === 'dark'
                                                            ? 'text-gray-400'
                                                            : 'text-gray-600'
                                                    }`}
                                                >
                                                    Exclusive access to our corporate network, virtual drives, and HRTech resources to attract top employers.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Content - Image */}
                                <div className="order-1 lg:order-2 relative">
                                    <div className="rounded-3xl overflow-hidden shadow-2xl">
                                        <Image
                                            src="/university.jpg"
                                            alt="University campus excellence"
                                            width={600}
                                            height={500}
                                            className="w-full h-auto object-cover"
                                        />
                                    </div>
                                    <div
                                        className={`absolute -bottom-6 -left-6 w-32 h-32 rounded-full blur-3xl ${
                                            mounted && resolvedTheme === 'dark'
                                                ? 'bg-blue-500/30'
                                                : 'bg-blue-200/50'
                                        }`}
                                    ></div>
                                    <div
                                        className={`absolute -top-6 -right-6 w-40 h-40 rounded-full blur-3xl ${
                                            mounted && resolvedTheme === 'dark'
                                                ? 'bg-cyan-500/30'
                                                : 'bg-cyan-200/50'
                                        }`}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </main>

            <Footer />
        </div>
    );
};

export default ForUniversityPage;