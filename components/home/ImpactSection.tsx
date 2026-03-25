"use client";

import React, { useState, useEffect, Suspense } from 'react';
import { useTheme } from 'next-themes';
import dynamic from 'next/dynamic';

// Lazy load recharts to reduce initial bundle
const ResponsiveContainer = dynamic(() => import('recharts').then(mod => ({ default: mod.ResponsiveContainer })), { ssr: false });
const BarChart = dynamic(() => import('recharts').then(mod => ({ default: mod.BarChart })), { ssr: false });
const Bar = dynamic(() => import('recharts').then(mod => ({ default: mod.Bar })), { ssr: false });
const Cell = dynamic(() => import('recharts').then(mod => ({ default: mod.Cell })), { ssr: false });
const XAxis = dynamic(() => import('recharts').then(mod => ({ default: mod.XAxis })), { ssr: false });
const YAxis = dynamic(() => import('recharts').then(mod => ({ default: mod.YAxis })), { ssr: false });
const CartesianGrid = dynamic(() => import('recharts').then(mod => ({ default: mod.CartesianGrid })), { ssr: false });
const Tooltip = dynamic(() => import('recharts').then(mod => ({ default: mod.Tooltip })), { ssr: false });

// Example data for the chart
const impactData = [
    { year: '2024', value: 8000 },
    { year: '2025', value: 14000 },
    { year: '2026', value: 2000 },
    { year: '2027', value: "Comming Soon" },
    { year: '2028', value: "Comming Soon" },
    { year: '2029', value: "Comming Soon" },
    { year: '2030', value: "Comming Soon" },
    { year: '2031', value: "Comming Soon" },
];

// Chart component - will be lazy loaded
const ChartComponent: React.FC<{ mounted: boolean; resolvedTheme?: string }> = ({ mounted, resolvedTheme }) => (
    <ResponsiveContainer width="100%" height="100%">
        <BarChart data={impactData} margin={{ top: 40, right: 40, left: 20, bottom: 40 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="year" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#06b6d4">
                {impactData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={mounted && resolvedTheme === 'dark' ? '#06b6d4' : '#0891b2'} />
                ))}
            </Bar>
        </BarChart>
    </ResponsiveContainer>
);

const ImpactSection: React.FC = () => {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="relative content-container py-20">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                {/* Left Content - Statistics */}
                <div className="space-y-8 lg:space-y-10">
                    {/* Section Header */}
                    <div className="space-y-6">
                        <h2 className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight ${mounted && resolvedTheme === 'dark'
                            ? 'text-gray-100'
                            : 'text-gray-900'
                            }`}>
                            Our Impact in Numbers
                            <span className={`block mt-2 text-lg sm:text-xl lg:text-2xl xl:text-3xl font-medium ${mounted && resolvedTheme === 'dark'
                                ? 'text-fuchsia-400'
                                : 'text-fuchsia-600'
                                }`}>
                                Transforming Campus Hiring
                            </span>
                        </h2>
                    </div>

                    {/* Paragraph */}
                    <div className="space-y-4">
                        <p className={`text-lg sm:text-xl leading-relaxed max-w-2xl ${mounted && resolvedTheme === 'dark'
                            ? 'text-gray-300'
                            : 'text-gray-600'
                            }`}>
                            HireKarma delivers <strong className={`${mounted && resolvedTheme === 'dark'
                                ? 'text-gray-200'
                                : 'text-gray-700'
                                }`}>measurable results</strong> and <strong className={`${mounted && resolvedTheme === 'dark'
                                    ? 'text-gray-200'
                                    : 'text-gray-700'
                                    }`}>lasting impact</strong> across India&apos;s educational ecosystem.
                        </p>
                    </div>

                    {/* Main Statistics Header */}
                    <div className="space-y-4">
                        <div className="relative">
                            <h2 className={`text-5xl sm:text-5xl lg:text-5xl font-bold leading-tight tracking-tight ${mounted && resolvedTheme === 'dark'
                                ? 'text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500'
                                : 'text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600'
                                }`}>
                                200K+
                            </h2>
                            {/* Glow effect */}
                            <div className={`absolute inset-0 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight blur-sm opacity-30 ${mounted && resolvedTheme === 'dark'
                                ? 'text-green-400'
                                : 'text-green-600'
                                }`}>
                                200K+
                            </div>
                        </div>
                        <p className={`text-lg sm:text-l font-semibold ${mounted && resolvedTheme === 'dark'
                            ? 'text-gray-200'
                            : 'text-gray-700'
                            }`}>
                            Student Impacted
                        </p>
                    </div>

                    {/* Statistics Grid */}
                    <div className="grid grid-cols-2 gap-4 lg:gap-6 max-w-lg">
                        {/* Row 1 */}
                        <div className={`p-4 rounded-xl border transition-all duration-500 hover:scale-105 ${mounted && resolvedTheme === 'dark'
                            ? 'bg-gradient-to-br from-blue-900/20 to-blue-800/10 border-blue-700/30 hover:border-blue-600/50'
                            : 'bg-gradient-to-br from-blue-50 to-blue-100/50 border-blue-200 hover:border-blue-300'
                            }`}>
                            <div className="space-y-2">
                                <div className={`text-2xl sm:text-3xl font-bold ${mounted && resolvedTheme === 'dark'
                                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400'
                                    : 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600'
                                    }`}>
                                    80+
                                </div>
                                <div className={`text-xs sm:text-sm font-semibold text-right ${mounted && resolvedTheme === 'dark'
                                    ? 'text-gray-300'
                                    : 'text-gray-700'
                                    }`}>
                                    Trusted Colleges
                                </div>
                            </div>
                        </div>

                        <div className={`p-4 rounded-xl border transition-all duration-500 hover:scale-105 ${mounted && resolvedTheme === 'dark'
                            ? 'bg-gradient-to-br from-purple-900/20 to-purple-800/10 border-purple-700/30 hover:border-purple-600/50'
                            : 'bg-gradient-to-br from-purple-50 to-purple-100/50 border-purple-200 hover:border-purple-300'
                            }`}>
                            <div className="space-y-2">
                                <div className={`text-2xl sm:text-3xl font-bold ${mounted && resolvedTheme === 'dark'
                                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-yellow-400'
                                    : 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-yellow-600'
                                    }`}>
                                    950+
                                </div>
                                <div className={`text-xs sm:text-sm font-semibold text-left ${mounted && resolvedTheme === 'dark'
                                    ? 'text-gray-300'
                                    : 'text-gray-700'
                                    }`}>
                                    Partnered Companies
                                </div>
                            </div>
                        </div>

                        {/* Row 2 */}
                        <div className={`p-4 rounded-xl border transition-all duration-500 hover:scale-105 ${mounted && resolvedTheme === 'dark'
                            ? 'bg-gradient-to-br from-orange-900/20 to-orange-800/10 border-orange-700/30 hover:border-orange-600/50'
                            : 'bg-gradient-to-br from-orange-50 to-orange-100/50 border-orange-200 hover:border-orange-300'
                            }`}>
                            <div className="space-y-2">
                                <div className={`text-2xl sm:text-3xl font-bold ${mounted && resolvedTheme === 'dark'
                                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400'
                                    : 'text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600'
                                    }`}>
                                    7k+
                                </div>
                                <div className={`text-xs sm:text-sm font-semibold text-right ${mounted && resolvedTheme === 'dark'
                                    ? 'text-gray-300'
                                    : 'text-gray-700'
                                    }`}>
                                    Campus Drives Conducted
                                </div>
                            </div>
                        </div>

                        <div className={`p-4 rounded-xl border transition-all duration-500 hover:scale-105 ${mounted && resolvedTheme === 'dark'
                            ? 'bg-gradient-to-br from-emerald-900/20 to-emerald-800/10 border-emerald-700/30 hover:border-emerald-600/50'
                            : 'bg-gradient-to-br from-emerald-50 to-emerald-100/50 border-emerald-200 hover:border-emerald-300'
                            }`}>
                            <div className="space-y-2">
                                <div className={`text-2xl sm:text-3xl font-bold ${mounted && resolvedTheme === 'dark'
                                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400'
                                    : 'text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600'
                                    }`}>
                                    22K+
                                </div>
                                <div className={`text-xs sm:text-sm font-semibold text-left ${mounted && resolvedTheme === 'dark'
                                    ? 'text-gray-300'
                                    : 'text-gray-700'
                                    }`}>
                                    Students Placed
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Content - Bar Chart */}
                <div className="relative">
                    <div className={`relative w-full h-[450px] lg:h-[500px] border overflow-hidden ${mounted && resolvedTheme === 'dark'
                        ? 'bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900 border-gray-600'
                        : 'bg-gradient-to-br from-gray-50 via-white to-gray-100 border-gray-200'
                        }`}>
                        <Suspense fallback={<div className="w-full h-full flex items-center justify-center" />}>
                            <ChartComponent mounted={mounted} resolvedTheme={resolvedTheme} />
                        </Suspense>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImpactSection;
