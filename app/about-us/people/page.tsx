"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Navbar from "../../../components/layout/Navbar";
import Footer from "../../../components/layout/Footer";
import WavyBackground from "../../../components/layout/WavyBackground";
import { Users, Star, Heart } from "lucide-react";

const teamMembers = [
  {
    name: "Ananya Sharma",
    role: "Chief Executive Officer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    description: "Visionary leader with 10+ years in HRTech innovation",
  },
  {
    name: "Rohit Verma",
    role: "Chief Technology Officer",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    description: "AI and automation expert driving technical excellence",
  },
  {
    name: "Neha Patel",
    role: "Head of Operations",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    description: "Operations strategist ensuring seamless campus partnerships",
  },
  {
    name: "Arjun Mehta",
    role: "Lead Software Engineer",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    description: "Full-stack developer building scalable recruitment solutions",
  },
  {
    name: "Priya Das",
    role: "UI/UX Designer",
    image: "https://randomuser.me/api/portraits/women/56.jpg",
    description: "Creative designer crafting intuitive user experiences",
  },
  {
    name: "Karan Singh",
    role: "Marketing Manager",
    image: "https://randomuser.me/api/portraits/men/21.jpg",
    description: "Growth strategist expanding our reach across India",
  },
  {
    name: "Sneha Nair",
    role: "HR Manager",
    image: "https://randomuser.me/api/portraits/women/70.jpg",
    description: "People champion fostering our inclusive culture",
  },
  {
    name: "Vikram Chauhan",
    role: "Backend Developer",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    description: "Backend architect ensuring robust platform performance",
  },
];

export default function PeoplePage() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={`min-h-screen flex flex-col ${
      mounted && resolvedTheme === 'dark' 
        ? 'bg-gray-900' 
        : 'bg-white'
    }`}>
      <Navbar />
      
      <main className="flex-grow">
        {/* Main Section with consistent background */}
        <section className={`relative min-h-screen ${
          mounted && resolvedTheme === 'dark' 
            ? 'bg-gray-900' 
            : 'bg-white'
        }`}>
          {/* Wavy Background */}
          <WavyBackground variant="primary" intensity="strong" />
          
          {/* Header Section */}
          <div className="relative content-container pt-20 pb-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Content - Header and Description */}
              <div className="space-y-2 lg:space-y-1">
                <div className="space-y-4">
                  <h1 className={`text-2xl sm:text-4xl lg:text-4xl xl:text-6xl font-bold leading-tight tracking-tight ${
                    mounted && resolvedTheme === 'dark' 
                      ? 'text-gray-100' 
                      : 'text-gray-900'
                  }`}>
                    Meet Our Team
                  </h1>
                </div>

                <div className="space-y-3">
                  <p className={`text-lg sm:text-xl leading-relaxed max-w-2xl ${
                    mounted && resolvedTheme === 'dark' 
                      ? 'text-gray-300' 
                      : 'text-gray-600'
                  }`}>
                    The passionate people behind our success — innovators, creators, and leaders dedicated to <strong className={`${
                      mounted && resolvedTheme === 'dark' 
                        ? 'text-gray-200' 
                        : 'text-gray-700'
                    }`}>transforming campus recruitment</strong> across India.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="relative content-container py-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {teamMembers.map((member, index) => (
                  <div
                    key={index}
                    className={`rounded-xl border shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 p-8 text-center group ${
                      mounted && resolvedTheme === 'dark'
                        ? 'bg-gradient-to-br from-blue-900/20 to-blue-800/10 border-blue-700/30'
                        : 'bg-gradient-to-br from-blue-50 to-blue-100/50 border-blue-200'
                    }`}
                  >
                    <div className="relative mb-6">
                      <div className={`w-32 h-32 rounded-full overflow-hidden mx-auto border-4 transition-colors duration-300 ${
                        mounted && resolvedTheme === 'dark'
                          ? 'border-blue-600/50 group-hover:border-blue-400/70'
                          : 'border-blue-300/70 group-hover:border-blue-200'
                      }`}>
                        <Image
                          src={member.image}
                          alt={member.name}
                          width={128}
                          height={128}
                          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    </div>
                    
                    <h3 className={`text-xl font-bold mb-2 ${
                      mounted && resolvedTheme === 'dark' 
                        ? 'text-gray-100' 
                        : 'text-gray-900'
                    }`}>
                      {member.name}
                    </h3>
                    
                    <p className={`font-semibold mb-3 ${
                      mounted && resolvedTheme === 'dark' 
                        ? 'text-blue-400' 
                        : 'text-blue-600'
                    }`}>
                      {member.role}
                    </p>
                    
                    <p className={`text-sm leading-relaxed ${
                      mounted && resolvedTheme === 'dark' 
                        ? 'text-gray-300' 
                        : 'text-gray-600'
                    }`}>
                      {member.description}
                    </p>
                    
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Culture Section */}
          <div className="relative content-container py-20">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Side - Header and Description */}
                <div>
                  <h2 className={`text-4xl sm:text-5xl font-bold mb-6 ${
                    mounted && resolvedTheme === 'dark' 
                      ? 'text-blue-400' 
                      : 'text-blue-700'
                  }`}>Our Culture</h2>
                  <p className={`text-xl leading-relaxed mb-8 ${
                    mounted && resolvedTheme === 'dark' 
                      ? 'text-gray-300' 
                      : 'text-gray-600'
                  }`}>
                    We believe in fostering an inclusive, innovative, and collaborative environment where every team member can thrive and contribute to our mission of transforming campus recruitment.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        mounted && resolvedTheme === 'dark'
                          ? 'bg-blue-900/30'
                          : 'bg-blue-100'
                      }`}>
                        <Heart className={`w-6 h-6 ${
                          mounted && resolvedTheme === 'dark' 
                            ? 'text-blue-400' 
                            : 'text-blue-600'
                        }`} />
                      </div>
                      <div>
                        <h3 className={`text-xl font-bold mb-2 ${
                          mounted && resolvedTheme === 'dark' 
                            ? 'text-gray-100' 
                            : 'text-gray-900'
                        }`}>Inclusive</h3>
                        <p className={`${
                          mounted && resolvedTheme === 'dark' 
                            ? 'text-gray-300' 
                            : 'text-gray-600'
                        }`}>We celebrate diversity and ensure everyone has a voice in our mission.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        mounted && resolvedTheme === 'dark'
                          ? 'bg-blue-900/30'
                          : 'bg-blue-100'
                      }`}>
                        <Star className={`w-6 h-6 ${
                          mounted && resolvedTheme === 'dark' 
                            ? 'text-blue-400' 
                            : 'text-blue-600'
                        }`} />
                      </div>
                      <div>
                        <h3 className={`text-xl font-bold mb-2 ${
                          mounted && resolvedTheme === 'dark' 
                            ? 'text-gray-100' 
                            : 'text-gray-900'
                        }`}>Innovative</h3>
                        <p className={`${
                          mounted && resolvedTheme === 'dark' 
                            ? 'text-gray-300' 
                            : 'text-gray-600'
                        }`}>We continuously push boundaries in HRTech and recruitment solutions.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        mounted && resolvedTheme === 'dark'
                          ? 'bg-blue-900/30'
                          : 'bg-blue-100'
                      }`}>
                        <Users className={`w-6 h-6 ${
                          mounted && resolvedTheme === 'dark' 
                            ? 'text-blue-400' 
                            : 'text-blue-600'
                        }`} />
                      </div>
                      <div>
                        <h3 className={`text-xl font-bold mb-2 ${
                          mounted && resolvedTheme === 'dark' 
                            ? 'text-gray-100' 
                            : 'text-gray-900'
                        }`}>Collaborative</h3>
                        <p className={`${
                          mounted && resolvedTheme === 'dark' 
                            ? 'text-gray-300' 
                            : 'text-gray-600'
                        }`}>We work together as one team, united by our shared vision.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side - Photos */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                      <Image
                        src="/students.jpg"
                        alt="Students collaboration"
                        width={300}
                        height={400}
                        className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                      <Image
                        src="/corporate.jpg"
                        alt="Corporate team"
                        width={300}
                        height={300}
                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <div className="space-y-4 pt-8">
                    <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                      <Image
                        src="/university.jpg"
                        alt="University campus"
                        width={300}
                        height={300}
                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                      <Image
                        src="/demo.png"
                        alt="Team workspace"
                        width={300}
                        height={400}
                        className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
