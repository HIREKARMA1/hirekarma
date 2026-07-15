"use client";

import React from 'react';
import { useTheme } from 'next-themes';
import servicesData from '../../data/services.json';
import ServiceCard from './ServiceCard';

type Accent = 'blue' | 'emerald' | 'purple' | 'orange';

const accentCycle: Accent[] = ['blue', 'emerald', 'purple', 'orange'];

const ServicesSection: React.FC = () => {
  const [mounted, setMounted] = React.useState(false);
  const { resolvedTheme } = useTheme();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === 'dark';

  return (
    <section className="relative content-container py-12 sm:py-16 md:py-20">
      <div className="mb-10 sm:mb-12 md:mb-14 space-y-6">
        <h2
          className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight ${
            isDark ? 'text-gray-100' : 'text-gray-900'
          }`}
        >
          {servicesData.heading}
          <span
            className={`block mt-2 text-lg sm:text-xl lg:text-2xl xl:text-3xl font-medium ${
              isDark ? 'text-[#00a2e5]' : 'text-[#1b52a4]'
            }`}
          >
            {servicesData.subheading}
          </span>
        </h2>

        <p
          className={`text-lg sm:text-xl leading-relaxed max-w-3xl ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}
        >
          {servicesData.description}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
        {servicesData.items.map((item, index) => (
          <ServiceCard
            key={item.id}
            badge={item.badge}
            title={item.title}
            description={item.description}
            accent={accentCycle[index % accentCycle.length]}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;

