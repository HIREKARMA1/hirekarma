"use client";

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Upload, Briefcase, GraduationCap, BarChart3, BookOpen, UserCheck } from 'lucide-react';

const SolutionSection = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const solutions = [
    {
      icon: Upload,
      title: "AI Resume Parser",
      description: "Effortlessly upload or generate professional resumes with intelligent AI assistance for optimal formatting and content.",
      colorLight: "text-blue-600",
      colorDark: "text-blue-400",
      bgLight: "bg-blue-100/80",
      bgDark: "bg-blue-900/20",
      gradientLight: "from-blue-50 to-white",
      gradientDark: "from-blue-900/10 to-gray-800"
    },
    {
      icon: Briefcase,
      title: "Job Role Recommendation",
      description: "Intelligent matching of user profiles to ideal career roles based on skills, experience, and market trends.",
      colorLight: "text-green-600",
      colorDark: "text-green-400",
      bgLight: "bg-green-100/80",
      bgDark: "bg-green-900/20",
      gradientLight: "from-green-50 to-white",
      gradientDark: "from-green-900/10 to-gray-800"
    },
    {
      icon: GraduationCap,
      title: "Placement Simulation",
      description: "Realistic multi-round interview simulations to prepare users for actual placement processes.",
      colorLight: "text-purple-600",
      colorDark: "text-purple-400",
      bgLight: "bg-purple-100/80",
      bgDark: "bg-purple-900/20",
      gradientLight: "from-purple-50 to-white",
      gradientDark: "from-purple-900/10 to-gray-800"
    },
    {
      icon: BarChart3,
      title: "AI Evaluation Engine",
      description: "Advanced real-time scoring, detailed insights, and comprehensive readiness analytics for skill assessment.",
      colorLight: "text-yellow-600",
      colorDark: "text-yellow-400",
      bgLight: "bg-yellow-100/80",
      bgDark: "bg-yellow-900/20",
      gradientLight: "from-yellow-50 to-white",
      gradientDark: "from-yellow-900/10 to-gray-800"
    },
    {
      icon: BookOpen,
      title: "Curated Learning Feed",
      description: "Personalized auto-generated learning playlists targeting identified weak areas for efficient skill improvement.",
      colorLight: "text-red-600",
      colorDark: "text-red-400",
      bgLight: "bg-red-100/80",
      bgDark: "bg-red-900/20",
      gradientLight: "from-red-50 to-white",
      gradientDark: "from-red-900/10 to-gray-800"
    },
    {
      icon: UserCheck,
      title: "Smart Job Agent",
      description: "Automated application to suitable job openings when user's readiness score reaches or exceeds 50%.",
      colorLight: "text-indigo-600",
      colorDark: "text-indigo-400",
      bgLight: "bg-indigo-100/80",
      bgDark: "bg-indigo-900/20",
      gradientLight: "from-indigo-50 to-white",
      gradientDark: "from-indigo-900/10 to-gray-800"
    }
  ];

  return (
    <div className={`relative content-container py-16 sm:py-20 md:py-24 `}>
      
      {/* Header Section */}
{/* Header Section */}
<div className="relative text-left mb-16 sm:mb-20 md:mb-24 max-w-5xl px-4 sm:px-6">
  <div className="space-y-6 sm:space-y-8">
    <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight ${mounted && resolvedTheme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>
      One AI Platform
      <span className={`block mt-2 sm:mt-3 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium ${mounted && resolvedTheme === 'dark' ? 'text-red-400' : 'text-red-600'}`}>
        End-to-End Employability Solutions
      </span>
    </h2>
    <p className={`text-lg sm:text-xl md:text-2xl leading-relaxed max-w-full sm:max-w-2xl md:max-w-3xl ${mounted && resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
      Saksham seamlessly integrates assessment, skill enhancement, and job placement into a unified AI-driven pipeline for maximum efficiency.
    </p>
  </div>
</div>


      {/* Solutions Grid */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 px-4 sm:px-6 md:px-8">
        {solutions.map((solution, index) => (
          <div
            key={index}
            className={`relative p-6 sm:p-8 md:p-10 rounded-3xl border overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2 group ${mounted && resolvedTheme === 'dark'
              ? 'bg-gray-800/60 backdrop-blur-md border-gray-700/40 hover:bg-gray-800/80'
              : 'bg-white/60 backdrop-blur-md border-gray-200/40 hover:bg-white/80 shadow-md'
              }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            {/* Subtle Card Gradient Background */}
            <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${mounted && resolvedTheme === 'dark' ? solution.gradientDark : solution.gradientLight}`} />
            
            <div className="relative flex items-start gap-5 md:gap-6">
              {/* Icon Container with Scale Hover */}
              <div className={`w-14 h-14 md:w-16 md:h-16 flex-shrink-0 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${mounted && resolvedTheme === 'dark' ? solution.bgDark : solution.bgLight} border border-white/10 shadow-sm`}>
                <solution.icon className={`w-7 h-7 md:w-8 md:h-8 ${mounted && resolvedTheme === 'dark' ? solution.colorDark : solution.colorLight}`} />
              </div>
              
              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className={`text-xl sm:text-2xl font-semibold mb-4 md:mb-5 tracking-tight ${mounted && resolvedTheme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>
                  {solution.title}
                </h3>
                <p className={`text-base sm:text-lg leading-relaxed ${mounted && resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  {solution.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Optional Professional CTA */}
      <div className="relative text-center mt-16 sm:mt-20 md:mt-24">
        <a 
          href="#get-started" 
          className={`inline-block px-8 py-4 md:px-10 md:py-5 rounded-full text-base md:text-lg font-medium transition-all duration-300 ${mounted && resolvedTheme === 'dark' 
            ? 'bg-red-500/90 text-white hover:bg-red-400 shadow-lg hover:shadow-xl' 
            : 'bg-red-600 text-white hover:bg-red-500 shadow-md hover:shadow-lg'
          }`}
        >
          Discover Saksham Today
        </a>
      </div>
    </div>
  );
};

export default SolutionSection;