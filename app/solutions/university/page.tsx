"use client";

import React from 'react';
import Image from 'next/image';
import Navbar from '../../../components/layout/Navbar';
import Footer from '../../../components/layout/Footer';
import WavyBackground from '../../../components/layout/WavyBackground';
import { School, Target, Users, TrendingUp, LineChart, Handshake, Award, CheckCircle } from 'lucide-react';

const ForUniversityPage: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar />
            
            <main className="flex-grow">
                {/* Header Section */}
                <section className="relative py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
                    <WavyBackground variant="primary" intensity="medium" />
                    <div className="content-container">
                        <div className="max-w-7xl mx-auto">
                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                {/* Left Side - Content */}
                                <div>
                                    <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
                                        <School className="w-4 h-4" />
                                        <span className="text-sm font-semibold">For Universities</span>
                                    </div>
                                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-700 leading-tight mb-6">
                                        Transform Placement Outcomes with AI-Driven Insights
                                    </h1>
                                    <p className="text-xl text-gray-600 leading-relaxed mb-8">
                                        Empower your placement and training (T&P) cell with automation, analytics, and direct 
                                        industry connectivity. HireKarma enables universities to boost placement rates, build 
                                        stronger recruiter relationships, and deliver actionable employability data that enhances 
                                        both student and institute visibility.
                                    </p>
                                </div>

                                {/* Right Side - Image */}
                                <div className="relative">
                                    <div className="rounded-2xl overflow-hidden shadow-2xl">
                                        <Image
                                            src="/university.jpg"
                                            alt="University campus excellence"
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
                    <WavyBackground variant="secondary" intensity="light" />
                    <div className="content-container">
                        <div className="max-w-7xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl sm:text-5xl font-bold text-blue-700 mb-6">Key Features</h2>
                                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                    A complete solution for modern placement management and student success
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {/* Feature 1 */}
                                <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group">
                                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-6 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                                        <Target className="w-8 h-8 text-blue-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">End-to-End Management</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Manage placement cycles, drives, and recruiter engagement seamlessly
                                    </p>
                                </div>

                                {/* Feature 2 */}
                                <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group">
                                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-6 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                                        <Users className="w-8 h-8 text-blue-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Digital Resume Banks</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Centralized student profiles with eligibility tracking and placement analytics
                                    </p>
                                </div>

                                {/* Feature 3 */}
                                <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group">
                                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-6 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                                        <LineChart className="w-8 h-8 text-blue-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Skill Assessment Tools</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        AI-powered assessments with personalized improvement paths for students
                                    </p>
                                </div>

                                {/* Feature 4 */}
                                <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group">
                                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-6 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                                        <Handshake className="w-8 h-8 text-blue-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Recruiter Access</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        On-demand access to HRTech resources and recruiter events
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Benefits Section with Image */}
                <section className="relative py-16 lg:py-24 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900">
                    <WavyBackground variant="accent" intensity="light" />
                    <div className="content-container">
                        <div className="max-w-7xl mx-auto">
                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                {/* Left Side - Image */}
                                <div className="order-2 lg:order-1">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-4">
                                            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                                                <Image
                                                    src="/students.jpg"
                                                    alt="Student success"
                                                    width={300}
                                                    height={400}
                                                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                                                />
                                            </div>
                                            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                                                <Image
                                                    src="/corporate.jpg"
                                                    alt="Industry partnerships"
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
                                                    alt="Platform insights"
                                                    width={300}
                                                    height={300}
                                                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                                                />
                                            </div>
                                            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                                                <Image
                                                    src="/university.jpg"
                                                    alt="Campus excellence"
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
                                        Elevate Outcomes & Reputation
                                    </h2>
                                    <p className="text-xl text-gray-600 leading-relaxed mb-8">
                                        HireKarma partners with campuses to elevate outcomes, brand reputation, and student 
                                        employability—delivering a win-win for institutions, students, and employers.
                                    </p>
                                    
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-3">
                                            <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                                            <div>
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">Higher Placement Rates</h3>
                                                <p className="text-gray-600">Boost placement outcomes through industry connections and skill development</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                                            <div>
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">Stronger Recruiter Relations</h3>
                                                <p className="text-gray-600">Build lasting partnerships with top companies through our network</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                                            <div>
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">Data-Driven Insights</h3>
                                                <p className="text-gray-600">Actionable employability data to enhance institutional visibility</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                                            <div>
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">Automated Workflows</h3>
                                                <p className="text-gray-600">Save time with automated placement cycle management</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Impact Stats Section */}
                <section className="relative py-16 lg:py-24 bg-white dark:bg-gray-900">
                    <WavyBackground variant="neutral" intensity="light" />
                    <div className="content-container">
                        <div className="max-w-7xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-4xl sm:text-5xl font-bold text-blue-700 mb-6">
                                    Our Impact on Partner Institutions
                                </h2>
                                <p className="text-xl text-gray-600">
                                    Real results from universities that trust HireKarma
                                </p>
                            </div>
                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                                    <div className="text-5xl font-bold text-blue-700 mb-3">200+</div>
                                    <p className="text-lg text-gray-700 font-medium">Partner Universities</p>
                                </div>
                                <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                                    <div className="text-5xl font-bold text-blue-700 mb-3">85%</div>
                                    <p className="text-lg text-gray-700 font-medium">Employability Uplift</p>
                                </div>
                                <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                                    <div className="text-5xl font-bold text-blue-700 mb-3">50K+</div>
                                    <p className="text-lg text-gray-700 font-medium">Students Placed</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="relative py-16 lg:py-24 bg-gradient-to-br from-blue-700 to-blue-900 dark:from-blue-800 dark:to-blue-950">
                    <WavyBackground variant="primary" intensity="medium" />
                    <div className="content-container">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                                Ready to Elevate Your Placement Cell?
                            </h2>
                            <p className="text-xl text-blue-100 mb-10">
                                Join 200+ institutions transforming their placement outcomes with HireKarma
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="px-8 py-4 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                                    Partner With Us
                                </button>
                                <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300">
                                    Request Info
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

export default ForUniversityPage;

