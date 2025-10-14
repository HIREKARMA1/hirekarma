"use client";

import React from 'react';
import Image from 'next/image';
import Navbar from '../../../components/layout/Navbar';
import Footer from '../../../components/layout/Footer';
import WavyBackground from '../../../components/layout/WavyBackground';
import { GraduationCap, Target, Users, TrendingUp, Award, Briefcase, Brain, CheckCircle } from 'lucide-react';

const ForStudentsPage: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar />
            
            <main className="flex-grow">
                {/* Header Section */}
                <section className="relative py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
                    <WavyBackground variant="accent" intensity="medium" />
                    <div className="content-container">
                        <div className="max-w-7xl mx-auto">
                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                {/* Left Side - Content */}
                                <div>
                                    <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
                                        <GraduationCap className="w-4 h-4" />
                                        <span className="text-sm font-semibold">For Students</span>
                                    </div>
                                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-700 leading-tight mb-6">
                                        Unlock Your Dream Career with HireKarma
                                    </h1>
                                    <p className="text-xl text-gray-600 leading-relaxed mb-8">
                                        HireKarma is your launchpad to high-growth careers. Gain industry-aligned skills, 
                                        connect directly with top employers, and access personalized training and placement 
                                        support—all from a single platform.
                                    </p>
                                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                        The AI-powered assessment and upskilling modules simulate real recruitment scenarios, 
                                        boosting your confidence and making you job-ready from day one.
                                    </p>
                                </div>

                                {/* Right Side - Image */}
                                <div className="relative">
                                    <div className="rounded-2xl overflow-hidden shadow-2xl">
                                        <Image
                                            src="/students.jpg"
                                            alt="Students achieving success"
                                            width={600}
                                            height={500}
                                            className="w-full h-auto object-cover"
                                        />
                                    </div>
                                    <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-200 rounded-full opacity-50 blur-3xl"></div>
                                    <div className="absolute -top-6 -right-6 w-40 h-40 bg-cyan-200 rounded-full opacity-50 blur-3xl"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Key Features Section */}
                <section className="relative py-16 lg:py-24 bg-white dark:bg-gray-900">
                    <WavyBackground variant="primary" intensity="light" />
                    <div className="content-container">
                        <div className="max-w-7xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl sm:text-5xl font-bold text-blue-700 mb-6">Key Features</h2>
                                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                    Everything you need to launch your career and stand out from the crowd
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {/* Feature 1 */}
                                <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group">
                                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-6 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                                        <Briefcase className="w-8 h-8 text-blue-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Curated Opportunities</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Access internships and placement drives with leading recruiters matched to your profile
                                    </p>
                                </div>

                                {/* Feature 2 */}
                                <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group">
                                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-6 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                                        <Brain className="w-8 h-8 text-blue-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Career Guidance</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Resume analytics, performance feedback, and personalized career counseling
                                    </p>
                                </div>

                                {/* Feature 3 */}
                                <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group">
                                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-6 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                                        <Users className="w-8 h-8 text-blue-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Community Networking</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Connect with alumni and expert mentors for guidance and support
                                    </p>
                                </div>

                                {/* Feature 4 */}
                                <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group">
                                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-6 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                                        <Target className="w-8 h-8 text-blue-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Smart Job Matching</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Transparent job-matching and opportunity alerts tailored to your skills
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits Section with Image */}
                <section className="relative py-16 lg:py-24 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900">
                    <WavyBackground variant="secondary" intensity="light" />
                    <div className="content-container">
                        <div className="max-w-7xl mx-auto">
                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                {/* Left Side - Image */}
                                <div className="order-2 lg:order-1">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-4">
                                            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                                                <Image
                                                    src="/university.jpg"
                                                    alt="Campus life"
                                                    width={300}
                                                    height={400}
                                                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                                                />
                                            </div>
                                            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                                                <Image
                                                    src="/corporate.jpg"
                                                    alt="Professional success"
                                                    width={300}
                                                    height={300}
                                                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-4 pt-8">
                                            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                                                <Image
                                                    src="/demo.png"
                                                    alt="HireKarma platform"
                                                    width={300}
                                                    height={300}
                                                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                                                />
                                            </div>
                                            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                                                <Image
                                                    src="/students.jpg"
                                                    alt="Student success"
                                                    width={300}
                                                    height={400}
                                                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Side - Content */}
                                <div className="order-1 lg:order-2">
                                    <h2 className="text-4xl sm:text-5xl font-bold text-blue-700 mb-6">
                                        Leap Beyond Boundaries
                                    </h2>
                                    <p className="text-xl text-gray-600 leading-relaxed mb-8">
                                        With HireKarma, every student can achieve their career aspirations, 
                                        regardless of college, course, or background.
                                    </p>
                                    
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-3">
                                            <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                                            <div>
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">Equal Opportunities</h3>
                                                <p className="text-gray-600">Access top employers regardless of your college tier</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                                            <div>
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">Skill Development</h3>
                                                <p className="text-gray-600">AI-powered assessments and personalized improvement paths</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                                            <div>
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">Career Readiness</h3>
                                                <p className="text-gray-600">Real-world recruitment scenarios to boost your confidence</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                                            <div>
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">Continuous Support</h3>
                                                <p className="text-gray-600">From application to placement, we're with you every step</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="relative py-16 lg:py-24 bg-gradient-to-br from-blue-700 to-blue-900 dark:from-blue-800 dark:to-blue-950">
                    <WavyBackground variant="accent" intensity="medium" />
                    <div className="content-container">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                                Ready to Launch Your Career?
                            </h2>
                            <p className="text-xl text-blue-100 mb-10">
                                Join thousands of students who have found their dream jobs through HireKarma
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="px-8 py-4 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                                    Get Started Today
                                </button>
                                <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300">
                                    Learn More
                                </button>
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

