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
      number: 980,
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
      <section id="features" className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center">
        <div className="container mx-auto px-6 w-full">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight max-w-4xl mx-auto">
              Comprehensive Solutions Covering Every Aspect of
              Professional Growth and Organizational Success
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center space-y-6 group">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed px-4">
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
    <section ref={sectionRef} className="py-16 bg-gradient-to-r from-blue-600 to-blue-700">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center text-white">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 drop-shadow-md">
                {formatNumber(counters[index])}
              </div>
              <div className="text-blue-100 text-sm md:text-base font-medium tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;