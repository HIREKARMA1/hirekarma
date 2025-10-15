"use client";

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Navbar from '../../../components/layout/Navbar';
import Footer from '../../../components/layout/Footer';
import WavyBackground from '../../../components/layout/WavyBackground';
import { Award, Target, Users, TrendingUp, BookOpen, Zap, BarChart3, AlertTriangle } from 'lucide-react';

const ForSkillDevelopmentPage: React.FC = () => {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    // A reusable list item component for the "Challenges" section
    const ChallengeListItem: React.FC<{ title: string; description: string }> = ({ title, description }) => (
        <div className="flex items-start gap-4">
            <div className={`w-12 h-12 rounded-lg flex-shrink-0 flex items-center justify-center mt-1 ${mounted && resolvedTheme === 'dark'
                    ? 'bg-red-900/30'
                    : 'bg-red-100'
                }`}>
                <AlertTriangle className={`w-6 h-6 ${mounted && resolvedTheme === 'dark' ? 'text-red-400' : 'text-red-600'
                    }`} />
            </div>
            <div>
                <h3 className={`text-lg font-bold ${mounted && resolvedTheme === 'dark' ? 'text-gray-100' : 'text-gray-900'
                    }`}>{title}</h3>
                <p className={`${mounted && resolvedTheme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>{description}</p>
            </div>
        </div>
    );

    return (
        <div className={`min-h-screen flex flex-col transition-all duration-500 ${mounted && resolvedTheme === 'dark' ? 'bg-gray-900' : 'bg-white'
            }`}>
            <Navbar />

            <main className="flex-grow">
                <section className={`relative transition-all duration-500 ${mounted && resolvedTheme === 'dark' ? 'bg-gray-900' : 'bg-white'
                    }`}>
                    {/* Wavy Background */}
                    <WavyBackground variant="primary" intensity="strong" />

                    {/* Section 1: The Impact (Drive Impactful Upskilling) */}
                    <div className="relative content-container pt-20 pb-20">
                        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center min-h-[85vh]">
                            {/* Left Content */}
                            <div className="space-y-8 lg:space-y-10">
                                <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full ${mounted && resolvedTheme === 'dark'
                                        ? 'bg-blue-900/30 border border-blue-700/50'
                                        : 'bg-blue-100 border border-blue-200'
                                    }`}>
                                    <Award className={`w-4 h-4 ${mounted && resolvedTheme === 'dark' ? 'text-blue-400' : 'text-blue-700'
                                        }`} />
                                    <span className={`text-sm font-semibold ${mounted && resolvedTheme === 'dark' ? 'text-blue-400' : 'text-blue-700'
                                        }`}>For Skill Development Organizations</span>
                                </div>

                                <div className="space-y-6">
                                    <h1 className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight ${mounted && resolvedTheme === 'dark' ? 'text-gray-100' : 'text-gray-900'
                                        }`}>
                                        Drive Impactful Upskilling
                                        <span className={`block mt-2 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium ${mounted && resolvedTheme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'
                                            }`}>
                                            and Employability
                                        </span>
                                    </h1>
                                </div>

                                <div className="space-y-4">
                                    <p className={`text-lg sm:text-xl leading-relaxed max-w-2xl ${mounted && resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                                        }`}>
                                        HireKarma equips skilling centers and development organizations with <strong className={`${mounted && resolvedTheme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                                            }`}>technology to maximize training impact</strong>, track student outcomes, and connect participants to real
                                        hiring opportunities. Our scalable, modular platform integrates <strong className={`${mounted && resolvedTheme === 'dark' ? 'text-gray-200' : 'text-gray-700'
                                            }`}>learning, skill validation, and employer connections</strong> to ensure programs deliver measurable career transitions.
                                    </p>
                                </div>

                                <div className="flex items-center gap-4">
                                    <button className={`px-8 py-4 font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 ${mounted && resolvedTheme === 'dark'
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
                                        src="/students.jpg"
                                        alt="Skill development success"
                                        width={600}
                                        height={500}
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                                <div className={`absolute -bottom-6 -left-6 w-32 h-32 rounded-full blur-3xl ${mounted && resolvedTheme === 'dark' ? 'bg-blue-500/30' : 'bg-blue-200/50'
                                    }`}></div>
                                <div className={`absolute -top-6 -right-6 w-40 h-40 rounded-full blur-3xl ${mounted && resolvedTheme === 'dark' ? 'bg-cyan-500/30' : 'bg-cyan-200/50'
                                    }`}></div>
                            </div>
                        </div>
                    </div>

                    {/* Section 2: The Challenges (The Hurdles Skill Development Organizations Face) */}
                    <div className="relative content-container py-20">
                        <div className="max-w-7xl mx-auto">
                            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                                {/* Left Side - Images */}
                                <div className="order-2 lg:order-1">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-4">
                                            <Image src="/university.jpg" alt="Training infrastructure challenges" width={300} height={400} className="w-full h-64 object-cover rounded-xl shadow-lg" />
                                            <Image src="/corporate.jpg" alt="Industry alignment issues" width={300} height={300} className="w-full h-48 object-cover rounded-xl shadow-lg" />
                                        </div>
                                        <div className="space-y-4 pt-8">
                                            <Image src="/demo.png" alt="Tracking and assessment gaps" width={300} height={300} className="w-full h-48 object-cover rounded-xl shadow-lg" />
                                            <Image src="/students.jpg" alt="Participant employability barriers" width={300} height={400} className="w-full h-64 object-cover rounded-xl shadow-lg" />
                                        </div>
                                    </div>
                                </div>

                                {/* Right Side - Content */}
                                <div className="order-1 lg:order-2 space-y-10">
                                    <div>
                                        <h2 className={`text-3xl lg:text-4xl xl:text-5xl font-bold ${mounted && resolvedTheme === 'dark' ? 'text-gray-100' : 'text-gray-900'
                                            }`}>
                                            Skill Development
                                            <span className={`block mt-2 text-2xl lg:text-3xl font-medium ${mounted && resolvedTheme === 'dark' ? 'text-red-400' : 'text-red-600'
                                                }`}>
                                                Why Enhancing Employability is Challenging
                                            </span>
                                        </h2>
                                    </div>

                                    <div className="space-y-6">
                                        <ChallengeListItem
                                            title="Skills Mismatch with Industry Needs"
                                            description="Training programs often fail to align with evolving industry demands, resulting in graduates who lack the practical, job-ready competencies required by employers."
                                        />
                                        <ChallengeListItem
                                            title="Inadequate Infrastructure and Access"
                                            description="Limited training facilities, especially in rural or underserved areas, combined with language barriers and cultural norms, restrict participation and program reach."
                                        />
                                        <ChallengeListItem
                                            title="Weak Career Guidance and Tracking"
                                            description="Absence of robust systems for monitoring participant progress, providing personalized guidance, and measuring long-term employability outcomes hinders program effectiveness."
                                        />
                                        <ChallengeListItem
                                            title="Limited Employer Linkages"
                                            description="Insufficient connections to hiring partners and outdated curricula lead to low placement rates, perpetuating the gap between skill acquisition and actual job opportunities."
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
                                            className={`text-3xl lg:text-4xl xl:text-5xl font-bold ${mounted && resolvedTheme === 'dark'
                                                    ? 'text-gray-100'
                                                    : 'text-gray-900'
                                                }`}
                                        >
                                            HireKarma Solution
                                        </h2>
                                    </div>

                                    {/* Solution List */}
                                    <div className="space-y-6">
                                        {/* AI Assessments */}
                                        <div className="flex items-start space-x-4">
                                            <div
                                                className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl ${mounted && resolvedTheme === 'dark'
                                                        ? 'bg-blue-500/20 text-blue-400'
                                                        : 'bg-blue-100 text-blue-600'
                                                    }`}
                                            >
                                                <Target className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h3
                                                    className={`text-xl font-semibold ${mounted && resolvedTheme === 'dark'
                                                            ? 'text-gray-100'
                                                            : 'text-gray-900'
                                                        }`}
                                                >
                                                    AI-Powered Skill Assessments
                                                </h3>
                                                <p
                                                    className={`text-base ${mounted && resolvedTheme === 'dark'
                                                            ? 'text-gray-400'
                                                            : 'text-gray-600'
                                                        }`}
                                                >
                                                    Identify skill gaps through intelligent assessments and provide personalized learning paths to bridge mismatches with industry requirements.
                                                </p>
                                            </div>
                                        </div>

                                        {/* Participant Tracking */}
                                        <div className="flex items-start space-x-4">
                                            <div
                                                className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl ${mounted && resolvedTheme === 'dark'
                                                        ? 'bg-green-500/20 text-green-400'
                                                        : 'bg-green-100 text-green-600'
                                                    }`}
                                            >
                                                <BookOpen className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h3
                                                    className={`text-xl font-semibold ${mounted && resolvedTheme === 'dark'
                                                            ? 'text-gray-100'
                                                            : 'text-gray-900'
                                                        }`}
                                                >
                                                    Comprehensive Participant Tracking
                                                </h3>
                                                <p
                                                    className={`text-base ${mounted && resolvedTheme === 'dark'
                                                            ? 'text-gray-400'
                                                            : 'text-gray-600'
                                                        }`}
                                                >
                                                    Digital onboarding, progress monitoring, and credentialing to ensure accessibility and effective guidance for all participants, including underserved communities.
                                                </p>
                                            </div>
                                        </div>

                                        {/* Employer Partnerships */}
                                        <div className="flex items-start space-x-4">
                                            <div
                                                className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl ${mounted && resolvedTheme === 'dark'
                                                        ? 'bg-yellow-500/20 text-yellow-400'
                                                        : 'bg-yellow-100 text-yellow-600'
                                                    }`}
                                            >
                                                <Users className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h3
                                                    className={`text-xl font-semibold ${mounted && resolvedTheme === 'dark'
                                                            ? 'text-gray-100'
                                                            : 'text-gray-900'
                                                        }`}
                                                >
                                                    Direct Employer Partnerships
                                                </h3>
                                                <p
                                                    className={`text-base ${mounted && resolvedTheme === 'dark'
                                                            ? 'text-gray-400'
                                                            : 'text-gray-600'
                                                        }`}
                                                >
                                                    Forge strong linkages with top companies for internships, placements, and real-world projects, boosting employability and career transitions.
                                                </p>
                                            </div>
                                        </div>

                                        {/* Impact Dashboards */}
                                        <div className="flex items-start space-x-4">
                                            <div
                                                className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl ${mounted && resolvedTheme === 'dark'
                                                        ? 'bg-red-500/20 text-red-400'
                                                        : 'bg-red-100 text-red-600'
                                                    }`}
                                            >
                                                <BarChart3 className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h3
                                                    className={`text-xl font-semibold ${mounted && resolvedTheme === 'dark'
                                                            ? 'text-gray-100'
                                                            : 'text-gray-900'
                                                        }`}
                                                >
                                                    Real-Time Impact Dashboards
                                                </h3>
                                                <p
                                                    className={`text-base ${mounted && resolvedTheme === 'dark'
                                                            ? 'text-gray-400'
                                                            : 'text-gray-600'
                                                        }`}
                                                >
                                                    Analytics-driven reporting on outcomes, ROI, and trends to demonstrate value to stakeholders and refine programs for maximum impact.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Content - Image */}
                                <div className="order-1 lg:order-2 relative">
                                    <div className="rounded-3xl overflow-hidden shadow-2xl">
                                        <Image
                                            src="/students.jpg"
                                            alt="Skill development success"
                                            width={600}
                                            height={500}
                                            className="w-full h-auto object-cover"
                                        />
                                    </div>
                                    <div
                                        className={`absolute -bottom-6 -left-6 w-32 h-32 rounded-full blur-3xl ${mounted && resolvedTheme === 'dark'
                                                ? 'bg-blue-500/30'
                                                : 'bg-blue-200/50'
                                            }`}
                                    ></div>
                                    <div
                                        className={`absolute -top-6 -right-6 w-40 h-40 rounded-full blur-3xl ${mounted && resolvedTheme === 'dark'
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

export default ForSkillDevelopmentPage;