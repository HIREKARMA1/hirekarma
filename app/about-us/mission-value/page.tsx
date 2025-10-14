"use client";

import React from 'react';
import Navbar from '../../../components/layout/Navbar';
import Footer from '../../../components/layout/Footer';
import WavyBackground from '../../../components/layout/WavyBackground';
import { Users, Heart, Shield, Lightbulb } from 'lucide-react';

const MissionValuePage: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar />
            
            <main className="flex-grow">
                {/* Header Section */}
                <section className="relative py-16 lg:py-24 bg-white dark:bg-gray-900">
                    <WavyBackground variant="primary" intensity="medium" />
                    <div className="content-container">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-blue-700 leading-tight mb-8">
                                Mission & Values
                            </h1>
                            <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                                Our commitment to transforming campus recruitment through technology, innovation, and inclusive practices.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Key Statistics Section - Similar to OORU */}
                <section className="relative py-6 lg:py-6 bg-white dark:bg-gray-900">
                    <WavyBackground variant="neutral" intensity="light" />
                    <div className="content-container">
                        <div className="max-w-7xl mx-auto">
                            <div className="grid lg:grid-cols-4 gap-8 mb-16">
                                {/* Statistic 1 */}
                                <div className="text-center p-8 bg-white rounded-xl border border-gray-200 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                                    <div className="text-5xl sm:text-6xl font-bold text-blue-700 mb-4">200+</div>
                                    <p className="text-lg text-gray-700 font-medium">
                                        Partnered colleges across India, focusing on tier-2 and tier-3 institutions
                                    </p>
                                </div>
                                
                                {/* Statistic 2 */}
                                <div className="text-center p-8 bg-white rounded-xl border border-gray-200 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                                    <div className="text-5xl sm:text-6xl font-bold text-blue-700 mb-4">50K+</div>
                                    <p className="text-lg text-gray-700 font-medium">
                                        Students transformed through our platform and career guidance
                                    </p>
                                </div>
                                
                                {/* Statistic 3 */}
                                <div className="text-center p-8 bg-white rounded-xl border border-gray-200 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                                    <div className="text-5xl sm:text-6xl font-bold text-blue-700 mb-4">3x</div>
                                    <p className="text-lg text-gray-700 font-medium">
                                        Faster recruitment cycles through AI automation and streamlined processes
                                    </p>
                                </div>
                                
                                {/* Statistic 4 */}
                                <div className="text-center p-8 bg-white rounded-xl border border-gray-200 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                                    <div className="text-5xl sm:text-6xl font-bold text-blue-700 mb-4">85%</div>
                                    <p className="text-lg text-gray-700 font-medium">
                                        Employability uplift achieved through skill assessment and targeted training
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mission & Vision Section - Inspired by the provided design */}
                <section className="relative py-16 lg:py-24 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 dark:from-purple-950 dark:via-blue-950 dark:to-indigo-950">
                    <WavyBackground variant="secondary" intensity="medium" />
                    <div className="content-container">
                        <div className="max-w-6xl mx-auto">
                            {/* Main heading */}
                            <div className="text-center mb-16">
                                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                                    Our Mission & Vision
                                </h2>
                            </div>

                            {/* Mission and Vision Cards */}
                            <div className="grid lg:grid-cols-2 gap-8 mb-16">
                                {/* Mission Card */}
                                <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
                                    <div className="flex items-center mb-6">
                                        <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-6">
                                            <Lightbulb className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">Our Mission</h3>
                                    </div>
                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        To transform campus recruitment through AI automation, predictive analytics, and community-driven engagement, 
                                        ensuring no student is left behind in their career journey while empowering educational institutions 
                                        and employers with efficient, transparent hiring processes.
                                    </p>
                                </div>

                                {/* Vision Card */}
                                <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
                                    <div className="flex items-center mb-6">
                                        <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center mr-6">
                                            <Heart className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">Our Vision</h3>
                                    </div>
                                    <p className="text-lg text-gray-700 leading-relaxed">
                                        To create a world where every student, regardless of their background or location, 
                                        has equal access to meaningful career opportunities through technology-enabled solutions 
                                        that bridge the gap between academia and industry.
                                    </p>
                                </div>
                            </div>

                            {/* Our Values Section */}
                            <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-2xl">
                                <div className="text-center mb-12">
                                    <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Values</h3>
                                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                        These principles guide everything we do and shape how we serve our community of students, educators, and employers.
                                    </p>
                                </div>

                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {/* Value 1 - Inclusivity */}
                                    <div className="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 group">
                                        <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg flex items-center justify-center mr-4 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                                            <Users className="w-6 h-6 text-blue-600" />
                                        </div>
                                        <span className="text-lg font-semibold text-gray-800">Inclusivity & Equal Opportunity</span>
                                    </div>

                                    {/* Value 2 - Transparency */}
                                    <div className="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 group">
                                        <div className="w-12 h-12 bg-gradient-to-r from-green-100 to-green-200 rounded-lg flex items-center justify-center mr-4 group-hover:from-green-200 group-hover:to-green-300 transition-all duration-300">
                                            <Shield className="w-6 h-6 text-green-600" />
                                        </div>
                                        <span className="text-lg font-semibold text-gray-800">Transparency & Trust</span>
                                    </div>

                                    {/* Value 3 - Innovation */}
                                    <div className="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 group">
                                        <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-purple-200 rounded-lg flex items-center justify-center mr-4 group-hover:from-purple-200 group-hover:to-purple-300 transition-all duration-300">
                                            <Lightbulb className="w-6 h-6 text-purple-600" />
                                        </div>
                                        <span className="text-lg font-semibold text-gray-800">Innovation & Impact</span>
                                    </div>

                                    {/* Value 4 - Community */}
                                    <div className="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 group">
                                        <div className="w-12 h-12 bg-gradient-to-r from-orange-100 to-orange-200 rounded-lg flex items-center justify-center mr-4 group-hover:from-orange-200 group-hover:to-orange-300 transition-all duration-300">
                                            <Heart className="w-6 h-6 text-orange-600" />
                                        </div>
                                        <span className="text-lg font-semibold text-gray-800">Community & Progress</span>
                                    </div>

                                    {/* Value 5 - Excellence */}
                                    <div className="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 group">
                                        <div className="w-12 h-12 bg-gradient-to-r from-red-100 to-red-200 rounded-lg flex items-center justify-center mr-4 group-hover:from-red-200 group-hover:to-red-300 transition-all duration-300">
                                            <Shield className="w-6 h-6 text-red-600" />
                                        </div>
                                        <span className="text-lg font-semibold text-gray-800">Excellence & Quality</span>
                                    </div>

                                    {/* Value 6 - Growth */}
                                    <div className="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-300 group">
                                        <div className="w-12 h-12 bg-gradient-to-r from-indigo-100 to-indigo-200 rounded-lg flex items-center justify-center mr-4 group-hover:from-indigo-200 group-hover:to-indigo-300 transition-all duration-300">
                                            <Users className="w-6 h-6 text-indigo-600" />
                                        </div>
                                        <span className="text-lg font-semibold text-gray-800">Growth & Development</span>
                                    </div>
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

export default MissionValuePage;
