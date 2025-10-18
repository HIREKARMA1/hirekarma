"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

import { Users, Star, Heart } from "lucide-react";
import people from "@/data/people.json";

const teamMembers = people as typeof people;

export default function PeoplePage() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  useEffect(() => setMounted(true), []);

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
                    Team Members
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
            <div>
              <h1 className={`text-4xl font-bold text-center mb-12 ${mounted && resolvedTheme === 'dark' ? 'text-orange-400' : 'text-orange-500'}`}>Meet Our Team</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 xl:gap-8">
                {teamMembers.map((member, index) => (
                  <div
                    key={index}
                    className={`rounded-lg border shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden ${mounted && resolvedTheme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'}`}
                  >
                    <div className="relative">
                      <div className="w-full h-full flex justify-center items-center">
                        <div className="w-32 h-32 rounded-full overflow-hidden mx-auto border-4 border-orange-300 my-6">
                          <Image
                            src={member.image}
                            alt={member.name}
                            width={128}
                            height={128}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-6 text-center">
                      <h3 className={`text-xl font-bold mb-1 ${mounted && resolvedTheme === 'dark' ? 'text-gray-100' : 'text-gray-900'}`}>
                        {member.name}
                      </h3>
                      
                      <p className={`font-semibold mb-3 ${mounted && resolvedTheme === 'dark' ? 'text-orange-400' : 'text-orange-500'}`}>
                        {member.role}
                      </p>
                      
                      <p className={`text-sm leading-relaxed mb-4 ${mounted && resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                        {member.description}
                      </p>
                      
                      <div className="flex justify-center space-x-3 mt-2">
                        <a href={member.socialLinks.linkedin} className={`${mounted && resolvedTheme === 'dark' ? 'text-gray-400 hover:text-orange-400' : 'text-gray-500 hover:text-orange-500'}`}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                          </svg>
                        </a>
                        {/* <a href={member.socialLinks.twitter} className={`${mounted && resolvedTheme === 'dark' ? 'text-gray-400 hover:text-orange-400' : 'text-gray-500 hover:text-orange-500'}`}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                          </svg>
                        </a> */}
                        <a href={member.socialLinks.instagram} className={`${mounted && resolvedTheme === 'dark' ? 'text-gray-400 hover:text-orange-400' : 'text-gray-500 hover:text-orange-500'}`}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                          </svg>
                        </a>
                        <a href={member.socialLinks.email} className={`${mounted && resolvedTheme === 'dark' ? 'text-gray-400 hover:text-orange-400' : 'text-gray-500 hover:text-orange-500'}`}>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-8 text-sm text-gray-500">
                Images by Freepik
              </div>
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
    </div>
  );
}