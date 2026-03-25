"use client";

import React from 'react';
import { useTheme } from 'next-themes';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

interface ProductCardProps {
  logoLight: string;
  logoDark: string;
  title: string;
  subtitle: string;
  description: string;
  href: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  logoLight,
  logoDark,
  title,
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
      className={`group relative h-full overflow-hidden rounded-2xl border p-6 sm:p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl ${
        isDark
          ? 'bg-gradient-to-br from-blue-900/25 via-slate-900/30 to-cyan-950/20 border-blue-700/30 hover:border-cyan-500/40'
          : 'bg-gradient-to-br from-blue-50 via-white to-cyan-50 border-blue-200 hover:border-cyan-300'
      }`}
    >
      <div
        className={`pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full blur-2xl transition-opacity duration-500 ${
          isDark ? 'bg-cyan-500/25 opacity-90' : 'bg-cyan-200 opacity-70'
        }`}
      />

      <div className="flex h-full flex-col gap-5">
        <div className="flex items-start justify-between gap-4">
          <div
            className={`relative flex h-12 w-36 shrink-0 items-center justify-start rounded-xl px-3 transition-all duration-500 ${
              isDark
                ? 'bg-slate-900/60 border border-cyan-700/40 group-hover:border-cyan-500/70'
                : 'bg-white/90 border border-cyan-200 group-hover:border-cyan-400/70'
            }`}
            aria-label="HireKarma logo"
          >
            <Image
              src={isDark ? logoDark : logoLight}
              alt="HireKarma"
              width={120}
              height={24}
              className="h-10 w-auto object-contain"
            />
          </div>

          <div
            className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors duration-500 ${
              isDark
                ? 'bg-cyan-900/50 text-cyan-300 border border-cyan-700/50'
                : 'bg-cyan-100 text-cyan-700 border border-cyan-200'
            }`}
          >
            Product
          </div>
        </div>

        <div>
          <h3
            className={`text-xl sm:text-2xl font-bold transition-colors duration-500 ${
              isDark ? 'text-gray-100' : 'text-gray-900'
            }`}
          >
            {title}
          </h3>
          <p
            className={`mt-1 text-sm sm:text-base font-medium transition-colors duration-500 ${
              isDark ? 'text-cyan-400' : 'text-cyan-600'
            }`}
          >
            {subtitle}
          </p>
        </div>

        <p
          className={`text-base sm:text-lg leading-relaxed transition-colors duration-500 ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}
        >
          {description}
        </p>

        <div
          className={`mt-auto h-px w-full ${
            isDark ? 'bg-cyan-800/40' : 'bg-cyan-200/80'
          }`}
        />

        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex w-fit items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${
            isDark
              ? 'bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30'
              : 'bg-cyan-100 text-cyan-700 hover:bg-cyan-200'
          }`}
        >
          View More
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
