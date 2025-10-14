"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Navbar from '../../../components/layout/Navbar';
import Footer from '../../../components/layout/Footer';
import WavyBackground from '../../../components/layout/WavyBackground';
import { FileText, TrendingUp, Users, Award, ChevronRight, Quote, Target, CheckCircle } from 'lucide-react';

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

const CaseStudiesPage: React.FC = () => {
    const [selectedFilter, setSelectedFilter] = useState('All');
    const filters = ['All', 'Education', 'Corporate', 'Skill Development'];

    const filteredStudies = selectedFilter === 'All' 
        ? caseStudies 
        : caseStudies.filter(study => {
            if (selectedFilter === 'Education') return study.industry.includes('Education');
            if (selectedFilter === 'Corporate') return study.industry.includes('Technology') || study.industry.includes('Information');
            if (selectedFilter === 'Skill Development') return study.industry.includes('Skill');
            return true;
        });

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
                                <FileText className="w-4 h-4" />
                                <span className="text-sm font-semibold">Case Studies</span>
                            </div>
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-blue-700 leading-tight mb-8">
                                Real Impact. Real Results.
                            </h1>
                            <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                                Discover how colleges, universities, and corporations are transforming their recruitment 
                                outcomes with HireKarma's innovative solutions.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Filter Section */}
                <section className="relative py-8 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                    <WavyBackground variant="neutral" intensity="light" />
                    <div className="content-container">
                        <div className="max-w-7xl mx-auto">
                            <div className="flex flex-wrap gap-3 justify-center">
                                {filters.map(filter => (
                                    <button
                                        key={filter}
                                        onClick={() => setSelectedFilter(filter)}
                                        className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                                            selectedFilter === filter
                                                ? 'bg-blue-600 text-white shadow-lg'
                                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                    >
                                        {filter}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Featured Case Studies */}
                <section className="relative py-16 lg:py-20 bg-white dark:bg-gray-900">
                    <WavyBackground variant="accent" intensity="light" />
                    <div className="content-container">
                        <div className="max-w-7xl mx-auto">
                            {filteredStudies.filter(study => study.featured).map((study, index) => (
                                <div key={study.id} className={`mb-20 ${index > 0 ? 'pt-20 border-t border-gray-200' : ''}`}>
                                    <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                                        {/* Image Side */}
                                        <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                                <Image
                                                    src={study.image}
                                                    alt={study.title}
                                                    width={600}
                                                    height={400}
                                                    className="w-full h-auto object-cover"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
                                            </div>

                                            {/* Stats Cards */}
                                            <div className="grid grid-cols-3 gap-4 mt-6">
                                                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl text-center">
                                                    <div className="text-2xl font-bold text-blue-700">{study.stats.metric1.value}</div>
                                                    <div className="text-xs text-gray-600 mt-1">{study.stats.metric1.label}</div>
                                                </div>
                                                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl text-center">
                                                    <div className="text-2xl font-bold text-blue-700">{study.stats.metric2.value}</div>
                                                    <div className="text-xs text-gray-600 mt-1">{study.stats.metric2.label}</div>
                                                </div>
                                                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl text-center">
                                                    <div className="text-2xl font-bold text-blue-700">{study.stats.metric3.value}</div>
                                                    <div className="text-xs text-gray-600 mt-1">{study.stats.metric3.label}</div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Content Side */}
                                        <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                                            <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                                                {study.industry}
                                            </div>
                                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                                                {study.title}
                                            </h2>
                                            <p className="text-xl text-blue-600 font-semibold mb-6">{study.client}</p>

                                            {/* Challenge */}
                                            <div className="mb-6">
                                                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                                                    <Target className="w-5 h-5 text-blue-600" />
                                                    The Challenge
                                                </h3>
                                                <p className="text-gray-600 leading-relaxed">{study.challenge}</p>
                                            </div>

                                            {/* Solution */}
                                            <div className="mb-6">
                                                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                                                    <Award className="w-5 h-5 text-blue-600" />
                                                    The Solution
                                                </h3>
                                                <p className="text-gray-600 leading-relaxed">{study.solution}</p>
                                            </div>

                                            {/* Results */}
                                            <div className="mb-6">
                                                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center gap-2">
                                                    <TrendingUp className="w-5 h-5 text-blue-600" />
                                                    The Results
                                                </h3>
                                                <ul className="space-y-2">
                                                    {study.results.map((result, idx) => (
                                                        <li key={idx} className="flex items-start gap-2">
                                                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                            <span className="text-gray-600">{result}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Testimonial */}
                                            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-l-4 border-blue-600">
                                                <Quote className="w-8 h-8 text-blue-600 mb-3" />
                                                <p className="text-gray-700 italic mb-4">"{study.testimonial}"</p>
                                                <div>
                                                    <p className="font-bold text-gray-900">{study.author}</p>
                                                    <p className="text-sm text-gray-600">{study.position}, {study.client}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* More Case Studies Grid */}
                <section className="relative py-16 bg-gray-50 dark:bg-gray-800">
                    <WavyBackground variant="neutral" intensity="light" />
                    <div className="content-container">
                        <div className="max-w-7xl mx-auto">
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10">More Success Stories</h2>
                            
                            <div className="grid md:grid-cols-2 gap-8">
                                {filteredStudies.filter(study => !study.featured).map(study => (
                                    <div key={study.id} className="group cursor-pointer">
                                        <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 h-full">
                                            <div className="relative h-48 overflow-hidden">
                                                <Image
                                                    src={study.image}
                                                    alt={study.title}
                                                    width={600}
                                                    height={300}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                />
                                                <div className="absolute top-4 left-4">
                                                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                                                        {study.industry}
                                                    </span>
                                                </div>
                                            </div>
                                            
                                            <div className="p-6">
                                                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                                    {study.title}
                                                </h3>
                                                <p className="text-blue-600 font-semibold mb-4">{study.client}</p>
                                                
                                                <div className="grid grid-cols-3 gap-2 mb-4">
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

                                                <button className="text-blue-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                                                    Read Full Story <ChevronRight className="w-5 h-5" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
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
                                Ready to Write Your Success Story?
                            </h2>
                            <p className="text-xl text-blue-100 mb-10">
                                Join hundreds of institutions and companies transforming their recruitment outcomes
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="px-8 py-4 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                                    Get Started Today
                                </button>
                                <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300">
                                    Schedule a Demo
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

export default CaseStudiesPage;

