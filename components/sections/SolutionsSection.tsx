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
    <section id="solutions" className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center">
      <div className="container mx-auto px-6 w-full">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl border-2 border-cyan-200 p-8 md:p-12 shadow-xl">
            <div className="mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Solutions</h2>
              <p className="text-gray-600 text-lg">AI-powered solutions for faster, smarter outcomes.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => {
                const IconComponent = solution.icon;
                return (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className={`w-14 h-14 bg-gradient-to-br ${solution.gradient} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{solution.title}</h3>
                      <p className="text-gray-600 leading-relaxed">
                        {solution.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Colors indicator (subtle) */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <p className="text-gray-400 text-sm">Colors</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
