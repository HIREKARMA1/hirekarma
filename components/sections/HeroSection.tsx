"use client";

import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-100 overflow-hidden relative flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-300 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-cyan-300 rounded-full blur-lg"></div>
        <div className="absolute bottom-32 left-32 w-40 h-40 bg-purple-300 rounded-full blur-xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-gray-600 text-lg font-medium">
                A Leading Tech-Driven Platform
              </p>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Automating <br />
                Your Placement, <br />
                Hiring Workflow, <br />
                <span className="text-blue-600">and Student Growth</span>
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
                Leverage technology-driven solutions to track performance,
                streamline recruitment workflows, and empower students for
                meaningful growth.
              </p>
            </div>

            <button className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Learn More
            </button>
          </div>

          {/* Right Side - Just Show the Uploaded Image */}
          <div className=" flex justify-center items-center">
            <img
              src="/demo.png" // replace with the PNG you uploaded
              alt="Placement and hiring workflow illustration"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
