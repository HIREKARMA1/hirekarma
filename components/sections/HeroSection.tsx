"use client";

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import WavyBackground from '../layout/WavyBackground';
import companyData from '../../data/company.json';
import corporateData from '../../data/corporate.json';

// Partners Data - Future ready with logo support
const partnersData = {
    companies: [
        { name: "Arizona Automation", logo: "/company/arizona.png" },
        { name: "Demo Company", logo: "data:image/png;base64,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" },
        { name: "TechCorp India", logo: "https://content.linkedin.com/content/dam/me/business/en-us/sales-solutions/resources/images/apac/images/infosys-logo.png.original.png" },
        { name: "Infosys", logo: "https://content.linkedin.com/content/dam/me/business/en-us/sales-solutions/resources/images/apac/images/infosys-logo.png.original.png" },
        { name: "Wipro", logo: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.3ds.com%2Fpartners%2Fpartner-details%2F100000000003019_WIPRO_LTD&psig=AOvVaw0VHJFbEAOAz40lIJXc2ADz&ust=1760519945534000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCLiuk4Kuo5ADFQAAAAAdAAAAABAE" },
        { name: "TCS", logo: "/company/tcs.png" },
        { name: "Accenture", logo: "/company/accenture.png" },
        { name: "Microsoft", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6TSErNHiZ_ZOfbAL-G2uASkV436C71TsykA&s" },
        { name: "Google", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVZEZ6fa7bPwCI4HE5583rhd3qiFNmf6kiPg&s" },
        { name: "Amazon", logo: "data:image/png;base64,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" }
    ],
    corporates: [
        { name: "gift", logo: "/college/gift.png" },
        { name: "bput", logo: "/college/bput.png" },
        { name: "Microsoft", logo: "/logos/microsoft.png" },
        { name: "Accenture", logo: "/logos/accenture.png" },
        { name: "TCS", logo: "/logos/tcs.png" },
        { name: "Wipro", logo: "/logos/wipro.png" },
        { name: "Infosys", logo: "/logos/infosys.png" },
        { name: "TechCorp India", logo: "/logos/techcorp.png" },
        { name: "Demo Company", logo: "/logos/demo.png" },
        { name: "Arizona Automation", logo: "/logos/arizona.png" }
    ]
};

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
        <section className={`relative min-h-screen ${
            mounted && resolvedTheme === 'dark' 
                ? 'bg-gray-900' 
                : 'bg-white'
        }`}>
            {/* Wavy Background */}
            <WavyBackground variant="primary" intensity="medium" />

            <div className="relative content-container pt-20 pb-20">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center min-h-[85vh]">

                    {/* Left Content - Clean and Modern */}
                    <div className="space-y-8 lg:space-y-10">
                        {/* Main Heading */}
                        <div className="space-y-6">
                            <h1 className={`text-2xl sm:text-4xl lg:text-4xl xl:text-6xl font-bold leading-tight tracking-tight ${
                                mounted && resolvedTheme === 'dark' 
                                    ? 'text-gray-100' 
                                    : 'text-gray-900'
                            }`}>
                                Transforming Campus Hiring
                                <span className={`block mt-2 text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-medium ${
                                    mounted && resolvedTheme === 'dark' 
                                        ? 'text-cyan-400' 
                                        : 'text-cyan-600'
                                }`}>
                                    with AI, Automation, and Analytics
                                </span>
                            </h1>
                        </div>

                        {/* Paragraph */}
                        <div className="space-y-4">
                            <p className={`text-lg sm:text-xl leading-relaxed max-w-2xl ${
                                mounted && resolvedTheme === 'dark' 
                                    ? 'text-gray-300' 
                                    : 'text-gray-600'
                            }`}>
                                HireKarma offers colleges and universities <strong className={`${
                                    mounted && resolvedTheme === 'dark' 
                                        ? 'text-gray-200' 
                                        : 'text-gray-700'
                                }`}>modular</strong> and <strong className={`${
                                    mounted && resolvedTheme === 'dark' 
                                        ? 'text-gray-200' 
                                        : 'text-gray-700'
                                }`}>open-source</strong> technology to <strong className={`${
                                    mounted && resolvedTheme === 'dark' 
                                        ? 'text-gray-200' 
                                        : 'text-gray-700'
                                }`}>build</strong> and <strong className={`${
                                    mounted && resolvedTheme === 'dark' 
                                        ? 'text-gray-200' 
                                        : 'text-gray-700'
                                }`}>own</strong> their campus placement systems.
                            </p>
                        </div>

                        {/* Single CTA Button */}
                        <div className="pt-4">
                            <a 
                                href="#partner" 
                                className={`inline-flex items-center px-8 py-4 font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 ${
                                    mounted && resolvedTheme === 'dark'
                                        ? 'bg-cyan-600 text-white hover:bg-cyan-700'
                                        : 'bg-blue-600 text-white hover:bg-blue-700'
                                }`}
                            >
                                <span>Get Started</span>
                                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Right Content - Hero Video */}
                    <div className="relative">
                        {/* Hero Video */}
                        <div className={`relative w-full h-auto lg:h-auto overflow-hidden ${
                            mounted && resolvedTheme === 'dark'
                                ? 'border-gray-700'
                                : 'border-gray-200'
                        }`}>
                            <video 
                                className="w-full h-full object-cover rounded-2xl"
                                autoPlay 
                                loop 
                                muted 
                                playsInline
                            >
                                <source src="/assets/hero.mp4" type="video/mp4" />
                                {/* Fallback content for browsers that don't support video */}
                                <div className={`absolute inset-0 flex items-center justify-center ${
                                    mounted && resolvedTheme === 'dark'
                                        ? 'bg-gradient-to-br from-gray-800 to-gray-900'
                                        : 'bg-gradient-to-br from-gray-50 to-gray-100'
                                }`}>
                                    <div className="text-center space-y-4">
                                        <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center ${
                                            mounted && resolvedTheme === 'dark'
                                                ? 'bg-gray-700'
                                                : 'bg-gray-200'
                                        }`}>
                                            <svg className={`w-8 h-8 ${
                                                mounted && resolvedTheme === 'dark'
                                                    ? 'text-gray-500'
                                                    : 'text-gray-400'
                                            }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <p className={`font-medium ${
                                            mounted && resolvedTheme === 'dark'
                                                ? 'text-gray-400'
                                                : 'text-gray-500'
                                        }`}>Video not supported</p>
                                        <p className={`text-sm ${
                                            mounted && resolvedTheme === 'dark'
                                                ? 'text-gray-500'
                                                : 'text-gray-400'
                                        }`}>Your browser doesn't support video playback</p>
                                    </div>
                                </div>
                            </video>
                            
                            {/* Subtle decorative elements */}
                            <div className={`absolute top-8 right-8 w-12 h-12 rounded-full ${
                                mounted && resolvedTheme === 'dark'
                                    ? 'bg-blue-500/20'
                                    : 'bg-blue-500/10'
                            }`}></div>
                            <div className={`absolute bottom-8 left-8 w-8 h-8 rounded-full ${
                                mounted && resolvedTheme === 'dark'
                                    ? 'bg-cyan-500/20'
                                    : 'bg-cyan-500/10'
                            }`}></div>
                            <div className={`absolute top-1/2 left-8 w-6 h-6 rounded-full ${
                                mounted && resolvedTheme === 'dark'
                                    ? 'bg-green-500/20'
                                    : 'bg-green-500/10'
                            }`}></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Impact Section - MOSIP Style */}
            <div className="relative content-container py-20">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    
                    {/* Left Content - Statistics */}
                    <div className="space-y-8 lg:space-y-10">
                        {/* Section Header */}
                        <div className="space-y-6">
                            <h2 className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight ${
                                mounted && resolvedTheme === 'dark' 
                                    ? 'text-gray-100' 
                                    : 'text-gray-900'
                            }`}>
                                Our Impact in Numbers
                                <span className={`block mt-2 text-lg sm:text-xl lg:text-2xl xl:text-3xl font-medium ${
                                    mounted && resolvedTheme === 'dark' 
                                        ? 'text-cyan-400' 
                                        : 'text-cyan-600'
                                }`}>
                                    Transforming Campus Hiring
                                </span>
                            </h2>
                        </div>

                        {/* Paragraph */}
                        <div className="space-y-4">
                            <p className={`text-lg sm:text-xl leading-relaxed max-w-2xl ${
                                mounted && resolvedTheme === 'dark' 
                                    ? 'text-gray-300' 
                                    : 'text-gray-600'
                            }`}>
                                HireKarma delivers <strong className={`${
                                    mounted && resolvedTheme === 'dark' 
                                        ? 'text-gray-200' 
                                        : 'text-gray-700'
                                }`}>measurable results</strong> and <strong className={`${
                                    mounted && resolvedTheme === 'dark' 
                                        ? 'text-gray-200' 
                                        : 'text-gray-700'
                                }`}>lasting impact</strong> across India's educational ecosystem.
                            </p>
                        </div>

                        {/* Main Statistics Header */}
                        <div className="space-y-4">
                            <div className="relative">
                                <h2 className={`text-5xl sm:text-5xl lg:text-5xl font-bold leading-tight tracking-tight ${
                                    mounted && resolvedTheme === 'dark' 
                                        ? 'text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500' 
                                        : 'text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600'
                                }`}>
                                    100%
                                </h2>
                                {/* Glow effect */}
                                <div className={`absolute inset-0 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight blur-sm opacity-30 ${
                                    mounted && resolvedTheme === 'dark' 
                                        ? 'text-green-400' 
                                        : 'text-green-600'
                                }`}>
                                    100%
                                </div>
                            </div>
                            <p className={`text-lg sm:text-l font-semibold ${
                                mounted && resolvedTheme === 'dark' 
                                    ? 'text-gray-200' 
                                    : 'text-gray-700'
                            }`}>
                                Placement Success Rate
                            </p>
                        </div>

                        {/* Statistics Grid */}
                        <div className="grid grid-cols-2 gap-4 lg:gap-6 max-w-lg">
                            {/* Row 1 */}
                            <div className={`p-4 rounded-xl border transition-all duration-300 hover:scale-105 ${
                                mounted && resolvedTheme === 'dark'
                                    ? 'bg-gradient-to-br from-blue-900/20 to-blue-800/10 border-blue-700/30 hover:border-blue-600/50'
                                    : 'bg-gradient-to-br from-blue-50 to-blue-100/50 border-blue-200 hover:border-blue-300'
                            }`}>
                                <div className="space-y-2">
                                    <div className={`text-2xl sm:text-3xl font-bold ${
                                        mounted && resolvedTheme === 'dark' 
                                            ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400' 
                                            : 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600'
                                    }`}>
                                        980+
                                    </div>
                                    <div className={`text-xs sm:text-sm font-semibold text-right ${
                                        mounted && resolvedTheme === 'dark' 
                                            ? 'text-gray-300' 
                                            : 'text-gray-700'
                                    }`}>
                                        Trusted Companies
                                    </div>
                                </div>
                            </div>

                            <div className={`p-4 rounded-xl border transition-all duration-300 hover:scale-105 ${
                                mounted && resolvedTheme === 'dark'
                                    ? 'bg-gradient-to-br from-purple-900/20 to-purple-800/10 border-purple-700/30 hover:border-purple-600/50'
                                    : 'bg-gradient-to-br from-purple-50 to-purple-100/50 border-purple-200 hover:border-purple-300'
                            }`}>
                                <div className="space-y-2">
                                    <div className={`text-2xl sm:text-3xl font-bold ${
                                        mounted && resolvedTheme === 'dark' 
                                            ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400' 
                                            : 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600'
                                    }`}>
                                        130+
                                    </div>
                                    <div className={`text-xs sm:text-sm font-semibold text-left ${
                                        mounted && resolvedTheme === 'dark' 
                                            ? 'text-gray-300' 
                                            : 'text-gray-700'
                                    }`}>
                                        Partnered Colleges
                                    </div>
                                </div>
                            </div>

                            {/* Row 2 */}
                            <div className={`p-4 rounded-xl border transition-all duration-300 hover:scale-105 ${
                                mounted && resolvedTheme === 'dark'
                                    ? 'bg-gradient-to-br from-orange-900/20 to-orange-800/10 border-orange-700/30 hover:border-orange-600/50'
                                    : 'bg-gradient-to-br from-orange-50 to-orange-100/50 border-orange-200 hover:border-orange-300'
                            }`}>
                                <div className="space-y-2">
                                    <div className={`text-2xl sm:text-3xl font-bold ${
                                        mounted && resolvedTheme === 'dark' 
                                            ? 'text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400' 
                                            : 'text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600'
                                    }`}>
                                        200k+
                                    </div>
                                    <div className={`text-xs sm:text-sm font-semibold text-right ${
                                        mounted && resolvedTheme === 'dark' 
                                            ? 'text-gray-300' 
                                            : 'text-gray-700'
                                    }`}>
                                        Impact Created
                                    </div>
                                </div>
                            </div>

                            <div className={`p-4 rounded-xl border transition-all duration-300 hover:scale-105 ${
                                mounted && resolvedTheme === 'dark'
                                    ? 'bg-gradient-to-br from-emerald-900/20 to-emerald-800/10 border-emerald-700/30 hover:border-emerald-600/50'
                                    : 'bg-gradient-to-br from-emerald-50 to-emerald-100/50 border-emerald-200 hover:border-emerald-300'
                            }`}>
                                <div className="space-y-2">
                                    <div className={`text-2xl sm:text-3xl font-bold ${
                                        mounted && resolvedTheme === 'dark' 
                                            ? 'text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400' 
                                            : 'text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600'
                                    }`}>
                                        50+
                                    </div>
                                    <div className={`text-xs sm:text-sm font-semibold text-left ${
                                        mounted && resolvedTheme === 'dark' 
                                            ? 'text-gray-300' 
                                            : 'text-gray-700'
                                    }`}>
                                        Active Partners
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Future Image Placeholder */}
                    <div className="relative">
                        <div className={`relative w-full h-[500px] lg:h-[600px] rounded-3xl border overflow-hidden shadow-2xl ${
                            mounted && resolvedTheme === 'dark'
                                ? 'bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900 border-gray-600'
                                : 'bg-gradient-to-br from-gray-50 via-white to-gray-100 border-gray-200'
                        }`}>
                            {/* Animated background pattern */}
                            <div className="absolute inset-0 opacity-5">
                                <div className="w-full h-full" style={{
                                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='${
                                        mounted && resolvedTheme === 'dark' ? '%23ffffff' : '%23000000'
                                    }' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zM0 20c0-11.046 8.954-20 20-20s20 8.954 20 20-8.954 20-20 20S0 31.046 0 20z'/%3E%3C/g%3E%3C/svg%3E")`,
                                    backgroundRepeat: 'repeat'
                                }}></div>
                            </div>

                            {/* Placeholder content */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center space-y-6">
                                    <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center ${
                                        mounted && resolvedTheme === 'dark'
                                            ? 'bg-gradient-to-br from-blue-600 to-purple-600'
                                            : 'bg-gradient-to-br from-blue-500 to-purple-500'
                                    }`}>
                                        <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                        </svg>
                                    </div>
                                    <div className="space-y-2">
                                        <p className={`font-semibold text-lg ${
                                            mounted && resolvedTheme === 'dark'
                                                ? 'text-gray-200'
                                                : 'text-gray-700'
                                        }`}>Impact Visualization</p>
                                        <p className={`text-sm max-w-xs mx-auto ${
                                            mounted && resolvedTheme === 'dark'
                                                ? 'text-gray-400'
                                                : 'text-gray-500'
                                        }`}>Interactive data visualization and impact metrics will be showcased here</p>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Enhanced decorative elements with animations */}
                            <div className={`absolute top-12 right-12 w-16 h-16 rounded-full animate-pulse ${
                                mounted && resolvedTheme === 'dark'
                                    ? 'bg-gradient-to-r from-green-500/30 to-emerald-500/30'
                                    : 'bg-gradient-to-r from-green-400/20 to-emerald-400/20'
                            }`}></div>
                            <div className={`absolute bottom-12 left-12 w-12 h-12 rounded-full animate-pulse delay-1000 ${
                                mounted && resolvedTheme === 'dark'
                                    ? 'bg-gradient-to-r from-blue-500/30 to-cyan-500/30'
                                    : 'bg-gradient-to-r from-blue-400/20 to-cyan-400/20'
                            }`}></div>
                            <div className={`absolute top-1/3 right-8 w-8 h-8 rounded-full animate-pulse delay-500 ${
                                mounted && resolvedTheme === 'dark'
                                    ? 'bg-gradient-to-r from-purple-500/30 to-pink-500/30'
                                    : 'bg-gradient-to-r from-purple-400/20 to-pink-400/20'
                            }`}></div>
                            <div className={`absolute bottom-1/3 left-8 w-10 h-10 rounded-full animate-pulse delay-700 ${
                                mounted && resolvedTheme === 'dark'
                                    ? 'bg-gradient-to-r from-orange-500/30 to-red-500/30'
                                    : 'bg-gradient-to-r from-orange-400/20 to-red-400/20'
                            }`}></div>
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
                            <h2 className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight ${
                                mounted && resolvedTheme === 'dark' 
                                    ? 'text-gray-100' 
                                    : 'text-gray-900'
                            }`}>
                                The Problem We Solve
                                <span className={`block mt-2 text-lg sm:text-xl lg:text-2xl xl:text-3xl font-medium ${
                                    mounted && resolvedTheme === 'dark' 
                                        ? 'text-red-400' 
                                        : 'text-red-600'
                                }`}>
                                    Campus Hiring Challenges
                                </span>
                            </h2>
                        </div>

                        {/* Paragraph */}
                        <div className="space-y-4">
                            <p className={`text-lg sm:text-xl leading-relaxed max-w-2xl ${
                                mounted && resolvedTheme === 'dark' 
                                    ? 'text-gray-300' 
                                    : 'text-gray-600'
                            }`}>
                                Traditional campus hiring processes are <strong className={`${
                                    mounted && resolvedTheme === 'dark' 
                                        ? 'text-gray-200' 
                                        : 'text-gray-700'
                                }`}>time-consuming</strong>, <strong className={`${
                                    mounted && resolvedTheme === 'dark' 
                                        ? 'text-gray-200' 
                                        : 'text-gray-700'
                                }`}>inefficient</strong>, and often result in <strong className={`${
                                    mounted && resolvedTheme === 'dark' 
                                        ? 'text-gray-200' 
                                        : 'text-gray-700'
                                }`}>poor matches</strong> between students and companies.
                            </p>
                            <p className={`text-lg sm:text-xl leading-relaxed max-w-2xl ${
                                mounted && resolvedTheme === 'dark' 
                                    ? 'text-gray-300' 
                                    : 'text-gray-600'
                            }`}>
                                Colleges struggle with <strong className={`${
                                    mounted && resolvedTheme === 'dark' 
                                        ? 'text-gray-200' 
                                        : 'text-gray-700'
                                }`}>manual coordination</strong>, <strong className={`${
                                    mounted && resolvedTheme === 'dark' 
                                        ? 'text-gray-200' 
                                        : 'text-gray-700'
                                }`}>lack of data insights</strong>, and <strong className={`${
                                    mounted && resolvedTheme === 'dark' 
                                        ? 'text-gray-200' 
                                        : 'text-gray-700'
                                }`}>limited reach</strong> to quality employers.
                            </p>
                        </div>
                    </div>

                    {/* Right Content - GIF Placeholder */}
                    <div className="relative">
                        <div className={`relative w-full h-[500px] lg:h-[600px] rounded-3xl border overflow-hidden shadow-2xl ${
                            mounted && resolvedTheme === 'dark'
                                ? 'bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900 border-gray-600'
                                : 'bg-gradient-to-br from-gray-50 via-white to-gray-100 border-gray-200'
                        }`}>
                            {/* Animated background pattern */}
                            <div className="absolute inset-0 opacity-5">
                                <div className="w-full h-full" style={{
                                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='${
                                        mounted && resolvedTheme === 'dark' ? '%23ffffff' : '%23000000'
                                    }' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                                    backgroundRepeat: 'repeat'
                                }}></div>
                            </div>

                            {/* Placeholder content */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center space-y-6">
                                    <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center ${
                                        mounted && resolvedTheme === 'dark'
                                            ? 'bg-gradient-to-br from-red-600 to-orange-600'
                                            : 'bg-gradient-to-br from-red-500 to-orange-500'
                                    }`}>
                                        <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                                        </svg>
                                    </div>
                                    <div className="space-y-2">
                                        <p className={`font-semibold text-lg ${
                                            mounted && resolvedTheme === 'dark'
                                                ? 'text-gray-200'
                                                : 'text-gray-700'
                                        }`}>Problem Visualization</p>
                                        <p className={`text-sm max-w-xs mx-auto ${
                                            mounted && resolvedTheme === 'dark'
                                                ? 'text-gray-400'
                                                : 'text-gray-500'
                                        }`}>Interactive GIF or video showcasing campus hiring challenges will be displayed here</p>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Enhanced decorative elements with animations */}
                            <div className={`absolute top-12 right-12 w-16 h-16 rounded-full animate-pulse ${
                                mounted && resolvedTheme === 'dark'
                                    ? 'bg-gradient-to-r from-red-500/30 to-orange-500/30'
                                    : 'bg-gradient-to-r from-red-400/20 to-orange-400/20'
                            }`}></div>
                            <div className={`absolute bottom-12 left-12 w-12 h-12 rounded-full animate-pulse delay-1000 ${
                                mounted && resolvedTheme === 'dark'
                                    ? 'bg-gradient-to-r from-yellow-500/30 to-red-500/30'
                                    : 'bg-gradient-to-r from-yellow-400/20 to-red-400/20'
                            }`}></div>
                            <div className={`absolute top-1/3 right-8 w-8 h-8 rounded-full animate-pulse delay-500 ${
                                mounted && resolvedTheme === 'dark'
                                    ? 'bg-gradient-to-r from-orange-500/30 to-red-500/30'
                                    : 'bg-gradient-to-r from-orange-400/20 to-red-400/20'
                            }`}></div>
                            <div className={`absolute bottom-1/3 left-8 w-10 h-10 rounded-full animate-pulse delay-700 ${
                                mounted && resolvedTheme === 'dark'
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
                            <h2 className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight ${
                                mounted && resolvedTheme === 'dark' 
                                    ? 'text-gray-100' 
                                    : 'text-gray-900'
                            }`}>
                                Future-Ready Implementation
                                <span className={`block mt-2 text-lg sm:text-xl lg:text-2xl xl:text-3xl font-medium ${
                                    mounted && resolvedTheme === 'dark' 
                                        ? 'text-emerald-400' 
                                        : 'text-emerald-600'
                                }`}>
                                    Next-Gen Campus Solutions
                                </span>
                            </h2>
                        </div>

                        {/* Paragraph */}
                        <div className="space-y-4">
                            <p className={`text-lg sm:text-xl leading-relaxed max-w-2xl ${
                                mounted && resolvedTheme === 'dark' 
                                    ? 'text-gray-300' 
                                    : 'text-gray-600'
                            }`}>
                                Our platform is built with <strong className={`${
                                    mounted && resolvedTheme === 'dark' 
                                        ? 'text-gray-200' 
                                        : 'text-gray-700'
                                }`}>cutting-edge technology</strong> and <strong className={`${
                                    mounted && resolvedTheme === 'dark' 
                                        ? 'text-gray-200' 
                                        : 'text-gray-700'
                                }`}>scalable architecture</strong> to meet the evolving needs of modern campus recruitment.
                            </p>
                            <p className={`text-lg sm:text-xl leading-relaxed max-w-2xl ${
                                mounted && resolvedTheme === 'dark' 
                                    ? 'text-gray-300' 
                                    : 'text-gray-600'
                            }`}>
                                From <strong className={`${
                                    mounted && resolvedTheme === 'dark' 
                                        ? 'text-gray-200' 
                                        : 'text-gray-700'
                                }`}>AI-powered matching</strong> to <strong className={`${
                                    mounted && resolvedTheme === 'dark' 
                                        ? 'text-gray-200' 
                                        : 'text-gray-700'
                                }`}>real-time analytics</strong>, we provide institutions with the tools they need to stay ahead in the digital transformation era.
                            </p>
                        </div>

                        {/* Read More Button */}
                        <div className="pt-4">
                            <a 
                                href="#learn-more" 
                                className={`inline-flex items-center px-6 py-3 font-semibold rounded-lg transition-all duration-200 border-2 hover:shadow-lg transform hover:-translate-y-0.5 ${
                                    mounted && resolvedTheme === 'dark'
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
                        <div className={`relative w-full h-[500px] lg:h-[600px] rounded-3xl border overflow-hidden shadow-2xl ${
                            mounted && resolvedTheme === 'dark'
                                ? 'bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900 border-gray-600'
                                : 'bg-gradient-to-br from-gray-50 via-white to-gray-100 border-gray-200'
                        }`}>
                            {/* Animated background pattern */}
                            <div className="absolute inset-0 opacity-5">
                                <div className="w-full h-full" style={{
                                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='${
                                        mounted && resolvedTheme === 'dark' ? '%23ffffff' : '%23000000'
                                    }' fill-opacity='0.1'%3E%3Cpath d='M40 40c0-22.091-17.909-40-40-40s-40 17.909-40 40 17.909 40 40 40 40-17.909 40-40zM0 40c0-22.091 17.909-40 40-40s40 17.909 40 40-17.909 40-40 40S0 62.091 0 40z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                                    backgroundRepeat: 'repeat'
                                }}></div>
                            </div>

                            {/* Placeholder content */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center space-y-6">
                                    <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center ${
                                        mounted && resolvedTheme === 'dark'
                                            ? 'bg-gradient-to-br from-emerald-600 to-teal-600'
                                            : 'bg-gradient-to-br from-emerald-500 to-teal-500'
                                    }`}>
                                        <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <div className="space-y-2">
                                        <p className={`font-semibold text-lg ${
                                            mounted && resolvedTheme === 'dark'
                                                ? 'text-gray-200'
                                                : 'text-gray-700'
                                        }`}>Future-Ready Implementation</p>
                                        <p className={`text-sm max-w-xs mx-auto ${
                                            mounted && resolvedTheme === 'dark'
                                                ? 'text-gray-400'
                                                : 'text-gray-500'
                                        }`}>Next-generation technology showcase and implementation preview will be displayed here</p>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Enhanced decorative elements with animations */}
                            <div className={`absolute top-12 right-12 w-16 h-16 rounded-full animate-pulse ${
                                mounted && resolvedTheme === 'dark'
                                    ? 'bg-gradient-to-r from-emerald-500/30 to-teal-500/30'
                                    : 'bg-gradient-to-r from-emerald-400/20 to-teal-400/20'
                            }`}></div>
                            <div className={`absolute bottom-12 left-12 w-12 h-12 rounded-full animate-pulse delay-1000 ${
                                mounted && resolvedTheme === 'dark'
                                    ? 'bg-gradient-to-r from-blue-500/30 to-cyan-500/30'
                                    : 'bg-gradient-to-r from-blue-400/20 to-cyan-400/20'
                            }`}></div>
                            <div className={`absolute top-1/3 right-8 w-8 h-8 rounded-full animate-pulse delay-500 ${
                                mounted && resolvedTheme === 'dark'
                                    ? 'bg-gradient-to-r from-purple-500/30 to-indigo-500/30'
                                    : 'bg-gradient-to-r from-purple-400/20 to-indigo-400/20'
                            }`}></div>
                            <div className={`absolute bottom-1/3 left-8 w-10 h-10 rounded-full animate-pulse delay-700 ${
                                mounted && resolvedTheme === 'dark'
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
                        <h2 className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight ${
                            mounted && resolvedTheme === 'dark' 
                                ? 'text-gray-100' 
                                : 'text-gray-900'
                        }`}>
                            Testimonials
                        </h2>
                        <p className={`text-lg sm:text-xl leading-relaxed max-w-2xl ${
                            mounted && resolvedTheme === 'dark' 
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
                        {[
                            {
                                name: "Dr. Priya Sharma",
                                designation: "Director of Placements",
                                institution: "IIT Bhubaneswar",
                                image: "https://randomuser.me/api/portraits/women/44.jpg",
                                feedback: "HireKarma has revolutionized our campus placement process. The AI-powered matching has increased our placement rate by 40% and reduced the time to hire significantly."
                            },
                            {
                                name: "Rajesh Kumar",
                                designation: "HR Director",
                                institution: "TechCorp India",
                                image: "https://randomuser.me/api/portraits/men/32.jpg",
                                feedback: "The quality of candidates we get through HireKarma is exceptional. The platform's analytics help us make data-driven hiring decisions that align perfectly with our company culture."
                            },
                            {
                                name: "Prof. Ananya Das",
                                designation: "Dean of Engineering",
                                institution: "NIT Rourkela",
                                image: "https://randomuser.me/api/portraits/women/68.jpg",
                                feedback: "Our students love the skill assessment modules. It helps them understand their strengths and areas for improvement, making them more job-ready than ever before."
                            },
                            {
                                name: "Vikram Singh",
                                designation: "Talent Acquisition Head",
                                institution: "Infosys",
                                image: "https://randomuser.me/api/portraits/men/65.jpg",
                                feedback: "HireKarma's platform has streamlined our campus hiring by 60%. The pre-vetted candidates save us countless hours of screening, and the results speak for themselves."
                            }
                        ].map((testimonial, index) => (
                            <div key={`first-${index}`} className="flex-shrink-0 w-96 mx-4">
                                <div className={`p-6 rounded-2xl border transition-all duration-300 hover:scale-105 hover:shadow-xl h-full ${
                                    mounted && resolvedTheme === 'dark'
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
                                            <h4 className={`font-semibold text-base ${
                                                mounted && resolvedTheme === 'dark' 
                                                    ? 'text-gray-100' 
                                                    : 'text-gray-900'
                                            }`}>
                                                {testimonial.name}
                                            </h4>
                                            <p className={`text-sm ${
                                                mounted && resolvedTheme === 'dark' 
                                                    ? 'text-blue-400' 
                                                    : 'text-blue-600'
                                            }`}>
                                                {testimonial.designation}
                                            </p>
                                            <p className={`text-sm ${
                                                mounted && resolvedTheme === 'dark' 
                                                    ? 'text-gray-400' 
                                                    : 'text-gray-500'
                                            }`}>
                                                {testimonial.institution}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Bottom Row - Feedback */}
                                    <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                                        <p className={`text-sm leading-relaxed ${
                                            mounted && resolvedTheme === 'dark' 
                                                ? 'text-gray-300' 
                                                : 'text-gray-600'
                                        }`}>
                                            "{testimonial.feedback}"
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Duplicate Set for Seamless Loop */}
                        {[
                            {
                                name: "Dr. Priya Sharma",
                                designation: "Director of Placements",
                                institution: "IIT Bhubaneswar",
                                image: "https://randomuser.me/api/portraits/women/44.jpg",
                                feedback: "HireKarma has revolutionized our campus placement process. The AI-powered matching has increased our placement rate by 40% and reduced the time to hire significantly."
                            },
                            {
                                name: "Rajesh Kumar",
                                designation: "HR Director",
                                institution: "TechCorp India",
                                image: "https://randomuser.me/api/portraits/men/32.jpg",
                                feedback: "The quality of candidates we get through HireKarma is exceptional. The platform's analytics help us make data-driven hiring decisions that align perfectly with our company culture."
                            },
                            {
                                name: "Prof. Ananya Das",
                                designation: "Dean of Engineering",
                                institution: "NIT Rourkela",
                                image: "https://randomuser.me/api/portraits/women/68.jpg",
                                feedback: "Our students love the skill assessment modules. It helps them understand their strengths and areas for improvement, making them more job-ready than ever before."
                            },
                            {
                                name: "Vikram Singh",
                                designation: "Talent Acquisition Head",
                                institution: "Infosys",
                                image: "https://randomuser.me/api/portraits/men/65.jpg",
                                feedback: "HireKarma's platform has streamlined our campus hiring by 60%. The pre-vetted candidates save us countless hours of screening, and the results speak for themselves."
                            }
                        ].map((testimonial, index) => (
                            <div key={`second-${index}`} className="flex-shrink-0 w-96 mx-4">
                                <div className={`p-6 rounded-2xl border transition-all duration-300 hover:scale-105 hover:shadow-xl h-full ${
                                    mounted && resolvedTheme === 'dark'
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
                                            <h4 className={`font-semibold text-base ${
                                                mounted && resolvedTheme === 'dark' 
                                                    ? 'text-gray-100' 
                                                    : 'text-gray-900'
                                            }`}>
                                                {testimonial.name}
                                            </h4>
                                            <p className={`text-sm ${
                                                mounted && resolvedTheme === 'dark' 
                                                    ? 'text-blue-400' 
                                                    : 'text-blue-600'
                                            }`}>
                                                {testimonial.designation}
                                            </p>
                                            <p className={`text-sm ${
                                                mounted && resolvedTheme === 'dark' 
                                                    ? 'text-gray-400' 
                                                    : 'text-gray-500'
                                            }`}>
                                                {testimonial.institution}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Bottom Row - Feedback */}
                                    <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                                        <p className={`text-sm leading-relaxed ${
                                            mounted && resolvedTheme === 'dark' 
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
                        <h2 className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight ${
                            mounted && resolvedTheme === 'dark' 
                                ? 'text-gray-100' 
                                : 'text-gray-900'
                        }`}>
                            FAQ
                        </h2>
                        <p className={`text-lg sm:text-xl leading-relaxed max-w-2xl ${
                            mounted && resolvedTheme === 'dark' 
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
                            question: "How does HireKarma's AI-powered matching work?",
                            answer: "Our AI system analyzes student profiles, skills, academic performance, and career preferences to match them with suitable job opportunities. It considers multiple factors including technical skills, soft skills, location preferences, and company culture fit to ensure optimal matches for both students and employers."
                        },
                        {
                            question: "What kind of training programs do you offer?",
                            answer: "We offer comprehensive skill development programs including technical training in programming languages, data science, and cloud computing, as well as soft skills training in communication, leadership, and problem-solving. Our programs are designed in collaboration with industry experts to ensure relevance and practical applicability."
                        },
                        {
                            question: "How can my college partner with HireKarma?",
                            answer: "Colleges can partner with us through our comprehensive placement management system. We provide modular, open-source technology that allows institutions to build and own their campus placement systems. Our partnership includes training, technical support, and ongoing consultation to maximize placement success rates."
                        },
                        {
                            question: "How are the funds utilized in the platform?",
                            answer: "Funds are primarily utilized for platform development, AI model training, infrastructure maintenance, and continuous feature enhancement. We also invest in training programs, student support services, and partnership development to ensure the platform remains cutting-edge and beneficial for all stakeholders."
                        }
                    ].map((faq, index) => (
                        <div key={index} className="mb-4 w-full">
                            <div className={`p-6 rounded-xl border transition-all duration-300 hover:shadow-lg w-full ${
                                mounted && resolvedTheme === 'dark'
                                    ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700'
                                    : 'bg-gradient-to-br from-white to-gray-50 border-gray-200'
                            }`}>
                                <div className="flex items-center justify-between">
                                    <h3 className={`font-semibold text-base sm:text-lg flex-1 ${
                                        mounted && resolvedTheme === 'dark' 
                                            ? 'text-gray-100' 
                                            : 'text-gray-900'
                                    }`}>
                                        {faq.question}
                                    </h3>
                                    <button 
                                        onClick={() => toggleFAQ(index)}
                                        className={`flex-shrink-0 ml-4 p-2 rounded-full transition-all duration-200 ${
                                            mounted && resolvedTheme === 'dark'
                                                ? 'hover:bg-gray-700'
                                                : 'hover:bg-gray-100'
                                        }`}
                                    >
                                        <svg 
                                            className={`w-5 h-5 transition-transform duration-200 ${
                                                openFAQ === index ? 'rotate-45' : ''
                                            } ${
                                                mounted && resolvedTheme === 'dark' 
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
                                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                    openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                }`}>
                                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                                        <p className={`text-sm leading-relaxed ${
                                            mounted && resolvedTheme === 'dark' 
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
                        <h2 className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight ${
                            mounted && resolvedTheme === 'dark' 
                                ? 'text-gray-100' 
                                : 'text-gray-900'
                        }`}>
                            Our Partners
                        </h2>
                        <p className={`text-lg sm:text-xl leading-relaxed max-w-2xl ${
                            mounted && resolvedTheme === 'dark' 
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
                        <h3 className={`text-lg font-semibold ${
                            mounted && resolvedTheme === 'dark' 
                                ? 'text-gray-200' 
                                : 'text-gray-700'
                        }`}>
                            Company Partners
                        </h3>
                        <div className="relative overflow-hidden">
                            <div className="flex animate-partners-scroll-left">
                                {/* First Set of Company Partners */}
                                {partnersData.companies.map((company, index) => (
                                    <div key={`company-first-${index}`} className="flex-shrink-0 mx-4">
                                        <div className={`w-60 h-28 rounded-lg border-2 flex items-center justify-center transition-all duration-300 hover:scale-105 ${
                                            mounted && resolvedTheme === 'dark'
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
                                                    className={`font-semibold text-xs text-center px-2 hidden ${
                                                        mounted && resolvedTheme === 'dark' 
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

                                {/* Duplicate Set for Seamless Loop */}
                                {partnersData.companies.map((company, index) => (
                                    <div key={`company-second-${index}`} className="flex-shrink-0 mx-4">
                                        <div className={`w-60 h-28 rounded-lg border-2 flex items-center justify-center transition-all duration-300 hover:scale-105 ${
                                            mounted && resolvedTheme === 'dark'
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
                                                    className={`font-semibold text-xs text-center px-2 hidden ${
                                                        mounted && resolvedTheme === 'dark' 
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
                        <h3 className={`text-lg font-semibold ${
                            mounted && resolvedTheme === 'dark' 
                                ? 'text-gray-200' 
                                : 'text-gray-700'
                        }`}>
                            Corporate Partners
                        </h3>
                        <div className="relative overflow-hidden">
                            <div className="flex animate-partners-scroll-right">
                                {/* First Set of Corporate Partners */}
                                {partnersData.corporates.map((corporate, index) => (
                                    <div key={`corporate-first-${index}`} className="flex-shrink-0 mx-4">
                                        <div className={`w-60 h-28 rounded-lg border-2 flex items-center justify-center transition-all duration-300 hover:scale-105 ${
                                            mounted && resolvedTheme === 'dark'
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
                                                    className={`font-semibold text-xs text-center px-2 hidden ${
                                                        mounted && resolvedTheme === 'dark' 
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

                                {/* Duplicate Set for Seamless Loop */}
                                {partnersData.corporates.map((corporate, index) => (
                                    <div key={`corporate-second-${index}`} className="flex-shrink-0 mx-4">
                                        <div className={`w-60 h-28 rounded-lg border-2 flex items-center justify-center transition-all duration-300 hover:scale-105 ${
                                            mounted && resolvedTheme === 'dark'
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
                                                    className={`font-semibold text-xs text-center px-2 hidden ${
                                                        mounted && resolvedTheme === 'dark' 
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
                        <h2 className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight ${
                            mounted && resolvedTheme === 'dark' 
                                ? 'text-gray-100' 
                                : 'text-gray-900'
                        }`}>
                            Recognised & Certified By
                        </h2>
                        <p className={`text-lg sm:text-xl leading-relaxed max-w-2xl ${
                            mounted && resolvedTheme === 'dark' 
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
                                className={`group relative p-4 rounded-lg border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg h-32 ${
                                    mounted && resolvedTheme === 'dark'
                                        ? index === 0 ? 'bg-blue-900/20 border-blue-700/40 hover:border-blue-500/60'
                                        : index === 1 ? 'bg-green-900/20 border-green-700/40 hover:border-green-500/60'
                                        : index === 2 ? 'bg-purple-900/20 border-purple-700/40 hover:border-purple-500/60'
                                        : index === 3 ? 'bg-orange-900/20 border-orange-700/40 hover:border-orange-500/60'
                                        : 'bg-red-900/20 border-red-700/40 hover:border-red-500/60'
                                        : index === 0 ? 'bg-blue-50/50 border-blue-200/60 hover:border-blue-400/70'
                                        : index === 1 ? 'bg-green-50/50 border-green-200/60 hover:border-green-400/70'
                                        : index === 2 ? 'bg-purple-50/50 border-purple-200/60 hover:border-purple-400/70'
                                        : index === 3 ? 'bg-orange-50/50 border-orange-200/60 hover:border-orange-400/70'
                                        : 'bg-red-50/50 border-red-200/60 hover:border-red-400/70'
                                }`}
                            >
                                {/* Category Badge */}
                                <div className={`absolute -top-1 left-3 px-2 py-1 rounded-full text-xs font-semibold ${
                                    mounted && resolvedTheme === 'dark'
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
                                        <h3 className={`text-sm font-bold mb-1 text-left ${
                                            mounted && resolvedTheme === 'dark' 
                                                ? 'text-gray-100' 
                                                : 'text-gray-900'
                                        }`}>
                                            {cert.name}
                                        </h3>
                                        <p className={`text-xs leading-tight text-left ${
                                            mounted && resolvedTheme === 'dark' 
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
                    <div className="flex justify-center">
                        {certificationsData.slice(4, 5).map((cert, index) => (
                            <div 
                                key={index + 4}
                                className={`group relative p-4 rounded-lg border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg w-full max-w-md h-32 ${
                                    mounted && resolvedTheme === 'dark'
                                        ? 'bg-red-900/20 border-red-700/40 hover:border-red-500/60'
                                        : 'bg-red-50/50 border-red-200/60 hover:border-red-400/70'
                                }`}
                            >
                                {/* Category Badge */}
                                <div className={`absolute -top-1 left-3 px-2 py-1 rounded-full text-xs font-semibold ${
                                    mounted && resolvedTheme === 'dark'
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
                                        <h3 className={`text-sm font-bold mb-1 text-left ${
                                            mounted && resolvedTheme === 'dark' 
                                                ? 'text-gray-100' 
                                                : 'text-gray-900'
                                        }`}>
                                            {cert.name}
                                        </h3>
                                        <p className={`text-xs leading-tight text-left ${
                                            mounted && resolvedTheme === 'dark' 
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
                </div>

            </div>
        </section>
    );
};

export default HeroSection;