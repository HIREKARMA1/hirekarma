"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Navbar from '../../../components/layout/Navbar';
import Footer from '../../../components/layout/Footer';
import WavyBackground from '../../../components/layout/WavyBackground';
import { Calendar, MapPin, Clock, Users, Video, ArrowRight, Filter, ChevronRight } from 'lucide-react';

const upcomingEvents = [
  {
    id: 1,
    title: "Campus Recruitment Excellence Summit 2024",
    date: "November 15, 2024",
    time: "10:00 AM - 4:00 PM IST",
    location: "Bhubaneswar, Odisha",
    type: "In-Person",
    attendees: "200+ Expected",
    image: "/university.jpg",
    description: "Join industry leaders and T&P heads for a day of insights on transforming campus recruitment with AI and automation.",
    featured: true
  },
  {
    id: 2,
    title: "Webinar: Future-Ready Skills for 2025",
    date: "November 22, 2024",
    time: "3:00 PM - 4:30 PM IST",
    location: "Virtual Event",
    type: "Online",
    attendees: "500+ Expected",
    image: "/students.jpg",
    description: "Expert panel discussion on emerging skills and how students can prepare for the evolving job market.",
    featured: true
  },
  {
    id: 3,
    title: "Corporate Hiring Strategy Workshop",
    date: "December 5, 2024",
    time: "2:00 PM - 5:00 PM IST",
    location: "Virtual Event",
    type: "Online",
    attendees: "150+ Expected",
    image: "/corporate.jpg",
    description: "Interactive workshop for HR professionals on optimizing campus hiring processes and leveraging data analytics.",
    featured: false
  },
  {
    id: 4,
    title: "Student Success Bootcamp",
    date: "December 12, 2024",
    time: "9:00 AM - 6:00 PM IST",
    location: "Cuttack, Odisha",
    type: "In-Person",
    attendees: "300+ Expected",
    image: "/students.jpg",
    description: "Full-day intensive bootcamp covering resume building, interview skills, and personal branding for college students.",
    featured: false
  }
];

const pastEvents = [
  {
    id: 5,
    title: "AI in Recruitment - Industry Roundtable",
    date: "October 10, 2024",
    attendees: "180 Attended",
    image: "/demo.png",
    highlights: "Keynote by leading AI experts, live demos, networking session"
  },
  {
    id: 6,
    title: "Annual Placement Officers Conclave",
    date: "September 25, 2024",
    attendees: "250 Attended",
    image: "/university.jpg",
    highlights: "Best practices sharing, awards ceremony, partner showcase"
  },
  {
    id: 7,
    title: "Campus to Corporate: Bridging the Gap",
    date: "August 15, 2024",
    attendees: "400 Attended",
    image: "/corporate.jpg",
    highlights: "Panel discussions, student presentations, recruiter meet"
  }
];

const EventsPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');

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
                                <Calendar className="w-4 h-4" />
                                <span className="text-sm font-semibold">Events</span>
                            </div>
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-blue-700 leading-tight mb-8">
                                Connect. Learn. Network.
                            </h1>
                            <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                                Join us at industry events, webinars, and workshops designed to empower students, 
                                educators, and recruiters in the campus hiring ecosystem.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Tab Navigation */}
                <section className="relative py-8 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
                    <WavyBackground variant="neutral" intensity="light" />
                    <div className="content-container">
                        <div className="max-w-7xl mx-auto">
                            <div className="flex gap-4 justify-center">
                                <button
                                    onClick={() => setActiveTab('upcoming')}
                                    className={`px-8 py-3 rounded-xl font-bold transition-all duration-300 ${
                                        activeTab === 'upcoming'
                                            ? 'bg-blue-600 text-white shadow-lg'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                                >
                                    Upcoming Events
                                </button>
                                <button
                                    onClick={() => setActiveTab('past')}
                                    className={`px-8 py-3 rounded-xl font-bold transition-all duration-300 ${
                                        activeTab === 'past'
                                            ? 'bg-blue-600 text-white shadow-lg'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                                >
                                    Past Events
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Upcoming Events Section */}
                {activeTab === 'upcoming' && (
                    <>
                        {/* Featured Events */}
                        <section className="relative py-16 lg:py-20 bg-white dark:bg-gray-900">
                            <WavyBackground variant="accent" intensity="light" />
                            <div className="content-container">
                                <div className="max-w-7xl mx-auto">
                                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10">Featured Events</h2>
                                    
                                    <div className="grid lg:grid-cols-2 gap-8 mb-16">
                                        {upcomingEvents.filter(e => e.featured).map(event => (
                                            <div key={event.id} className="group cursor-pointer">
                                                <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-blue-200">
                                                    <div className="relative h-64 overflow-hidden">
                                                        <Image
                                                            src={event.image}
                                                            alt={event.title}
                                                            width={600}
                                                            height={400}
                                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                        />
                                                        <div className="absolute top-4 right-4">
                                                            <span className={`px-4 py-2 rounded-full text-sm font-bold ${
                                                                event.type === 'Online' 
                                                                    ? 'bg-green-500 text-white' 
                                                                    : 'bg-blue-600 text-white'
                                                            }`}>
                                                                {event.type}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="p-8">
                                                        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                                                            {event.title}
                                                        </h3>
                                                        <p className="text-gray-600 leading-relaxed mb-6">
                                                            {event.description}
                                                        </p>
                                                        
                                                        <div className="space-y-3 mb-6">
                                                            <div className="flex items-center gap-3 text-gray-700">
                                                                <Calendar className="w-5 h-5 text-blue-600" />
                                                                <span className="font-semibold">{event.date}</span>
                                                            </div>
                                                            <div className="flex items-center gap-3 text-gray-700">
                                                                <Clock className="w-5 h-5 text-blue-600" />
                                                                <span>{event.time}</span>
                                                            </div>
                                                            <div className="flex items-center gap-3 text-gray-700">
                                                                <MapPin className="w-5 h-5 text-blue-600" />
                                                                <span>{event.location}</span>
                                                            </div>
                                                            <div className="flex items-center gap-3 text-gray-700">
                                                                <Users className="w-5 h-5 text-blue-600" />
                                                                <span>{event.attendees}</span>
                                                            </div>
                                                        </div>

                                                        <button className="w-full px-6 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-2 group-hover:gap-3">
                                                            Register Now <ArrowRight className="w-5 h-5" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* All Upcoming Events */}
                                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10">All Upcoming Events</h2>
                                    <div className="space-y-6">
                                        {upcomingEvents.map(event => (
                                            <div key={event.id} className="group cursor-pointer">
                                                <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden">
                                                    <div className="flex flex-col md:flex-row">
                                                        <div className="md:w-80 h-48 md:h-auto relative overflow-hidden flex-shrink-0">
                                                            <Image
                                                                src={event.image}
                                                                alt={event.title}
                                                                width={320}
                                                                height={200}
                                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                            />
                                                        </div>
                                                        <div className="flex-1 p-6 md:p-8">
                                                            <div className="flex items-start justify-between mb-4">
                                                                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                                                                    {event.title}
                                                                </h3>
                                                                <span className={`px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap ml-4 ${
                                                                    event.type === 'Online' 
                                                                        ? 'bg-green-100 text-green-700' 
                                                                        : 'bg-blue-100 text-blue-700'
                                                                }`}>
                                                                    {event.type}
                                                                </span>
                                                            </div>
                                                            
                                                            <p className="text-gray-600 mb-4">{event.description}</p>
                                                            
                                                            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                                                                <div className="flex items-center gap-2">
                                                                    <Calendar className="w-4 h-4 text-blue-600" />
                                                                    <span>{event.date}</span>
                                                                </div>
                                                                <div className="flex items-center gap-2">
                                                                    <Clock className="w-4 h-4 text-blue-600" />
                                                                    <span>{event.time}</span>
                                                                </div>
                                                                <div className="flex items-center gap-2">
                                                                    <MapPin className="w-4 h-4 text-blue-600" />
                                                                    <span>{event.location}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>
                    </>
                )}

                {/* Past Events Section */}
                {activeTab === 'past' && (
                    <section className="relative py-16 lg:py-20 bg-white dark:bg-gray-900">
                        <WavyBackground variant="secondary" intensity="light" />
                        <div className="content-container">
                            <div className="max-w-7xl mx-auto">
                                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-10">Past Events</h2>
                                
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {pastEvents.map(event => (
                                        <div key={event.id} className="group cursor-pointer">
                                            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200">
                                                <div className="relative h-48 overflow-hidden">
                                                    <Image
                                                        src={event.image}
                                                        alt={event.title}
                                                        width={400}
                                                        height={300}
                                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                                    <div className="absolute bottom-4 left-4 right-4">
                                                        <div className="flex items-center gap-2 text-white text-sm">
                                                            <Calendar className="w-4 h-4" />
                                                            <span>{event.date}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="p-6">
                                                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                                        {event.title}
                                                    </h3>
                                                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                                                        <Users className="w-4 h-4 text-blue-600" />
                                                        <span className="font-semibold">{event.attendees}</span>
                                                    </div>
                                                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                                                        {event.highlights}
                                                    </p>
                                                    <button className="text-blue-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                                                        View Highlights <ChevronRight className="w-4 h-4" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* CTA Section */}
                <section className="relative py-16 lg:py-24 bg-gradient-to-br from-blue-700 to-blue-900 dark:from-blue-800 dark:to-blue-950">
                    <WavyBackground variant="primary" intensity="medium" />
                    <div className="content-container">
                        <div className="max-w-4xl mx-auto text-center">
                            <Calendar className="w-16 h-16 text-white mx-auto mb-6" />
                            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                                Never Miss an Event
                            </h2>
                            <p className="text-xl text-blue-100 mb-10">
                                Subscribe to get notified about upcoming events, webinars, and workshops
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

export default EventsPage;

