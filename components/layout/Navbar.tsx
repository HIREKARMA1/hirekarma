"use client";

import React, { useState, useEffect } from 'react';
import {
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Home,
  Building2,
  Users,
  BookOpen,
  Zap,
  Target,
  Calendar,
  Sparkles
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className = '' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const handleDropdownHover = (dropdown: string) => {
    setActiveDropdown(dropdown);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  const closeDropdowns = () => {
    setActiveDropdown(null);
  };

  // Navigation data with icons
  const navigationItems = [
    {
      label: 'Products',
      href: '/products',
      icon: Zap,
      hasDropdown: true,
      dropdownItems: [
        { label: 'Disha', href: 'https://disha.hirekarma.in/', icon: Target },
        { label: 'Shaksham', href: '/products/shaksham', icon: Sparkles }
      ]
    }
  ];

  // Simple navigation links without dropdown
  const simpleLinks = [
    { label: 'Events', href: '/events', icon: Calendar },
    { label: 'Teams', href: '/teams', icon: Users },
    { label: 'Gallery', href: '/gallery', icon: Building2 },
    { label: 'Contact', href: '/contact', icon: BookOpen }
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${isScrolled
          ? 'bg-white/98 backdrop-blur-xl shadow-2xl border-gray-200/50'
          : 'bg-white/95 backdrop-blur-lg border-gray-100/50'
        } ${className}`}>
        <div className="content-container">
          {/* Main Navbar Container */}
          <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">

            {/* Logo Section - Left Aligned */}
            <div className="flex items-center flex-shrink-0">
              <div className="relative">
                <Image
                  src="/logo.png"
                  alt="HireKarma Logo"
                  width={160}
                  height={48}
                  className="w-32 sm:w-36 lg:w-40 h-8 sm:h-10 lg:h-12 transition-transform duration-300 hover:scale-105"
                  priority
                />
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg opacity-0 hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
              </div>
            </div>

            {/* Desktop Navigation - Right Aligned */}
            <div className="hidden lg:flex items-center">
              <div className="flex items-center space-x-1">
                {/* Home Link */}
                <Link
                  href="/"
                  className="flex items-center space-x-2 text-gray-700 hover:text-cyan-600 font-medium transition-all duration-300 py-2 px-4 rounded-lg hover:bg-cyan-50"
                >
                  <Home className="w-4 h-4 flex-shrink-0" />
                  <span className="whitespace-nowrap">Home</span>
                </Link>

                {/* Products Dropdown */}
                {navigationItems.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="relative group"
                      onMouseEnter={() => handleDropdownHover(item.label)}
                      onMouseLeave={handleDropdownLeave}
                    >
                      <Link
                        href={item.href}
                        className={`flex items-center justify-center space-x-1.5 font-medium transition-all duration-300 py-2 px-4 rounded-lg ${activeDropdown === item.label
                            ? 'text-cyan-600 bg-cyan-50'
                            : 'text-gray-700 hover:text-cyan-600 hover:bg-cyan-50'
                          }`}
                      >
                        <IconComponent className="w-4 h-4 flex-shrink-0" />
                        <span className="whitespace-nowrap text-sm">{item.label}</span>
                        <ChevronDown className={`w-3 h-3 flex-shrink-0 transition-transform duration-300 ${activeDropdown === item.label ? 'rotate-180' : 'group-hover:rotate-180'
                          }`} />
                      </Link>

                      {/* Enhanced Dropdown Menu - Shows on Hover */}
                      {activeDropdown === item.label && (
                        <div
                          className="absolute top-full left-1/2 transform -translate-x-1/2 mt-0 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100/50 backdrop-blur-xl z-50 animate-in slide-in-from-top-2 duration-300 overflow-hidden"
                          onMouseEnter={() => handleDropdownHover(item.label)}
                          onMouseLeave={handleDropdownLeave}
                        >
                          <div className="p-4">
                            <div className="flex items-center space-x-2 mb-3 pb-3 border-b border-gray-100">
                              <IconComponent className="w-4 h-4 text-cyan-600" />
                              <h3 className="font-semibold text-gray-800 text-sm">{item.label}</h3>
                            </div>
                            <div className="grid grid-cols-1 gap-1">
                              {item.dropdownItems.map((dropdownItem, index) => {
                                const DropdownIcon = dropdownItem.icon;
                                return (
                                  <Link
                                    key={dropdownItem.label}
                                    href={dropdownItem.href}
                                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50 transition-all duration-200 group"
                                    style={{ animationDelay: `${index * 50}ms` }}
                                    onClick={closeDropdowns}
                                  >
                                    <div className="flex-shrink-0 w-7 h-7 rounded-lg bg-gradient-to-br from-cyan-100 to-blue-100 flex items-center justify-center group-hover:from-cyan-200 group-hover:to-blue-200 transition-all duration-200">
                                      <DropdownIcon className="w-3 h-3 text-cyan-600 group-hover:text-cyan-700" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                      <span className="text-gray-700 group-hover:text-cyan-600 font-medium text-sm transition-colors duration-200 block truncate">
                                        {dropdownItem.label}
                                      </span>
                                    </div>
                                    <ArrowRight className="w-3 h-3 text-gray-400 group-hover:text-cyan-500 transition-all duration-200 transform group-hover:translate-x-0.5 flex-shrink-0" />
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}

                {/* Simple Links - No Dropdown */}
                {simpleLinks.map((link) => {
                  const LinkIcon = link.icon;
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="flex items-center space-x-2 text-gray-700 hover:text-cyan-600 font-medium transition-all duration-300 py-2 px-4 rounded-lg hover:bg-cyan-50"
                    >
                      <LinkIcon className="w-4 h-4 flex-shrink-0" />
                      <span className="whitespace-nowrap text-sm">{link.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>


            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center flex-shrink-0">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2.5 rounded-lg text-gray-700 hover:text-cyan-600 hover:bg-cyan-50 transition-all duration-200"
              >
                <div className="relative w-5 h-5">
                  <Menu className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`} />
                  <X className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`} />
                </div>
              </button>
            </div>
          </div>


          {/* Mobile Menu - Still uses click for mobile */}
          <div className={`lg:hidden overflow-hidden transition-all duration-500 ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
            }`}>
            <div className="border-t border-gray-200/50 bg-white/98 backdrop-blur-xl">
              <div className="px-6 py-6 space-y-2">
                {/* Mobile Navigation Items */}
                <Link
                  href="/"
                  className="flex items-center space-x-3 w-full text-left text-gray-700 hover:text-cyan-600 font-medium py-3 px-4 rounded-xl hover:bg-cyan-50 transition-all duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <div className="w-8 h-8 rounded-lg bg-cyan-100 flex items-center justify-center flex-shrink-0">
                    <Home className="w-4 h-4 text-cyan-600" />
                  </div>
                  <span>Home</span>
                </Link>

                {/* Products Dropdown */}
                {navigationItems.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={item.label} className="space-y-1">
                      <button
                        onClick={() => handleDropdownHover(item.label)}
                        className="flex items-center justify-between w-full text-left text-gray-700 hover:text-cyan-600 font-medium py-3 px-4 rounded-xl hover:bg-cyan-50 transition-all duration-200"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-lg bg-cyan-100 flex items-center justify-center flex-shrink-0">
                            <IconComponent className="w-4 h-4 text-cyan-600" />
                          </div>
                          <span>{item.label}</span>
                        </div>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 flex-shrink-0 ${activeDropdown === item.label ? 'rotate-180' : ''
                          }`} />
                      </button>

                      {activeDropdown === item.label && (
                        <div className="ml-4 space-y-1 animate-in slide-in-from-top-2 duration-300">
                          {item.dropdownItems.map((dropdownItem) => {
                            const DropdownIcon = dropdownItem.icon;
                            return (
                              <Link
                                key={dropdownItem.label}
                                href={dropdownItem.href}
                                className="flex items-center space-x-3 w-full text-left text-gray-600 hover:text-cyan-600 font-medium py-2 px-4 rounded-lg hover:bg-cyan-50 transition-all duration-200"
                                onClick={() => {
                                  setIsMobileMenuOpen(false);
                                  closeDropdowns();
                                }}
                              >
                                <div className="w-6 h-6 rounded-md bg-cyan-100 flex items-center justify-center flex-shrink-0">
                                  <DropdownIcon className="w-3 h-3 text-cyan-600" />
                                </div>
                                <span className="text-sm">{dropdownItem.label}</span>
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}

                {/* Simple Links - Mobile */}
                {simpleLinks.map((link) => {
                  const LinkIcon = link.icon;
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="flex items-center space-x-3 w-full text-left text-gray-700 hover:text-cyan-600 font-medium py-3 px-4 rounded-xl hover:bg-cyan-50 transition-all duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="w-8 h-8 rounded-lg bg-cyan-100 flex items-center justify-center flex-shrink-0">
                        <LinkIcon className="w-4 h-4 text-cyan-600" />
                      </div>
                      <span>{link.label}</span>
                    </Link>
                  );
                })}

              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Backdrop for mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Backdrop for dropdowns */}
      {activeDropdown && (
        <div
          className="fixed inset-0 z-40 lg:block hidden"
          onClick={closeDropdowns}
        />
      )}
    </>
  );
};

export default Navbar;
