"use client";

import React, { useState, useEffect, Suspense } from 'react';
import { useTheme } from 'next-themes';
import dynamic from 'next/dynamic';
import { useHomeLocale } from '@/contexts/HomeLocaleContext';
import { localizeNumerals } from '@/lib/i18n/localizeNumerals';

// Lazy load recharts to reduce initial bundle
const ResponsiveContainer = dynamic(() => import('recharts').then(mod => ({ default: mod.ResponsiveContainer })), { ssr: false });
const BarChart = dynamic(() => import('recharts').then(mod => ({ default: mod.BarChart })), { ssr: false });
const Bar = dynamic(() => import('recharts').then(mod => ({ default: mod.Bar })), { ssr: false });
const Cell = dynamic(() => import('recharts').then(mod => ({ default: mod.Cell })), { ssr: false });
const XAxis = dynamic(() => import('recharts').then(mod => ({ default: mod.XAxis })), { ssr: false });
const YAxis = dynamic(() => import('recharts').then(mod => ({ default: mod.YAxis })), { ssr: false });
const CartesianGrid = dynamic(() => import('recharts').then(mod => ({ default: mod.CartesianGrid })), { ssr: false });
const Tooltip = dynamic(() => import('recharts').then(mod => ({ default: mod.Tooltip })), { ssr: false });

// Chart component - will be lazy loaded
const ChartComponent: React.FC<{
    mounted: boolean;
    resolvedTheme?: string;
    chartComingSoon: string;
    locale: Parameters<typeof localizeNumerals>[1];
}> = ({ mounted, resolvedTheme, chartComingSoon, locale }) => {
    const isDarkTheme = mounted && resolvedTheme === 'dark';
    const impactData = [
        { year: '2024', value: 8000 },
        { year: '2025', value: 14000 },
        { year: '2026', value: 10000 },
        { year: '2027', value: chartComingSoon },
        { year: '2028', value: chartComingSoon },
        { year: '2029', value: chartComingSoon },
        { year: '2030', value: chartComingSoon },
        { year: '2031', value: chartComingSoon },
    ].map((entry) => ({
        ...entry,
        year: localizeNumerals(entry.year, locale),
    }));
    // Recharts defaults often render axis/grid with low contrast on dark gradients.
    const gridStroke = isDarkTheme ? 'rgba(248, 250, 252, 0.42)' : 'rgba(71, 85, 105, 0.22)';
    const axisStroke = isDarkTheme ? '#cbd5e1' : '#94a3b8';
    const tickColor = isDarkTheme ? '#f8fafc' : '#334155';

    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart data={impactData} margin={{ top: 40, right: 40, left: 20, bottom: 40 }}>
                <CartesianGrid strokeDasharray="3 3" stroke={gridStroke} />
                <XAxis
                    dataKey="year"
                    stroke={axisStroke}
                    axisLine={{ stroke: axisStroke }}
                    tick={{ fill: tickColor, fontSize: 13, fontWeight: 600 }}
                    tickLine={{ stroke: axisStroke }}
                />
                <YAxis
                    stroke={axisStroke}
                    axisLine={{ stroke: axisStroke }}
                    tick={{ fill: tickColor, fontSize: 13, fontWeight: 600 }}
                    tickLine={{ stroke: axisStroke }}
                    tickFormatter={(value) => localizeNumerals(String(value), locale)}
                />
                <Tooltip
                    formatter={(value) =>
                        typeof value === 'number'
                            ? localizeNumerals(String(value), locale)
                            : String(value)
                    }
                    contentStyle={{
                        backgroundColor: isDarkTheme ? 'rgba(15, 23, 42, 0.92)' : 'rgba(255, 255, 255, 0.95)',
                        border: `1px solid ${isDarkTheme ? 'rgba(203, 213, 225, 0.25)' : 'rgba(148, 163, 184, 0.35)'}`,
                        borderRadius: '10px',
                        color: isDarkTheme ? '#f8fafc' : '#0f172a',
                        fontWeight: 600,
                    }}
                />
                <Bar dataKey="value" fill="#06b6d4">
                    {impactData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={mounted && resolvedTheme === 'dark' ? '#06b6d4' : '#0891b2'} />
                    ))}
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    );
};

const statCardStyles = [
    {
        card: {
            dark: 'bg-gradient-to-br from-blue-900/20 to-blue-800/10 border-blue-700/30 hover:border-blue-600/50',
            light: 'bg-gradient-to-br from-blue-50 to-blue-100/50 border-blue-200 hover:border-blue-300',
        },
        value: {
            dark: 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400',
            light: 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600',
        },
        labelAlign: 'text-right',
    },
    {
        card: {
            dark: 'bg-gradient-to-br from-purple-900/20 to-purple-800/10 border-purple-700/30 hover:border-purple-600/50',
            light: 'bg-gradient-to-br from-purple-50 to-purple-100/50 border-purple-200 hover:border-purple-300',
        },
        value: {
            dark: 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-yellow-400',
            light: 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-yellow-600',
        },
        labelAlign: 'text-left',
    },
    {
        card: {
            dark: 'bg-gradient-to-br from-orange-900/20 to-orange-800/10 border-orange-700/30 hover:border-orange-600/50',
            light: 'bg-gradient-to-br from-orange-50 to-orange-100/50 border-orange-200 hover:border-orange-300',
        },
        value: {
            dark: 'text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400',
            light: 'text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600',
        },
        labelAlign: 'text-right',
    },
    {
        card: {
            dark: 'bg-gradient-to-br from-emerald-900/20 to-emerald-800/10 border-emerald-700/30 hover:border-emerald-600/50',
            light: 'bg-gradient-to-br from-emerald-50 to-emerald-100/50 border-emerald-200 hover:border-emerald-300',
        },
        value: {
            dark: 'text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400',
            light: 'text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600',
        },
        labelAlign: 'text-left',
    },
] as const;

const ImpactSection: React.FC = () => {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme } = useTheme();
    const { content, locale } = useHomeLocale();
    const { impactSection } = content;
    const isDark = mounted && resolvedTheme === 'dark';

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
                        <h2 className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight ${isDark
                            ? 'text-gray-100'
                            : 'text-gray-900'
                            }`}>
                            {impactSection.heading}
                            <span className={`block mt-2 text-lg sm:text-xl lg:text-2xl xl:text-3xl font-medium ${isDark
                                ? 'text-fuchsia-400'
                                : 'text-fuchsia-600'
                                }`}>
                                {impactSection.subheading}
                            </span>
                        </h2>
                    </div>

                    {/* Paragraph */}
                    <div className="space-y-4">
                        <p className={`text-lg sm:text-xl leading-relaxed max-w-2xl ${isDark
                            ? 'text-gray-300'
                            : 'text-gray-600'
                            }`}>
                            {impactSection.description}
                        </p>
                    </div>

                    {/* Main Statistics Header */}
                    <div className="space-y-4">
                        <div className="relative">
                            <h2 className={`text-5xl sm:text-5xl lg:text-5xl font-bold leading-tight tracking-tight ${isDark
                                ? 'text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500'
                                : 'text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600'
                                }`}>
                                {localizeNumerals(impactSection.primaryStat.value, locale)}
                            </h2>
                            {/* Glow effect */}
                            <div className={`absolute inset-0 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight blur-sm opacity-30 ${isDark
                                ? 'text-green-400'
                                : 'text-green-600'
                                }`}>
                                {localizeNumerals(impactSection.primaryStat.value, locale)}
                            </div>
                        </div>
                        <p className={`text-lg sm:text-l font-semibold ${isDark
                            ? 'text-gray-200'
                            : 'text-gray-700'
                            }`}>
                            {impactSection.primaryStat.label}
                        </p>
                    </div>

                    {/* Statistics Grid */}
                    <div className="grid grid-cols-2 gap-4 lg:gap-6 max-w-lg">
                        {impactSection.stats.map((stat, index) => {
                            const style = statCardStyles[index] ?? statCardStyles[0];
                            return (
                                <div
                                    key={`${stat.value}-${stat.label}`}
                                    className={`group relative p-4 rounded-xl border transition-all duration-500 hover:brightness-110 ${isDark ? style.card.dark : style.card.light}`}
                                >
                                    <div className="relative z-10 space-y-2">
                                        <div className={`text-2xl sm:text-3xl font-bold ${isDark ? style.value.dark : style.value.light}`}>
                                            {localizeNumerals(stat.value, locale)}
                                        </div>
                                        <div className={`text-xs sm:text-sm font-semibold ${style.labelAlign} ${isDark
                                            ? 'text-gray-300'
                                            : 'text-gray-700'
                                            }`}>
                                            {stat.label}
                                        </div>
                                    </div>
                                    <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br from-emerald-500/5 to-blue-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Right Content - Bar Chart */}
                <div className="relative">
                    <div className={`relative w-full h-[450px] lg:h-[500px] border overflow-hidden ${mounted && resolvedTheme === 'dark'
                        ? 'bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900 border-gray-600'
                        : 'bg-gradient-to-br from-gray-50 via-white to-gray-100 border-gray-200'
                        }`}>
                        <Suspense fallback={<div className="w-full h-full flex items-center justify-center" />}>
                            <ChartComponent
                                mounted={mounted}
                                resolvedTheme={resolvedTheme}
                                chartComingSoon={impactSection.chartComingSoon}
                                locale={locale}
                            />
                        </Suspense>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImpactSection;
