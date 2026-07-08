"use client";

import React, { useState } from "react";
import {
  HelpCircle,
  ChevronDown,
  Search,
  GraduationCap,
  Briefcase,
  School,
  Settings,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";

import {
  ResourcesExtraLocaleProvider,
  useResourcesExtraLocale,
} from "@/contexts/ResourcesExtraLocaleContext";

const categoryIcons: Record<string, LucideIcon> = {
  students: GraduationCap,
  corporate: Briefcase,
  universities: School,
  platform: Settings,
};

function FAQPageInner() {
  const { content } = useResourcesExtraLocale();
  const faq = content.faq;

  const [activeCategory, setActiveCategory] = useState(
    faq.categories[0]?.id ?? "students"
  );
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const currentCategory = faq.categories.find((cat) => cat.id === activeCategory);

  const filteredFAQs =
    currentCategory?.faqs.filter(
      (item) =>
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchQuery.toLowerCase())
    ) ?? [];

  const toggleFAQ = (categoryId: string, faqIndex: number) => {
    const faqId = `${categoryId}-${faqIndex}`;
    setOpenFAQ(openFAQ === faqId ? null : faqId);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-grow">
        <section className="relative py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
          <div className="content-container">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
                <HelpCircle className="w-4 h-4" />
                <span className="text-sm font-semibold">{faq.badge}</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-blue-700 leading-tight mb-8">
                {faq.title}
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto mb-10">
                {faq.description}
              </p>

              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
                <input
                  type="text"
                  placeholder={faq.searchPlaceholder}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-16 pr-6 py-5 border-2 border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-8 border-b border-gray-200 dark:border-gray-700 sticky top-20 z-30 backdrop-blur-lg bg-white/95 dark:bg-gray-900/95">
          <div className="content-container">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-wrap gap-3 justify-center">
                {faq.categories.map((category) => {
                  const Icon = categoryIcons[category.id] ?? HelpCircle;
                  return (
                    <button
                      key={category.id}
                      onClick={() => {
                        setActiveCategory(category.id);
                        setSearchQuery("");
                      }}
                      className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                        activeCategory === category.id
                          ? "bg-blue-600 text-white shadow-lg"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      {category.name}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-16 lg:py-20 bg-white dark:bg-gray-900">
          <div className="content-container">
            <div className="max-w-4xl mx-auto">
              {filteredFAQs.length > 0 ? (
                <div className="space-y-4">
                  {filteredFAQs.map((item, index) => {
                    const faqId = `${activeCategory}-${index}`;
                    const isOpen = openFAQ === faqId;

                    return (
                      <div
                        key={index}
                        className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:border-blue-300 transition-all duration-300"
                      >
                        <button
                          onClick={() => toggleFAQ(activeCategory, index)}
                          className="w-full flex items-center justify-between p-6 text-left hover:bg-blue-50 transition-colors duration-300"
                        >
                          <span className="text-lg font-bold text-gray-900 pr-8">
                            {item.question}
                          </span>
                          <ChevronDown
                            className={`w-6 h-6 text-blue-600 flex-shrink-0 transition-transform duration-300 ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        <div
                          className={`overflow-hidden transition-all duration-300 ${
                            isOpen ? "max-h-96" : "max-h-0"
                          }`}
                        >
                          <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                            {item.answer}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center py-20">
                  <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-xl text-gray-500">{faq.emptyTitle}</p>
                  <p className="text-gray-400 mt-2">{faq.emptyHint}</p>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="relative py-16 bg-gray-50 dark:bg-gray-800">
          <div className="content-container">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
                {faq.stillNeedHelp.title}
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                {faq.stillNeedHelp.cards.map((card, index) => (
                  <div
                    key={index}
                    className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                  >
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      {index === 2 ? (
                        <HelpCircle className="w-8 h-8 text-blue-600" />
                      ) : (
                        <MessageCircle className="w-8 h-8 text-blue-600" />
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {card.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{card.description}</p>
                    <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300">
                      {card.cta}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-16 lg:py-24 bg-gradient-to-br from-blue-700 to-blue-900 dark:from-blue-800 dark:to-blue-950">
          <div className="content-container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                {faq.cta.title}
              </h2>
              <p className="text-xl text-blue-100 mb-10">{faq.cta.description}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-blue-700 font-bold rounded-xl hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                  {faq.cta.primary}
                </button>
                <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300">
                  {faq.cta.secondary}
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default function FAQPage() {
  return (
    <ResourcesExtraLocaleProvider>
      <FAQPageInner />
    </ResourcesExtraLocaleProvider>
  );
}
