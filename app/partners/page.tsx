"use client";

import React from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import WavyBackground from '../../components/layout/WavyBackground';
import { GraduationCap, Briefcase, Award, Handshake } from 'lucide-react';

// College Partners Data
const collegePartners = [
    {
        name: "AISECT",
        description: "All India Society for Electronics & Computer Technology - India's largest education and skill development network",
        logo: "/logo.png" // Replace with actual logo
    },
    {
        name: "College of IT and Management Education (CIME)",
        description: "Premier institution in Bhubaneswar delivering quality technical and management education",
        logo: "/logo.png"
    },
    {
        name: "Orissa University of Agriculture and Technology",
        description: "Leading agricultural and technology university fostering innovation and research",
        logo: "/logo.png"
    },
    {
        name: "Institute of Management & Information Technology",
        description: "Cuttack's premier institute for management and IT excellence",
        logo: "/logo.png"
    },
    {
        name: "GIET Ghangapatna",
        description: "Gandhi Institute of Engineering and Technology - Excellence in technical education",
        logo: "/logo.png"
    },
    {
        name: "Eastern Academy of Technology and Management",
        description: "Bhubaneswar's leading institution for technology and management studies",
        logo: "/logo.png"
    }
];

// Corporate Partners Data
const corporatePartners = [
    {
        name: "Quality Austria Central Asia Pvt. Ltd.",
        description: "International quality management and certification leader partnering for campus placements",
        logo: "/logo.png"
    },
    {
        name: "OLA Krutrim",
        description: "AI-powered innovation leader conducting campus drives across Odisha",
        logo: "/logo.png"
    },
    {
        name: "Leading MNCs",
        description: "National and global corporations hiring pre-vetted talent through our platform",
        logo: "/logo.png"
    },
    {
        name: "Tech Startups",
        description: "Emerging technology companies building teams with skilled graduates",
        logo: "/logo.png"
    },
    {
        name: "Fortune 500 Companies",
        description: "Industry leaders leveraging our AI-powered recruitment solutions",
        logo: "/logo.png"
    }
];

const PartnersPage: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Navbar />

            <main className="flex-grow">
                {/* Header Section */}
                <section className="relative py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
                    <WavyBackground variant="primary" intensity="medium" />
                    <div className="content-container">
                        <div className="max-w-5xl mx-auto text-center">
                            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
                                <Handshake className="w-4 h-4" />
                                <span className="text-sm font-semibold">Our Partners</span>
                            </div>
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-blue-700 leading-tight mb-8">
                                Building Success Together
                            </h1>
                            <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-6">
                                HireKarma bridges academia and industry, delivering measurable results and fostering
                                collaborative success for all stakeholders in the talent ecosystem.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                                Trusted by over 200+ educational institutions and leading corporates across India to
                                transform campus recruitment and early-career hiring.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="relative py-12 bg-white dark:bg-gray-900">
                    <WavyBackground variant="neutral" intensity="light" />
                    <div className="content-container">
                        <div className="max-w-7xl mx-auto">
                            <div className="grid md:grid-cols-3 gap-8">
                                <div className="text-center p-6">
                                    <div className="text-5xl font-bold text-blue-700 mb-3">200+</div>
                                    <p className="text-lg text-gray-700 font-medium">College Partners</p>
                                </div>
                                <div className="text-center p-6">
                                    <div className="text-5xl font-bold text-blue-700 mb-3">50K+</div>
                                    <p className="text-lg text-gray-700 font-medium">Students Empowered</p>
                                </div>
                                <div className="text-center p-6">
                                    <div className="text-5xl font-bold text-blue-700 mb-3">100+</div>
                                    <p className="text-lg text-gray-700 font-medium">Corporate Partners</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* College Partners Section */}
                <section className="relative py-16 lg:py-24 bg-white dark:bg-gray-900">
                    <WavyBackground variant="accent" intensity="light" />
                    <div className="content-container">
                        <div className="max-w-7xl mx-auto mb-12">
                            <div className="text-center mb-8">
                                <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4">
                                    <GraduationCap className="w-4 h-4" />
                                    <span className="text-sm font-semibold">College Partners</span>
                                </div>
                                <h2 className="text-4xl sm:text-5xl font-bold text-blue-700 mb-6">
                                    Empowering Campuses. Accelerating Careers.
                                </h2>
                                <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-4">
                                    HireKarma for Colleges is more than a tech platform—it&apos;s a strategic ally for educational
                                    institutions committed to transforming placement outcomes and student success.
                                </p>
                                <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
                                    Partner colleges across India trust us to automate training and placement (T&P) workflows,
                                    connect with top recruiters, and equip students with in-demand skills through data-driven,
                                    AI-powered modules.
                                </p>
                            </div>

                            {/* Key Benefits Grid */}
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                                    <h3 className="font-bold text-gray-900 mb-2">Digital Management</h3>
                                    <p className="text-sm text-gray-600">Seamless placement drives and student tracking</p>
                                </div>
                                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                                    <h3 className="font-bold text-gray-900 mb-2">Recruiter Access</h3>
                                    <p className="text-sm text-gray-600">National and global recruiters ecosystem</p>
                                </div>
                                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                                    <h3 className="font-bold text-gray-900 mb-2">Advanced Analytics</h3>
                                    <p className="text-sm text-gray-600">Skills mapping and placement reporting</p>
                                </div>
                                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                                    <h3 className="font-bold text-gray-900 mb-2">Skill Programs</h3>
                                    <p className="text-sm text-gray-600">Workshops and industry counseling</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sliding Partners Animation - College */}
                    <div className="relative overflow-hidden py-8 bg-gradient-to-r from-blue-50 via-white to-blue-50">
                        <div className="flex animate-scroll">
                            {/* Duplicate the array for seamless loop */}
                            {[...collegePartners, ...collegePartners].map((partner, index) => (
                                <div
                                    key={index}
                                    className="flex-shrink-0 w-96 mx-4"
                                >
                                    <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center flex-shrink-0">
                                                <GraduationCap className="w-8 h-8 text-blue-600" />
                                            </div>
                                            <h3 className="text-lg font-bold text-gray-900 line-clamp-2">{partner.name}</h3>
                                        </div>
                                        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                                            {partner.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Corporate Partners Section */}
                <section className="relative py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900">
                    <WavyBackground variant="secondary" intensity="light" />
                    <div className="content-container">
                        <div className="max-w-7xl mx-auto mb-12">
                            <div className="text-center mb-8">
                                <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4">
                                    <Briefcase className="w-4 h-4" />
                                    <span className="text-sm font-semibold">Corporate Partners</span>
                                </div>
                                <h2 className="text-4xl sm:text-5xl font-bold text-blue-700 mb-6">
                                    Build the Workforce of Tomorrow—Today.
                                </h2>
                                <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-4">
                                    Corporate partners choose HireKarma to unlock efficient, fair, and scalable early-career hiring.
                                </p>
                                <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
                                    Tap into a curated pipeline of job-ready graduates and skilled interns from top colleges,
                                    streamline campus recruitment cycles, and make hiring decisions powered by real talent data—not just resumes.
                                </p>
                            </div>

                            {/* Key Benefits Grid */}
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md">
                                    <h3 className="font-bold text-gray-900 mb-2">Pre-Assessed Talent</h3>
                                    <p className="text-sm text-gray-600">Skill-verified candidates ready for hiring</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md">
                                    <h3 className="font-bold text-gray-900 mb-2">AI Matching</h3>
                                    <p className="text-sm text-gray-600">Role matching and predictive analytics</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md">
                                    <h3 className="font-bold text-gray-900 mb-2">Fast-Track Hiring</h3>
                                    <p className="text-sm text-gray-600">Campus drives at scale</p>
                                </div>
                                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-md">
                                    <h3 className="font-bold text-gray-900 mb-2">Diversity & Branding</h3>
                                    <p className="text-sm text-gray-600">Inclusion solutions for employers</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sliding Partners Animation - Corporate */}
                    <div className="relative overflow-hidden py-8 bg-white">
                        <div className="flex animate-scroll-reverse">
                            {/* Duplicate the array for seamless loop */}
                            {[...corporatePartners, ...corporatePartners, ...corporatePartners].map((partner, index) => (
                                <div
                                    key={index}
                                    className="flex-shrink-0 w-96 mx-4"
                                >
                                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                                                <Briefcase className="w-8 h-8 text-white" />
                                            </div>
                                            <h3 className="text-lg font-bold text-gray-900 line-clamp-2">{partner.name}</h3>
                                        </div>
                                        <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
                                            {partner.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Mission Statement */}
                <section className="relative py-16 lg:py-24 bg-white dark:bg-gray-900">
                    <WavyBackground variant="accent" intensity="light" />
                    <div className="content-container">
                        <div className="max-w-4xl mx-auto text-center">
                            <Award className="w-16 h-16 text-blue-600 mx-auto mb-6" />
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                                Our Mission
                            </h2>
                            <p className="text-xl text-gray-600 leading-relaxed mb-8">
                                Make every campus a launchpad for career impact. Join leading universities and institutes
                                who rely on HireKarma to empower faculty, raise placement rates, and prepare students for
                                the future of work.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                HireKarma helps companies build smarter teams, achieve hiring targets, and create impact
                                where it matters. Join our network of forward-thinking employers who shape the careers of
                                India&apos;s youth and drive business growth through data-driven talent acquisition.
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="relative py-16 lg:py-24 bg-gradient-to-br from-blue-700 to-blue-900 dark:from-blue-800 dark:to-blue-950">
                    <WavyBackground variant="primary" intensity="medium" />
                    <div className="content-container">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                                Become a Partner
                            </h2>
                            <p className="text-xl text-blue-100 mb-10">
                                Join our growing network of colleges and corporates transforming the future of campus recruitment
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="px-8 py-4 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                                    Partner With Us
                                </button>
                                <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300">
                                    Contact Us
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />

            {/* CSS for Animations */}
            <style jsx>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }

                @keyframes scroll-reverse {
                    0% {
                        transform: translateX(-50%);
                    }
                    100% {
                        transform: translateX(0);
                    }
                }

                .animate-scroll {
                    animation: scroll 40s linear infinite;
                }

                .animate-scroll:hover {
                    animation-play-state: paused;
                }

                .animate-scroll-reverse {
                    animation: scroll-reverse 40s linear infinite;
                }

                .animate-scroll-reverse:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </div>
    );
};

export default PartnersPage;

