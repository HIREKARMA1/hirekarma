"use client";

import React from 'react';
import { useTheme } from 'next-themes';

type Accent = 'blue' | 'emerald' | 'purple' | 'orange';

interface ServiceCardProps {
  badge: string;
  title: string;
  description: string;
  accent?: Accent;
}

const accentDefaults: Record<
  Accent,
  {
    badgeDark: string;
    badgeLight: string;
    borderDark: string;
    borderLight: string;
    bgDark: string;
    bgLight: string;
    overlayFrom: string;
    overlayTo: string;
  }
> = {
  blue: {
    badgeDark: 'bg-[#1b52a4]/70 text-white border border-blue-700/60',
    badgeLight: 'bg-[rgba(27,82,164,0.08)]/80 text-blue-800 border border-[rgba(27,82,164,0.28)]/70',
    borderDark: 'border-blue-700/30',
    borderLight: 'border-[rgba(27,82,164,0.28)]/70',
    bgDark: 'bg-blue-900/15',
    bgLight: 'bg-[#f6f8fb]/40',
    overlayFrom: 'from-[#f6f8fb]0/10',
    overlayTo: 'to-cyan-500/10',
  },
  emerald: {
    badgeDark: 'bg-emerald-600/70 text-white border border-emerald-700/60',
    badgeLight: 'bg-emerald-100/80 text-emerald-800 border border-emerald-200/70',
    borderDark: 'border-emerald-700/30',
    borderLight: 'border-emerald-200/70',
    bgDark: 'bg-emerald-900/15',
    bgLight: 'bg-emerald-50/40',
    overlayFrom: 'from-emerald-500/10',
    overlayTo: 'to-teal-500/10',
  },
  purple: {
    badgeDark: 'bg-purple-600/70 text-white border border-purple-700/60',
    badgeLight: 'bg-purple-100/80 text-purple-800 border border-purple-200/70',
    borderDark: 'border-purple-700/30',
    borderLight: 'border-purple-200/70',
    bgDark: 'bg-purple-900/15',
    bgLight: 'bg-purple-50/40',
    overlayFrom: 'from-[rgba(9,136,85,0.08)]0/10',
    overlayTo: 'to-indigo-500/10',
  },
  orange: {
    badgeDark: 'bg-orange-600/70 text-white border border-orange-700/60',
    badgeLight: 'bg-orange-100/80 text-orange-800 border border-orange-200/70',
    borderDark: 'border-orange-700/30',
    borderLight: 'border-orange-200/70',
    bgDark: 'bg-orange-900/15',
    bgLight: 'bg-orange-50/40',
    overlayFrom: 'from-orange-500/10',
    overlayTo: 'to-red-500/10',
  },
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  badge,
  title,
  description,
  accent = 'blue',
}) => {
  const [mounted, setMounted] = React.useState(false);
  const { resolvedTheme } = useTheme();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === 'dark';
  const a = accentDefaults[accent];

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border p-5 transition-all duration-500 hover:brightness-110 ${
        isDark ? a.borderDark : a.borderLight
      }`}
      aria-label={title}
    >
      {/* Background tint */}
      <div
        className={`pointer-events-none absolute inset-0 transition-colors ${isDark ? a.bgDark : a.bgLight}`}
        aria-hidden="true"
      />

      <div
        className={`pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-br ${a.overlayFrom} ${a.overlayTo}`}
      />

      <div
        className="relative z-10 flex h-full flex-col gap-3"
      >
        <span
          className={`inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold ${isDark ? a.badgeDark : a.badgeLight}`}
        >
          {badge}
        </span>

        <h3 className={`text-lg sm:text-xl font-bold ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
          {title}
        </h3>

        <p className={`text-sm sm:text-base leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;

