"use client";

import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import Link from 'next/link';
interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className = '' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
        : 'bg-white/90 backdrop-blur-sm border-b border-gray-100'
    } ${className}`}>
      <div className="content-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
              <img src="/logo.png" alt="logo" className="w-32 sm:w-36 lg:w-40 h-8 sm:h-10 lg:h-12" />
          </div>

          {/* Desktop Navigation Links
          <div className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-gray-700 hover:text-cyan-600 font-medium transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-cyan-50"
            >
              Home
            </button>
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-cyan-600 font-medium transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-cyan-50">
                <span>Solutions</span>
                <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
              </button>
            </div>
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-cyan-600 font-medium transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-cyan-50">
                <span>Products</span>
                <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
              </button>
            </div>
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-cyan-600 font-medium transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-cyan-50">
                <span>Resources</span>
                <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
              </button>
            </div>
            <button 
              onClick={() => scrollToSection('features')}
              className="text-gray-700 hover:text-cyan-600 font-medium transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-cyan-50"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('solutions')}
              className="text-gray-700 hover:text-cyan-600 font-medium transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-cyan-50"
            >
              Our Solutions
            </button>
          </div> */}

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
            <button className="px-4 xl:px-6 py-2 xl:py-2.5 text-sm xl:text-base text-gray-700 font-medium border border-gray-300 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-200">
              <Link href="https://disha.hirekarma.in/auth/register">
              Sign Up
              </Link>
            </button>
            <button className="px-4 xl:px-6 py-2 xl:py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-sm xl:text-base text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              <Link href="https://disha.hirekarma.in/auth/login">
                Sign In
              </Link>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 transition-colors duration-200"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md">
            <div className="px-4 py-6 space-y-4">
              <button 
                onClick={() => scrollToSection('hero')}
                className="block w-full text-left text-gray-700 hover:text-cyan-600 font-medium py-2 px-3 rounded-lg hover:bg-cyan-50 transition-colors duration-200"
              >
                Home
              </button>
              <button className="block w-full text-left text-gray-700 hover:text-cyan-600 font-medium py-2 px-3 rounded-lg hover:bg-cyan-50 transition-colors duration-200">
                Solutions
              </button>
              <button className="block w-full text-left text-gray-700 hover:text-cyan-600 font-medium py-2 px-3 rounded-lg hover:bg-cyan-50 transition-colors duration-200">
                Products
              </button>
              <button className="block w-full text-left text-gray-700 hover:text-cyan-600 font-medium py-2 px-3 rounded-lg hover:bg-cyan-50 transition-colors duration-200">
                Resources
              </button>
              <button 
                onClick={() => scrollToSection('features')}
                className="block w-full text-left text-gray-700 hover:text-cyan-600 font-medium py-2 px-3 rounded-lg hover:bg-cyan-50 transition-colors duration-200"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('solutions')}
                className="block w-full text-left text-gray-700 hover:text-cyan-600 font-medium py-2 px-3 rounded-lg hover:bg-cyan-50 transition-colors duration-200"
              >
                Our Solutions
              </button>
              
              {/* Mobile Auth Buttons */}
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <button className="w-full px-4 py-2.5 text-sm text-gray-700 font-medium border border-gray-300 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all duration-200">
                  <Link href="https://disha.hirekarma.in/auth/register">
                    Sign Up
                  </Link>
                </button>
                <button className="w-full px-4 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 text-sm text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-md">
                  <Link href="https://disha.hirekarma.in/auth/login">
                    Sign In
                  </Link>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
