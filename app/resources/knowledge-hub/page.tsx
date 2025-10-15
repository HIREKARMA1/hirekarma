"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";
import WavyBackground from "../../../components/layout/WavyBackground";
import { Brain, BookOpen, FileText, TrendingUp, Users, Lightbulb, ArrowRight, Search, Filter, Star, Calendar, Clock } from 'lucide-react';

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

export default function KnowledgeHubPage() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setMounted(true);
  }, []);

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticles = articles.filter(article => article.featured);

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
          <WavyBackground variant="primary" intensity="strong" />

          {/* Header Section */}
          <div className="relative content-container pt-20 pb-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Content - Header and Description */}
              <div className="space-y-2 lg:space-y-1">
                <div className="space-y-4">
                  <h1 className={`text-2xl sm:text-4xl lg:text-4xl xl:text-6xl font-bold leading-tight tracking-tight ${mounted && resolvedTheme === 'dark'
                      ? 'text-gray-100'
                      : 'text-gray-900'
                    }`}>
                    Knowledge Hub
                  </h1>
                </div>

                <div className="space-y-3">
                  <p className={`text-lg sm:text-xl leading-relaxed max-w-2xl ${mounted && resolvedTheme === 'dark'
                      ? 'text-gray-300'
                      : 'text-gray-600'
                    }`}>
                    Your go-to resource for insights on <strong className={`${mounted && resolvedTheme === 'dark'
                        ? 'text-gray-200'
                        : 'text-gray-700'
                      }`}>campus recruitment, career development, and HRTech trends</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Search and Filter Section */}
          <div className="relative content-container py-8">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                {/* Search Bar */}
                <div className="relative w-full md:w-96">
                  <Search className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 ${mounted && resolvedTheme === 'dark' ? 'text-gray-400' : 'text-gray-400'
                    }`} />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className={`w-full pl-12 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 ${mounted && resolvedTheme === 'dark'
                        ? 'bg-gray-800 border-gray-600 text-white focus:ring-blue-500'
                        : 'border-gray-300 focus:ring-blue-500 focus:border-transparent'
                      }`}
                  />
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap gap-2">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${selectedCategory === category
                          ? mounted && resolvedTheme === 'dark'
                            ? 'bg-blue-600 text-white shadow-lg'
                            : 'bg-blue-600 text-white shadow-lg'
                          : mounted && resolvedTheme === 'dark'
                            ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
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

          {/* Featured Articles Section */}
          <div className="relative content-container py-8">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center gap-3 mb-10">
                <Lightbulb className={`w-8 h-8 ${mounted && resolvedTheme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                  }`} />
                <h2 className={`text-3xl sm:text-4xl font-bold ${mounted && resolvedTheme === 'dark' ? 'text-gray-100' : 'text-gray-900'
                  }`}>
                  Featured Articles
                </h2>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 mb-16">
                {featuredArticles.map(article => (
                  <div
                    key={article.id}
                    className={`rounded-xl border shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 p-6 group ${mounted && resolvedTheme === 'dark'
                        ? 'bg-gradient-to-br from-blue-900/20 to-blue-800/10 border-blue-700/30'
                        : 'bg-gradient-to-br from-blue-50 to-blue-100/50 border-blue-200'
                      }`}
                  >
                    <div className="relative mb-6">
                      <div className={`w-full h-64 rounded-xl overflow-hidden border transition-colors duration-300 ${mounted && resolvedTheme === 'dark'
                          ? 'border-blue-600/50 group-hover:border-blue-400/70'
                          : 'border-blue-300/70 group-hover:border-blue-200'
                        }`}>
                        <Image
                          src={article.image}
                          alt={article.title}
                          width={600}
                          height={400}
                          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="absolute top-4 left-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${mounted && resolvedTheme === 'dark'
                            ? 'bg-blue-600 text-white'
                            : 'bg-blue-600 text-white'
                          }`}>
                          {article.category}
                        </span>
                      </div>
                    </div>

                    <div className={`flex items-center gap-4 text-sm mb-4 ${mounted && resolvedTheme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                      }`}>
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>

                    <h3 className={`text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors ${mounted && resolvedTheme === 'dark' ? 'text-gray-100' : 'text-gray-900'
                      }`}>
                      {article.title}
                    </h3>

                    <p className={`leading-relaxed mb-4 ${mounted && resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                      {article.excerpt}
                    </p>

                    <div className={`flex items-center gap-2 font-semibold group-hover:gap-3 transition-all ${mounted && resolvedTheme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                      }`}>
                      Read More <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* All Articles Grid */}
          <div className="relative content-container py-20">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center gap-3 mb-10">
                <BookOpen className={`w-8 h-8 ${mounted && resolvedTheme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                  }`} />
                <h2 className={`text-3xl sm:text-4xl font-bold ${mounted && resolvedTheme === 'dark' ? 'text-gray-100' : 'text-gray-900'
                  }`}>
                  All Articles
                </h2>
              </div>

              {filteredArticles.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredArticles.map(article => (
                    <div
                      key={article.id}
                      className={`rounded-xl border shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 p-6 text-center group ${mounted && resolvedTheme === 'dark'
                          ? 'bg-gradient-to-br from-blue-900/20 to-blue-800/10 border-blue-700/30'
                          : 'bg-gradient-to-br from-blue-50 to-blue-100/50 border-blue-200'
                        }`}
                    >
                      <div className="relative mb-6">
                        <div className={`w-full h-48 rounded-xl overflow-hidden border transition-colors duration-300 ${mounted && resolvedTheme === 'dark'
                            ? 'border-blue-600/50 group-hover:border-blue-400/70'
                            : 'border-blue-300/70 group-hover:border-blue-200'
                          }`}>
                          <Image
                            src={article.image}
                            alt={article.title}
                            width={400}
                            height={300}
                            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <div className="absolute top-3 right-3">
                          <span className={`backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold ${mounted && resolvedTheme === 'dark'
                              ? 'bg-gray-800/90 text-blue-400'
                              : 'bg-white/90 text-blue-600'
                            }`}>
                            {article.category}
                          </span>
                        </div>
                      </div>

                      <div className={`flex items-center gap-3 text-xs mb-3 ${mounted && resolvedTheme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                        }`}>
                        <span>{article.date}</span>
                        <span>•</span>
                        <span>{article.readTime}</span>
                      </div>

                      <h3 className={`text-lg font-bold mb-2 group-hover:text-blue-600 transition-colors line-clamp-2 ${mounted && resolvedTheme === 'dark' ? 'text-gray-100' : 'text-gray-900'
                        }`}>
                        {article.title}
                      </h3>

                      <p className={`text-sm leading-relaxed line-clamp-3 ${mounted && resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                        {article.excerpt}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <FileText className={`w-16 h-16 mx-auto mb-4 ${mounted && resolvedTheme === 'dark' ? 'text-gray-600' : 'text-gray-400'
                    }`} />
                  <p className={`text-xl ${mounted && resolvedTheme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                    No articles found matching your criteria.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="relative content-container py-20">
            <div className="max-w-4xl mx-auto text-center">
              <div className={`rounded-2xl border shadow-2xl p-12 ${mounted && resolvedTheme === 'dark'
                  ? 'bg-gradient-to-br from-blue-900/30 to-blue-800/20 border-blue-700/30'
                  : 'bg-gradient-to-br from-blue-50 to-blue-100/50 border-blue-200'
                }`}>
                <h2 className={`text-4xl sm:text-5xl font-bold mb-6 ${mounted && resolvedTheme === 'dark'
                    ? 'text-blue-400'
                    : 'text-blue-700'
                  }`}>
                  Stay Updated
                </h2>
                <p className={`text-xl mb-10 ${mounted && resolvedTheme === 'dark'
                    ? 'text-gray-300'
                    : 'text-gray-600'
                  }`}>
                  Subscribe to our newsletter for the latest insights on campus recruitment and career development
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className={`flex-1 px-6 py-4 rounded-xl focus:outline-none focus:ring-2 ${mounted && resolvedTheme === 'dark'
                        ? 'bg-gray-800 border-gray-600 text-white focus:ring-blue-500'
                        : 'border-gray-300 focus:ring-blue-500 focus:border-transparent'
                      }`}
                  />
                  <button className={`px-8 py-4 font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 ${mounted && resolvedTheme === 'dark'
                      ? 'bg-blue-600 text-white hover:bg-blue-500'
                      : 'bg-blue-600 text-white hover:bg-blue-500'
                    }`}>
                    Subscribe
                  </button>
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