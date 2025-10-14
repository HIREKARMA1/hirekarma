"use client";

import React from "react";
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
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Header Section */}
      <section className="relative py-16 lg:py-24 bg-white dark:bg-gray-900">
        <WavyBackground variant="primary" intensity="medium" />
        <div className="content-container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-blue-700 leading-tight mb-8">
              Meet Our Team
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              The passionate people behind our success — innovators, creators, and leaders dedicated to transforming campus recruitment across India.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-6 lg:py-6 bg-white dark:bg-gray-900">
        <WavyBackground variant="neutral" intensity="light" />
        <div className="content-container">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-gray-200 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 p-8 text-center group"
                >
                  <div className="relative mb-6">
                    <div className="w-32 h-32 rounded-full overflow-hidden mx-auto border-4 border-gray-100 group-hover:border-blue-200 transition-colors duration-300">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={128}
                        height={128}
                        className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  
                  <p className="text-blue-600 font-semibold mb-3">
                    {member.role}
                  </p>
                  
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {member.description}
                  </p>
                  
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900">
        <WavyBackground variant="accent" intensity="medium" />
        <div className="content-container">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Header and Description */}
              <div>
                <h2 className="text-4xl sm:text-5xl font-bold text-blue-700 mb-6">Our Culture</h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  We believe in fostering an inclusive, innovative, and collaborative environment where every team member can thrive and contribute to our mission of transforming campus recruitment.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Heart className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Inclusive</h3>
                      <p className="text-gray-600">We celebrate diversity and ensure everyone has a voice in our mission.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Star className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Innovative</h3>
                      <p className="text-gray-600">We continuously push boundaries in HRTech and recruitment solutions.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Collaborative</h3>
                      <p className="text-gray-600">We work together as one team, united by our shared vision.</p>
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

      <Footer />
    </div>
  );
}
