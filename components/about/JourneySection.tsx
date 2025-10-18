"use client";

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Calendar, MapPin, Users } from 'lucide-react';

const JourneySection: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative content-container py-20">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left Content */}
        <div className="space-y-8 lg:space-y-10">
          <div className="space-y-6">
            <h2
              className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight ${
                mounted && resolvedTheme === 'dark'
                  ? 'text-gray-100'
                  : 'text-gray-900'
              }`}
            >
              The Journey Begins
              <span
                className={`block mt-2 text-lg sm:text-xl lg:text-2xl xl:text-3xl font-medium ${
                  mounted && resolvedTheme === 'dark'
                    ? 'text-blue-400'
                    : 'text-blue-600'
                }`}
              >
                Our Founding Story
              </span>
            </h2>
          </div>

          <div className="space-y-4">
            <p
              className={`text-lg sm:text-xl leading-relaxed max-w-2xl ${
                mounted && resolvedTheme === 'dark'
                  ? 'text-gray-300'
                  : 'text-gray-600'
              }`}
            >
              Founded in{' '}
              <strong
                className={`${
                  mounted && resolvedTheme === 'dark'
                    ? 'text-gray-200'
                    : 'text-gray-700'
                }`}
              >
                Bhubaneswar in 2020
              </strong>{' '}
              by{' '}
              <strong
                className={`${
                  mounted && resolvedTheme === 'dark'
                    ? 'text-gray-200'
                    : 'text-gray-700'
                }`}
              >
                Sohan Kumar Dey
              </strong>{' '}
              and{' '}
              <strong
                className={`${
                  mounted && resolvedTheme === 'dark'
                    ? 'text-gray-200'
                    : 'text-gray-700'
                }`}
              >
                Rohit Samantaray
              </strong>
              , HireKarma arose from a passion to bridge the gap between academia
              and industry, particularly for students in tier-2 and tier-3
              colleges across India.
            </p>
          </div>

          {/* Key Info Cards Section */}
          <div className="grid grid-cols-2 gap-4 max-w-md">
            {/* Founded Card */}
            <div
              className={`p-5 rounded-2xl border shadow-sm ${
                mounted && resolvedTheme === 'dark'
                  ? 'bg-gradient-to-br from-blue-900/20 to-blue-800/10 border-blue-700/40'
                  : 'bg-gradient-to-br from-blue-50 to-blue-100/40 border-blue-200'
              }`}
            >
              <div className="space-y-2">
                <div className="flex items-center space-x-2 mb-2">
                  <Calendar
                    className={`w-5 h-5 ${
                      mounted && resolvedTheme === 'dark'
                        ? 'text-blue-400'
                        : 'text-blue-600'
                    }`}
                  />
                  <h3
                    className={`text-sm font-semibold ${
                      mounted && resolvedTheme === 'dark'
                        ? 'text-gray-200'
                        : 'text-gray-700'
                    }`}
                  >
                    Founded
                  </h3>
                </div>
                <div
                  className={`text-3xl font-bold ${
                    mounted && resolvedTheme === 'dark'
                      ? 'text-blue-400'
                      : 'text-blue-600'
                  }`}
                >
                  2020
                </div>
                <div
                  className={`text-sm ${
                    mounted && resolvedTheme === 'dark'
                      ? 'text-gray-400'
                      : 'text-gray-600'
                  }`}
                >
                  Bhubaneswar, India
                </div>
              </div>
            </div>

            {/* Focus Card */}
            <div
              className={`p-5 rounded-2xl border shadow-sm ${
                mounted && resolvedTheme === 'dark'
                  ? 'bg-gradient-to-br from-purple-900/20 to-purple-800/10 border-purple-700/40'
                  : 'bg-gradient-to-br from-purple-50 to-pink-50/40 border-purple-200'
              }`}
            >
              <div className="space-y-2">
                <div className="flex items-center space-x-2 mb-2">
                  <MapPin
                    className={`w-5 h-5 ${
                      mounted && resolvedTheme === 'dark'
                        ? 'text-purple-400'
                        : 'text-purple-600'
                    }`}
                  />
                  <h3
                    className={`text-sm font-semibold ${
                      mounted && resolvedTheme === 'dark'
                        ? 'text-gray-200'
                        : 'text-gray-700'
                    }`}
                  >
                    Focus
                  </h3>
                </div>
                <div
                  className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${
                    mounted && resolvedTheme === 'dark'
                      ? 'from-purple-400 to-pink-400'
                      : 'from-purple-600 to-pink-600'
                  }`}
                >
                  Tier-2 & 3
                </div>
                <div
                  className={`text-sm ${
                    mounted && resolvedTheme === 'dark'
                      ? 'text-gray-400'
                      : 'text-gray-600'
                  }`}
                >
                  Colleges across India
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content - Animated Placeholder */}
        <div className="relative">
          <div
            className={`relative w-full h-[500px] lg:h-[600px] rounded-3xl border overflow-hidden shadow-2xl ${
              mounted && resolvedTheme === 'dark'
                ? 'bg-gradient-to-br from-gray-800 via-gray-800 to-gray-900 border-gray-600'
                : 'bg-gradient-to-br from-gray-50 via-white to-gray-100 border-gray-200'
            }`}
          >
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='${
                    mounted && resolvedTheme === 'dark'
                      ? '%23ffffff'
                      : '%23000000'
                  }' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  backgroundRepeat: 'repeat',
                }}
              ></div>
            </div>

            {/* Placeholder content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-6">
                <div
                  className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center ${
                    mounted && resolvedTheme === 'dark'
                      ? 'bg-gradient-to-br from-blue-600 to-purple-600'
                      : 'bg-gradient-to-br from-blue-500 to-purple-500'
                  }`}
                >
                  <Users className="w-10 h-10 text-white" />
                </div>
                <div className="space-y-2">
                  <p
                    className={`font-semibold text-lg ${
                      mounted && resolvedTheme === 'dark'
                        ? 'text-gray-200'
                        : 'text-gray-700'
                    }`}
                  >
                    Founders Animation
                  </p>
                  <p
                    className={`text-sm max-w-xs mx-auto ${
                      mounted && resolvedTheme === 'dark'
                        ? 'text-gray-400'
                        : 'text-gray-500'
                    }`}
                  >
                    GIF showcasing the founders and early days
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div
              className={`absolute top-12 right-12 w-16 h-16 rounded-full animate-pulse ${
                mounted && resolvedTheme === 'dark'
                  ? 'bg-gradient-to-r from-blue-500/30 to-purple-500/30'
                  : 'bg-gradient-to-r from-blue-400/20 to-purple-400/20'
              }`}
            ></div>
            <div
              className={`absolute bottom-12 left-12 w-12 h-12 rounded-full animate-pulse delay-1000 ${
                mounted && resolvedTheme === 'dark'
                  ? 'bg-gradient-to-r from-purple-500/30 to-pink-500/30'
                  : 'bg-gradient-to-r from-purple-400/20 to-pink-400/20'
              }`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JourneySection;
