"use client";

import React from 'react';
import { useTheme } from 'next-themes';

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    description?: string;
    alignment?: 'left' | 'center';
    className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
    title,
    subtitle,
    description,
    alignment = 'center',
    className = ''
}) => {
    const [mounted, setMounted] = React.useState(false);
    const { resolvedTheme } = useTheme();

    React.useEffect(() => {
        setMounted(true);
    }, []);

    const alignmentClasses = alignment === 'center' ? 'text-center items-center' : 'text-left items-start';

    return (
        <div className={`space-y-4 md:space-y-6 flex flex-col ${alignmentClasses} ${className}`}>
            {subtitle && (
                <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-500 ${mounted && resolvedTheme === 'dark'
                        ? 'bg-cyan-900/30 text-cyan-400 border border-cyan-700/50'
                        : 'bg-cyan-50 text-cyan-600 border border-cyan-200'
                    }`}>
                    {subtitle}
                </span>
            )}

            <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight transition-colors duration-500 ${mounted && resolvedTheme === 'dark'
                    ? 'text-gray-100'
                    : 'text-gray-900'
                }`}>
                {title}
            </h2>

            {description && (
                <p className={`text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl transition-colors duration-500 ${mounted && resolvedTheme === 'dark'
                        ? 'text-gray-300'
                        : 'text-gray-600'
                    }`}>
                    {description}
                </p>
            )}
        </div>
    );
};

export default SectionHeader;

