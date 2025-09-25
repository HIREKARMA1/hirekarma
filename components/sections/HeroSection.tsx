"use client";
import Link from "next/link";
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100 overflow-hidden relative flex items-center">
      {/* Background Pattern - Responsive */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-20 h-20 sm:w-32 sm:h-32 bg-blue-300 rounded-full blur-lg sm:blur-xl"></div>
        <div className="absolute top-20 sm:top-40 right-4 sm:right-20 w-16 h-16 sm:w-24 sm:h-24 bg-cyan-300 rounded-full blur-md sm:blur-lg"></div>
        <div className="absolute bottom-16 sm:bottom-32 left-16 sm:left-32 w-24 h-24 sm:w-40 sm:h-40 bg-purple-300 rounded-full blur-lg sm:blur-xl"></div>
      </div>

      <div className="relative z-10 content-container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in-up">
            <div className="space-y-4 sm:space-y-6">
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg font-medium animate-fade-in-up animation-delay-200">
                Enterprise Workforce Solutions
              </p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight animate-fade-in-up animation-delay-300">
                Transform Your <br />
                Recruitment & <br />
                Placement <br />
                <span className="text-blue-600">Operations</span>
              </h1>
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed max-w-lg animate-fade-in-up animation-delay-400">
                Advanced platform for educational institutions and corporations to optimize talent acquisition, streamline placement processes, and drive measurable outcomes through data-driven insights.
              </p>
            </div>

            <button className="relative bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-600 hover:from-emerald-500 hover:via-cyan-600 hover:to-blue-700 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 rounded-xl font-bold text-sm sm:text-base lg:text-lg transition-all duration-500 shadow-2xl hover:shadow-emerald-500/25 transform hover:-translate-y-2 hover:scale-110 animate-fade-in-up animation-delay-500 overflow-hidden group">
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-600 p-[3px]">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-emerald-500 via-cyan-500 to-blue-600 rounded-xl animate-spin-slow"></div>
                <div className="absolute inset-[3px] bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-600 rounded-xl"></div>
              </div>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-400/20 via-cyan-500/20 to-blue-600/20 blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              
              {/* Inner Shine Effect */}
              <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/30 to-transparent rounded-t-xl"></div>
              
              {/* Text with enhanced styling */}
              <span className="relative z-10 flex items-center justify-center gap-1 sm:gap-2">
                <Link href="https://disha.hirekarma.in/auth/register">
                <span className="text-white drop-shadow-lg">Get Started</span>
                </Link>
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white/90 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              
              {/* Ripple Effect */}
              <div className="absolute inset-0 rounded-xl bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-500 origin-center"></div>
            </button>
          </div>

          {/* Right Side - Image with Centered Gradient Background */}
          <div className="flex justify-center items-center lg:justify-end animate-fade-in-right animation-delay-300 relative pt-4 sm:pt-6 lg:pt-8">
            
            {/* Image Container */}
            <div className="relative z-10 w-full max-w-2xl lg:max-w-4xl transition-transform duration-500">
              <img
                src="/demo.png"
                alt="Placement and hiring workflow illustration"
                className="w-full h-auto min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] xl:min-h-[600px] object-contain rounded-lg scale-125 sm:scale-150 lg:scale-150 animate-float drop-shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
