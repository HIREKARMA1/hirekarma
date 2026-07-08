"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { BookOpen, FileText, Lightbulb, ArrowRight, Search } from "lucide-react";

import KnowledgeHubHeader from "@/components/resources/KnowledgeHubHeader";
import {
  ResourcesExtraLocaleProvider,
  useResourcesExtraLocale,
} from "@/contexts/ResourcesExtraLocaleContext";

function KnowledgeHubPageInner() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  const { content } = useResourcesExtraLocale();
  const hub = content.knowledgeHub;

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  const categoryLabelById = Object.fromEntries(
    hub.categories.map((cat) => [cat.id, cat.label])
  );

  const filteredArticles = hub.articles.filter((article) => {
    const matchesCategory =
      selectedCategory === "all" || article.categoryId === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticles = hub.articles.filter((article) => article.featured);

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
          <KnowledgeHubHeader />

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
                    placeholder={hub.searchPlaceholder}
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
                  {hub.categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                        selectedCategory === category.id
                          ? "bg-blue-600 text-white shadow-lg"
                          : mounted && resolvedTheme === "dark"
                            ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {category.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="relative content-container py-8">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center gap-3 mb-10">
                <Lightbulb
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
                  {hub.featuredTitle}
                </h2>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 mb-16">
                {featuredArticles.map((article) => (
                  <div
                    key={article.id}
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
                          src={article.image}
                          alt={article.title}
                          width={600}
                          height={400}
                          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded-full text-sm font-semibold bg-blue-600 text-white">
                          {categoryLabelById[article.categoryId] ??
                            article.categoryId}
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
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>

                    <h3
                      className={`text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors ${
                        mounted && resolvedTheme === "dark"
                          ? "text-gray-100"
                          : "text-gray-900"
                      }`}
                    >
                      {article.title}
                    </h3>

                    <p
                      className={`leading-relaxed mb-4 ${
                        mounted && resolvedTheme === "dark"
                          ? "text-gray-300"
                          : "text-gray-600"
                      }`}
                    >
                      {article.excerpt}
                    </p>

                    <div
                      className={`flex items-center gap-2 font-semibold group-hover:gap-3 transition-all ${
                        mounted && resolvedTheme === "dark"
                          ? "text-blue-400"
                          : "text-blue-600"
                      }`}
                    >
                      {hub.readMore} <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative content-container py-20">
            <div className="max-w-7xl mx-auto">
              <div className="flex items-center gap-3 mb-10">
                <BookOpen
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
                  {hub.allTitle}
                </h2>
              </div>

              {filteredArticles.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredArticles.map((article) => (
                    <div
                      key={article.id}
                      className={`rounded-xl border shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 p-6 text-center group ${
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
                            src={article.image}
                            alt={article.title}
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
                            {categoryLabelById[article.categoryId] ??
                              article.categoryId}
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
                        <span>{article.date}</span>
                        <span>•</span>
                        <span>{article.readTime}</span>
                      </div>

                      <h3
                        className={`text-lg font-bold mb-2 group-hover:text-blue-600 transition-colors line-clamp-2 ${
                          mounted && resolvedTheme === "dark"
                            ? "text-gray-100"
                            : "text-gray-900"
                        }`}
                      >
                        {article.title}
                      </h3>

                      <p
                        className={`text-sm leading-relaxed line-clamp-3 ${
                          mounted && resolvedTheme === "dark"
                            ? "text-gray-300"
                            : "text-gray-600"
                        }`}
                      >
                        {article.excerpt}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <FileText
                    className={`w-16 h-16 mx-auto mb-4 ${
                      mounted && resolvedTheme === "dark"
                        ? "text-gray-600"
                        : "text-gray-400"
                    }`}
                  />
                  <p
                    className={`text-xl ${
                      mounted && resolvedTheme === "dark"
                        ? "text-gray-400"
                        : "text-gray-500"
                    }`}
                  >
                    {hub.empty}
                  </p>
                </div>
              )}
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
                  {hub.subscribe.title}
                </h2>
                <p
                  className={`text-xl mb-10 ${
                    mounted && resolvedTheme === "dark"
                      ? "text-gray-300"
                      : "text-gray-600"
                  }`}
                >
                  {hub.subscribe.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                  <input
                    type="email"
                    placeholder={hub.subscribe.emailPlaceholder}
                    className={`flex-1 px-6 py-4 rounded-xl focus:outline-none focus:ring-2 ${
                      mounted && resolvedTheme === "dark"
                        ? "bg-gray-800 border-gray-600 text-white focus:ring-blue-500"
                        : "border-gray-300 focus:ring-blue-500 focus:border-transparent"
                    }`}
                  />
                  <button className="px-8 py-4 font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 bg-blue-600 text-white hover:bg-blue-500">
                    {hub.subscribe.cta}
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

export default function KnowledgeHubPage() {
  return (
    <ResourcesExtraLocaleProvider>
      <KnowledgeHubPageInner />
    </ResourcesExtraLocaleProvider>
  );
}
