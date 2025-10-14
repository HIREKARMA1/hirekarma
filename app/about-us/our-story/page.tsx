"use client";

import React from 'react';
import Navbar from '../../../components/layout/Navbar';
import Footer from '../../../components/layout/Footer';
import WavyBackground from '../../../components/layout/WavyBackground';
import { Calendar, MapPin, Target, Users, TrendingUp, Heart } from 'lucide-react';

const OurStoryPage: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar />
            
            <main className="flex-grow">
                {/* Hero Section */}
                <section className="relative bg-white dark:bg-gray-900 py-20 lg:py-32">
                    {/* Wavy Background */}
                    <WavyBackground variant="accent" intensity="medium" />
                    
                    <div className="relative content-container">
                        <div className="max-w-4xl mx-auto text-center">
                            {/* Main Heading */}
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6">
                                Bridging the Gap Between
                                <span className="block text-blue-600 mt-4">
                                    Academia & Industry
                                </span>
                            </h1>
                            
                            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                                Founded in Bhubaneswar in 2020, HireKarma emerged from a vision to transform campus recruitment through AI automation and community-driven engagement.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Story Content */}
                <section className="relative py-6 lg:py-3 bg-white dark:bg-gray-900">
                    <WavyBackground variant="neutral" intensity="light" />
                    <div className="content-container">
                        <div className="max-w-7xl mx-auto">
                            {/* Timeline Section */}
                            <div className="grid lg:grid-cols-12 gap-8 items-center mb-24">
                                {/* Left Content - 5 columns */}
                                <div className="lg:col-span-5 space-y-8">
                                    <div className="space-y-6">
                                        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                                            The Journey Begins
                                        </h2>
                                        <p className="text-lg text-gray-600 leading-relaxed">
                                            Founded in <span className="font-semibold text-blue-600">Bhubaneswar in 2020</span> by 
                                            <span className="font-semibold text-blue-600"> Sohan Kumar Dey</span> and 
                                            <span className="font-semibold text-blue-600"> Rohit Samantaray</span>, 
                                            HireKarma arose from a passion to bridge the gap between academia and industry, 
                                            particularly for students in tier-2 and tier-3 colleges across India.
                                        </p>
                                    </div>

                                    {/* Key Stats */}
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="p-6 bg-blue-50 rounded-lg border border-blue-200">
                                            <div className="flex items-center space-x-3 mb-3">
                                                <Calendar className="w-6 h-6 text-blue-600" />
                                                <h3 className="text-lg font-bold text-gray-900">Founded</h3>
                                            </div>
                                            <p className="text-2xl font-bold text-blue-600">2020</p>
                                            <p className="text-sm text-gray-600">Bhubaneswar, India</p>
                                        </div>
                                        <div className="p-6 bg-blue-50 rounded-lg border border-blue-200">
                                            <div className="flex items-center space-x-3 mb-3">
                                                <MapPin className="w-6 h-6 text-blue-600" />
                                                <h3 className="text-lg font-bold text-gray-900">Focus</h3>
                                            </div>
                                            <p className="text-lg font-bold text-blue-600">Tier-2 & 3</p>
                                            <p className="text-sm text-gray-600">Colleges across India</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Expanded Photo Placeholder - 7 columns */}
                                <div className="lg:col-span-7 flex justify-center">
                                    <div className="relative w-full h-[500px] rounded-lg overflow-hidden bg-blue-50 border-2 border-dashed border-blue-300">
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="text-center space-y-6">
                                                <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center mx-auto">
                                                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                    </svg>
                                                </div>
                                                <div className="space-y-3">
                                                    <p className="text-lg font-semibold text-blue-600">Demo Photo</p>
                                                    <p className="text-sm text-gray-500">Founders Photo</p>
                                                    <p className="text-xs text-gray-400">This area will display the founders' image</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Challenge & Solution */}
                            <div className="grid lg:grid-cols-12 gap-8 items-center mb-24">
                                {/* Left Content - 5 columns */}
                                <div className="lg:col-span-5 space-y-8 lg:order-1 order-2">
                                    <div className="space-y-6">
                                        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                                            The Challenge We Saw
                                        </h2>
                                        <p className="text-lg text-gray-600 leading-relaxed">
                                            Recognizing that many <span className="font-semibold text-orange-600">talented graduates face roadblocks</span> to meaningful employment, 
                                            we identified the critical gap between what students learn in college and what industries actually need.
                                        </p>
                                    </div>

                                    {/* Key Points */}
                                    <div className="space-y-4">
                                        <div className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-gray-200">
                                            <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                <span className="text-orange-600 font-bold text-sm">1</span>
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-gray-900 mb-1">Limited Industry Exposure</h3>
                                                <p className="text-gray-600">Students lacked real-world skills and industry insights</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-gray-200">
                                            <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                <span className="text-orange-600 font-bold text-sm">2</span>
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-gray-900 mb-1">Geographic Barriers</h3>
                                                <p className="text-gray-600">Tier-2 and tier-3 colleges had limited access to top employers</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-gray-200">
                                            <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                <span className="text-orange-600 font-bold text-sm">3</span>
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-gray-900 mb-1">Inefficient Recruitment</h3>
                                                <p className="text-gray-600">Traditional hiring processes were slow and resource-intensive</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Expanded Photo Placeholder - 7 columns */}
                                <div className="lg:col-span-7 flex justify-center lg:order-2 order-1">
                                    <div className="relative w-full h-[500px] rounded-lg overflow-hidden bg-orange-50 border-2 border-dashed border-orange-300">
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="text-center space-y-6">
                                                <div className="w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center mx-auto">
                                                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                    </svg>
                                                </div>
                                                <div className="space-y-3">
                                                    <p className="text-lg font-semibold text-orange-600">Demo Photo</p>
                                                    <p className="text-sm text-gray-500">Challenge Visualization</p>
                                                    <p className="text-xs text-gray-400">This area will display challenge-related imagery</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Solution & Impact */}
                            <div className="grid lg:grid-cols-12 gap-8 items-center">
                                {/* Left Content - 5 columns */}
                                <div className="lg:col-span-5 space-y-8">
                                    <div className="space-y-6">
                                        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                                            Our Transformative Solution
                                        </h2>
                                        <p className="text-lg text-gray-600 leading-relaxed">
                                            The founders set out to <span className="font-semibold text-green-600">transform campus recruitment</span> through 
                                            AI automation, predictive analytics, and community-driven engagement. Our platform streamlines the entire hiring journey.
                                        </p>
                                    </div>

                                    {/* Solution Features */}
                                    <div className="space-y-4">
                                        <div className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-gray-200">
                                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                <Users className="w-4 h-4 text-green-600" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-gray-900 mb-1">AI Automation</h3>
                                                <p className="text-gray-600">Streamlined recruitment processes with intelligent matching</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-gray-200">
                                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                <TrendingUp className="w-4 h-4 text-green-600" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-gray-900 mb-1">Predictive Analytics</h3>
                                                <p className="text-gray-600">Data-driven insights for better hiring decisions</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-gray-200">
                                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                <Heart className="w-4 h-4 text-green-600" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-gray-900 mb-1">Community Engagement</h3>
                                                <p className="text-gray-600">Building strong networks between all stakeholders</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Expanded Photo Placeholder - 7 columns */}
                                <div className="lg:col-span-7 flex justify-center">
                                    <div className="relative w-full h-[500px] rounded-lg overflow-hidden bg-green-50 border-2 border-dashed border-green-300">
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="text-center space-y-6">
                                                <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                                                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                    </svg>
                                                </div>
                                                <div className="space-y-3">
                                                    <p className="text-lg font-semibold text-green-600">Demo Photo</p>
                                                    <p className="text-sm text-gray-500">Solution Visualization</p>
                                                    <p className="text-xs text-gray-400">This area will display solution-related imagery</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final Impact Section */}
                <section className="relative py-20 bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-700 dark:to-blue-700">
                    <WavyBackground variant="primary" intensity="light" />
                    <div className="content-container">
                        <div className="max-w-4xl mx-auto text-center text-white">
                            <h2 className="text-4xl sm:text-5xl font-bold mb-8 leading-tight">
                                Today's Impact
                            </h2>
                            <p className="text-xl sm:text-2xl leading-relaxed mb-12 opacity-90">
                                With a rapidly growing footprint and deep institutional partnerships, 
                                HireKarma stands as <span className="font-bold">India's trusted HRTech leader</span> for 
                                campus talent transformation.
                            </p>
                            
                            {/* Impact Stats */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                                <div className="text-center">
                                    <div className="text-4xl font-bold mb-2">200+</div>
                                    <p className="text-cyan-100">Partnered Colleges</p>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-bold mb-2">50K+</div>
                                    <p className="text-cyan-100">Students Transformed</p>
                                </div>
                                <div className="text-center">
                                    <div className="text-4xl font-bold mb-2">10K+</div>
                                    <p className="text-cyan-100">Successful Placements</p>
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
