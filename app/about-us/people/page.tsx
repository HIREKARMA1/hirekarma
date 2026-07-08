"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Users, Star, Heart, Info, X, Linkedin, Instagram, Mail } from "lucide-react";

import { Loader } from "@/components/shortlisted/ui/loader";
import {
  AboutLocaleProvider,
  useAboutLocale,
} from "@/contexts/AboutLocaleContext";
import { getTeamByCategory } from "@/services/about-page";
import type { ResolvedTeamMember, TeamCategory } from "@/types/about-page";

async function fetchTeamByCategory(
  locale: Parameters<typeof getTeamByCategory>[0],
  category: TeamCategory
): Promise<ResolvedTeamMember[]> {
  await new Promise((r) => setTimeout(r, 600));
  return getTeamByCategory(locale, category);
}

function PeoplePageInner() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<TeamCategory>("advisory");
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { resolvedTheme } = useTheme();
  const { locale, content } = useAboutLocale();
  const people = content.people;
  const cultureIcons = {
    inclusive: Heart,
    innovative: Star,
    collaborative: Users,
  } as const;

  const [filteredMembers, setFilteredMembers] = useState<ResolvedTeamMember[]>(
    () => getTeamByCategory(locale, "advisory")
  );

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    setExpandedIndex(null);
    setIsLoading(true);
    fetchTeamByCategory(locale, activeTab).then((members) => {
      setFilteredMembers(members);
      setIsLoading(false);
    });
  }, [locale, activeTab]);

  const handleTabChange = (category: TeamCategory) => {
    if (category === activeTab) return;
    setActiveTab(category);
  };

  return (
    <div className="min-h-screen flex flex-col transition-all duration-500">
      <main className="flex-grow">
        <section className="relative min-h-screen transition-all duration-500">
          <div className="relative content-container pt-20 pb-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="space-y-2 lg:space-y-1">
                <div className="space-y-4">
                  <h1
                    className={`text-2xl sm:text-4xl lg:text-4xl xl:text-6xl font-bold leading-tight tracking-tight ${
                      mounted && resolvedTheme === "dark"
                        ? "text-gray-100"
                        : "text-gray-900"
                    }`}
                  >
                    {people.title}
                    <span
                      className={`block mt-2 text-lg sm:text-xl lg:text-2xl xl:text-3xl font-medium ${
                        mounted && resolvedTheme === "dark"
                          ? "text-cyan-300"
                          : "text-cyan-700"
                      }`}
                    >
                      {people.subtitle}
                    </span>
                  </h1>
                </div>

                <div className="space-y-3">
                  <p
                    className={`text-lg sm:text-xl leading-relaxed max-w-2xl ${
                      mounted && resolvedTheme === "dark"
                        ? "text-gray-300"
                        : "text-gray-600"
                    }`}
                  >
                    {people.descriptionBefore}{" "}
                    <strong
                      className={`${
                        mounted && resolvedTheme === "dark"
                          ? "text-gray-200"
                          : "text-gray-700"
                      }`}
                    >
                      {people.descriptionHighlight}
                    </strong>{" "}
                    {people.descriptionAfter}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative content-container py-8">
            <div className="mb-8">
              <div className="flex flex-wrap justify-start gap-3 mb-6">
                {(
                  [
                    ["advisory", people.tabs.advisory],
                    ["leadership", people.tabs.leadership],
                    ["core", people.tabs.core],
                  ] as const
                ).map(([category, label]) => (
                  <button
                    key={category}
                    onClick={() => handleTabChange(category)}
                    disabled={isLoading}
                    className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed ${
                      activeTab === category
                        ? "bg-cyan-500 text-white shadow-md"
                        : `border ${
                            mounted && resolvedTheme === "dark"
                              ? "border-gray-600 text-gray-400 hover:border-gray-500 hover:text-gray-300"
                              : "border-gray-300 text-gray-600 hover:border-gray-400 hover:text-gray-700"
                          }`
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>

              <div
                className={`h-px w-full ${
                  mounted && resolvedTheme === "dark"
                    ? "bg-gray-700"
                    : "bg-gray-200"
                }`}
              ></div>
            </div>

            <div className="min-h-[320px]">
              {isLoading ? (
                <div className="flex flex-col items-center justify-center py-20">
                  <Loader
                    size="lg"
                    className="border-cyan-500 border-t-transparent"
                  />
                  <p
                    className={`mt-4 text-sm ${
                      mounted && resolvedTheme === "dark"
                        ? "text-gray-400"
                        : "text-gray-500"
                    }`}
                  >
                    {people.loading}
                  </p>
                </div>
              ) : filteredMembers.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredMembers.map((member, index) => (
                    <div
                      key={`${member.name}-${index}`}
                      className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                    >
                      {expandedIndex === index ? (
                        <div className="bg-gray-900 text-white h-96 relative flex flex-col">
                          <button
                            onClick={() => setExpandedIndex(null)}
                            className="absolute top-4 right-4 w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-200 z-10"
                            aria-label={people.closeAria}
                          >
                            <X className="w-4 h-4 text-white" />
                          </button>

                          <div className="overflow-y-auto p-6 pr-14 space-y-3 flex-1 custom-scrollbar">
                            <h3 className="text-xl font-bold">{member.name}</h3>
                            <p className="text-gray-300 text-sm">{member.role}</p>
                            <p className="text-gray-300 leading-relaxed text-sm pt-2">
                              {member.description}
                            </p>

                            <div className="flex gap-3 pt-4">
                              {member.socialLinks.linkedin && (
                                <a
                                  href={member.socialLinks.linkedin}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-200"
                                  aria-label={people.linkedinAria}
                                >
                                  <Linkedin className="w-4 h-4 text-white" />
                                </a>
                              )}
                              {member.socialLinks.instagram && (
                                <a
                                  href={member.socialLinks.instagram}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-200"
                                  aria-label={people.instagramAria}
                                >
                                  <Instagram className="w-4 h-4 text-white" />
                                </a>
                              )}
                              {member.socialLinks.email && (
                                <a
                                  href={member.socialLinks.email}
                                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-200"
                                  aria-label={people.emailAria}
                                >
                                  <Mail className="w-4 h-4 text-white" />
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      ) : (
                        <>
                          <div className="relative h-96 w-full bg-black">
                            <Image
                              src={member.image}
                              alt={member.name}
                              fill
                              className="object-cover object-center"
                            />

                            <button
                              onClick={() => setExpandedIndex(index)}
                              className="absolute top-4 right-4 w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-lg"
                              aria-label={people.viewDetailsAria}
                            >
                              <Info className="w-4 h-4 text-gray-900" />
                            </button>
                          </div>

                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/90 to-transparent p-6">
                            <h3 className="text-white text-xl font-bold mb-1">
                              {member.name}
                            </h3>
                            <p className="text-gray-300 text-sm">{member.role}</p>
                          </div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <Users
                    className={`w-16 h-16 mx-auto mb-4 ${
                      mounted && resolvedTheme === "dark"
                        ? "text-gray-600"
                        : "text-gray-400"
                    }`}
                  />
                  <h3
                    className={`text-2xl font-bold mb-2 ${
                      mounted && resolvedTheme === "dark"
                        ? "text-gray-300"
                        : "text-gray-700"
                    }`}
                  >
                    {people.emptyTitle}
                  </h3>
                  <p
                    className={`text-lg ${
                      mounted && resolvedTheme === "dark"
                        ? "text-gray-400"
                        : "text-gray-500"
                    }`}
                  >
                    {people.emptyDescription}
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="relative content-container py-20">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2
                    className={`text-4xl sm:text-5xl font-bold leading-tight tracking-tight mb-6 ${
                      mounted && resolvedTheme === "dark"
                        ? "text-gray-100"
                        : "text-gray-900"
                    }`}
                  >
                    {people.culture.title}
                    <span
                      className={`block mt-2 text-lg sm:text-xl lg:text-2xl font-medium ${
                        mounted && resolvedTheme === "dark"
                          ? "text-cyan-300"
                          : "text-cyan-700"
                      }`}
                    >
                      {people.culture.subtitle}
                    </span>
                  </h2>
                  <p
                    className={`text-xl leading-relaxed mb-8 ${
                      mounted && resolvedTheme === "dark"
                        ? "text-gray-300"
                        : "text-gray-600"
                    }`}
                  >
                    {people.culture.description}
                  </p>

                  <div className="space-y-6">
                    {people.culture.values.map((value) => {
                      const Icon = cultureIcons[value.id];
                      return (
                        <div key={value.id} className="flex items-start gap-4">
                          <div
                            className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${
                              mounted && resolvedTheme === "dark"
                                ? "bg-gray-800"
                                : "bg-blue-100"
                            }`}
                          >
                            <Icon
                              className={`w-6 h-6 ${
                                mounted && resolvedTheme === "dark"
                                  ? "text-blue-400"
                                  : "text-blue-600"
                              }`}
                            />
                          </div>
                          <div>
                            <h3
                              className={`text-xl font-bold mb-2 ${
                                mounted && resolvedTheme === "dark"
                                  ? "text-gray-100"
                                  : "text-gray-900"
                              }`}
                            >
                              {value.title}
                            </h3>
                            <p
                              className={`${
                                mounted && resolvedTheme === "dark"
                                  ? "text-gray-400"
                                  : "text-gray-600"
                              }`}
                            >
                              {value.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                      <Image
                        src="https://hirekarma.s3.us-east-1.amazonaws.com/hirekarma_ui/about-us/culture/bputojob-min.jpg"
                        alt={people.culture.imageAlts.collaboration}
                        width={300}
                        height={400}
                        className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                      <Image
                        src="https://hirekarma.s3.us-east-1.amazonaws.com/hirekarma_ui/about-us/culture/diwali-celibration.jpg"
                        alt={people.culture.imageAlts.celebration}
                        width={300}
                        height={300}
                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <div className="space-y-4 pt-8">
                    <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                      <Image
                        src="https://hirekarma.s3.us-east-1.amazonaws.com/hirekarma_ui/about-us/culture/ganeshpuaj.jpg"
                        alt={people.culture.imageAlts.festival}
                        width={300}
                        height={300}
                        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                      <Image
                        src="https://hirekarma.s3.us-east-1.amazonaws.com/hirekarma_ui/about-us/culture/potloak.jpg"
                        alt={people.culture.imageAlts.workspace}
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

export default function PeoplePage() {
  return (
    <AboutLocaleProvider>
      <PeoplePageInner />
    </AboutLocaleProvider>
  );
}
