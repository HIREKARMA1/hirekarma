"use client";

import React from 'react';
import { Search, Brain, GraduationCap, Users } from 'lucide-react';

const SolutionsSection: React.FC = () => {
  const solutions = [
    {
      icon: Search,
      title: "Recruitment",
      description: "Simplifying full-cycle hiring to match the right talent with opportunities.",
      gradient: "from-cyan-400 to-blue-500"
    },
    {
      icon: Brain,
      title: "Livelihood Impacts",
      description: "Empowering communities through meaningful work.",
      gradient: "from-teal-400 to-cyan-500"
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "Skill development and career alignment made easy.",
      gradient: "from-blue-400 to-indigo-500"
    },
    {
      icon: Users,
      title: "General Staffing",
      description: "Efficient staffing solutions for every need.",
      gradient: "from-cyan-500 to-blue-600"
    }
  ];

  return (
    <section id="solutions" className="bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="content-container mx-auto px-3 sm:px-4 lg:px-6 w-full py-8 sm:py-12 lg:py-16">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl border-2 border-cyan-200 p-3 sm:p-4 md:p-6 lg:p-8 xl:p-12 shadow-xl">
            <div className="mb-6 sm:mb-8 lg:mb-10">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">Our Solutions</h2>
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg">AI-powered solutions for faster, smarter outcomes.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              {solutions.map((solution, index) => {
                const IconComponent = solution.icon;
                return (
                  <div key={index} className="flex items-start space-x-2 sm:space-x-3 lg:space-x-4 group">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-br ${solution.gradient} rounded-lg sm:rounded-xl lg:rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-1 sm:mb-2">{solution.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-xs sm:text-sm lg:text-base">
                        {solution.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
