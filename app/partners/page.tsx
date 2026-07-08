"use client";

import React from "react";
import { GraduationCap, Briefcase, Award, Handshake } from "lucide-react";

import {
  PartnersLocaleProvider,
  usePartnersLocale,
} from "@/contexts/PartnersLocaleContext";

function PartnersPageInner() {
  const { content } = usePartnersLocale();
  const { hero, stats, college, corporate, mission, cta } = content;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-grow">
        {/* Header Section */}
        <section className="relative py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
          <div className="content-container">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
                <Handshake className="w-4 h-4" />
                <span className="text-sm font-semibold">{hero.badge}</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-blue-700 leading-tight mb-8">
                {hero.title}
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-6">
                {hero.description}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
                {hero.trustLine}
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="relative py-12 bg-white dark:bg-gray-900">
          <div className="content-container">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center p-6">
                    <div className="text-5xl font-bold text-blue-700 mb-3">
                      {stat.value}
                    </div>
                    <p className="text-lg text-gray-700 font-medium">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* College Partners Section */}
        <section className="relative py-16 lg:py-24 bg-white dark:bg-gray-900">
          <div className="content-container">
            <div className="max-w-7xl mx-auto mb-12">
              <div className="text-center mb-8">
                <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4">
                  <GraduationCap className="w-4 h-4" />
                  <span className="text-sm font-semibold">{college.badge}</span>
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold text-blue-700 mb-6">
                  {college.title}
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-4">
                  {college.description}
                </p>
                <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
                  {college.detail}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {college.benefits.map((benefit) => (
                  <div
                    key={benefit.title}
                    className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl"
                  >
                    <h3 className="font-bold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden py-8 bg-gradient-to-r from-blue-50 via-white to-blue-50">
            <div className="flex animate-scroll">
              {[...college.partners, ...college.partners].map(
                (partner, index) => (
                  <div
                    key={`${partner.id}-${index}`}
                    className="flex-shrink-0 w-96 mx-4"
                  >
                    <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center flex-shrink-0">
                          <GraduationCap className="w-8 h-8 text-blue-600" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 line-clamp-2">
                          {partner.name}
                        </h3>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                        {partner.description}
                      </p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* Corporate Partners Section */}
        <section className="relative py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900">
          <div className="content-container">
            <div className="max-w-7xl mx-auto mb-12">
              <div className="text-center mb-8">
                <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-4">
                  <Briefcase className="w-4 h-4" />
                  <span className="text-sm font-semibold">
                    {corporate.badge}
                  </span>
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold text-blue-700 mb-6">
                  {corporate.title}
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-4">
                  {corporate.description}
                </p>
                <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto">
                  {corporate.detail}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {corporate.benefits.map((benefit) => (
                  <div
                    key={benefit.title}
                    className="bg-white p-6 rounded-xl border border-gray-200 shadow-md"
                  >
                    <h3 className="font-bold text-gray-900 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden py-8 bg-white">
            <div className="flex animate-scroll-reverse">
              {[
                ...corporate.partners,
                ...corporate.partners,
                ...corporate.partners,
              ].map((partner, index) => (
                <div
                  key={`${partner.id}-${index}`}
                  className="flex-shrink-0 w-96 mx-4"
                >
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl border border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Briefcase className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 line-clamp-2">
                        {partner.name}
                      </h3>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed line-clamp-3">
                      {partner.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="relative py-16 lg:py-24 bg-white dark:bg-gray-900">
          <div className="content-container">
            <div className="max-w-4xl mx-auto text-center">
              <Award className="w-16 h-16 text-blue-600 mx-auto mb-6" />
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                {mission.title}
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {mission.paragraph1}
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                {mission.paragraph2}
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 lg:py-24 bg-gradient-to-br from-blue-700 to-blue-900 dark:from-blue-800 dark:to-blue-950">
          <div className="content-container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                {cta.title}
              </h2>
              <p className="text-xl text-blue-100 mb-10">{cta.description}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                  {cta.primary}
                </button>
                <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300">
                  {cta.secondary}
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }

        .animate-scroll-reverse {
          animation: scroll-reverse 40s linear infinite;
        }

        .animate-scroll-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}

export default function PartnersPage() {
  return (
    <PartnersLocaleProvider>
      <PartnersPageInner />
    </PartnersLocaleProvider>
  );
}
