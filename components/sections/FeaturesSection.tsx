"use client";

import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, Shield, UserCheck } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: Sparkles,
      title: "AI-Driven Career Solutions",
      description: "Harnessing advanced AI to guide skill development, streamline workflows, and deliver smarter outcomes for individuals and organizations."
    },
    {
      icon: Shield,
      title: "Secure and Private",
      description: "Your data and interactions are protected with industry-standard security measures, ensuring privacy and trust across every platform experience."
    },
    {
      icon: UserCheck,
      title: "Personalized Experience",
      description: "Tailored recommendations and insights for students, institutions, and organizations to maximize growth, learning, and engagement."
    }
  ];

  const stats = [
    {
      number: 130,
      label: "Trusted Companies"
    },
    {
      number: 130,
      label: "Partnered Colleges"
    },
    {
      number: 22000,
      label: "Success Stories"
    },
    {
      number: 200000,
      label: "Impact Created"
    }
  ];

  return (
    <>
      {/* Stats Section - Blue Background with Counter Animation */}
      <StatsSection stats={stats} />
      
      {/* Features Section */}
      <section id="features" className="bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="content-container mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 sm:py-16 lg:py-20">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-fade-in-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight max-w-4xl mx-auto px-4">
              Comprehensive Solutions Covering Every Aspect of
              Professional Growth and Organizational Success
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center space-y-4 sm:space-y-6 group animate-fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 px-2">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed px-4 text-sm sm:text-base">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

// Separate component for stats with counter animation
const StatsSection: React.FC<{ stats: { number: number; label: string }[] }> = ({ stats }) => {
  const [counters, setCounters] = useState(stats.map(() => 0));
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          stats.forEach((stat, index) => {
            const duration = 2000; // 2 seconds
            const steps = 60;
            const increment = stat.number / steps;
            const stepTime = duration / steps;
            
            let currentStep = 0;
            const timer = setInterval(() => {
              currentStep++;
              setCounters(prev => {
                const newCounters = [...prev];
                newCounters[index] = Math.min(
                  Math.round(increment * currentStep),
                  stat.number
                );
                return newCounters;
              });
              
              if (currentStep >= steps) {
                clearInterval(timer);
              }
            }, stepTime);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [stats, hasAnimated]);

  const formatNumber = (num: number): string => {
    if (num >= 1000) {
      return (num / 1000).toFixed(0) + 'K+';
    }
    return num.toString() + '+';
  };

  return (
    <section ref={sectionRef} className="py-8 sm:py-12 lg:py-16 bg-gradient-to-r from-blue-600 via-blue-700 to-purple-700 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Gradient Orbs - Responsive Positioning */}
        <div className="absolute top-2 sm:top-4 left-4 sm:left-8 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 rounded-full blur-xl sm:blur-2xl animate-float opacity-60"></div>
        <div className="absolute bottom-2 sm:bottom-4 right-4 sm:right-8 w-24 h-24 sm:w-40 sm:h-40 bg-gradient-to-r from-purple-400/20 to-pink-500/20 rounded-full blur-2xl sm:blur-3xl animate-float animation-delay-200 opacity-50"></div>
        <div className="absolute top-1/2 left-1/6 sm:left-1/4 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-r from-emerald-400/15 to-cyan-400/15 rounded-full blur-lg sm:blur-xl animate-float animation-delay-400 opacity-70"></div>
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-white/5 to-transparent"></div>
        </div>
      </div>

      <div className="content-container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white group relative">
              {/* Animated Background Card */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-105"></div>
              
              {/* Glowing Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 via-blue-500/30 to-purple-500/30 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm"></div>
              
              {/* Content */}
              <div className="relative z-10 p-3 sm:p-4 lg:p-6">
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-2 sm:mb-3 drop-shadow-lg animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <span className="inline-block transform group-hover:scale-110 transition-transform duration-300">
                    {formatNumber(counters[index])}
                  </span>
                </div>
                <div className="text-blue-100 text-xs sm:text-sm md:text-base font-medium tracking-wide animate-fade-in-up animation-delay-200 opacity-90 group-hover:opacity-100 transition-opacity duration-300 leading-tight">
                  {stat.label}
                </div>
              </div>
              
              {/* Animated Accent Line */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 sm:h-1 bg-gradient-to-r from-cyan-400 to-purple-400 group-hover:w-12 sm:group-hover:w-16 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;