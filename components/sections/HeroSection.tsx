"use client";

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import WavyBackground from '../layout/WavyBackground';
import companyData from '../../data/company.json';
import corporateData from '../../data/corporate.json';
import testimonialsData from '../../data/testimonial.json';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import University from '../../data/corporate.json'
import Compine from "../../data/company.json"


// Certifications Data - Recognition and certificates
const certificationsData = [
    {
        name: "DPIIT Recognized",
        logo: "/DPIIT.png",
        description: "Department for Promotion of Industry and Internal Trade",
        category: "Government"
    },
    {
        name: "ISO Certified",
        logo: "/iso.png",
        description: "International Organization for Standardization",
        category: "Quality"
    },
    {
        name: "MSME Registered",
        logo: "/MSME.png",
        description: "Ministry of Micro, Small and Medium Enterprises",
        category: "Registration"
    },
    {
        name: "Startup Odisha",
        logo: "/StartupOdisha.png",
        description: "Startup Odisha Initiative",
        category: "Startup"
    },
    {
        name: "NASSCOM",
        logo: "/nasscome.png",
        description: "National Association of Software and Service Companies",
        category: "Technology"
    }
];

// Example data for the chart
const impactData = [
    { year: '2023', value: 0 },
    { year: '2024', value: 8000 },
    { year: '2025', value: 14000 },
    { year: '2026', value: "Comming Soon" },
    { year: '2027', value: "Comming Soon" },
    { year: '2028', value: "Comming Soon" },
    { year: '2029', value: "Comming Soon" },
    { year: '2030', value: "Comming Soon" },
    { year: '2031', value: "Comming Soon" },
];


const HeroSection: React.FC = () => {
    const [mounted, setMounted] = useState(false);
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);
    const { resolvedTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleFAQ = (index: number) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };

    return (
        <section className={`relative min-h-screen transition-all duration-500 ${mounted && resolvedTheme === 'dark'
            ? 'bg-gray-900'
            : 'bg-white'
            }`}>
            {/* Wavy Background */}
            <WavyBackground variant="primary" intensity="medium" />

            <div className="relative content-container pt-20 pb-20">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[85vh]">

                    {/* Left Content - Clean and Modern */}
                    <div className="space-y-8 lg:space-y-10">
                        {/* Main Heading */}
                        <div className="space-y-6">
                            <h1 className={`text-2xl sm:text-4xl lg:text-4xl xl:text-6xl font-bold leading-tight tracking-tight transition-colors duration-500 ${mounted && resolvedTheme === 'dark'
                                ? 'text-gray-100'
                                : 'text-gray-900'
                                }`}>
                                Transforming Campus Hiring
                                <span className={`block mt-2 text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-medium transition-colors duration-500 ${mounted && resolvedTheme === 'dark'
                                    ? 'text-cyan-400'
                                    : 'text-cyan-600'
                                    }`}>
                                    with AI, Automation, and Analytics
                                </span>
                            </h1>
                        </div>

                        {/* Paragraph */}
                        <div className="space-y-4">
                            <p className={`text-lg sm:text-xl leading-relaxed max-w-2xl transition-colors duration-500 ${mounted && resolvedTheme === 'dark'
                                ? 'text-gray-300'
                                : 'text-gray-600'
                                }`}>
                                With tailored skill development, real-time dashboards, and a network of top government and private colleges, HireKarma transforms the way education aligns with industry needs. Join the hundreds of institutions and organizations already accelerating their recruitment success with HireKarma
                            </p>
                        </div>

                        {/* Single CTA Button
                        <div className="pt-4">
                            <a
                                href="#partner"
                                className={`inline-flex items-center px-8 py-4 font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 ${mounted && resolvedTheme === 'dark'
                                    ? 'bg-cyan-600 text-white hover:bg-cyan-700'
                                    : 'bg-blue-600 text-white hover:bg-blue-700'
                                    }`}
                            >
                                <span>Get Started</span>
                                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </a>
                        </div> */}
                    </div>

                    {/* Right Content - Hero GIF */}
                    <div className="relative">
                        {/* Hero GIF */}
                        <div className="relative w-full h-[450px] lg:h-[450]">
                            <img
                                src="https://hirekarma.s3.us-east-1.amazonaws.com/hirekarma_ui/home_ui/Heroimage.gif"
                                alt="Hero animation"
                                className="w-full h-full object-cover rounded-2xl"
                            />
                            {/* Fallback content for browsers that don't support images (rare, but kept for structure) */}
                            <div className={`absolute inset-0 flex items-center justify-center rounded-2xl hidden ${mounted && resolvedTheme === 'dark'
                                ? 'bg-gray-900/50 backdrop-blur-sm'
                                : 'bg-white/50 backdrop-blur-sm'
                                }`}>
                                <div className="text-center space-y-4">
                                    <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center ${mounted && resolvedTheme === 'dark'
                                        ? 'bg-gray-700/80'
                                        : 'bg-gray-200/80'
                                        }`}>
                                        <svg className={`w-8 h-8 ${mounted && resolvedTheme === 'dark'
                                            ? 'text-gray-300'
                                            : 'text-gray-500'
                                            }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <p className={`font-medium ${mounted && resolvedTheme === 'dark'
                                        ? 'text-gray-200'
                                        : 'text-gray-600'
                                        }`}>Animation not supported</p>
                                    <p className={`text-sm ${mounted && resolvedTheme === 'dark'
                                        ? 'text-gray-300'
                                        : 'text-gray-500'
                                        }`}>Your browser doesn't support image playback</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Impact Section */}
            <div className="relative content-container py-20">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left Content - Statistics */}
                    <div className="space-y-8 lg:space-y-10">
                        {/* Section Header */}
                        <div className="space-y-6">
                            <h2 className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight ${mounted && resolvedTheme === 'dark'
                                ? 'text-gray-100'
                                : 'text-gray-900'
                                }`}>
                                Our Impact in Numbers
                                <span className={`block mt-2 text-lg sm:text-xl lg:text-2xl xl:text-3xl font-medium ${mounted && resolvedTheme === 'dark'
                                    ? 'text-cyan-400'
                                    : 'text-cyan-600'
                                    }`}>
                                    Transforming Campus Hiring
                                </span>
                            </h2>
                        </div>

                        {/* Paragraph */}
                        <div className="space-y-4">
                            <p className={`text-lg sm:text-xl leading-relaxed max-w-2xl ${mounted && resolvedTheme === 'dark'
                                ? 'text-gray-300'
                                : 'text-gray-600'
                                }`}>
                                HireKarma delivers <strong className={`${mounted && resolvedTheme === 'dark'
                                    ? 'text-gray-200'
                                    : 'text-gray-700'
                                    }`}>measurable results</strong> and <strong className={`${mounted && resolvedTheme === 'dark'
                                        ? 'text-gray-200'
                                        : 'text-gray-700'
                                        }`}>lasting impact</strong> across India's educational ecosystem.
                            </p>
                        </div>

                        {/* Main Statistics Header */}
                        <div className="space-y-4">
                            <div className="relative">
                                <h2 className={`text-5xl sm:text-5xl lg:text-5xl font-bold leading-tight tracking-tight ${mounted && resolvedTheme === 'dark'
                                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500'
                                    : 'text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600'
                                    }`}>
                                    200K+
                                </h2>
                                {/* Glow effect */}
                                <div className={`absolute inset-0 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight blur-sm opacity-30 ${mounted && resolvedTheme === 'dark'
                                    ? 'text-green-400'
                                    : 'text-green-600'
                                    }`}>
                                    200K+
                                </div>
                            </div>
                            <p className={`text-lg sm:text-l font-semibold ${mounted && resolvedTheme === 'dark'
                                ? 'text-gray-200'
                                : 'text-gray-700'
                                }`}>
                                Student Impacted
                            </p>
                        </div>

                        {/* Statistics Grid */}
                        <div className="grid grid-cols-2 gap-4 lg:gap-6 max-w-lg">
                            {/* Row 1 */}
                            <div className={`p-4 rounded-xl border transition-all duration-500 hover:scale-105 ${mounted && resolvedTheme === 'dark'
                                ? 'bg-gradient-to-br from-blue-900/20 to-blue-800/10 border-blue-700/30 hover:border-blue-600/50'
                                : 'bg-gradient-to-br from-blue-50 to-blue-100/50 border-blue-200 hover:border-blue-300'
                                }`}>
                                <div className="space-y-2">
                                    <div className={`text-2xl sm:text-3xl font-bold ${mounted && resolvedTheme === 'dark'
                                        ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400'
                                        : 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600'
                                        }`}>
                                        80+
                                    </div>
                                    <div className={`text-xs sm:text-sm font-semibold text-right ${mounted && resolvedTheme === 'dark'
                                        ? 'text-gray-300'
                                        : 'text-gray-700'
                                        }`}>
                                        Trusted Colleges
                                    </div>
                                </div>
                            </div>

                            <div className={`p-4 rounded-xl border transition-all duration-500 hover:scale-105 ${mounted && resolvedTheme === 'dark'
                                ? 'bg-gradient-to-br from-purple-900/20 to-purple-800/10 border-purple-700/30 hover:border-purple-600/50'
                                : 'bg-gradient-to-br from-purple-50 to-purple-100/50 border-purple-200 hover:border-purple-300'
                                }`}>
                                <div className="space-y-2">
                                    <div className={`text-2xl sm:text-3xl font-bold ${mounted && resolvedTheme === 'dark'
                                        ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-yellow-400'
                                        : 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-yellow-600'
                                        }`}>
                                        950+
                                    </div>
                                    <div className={`text-xs sm:text-sm font-semibold text-left ${mounted && resolvedTheme === 'dark'
                                        ? 'text-gray-300'
                                        : 'text-gray-700'
                                        }`}>
                                        Partnered Companies
                                    </div>
                                </div>
                            </div>

                            {/* Row 2 */}
                            <div className={`p-4 rounded-xl border transition-all duration-500 hover:scale-105 ${mounted && resolvedTheme === 'dark'
                                ? 'bg-gradient-to-br from-orange-900/20 to-orange-800/10 border-orange-700/30 hover:border-orange-600/50'
                                : 'bg-gradient-to-br from-orange-50 to-orange-100/50 border-orange-200 hover:border-orange-300'
                                }`}>
                                <div className="space-y-2">
                                    <div className={`text-2xl sm:text-3xl font-bold ${mounted && resolvedTheme === 'dark'
                                        ? 'text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400'
                                        : 'text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600'
                                        }`}>
                                        7k+
                                    </div>
                                    <div className={`text-xs sm:text-sm font-semibold text-right ${mounted && resolvedTheme === 'dark'
                                        ? 'text-gray-300'
                                        : 'text-gray-700'
                                        }`}>
                                        Campus Drives Conducted
                                    </div>
                                </div>
                            </div>

                            <div className={`p-4 rounded-xl border transition-all duration-500 hover:scale-105 ${mounted && resolvedTheme === 'dark'
                                ? 'bg-gradient-to-br from-emerald-900/20 to-emerald-800/10 border-emerald-700/30 hover:border-emerald-600/50'
                                : 'bg-gradient-to-br from-emerald-50 to-emerald-100/50 border-emerald-200 hover:border-emerald-300'
                                }`}>
                                <div className="space-y-2">
                                    <div className={`text-2xl sm:text-3xl font-bold ${mounted && resolvedTheme === 'dark'
                                        ? 'text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400'
                                        : 'text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600'
                                        }`}>
                                        22K+
                                    </div>
                                    <div className={`text-xs sm:text-sm font-semibold text-left ${mounted && resolvedTheme === 'dark'
                                        ? 'text-gray-300'
                                        : 'text-gray-700'
                                        }`}>
                                        Students Placed
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Bar Chart */}
                    <div className="relative">
                        <div className={`relative w-full h-[450px] lg:h-[500px] border overflow-hidden ${mounted && resolvedTheme === 'dark'
                            ? 'bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900 border-gray-600'
                            : 'bg-gradient-to-br from-gray-50 via-white to-gray-100 border-gray-200'
                            }`}>
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={impactData} margin={{ top: 40, right: 40, left: 20, bottom: 40 }}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="year" />
                                    <YAxis />
                                    <Tooltip />
                                    <Bar dataKey="value" fill="#06b6d4">
                                        {impactData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={mounted && resolvedTheme === 'dark' ? '#06b6d4' : '#0891b2'} />
                                        ))}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </div>

            {/* Problem Statement Section */}
            <div className="relative content-container py-20">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left Content - Problem Statement */}
                    <div className="space-y-8 lg:space-y-10">
                        {/* Section Header */}
                        <div className="space-y-6">
                            <h2 className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight ${mounted && resolvedTheme === 'dark'
                                ? 'text-gray-100'
                                : 'text-gray-900'
                                }`}>
                                The Problem We Solve
                                <span className={`block mt-2 text-lg sm:text-xl lg:text-2xl xl:text-3xl font-medium ${mounted && resolvedTheme === 'dark'
                                    ? 'text-red-400'
                                    : 'text-red-600'
                                    }`}>
                                    Campus Hiring Challenges
                                </span>
                            </h2>
                        </div>

                        {/* Paragraph */}
                        <div className="space-y-4">
                            <p className={`text-lg sm:text-xl leading-relaxed max-w-2xl ${mounted && resolvedTheme === 'dark'
                                ? 'text-gray-300'
                                : 'text-gray-600'
                                }`}>
                                Traditional campus hiring processes are <strong className={`${mounted && resolvedTheme === 'dark'
                                    ? 'text-gray-200'
                                    : 'text-gray-700'
                                    }`}>time-consuming</strong>, <strong className={`${mounted && resolvedTheme === 'dark'
                                        ? 'text-gray-200'
                                        : 'text-gray-700'
                                        }`}>inefficient</strong>, and often result in <strong className={`${mounted && resolvedTheme === 'dark'
                                            ? 'text-gray-200'
                                            : 'text-gray-700'
                                            }`}>poor matches</strong> between students and companies.
                            </p>
                            <p className={`text-lg sm:text-xl leading-relaxed max-w-2xl ${mounted && resolvedTheme === 'dark'
                                ? 'text-gray-300'
                                : 'text-gray-600'
                                }`}>
                                Colleges struggle with <strong className={`${mounted && resolvedTheme === 'dark'
                                    ? 'text-gray-200'
                                    : 'text-gray-700'
                                    }`}>manual coordination</strong>, <strong className={`${mounted && resolvedTheme === 'dark'
                                        ? 'text-gray-200'
                                        : 'text-gray-700'
                                        }`}>lack of data insights</strong>, and <strong className={`${mounted && resolvedTheme === 'dark'
                                            ? 'text-gray-200'
                                            : 'text-gray-700'
                                            }`}>limited reach</strong> to quality employers.
                            </p>
                        </div>
                    </div>

                    {/* Right Content - GIF Placeholder */}
                    <div className="relative">
                        <div className={`relative w-full h-[500px] lg:h-[600px] rounded-3xl border overflow-hidden shadow-2xl ${mounted && resolvedTheme === 'dark'
                            ? 'bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900 border-gray-600'
                            : 'bg-gradient-to-br from-gray-50 via-white to-gray-100 border-gray-200'
                            }`}>
                            {/* Animated background pattern */}
                            <div className="absolute inset-0 opacity-5">
                                <div className="w-full h-full" style={{
                                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='${mounted && resolvedTheme === 'dark' ? '%23ffffff' : '%23000000'
                                        }' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                                    backgroundRepeat: 'repeat'
                                }}></div>
                            </div>

                            {/* Placeholder content */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center space-y-6">
                                    <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center ${mounted && resolvedTheme === 'dark'
                                        ? 'bg-gradient-to-br from-red-600 to-orange-600'
                                        : 'bg-gradient-to-br from-red-500 to-orange-500'
                                        }`}>
                                        <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                                        </svg>
                                    </div>
                                    <div className="space-y-2">
                                        <p className={`font-semibold text-lg ${mounted && resolvedTheme === 'dark'
                                            ? 'text-gray-200'
                                            : 'text-gray-700'
                                            }`}>Problem Visualization</p>
                                        <p className={`text-sm max-w-xs mx-auto ${mounted && resolvedTheme === 'dark'
                                            ? 'text-gray-400'
                                            : 'text-gray-500'
                                            }`}>Interactive GIF or video showcasing campus hiring challenges will be displayed here</p>
                                    </div>
                                </div>
                            </div>

                            {/* Enhanced decorative elements with animations */}
                            <div className={`absolute top-12 right-12 w-16 h-16 rounded-full animate-pulse ${mounted && resolvedTheme === 'dark'
                                ? 'bg-gradient-to-r from-red-500/30 to-orange-500/30'
                                : 'bg-gradient-to-r from-red-400/20 to-orange-400/20'
                                }`}></div>
                            <div className={`absolute bottom-12 left-12 w-12 h-12 rounded-full animate-pulse delay-1000 ${mounted && resolvedTheme === 'dark'
                                ? 'bg-gradient-to-r from-yellow-500/30 to-red-500/30'
                                : 'bg-gradient-to-r from-yellow-400/20 to-red-400/20'
                                }`}></div>
                            <div className={`absolute top-1/3 right-8 w-8 h-8 rounded-full animate-pulse delay-500 ${mounted && resolvedTheme === 'dark'
                                ? 'bg-gradient-to-r from-orange-500/30 to-red-500/30'
                                : 'bg-gradient-to-r from-orange-400/20 to-red-400/20'
                                }`}></div>
                            <div className={`absolute bottom-1/3 left-8 w-10 h-10 rounded-full animate-pulse delay-700 ${mounted && resolvedTheme === 'dark'
                                ? 'bg-gradient-to-r from-red-500/30 to-pink-500/30'
                                : 'bg-gradient-to-r from-red-400/20 to-pink-400/20'
                                }`}></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Future Ready Implementation Section */}
            <div className="relative content-container py-20">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left Content - Future Ready Implementation */}
                    <div className="space-y-8 lg:space-y-10">
                        {/* Section Header */}
                        <div className="space-y-6">
                            <h2 className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight ${mounted && resolvedTheme === 'dark'
                                ? 'text-gray-100'
                                : 'text-gray-900'
                                }`}>
                                Future-Ready Implementation
                                <span className={`block mt-2 text-lg sm:text-xl lg:text-2xl xl:text-3xl font-medium ${mounted && resolvedTheme === 'dark'
                                    ? 'text-emerald-400'
                                    : 'text-emerald-600'
                                    }`}>
                                    Next-Gen Campus Solutions
                                </span>
                            </h2>
                        </div>

                        {/* Paragraph */}
                        <div className="space-y-4">
                            <p className={`text-lg sm:text-xl leading-relaxed max-w-2xl ${mounted && resolvedTheme === 'dark'
                                ? 'text-gray-300'
                                : 'text-gray-600'
                                }`}>
                                Our platform is built with <strong className={`${mounted && resolvedTheme === 'dark'
                                    ? 'text-gray-200'
                                    : 'text-gray-700'
                                    }`}>cutting-edge technology</strong> and <strong className={`${mounted && resolvedTheme === 'dark'
                                        ? 'text-gray-200'
                                        : 'text-gray-700'
                                        }`}>scalable architecture</strong> to meet the evolving needs of modern campus recruitment.
                            </p>
                            <p className={`text-lg sm:text-xl leading-relaxed max-w-2xl ${mounted && resolvedTheme === 'dark'
                                ? 'text-gray-300'
                                : 'text-gray-600'
                                }`}>
                                From <strong className={`${mounted && resolvedTheme === 'dark'
                                    ? 'text-gray-200'
                                    : 'text-gray-700'
                                    }`}>AI-powered matching</strong> to <strong className={`${mounted && resolvedTheme === 'dark'
                                        ? 'text-gray-200'
                                        : 'text-gray-700'
                                        }`}>real-time analytics</strong>, we provide institutions with the tools they need to stay ahead in the digital transformation era.
                            </p>
                        </div>

                        {/* Read More Button */}
                        <div className="pt-4">
                            <a
                                href="/about-us/our-story"
                                className={`inline-flex items-center px-6 py-3 font-semibold rounded-lg transition-all duration-200 border-2 hover:shadow-lg transform hover:-translate-y-0.5 ${mounted && resolvedTheme === 'dark'
                                    ? 'border-emerald-600 text-emerald-400 hover:bg-emerald-600 hover:text-white'
                                    : 'border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white'
                                    }`}
                            >
                                <span>Read More</span>
                                <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Right Content - Future Ready Implementation Image Placeholder */}
                    <div className="relative">
                        <div className={`relative w-full h-[500px] lg:h-[600px] rounded-3xl border overflow-hidden shadow-2xl ${mounted && resolvedTheme === 'dark'
                            ? 'bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900 border-gray-600'
                            : 'bg-gradient-to-br from-gray-50 via-white to-gray-100 border-gray-200'
                            }`}>
                            {/* Animated background pattern */}
                            <div className="absolute inset-0 opacity-5">
                                <div className="w-full h-full" style={{
                                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='${mounted && resolvedTheme === 'dark' ? '%23ffffff' : '%23000000'
                                        }' fill-opacity='0.1'%3E%3Cpath d='M40 40c0-22.091-17.909-40-40-40s-40 17.909-40 40 17.909 40 40 40 40-17.909 40-40zM0 40c0-22.091 17.909-40 40-40s40 17.909 40 40-17.909 40-40 40S0 62.091 0 40z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                                    backgroundRepeat: 'repeat'
                                }}></div>
                            </div>

                            {/* Placeholder content */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center space-y-6">
                                    <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center ${mounted && resolvedTheme === 'dark'
                                        ? 'bg-gradient-to-br from-emerald-600 to-teal-600'
                                        : 'bg-gradient-to-br from-emerald-500 to-teal-500'
                                        }`}>
                                        <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <div className="space-y-2">
                                        <p className={`font-semibold text-lg ${mounted && resolvedTheme === 'dark'
                                            ? 'text-gray-200'
                                            : 'text-gray-700'
                                            }`}>Future-Ready Implementation</p>
                                        <p className={`text-sm max-w-xs mx-auto ${mounted && resolvedTheme === 'dark'
                                            ? 'text-gray-400'
                                            : 'text-gray-500'
                                            }`}>Next-generation technology showcase and implementation preview will be displayed here</p>
                                    </div>
                                </div>
                            </div>

                            {/* Enhanced decorative elements with animations */}
                            <div className={`absolute top-12 right-12 w-16 h-16 rounded-full animate-pulse ${mounted && resolvedTheme === 'dark'
                                ? 'bg-gradient-to-r from-emerald-500/30 to-teal-500/30'
                                : 'bg-gradient-to-r from-emerald-400/20 to-teal-400/20'
                                }`}></div>
                            <div className={`absolute bottom-12 left-12 w-12 h-12 rounded-full animate-pulse delay-1000 ${mounted && resolvedTheme === 'dark'
                                ? 'bg-gradient-to-r from-blue-500/30 to-cyan-500/30'
                                : 'bg-gradient-to-r from-blue-400/20 to-cyan-400/20'
                                }`}></div>
                            <div className={`absolute top-1/3 right-8 w-8 h-8 rounded-full animate-pulse delay-500 ${mounted && resolvedTheme === 'dark'
                                ? 'bg-gradient-to-r from-purple-500/30 to-indigo-500/30'
                                : 'bg-gradient-to-r from-purple-400/20 to-indigo-400/20'
                                }`}></div>
                            <div className={`absolute bottom-1/3 left-8 w-10 h-10 rounded-full animate-pulse delay-700 ${mounted && resolvedTheme === 'dark'
                                ? 'bg-gradient-to-r from-green-500/30 to-emerald-500/30'
                                : 'bg-gradient-to-r from-green-400/20 to-emerald-400/20'
                                }`}></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <div className="relative content-container py-20">
                {/* Section Header - Left Aligned */}
                <div className="mb-16">
                    <div className="space-y-6">
                        <h2 className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight ${mounted && resolvedTheme === 'dark'
                            ? 'text-gray-100'
                            : 'text-gray-900'
                            }`}>
                            Testimonials
                        </h2>
                        <p className={`text-lg sm:text-xl leading-relaxed max-w-2xl ${mounted && resolvedTheme === 'dark'
                            ? 'text-gray-300'
                            : 'text-gray-600'
                            }`}>
                            Hear from colleges, universities, and corporate partners who have transformed their hiring processes with HireKarma
                        </p>
                    </div>
                </div>

                {/* Testimonials Cards Container */}
                <div className="relative overflow-hidden">
                    {/* Animated Testimonials Cards */}
                    <div className="flex animate-testimonials-scroll">
                        {/* First Set of Cards */}
                        {testimonialsData.testimonials.map((testimonial, index) => (
                            <div key={`first-${index}`} className="flex-shrink-0 w-96 mx-4">
                                <div className={`p-6 rounded-2xl border transition-all duration-500 hover:scale-105 hover:shadow-xl h-full ${mounted && resolvedTheme === 'dark'
                                    ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700'
                                    : 'bg-gradient-to-br from-white to-gray-50 border-gray-200'
                                    }`}>
                                    {/* Top Row - Profile Section */}
                                    <div className="flex items-center space-x-4 mb-4">
                                        <div className="flex-shrink-0">
                                            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-gray-200 dark:border-gray-600">
                                                <img
                                                    src={testimonial.image}
                                                    alt={testimonial.name}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h4 className={`font-semibold text-base ${mounted && resolvedTheme === 'dark'
                                                ? 'text-gray-100'
                                                : 'text-gray-900'
                                                }`}>
                                                {testimonial.name}
                                            </h4>
                                            <p className={`text-sm ${mounted && resolvedTheme === 'dark'
                                                ? 'text-blue-400'
                                                : 'text-blue-600'
                                                }`}>
                                                {testimonial.designation}
                                            </p>
                                            <p className={`text-sm ${mounted && resolvedTheme === 'dark'
                                                ? 'text-gray-400'
                                                : 'text-gray-500'
                                                }`}>
                                                {testimonial.institution}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Bottom Row - Feedback */}
                                    <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                                        <p className={`text-sm leading-relaxed ${mounted && resolvedTheme === 'dark'
                                            ? 'text-gray-300'
                                            : 'text-gray-600'
                                            }`}>
                                            "{testimonial.feedback}"
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="relative content-container py-20">
                {/* Section Header - Left Aligned */}
                <div className="mb-16">
                    <div className="space-y-6">
                        <h2 className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight ${mounted && resolvedTheme === 'dark'
                            ? 'text-gray-100'
                            : 'text-gray-900'
                            }`}>
                            FAQ
                        </h2>
                        <p className={`text-lg sm:text-xl leading-relaxed max-w-2xl ${mounted && resolvedTheme === 'dark'
                            ? 'text-gray-300'
                            : 'text-gray-600'
                            }`}>
                            Have questions? We've got answers. If you can't find what you're looking for, feel free to contact us directly.
                        </p>
                    </div>
                </div>

                {/* FAQ Items - Full Width */}
                <div className="w-full">
                    {[
                        {
                            question: "How does HireKarma help colleges improve placement rates?",
                            answer: "HireKarma connects colleges with top recruiters and equips students with industry-relevant skills, increasing their placement success significantly."

                        },
                        {
                            question: "What types of roles does HireKarma recruit for?",
                            answer: "HireKarma recruits for entry to mid-level positions in tech, marketing, HR, operations, sales, and more across diverse industries."
                        },
                        {
                            question: "Can companies hire from multiple colleges at once?",
                            answer: "Yes. Our Centralized Placement System allows companies to post once and hire from multiple colleges in real-time."
                        },
                        {
                            question: "How are the funds utilized in the platform?",
                            answer: "Funds are primarily utilized for platform development, AI model training, infrastructure maintenance, and continuous feature enhancement. We also invest in training programs, student support services, and partnership development to ensure the platform remains cutting-edge and beneficial for all stakeholders."
                        },
                        {
                            question: "Is the skill development program customized?",
                            answer: "Yes, HireKarma designs skill training programs based on student profiles, industry needs, and future job trends."
                        },
                    ].map((faq, index) => (
                        <div key={index} className="mb-4 w-full">
                            <div className={`p-6 rounded-xl border transition-all duration-500 hover:shadow-lg w-full ${mounted && resolvedTheme === 'dark'
                                ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700'
                                : 'bg-gradient-to-br from-white to-gray-50 border-gray-200'
                                }`}>
                                <div className="flex items-center justify-between">
                                    <h3 className={`font-semibold text-base sm:text-lg flex-1 ${mounted && resolvedTheme === 'dark'
                                        ? 'text-gray-100'
                                        : 'text-gray-900'
                                        }`}>
                                        {faq.question}
                                    </h3>
                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        className={`flex-shrink-0 ml-4 p-2 rounded-full transition-all duration-200 ${mounted && resolvedTheme === 'dark'
                                            ? 'hover:bg-gray-700'
                                            : 'hover:bg-gray-100'
                                            }`}
                                    >
                                        <svg
                                            className={`w-5 h-5 transition-transform duration-200 ${openFAQ === index ? 'rotate-45' : ''
                                                } ${mounted && resolvedTheme === 'dark'
                                                    ? 'text-gray-400'
                                                    : 'text-gray-600'
                                                }`}
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                    </button>
                                </div>
                                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                    }`}>
                                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                                        <p className={`text-sm leading-relaxed ${mounted && resolvedTheme === 'dark'
                                            ? 'text-gray-300'
                                            : 'text-gray-600'
                                            }`}>
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Our Partners Section */}
            <div className="relative content-container py-20">
                {/* Section Header - Left Aligned */}
                <div className="mb-16">
                    <div className="space-y-6">
                        <h2 className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight ${mounted && resolvedTheme === 'dark'
                            ? 'text-gray-100'
                            : 'text-gray-900'
                            }`}>
                            Our Partners
                        </h2>
                        <p className={`text-lg sm:text-xl leading-relaxed max-w-2xl ${mounted && resolvedTheme === 'dark'
                            ? 'text-gray-300'
                            : 'text-gray-600'
                            }`}>
                            Trusted by leading companies and educational institutions across India who rely on HireKarma for their campus placement needs.
                        </p>
                    </div>
                </div>

                {/* Moving Partners Logos - Two Rows */}
                <div className="relative overflow-hidden space-y-8">
                    {/* Company Logos Row - Moving Right to Left */}
                    <div className="space-y-4">
                        <h3 className={`text-lg font-semibold ${mounted && resolvedTheme === 'dark'
                            ? 'text-gray-200'
                            : 'text-gray-700'
                            }`}>
                            University Partners
                        </h3>
                        <div className="relative overflow-hidden">
                            <div className="flex animate-partners-scroll-left">
                                {/* First Set of Company Partners */}
                                {University.corpo.map((company, index) => (
                                    <div key={`company-first-${index}`} className="flex-shrink-0 mx-4">
                                        <div className={`w-60 h-28 rounded-lg border-2 flex items-center justify-center transition-all duration-500 hover:scale-105 ${mounted && resolvedTheme === 'dark'
                                            ? 'bg-gradient-to-br from-blue-900/20 to-blue-800/10 border-blue-700/30'
                                            : 'bg-gradient-to-br from-blue-50 to-blue-100/50 border-blue-200'
                                            }`}>
                                            <div className="flex flex-col items-center justify-center space-y-2">
                                                <img
                                                    src={company.logo}
                                                    alt={company.name}
                                                    className="w-20 h-20 object-contain"
                                                    onError={(e) => {
                                                        // Fallback to text if logo fails to load
                                                        e.currentTarget.style.display = 'none';
                                                        e.currentTarget.nextElementSibling.style.display = 'block';
                                                    }}
                                                />
                                                <span
                                                    className={`font-semibold text-xs text-center px-2 hidden ${mounted && resolvedTheme === 'dark'
                                                        ? 'text-blue-300'
                                                        : 'text-blue-700'
                                                        }`}
                                                >
                                                    {company.name}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Corporate Logos Row - Moving Left to Right */}
                    <div className="space-y-4">
                        <h3 className={`text-lg font-semibold ${mounted && resolvedTheme === 'dark'
                            ? 'text-gray-200'
                            : 'text-gray-700'
                            }`}>
                            Corporate Partners
                        </h3>
                        <div className="relative overflow-hidden">
                            <div className="flex animate-partners-scroll-right">
                                {/* First Set of Corporate Partners */}
                                {Compine.conpanies.map((corporate, index) => (
                                    <div key={`corporate-first-${index}`} className="flex-shrink-0 mx-4">
                                        <div className={`w-60 h-28 rounded-lg border-2 flex items-center justify-center transition-all duration-500 hover:scale-105 ${mounted && resolvedTheme === 'dark'
                                            ? 'bg-gradient-to-br from-purple-900/20 to-purple-800/10 border-purple-700/30'
                                            : 'bg-gradient-to-br from-purple-50 to-purple-100/50 border-purple-200'
                                            }`}>
                                            <div className="flex flex-col items-center justify-center space-y-2">
                                                <img
                                                    src={corporate.logo}
                                                    alt={corporate.name}
                                                    className="w-20 h-20 object-contain"
                                                    onError={(e) => {
                                                        // Fallback to text if logo fails to load
                                                        e.currentTarget.style.display = 'none';
                                                        e.currentTarget.nextElementSibling.style.display = 'block';
                                                    }}
                                                />
                                                <span
                                                    className={`font-semibold text-xs text-center px-2 hidden ${mounted && resolvedTheme === 'dark'
                                                        ? 'text-purple-300'
                                                        : 'text-purple-700'
                                                        }`}
                                                >
                                                    {corporate.name}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Recognised & Certified By Section */}
            <div className="relative content-container py-20">
                {/* Section Header - Left Aligned */}
                <div className="mb-16">
                    <div className="space-y-6">
                        <h2 className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight ${mounted && resolvedTheme === 'dark'
                            ? 'text-gray-100'
                            : 'text-gray-900'
                            }`}>
                            Recognised & Certified By
                        </h2>
                        <p className={`text-lg sm:text-xl leading-relaxed max-w-2xl ${mounted && resolvedTheme === 'dark'
                            ? 'text-gray-300'
                            : 'text-gray-600'
                            }`}>
                            Our platform meets the highest industry standards and is recognized by leading certification bodies and technology partners worldwide.
                        </p>
                    </div>
                </div>

                {/* Certifications Grid */}
                <div className="w-full">
                    {/* First Row - 2 columns */}
                    <div className="grid grid-cols-2 gap-8 mb-8">
                        {certificationsData.slice(0, 4).map((cert, index) => (
                            <div
                                key={index}
                                className={`group relative p-4 rounded-lg border-2 transition-all duration-500 h-32 ${mounted && resolvedTheme === 'dark'
                                    ? index === 0
                                        ? 'bg-blue-900/20 border-blue-700/40'
                                        : index === 1
                                            ? 'bg-green-900/20 border-green-700/40'
                                            : index === 2
                                                ? 'bg-purple-900/20 border-purple-700/40'
                                                : index === 3
                                                    ? 'bg-orange-900/20 border-orange-700/40'
                                                    : 'bg-red-900/20 border-red-700/40'
                                    : index === 0
                                        ? 'bg-blue-50/50 border-blue-200/60'
                                        : index === 1
                                            ? 'bg-green-50/50 border-green-200/60'
                                            : index === 2
                                                ? 'bg-purple-50/50 border-purple-200/60'
                                                : index === 3
                                                    ? 'bg-orange-50/50 border-orange-200/60'
                                                    : 'bg-red-50/50 border-red-200/60'
                                    }`}

                            >
                                {/* Category Badge */}
                                <div className={`absolute -top-1 left-3 px-2 py-1 rounded-full text-xs font-semibold ${mounted && resolvedTheme === 'dark'
                                    ? index === 0 ? 'bg-blue-600/70 text-white'
                                        : index === 1 ? 'bg-green-600/70 text-white'
                                            : index === 2 ? 'bg-purple-600/70 text-white'
                                                : index === 3 ? 'bg-orange-600/70 text-white'
                                                    : 'bg-red-600/70 text-white'
                                    : index === 0 ? 'bg-blue-100/80 text-blue-800'
                                        : index === 1 ? 'bg-green-100/80 text-green-800'
                                            : index === 2 ? 'bg-purple-100/80 text-purple-800'
                                                : index === 3 ? 'bg-orange-100/80 text-orange-800'
                                                    : 'bg-red-100/80 text-red-800'
                                    }`}>
                                    {cert.category}
                                </div>

                                {/* Card Content - Horizontal Layout */}
                                <div className="flex items-center space-x-4">
                                    {/* Logo - Left Side */}
                                    <div className="flex-shrink-0">
                                        <div className="w-20 h-20 rounded-lg overflow-hidden">
                                            <img
                                                src={cert.logo}
                                                alt={cert.name}
                                                className="w-full h-full object-cover"
                                                onError={(e) => {
                                                    // Fallback to colored div if logo fails to load
                                                    e.currentTarget.style.display = 'none';
                                                    e.currentTarget.nextElementSibling.style.display = 'flex';
                                                }}
                                            />
                                            <div
                                                className="w-full h-full flex items-center justify-center text-xl font-bold hidden"
                                                style={{
                                                    background: mounted && resolvedTheme === 'dark' ? '#10b981' : '#059669',
                                                    color: 'white'
                                                }}
                                            >
                                                {cert.name.charAt(0)}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content - Right Side */}
                                    <div className="flex-1 min-w-0">
                                        <h3 className={`text-sm font-bold mb-1 text-left ${mounted && resolvedTheme === 'dark'
                                            ? 'text-gray-100'
                                            : 'text-gray-900'
                                            }`}>
                                            {cert.name}
                                        </h3>
                                        <p className={`text-xs leading-tight text-left ${mounted && resolvedTheme === 'dark'
                                            ? 'text-gray-400'
                                            : 'text-gray-600'
                                            }`}>
                                            {cert.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Hover Effect Overlay */}
                                <div className={`absolute inset-0 rounded-xl bg-gradient-to-br from-emerald-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                            </div>
                        ))}
                    </div>

                    {/* Second Row - Centered single certification */}
                    <div className="grid grid-cols-3 gap-8">
                        <div></div> {/* Empty column for centering */}
                        {certificationsData.slice(4, 5).map((cert, index) => (
                            <div
                                key={index + 4}
                                className={`group relative p-4 rounded-lg border-2 transition-all duration-500 h-32 ${mounted && resolvedTheme === 'dark'
                                    ? 'bg-red-900/20 border-red-700/40'
                                    : 'bg-red-50/50 border-red-200/60'
                                    }`}
                            >
                                {/* Category Badge */}
                                <div className={`absolute -top-1 left-3 px-2 py-1 rounded-full text-xs font-semibold ${mounted && resolvedTheme === 'dark'
                                    ? index === 0 ? 'bg-blue-600/50 text-white'
                                        : index === 1 ? 'bg-green-600/50 text-white'
                                            : index === 2 ? 'bg-purple-600/50 text-white'
                                                : index === 3 ? 'bg-orange-600/50 text-white'
                                                    : 'bg-red-600 text-white'
                                    : index === 0 ? 'bg-blue-100/50 text-blue-800'
                                        : index === 1 ? 'bg-green-100/50 text-green-800'
                                            : index === 2 ? 'bg-purple-100/50 text-purple-800'
                                                : index === 3 ? 'bg-orange-100/50 text-orange-800'
                                                    : 'bg-red-100 text-red-800/50'
                                    }`}>
                                    {cert.category}
                                </div>

                                {/* Card Content - Horizontal Layout */}
                                <div className="flex items-center space-x-4">
                                    {/* Logo - Left Side */}
                                    <div className="flex-shrink-0">
                                        <div className="w-20 h-20 rounded-lg overflow-hidden">
                                            <img
                                                src={cert.logo}
                                                alt={cert.name}
                                                className="w-full h-full object-cover"
                                                onError={(e) => {
                                                    // Fallback to colored div if logo fails to load
                                                    e.currentTarget.style.display = 'none';
                                                    e.currentTarget.nextElementSibling.style.display = 'flex';
                                                }}
                                            />
                                            <div
                                                className="w-full h-full flex items-center justify-center text-xl font-bold hidden"
                                                style={{
                                                    background: mounted && resolvedTheme === 'dark' ? '#10b981' : '#059669',
                                                    color: 'white'
                                                }}
                                            >
                                                {cert.name.charAt(0)}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Content - Right Side */}
                                    <div className="flex-1 min-w-0">
                                        <h3 className={`text-sm font-bold mb-1 text-left ${mounted && resolvedTheme === 'dark'
                                            ? 'text-gray-100'
                                            : 'text-gray-900'
                                            }`}>
                                            {cert.name}
                                        </h3>
                                        <p className={`text-xs leading-tight text-left ${mounted && resolvedTheme === 'dark'
                                            ? 'text-gray-400'
                                            : 'text-gray-600'
                                            }`}>
                                            {cert.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Hover Effect Overlay */}
                                <div className={`absolute inset-0 rounded-xl bg-gradient-to-br from-emerald-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                            </div>
                        ))}
                        <div></div> {/* Empty column for centering */}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default HeroSection;