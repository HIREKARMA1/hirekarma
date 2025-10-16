"use client";

import React from 'react';
import { useTheme } from 'next-themes';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    gradient?: string;
    className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
    icon: Icon,
    title,
    description,
    gradient = 'from-cyan-500 to-blue-500',
    className = ''
}) => {
    const [mounted, setMounted] = React.useState(false);
    const { resolvedTheme } = useTheme();

    React.useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className={`group relative p-6 sm:p-8 rounded-2xl border transition-all duration-500 hover:scale-105 ${mounted && resolvedTheme === 'dark'
                ? 'bg-gray-800/50 border-gray-700 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/20'
                : 'bg-white border-gray-200 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/10'
            } ${className}`}>
            {/* Icon */}
            <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-4 sm:mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                <Icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
            </div>

            {/* Content */}
            <h3 className={`text-lg sm:text-xl font-bold mb-2 sm:mb-3 transition-colors duration-500 ${mounted && resolvedTheme === 'dark'
                    ? 'text-gray-100'
                    : 'text-gray-900'
                }`}>
                {title}
            </h3>

            <p className={`text-sm sm:text-base leading-relaxed transition-colors duration-500 ${mounted && resolvedTheme === 'dark'
                    ? 'text-gray-400'
                    : 'text-gray-600'
                }`}>
                {description}
            </p>

            {/* Hover Effect Overlay */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
    );
};

export default FeatureCard;

