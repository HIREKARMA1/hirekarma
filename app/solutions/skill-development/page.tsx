"use client";

import React from 'react';
import Image from 'next/image';
import Navbar from '../../../components/layout/Navbar';
import Footer from '../../../components/layout/Footer';
import WavyBackground from '../../../components/layout/WavyBackground';
import { Award, Target, Users, TrendingUp, BookOpen, Zap, BarChart3, CheckCircle } from 'lucide-react';

const ForSkillDevelopmentPage: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar />
            
            <main className="flex-grow">
                {/* Header Section */}
                <section className="relative py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
                    <WavyBackground variant="secondary" intensity="medium" />
                    <div className="content-container">
                        <div className="max-w-7xl mx-auto">
                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                {/* Left Side - Content */}
                                <div>
                                    <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
                                        <Award className="w-4 h-4" />
                                        <span className="text-sm font-semibold">For Skill Development Organizations</span>
                                    </div>
                                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-700 leading-tight mb-6">
                                        Drive Impactful Upskilling and Employability
                                    </h1>
                                    <p className="text-xl text-gray-600 leading-relaxed mb-8">
                                        HireKarma equips skilling centers and development organizations with technology to 
                                        maximize training impact, track student outcomes, and connect participants to real 
                                        hiring opportunities. Our scalable, modular platform integrates learning, skill 
                                        validation, and employer connections to ensure programs deliver measurable career transitions.
                                    </p>
                                </div>

                                {/* Right Side - Image */}
                                <div className="relative">
                                    <div className="rounded-2xl overflow-hidden shadow-2xl">
                                        <Image
                                            src="/students.jpg"
                                            alt="Skill development success"
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
                                    A holistic path from learning to employment, powered by industry and fueled by technology
                                </p>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {/* Feature 1 */}
                                <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group">
                                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-6 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                                        <Users className="w-8 h-8 text-blue-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Participant Tracking</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Complete onboarding, skill tracking, and digital credentialing system
                                    </p>
                                </div>

                                {/* Feature 2 */}
                                <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group">
                                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-6 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                                        <Target className="w-8 h-8 text-blue-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">AI Assessments</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Smart gap analysis and targeted improvement recommendations
                                    </p>
                                </div>

                                {/* Feature 3 */}
                                <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group">
                                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-6 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                                        <Zap className="w-8 h-8 text-blue-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Employer Partnerships</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Direct connections to internship and placement opportunities
                                    </p>
                                </div>

                                {/* Feature 4 */}
                                <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group">
                                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-6 group-hover:from-blue-200 group-hover:to-blue-300 transition-all duration-300">
                                        <BarChart3 className="w-8 h-8 text-blue-600" />
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Impact Dashboards</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Real-time reporting for funders and stakeholders
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
                                {/* Left Side - Content */}
                                <div>
                                    <h2 className="text-4xl sm:text-5xl font-bold text-blue-700 mb-6">
                                        From Training to Employment
                                    </h2>
                                    <p className="text-xl text-gray-600 leading-relaxed mb-8">
                                        With HireKarma, skill development is not just training—it's a holistic path from 
                                        learning to employment, powered by industry and fueled by technology.
                                    </p>
                                    
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-3">
                                            <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                                            <div>
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">Maximize Impact</h3>
                                                <p className="text-gray-600">Technology-driven tools to enhance training effectiveness and outcomes</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                                            <div>
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">Track Outcomes</h3>
                                                <p className="text-gray-600">Comprehensive analytics on participant progress and career transitions</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                                            <div>
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">Connect to Employers</h3>
                                                <p className="text-gray-600">Bridge the gap between skill training and actual employment opportunities</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                                            <div>
                                                <h3 className="text-lg font-bold text-gray-900 mb-1">Demonstrate Value</h3>
                                                <p className="text-gray-600">Measurable impact reporting for funders and stakeholders</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Side - Image */}
                                <div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-4">
                                            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                                                <Image
                                                    src="/demo.png"
                                                    alt="Training platform"
                                                    width={300}
                                                    height={400}
                                                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                                                />
                                            </div>
                                            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                                                <Image
                                                    src="/corporate.jpg"
                                                    alt="Industry connections"
                                                    width={300}
                                                    height={300}
                                                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-4 pt-8">
                                            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                                                <Image
                                                    src="/university.jpg"
                                                    alt="Skill development"
                                                    width={300}
                                                    height={300}
                                                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                                                />
                                            </div>
                                            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                                                <Image
                                                    src="/students.jpg"
                                                    alt="Success stories"
                                                    width={300}
                                                    height={400}
                                                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Value Propositions Section */}
                <section className="relative py-16 lg:py-24 bg-white dark:bg-gray-900">
                    <WavyBackground variant="neutral" intensity="light" />
                    <div className="content-container">
                        <div className="max-w-7xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-4xl sm:text-5xl font-bold text-blue-700 mb-6">
                                    Why Choose HireKarma
                                </h2>
                                <p className="text-xl text-gray-600">
                                    Complete solutions for skill development organizations
                                </p>
                            </div>
                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
                                    <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                                        <BookOpen className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Modular Platform</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Scalable solutions that grow with your organization and adapt to your needs
                                    </p>
                                </div>
                                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
                                    <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                                        <TrendingUp className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Measurable Results</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Track and demonstrate tangible career transitions and skill improvements
                                    </p>
                                </div>
                                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
                                    <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                                        <Zap className="w-7 h-7 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Industry Integration</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Direct pathways to employment through our extensive employer network
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="relative py-16 lg:py-24 bg-gradient-to-br from-blue-700 to-blue-900 dark:from-blue-800 dark:to-blue-950">
                    <WavyBackground variant="secondary" intensity="medium" />
                    <div className="content-container">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                                Ready to Transform Your Skill Development Programs?
                            </h2>
                            <p className="text-xl text-blue-100 mb-10">
                                Partner with us to create measurable career outcomes for your participants
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="px-8 py-4 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                                    Become a Partner
                                </button>
                                <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300">
                                    Explore Solutions
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

export default ForSkillDevelopmentPage;

