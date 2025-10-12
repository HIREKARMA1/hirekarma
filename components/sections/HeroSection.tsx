"use client";

import React, { useEffect, useState } from 'react';

// Type declaration for lottie-player custom element
interface LottiePlayerProps {
  src?: string;
  background?: string;
  speed?: string | number;
  style?: React.CSSProperties;
  loop?: boolean;
  autoplay?: boolean;
  controls?: boolean;
  mode?: string;
  direction?: string | number;
  playMode?: string;
  hover?: boolean;
  renderer?: string;
  rendererConfig?: Record<string, unknown>;
  [key: string]: unknown;
}

const HeroSection: React.FC = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        // Set client-side flag
        setIsClient(true);
        
        // Check if lottie-player is already defined
        if (typeof window !== 'undefined' && typeof customElements !== 'undefined' && !customElements.get('lottie-player')) {
            // Load Lottie player dynamically only if not already loaded
            const script = document.createElement('script');
            script.src = 'https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js';
            script.async = true;
            document.body.appendChild(script);

            return () => {
                // Only remove the script tag, the custom element will remain registered
                if (document.body.contains(script)) {
                    document.body.removeChild(script);
                }
            };
        }
    }, []);

    return (
        <section className="relative min-h-screen bg-white overflow-hidden">

            <div className="relative content-container pt-24 pb-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">

                    {/* Left Content */}
                    <div className="space-y-8 animate-fade-in-up">
                        {/* Badge */}
                        <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-full text-sm font-medium text-cyan-800 border border-cyan-200">
                            <span className="w-2 h-2 bg-cyan-500 rounded-full mr-2 animate-pulse"></span>
                            India&apos;s Leading Talent Solutions Platform
                        </div>

                        {/* Main Heading */}
                        <div className="space-y-4">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                End-to-End Talent Solutions
                                <span className="block bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                                    From Training to Hiring
                                </span>
                            </h1>
                            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                                Simplify campus recruitment with HireKarma — India&apos;s leading platform for end-to-end hiring,
                                upskilling, and staffing solutions. Access pre-vetted, job-ready talent from top government and private colleges.
                            </p>
                        </div>

                        {/* Key Benefits */}
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl border border-gray-200">
                                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-sm">99%</span>
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900">Placement Success</p>
                                    <p className="text-sm text-gray-600">Rate increase</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-xl border border-gray-200">
                                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-sm">10K+</span>
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-900">Students Trained</p>
                                    <p className="text-sm text-gray-600">Career ready</p>
                                </div>
                            </div>
                        </div>


                        {/* Trust Indicators */}
                        <div className="pt-8 border-t border-gray-200">
                            <p className="text-sm text-gray-500 mb-4">Trusted by Leading Institutions</p>
                            <div className="flex flex-wrap items-center gap-6 opacity-60">
                                <div className="text-lg font-bold text-gray-700">Utkal University</div>
                                <div className="text-lg font-bold text-gray-700">Bangalore Institute</div>
                                <div className="text-lg font-bold text-gray-700">Odisha Colleges</div>
                                <div className="text-lg font-bold text-gray-700">+650 Partners</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Lottie Animation */}
                    <div className="relative animate-fade-in-right bg-transparent">
                        <div className="relative z-10">
                            {isClient ? (
                                React.createElement('lottie-player', {
                                    src: "/assets/hero.json",
                                    background: "transparent",
                                    speed: "1",
                                    style: { width: '100%', height: '600px', backgroundColor: 'transparent' },
                                    loop: true,
                                    autoplay: true
                                } as LottiePlayerProps)
                            ) : (
                                <div className="w-full h-[600px] bg-transparent rounded-2xl flex items-center justify-center">
                                    <div className="text-gray-500">Loading animation...</div>
                                </div>
                            )}
                        </div>

                        {/* Floating Elements */}
                        <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full opacity-20 animate-float"></div>
                        <div className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 animate-float-delayed"></div>
                        <div className="absolute top-1/2 right-20 w-12 h-12 bg-gradient-to-r from-cyan-300 to-blue-300 rounded-full opacity-30 animate-pulse"></div>
                    </div>
                </div>

                {/* Bottom Stats */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in-up-delayed">
                    <div className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300">
                        <div className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">980+</div>
                        <p className="text-gray-600 mt-2">Trusted Companies</p>
                    </div>

                    <div className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300">
                        <div className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">130+</div>
                        <p className="text-gray-600 mt-2">Partnered Colleges</p>
                    </div>

                    <div className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300">
                        <div className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">22K+</div>
                        <p className="text-gray-600 mt-2">Success Stories</p>
                    </div>

                    <div className="text-center p-6 bg-gray-50 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300">
                        <div className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">200K+</div>
                        <p className="text-gray-600 mt-2">Impact Created</p>
                    </div>
                </div>
            </div>

            {/* Custom Animations */}
            <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in-up-delayed {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out 0.3s both;
        }

        .animate-fade-in-up-delayed {
          animation: fade-in-up 0.8s ease-out 0.6s both;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 3s ease-in-out infinite 1.5s;
        }

        /* Ensure Lottie animation has transparent background */
        lottie-player {
          background: transparent !important;
          background-color: transparent !important;
        }
        
        /* Ensure no background shows through */
        lottie-player > div {
          background: transparent !important;
          background-color: transparent !important;
        }
        
        lottie-player svg {
          background: transparent !important;
          background-color: transparent !important;
        }
      `}</style>
        </section>
    );
};

export default HeroSection;
