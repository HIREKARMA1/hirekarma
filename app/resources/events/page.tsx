"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { Calendar, ArrowRight, Search } from "lucide-react";

import {
  ResourcesExtraLocaleProvider,
  useResourcesExtraLocale,
} from "@/contexts/ResourcesExtraLocaleContext";

function EventsPageInner() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  const { content } = useResourcesExtraLocale();
  const eventsContent = content.events;

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => setMounted(true), []);

  const categoryLabelById = Object.fromEntries(
    eventsContent.categories.map((cat) => [cat.id, cat.label])
  );

  const filteredUpcoming = eventsContent.events.filter((ev) => {
    const matchesCategory =
      selectedCategory === "all" || ev.categoryId === selectedCategory;
    const matchesSearch =
      ev.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ev.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featured = eventsContent.events.filter((ev) => ev.featured);

  return (
    <div
      className={`min-h-screen flex flex-col transition-all duration-500 ${
        mounted && resolvedTheme === "dark" ? "bg-gray-900" : "bg-white"
      }`}
    >
      <main className="flex-grow">
        <section
          className={`relative min-h-screen transition-all duration-500 ${
            mounted && resolvedTheme === "dark" ? "bg-gray-900" : "bg-white"
          }`}
        >
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
                    {eventsContent.title}
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
                    {eventsContent.description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative content-container py-8">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="relative w-full md:w-96">
                  <Search
                    className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 ${
                      mounted && resolvedTheme === "dark"
                        ? "text-gray-400"
                        : "text-gray-400"
                    }`}
                  />
                  <input
                    type="text"
                    placeholder={eventsContent.searchPlaceholder}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className={`w-full pl-12 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 ${
                      mounted && resolvedTheme === "dark"
                        ? "bg-gray-800 border-gray-600 text-white focus:ring-blue-500"
                        : "border-gray-300 focus:ring-blue-500 focus:border-transparent"
                    }`}
                  />
                </div>

                <div className="flex flex-wrap gap-2">
                  {eventsContent.categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                        selectedCategory === cat.id
                          ? "bg-blue-600 text-white shadow-lg"
                          : mounted && resolvedTheme === "dark"
                            ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="relative content-container py-8">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center gap-3 mb-10">
                <Calendar
                  className={`w-8 h-8 ${
                    mounted && resolvedTheme === "dark"
                      ? "text-blue-400"
                      : "text-blue-600"
                  }`}
                />
                <h2
                  className={`text-3xl sm:text-4xl font-bold ${
                    mounted && resolvedTheme === "dark"
                      ? "text-gray-100"
                      : "text-gray-900"
                  }`}
                >
                  {eventsContent.featuredTitle}
                </h2>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 mb-16">
                {featured.map((ev) => (
                  <div
                    key={ev.id}
                    className={`rounded-xl border shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 p-6 group ${
                      mounted && resolvedTheme === "dark"
                        ? "bg-gradient-to-br from-blue-900/20 to-blue-800/10 border-blue-700/30"
                        : "bg-gradient-to-br from-blue-50 to-blue-100/50 border-blue-200"
                    }`}
                  >
                    <div className="relative mb-6">
                      <div
                        className={`w-full h-64 rounded-xl overflow-hidden border transition-colors duration-300 ${
                          mounted && resolvedTheme === "dark"
                            ? "border-blue-600/50 group-hover:border-blue-400/70"
                            : "border-blue-300/70 group-hover:border-blue-200"
                        }`}
                      >
                        <Image
                          src={ev.image}
                          alt={ev.title}
                          width={600}
                          height={400}
                          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full text-sm font-semibold bg-blue-600 text-white">
                          {categoryLabelById[ev.categoryId] ?? ev.categoryId}
                        </span>
                      </div>
                    </div>

                    <div
                      className={`flex items-center gap-4 text-sm mb-4 ${
                        mounted && resolvedTheme === "dark"
                          ? "text-gray-400"
                          : "text-gray-500"
                      }`}
                    >
                      <span>{ev.date}</span>
                      <span>•</span>
                      <span>{ev.time}</span>
                    </div>

                    <h3
                      className={`text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors ${
                        mounted && resolvedTheme === "dark"
                          ? "text-gray-100"
                          : "text-gray-900"
                      }`}
                    >
                      {ev.title}
                    </h3>

                    <p
                      className={`leading-relaxed mb-4 ${
                        mounted && resolvedTheme === "dark"
                          ? "text-gray-300"
                          : "text-gray-600"
                      }`}
                    >
                      {ev.description}
                    </p>

                    <div
                      className={`flex items-center gap-2 font-semibold group-hover:gap-3 transition-all ${
                        mounted && resolvedTheme === "dark"
                          ? "text-blue-400"
                          : "text-blue-600"
                      }`}
                    >
                      {eventsContent.register} <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative content-container py-20">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center gap-3 mb-10">
                <Calendar
                  className={`w-8 h-8 ${
                    mounted && resolvedTheme === "dark"
                      ? "text-blue-400"
                      : "text-blue-600"
                  }`}
                />
                <h2
                  className={`text-3xl sm:text-4xl font-bold ${
                    mounted && resolvedTheme === "dark"
                      ? "text-gray-100"
                      : "text-gray-900"
                  }`}
                >
                  {eventsContent.allTitle}
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredUpcoming.map((ev) => (
                  <div
                    key={ev.id}
                    className={`rounded-xl border shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 p-6 group ${
                      mounted && resolvedTheme === "dark"
                        ? "bg-gradient-to-br from-blue-900/20 to-blue-800/10 border-blue-700/30"
                        : "bg-gradient-to-br from-blue-50 to-blue-100/50 border-blue-200"
                    }`}
                  >
                    <div className="relative mb-6">
                      <div
                        className={`w-full h-48 rounded-xl overflow-hidden border transition-colors duration-300 ${
                          mounted && resolvedTheme === "dark"
                            ? "border-blue-600/50 group-hover:border-blue-400/70"
                            : "border-blue-300/70 group-hover:border-blue-200"
                        }`}
                      >
                        <Image
                          src={ev.image}
                          alt={ev.title}
                          width={400}
                          height={300}
                          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="absolute top-3 right-3">
                        <span
                          className={`backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold ${
                            mounted && resolvedTheme === "dark"
                              ? "bg-gray-800/90 text-blue-400"
                              : "bg-white/90 text-blue-600"
                          }`}
                        >
                          {categoryLabelById[ev.categoryId] ?? ev.categoryId}
                        </span>
                      </div>
                    </div>

                    <div
                      className={`flex items-center gap-3 text-xs mb-3 ${
                        mounted && resolvedTheme === "dark"
                          ? "text-gray-400"
                          : "text-gray-500"
                      }`}
                    >
                      <span>{ev.date}</span>
                      <span>•</span>
                      <span>{ev.time}</span>
                    </div>

                    <h3
                      className={`text-lg font-bold mb-2 group-hover:text-blue-600 transition-colors line-clamp-2 ${
                        mounted && resolvedTheme === "dark"
                          ? "text-gray-100"
                          : "text-gray-900"
                      }`}
                    >
                      {ev.title}
                    </h3>

                    <p
                      className={`text-sm leading-relaxed line-clamp-3 ${
                        mounted && resolvedTheme === "dark"
                          ? "text-gray-300"
                          : "text-gray-600"
                      }`}
                    >
                      {ev.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative content-container py-20">
            <div className="max-w-4xl mx-auto text-center">
              <div
                className={`rounded-2xl border shadow-2xl p-12 ${
                  mounted && resolvedTheme === "dark"
                    ? "bg-gradient-to-br from-blue-900/30 to-blue-800/20 border-blue-700/30"
                    : "bg-gradient-to-br from-blue-50 to-blue-100/50 border-blue-200"
                }`}
              >
                <h2
                  className={`text-4xl sm:text-5xl font-bold mb-6 ${
                    mounted && resolvedTheme === "dark"
                      ? "text-blue-400"
                      : "text-blue-700"
                  }`}
                >
                  {eventsContent.subscribe.title}
                </h2>
                <p
                  className={`text-xl mb-10 ${
                    mounted && resolvedTheme === "dark"
                      ? "text-gray-300"
                      : "text-gray-600"
                  }`}
                >
                  {eventsContent.subscribe.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                  <input
                    type="email"
                    placeholder={eventsContent.subscribe.emailPlaceholder}
                    className={`flex-1 px-6 py-4 rounded-xl focus:outline-none focus:ring-2 ${
                      mounted && resolvedTheme === "dark"
                        ? "bg-gray-800 border-gray-600 text-white focus:ring-blue-500"
                        : "border-gray-300 focus:ring-blue-500 focus:border-transparent"
                    }`}
                  />
                  <button className="px-8 py-4 font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 bg-blue-600 text-white hover:bg-blue-500">
                    {eventsContent.subscribe.cta}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default function EventsPage() {
  return (
    <ResourcesExtraLocaleProvider>
      <EventsPageInner />
    </ResourcesExtraLocaleProvider>
  );
}
