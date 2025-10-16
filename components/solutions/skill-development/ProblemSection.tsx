"use client";

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { AlertTriangle } from 'lucide-react';

const ProblemSection: React.FC = () => {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    // A reusable list item component for the "Challenges" section
    const ChallengeListItem: React.FC<{ title: string; description: string }> = ({ title, description }) => (
        <div className="flex items-start gap-4">
            <div className={`w-12 h-12 rounded-lg flex-shrink-0 flex items-center justify-center mt-1 ${mounted && resolvedTheme === 'dark'
                ? 'bg-red-900/30'
                : 'bg-red-100'
                }`}>
                <AlertTriangle className={`w-6 h-6 ${mounted && resolvedTheme === 'dark' ? 'text-red-400' : 'text-red-600'
                    }`} />
            </div>
            <div>
                <h3 className={`text-lg font-bold ${mounted && resolvedTheme === 'dark' ? 'text-gray-100' : 'text-gray-900'
                    }`}>{title}</h3>
                <p className={`${mounted && resolvedTheme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}>{description}</p>
            </div>
        </div>
    );

    return (
        <div className="relative content-container py-20">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Left Side - Images */}
                    <div className="order-2 lg:order-1">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-4">
                                <Image src="/university.jpg" alt="Training infrastructure challenges" width={300} height={400} className="w-full h-64 object-cover rounded-xl shadow-lg" />
                                <Image src="/corporate.jpg" alt="Industry alignment issues" width={300} height={300} className="w-full h-48 object-cover rounded-xl shadow-lg" />
                            </div>
                            <div className="space-y-4 pt-8">
                                <Image src="/demo.png" alt="Tracking and assessment gaps" width={300} height={300} className="w-full h-48 object-cover rounded-xl shadow-lg" />
                                <Image src="/students.jpg" alt="Participant employability barriers" width={300} height={400} className="w-full h-64 object-cover rounded-xl shadow-lg" />
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="order-1 lg:order-2 space-y-10">
                        <div>
                            <h2 className={`text-3xl lg:text-4xl xl:text-5xl font-bold ${mounted && resolvedTheme === 'dark' ? 'text-gray-100' : 'text-gray-900'
                                }`}>
                                Skill Development
                                <span className={`block mt-2 text-2xl lg:text-3xl font-medium ${mounted && resolvedTheme === 'dark' ? 'text-red-400' : 'text-red-600'
                                    }`}>
                                    Why Enhancing Employability is Challenging
                                </span>
                            </h2>
                        </div>

                        <div className="space-y-6">
                            <ChallengeListItem
                                title="Skills Mismatch with Industry Needs"
                                description="Training programs often fail to align with evolving industry demands, resulting in graduates who lack the practical, job-ready competencies required by employers."
                            />
                            <ChallengeListItem
                                title="Inadequate Infrastructure and Access"
                                description="Limited training facilities, especially in rural or underserved areas, combined with language barriers and cultural norms, restrict participation and program reach."
                            />
                            <ChallengeListItem
                                title="Weak Career Guidance and Tracking"
                                description="Absence of robust systems for monitoring participant progress, providing personalized guidance, and measuring long-term employability outcomes hinders program effectiveness."
                            />
                            <ChallengeListItem
                                title="Limited Employer Linkages"
                                description="Insufficient connections to hiring partners and outdated curricula lead to low placement rates, perpetuating the gap between skill acquisition and actual job opportunities."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProblemSection;

