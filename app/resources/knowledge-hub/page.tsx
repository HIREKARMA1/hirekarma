"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Navbar from '../../../components/layout/Navbar';
import Footer from '../../../components/layout/Footer';
import WavyBackground from '../../../components/layout/WavyBackground';
import { Brain, BookOpen, FileText, TrendingUp, Users, Lightbulb, ArrowRight, Search, Filter } from 'lucide-react';

const categories = ['All', 'Recruitment', 'Skills', 'Technology', 'Career Tips', 'Industry Insights'];

const articles = [
  {
    id: 1,
    title: "The Future of Campus Recruitment: AI and Automation",
    excerpt: "Discover how artificial intelligence is transforming the way companies hire fresh talent from campuses across India.",
    category: "Technology",
    image: "/demo.png",
    readTime: "5 min read",
    date: "Oct 10, 2024",
    featured: true
  },
  {
    id: 2,
    title: "10 Essential Skills Every Graduate Needs in 2024",
    excerpt: "A comprehensive guide to the most in-demand skills that employers are looking for in fresh graduates.",
    category: "Skills",
    image: "/students.jpg",
    readTime: "8 min read",
    date: "Oct 8, 2024",
    featured: true
  },
  {
    id: 3,
    title: "How to Optimize Your T&P Cell with HRTech Solutions",
    excerpt: "Learn best practices for digitizing your placement cell and improving student outcomes through technology.",
    category: "Recruitment",
    image: "/university.jpg",
    readTime: "6 min read",
    date: "Oct 5, 2024",
    featured: false
  },
  {
    id: 4,
    title: "Building Diverse Teams: A Guide for Corporate Recruiters",
    excerpt: "Strategies for creating inclusive hiring processes and building diverse teams from campus recruitment.",
    category: "Recruitment",
    image: "/corporate.jpg",
    readTime: "7 min read",
    date: "Oct 3, 2024",
    featured: false
  },
  {
    id: 5,
    title: "Data-Driven Hiring: Metrics That Matter",
    excerpt: "Understanding key recruitment metrics and how to leverage data for better hiring decisions.",
    category: "Industry Insights",
    image: "/demo.png",
    readTime: "9 min read",
    date: "Sep 28, 2024",
    featured: false
  },
  {
    id: 6,
    title: "Resume Writing Tips for College Students",
    excerpt: "Expert advice on crafting a compelling resume that stands out to recruiters and gets you interviews.",
    category: "Career Tips",
    image: "/students.jpg",
    readTime: "4 min read",
    date: "Sep 25, 2024",
    featured: false
  }
];

const KnowledgeHubPage: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredArticles = articles.filter(article => {
        const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
        const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const featuredArticles = articles.filter(article => article.featured);

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
                                <Brain className="w-4 h-4" />
                                <span className="text-sm font-semibold">Knowledge Hub</span>
                            </div>
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-blue-700 leading-tight mb-8">
                                Learn. Grow. Succeed.
                            </h1>
                            <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                                Your go-to resource for insights on campus recruitment, career development, and the latest 
                                trends in HRTech and talent acquisition.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Search and Filter Section */}
                <section className="relative py-8 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                    <WavyBackground variant="neutral" intensity="light" />
                    <div className="content-container">
                        <div className="max-w-7xl mx-auto">
                            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                                {/* Search Bar */}
                                <div className="relative w-full md:w-96">
                                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                    <input
                                        type="text"
                                        placeholder="Search articles..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>

                                {/* Category Filter */}
                                <div className="flex flex-wrap gap-2">
                                    {categories.map(category => (
                                        <button
                                            key={category}
                                            onClick={() => setSelectedCategory(category)}
                                            className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                                                selectedCategory === category
                                                    ? 'bg-blue-600 text-white shadow-lg'
                                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                            }`}
                                        >
                                            {category}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Featured Articles Section */}
                <section className="relative py-16 lg:py-20 bg-white dark:bg-gray-900">
                    <WavyBackground variant="accent" intensity="light" />
                    <div className="content-container">
                        <div className="max-w-7xl mx-auto">
                            <div className="flex items-center gap-3 mb-10">
                                <Lightbulb className="w-8 h-8 text-blue-600" />
                                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Featured Articles</h2>
                            </div>

                            <div className="grid lg:grid-cols-2 gap-8 mb-16">
                                {featuredArticles.map(article => (
                                    <div key={article.id} className="group cursor-pointer">
                                        <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200">
                                            <div className="relative h-64 overflow-hidden">
                                                <Image
                                                    src={article.image}
                                                    alt={article.title}
                                                    width={600}
                                                    height={400}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                />
                                                <div className="absolute top-4 left-4">
                                                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                                        {article.category}
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="p-8">
                                                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                                                    <span>{article.date}</span>
                                                    <span>•</span>
                                                    <span>{article.readTime}</span>
                                                </div>
                                                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                                    {article.title}
                                                </h3>
                                                <p className="text-gray-600 leading-relaxed mb-4">
                                                    {article.excerpt}
                                                </p>
                                                <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
                                                    Read More <ArrowRight className="w-5 h-5" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* All Articles Grid */}
                <section className="relative py-16 bg-gray-50 dark:bg-gray-800">
                    <WavyBackground variant="secondary" intensity="light" />
                    <div className="content-container">
                        <div className="max-w-7xl mx-auto">
                            <div className="flex items-center gap-3 mb-10">
                                <BookOpen className="w-8 h-8 text-blue-600" />
                                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">All Articles</h2>
                            </div>

                            {filteredArticles.length > 0 ? (
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {filteredArticles.map(article => (
                                        <div key={article.id} className="group cursor-pointer">
                                            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full border border-gray-100">
                                                <div className="relative h-48 overflow-hidden">
                                                    <Image
                                                        src={article.image}
                                                        alt={article.title}
                                                        width={400}
                                                        height={300}
                                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                    />
                                                    <div className="absolute top-3 right-3">
                                                        <span className="bg-white/90 backdrop-blur-sm text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">
                                                            {article.category}
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="p-6">
                                                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                                                        <span>{article.date}</span>
                                                        <span>•</span>
                                                        <span>{article.readTime}</span>
                                                    </div>
                                                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                                                        {article.title}
                                                    </h3>
                                                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                                                        {article.excerpt}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-20">
                                    <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                                    <p className="text-xl text-gray-500">No articles found matching your criteria.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                {/* Newsletter Section */}
                <section className="relative py-16 lg:py-24 bg-gradient-to-br from-blue-700 to-blue-900 dark:from-blue-800 dark:to-blue-950">
                    <WavyBackground variant="primary" intensity="medium" />
                    <div className="content-container">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                                Stay Updated
                            </h2>
                            <p className="text-xl text-blue-100 mb-10">
                                Subscribe to our newsletter for the latest insights on campus recruitment and career development
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 px-6 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-white"
                                />
                                <button className="px-8 py-4 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                                    Subscribe
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

export default KnowledgeHubPage;

