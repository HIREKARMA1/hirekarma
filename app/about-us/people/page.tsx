"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

import { Users, Star, Heart, Info, X, Linkedin, Instagram, Mail } from "lucide-react";
import { Loader } from "@/components/shortlisted/ui/loader";
import people from "@/data/people.json";

type TeamCategory = "leadership" | "core" | "advisory";

interface TeamMember {
  name: string;
  role: string;
  category: TeamCategory;
  image: string;
  description: string;
  socialLinks: {
    linkedin?: string;
    instagram?: string;
    email?: string;
  };
}

const teamMembers = people as TeamMember[];

// Simulated fetch: replace with your API call when backend is ready
async function fetchTeamByCategory(category: TeamCategory): Promise<TeamMember[]> {
  // Simulate network delay (remove when using real API)
  await new Promise((r) => setTimeout(r, 600));
  return teamMembers.filter((m) => m.category === category);
}

export default function PeoplePage() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<TeamCategory>("advisory");
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [filteredMembers, setFilteredMembers] = useState<TeamMember[]>(() =>
    teamMembers.filter((m) => m.category === "advisory")
  );
  const { resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const handleTabChange = (category: TeamCategory) => {
    if (category === activeTab) return;
    setActiveTab(category);
    setExpandedIndex(null);
    setIsLoading(true);
    fetchTeamByCategory(category).then((members) => {
      setFilteredMembers(members);
      setIsLoading(false);
    });
  };

  return (
    <div className={`min-h-screen flex flex-col transition-all duration-500`}>
      <main className="flex-grow">
        {/* Main Section with consistent background */}
        <section className={`relative min-h-screen transition-all duration-500`}>

          {/* Header Section */}
          <div className="relative content-container pt-20 pb-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Content - Header and Description */}
              <div className="space-y-2 lg:space-y-1">
                <div className="space-y-4">
                  <h1 className={`text-2xl sm:text-4xl lg:text-4xl xl:text-6xl font-bold leading-tight tracking-tight ${mounted && resolvedTheme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>
                    Leadership that Inspires Growth
                  </h1>
                </div>

                <div className="space-y-3">
                  <p className={`text-lg sm:text-xl leading-relaxed max-w-2xl ${mounted && resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    The passionate people behind our success — innovators, creators, and leaders dedicated to <strong className={`${mounted && resolvedTheme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>transforming campus recruitment</strong> across India.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="relative content-container py-8">
            {/* Toggle Buttons */}
            <div className="mb-8">
              <div className="flex flex-wrap justify-start gap-3 mb-6">

                <button
                  onClick={() => handleTabChange("advisory")}
                  disabled={isLoading}
                  className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed ${activeTab === "advisory"
                    ? "bg-cyan-500 text-white shadow-md"
                    : `border ${mounted && resolvedTheme === "dark"
                      ? "border-gray-600 text-gray-400 hover:border-gray-500 hover:text-gray-300"
                      : "border-gray-300 text-gray-600 hover:border-gray-400 hover:text-gray-700"
                    }`
                    }`}
                >
                  Advisory Board
                </button>
                <button
                  onClick={() => handleTabChange("leadership")}
                  disabled={isLoading}
                  className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed ${activeTab === "leadership"
                    ? "bg-cyan-500 text-white shadow-md"
                    : `border ${mounted && resolvedTheme === "dark"
                      ? "border-gray-600 text-gray-400 hover:border-gray-500 hover:text-gray-300"
                      : "border-gray-300 text-gray-600 hover:border-gray-400 hover:text-gray-700"
                    }`
                    }`}
                >
                  Leadership
                </button>
                <button
                  onClick={() => handleTabChange("core")}
                  disabled={isLoading}
                  className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed ${activeTab === "core"
                    ? "bg-cyan-500 text-white shadow-md"
                    : `border ${mounted && resolvedTheme === "dark"
                      ? "border-gray-600 text-gray-400 hover:border-gray-500 hover:text-gray-300"
                      : "border-gray-300 text-gray-600 hover:border-gray-400 hover:text-gray-700"
                    }`
                    }`}
                >
                  Core Team
                </button>

              </div>

              {/* Separator Line */}
              <div className={`h-px w-full ${mounted && resolvedTheme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'}`}></div>
            </div>

            <div className="min-h-[320px]">
              {isLoading ? (
                <div className="flex flex-col items-center justify-center py-20">
                  <Loader size="lg" className="border-cyan-500 border-t-transparent" />
                  <p className={`mt-4 text-sm ${mounted && resolvedTheme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
                    Loading team...
                  </p>
                </div>
              ) : filteredMembers.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredMembers.map((member, index) => (
                    <div
                      key={index}
                      className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                    >
                      {expandedIndex === index ? (
                        // Expanded State - Show Bio
                        <div className="bg-gray-900 text-white h-96 relative flex flex-col">
                          {/* Close Button */}
                          <button
                            onClick={() => setExpandedIndex(null)}
                            className="absolute top-4 right-4 w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-200 z-10"
                            aria-label="Close"
                          >
                            <X className="w-4 h-4 text-white" />
                          </button>

                          {/* Scrollable Content */}
                          <div className="overflow-y-auto p-6 pr-14 space-y-3 flex-1 custom-scrollbar">
                            <h3 className="text-xl font-bold">
                              {member.name}
                            </h3>
                            <p className="text-gray-300 text-sm">
                              {member.role}
                            </p>
                            <p className="text-gray-300 leading-relaxed text-sm pt-2">
                              {member.description}
                            </p>

                            {/* Social Links */}
                            <div className="flex gap-3 pt-4">
                              {member.socialLinks.linkedin && (
                                <a
                                  href={member.socialLinks.linkedin}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-200"
                                  aria-label="LinkedIn"
                                >
                                  <Linkedin className="w-4 h-4 text-white" />
                                </a>
                              )}
                              {member.socialLinks.instagram && (
                                <a
                                  href={member.socialLinks.instagram}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-200"
                                  aria-label="Instagram"
                                >
                                  <Instagram className="w-4 h-4 text-white" />
                                </a>
                              )}
                              {member.socialLinks.email && (
                                <a
                                  href={member.socialLinks.email}
                                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-200"
                                  aria-label="Email"
                                >
                                  <Mail className="w-4 h-4 text-white" />
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      ) : (
                        // Collapsed State - Show Image
                        <>
                          {/* Image Container */}
                          <div className="relative h-96 w-full bg-black">
                            <Image
                              src={member.image}
                              alt={member.name}
                              fill
                              className="object-cover object-center"
                            />

                            {/* Info Icon */}
                            <button
                              onClick={() => setExpandedIndex(index)}
                              className="absolute top-4 right-4 w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-lg"
                              aria-label="View details"
                            >
                              <Info className="w-4 h-4 text-gray-900" />
                            </button>
                          </div>

                          {/* Content Overlay */}
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/90 to-transparent p-6">
                            <h3 className="text-white text-xl font-bold mb-1">
                              {member.name}
                            </h3>
                            <p className="text-gray-300 text-sm">
                              {member.role}
                            </p>
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <Users className={`w-16 h-16 mx-auto mb-4 ${mounted && resolvedTheme === 'dark' ? 'text-gray-600' : 'text-gray-400'}`} />
                  <h3 className={`text-2xl font-bold mb-2 ${mounted && resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    No Members Yet
                  </h3>
                  <p className={`text-lg ${mounted && resolvedTheme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                    Advisory board members will be announced soon.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Culture Section */}
          <div className="relative content-container py-20">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Side - Header and Description */}
                <div>
                  <h2 className={`text-4xl sm:text-5xl font-bold mb-6 ${mounted && resolvedTheme === 'dark' ? 'text-blue-400' : 'text-blue-700'}`}>Our Culture</h2>
                  <p className={`text-xl leading-relaxed mb-8 ${mounted && resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    We believe in fostering an inclusive, innovative, and collaborative environment where every team member can thrive and contribute to our mission of transforming campus recruitment.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${mounted && resolvedTheme === 'dark' ? 'bg-gray-800' : 'bg-blue-100'}`}>
                        <Heart className={`w-6 h-6 ${mounted && resolvedTheme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`} />
                      </div>
                      <div>
                        <h3 className={`text-xl font-bold mb-2 ${mounted && resolvedTheme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>Inclusive</h3>
                        <p className={`${mounted && resolvedTheme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>We celebrate diversity and ensure everyone has a voice in our mission.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${mounted && resolvedTheme === 'dark' ? 'bg-gray-800' : 'bg-blue-100'}`}>
                        <Star className={`w-6 h-6 ${mounted && resolvedTheme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`} />
                      </div>
                      <div>
                        <h3 className={`text-xl font-bold mb-2 ${mounted && resolvedTheme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>Innovative</h3>
                        <p className={`${mounted && resolvedTheme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>We continuously push boundaries in HRTech and recruitment solutions.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${mounted && resolvedTheme === 'dark' ? 'bg-gray-800' : 'bg-blue-100'}`}>
                        <Users className={`w-6 h-6 ${mounted && resolvedTheme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`} />
                      </div>
                      <div>
                        <h3 className={`text-xl font-bold mb-2 ${mounted && resolvedTheme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>Collaborative</h3>
                        <p className={`${mounted && resolvedTheme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>We work together as one team, united by our shared vision.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side - Photos */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                      <Image
                        src="https://hirekarma.s3.us-east-1.amazonaws.com/hirekarma_ui/about-us/culture/bputojob-min.jpg"
                        alt="Students collaboration"
                        width={300}
                        height={400}
                        className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                      <Image
                        src="https://hirekarma.s3.us-east-1.amazonaws.com/hirekarma_ui/about-us/culture/diwali-celibration.jpg"
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
                        src="https://hirekarma.s3.us-east-1.amazonaws.com/hirekarma_ui/about-us/culture/ganeshpuaj.jpg"
                        alt="University campus"
                        width={300}
                        height={300}
                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                      <Image
                        src="https://hirekarma.s3.us-east-1.amazonaws.com/hirekarma_ui/about-us/culture/potloak.jpg"
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
    </div>
  );
}