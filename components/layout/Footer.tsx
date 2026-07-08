"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { Twitter, Linkedin, Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import footerProducts from '@/data/footer-products.json';
import footerPrograms from '@/data/footer-programs.json';
import { useSiteLocale } from '@/contexts/SiteLocaleContext';

const Footer: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  const { content } = useSiteLocale();
  const { footer } = content;

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <footer className={`relative overflow-hidden border-t transition-colors duration-300 ${mounted && resolvedTheme === 'dark'
      ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 border-gray-700'
      : 'bg-gradient-to-br from-gray-50 via-white to-gray-50 text-gray-900 border-gray-200/80'
      }`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23059669' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}></div>
      </div>

      <div className="relative z-10 content-container py-16 lg:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-8 xl:gap-12 mb-16">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 space-y-6">
            <div className="space-y-4">
              <Image
                src={mounted && resolvedTheme === 'dark'
                  ? "https://hirekarma.s3.us-east-1.amazonaws.com/hirekarma_ui/home_ui/HKlogowhite.png"
                  : "https://hirekarma.s3.us-east-1.amazonaws.com/hirekarma_ui/home_ui/HKlogoblack.png"
                }
                alt="HireKarma Logo"
                width={250}
                height={50}
                className="w-32 sm:w-36 lg:w-40 h-8 sm:h-10 lg:h-12"
              />
              <p className={`text-base leading-relaxed max-w-sm ${mounted && resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}>
                {footer.description}
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className={`w-4 h-4 ${mounted && resolvedTheme === 'dark' ? 'text-emerald-400' : 'text-emerald-600'
                  }`} />
                <span className={`text-sm ${mounted && resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                  {footer.email}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className={`w-4 h-4 ${mounted && resolvedTheme === 'dark' ? 'text-emerald-400' : 'text-emerald-600'
                  }`} />
                <span className={`text-sm ${mounted && resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                  {footer.phone}
                </span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className={`w-4 h-4 mt-0.5 ${mounted && resolvedTheme === 'dark' ? 'text-emerald-400' : 'text-emerald-600'
                  }`} />
                <span className={`text-sm ${mounted && resolvedTheme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                  {footer.address}
                </span>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h4 className={`text-sm font-semibold uppercase tracking-wider ${mounted && resolvedTheme === 'dark' ? 'text-gray-200' : 'text-gray-900'
                }`}>
                {footer.connectTitle}
              </h4>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://twitter.com/hirekarma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-500 group border shadow-sm ${mounted && resolvedTheme === 'dark'
                    ? 'bg-gray-800 border-gray-700'
                    : 'bg-white border-gray-200'
                    } hover:brightness-110`}
                  aria-label="Twitter"
                >
                  <div className="pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-br from-emerald-500/5 to-blue-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <Twitter className={`relative z-10 w-4 h-4 transition-colors duration-200 ${mounted && resolvedTheme === 'dark'
                    ? 'text-gray-400 group-hover:text-white'
                    : 'text-gray-600 group-hover:text-white'
                    }`} />
                </a>

                <a
                  href="https://www.linkedin.com/company/hirekarma-pvt-ltd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-500 group border shadow-sm ${mounted && resolvedTheme === 'dark'
                    ? 'bg-gray-800 border-gray-700'
                    : 'bg-white border-gray-200'
                    } hover:brightness-110`}
                  aria-label="LinkedIn"
                >
                  <div className="pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-br from-emerald-500/5 to-blue-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <Linkedin className={`relative z-10 w-4 h-4 transition-colors duration-200 ${mounted && resolvedTheme === 'dark'
                    ? 'text-gray-400 group-hover:text-white'
                    : 'text-gray-600 group-hover:text-white'
                    }`} />
                </a>

                <a
                  href="https://facebook.com/hirekarma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-500 group border shadow-sm ${mounted && resolvedTheme === 'dark'
                    ? 'bg-gray-800 border-gray-700'
                    : 'bg-white border-gray-200'
                    } hover:brightness-110`}
                  aria-label="Facebook"
                >
                  <div className="pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-br from-emerald-500/5 to-blue-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <Facebook className={`relative z-10 w-4 h-4 transition-colors duration-200 ${mounted && resolvedTheme === 'dark'
                    ? 'text-gray-400 group-hover:text-white'
                    : 'text-gray-600 group-hover:text-white'
                    }`} />
                </a>

                <a
                  href="https://instagram.com/hirekarma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`relative flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-500 group border shadow-sm ${mounted && resolvedTheme === 'dark'
                    ? 'bg-gray-800 border-gray-700'
                    : 'bg-white border-gray-200'
                    } hover:brightness-110`}
                  aria-label="Instagram"
                >
                  <div className="pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-br from-emerald-500/5 to-blue-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <Instagram className={`relative z-10 w-4 h-4 transition-colors duration-200 ${mounted && resolvedTheme === 'dark'
                    ? 'text-gray-400 group-hover:text-white'
                    : 'text-gray-600 group-hover:text-white'
                    }`} />
                </a>
              </div>
            </div>
          </div>

          {/* About Us */}
          <div className="space-y-5">
            <h3 className={`text-sm font-bold uppercase tracking-wider ${mounted && resolvedTheme === 'dark' ? 'text-gray-200' : 'text-gray-900'
              }`}>
              {footer.aboutTitle}
            </h3>
            <ul className="space-y-3">
              {footer.aboutLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={`transition-colors duration-200 text-base inline-flex items-center group ${mounted && resolvedTheme === 'dark'
                    ? 'text-gray-300 hover:text-emerald-400'
                    : 'text-gray-600 hover:text-emerald-600'
                    }`}>
                    <span className="relative">
                      {link.label}
                      <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${mounted && resolvedTheme === 'dark' ? 'bg-emerald-400' : 'bg-emerald-600'
                        }`}></span>
                    </span>
                  </a>
                </li>
              ))}
              {/* <li>
                <a href="#" className={`transition-colors duration-200 text-base inline-flex items-center group ${mounted && resolvedTheme === 'dark'
                  ? 'text-gray-300 hover:text-emerald-400'
                  : 'text-gray-600 hover:text-emerald-600'
                  }`}>
                  <span className="relative">
                    Partners
                    <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${mounted && resolvedTheme === 'dark' ? 'bg-emerald-400' : 'bg-emerald-600'
                      }`}></span>
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className={`transition-colors duration-200 text-base inline-flex items-center group ${mounted && resolvedTheme === 'dark'
                  ? 'text-gray-300 hover:text-emerald-400'
                  : 'text-gray-600 hover:text-emerald-600'
                  }`}>
                  <span className="relative">
                    Careers
                    <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${mounted && resolvedTheme === 'dark' ? 'bg-emerald-400' : 'bg-emerald-600'
                      }`}></span>
                  </span>
                </a>
              </li> */}
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-5">
            <h3 className={`text-sm font-bold uppercase tracking-wider ${mounted && resolvedTheme === 'dark' ? 'text-gray-200' : 'text-gray-900'
              }`}>
              {footer.productsTitle}
            </h3>
            <ul className="space-y-3">
              {footerProducts.map((product) => {
                const isExternal = product.href.startsWith('http');
                return (
                  <li key={product.name}>
                    <a
                      href={product.href}
                      target={isExternal ? '_blank' : undefined}
                      rel={isExternal ? 'noopener noreferrer' : undefined}
                      className={`transition-colors duration-200 text-base inline-flex items-center group ${mounted && resolvedTheme === 'dark'
                        ? 'text-gray-300 hover:text-emerald-400'
                        : 'text-gray-600 hover:text-emerald-600'
                        }`}
                    >
                      <span className="relative">
                        {product.name}
                        <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${mounted && resolvedTheme === 'dark' ? 'bg-emerald-400' : 'bg-emerald-600'
                          }`}></span>
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Programs */}
          <div className="space-y-5">
            <h3 className={`text-sm font-bold uppercase tracking-wider ${mounted && resolvedTheme === 'dark' ? 'text-gray-200' : 'text-gray-900'
              }`}>
              {footer.programsTitle}
            </h3>
            <ul className="space-y-3">
              {footerPrograms.map((program) => (
                <li key={program.name}>
                  <a
                    href={program.href}
                    className={`transition-colors duration-200 text-base inline-flex items-center group ${mounted && resolvedTheme === 'dark'
                      ? 'text-gray-300 hover:text-emerald-400'
                      : 'text-gray-600 hover:text-emerald-600'
                      }`}
                  >
                    <span className="relative">
                      {program.name}
                      <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${mounted && resolvedTheme === 'dark' ? 'bg-emerald-400' : 'bg-emerald-600'
                        }`} />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-5">
            <h3 className={`text-sm font-bold uppercase tracking-wider ${mounted && resolvedTheme === 'dark' ? 'text-gray-200' : 'text-gray-900'
              }`}>
              {footer.contactTitle}
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="/contact" className={`transition-colors duration-200 text-base inline-flex items-center group ${mounted && resolvedTheme === 'dark'
                  ? 'text-gray-300 hover:text-emerald-400'
                  : 'text-gray-600 hover:text-emerald-600'
                  }`}>
                  <span className="relative">
                    {footer.contactLink}
                    <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${mounted && resolvedTheme === 'dark' ? 'bg-emerald-400' : 'bg-emerald-600'
                      }`}></span>
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          {/* <div className="space-y-5">
            <h3 className={`text-sm font-bold uppercase tracking-wider ${mounted && resolvedTheme === 'dark' ? 'text-gray-200' : 'text-gray-900'
              }`}>
              Solutions
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className={`transition-colors duration-200 text-base inline-flex items-center group ${mounted && resolvedTheme === 'dark'
                  ? 'text-gray-300 hover:text-emerald-400'
                  : 'text-gray-600 hover:text-emerald-600'
                  }`}>
                  <span className="relative">
                    Corporate
                    <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${mounted && resolvedTheme === 'dark' ? 'bg-emerald-400' : 'bg-emerald-600'
                      }`}></span>
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className={`transition-colors duration-200 text-base inline-flex items-center group ${mounted && resolvedTheme === 'dark'
                  ? 'text-gray-300 hover:text-emerald-400'
                  : 'text-gray-600 hover:text-emerald-600'
                  }`}>
                  <span className="relative">
                    Students
                    <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${mounted && resolvedTheme === 'dark' ? 'bg-emerald-400' : 'bg-emerald-600'
                      }`}></span>
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className={`transition-colors duration-200 text-base inline-flex items-center group ${mounted && resolvedTheme === 'dark'
                  ? 'text-gray-300 hover:text-emerald-400'
                  : 'text-gray-600 hover:text-emerald-600'
                  }`}>
                  <span className="relative">
                    Universities
                    <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${mounted && resolvedTheme === 'dark' ? 'bg-emerald-400' : 'bg-emerald-600'
                      }`}></span>
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className={`transition-colors duration-200 text-base inline-flex items-center group ${mounted && resolvedTheme === 'dark'
                  ? 'text-gray-300 hover:text-emerald-400'
                  : 'text-gray-600 hover:text-emerald-600'
                  }`}>
                  <span className="relative">
                    Skill Development
                    <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${mounted && resolvedTheme === 'dark' ? 'bg-emerald-400' : 'bg-emerald-600'
                      }`}></span>
                  </span>
                </a>
              </li>
            </ul>
          </div>  */}

          {/* Resources */}
          {/* <div className="space-y-5">
            <h3 className={`text-sm font-bold uppercase tracking-wider ${mounted && resolvedTheme === 'dark' ? 'text-gray-200' : 'text-gray-900'
              }`}>
              Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className={`transition-colors duration-200 text-base inline-flex items-center group ${mounted && resolvedTheme === 'dark'
                  ? 'text-gray-300 hover:text-emerald-400'
                  : 'text-gray-600 hover:text-emerald-600'
                  }`}>
                  <span className="relative">
                    Knowledge Hub
                    <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${mounted && resolvedTheme === 'dark' ? 'bg-emerald-400' : 'bg-emerald-600'
                      }`}></span>
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className={`transition-colors duration-200 text-base inline-flex items-center group ${mounted && resolvedTheme === 'dark'
                  ? 'text-gray-300 hover:text-emerald-400'
                  : 'text-gray-600 hover:text-emerald-600'
                  }`}>
                  <span className="relative">
                    Case Studies
                    <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${mounted && resolvedTheme === 'dark' ? 'bg-emerald-400' : 'bg-emerald-600'
                      }`}></span>
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className={`transition-colors duration-200 text-base inline-flex items-center group ${mounted && resolvedTheme === 'dark'
                  ? 'text-gray-300 hover:text-emerald-400'
                  : 'text-gray-600 hover:text-emerald-600'
                  }`}>
                  <span className="relative">
                    Events
                    <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${mounted && resolvedTheme === 'dark' ? 'bg-emerald-400' : 'bg-emerald-600'
                      }`}></span>
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className={`transition-colors duration-200 text-base inline-flex items-center group ${mounted && resolvedTheme === 'dark'
                  ? 'text-gray-300 hover:text-emerald-400'
                  : 'text-gray-600 hover:text-emerald-600'
                  }`}>
                  <span className="relative">
                    FAQ
                    <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${mounted && resolvedTheme === 'dark' ? 'bg-emerald-400' : 'bg-emerald-600'
                      }`}></span>
                  </span>
                </a>
              </li>
            </ul>
          </div> */}
        </div>

        {/* Bottom Section */}
        <div className={`border-t pt-8 ${mounted && resolvedTheme === 'dark' ? 'border-gray-700' : 'border-gray-200/80'
          }`}>
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-0">
            <div className={`text-sm text-center lg:text-left order-2 lg:order-1 ${mounted && resolvedTheme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
              {footer.copyright.replace('{year}', String(new Date().getFullYear()))}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 text-sm order-1 lg:order-2">
              <a href="/PrivacyPolicy" className={`transition-colors duration-200 ${mounted && resolvedTheme === 'dark'
                ? 'text-gray-400 hover:text-emerald-400'
                : 'text-gray-600 hover:text-emerald-600'
                }`}>
                {footer.privacyPolicy}
              </a>
              <span className={mounted && resolvedTheme === 'dark' ? 'text-gray-600' : 'text-gray-300'}>•</span>
              <a href="/TermsofService" className={`transition-colors duration-200 ${mounted && resolvedTheme === 'dark'
                ? 'text-gray-400 hover:text-emerald-400'
                : 'text-gray-600 hover:text-emerald-600'
                }`}>
                {footer.termsOfService}
              </a>
            </div>

            <div className={`text-sm text-center lg:text-right order-3 ${mounted && resolvedTheme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}>
              {footer.poweredByPrefix && `${footer.poweredByPrefix} `}
              <a href="https://www.linkedin.com/company/hirekarma-pvt-ltd/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className={`transition-colors duration-200 ${mounted && resolvedTheme === 'dark'
                ? 'text-gray-400 hover:text-emerald-400'
                : 'text-gray-600 hover:text-emerald-600'
                }`}>
                {footer.poweredByCompany}
              </a>
              {footer.poweredBySuffix && ` ${footer.poweredBySuffix}`}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;