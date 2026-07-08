"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import Navbar from '../../../components/layout/Navbar';
import Footer from '../../../components/layout/Footer';
import { FileText, TrendingUp, ChevronRight, Search, ArrowRight } from 'lucide-react';

const caseStudies = [
    {
        id: 1,
        title: "Transforming Placement Rates: GIET Success Story",
        client: "Gandhi Institute of Engineering and Technology",
        industry: "Education - Engineering College",
        challenge: "Low placement rates and manual T&P processes creating inefficiencies",
        solution: "Implemented HireKarma's end-to-end placement automation platform",
        results: [
            "85% increase in placement rates within one year",
            "Reduced placement cycle time by 60%",
            "Connected with 50+ new corporate recruiters",
            "Achieved 100% digital transformation of T&P processes"
        ],
        testimonial: "HireKarma has revolutionized how we manage placements. The platform's analytics and automation have helped us achieve placement rates we never thought possible.",
        author: "Dr. Rajesh Kumar",
        position: "Head of Training & Placement",
        image: "/university.jpg",
        stats: {
            metric1: { value: "85%", label: "Increase in Placements" },
            metric2: { value: "60%", label: "Time Saved" },
            metric3: { value: "50+", label: "New Recruiters" }
        },
        featured: true
    },
    {
        id: 2,
        title: "Scaling Campus Hiring: A Fortune 500 Journey",
        client: "Leading Technology Corporation",
        industry: "Information Technology",
        challenge: "Difficulty scaling campus recruitment across 200+ colleges with quality control",
        solution: "Deployed HireKarma's AI-powered candidate assessment and matching platform",
        results: [
            "3x increase in campus hiring efficiency",
            "Hired 500+ quality freshers in one recruitment season",
            "Improved diversity metrics by 40%",
            "Reduced cost-per-hire by 45%"
        ],
        testimonial: "HireKarma's platform gave us the scale and quality we needed. The AI matching ensured we found the right candidates faster than ever before.",
        author: "Priya Sharma",
        position: "VP of Campus Recruitment",
        image: "/corporate.jpg",
        stats: {
            metric1: { value: "3x", label: "Hiring Efficiency" },
            metric2: { value: "500+", label: "Quality Hires" },
            metric3: { value: "45%", label: "Cost Reduction" }
        },
        featured: true
    },
    {
        id: 3,
        title: "Empowering Rural Students: AISECT Partnership",
        client: "AISECT - All India Society for Electronics & Computer Technology",
        industry: "Skill Development & Education",
        challenge: "Limited access to quality job opportunities for students in tier-3 and tier-4 cities",
        solution: "Partnered with HireKarma to create direct pathways from training to employment",
        results: [
            "5000+ students connected to employment opportunities",
            "Partnerships with 100+ national employers",
            "70% job placement rate for skill development graduates",
            "Expanded reach to 50+ rural locations"
        ],
        testimonial: "This partnership has been transformative. Students who previously had no access to quality jobs are now working with leading companies across India.",
        author: "Santosh Mishra",
        position: "Director of Partnerships",
        image: "/students.jpg",
        stats: {
            metric1: { value: "5000+", label: "Students Placed" },
            metric2: { value: "70%", label: "Placement Rate" },
            metric3: { value: "100+", label: "Employer Partners" }
        },
        featured: false
    },
    {
        id: 4,
        title: "Digital Transformation: CIME Bhubaneswar",
        client: "College of IT and Management Education",
        industry: "Education - IT & Management",
        challenge: "Outdated placement processes and limited industry connections",
        solution: "Complete digital overhaul with HireKarma's placement management suite",
        results: [
            "100% digitization of placement workflows",
            "Student employability score improved by 65%",
            "Partnership with 75+ companies established",
            "Real-time analytics for continuous improvement"
        ],
        testimonial: "The transition to HireKarma was seamless. We now have complete visibility into our placement ecosystem and can make data-driven decisions.",
        author: "Prof. Anjali Nayak",
        position: "Dean of Placements",
        image: "/university.jpg",
        stats: {
            metric1: { value: "100%", label: "Digital Transformation" },
            metric2: { value: "65%", label: "Skill Improvement" },
            metric3: { value: "75+", label: "Company Partners" }
        },
        featured: false
    }
];

const filters = ['All', 'Education', 'Corporate', 'Skill Development'];

export default function CaseStudiesPage() {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme } = useTheme();
    const [selectedFilter, setSelectedFilter] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => setMounted(true), []);

    const filteredStudies = caseStudies.filter(study => {
        const matchesFilter = selectedFilter === 'All' || (
            selectedFilter === 'Education' && study.industry.includes('Education')
        ) || (
                selectedFilter === 'Corporate' && (study.industry.includes('Technology') || study.industry.includes('Information'))
            ) || (
                selectedFilter === 'Skill Development' && study.industry.includes('Skill')
            );

        const matchesSearch = study.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            study.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
            study.results.join(' ').toLowerCase().includes(searchQuery.toLowerCase());

        return matchesFilter && matchesSearch;
    });

    const featured = filteredStudies.filter(s => s.featured);

    return (
        <div className={`min-h-screen flex flex-col transition-all duration-500 ${mounted && resolvedTheme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
            <Navbar />

            <main className="flex-grow">
                <section className={`relative transition-all duration-500 ${mounted && resolvedTheme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
                    <div className="relative content-container pt-25 pb-8">
                        <div className="text-left">
                            <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full mb-4 ${mounted && resolvedTheme === 'dark' ? 'bg-blue-900/30 border border-blue-700/50' : 'bg-blue-100 border border-blue-200'}`}>
                                <FileText className={`w-4 h-4 ${mounted && resolvedTheme === 'dark' ? 'text-blue-400' : 'text-blue-700'}`} />
                                <span className={`text-sm font-semibold ${mounted && resolvedTheme === 'dark' ? 'text-gray-200' : 'text-blue-700'}`}>Case Studies</span>
                            </div>

                            <h1 className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight ${mounted && resolvedTheme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>
                                Real Impact. Real Results.
                            </h1>

                            <p className={`text-lg sm:text-xl leading-relaxed max-w-3xl ${mounted && resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                                Discover how colleges, universities, and corporations are transforming recruitment outcomes with HireKarma&apos;s solutions.
                            </p>

                        </div>
                    </div>

                    <div className="relative content-container py-8">
                        <div className="max-w-7xl mx-auto">
                            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                                <div className="relative w-full md:w-96">
                                    <Search className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 ${mounted && resolvedTheme === 'dark' ? 'text-gray-400' : 'text-gray-400'}`} />
                                    <input
                                        type="text"
                                        placeholder="Search case studies..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className={`w-full pl-12 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 ${mounted && resolvedTheme === 'dark' ? 'bg-gray-800 border-gray-600 text-white focus:ring-blue-500' : 'border-gray-300 focus:ring-blue-500 focus:border-transparent'}`}
                                    />
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {filters.map(filter => (
                                        <button
                                            key={filter}
                                            onClick={() => setSelectedFilter(filter)}
                                            className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${selectedFilter === filter ? 'bg-blue-600 text-white shadow-lg' : mounted && resolvedTheme === 'dark' ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                                            {filter}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative content-container py-8">
                        <div className="max-w-7xl mx-auto">
                            <div className="flex items-center gap-3 mb-10">
                                <TrendingUp className={`w-8 h-8 ${mounted && resolvedTheme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`} />
                                <h2 className={`text-3xl sm:text-4xl font-bold ${mounted && resolvedTheme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>Featured Case Studies</h2>
                            </div>

                            <div className="grid lg:grid-cols-2 gap-8 mb-16">
                                {featured.map(study => (
                                    <div key={study.id} className={`rounded-xl border shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 p-6 group ${mounted && resolvedTheme === 'dark' ? 'bg-gradient-to-br from-blue-900/20 to-blue-800/10 border-blue-700/30' : 'bg-gradient-to-br from-blue-50 to-blue-100/50 border-blue-200'}`}>
                                        <div className="relative mb-6">
                                            <div className={`w-full h-64 rounded-xl overflow-hidden border transition-colors duration-300 ${mounted && resolvedTheme === 'dark' ? 'border-blue-600/50 group-hover:border-blue-400/70' : 'border-blue-300/70 group-hover:border-blue-200'}`}>
                                                <Image src={study.image} alt={study.title} width={600} height={400} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300" />
                                            </div>
                                            <div className="absolute top-4 left-4">
                                                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${mounted && resolvedTheme === 'dark' ? 'bg-blue-600 text-white' : 'bg-blue-600 text-white'}`}>{study.industry}</span>
                                            </div>
                                        </div>

                                        <h3 className={`text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors ${mounted && resolvedTheme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>{study.title}</h3>

                                        <p className={`leading-relaxed mb-4 ${mounted && resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{study.client}</p>

                                        <div className={`flex items-center gap-2 font-semibold group-hover:gap-3 transition-all ${mounted && resolvedTheme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
                                            Read Case Study <ArrowRight className="w-5 h-5" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="relative content-container py-20">
                        <div className="max-w-7xl mx-auto">
                            <div className="flex items-center gap-3 mb-10">
                                <FileText className={`w-8 h-8 ${mounted && resolvedTheme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`} />
                                <h2 className={`text-3xl sm:text-4xl font-bold ${mounted && resolvedTheme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>All Case Studies</h2>
                            </div>

                            <div className="grid md:grid-cols-2 gap-8">
                                {filteredStudies.map(study => (
                                    <div key={study.id} className={`rounded-xl border shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 p-6 group ${mounted && resolvedTheme === 'dark' ? 'bg-gradient-to-br from-blue-900/10 to-blue-800/5 border-blue-700/20' : 'bg-white border-gray-200'}`}>
                                        <div className="relative mb-4">
                                            <div className={`w-full h-48 rounded-xl overflow-hidden border transition-colors duration-300 ${mounted && resolvedTheme === 'dark' ? 'border-blue-600/30' : 'border-gray-200'}`}>
                                                <Image src={study.image} alt={study.title} width={600} height={300} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300" />
                                            </div>
                                            <div className="absolute top-3 right-3">
                                                <span className={`backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold ${mounted && resolvedTheme === 'dark' ? 'bg-gray-800/90 text-blue-400' : 'bg-white/90 text-blue-600'}`}>{study.industry}</span>
                                            </div>
                                        </div>

                                        <h3 className={`text-lg font-bold mb-2 group-hover:text-blue-600 transition-colors line-clamp-2 ${mounted && resolvedTheme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>{study.title}</h3>

                                        <p className={`text-sm leading-relaxed line-clamp-3 ${mounted && resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>{study.client}</p>

                                        <div className="grid grid-cols-3 gap-2 mt-4">
                                            <div className="bg-blue-50 p-3 rounded-lg text-center">
                                                <div className="text-lg font-bold text-blue-700">{study.stats.metric1.value}</div>
                                                <div className="text-xs text-gray-600">{study.stats.metric1.label}</div>
                                            </div>
                                            <div className="bg-blue-50 p-3 rounded-lg text-center">
                                                <div className="text-lg font-bold text-blue-700">{study.stats.metric2.value}</div>
                                                <div className="text-xs text-gray-600">{study.stats.metric2.label}</div>
                                            </div>
                                            <div className="bg-blue-50 p-3 rounded-lg text-center">
                                                <div className="text-lg font-bold text-blue-700">{study.stats.metric3.value}</div>
                                                <div className="text-xs text-gray-600">{study.stats.metric3.label}</div>
                                            </div>
                                        </div>

                                        <div className="mt-6">
                                            <button className="text-blue-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                                                Read Full Story <ChevronRight className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="relative content-container py-20">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className={`rounded-2xl border shadow-2xl p-12 ${mounted && resolvedTheme === 'dark' ? 'bg-gradient-to-br from-blue-900/30 to-blue-800/20 border-blue-700/30' : 'bg-gradient-to-br from-blue-50 to-blue-100/50 border-blue-200'}`}>
                                <h2 className={`text-4xl sm:text-5xl font-bold mb-6 ${mounted && resolvedTheme === 'dark' ? 'text-blue-400' : 'text-blue-700'}`}>Ready to Write Your Success Story?</h2>
                                <p className={`text-xl mb-10 ${mounted && resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>Join institutions and companies transforming their recruitment outcomes.</p>
                                <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                                    <button className={`px-8 py-4 font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 ${mounted && resolvedTheme === 'dark' ? 'bg-blue-600 text-white hover:bg-blue-500' : 'bg-blue-600 text-white hover:bg-blue-500'}`}>Get Started Today</button>
                                    <button className={`px-8 py-4 font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 ${mounted && resolvedTheme === 'dark' ? 'bg-white text-blue-700' : 'bg-white text-blue-700'}`}>Schedule a Demo</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

