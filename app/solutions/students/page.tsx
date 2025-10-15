"use client";

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import Navbar from '../../../components/layout/Navbar';
import Footer from '../../../components/layout/Footer';
import WavyBackground from '../../../components/layout/WavyBackground';
import { GraduationCap, Target, Users, Briefcase, Brain, AlertTriangle, ArrowRight } from 'lucide-react';

const ForStudentsPage: React.FC = () => {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    // A reusable list item component for the "Problem" section
    const ProblemListItem: React.FC<{ title: string; description: string }> = ({ title, description }) => (
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

    // A reusable feature card for the "Solution" section
    const SolutionFeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string; gradient: string }> = ({ icon, title, description, gradient }) => (
        <div className={`p-8 rounded-xl border shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group ${gradient}`}>
            <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 ${mounted && resolvedTheme === 'dark'
                ? 'bg-slate-800 group-hover:bg-slate-700'
                : 'bg-white/50 group-hover:bg-white/70'
                }`}>
                {icon}
            </div>
            <h3 className={`text-xl font-bold mb-3 ${mounted && resolvedTheme === 'dark' ? 'text-gray-100' : 'text-gray-900'
                }`}>{title}</h3>
            <p className={`leading-relaxed ${mounted && resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                {description}
            </p>
        </div>
    );

    return (
        <div className={`min-h-screen flex flex-col ${mounted && resolvedTheme === 'dark' ? 'bg-gray-900' : 'bg-white'
            }`}>
            <Navbar />

            <main className="flex-grow">
                <section className={`relative ${mounted && resolvedTheme === 'dark' ? 'bg-gray-900' : 'bg-white'
                    }`}>
                    {/* Wavy Background */}
                    <WavyBackground variant="primary" intensity="strong" />

                    {/* Section 1: The Impact (Your Dream Career Awaits) */}
                    <div className="relative content-container pt-20 pb-20">
                        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center min-h-[85vh]">
                            {/* Left Content */}
                            <div className="space-y-8 lg:space-y-10">
                                <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full ${mounted && resolvedTheme === 'dark'
                                    ? 'bg-blue-900/30 border border-blue-700/50'
                                    : 'bg-blue-100 border border-blue-200'
                                    }`}>
                                    <GraduationCap className={`w-4 h-4 ${mounted && resolvedTheme === 'dark' ? 'text-blue-400' : 'text-blue-700'}`} />
                                    <span className={`text-sm font-semibold ${mounted && resolvedTheme === 'dark' ? 'text-blue-400' : 'text-blue-700'}`}>For Students</span>
                                </div>

                                <div className="space-y-6">
                                    <h1 className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight ${mounted && resolvedTheme === 'dark' ? 'text-gray-100' : 'text-gray-900'
                                        }`}>
                                        Launch a Career You Love
                                        <span className={`block mt-2 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium ${mounted && resolvedTheme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'
                                            }`}>
                                            with High-Growth Companies
                                        </span>
                                    </h1>
                                </div>

                                <div className="space-y-4">
                                    <p className={`text-lg sm:text-xl leading-relaxed max-w-2xl ${mounted && resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                                        }`}>
                                        Imagine starting your career at a top company, equipped with the exact skills they need. HireKarma is your launchpad, connecting your academic knowledge to real-world success and placing you in roles where you can make a real impact from day one.
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
                                        alt="Students achieving success"
                                        width={600}
                                        height={500}
                                        className="w-full h-auto object-cover"
                                    />
                                </div>
                                <div className={`absolute -bottom-6 -left-6 w-32 h-32 rounded-full blur-3xl ${mounted && resolvedTheme === 'dark' ? 'bg-blue-500/30' : 'bg-blue-200/50'}`}></div>
                                <div className={`absolute -top-6 -right-6 w-40 h-40 rounded-full blur-3xl ${mounted && resolvedTheme === 'dark' ? 'bg-cyan-500/30' : 'bg-cyan-200/50'}`}></div>
                            </div>
                        </div>
                    </div>

                    {/* Section 2: The Problem (The Hurdles Students Face) */}
                    <div className="relative content-container py-20">
                        <div className="max-w-7xl mx-auto">
                            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                                {/* Left Side - Images */}
                                <div className="order-2 lg:order-1">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-4">
                                            <Image src="/university.jpg" alt="Campus life challenges" width={300} height={400} className="w-full h-64 object-cover rounded-xl shadow-lg" />
                                            <Image src="/corporate.jpg" alt="Corporate world demands" width={300} height={300} className="w-full h-48 object-cover rounded-xl shadow-lg" />
                                        </div>
                                        <div className="space-y-4 pt-8">
                                            <Image src="/demo.png" alt="Feeling lost in career choices" width={300} height={300} className="w-full h-48 object-cover rounded-xl shadow-lg" />
                                            <Image src="/students.jpg" alt="Student competition" width={300} height={400} className="w-full h-64 object-cover rounded-xl shadow-lg" />
                                        </div>
                                    </div>
                                </div>

                                {/* Right Side - Content */}
                                <div className="order-1 lg:order-2 space-y-10">
                                    <div>
                                        <h2 className={`text-3xl lg:text-4xl xl:text-5xl font-bold ${mounted && resolvedTheme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>
                                            The Campus-to-Career Gap
                                            <span className={`block mt-2 text-2xl lg:text-3xl font-medium ${mounted && resolvedTheme === 'dark' ? 'text-red-400' : 'text-red-600'}`}>
                                                Why Landing a Dream Job is Hard
                                            </span>
                                        </h2>
                                    </div>

                                    <div className="space-y-6">
                                        <ProblemListItem
                                            title="The Skill Mismatch"
                                            description="Academic courses often don't teach the specific, practical skills that top companies are hiring for right now."
                                        />
                                        <ProblemListItem
                                            title="Limited Industry Access"
                                            description="Students from non-metro colleges lack equal access to top-tier employers and networking opportunities."
                                        />
                                        <ProblemListItem
                                            title="Fierce Competition"
                                            description="Your resume is one in a thousand, making it nearly impossible to stand out and get noticed by recruiters."
                                        />
                                        <ProblemListItem
                                            title="Unclear Career Path"
                                            description="Without proper guidance, it's hard to know which roles fit your skills or how to prepare for them effectively."
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section 3: The Solution (How HireKarma Bridges the Gap) */}
                    {/* Section 3: The Solution (How HireKarma Bridges the Gap) */}
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
                                            HireKarma Soluation
                                        </h2>
                                    </div>

                                    {/* Solution List */}
                                    <div className="space-y-6">
                                        {/* Skill Training */}
                                        <div className="flex items-start space-x-4">
                                            <div
                                                className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl ${mounted && resolvedTheme === 'dark'
                                                        ? 'bg-blue-500/20 text-blue-400'
                                                        : 'bg-blue-100 text-blue-600'
                                                    }`}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="w-6 h-6"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M12 14l9-5-9-5-9 5 9 5z"
                                                    />
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M12 14l6.16-3.422A12.083 12.083 0 0112 21.5 12.083 12.083 0 015.84 10.578L12 14z"
                                                    />
                                                </svg>
                                            </div>
                                            <div>
                                                <h3
                                                    className={`text-xl font-semibold ${mounted && resolvedTheme === 'dark'
                                                            ? 'text-gray-100'
                                                            : 'text-gray-900'
                                                        }`}
                                                >
                                                    Real-World Skill Training
                                                </h3>
                                                <p
                                                    className={`text-base ${mounted && resolvedTheme === 'dark'
                                                            ? 'text-gray-400'
                                                            : 'text-gray-600'
                                                        }`}
                                                >
                                                    Learn practical skills directly aligned with the latest industry demands through guided training and live projects.
                                                </p>
                                            </div>
                                        </div>

                                        {/* Direct Industry Connect */}
                                        <div className="flex items-start space-x-4">
                                            <div
                                                className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl ${mounted && resolvedTheme === 'dark'
                                                        ? 'bg-green-500/20 text-green-400'
                                                        : 'bg-green-100 text-green-600'
                                                    }`}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="w-6 h-6"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M13 10V3L4 14h7v7l9-11h-7z"
                                                    />
                                                </svg>
                                            </div>
                                            <div>
                                                <h3
                                                    className={`text-xl font-semibold ${mounted && resolvedTheme === 'dark'
                                                            ? 'text-gray-100'
                                                            : 'text-gray-900'
                                                        }`}
                                                >
                                                    Direct Industry Connect
                                                </h3>
                                                <p
                                                    className={`text-base ${mounted && resolvedTheme === 'dark'
                                                            ? 'text-gray-400'
                                                            : 'text-gray-600'
                                                        }`}
                                                >
                                                    Gain exposure to hiring managers and top recruiters through our company partnerships and job placement drives.
                                                </p>
                                            </div>
                                        </div>

                                        {/* Career Mentorship */}
                                        <div className="flex items-start space-x-4">
                                            <div
                                                className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl ${mounted && resolvedTheme === 'dark'
                                                        ? 'bg-yellow-500/20 text-yellow-400'
                                                        : 'bg-yellow-100 text-yellow-600'
                                                    }`}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="w-6 h-6"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M12 8v4l3 3"
                                                    />
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M12 4a8 8 0 100 16 8 8 0 000-16z"
                                                    />
                                                </svg>
                                            </div>
                                            <div>
                                                <h3
                                                    className={`text-xl font-semibold ${mounted && resolvedTheme === 'dark'
                                                            ? 'text-gray-100'
                                                            : 'text-gray-900'
                                                        }`}
                                                >
                                                    Personalized Career Mentorship
                                                </h3>
                                                <p
                                                    className={`text-base ${mounted && resolvedTheme === 'dark'
                                                            ? 'text-gray-400'
                                                            : 'text-gray-600'
                                                        }`}
                                                >
                                                    Receive one-on-one mentorship from industry experts to guide your career path and build your professional confidence.
                                                </p>
                                            </div>
                                        </div>

                                        {/* Interview Preparation */}
                                        <div className="flex items-start space-x-4">
                                            <div
                                                className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl ${mounted && resolvedTheme === 'dark'
                                                        ? 'bg-red-500/20 text-red-400'
                                                        : 'bg-red-100 text-red-600'
                                                    }`}
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="w-6 h-6"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M5 13l4 4L19 7"
                                                    />
                                                </svg>
                                            </div>
                                            <div>
                                                <h3
                                                    className={`text-xl font-semibold ${mounted && resolvedTheme === 'dark'
                                                            ? 'text-gray-100'
                                                            : 'text-gray-900'
                                                        }`}
                                                >
                                                    Interview & Resume Mastery
                                                </h3>
                                                <p
                                                    className={`text-base ${mounted && resolvedTheme === 'dark'
                                                            ? 'text-gray-400'
                                                            : 'text-gray-600'
                                                        }`}
                                                >
                                                    Master resume building, personal branding, and mock interview preparation to stand out confidently before recruiters.
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
                                            alt="Students achieving success"
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

export default ForStudentsPage;