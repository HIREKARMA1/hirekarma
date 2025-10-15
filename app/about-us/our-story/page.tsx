"use client";

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Navbar from '../../../components/layout/Navbar';
import Footer from '../../../components/layout/Footer';
import WavyBackground from '../../../components/layout/WavyBackground';
import { Calendar, MapPin, Target, Users, TrendingUp } from 'lucide-react';

const OurStoryPage: React.FC = () => {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className={`min-h-screen flex flex-col transition-all duration-500 ${mounted && resolvedTheme === 'dark'
                ? 'bg-gray-900'
                : 'bg-white'
            }`}>
            <Navbar />

            <main className="flex-grow">
                {/* Main Section with consistent background */}
                <section className={`relative min-h-screen transition-all duration-500 ${mounted && resolvedTheme === 'dark'
                        ? 'bg-gray-900'
                        : 'bg-white'
                    }`}>
                    {/* Wavy Background */}
                    <WavyBackground variant="primary" intensity="medium" />

                    {/* Hero Content */}
                    <div className="relative content-container pt-20 pb-20">
                        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center min-h-[85vh]">
                            {/* Left Content */}
                            <div className="space-y-8 lg:space-y-10">
                                <div className="space-y-6">
                                    <h1 className={`text-2xl sm:text-4xl lg:text-4xl xl:text-6xl font-bold leading-tight tracking-tight ${mounted && resolvedTheme === 'dark'
                                            ? 'text-gray-100'
                                            : 'text-gray-900'
                                        }`}>
                                        Bridging the Gap Between
                                        <span className={`block mt-2 text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-medium ${mounted && resolvedTheme === 'dark'
                                                ? 'text-cyan-400'
                                                : 'text-cyan-600'
                                            }`}>
                                            Academia & Industry
                                        </span>
                                    </h1>
                                </div>

                                <div className="space-y-4">
                                    <p className={`text-lg sm:text-xl leading-relaxed max-w-2xl ${mounted && resolvedTheme === 'dark'
                                            ? 'text-gray-300'
                                            : 'text-gray-600'
                                        }`}>
                                        Founded in <strong className={`${mounted && resolvedTheme === 'dark'
                                                ? 'text-gray-200'
                                                : 'text-gray-700'
                                            }`}>Bhubaneswar in 2020</strong>, HireKarma emerged from a vision to <strong className={`${mounted && resolvedTheme === 'dark'
                                                    ? 'text-gray-200'
                                                    : 'text-gray-700'
                                                }`}>transform campus recruitment</strong> through AI automation and community-driven engagement.
                                    </p>
                                </div>
                            </div>

                            {/* Right Content - Animated Placeholder */}
                            <div className="relative">
                                <div className={`relative w-full h-[500px] lg:h-[600px] rounded-3xl border overflow-hidden shadow-2xl ${mounted && resolvedTheme === 'dark'
                                        ? 'bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900 border-gray-600'
                                        : 'bg-gradient-to-br from-gray-50 via-white to-gray-100 border-gray-200'
                                    }`}>
                                    {/* Animated background pattern */}
                                    <div className="absolute inset-0 opacity-5">
                                        <div className="w-full h-full" style={{
                                            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='${mounted && resolvedTheme === 'dark' ? '%23ffffff' : '%23000000'
                                                }' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zM0 20c0-11.046 8.954-20 20-20s20 8.954 20 20-8.954 20-20 20S0 31.046 0 20z'/%3E%3C/g%3E%3C/svg%3E")`,
                                            backgroundRepeat: 'repeat'
                                        }}></div>
                                    </div>

                                    {/* Placeholder content */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-center space-y-6">
                                            <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center ${mounted && resolvedTheme === 'dark'
                                                    ? 'bg-gradient-to-br from-cyan-600 to-blue-600'
                                                    : 'bg-gradient-to-br from-cyan-500 to-blue-500'
                                                }`}>
                                                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                            <div className="space-y-2">
                                                <p className={`font-semibold text-lg ${mounted && resolvedTheme === 'dark'
                                                        ? 'text-gray-200'
                                                        : 'text-gray-700'
                                                    }`}>Origin Story Animation</p>
                                                <p className={`text-sm max-w-xs mx-auto ${mounted && resolvedTheme === 'dark'
                                                        ? 'text-gray-400'
                                                        : 'text-gray-500'
                                                    }`}>GIF showcasing our journey and founding story</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Decorative elements */}
                                    <div className={`absolute top-12 right-12 w-16 h-16 rounded-full animate-pulse ${mounted && resolvedTheme === 'dark'
                                            ? 'bg-gradient-to-r from-cyan-500/30 to-blue-500/30'
                                            : 'bg-gradient-to-r from-cyan-400/20 to-blue-400/20'
                                        }`}></div>
                                    <div className={`absolute bottom-12 left-12 w-12 h-12 rounded-full animate-pulse delay-1000 ${mounted && resolvedTheme === 'dark'
                                            ? 'bg-gradient-to-r from-blue-500/30 to-purple-500/30'
                                            : 'bg-gradient-to-r from-blue-400/20 to-purple-400/20'
                                        }`}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* The Journey Begins Section */}
                    <div className="relative content-container py-20">
                        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                            {/* Left Content */}
                            <div className="space-y-8 lg:space-y-10">
                                <div className="space-y-6">
                                    <h2 className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight ${mounted && resolvedTheme === 'dark'
                                            ? 'text-gray-100'
                                            : 'text-gray-900'
                                        }`}>
                                        The Journey Begins
                                        <span className={`block mt-2 text-lg sm:text-xl lg:text-2xl xl:text-3xl font-medium ${mounted && resolvedTheme === 'dark'
                                                ? 'text-blue-400'
                                                : 'text-blue-600'
                                            }`}>
                                            Our Founding Story
                                        </span>
                                    </h2>
                                </div>

                                <div className="space-y-4">
                                    <p className={`text-lg sm:text-xl leading-relaxed max-w-2xl ${mounted && resolvedTheme === 'dark'
                                            ? 'text-gray-300'
                                            : 'text-gray-600'
                                        }`}>
                                        Founded in <strong className={`${mounted && resolvedTheme === 'dark'
                                                ? 'text-gray-200'
                                                : 'text-gray-700'
                                            }`}>Bhubaneswar in 2020</strong> by <strong className={`${mounted && resolvedTheme === 'dark'
                                                    ? 'text-gray-200'
                                                    : 'text-gray-700'
                                                }`}>Sohan Kumar Dey</strong> and <strong className={`${mounted && resolvedTheme === 'dark'
                                                        ? 'text-gray-200'
                                                        : 'text-gray-700'
                                                    }`}>Rohit Samantaray</strong>, HireKarma arose from a passion to bridge the gap between academia and industry, particularly for students in tier-2 and tier-3 colleges across India.
                                    </p>
                                </div>

                                {/* Key Stats */}
                                <div className="grid grid-cols-2 gap-4 lg:gap-6 max-w-lg">
                                    <div className={`p-4 rounded-xl border transition-all duration-300 hover:scale-105 ${mounted && resolvedTheme === 'dark'
                                            ? 'bg-gradient-to-br from-blue-900/20 to-blue-800/10 border-blue-700/30 hover:border-blue-600/50'
                                            : 'bg-gradient-to-br from-blue-50 to-blue-100/50 border-blue-200 hover:border-blue-300'
                                        }`}>
                                        <div className="space-y-2">
                                            <div className="flex items-center space-x-2 mb-2">
                                                <Calendar className={`w-5 h-5 ${mounted && resolvedTheme === 'dark'
                                                        ? 'text-blue-400'
                                                        : 'text-blue-600'
                                                    }`} />
                                                <h3 className={`text-sm font-bold ${mounted && resolvedTheme === 'dark'
                                                        ? 'text-gray-200'
                                                        : 'text-gray-900'
                                                    }`}>Founded</h3>
                                            </div>
                                            <div className={`text-2xl sm:text-3xl font-bold ${mounted && resolvedTheme === 'dark'
                                                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400'
                                                    : 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600'
                                                }`}>
                                                2020
                                            </div>
                                            <div className={`text-xs sm:text-sm ${mounted && resolvedTheme === 'dark'
                                                    ? 'text-gray-300'
                                                    : 'text-gray-700'
                                                }`}>
                                                Bhubaneswar, India
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`p-4 rounded-xl border transition-all duration-300 hover:scale-105 ${mounted && resolvedTheme === 'dark'
                                            ? 'bg-gradient-to-br from-purple-900/20 to-purple-800/10 border-purple-700/30 hover:border-purple-600/50'
                                            : 'bg-gradient-to-br from-purple-50 to-purple-100/50 border-purple-200 hover:border-purple-300'
                                        }`}>
                                        <div className="space-y-2">
                                            <div className="flex items-center space-x-2 mb-2">
                                                <MapPin className={`w-5 h-5 ${mounted && resolvedTheme === 'dark'
                                                        ? 'text-purple-400'
                                                        : 'text-purple-600'
                                                    }`} />
                                                <h3 className={`text-sm font-bold ${mounted && resolvedTheme === 'dark'
                                                        ? 'text-gray-200'
                                                        : 'text-gray-900'
                                                    }`}>Focus</h3>
                                            </div>
                                            <div className={`text-lg sm:text-2xl font-bold ${mounted && resolvedTheme === 'dark'
                                                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400'
                                                    : 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600'
                                                }`}>
                                                Tier-2 & 3
                                            </div>
                                            <div className={`text-xs sm:text-sm ${mounted && resolvedTheme === 'dark'
                                                    ? 'text-gray-300'
                                                    : 'text-gray-700'
                                                }`}>
                                                Colleges across India
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Content - Animated Placeholder */}
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
                                                    ? 'bg-gradient-to-br from-blue-600 to-purple-600'
                                                    : 'bg-gradient-to-br from-blue-500 to-purple-500'
                                                }`}>
                                                <Users className="w-10 h-10 text-white" />
                                            </div>
                                            <div className="space-y-2">
                                                <p className={`font-semibold text-lg ${mounted && resolvedTheme === 'dark'
                                                        ? 'text-gray-200'
                                                        : 'text-gray-700'
                                                    }`}>Founders Animation</p>
                                                <p className={`text-sm max-w-xs mx-auto ${mounted && resolvedTheme === 'dark'
                                                        ? 'text-gray-400'
                                                        : 'text-gray-500'
                                                    }`}>GIF showcasing the founders and early days</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Decorative elements */}
                                    <div className={`absolute top-12 right-12 w-16 h-16 rounded-full animate-pulse ${mounted && resolvedTheme === 'dark'
                                            ? 'bg-gradient-to-r from-blue-500/30 to-purple-500/30'
                                            : 'bg-gradient-to-r from-blue-400/20 to-purple-400/20'
                                        }`}></div>
                                    <div className={`absolute bottom-12 left-12 w-12 h-12 rounded-full animate-pulse delay-1000 ${mounted && resolvedTheme === 'dark'
                                            ? 'bg-gradient-to-r from-purple-500/30 to-pink-500/30'
                                            : 'bg-gradient-to-r from-purple-400/20 to-pink-400/20'
                                        }`}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* The Challenge Section */}
                    <div className="relative content-container py-20">
                        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                            {/* Right Content - Animated Placeholder (appears first on mobile) */}
                            <div className="relative lg:order-2 order-1">
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
                                                <Target className="w-10 h-10 text-white" />
                                            </div>
                                            <div className="space-y-2">
                                                <p className={`font-semibold text-lg ${mounted && resolvedTheme === 'dark'
                                                        ? 'text-gray-200'
                                                        : 'text-gray-700'
                                                    }`}>Challenge Visualization</p>
                                                <p className={`text-sm max-w-xs mx-auto ${mounted && resolvedTheme === 'dark'
                                                        ? 'text-gray-400'
                                                        : 'text-gray-500'
                                                    }`}>GIF showcasing the challenges in campus recruitment</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Decorative elements */}
                                    <div className={`absolute top-12 right-12 w-16 h-16 rounded-full animate-pulse ${mounted && resolvedTheme === 'dark'
                                            ? 'bg-gradient-to-r from-red-500/30 to-orange-500/30'
                                            : 'bg-gradient-to-r from-red-400/20 to-orange-400/20'
                                        }`}></div>
                                    <div className={`absolute bottom-12 left-12 w-12 h-12 rounded-full animate-pulse delay-1000 ${mounted && resolvedTheme === 'dark'
                                            ? 'bg-gradient-to-r from-orange-500/30 to-yellow-500/30'
                                            : 'bg-gradient-to-r from-orange-400/20 to-yellow-400/20'
                                        }`}></div>
                                </div>
                            </div>

                            {/* Left Content */}
                            <div className="space-y-8 lg:space-y-10 lg:order-1 order-2">
                                <div className="space-y-6">
                                    <h2 className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight ${mounted && resolvedTheme === 'dark'
                                            ? 'text-gray-100'
                                            : 'text-gray-900'
                                        }`}>
                                        The Challenge We Saw
                                        <span className={`block mt-2 text-lg sm:text-xl lg:text-2xl xl:text-3xl font-medium ${mounted && resolvedTheme === 'dark'
                                                ? 'text-red-400'
                                                : 'text-red-600'
                                            }`}>
                                            Campus Hiring Roadblocks
                                        </span>
                                    </h2>
                                </div>

                                <div className="space-y-4">
                                    <p className={`text-lg sm:text-xl leading-relaxed max-w-2xl ${mounted && resolvedTheme === 'dark'
                                            ? 'text-gray-300'
                                            : 'text-gray-600'
                                        }`}>
                                        Recognizing that many <strong className={`${mounted && resolvedTheme === 'dark'
                                                ? 'text-gray-200'
                                                : 'text-gray-700'
                                            }`}>talented graduates face roadblocks</strong> to meaningful employment, we identified the <strong className={`${mounted && resolvedTheme === 'dark'
                                                    ? 'text-gray-200'
                                                    : 'text-gray-700'
                                                }`}>critical gap</strong> between what students learn in college and what industries actually need.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Our Solution Section */}
                    <div className="relative content-container py-20">
                        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                            {/* Left Content */}
                            <div className="space-y-8 lg:space-y-10">
                                <div className="space-y-6">
                                    <h2 className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight ${mounted && resolvedTheme === 'dark'
                                            ? 'text-gray-100'
                                            : 'text-gray-900'
                                        }`}>
                                        Our Transformative Solution
                                        <span className={`block mt-2 text-lg sm:text-xl lg:text-2xl xl:text-3xl font-medium ${mounted && resolvedTheme === 'dark'
                                                ? 'text-emerald-400'
                                                : 'text-emerald-600'
                                            }`}>
                                            AI-Powered Innovation
                                        </span>
                                    </h2>
                                </div>

                                <div className="space-y-4">
                                    <p className={`text-lg sm:text-xl leading-relaxed max-w-2xl ${mounted && resolvedTheme === 'dark'
                                            ? 'text-gray-300'
                                            : 'text-gray-600'
                                        }`}>
                                        The founders set out to <strong className={`${mounted && resolvedTheme === 'dark'
                                                ? 'text-gray-200'
                                                : 'text-gray-700'
                                            }`}>transform campus recruitment</strong> through AI automation, <strong className={`${mounted && resolvedTheme === 'dark'
                                                    ? 'text-gray-200'
                                                    : 'text-gray-700'
                                                }`}>predictive analytics</strong>, and community-driven engagement. Our platform streamlines the entire hiring journey.
                                    </p>
                                </div>
                            </div>

                            {/* Right Content - Animated Placeholder */}
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
                                                <TrendingUp className="w-10 h-10 text-white" />
                                            </div>
                                            <div className="space-y-2">
                                                <p className={`font-semibold text-lg ${mounted && resolvedTheme === 'dark'
                                                        ? 'text-gray-200'
                                                        : 'text-gray-700'
                                                    }`}>Solution Visualization</p>
                                                <p className={`text-sm max-w-xs mx-auto ${mounted && resolvedTheme === 'dark'
                                                        ? 'text-gray-400'
                                                        : 'text-gray-500'
                                                    }`}>GIF showcasing our AI-powered platform and features</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Decorative elements */}
                                    <div className={`absolute top-12 right-12 w-16 h-16 rounded-full animate-pulse ${mounted && resolvedTheme === 'dark'
                                            ? 'bg-gradient-to-r from-emerald-500/30 to-teal-500/30'
                                            : 'bg-gradient-to-r from-emerald-400/20 to-teal-400/20'
                                        }`}></div>
                                    <div className={`absolute bottom-12 left-12 w-12 h-12 rounded-full animate-pulse delay-1000 ${mounted && resolvedTheme === 'dark'
                                            ? 'bg-gradient-to-r from-green-500/30 to-emerald-500/30'
                                            : 'bg-gradient-to-r from-green-400/20 to-emerald-400/20'
                                        }`}></div>
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

export default OurStoryPage;
