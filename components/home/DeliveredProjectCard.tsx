"use client";

import React from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

interface DeliveredProjectCardProps {
  image: string;
  title: string;
  clientType: string;
  subtitle: string;
  description: string;
  href: string;
}

const DeliveredProjectCard: React.FC<DeliveredProjectCardProps> = ({
  image,
  title,
  clientType,
  subtitle,
  description,
  href,
}) => {
  const [mounted, setMounted] = React.useState(false);
  const { resolvedTheme } = useTheme();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === 'dark';

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border p-5 transition-all duration-500 hover:brightness-110`}
    >
      <div
        className={`pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${
          isDark
            ? 'bg-gradient-to-br from-emerald-500/5 to-blue-500/5'
            : 'bg-gradient-to-br from-emerald-500/10 to-blue-500/10'
        }`}
      />

      <div className="relative z-10 flex h-full flex-col gap-4">
        <span
          className={`inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold ${
            isDark
              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
              : 'bg-cyan-100 text-cyan-700 border border-cyan-200'
          }`}
        >
          {clientType}
        </span>

        <div
          className={`relative h-40 overflow-hidden rounded-xl border ${
            isDark ? 'bg-gray-900/40 border-gray-800' : 'bg-white/60 border-gray-200'
          }`}
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover object-center"
            sizes="(max-width: 640px) 100vw, 33vw"
            priority={false}
          />
        </div>

        <div className="space-y-2">
          <h3 className={`text-lg sm:text-xl font-bold ${isDark ? 'text-gray-100' : 'text-gray-900'}`}>
            {title}
          </h3>
          <p className={`text-sm sm:text-base font-medium ${isDark ? 'text-emerald-400' : 'text-emerald-600'}`}>
            {subtitle}
          </p>
          <p className={`text-sm sm:text-base leading-relaxed ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
            {description}
          </p>
        </div>

        <div className="mt-auto pt-2">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-300 ${
              isDark
                ? 'bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30'
                : 'bg-cyan-100 text-cyan-700 hover:bg-cyan-200'
            }`}
          >
            View Project
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default DeliveredProjectCard;

