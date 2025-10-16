"use client";

import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { useTheme } from 'next-themes';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import WavyBackground from '../../components/layout/WavyBackground';
import { Mail, Phone, MapPin, Send, User, MessageSquare } from 'lucide-react';
import contactAnimation from '../../public/contect.json';
import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
const ContactPage: React.FC = () => {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        const templateParams = {
            name: formData.name,
            email: formData.email,
            message: formData.message,
        };

        emailjs
            .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
            .then(() => {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
            })
            .catch((error: unknown) => {
                console.error('EmailJS error:', error);
                setStatus('error');
            });
    };

    return (
        <div className={`min-h-screen flex flex-col ${mounted && resolvedTheme === 'dark' ? 'bg-gray-900' : 'bg-white'
            }`}>
            <Navbar />

            <main className="flex-grow">
                <section className={`relative ${mounted && resolvedTheme === 'dark' ? 'bg-gray-900' : 'bg-white'
                    }`}>
                    {/* Wavy Background */}
                    <WavyBackground variant="primary" intensity="strong" />

                    {/* Section 1: Hero (Get In Touch) */}
                    <div className="relative content-container pt-20 pb-20">
                        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center min-h-[85vh]">
                            {/* Left Content */}
                            <div className="space-y-8 lg:space-y-10">
                                <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full ${mounted && resolvedTheme === 'dark'
                                        ? 'bg-blue-900/30 border border-blue-700/50'
                                        : 'bg-blue-100 border border-blue-200'
                                    }`}>
                                    <Mail className={`w-4 h-4 ${mounted && resolvedTheme === 'dark' ? 'text-blue-400' : 'text-blue-700'
                                        }`} />
                                    <span className={`text-sm font-semibold ${mounted && resolvedTheme === 'dark' ? 'text-blue-400' : 'text-blue-700'
                                        }`}>Contact Us</span>
                                </div>

                                <div className="space-y-6">
                                    <h1 className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight ${mounted && resolvedTheme === 'dark' ? 'text-gray-100' : 'text-gray-900'
                                        }`}>
                                        Get In Touch
                                        <span className={`block mt-2 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium ${mounted && resolvedTheme === 'dark' ? 'text-cyan-400' : 'text-cyan-600'
                                            }`}>
                                            Let&#39;s Build the Future Together
                                        </span>
                                    </h1>
                                </div>

                                <div className="space-y-4">
                                    <p className={`text-lg sm:text-xl leading-relaxed max-w-2xl ${mounted && resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                                        }`}>
                                        Whether you are a student seeking opportunities, a corporate leader sourcing talent, or an institution
                                        enhancing employability, we are here to help. Reach out and let us connect to explore how HireKarma can transform your journey.
                                    </p>
                                </div>

                            </div>

                            {/* Right Content - Image */}
                            {/* Left Column: Header and Form */}
                            <div className="order-2 lg:order-1 space-y-10">
                                <div>
                                    <h2 className={`text-3xl lg:text-4xl xl:text-5xl font-bold ${mounted && resolvedTheme === 'dark' ? 'text-gray-100' : 'text-gray-900'
                                        }`}>
                                        Send Us a Message
                                    </h2>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Name */}
                                    <div>
                                        <label htmlFor="name" className={`block text-sm font-medium mb-2 ${mounted && resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                                            }`}>
                                            <User className={`inline w-4 h-4 mr-2`} />
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500 focus:border-transparent ${mounted && resolvedTheme === 'dark'
                                                    ? 'bg-gray-800 border-gray-600 text-gray-100 placeholder-gray-400'
                                                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                                                }`}
                                            placeholder="Your full name"
                                        />
                                    </div>

                                    {/* Email */}
                                    <div>
                                        <label htmlFor="email" className={`block text-sm font-medium mb-2 ${mounted && resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                                            }`}>
                                            <Mail className={`inline w-4 h-4 mr-2`} />
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500 focus:border-transparent ${mounted && resolvedTheme === 'dark'
                                                    ? 'bg-gray-800 border-gray-600 text-gray-100 placeholder-gray-400'
                                                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                                                }`}
                                            placeholder="your@email.com"
                                        />
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label htmlFor="message" className={`block text-sm font-medium mb-2 ${mounted && resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                                            }`}>
                                            <MessageSquare className={`inline w-4 h-4 mr-2`} />
                                            Your Message
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={5}
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none ${mounted && resolvedTheme === 'dark'
                                                    ? 'bg-gray-800 border-gray-600 text-gray-100 placeholder-gray-400'
                                                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                                                }`}
                                            placeholder="Tell us about your inquiry or how we can help..."
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={status === 'sending'}
                                        className={`w-full flex items-center justify-center space-x-2 px-8 py-4 font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 ${mounted && resolvedTheme === 'dark'
                                                ? 'bg-blue-600 text-white hover:bg-blue-700'
                                                : 'bg-blue-600 text-white hover:bg-blue-700'
                                            } ${status === 'sending' ? 'opacity-60 cursor-not-allowed' : ''}`}
                                    >
                                        <Send className="w-5 h-5" />
                                        <span>{status === 'sending' ? 'Sending...' : 'Send Message'}</span>
                                    </button>

                                    {/* Status messages */}
                                    {status === 'sending' && (
                                        <p className="text-sm text-gray-600">Sending...</p>
                                    )}
                                    {status === 'success' && (
                                        <p className="text-sm text-green-600">Message sent successfully ✅</p>
                                    )}
                                    {status === 'error' && (
                                        <p className="text-sm text-red-600">Failed to send. Please try again later.</p>
                                    )}
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* Section 2: Contact Methods (The Ways to Reach Us) */}
                    <div className="relative content-container py-20">
                        <div className="max-w-7xl mx-auto">
                            <div className="grid lg:grid-cols-2 gap-16 lg:gap-30 items-center">
                                {/* Left Side - Images */}
                                <div className="order-2 lg:order-1">
                                    <div className="rounded-3xl overflow-hidden bg-transparent">
                                        <Lottie
                                            animationData={contactAnimation}
                                            loop={true}
                                            autoplay={true}
                                            style={{ width: '100%', height: 'auto', minHeight: 320, background: 'transparent' }}
                                        />
                                    </div>
                                </div>

                                {/* Right Side - Content */}
                                <div className="order-1 lg:order-2 space-y-10">
                                    <div>
                                        <h2 className={`text-3xl lg:text-4xl xl:text-5xl font-bold ${mounted && resolvedTheme === 'dark' ? 'text-gray-100' : 'text-gray-900'
                                            }`}>
                                            The Ways to Reach Us
                                            <span className={`block mt-2 text-2xl lg:text-3xl font-medium ${mounted && resolvedTheme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                                                }`}>
                                                Choose Your Preferred Channel
                                            </span>
                                        </h2>
                                    </div>

                                    <div className="space-y-6">
                                        {/* Email */}
                                        <div className="flex items-start space-x-4">
                                            <div className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl ${mounted && resolvedTheme === 'dark'
                                                    ? 'bg-blue-500/20 text-blue-400'
                                                    : 'bg-blue-100 text-blue-600'
                                                }`}>
                                                <Mail className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h3 className={`text-xl font-semibold ${mounted && resolvedTheme === 'dark'
                                                        ? 'text-gray-100'
                                                        : 'text-gray-900'
                                                    }`}>
                                                    Email Support
                                                </h3>
                                                <p className={`text-base ${mounted && resolvedTheme === 'dark'
                                                        ? 'text-gray-400'
                                                        : 'text-gray-600'
                                                    }`}>
                                                    For general inquiries, partnerships, or technical support.
                                                </p>
                                                <a href="mailto:hello@hirekarma.com" className={`inline-flex items-center space-x-2 mt-2 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 font-semibold`}>
                                                    <span>hr@hirekarma.in</span>
                                                    <Mail className="w-4 h-4" />
                                                </a>
                                            </div>
                                        </div>

                                        {/* Phone */}
                                        <div className="flex items-start space-x-4">
                                            <div className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl ${mounted && resolvedTheme === 'dark'
                                                    ? 'bg-green-500/20 text-green-400'
                                                    : 'bg-green-100 text-green-600'
                                                }`}>
                                                <Phone className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h3 className={`text-xl font-semibold ${mounted && resolvedTheme === 'dark'
                                                        ? 'text-gray-100'
                                                        : 'text-gray-900'
                                                    }`}>
                                                    Phone Assistance
                                                </h3>
                                                <p className={`text-base ${mounted && resolvedTheme === 'dark'
                                                        ? 'text-gray-400'
                                                        : 'text-gray-600'
                                                    }`}>
                                                    For immediate help or scheduling a call.
                                                </p>
                                                <a href="tel:+919876543210" className={`inline-flex items-center space-x-2 mt-2 text-green-500 hover:text-green-600 dark:text-green-400 dark:hover:text-green-300 font-semibold`}>
                                                    <span>+91 98765 43210</span>
                                                    <Phone className="w-4 h-4" />
                                                </a>
                                            </div>
                                        </div>

                                        {/* Location */}
                                        <div className="flex items-start space-x-4">
                                            <div className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl ${mounted && resolvedTheme === 'dark'
                                                    ? 'bg-purple-500/20 text-purple-400'
                                                    : 'bg-purple-100 text-purple-600'
                                                }`}>
                                                <MapPin className="w-6 h-6" />
                                            </div>
                                            <div>
                                                <h3 className={`text-xl font-semibold ${mounted && resolvedTheme === 'dark'
                                                        ? 'text-gray-100'
                                                        : 'text-gray-900'
                                                    }`}>
                                                    Office Location
                                                </h3>
                                                <p className={`text-base ${mounted && resolvedTheme === 'dark'
                                                        ? 'text-gray-400'
                                                        : 'text-gray-600'
                                                    }`}>
                                                    Visit our headquarters in Bhubaneswar for in-person meetings.
                                                </p>
                                                <p className={`mt-2 font-semibold ${mounted && resolvedTheme === 'dark' ? 'text-gray-100' : 'text-gray-900'
                                                    }`}>
                                                    Room No: 103, 1st Floor, Tower A, O-HUB, Bhubaneswar
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </main>

            <Footer />
        </div>
    );
};

export default ContactPage;