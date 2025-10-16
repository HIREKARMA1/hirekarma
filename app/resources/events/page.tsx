"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";
import WavyBackground from "../../../components/layout/WavyBackground";
import { Calendar, ArrowRight, Search } from 'lucide-react';

const categories = ['All', 'Webinar', 'Workshop', 'Conference', 'Bootcamp', 'Virtual', 'In-Person'];

const upcomingEvents = [
    {
        id: 1,
        title: "Campus Recruitment Excellence Summit 2025",
        date: "November 15, 2025",
        time: "10:00 AM - 4:00 PM IST",
        location: "Bhubaneswar, Odisha",
        type: "In-Person",
        attendees: "200+ Expected",
        image: "/university.jpg",
        description: "Join industry leaders and T&P heads for a day of insights on transforming campus recruitment with AI and automation.",
        featured: true,
        category: 'Conference'
    },
    {
        id: 2,
        title: "Webinar: Future-Ready Skills for 2026",
        date: "November 22, 2025",
        time: "3:00 PM - 4:30 PM IST",
        location: "Virtual Event",
        type: "Online",
        attendees: "500+ Expected",
        image: "/students.jpg",
        description: "Expert panel discussion on emerging skills and how students can prepare for the evolving job market.",
        featured: true,
        category: 'Webinar'
    },
    {
        id: 3,
        title: "Corporate Hiring Strategy Workshop",
        date: "December 5, 2025",
        time: "2:00 PM - 5:00 PM IST",
        location: "Virtual Event",
        type: "Online",
        attendees: "150+ Expected",
        image: "/corporate.jpg",
        description: "Interactive workshop for HR professionals on optimizing campus hiring processes and leveraging data analytics.",
        featured: false,
        category: 'Workshop'
    },
    {
        id: 4,
        title: "Student Success Bootcamp",
        date: "December 12, 2025",
        time: "9:00 AM - 6:00 PM IST",
        location: "Cuttack, Odisha",
        type: "In-Person",
        attendees: "300+ Expected",
        image: "/students.jpg",
        description: "Full-day intensive bootcamp covering resume building, interview skills, and personal branding for college students.",
        featured: false,
        category: 'Bootcamp'
    }
];


export default function EventsPage() {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme } = useTheme();
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => setMounted(true), []);

    const filteredUpcoming = upcomingEvents.filter(ev => {
        const matchesCategory = selectedCategory === 'All' || ev.category === selectedCategory;
        const matchesSearch = ev.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            ev.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const featured = upcomingEvents.filter(ev => ev.featured);

    return (
        <div className={`min-h-screen flex flex-col transition-all duration-500 ${mounted && resolvedTheme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
            <Navbar />

            <main className="flex-grow">
                <section className={`relative min-h-screen transition-all duration-500 ${mounted && resolvedTheme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
                    <WavyBackground variant="primary" intensity="strong" />

                    <div className="relative content-container pt-20 pb-8">
                        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                            <div className="space-y-2 lg:space-y-1">
                                <div className="space-y-4">
                                    <h1 className={`text-2xl sm:text-4xl lg:text-4xl xl:text-6xl font-bold leading-tight tracking-tight ${mounted && resolvedTheme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>
                                        Events
                                    </h1>
                                </div>

                                <div className="space-y-3">
                                    <p className={`text-lg sm:text-xl leading-relaxed max-w-2xl ${mounted && resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                                        Attend workshops, webinars and conferences to connect with recruiters, learn industry trends, and sharpen employability skills.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative content-container py-8">
                        <div className="max-w-7xl mx-auto">
                            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                                <div className="relative w-full md:w-96">
                                    <Search className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 ${mounted && resolvedTheme === 'dark' ? 'text-gray-400' : 'text-gray-400'}`} />
                                    <input
                                        type="text"
                                        placeholder="Search events..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className={`w-full pl-12 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 ${mounted && resolvedTheme === 'dark' ? 'bg-gray-800 border-gray-600 text-white focus:ring-blue-500' : 'border-gray-300 focus:ring-blue-500 focus:border-transparent'}`}
                                    />
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {categories.map(cat => (
                                        <button
                                            key={cat}
                                            onClick={() => setSelectedCategory(cat)}
                                            className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${selectedCategory === cat ? 'bg-blue-600 text-white shadow-lg' : mounted && resolvedTheme === 'dark' ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                                            {cat}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative content-container py-8">
                        <div className="max-w-7xl mx-auto">
                            <div className="flex items-center gap-3 mb-10">
                                <Calendar className={`w-8 h-8 ${mounted && resolvedTheme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`} />
                                <h2 className={`text-3xl sm:text-4xl font-bold ${mounted && resolvedTheme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>
                                    Featured Events
                                </h2>
                            </div>

                            <div className="grid lg:grid-cols-2 gap-8 mb-16">
                                {featured.map(ev => (
                                    <div key={ev.id} className={`rounded-xl border shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 p-6 group ${mounted && resolvedTheme === 'dark' ? 'bg-gradient-to-br from-blue-900/20 to-blue-800/10 border-blue-700/30' : 'bg-gradient-to-br from-blue-50 to-blue-100/50 border-blue-200'}`}>
                                        <div className="relative mb-6">
                                            <div className={`w-full h-64 rounded-xl overflow-hidden border transition-colors duration-300 ${mounted && resolvedTheme === 'dark' ? 'border-blue-600/50 group-hover:border-blue-400/70' : 'border-blue-300/70 group-hover:border-blue-200'}`}>
                                                <Image src={ev.image} alt={ev.title} width={600} height={400} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300" />
                                            </div>
                                            <div className="absolute top-4 left-4">
                                                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${mounted && resolvedTheme === 'dark' ? 'bg-blue-600 text-white' : 'bg-blue-600 text-white'}`}>
                                                    {ev.category}
                                                </span>
                                            </div>
                                        </div>

                                        <div className={`flex items-center gap-4 text-sm mb-4 ${mounted && resolvedTheme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                                            <span>{ev.date}</span>
                                            <span>•</span>
                                            <span>{ev.time}</span>
                                        </div>

                                        <h3 className={`text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors ${mounted && resolvedTheme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>
                                            {ev.title}
                                        </h3>

                                        <p className={`leading-relaxed mb-4 ${mounted && resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                                            {ev.description}
                                        </p>

                                        <div className={`flex items-center gap-2 font-semibold group-hover:gap-3 transition-all ${mounted && resolvedTheme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}>
                                            Register <ArrowRight className="w-5 h-5" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="relative content-container py-20">
                        <div className="max-w-7xl mx-auto">
                            <div className="flex items-center gap-3 mb-10">
                                <Calendar className={`w-8 h-8 ${mounted && resolvedTheme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`} />
                                <h2 className={`text-3xl sm:text-4xl font-bold ${mounted && resolvedTheme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>
                                    All Events
                                </h2>
                            </div>

                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {filteredUpcoming.map(ev => (
                                    <div key={ev.id} className={`rounded-xl border shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 p-6 group ${mounted && resolvedTheme === 'dark' ? 'bg-gradient-to-br from-blue-900/20 to-blue-800/10 border-blue-700/30' : 'bg-gradient-to-br from-blue-50 to-blue-100/50 border-blue-200'}`}>
                                        <div className="relative mb-6">
                                            <div className={`w-full h-48 rounded-xl overflow-hidden border transition-colors duration-300 ${mounted && resolvedTheme === 'dark' ? 'border-blue-600/50 group-hover:border-blue-400/70' : 'border-blue-300/70 group-hover:border-blue-200'}`}>
                                                <Image src={ev.image} alt={ev.title} width={400} height={300} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300" />
                                            </div>
                                            <div className="absolute top-3 right-3">
                                                <span className={`backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold ${mounted && resolvedTheme === 'dark' ? 'bg-gray-800/90 text-blue-400' : 'bg-white/90 text-blue-600'}`}>
                                                    {ev.category}
                                                </span>
                                            </div>
                                        </div>

                                        <div className={`flex items-center gap-3 text-xs mb-3 ${mounted && resolvedTheme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                                            <span>{ev.date}</span>
                                            <span>•</span>
                                            <span>{ev.time}</span>
                                        </div>

                                        <h3 className={`text-lg font-bold mb-2 group-hover:text-blue-600 transition-colors line-clamp-2 ${mounted && resolvedTheme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>
                                            {ev.title}
                                        </h3>

                                        <p className={`text-sm leading-relaxed line-clamp-3 ${mounted && resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                                            {ev.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="relative content-container py-20">
                        <div className="max-w-4xl mx-auto text-center">
                            <div className={`rounded-2xl border shadow-2xl p-12 ${mounted && resolvedTheme === 'dark' ? 'bg-gradient-to-br from-blue-900/30 to-blue-800/20 border-blue-700/30' : 'bg-gradient-to-br from-blue-50 to-blue-100/50 border-blue-200'}`}>
                                <h2 className={`text-4xl sm:text-5xl font-bold mb-6 ${mounted && resolvedTheme === 'dark' ? 'text-blue-400' : 'text-blue-700'}`}>
                                    Stay Informed
                                </h2>
                                <p className={`text-xl mb-10 ${mounted && resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                                    Subscribe to event updates and announcements — never miss an opportunity to learn and network.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                                    <input type="email" placeholder="Enter your email" className={`flex-1 px-6 py-4 rounded-xl focus:outline-none focus:ring-2 ${mounted && resolvedTheme === 'dark' ? 'bg-gray-800 border-gray-600 text-white focus:ring-blue-500' : 'border-gray-300 focus:ring-blue-500 focus:border-transparent'}`} />
                                    <button className={`px-8 py-4 font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 ${mounted && resolvedTheme === 'dark' ? 'bg-blue-600 text-white hover:bg-blue-500' : 'bg-blue-600 text-white hover:bg-blue-500'}`}>Subscribe</button>
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