"use client";
import React, { useState, useEffect } from 'react';
import {
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Heart,
  UsersRound,
  Users,
  Handshake,
  TrendingUp,
  Compass,
  Zap,
  LayoutGrid,
  Briefcase,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { env } from '@/lib/config/env';
import { ThemeToggle } from '@/components/layout/ThemeToggle';

interface NavbarProps {
  className?: string;
}

interface NavigationItem {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  hasDropdown: boolean;
  dropdownItems: Array<{
    label: string;
    href: string;
    icon: React.ComponentType<{ className?: string }>;
  }>;
}

interface SimpleLink {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const Navbar: React.FC<NavbarProps> = ({ className = '' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
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

  const handleDropdownClick = (dropdown: string, event: React.MouseEvent) => {
    event.preventDefault();
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeDropdowns = () => {
    setActiveDropdown(null);
  };

  // Nav order: Home, Products, Resources, About, Contact Us
  const productsItem: NavigationItem = {
    label: 'Products',
    href: '/products',
    icon: Zap,
    hasDropdown: true,
    dropdownItems: [
      { label: 'Overview', href: '/products', icon: LayoutGrid },
      { label: 'Disha', href: env.dishaUrl, icon: Compass },
      { label: 'SolviqAI', href: env.solviqUrl, icon: TrendingUp },
      { label: 'Lakshya', href: env.lakshyaUrl, icon: Users },
      { label: 'Shortlisted', href: '/shortlisted', icon: Briefcase },
    ],
  };

  const aboutItem: NavigationItem = {
    label: 'About',
    href: '/about-us',
    icon: Users,
    hasDropdown: true,
    dropdownItems: [
      { label: 'Mission & Value', href: '/about-us/mission-value', icon: Heart },
      { label: 'People', href: '/about-us/people', icon: UsersRound },
    ],
  };

  type NavEntry =
    | { type: 'link'; item: SimpleLink }
    | { type: 'dropdown'; item: NavigationItem };

  const navEntries: NavEntry[] = [
    { type: 'link', item: { label: 'Home', href: '/', icon: LayoutGrid } },
    { type: 'dropdown', item: productsItem },
    { type: 'link', item: { label: 'Resources', href: '/resources', icon: Compass } },
    { type: 'dropdown', item: aboutItem },
    { type: 'link', item: { label: 'Contact Us', href: '/contact', icon: Handshake } },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${mounted && resolvedTheme === 'dark'
        ? (isScrolled
          ? 'bg-gray-900 backdrop-blur-xl shadow-2xl border-gray-800'
          : 'bg-gray-900/98 backdrop-blur-lg border-gray-800')
        : (isScrolled
          ? 'bg-white backdrop-blur-xl shadow-2xl border-gray-200'
          : 'bg-white/98 backdrop-blur-lg border-gray-100')
        } ${className}`}>
        <div className="content-container">
          {/* Main Navbar Container */}
          <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20">

            {/* Logo Section - Left Aligned */}
            <div className="flex items-center flex-shrink-0">
              <Link href="/" className="relative">
                <Image
                  src={mounted && resolvedTheme === 'dark'
                    ? "https://hirekarma.s3.us-east-1.amazonaws.com/hirekarma_ui/home_ui/HKlogowhite.png"
                    : "https://hirekarma.s3.us-east-1.amazonaws.com/hirekarma_ui/home_ui/HKlogoblack.png"
                  }
                  alt="HireKarma Logo"
                  width={250}
                  height={50}
                  className="w-32 sm:w-36 lg:w-40 h-8 sm:h-10 lg:h-12 transition-transform duration-300 hover:scale-105"
                  priority
                />
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg opacity-0 hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
              </Link>
            </div>

            {/* Desktop Navigation - Right Aligned */}
            <div className="hidden lg:flex items-center gap-1">
              <div className="flex items-center space-x-1">
                {navEntries.map((entry) => {
                  if (entry.type === 'link') {
                    const link = entry.item;
                    return (
                      <Link
                        key={link.label}
                        href={link.href}
                        className={`flex items-center space-x-2 font-medium transition-all duration-300 py-2 px-4 rounded-lg ${mounted && resolvedTheme === 'dark'
                          ? 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-950'
                          : 'text-gray-700 hover:text-cyan-600 hover:bg-cyan-50'
                          }`}
                      >
                        <span className="whitespace-nowrap text-sm">{link.label}</span>
                      </Link>
                    );
                  }

                  const item = entry.item;
                  return (
                    <div
                      key={item.label}
                      className="relative group"
                      onMouseEnter={() => handleDropdownHover(item.label)}
                      onMouseLeave={handleDropdownLeave}
                    >
                      <button
                        onClick={(e) => handleDropdownClick(item.label, e)}
                        className={`flex items-center justify-center space-x-1.5 font-medium transition-all duration-300 py-2 px-4 rounded-lg ${activeDropdown === item.label
                          ? (mounted && resolvedTheme === 'dark'
                            ? 'text-cyan-400 bg-cyan-950'
                            : 'text-cyan-600 bg-cyan-50')
                          : (mounted && resolvedTheme === 'dark'
                            ? 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-950'
                            : 'text-gray-700 hover:text-cyan-600 hover:bg-cyan-50')
                          }`}
                      >
                        <span className="whitespace-nowrap text-sm">{item.label}</span>
                        <ChevronDown className={`w-3 h-3 flex-shrink-0 transition-transform duration-300 ${activeDropdown === item.label ? 'rotate-180' : 'group-hover:rotate-180'
                          }`} />
                      </button>

                      {activeDropdown === item.label && (
                        <div
                          className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-0 w-72 rounded-2xl shadow-2xl border backdrop-blur-xl z-50 animate-in slide-in-from-top-2 duration-300 overflow-hidden ${mounted && resolvedTheme === 'dark'
                            ? 'bg-gray-900 border-gray-800/50'
                            : 'bg-white border-gray-100/50'
                            }`}
                          onMouseEnter={() => handleDropdownHover(item.label)}
                          onMouseLeave={handleDropdownLeave}
                        >
                          <div className="p-4">
                            <div className={`flex items-center space-x-2 mb-3 pb-3 border-b ${mounted && resolvedTheme === 'dark'
                              ? 'border-gray-800'
                              : 'border-gray-100'
                              }`}>
                              <Link
                                href={item.href}
                                className={`font-semibold text-sm transition-colors duration-200 hover:underline ${mounted && resolvedTheme === 'dark'
                                  ? 'text-gray-200 hover:text-cyan-400'
                                  : 'text-gray-800 hover:text-cyan-600'
                                  }`}
                                onClick={closeDropdowns}
                              >
                                {item.label}
                              </Link>
                            </div>
                            <div className="grid grid-cols-1 gap-1">
                              {item.dropdownItems.map((dropdownItem, index) => {
                                return (
                                  <Link
                                    key={dropdownItem.label}
                                    href={dropdownItem.href}
                                    className={`flex items-center space-x-3 p-2 rounded-lg transition-all duration-200 group ${mounted && resolvedTheme === 'dark'
                                      ? 'hover:bg-gradient-to-r hover:from-cyan-950 hover:to-blue-950'
                                      : 'hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50'
                                      }`}
                                    style={{ animationDelay: `${index * 50}ms` }}
                                    onClick={closeDropdowns}
                                  >
                                    <div className="flex-1 min-w-0">
                                      <span className={`font-medium text-sm transition-colors duration-200 block truncate ${mounted && resolvedTheme === 'dark'
                                        ? 'text-gray-300 group-hover:text-cyan-400'
                                        : 'text-gray-700 group-hover:text-cyan-600'
                                        }`}>
                                        {dropdownItem.label}
                                      </span>
                                    </div>
                                    <ArrowRight className={`w-3 h-3 transition-all duration-200 transform group-hover:translate-x-0.5 flex-shrink-0 ${mounted && resolvedTheme === 'dark'
                                      ? 'text-gray-500 group-hover:text-cyan-400'
                                      : 'text-gray-400 group-hover:text-cyan-500'
                                      }`} />
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
              </div>
              <ThemeToggle className="ml-1" />
            </div>


            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-2 flex-shrink-0">
              <ThemeToggle />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2.5 rounded-lg transition-all duration-200 ${mounted && resolvedTheme === 'dark'
                  ? 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-950'
                  : 'text-gray-700 hover:text-cyan-600 hover:bg-cyan-50'
                  }`}
              >
                <div className="relative w-5 h-5">
                  <Menu className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`} />
                  <X className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`} />
                </div>
              </button>
            </div>
          </div>


          {/* Mobile Menu - Still uses click for mobile */}
          <div className={`lg:hidden transition-all duration-500 ${isMobileMenuOpen ? 'max-h-[calc(100vh-4rem)] opacity-100' : 'max-h-0 opacity-0'
            }`}>
            <div className={`border-t backdrop-blur-xl overflow-y-auto max-h-[calc(100vh-4rem)] ${mounted && resolvedTheme === 'dark'
              ? 'border-gray-800 bg-gray-900'
              : 'border-gray-200 bg-white'
              }`}>
              <div className="px-6 py-6 pb-12 space-y-2">
                {navEntries.map((entry) => {
                  if (entry.type === 'link') {
                    const link = entry.item;
                    return (
                      <Link
                        key={link.label}
                        href={link.href}
                        className={`flex items-center space-x-3 w-full text-left font-medium py-3 px-4 rounded-xl transition-all duration-200 ${mounted && resolvedTheme === 'dark'
                          ? 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-950'
                          : 'text-gray-700 hover:text-cyan-600 hover:bg-cyan-50'
                          }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <span>{link.label}</span>
                      </Link>
                    );
                  }

                  const item = entry.item;
                  return (
                    <div key={item.label} className="space-y-1">
                      <button
                        onClick={(e) => handleDropdownClick(item.label, e)}
                        className="flex items-center justify-between w-full text-left text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 font-medium py-3 px-4 rounded-xl hover:bg-cyan-50 dark:hover:bg-cyan-950 transition-all duration-200"
                      >
                        <div className="flex items-center">
                          <span className={`${mounted && resolvedTheme === 'dark'
                            ? 'text-gray-300'
                            : 'text-gray-700'
                            }`}>{item.label}</span>
                        </div>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 flex-shrink-0 ${activeDropdown === item.label ? 'rotate-180' : ''
                          }`} />
                      </button>

                      {activeDropdown === item.label && (
                        <div className="ml-4 space-y-1 animate-in slide-in-from-top-2 duration-300">
                          {item.dropdownItems.map((dropdownItem) => {
                            return (
                              <Link
                                key={dropdownItem.label}
                                href={dropdownItem.href}
                                className={`flex items-center w-full text-left font-medium py-2 px-4 rounded-lg transition-all duration-200 ${mounted && resolvedTheme === 'dark'
                                  ? 'text-gray-400 hover:text-cyan-400 hover:bg-cyan-950'
                                  : 'text-gray-600 hover:text-cyan-600 hover:bg-cyan-50'
                                  }`}
                                onClick={() => {
                                  setIsMobileMenuOpen(false);
                                  closeDropdowns();
                                }}
                              >
                                <span className="text-sm">{dropdownItem.label}</span>
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
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
