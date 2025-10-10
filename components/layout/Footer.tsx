"use client";

import React from 'react';
import Image from 'next/image';
import { Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-50 via-white to-gray-50 text-gray-900 relative overflow-hidden border-t border-gray-200/80">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}></div>
      </div>

      <div className="relative z-10 content-container py-16 lg:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 mb-16">
          {/* Company Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <Image 
                src="/logo.png" 
                alt="HireKarma Logo" 
                width={180} 
                height={54} 
                className="w-36 h-11 sm:w-44 sm:h-14" 
              />
              <p className="text-gray-600 text-base leading-relaxed max-w-sm">
                Transform your hiring process with HireKarma&apos;s innovative platform. 
                Find the right talent faster and more efficiently.
              </p>
            </div>
            
            {/* Social Media */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">Connect With Us</h4>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://twitter.com/hirekarma" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-11 h-11 bg-white hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-600 rounded-xl transition-all duration-300 hover:scale-110 group border border-gray-200 hover:border-transparent shadow-sm hover:shadow-lg"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors duration-200" />
                </a>
                
                <a 
                  href="https://linkedin.com/company/hirekarma" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-11 h-11 bg-white hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-600 rounded-xl transition-all duration-300 hover:scale-110 group border border-gray-200 hover:border-transparent shadow-sm hover:shadow-lg"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors duration-200" />
                </a>
                
                <a 
                  href="https://facebook.com/hirekarma" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-11 h-11 bg-white hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-600 rounded-xl transition-all duration-300 hover:scale-110 group border border-gray-200 hover:border-transparent shadow-sm hover:shadow-lg"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors duration-200" />
                </a>
                
                <a 
                  href="https://instagram.com/hirekarma" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-11 h-11 bg-white hover:bg-gradient-to-br hover:from-cyan-500 hover:to-blue-600 rounded-xl transition-all duration-300 hover:scale-110 group border border-gray-200 hover:border-transparent shadow-sm hover:shadow-lg"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors duration-200" />
                </a>
              </div>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-5">
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-cyan-600 transition-colors duration-200 text-base inline-flex items-center group">
                  <span className="relative">
                    About Us
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-600 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-cyan-600 transition-colors duration-200 text-base inline-flex items-center group">
                  <span className="relative">
                    Careers
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-600 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-cyan-600 transition-colors duration-200 text-base inline-flex items-center group">
                  <span className="relative">
                    Contact Us
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-600 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div className="space-y-5">
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-cyan-600 transition-colors duration-200 text-base inline-flex items-center group">
                  <span className="relative">
                    For Employers
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-600 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-cyan-600 transition-colors duration-200 text-base inline-flex items-center group">
                  <span className="relative">
                    For Candidates
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-600 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-cyan-600 transition-colors duration-200 text-base inline-flex items-center group">
                  <span className="relative">
                    Pricing
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-600 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-5">
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Resources</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-600 hover:text-cyan-600 transition-colors duration-200 text-base inline-flex items-center group">
                  <span className="relative">
                    Blog
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-600 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-cyan-600 transition-colors duration-200 text-base inline-flex items-center group">
                  <span className="relative">
                    Help Center
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-600 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-cyan-600 transition-colors duration-200 text-base inline-flex items-center group">
                  <span className="relative">
                    Case Studies
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-600 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Certifications Section - Separate Section */}
        <div className="border-t border-gray-200/80 pt-12 pb-12">
          <div className="text-center space-y-8">
            <div className="space-y-2">
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider">Recognised & Certified By</h3>
              <p className="text-gray-600 text-sm">Trusted partnerships and industry recognition</p>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
              {/* DPIIT India */}
              <div className="flex flex-col items-center space-y-3 group">
                <div className="bg-white rounded-2xl p-6 border border-gray-200/80 hover:border-cyan-300 hover:shadow-xl transition-all duration-300 w-32 h-24 flex items-center justify-center group-hover:scale-105">
                  <Image 
                    src="/DPIIT.png" 
                    alt="DPIIT India" 
                    width={100} 
                    height={60} 
                    className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <p className="text-gray-700 text-xs text-center font-semibold">DPIIT India</p>
              </div>

              {/* MSME India */}
              <div className="flex flex-col items-center space-y-3 group">
                <div className="bg-white rounded-2xl p-6 border border-gray-200/80 hover:border-cyan-300 hover:shadow-xl transition-all duration-300 w-32 h-24 flex items-center justify-center group-hover:scale-105">
                  <Image 
                    src="/MSME.png" 
                    alt="MSME India" 
                    width={100} 
                    height={60} 
                    className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <p className="text-gray-700 text-xs text-center font-semibold">MSME India</p>
              </div>

              {/* Startup Odisha */}
              <div className="flex flex-col items-center space-y-3 group">
                <div className="bg-white rounded-2xl p-6 border border-gray-200/80 hover:border-cyan-300 hover:shadow-xl transition-all duration-300 w-32 h-24 flex items-center justify-center group-hover:scale-105">
                  <Image 
                    src="/StartupOdisha.png" 
                    alt="Startup Odisha" 
                    width={100} 
                    height={60} 
                    className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <p className="text-gray-700 text-xs text-center font-semibold">Startup Odisha</p>
              </div>

              {/* ISO 9001:2015 */}
              <div className="flex flex-col items-center space-y-3 group">
                <div className="bg-white rounded-2xl p-6 border border-gray-200/80 hover:border-cyan-300 hover:shadow-xl transition-all duration-300 w-32 h-24 flex items-center justify-center group-hover:scale-105">
                  <Image 
                    src="/iso.png" 
                    alt="ISO 9001:2015" 
                    width={100} 
                    height={60} 
                    className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <p className="text-gray-700 text-xs text-center font-semibold">ISO 9001:2015</p>
              </div>

              {/* 10,000 Startups Nasscom */}
              <div className="flex flex-col items-center space-y-3 group">
                <div className="bg-white rounded-2xl p-6 border border-gray-200/80 hover:border-cyan-300 hover:shadow-xl transition-all duration-300 w-32 h-24 flex items-center justify-center group-hover:scale-105">
                  <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg flex items-center justify-center group-hover:from-cyan-50 group-hover:to-blue-50 transition-all duration-300">
                    <span className="text-gray-800 text-sm font-bold">NASSCOM</span>
                  </div>
                </div>
                <p className="text-gray-700 text-xs text-center font-semibold">10,000 Startups</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200/80 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-0">
            <div className="text-gray-600 text-sm text-center lg:text-left order-2 lg:order-1">
              © {new Date().getFullYear()} HireKarma. All rights reserved.
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-3 text-sm order-1 lg:order-2">
              <a href="#" className="text-gray-600 hover:text-cyan-600 transition-colors duration-200">Privacy Policy</a>
              <span className="text-gray-300">•</span>
              <a href="#" className="text-gray-600 hover:text-cyan-600 transition-colors duration-200">Terms of Service</a>
              <span className="text-gray-300">•</span>
              <a href="#" className="text-gray-600 hover:text-cyan-600 transition-colors duration-200">Cookie Policy</a>
            </div>
            
            <div className="text-gray-600 text-sm text-center lg:text-right order-3">
              Room No: 103, 1st Floor, Tower A, O-HUB, Bhubaneswar
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

