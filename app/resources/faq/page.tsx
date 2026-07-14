"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  ChevronDown,
  CircleHelp,
  GraduationCap,
  Mail,
  MessageCircle,
  School,
  Search,
  Settings,
  type LucideIcon,
} from "lucide-react";

import {
  ResourcesExtraLocaleProvider,
  useResourcesExtraLocale,
} from "@/contexts/ResourcesExtraLocaleContext";
import { theme } from "@/config/theme";
import { withHighlightMark } from "@/components/shared/HighlightMark";

const categoryIcons: Record<string, LucideIcon> = {
  students: GraduationCap,
  corporate: Briefcase,
  universities: School,
  platform: Settings,
};

const categoryAccents: Record<string, string> = {
  students: theme.colors.secondary,
  corporate: theme.colors.orange,
  universities: theme.colors.primary,
  platform: theme.colors.green,
};

const helpCardMeta = [
  {
    Icon: MessageCircle,
    href: "/contact",
    accent: theme.colors.secondary,
  },
  {
    Icon: Mail,
    href: "mailto:info@hirekarma.in",
    accent: theme.colors.primary,
  },
  {
    Icon: CircleHelp,
    href: "/resources",
    accent: theme.colors.green,
  },
] as const;

function FAQPageInner() {
  const { content } = useResourcesExtraLocale();
  const faq = content.faq;
  const accent = theme.colors.secondary;
  const primary = theme.colors.primary;
  const ink = theme.colors.ink;
  const yellow = theme.colors.yellow;

  const [activeCategory, setActiveCategory] = useState(
    faq.categories[0]?.id ?? "students"
  );
  const [openFAQ, setOpenFAQ] = useState<string | null>(`${faq.categories[0]?.id ?? "students"}-0`);
  const [searchQuery, setSearchQuery] = useState("");

  const currentCategory = faq.categories.find((cat) => cat.id === activeCategory);
  const categoryAccent = categoryAccents[activeCategory] ?? primary;

  const filteredFAQs = useMemo(
    () =>
      currentCategory?.faqs.filter(
        (item) =>
          item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.answer.toLowerCase().includes(searchQuery.toLowerCase())
      ) ?? [],
    [currentCategory, searchQuery]
  );

  const totalQuestions = faq.categories.reduce(
    (sum, cat) => sum + cat.faqs.length,
    0
  );

  const toggleFAQ = (faqId: string) => {
    setOpenFAQ((current) => (current === faqId ? null : faqId));
  };

  const selectCategory = (id: string) => {
    setActiveCategory(id);
    setSearchQuery("");
    setOpenFAQ(`${id}-0`);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden" style={{ backgroundColor: ink }}>
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,162,229,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,162,229,0.06) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
          <div
            className="absolute -left-24 top-0 h-80 w-80 rounded-full blur-[120px]"
            style={{ backgroundColor: "rgba(27,82,164,0.45)" }}
          />
          <div
            className="absolute right-0 top-1/3 h-72 w-72 rounded-full blur-[110px]"
            style={{ backgroundColor: "rgba(0,162,229,0.22)" }}
          />
        </div>

        <div className="relative content-container pb-12 pt-16 lg:pb-14 lg:pt-20">
          <div className="grid items-end gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
            <div>
              <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/45">
                <Link href="/resources" className="transition hover:text-white/80">
                  Resources
                </Link>
                <span aria-hidden>/</span>
                <span style={{ color: accent }}>{faq.badge}</span>
              </div>

              <h1 className="mt-4 max-w-xl text-[2rem] font-bold leading-[1.12] tracking-tight text-white sm:text-[2.5rem] lg:text-[2.75rem]">
                {withHighlightMark(faq.title, faq.titleHighlight)}
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/65 sm:text-[15px]">
                {faq.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-4 text-sm text-white/55">
                <span className="inline-flex items-center gap-2">
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: yellow }}
                  />
                  {faq.categories.length} categories
                </span>
                <span className="inline-flex items-center gap-2">
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: accent }}
                  />
                  {totalQuestions} answers
                </span>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm sm:p-5">
              <label className="sr-only" htmlFor="faq-search">
                {faq.searchPlaceholder}
              </label>
              <div className="relative">
                <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#0f1622]/4" />
                <input
                  id="faq-search"
                  type="search"
                  placeholder={faq.searchPlaceholder}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-xl border border-transparent bg-white py-3.5 pl-10 pr-4 text-sm text-[#0f1622] outline-none placeholder:text-[#0f1622]/4 focus:border-[#00a2e5]/40"
                />
              </div>
              <p className="mt-3 text-xs text-white/45">
                Tip: try “assessment”, “pricing”, or “integration”.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main FAQ workspace */}
      <section className="bg-[#f6f8fb] py-10 sm:py-14">
        <div className="content-container">
          <div className="grid gap-6 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-8 xl:grid-cols-[280px_minmax(0,1fr)]">
            {/* Category rail */}
            <aside className="lg:sticky lg:top-24 lg:self-start">
              <div className="rounded-2xl border border-[#e6e8ec] bg-white p-3 sm:p-4">
                <p className="px-2 pb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#0f1622]/4">
                  Browse by audience
                </p>
                <div className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible lg:pb-0">
                  {faq.categories.map((category) => {
                    const Icon = categoryIcons[category.id] ?? CircleHelp;
                    const active = activeCategory === category.id;
                    const catAccent = categoryAccents[category.id] ?? primary;

                    return (
                      <button
                        key={category.id}
                        type="button"
                        onClick={() => selectCategory(category.id)}
                        className={`flex min-w-[160px] items-center gap-3 rounded-xl px-3 py-3 text-left transition lg:min-w-0 ${
                          active
                            ? "bg-[#0f1622] text-white shadow-[0_10px_28px_rgba(15,22,34,0.18)]"
                            : "text-[#0f1622] hover:bg-[#f6f8fb]"
                        }`}
                      >
                        <span
                          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-white"
                          style={{ backgroundColor: catAccent }}
                        >
                          <Icon className="h-4 w-4" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-sm font-semibold leading-snug">
                            {category.name}
                          </span>
                          <span
                            className={`mt-0.5 block text-[11px] ${
                              active ? "text-white/55" : "text-[#0f1622]/45"
                            }`}
                          >
                            {category.faqs.length} questions
                          </span>
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </aside>

            {/* Questions */}
            <div>
              <div className="mb-4 flex flex-wrap items-end justify-between gap-2">
                <div>
                  <p
                    className="text-[11px] font-semibold uppercase tracking-[0.16em]"
                    style={{ color: categoryAccent }}
                  >
                    {currentCategory?.name ?? "FAQ"}
                  </p>
                  <h2 className="mt-1 text-xl font-bold tracking-tight text-[#0f1622] sm:text-[1.35rem]">
                    {filteredFAQs.length}{" "}
                    {filteredFAQs.length === 1 ? "answer" : "answers"}
                    {searchQuery ? ` for “${searchQuery}”` : ""}
                  </h2>
                </div>
              </div>

              {filteredFAQs.length > 0 ? (
                <div className="space-y-3">
                  {filteredFAQs.map((item, index) => {
                    const faqId = `${activeCategory}-${index}`;
                    const isOpen = openFAQ === faqId;
                    const number = String(index + 1).padStart(2, "0");

                    return (
                      <article
                        key={faqId}
                        className={`overflow-hidden rounded-2xl border bg-white transition duration-300 ${
                          isOpen
                            ? "border-transparent shadow-[0_14px_40px_rgba(15,22,34,0.08)]"
                            : "border-[#e6e8ec] hover:border-[#00a2e5]/25"
                        }`}
                        style={
                          isOpen
                            ? { boxShadow: `0 14px 40px rgba(15,22,34,0.08), inset 3px 0 0 ${categoryAccent}` }
                            : undefined
                        }
                      >
                        <button
                          type="button"
                          onClick={() => toggleFAQ(faqId)}
                          aria-expanded={isOpen}
                          className="flex w-full items-start gap-3 px-4 py-4 text-left sm:gap-4 sm:px-5 sm:py-5"
                        >
                          <span
                            className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[11px] font-bold"
                            style={{
                              backgroundColor: isOpen
                                ? categoryAccent
                                : "rgba(15,22,34,0.05)",
                              color: isOpen ? "#ffffff" : "rgba(15,22,34,0.45)",
                            }}
                          >
                            {number}
                          </span>
                          <span className="min-w-0 flex-1 pt-0.5 text-[15px] font-semibold leading-snug text-[#0f1622] sm:text-base">
                            {item.question}
                          </span>
                          <span
                            className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition ${
                              isOpen
                                ? "text-white"
                                : "bg-[#f6f8fb] text-[#0f1622]/5"
                            }`}
                            style={
                              isOpen
                                ? { backgroundColor: categoryAccent }
                                : undefined
                            }
                          >
                            <ChevronDown
                              className={`h-4 w-4 transition-transform duration-300 ${
                                isOpen ? "rotate-180" : ""
                              }`}
                            />
                          </span>
                        </button>

                        <div
                          className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                            isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                          }`}
                        >
                          <div className="overflow-hidden">
                            <div className="border-t border-[#e6e8ec] px-4 pb-5 pt-0 sm:px-5 sm:pb-6">
                              <p className="ml-0 pl-0 text-sm leading-relaxed text-[#0f1622]/65 sm:ml-11 sm:pl-1">
                                {item.answer}
                              </p>
                            </div>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              ) : (
                <div className="rounded-2xl border border-dashed border-[#d5d9e0] bg-white px-6 py-16 text-center">
                  <CircleHelp
                    className="mx-auto h-10 w-10"
                    style={{ color: accent }}
                  />
                  <p className="mt-4 text-base font-semibold text-[#0f1622]">
                    {faq.emptyTitle}
                  </p>
                  <p className="mt-1 text-sm text-[#0f1622]/5">{faq.emptyHint}</p>
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="mt-5 text-sm font-semibold"
                    style={{ color: primary }}
                  >
                    Clear search
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Help strip */}
      <section className="bg-white py-12 sm:py-14">
        <div className="content-container">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p
                className="text-[11px] font-semibold uppercase tracking-[0.16em]"
                style={{ color: accent }}
              >
                Support
              </p>
              <h2 className="mt-1 text-2xl font-bold tracking-tight text-[#0f1622] sm:text-[1.75rem]">
                {withHighlightMark(
                  faq.stillNeedHelp.title,
                  faq.stillNeedHelp.titleHighlight
                )}
              </h2>
            </div>
          </div>

          <div className="mt-7 grid gap-3 md:grid-cols-3">
            {faq.stillNeedHelp.cards.map((card, index) => {
              const meta = helpCardMeta[index] ?? helpCardMeta[0];
              const Icon = meta.Icon;

              return (
                <Link
                  key={card.title}
                  href={meta.href}
                  className="group flex items-start gap-4 rounded-2xl border border-[#e6e8ec] bg-[#f8f9fb] p-5 transition hover:border-[#00a2e5]/35 hover:bg-white hover:shadow-[0_12px_32px_rgba(15,22,34,0.06)]"
                >
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white"
                    style={{ backgroundColor: meta.accent }}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-center justify-between gap-2">
                      <span className="text-base font-bold text-[#0f1622]">
                        {card.title}
                      </span>
                      <ArrowRight className="h-4 w-4 shrink-0 text-[#0f1622]/3 transition group-hover:translate-x-0.5 group-hover:text-[#00a2e5]" />
                    </span>
                    <span className="mt-1 block text-sm leading-relaxed text-[#0f1622]/6">
                      {card.description}
                    </span>
                    <span
                      className="mt-3 inline-block text-sm font-semibold"
                      style={{ color: primary }}
                    >
                      {card.cta}
                    </span>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white pb-12 sm:pb-16">
        <div className="content-container">
          <div
            className="relative overflow-hidden rounded-2xl px-6 py-8 sm:px-10 sm:py-10"
            style={{
              background: `linear-gradient(135deg, ${primary} 0%, #143a7a 48%, ${accent} 140%)`,
            }}
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-25"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -right-8 top-0 h-40 w-40 rounded-full blur-3xl"
              style={{ backgroundColor: "rgba(254,196,13,0.25)" }}
              aria-hidden
            />
            <div className="relative flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-xl">
                <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                  {withHighlightMark(faq.cta.title, faq.cta.titleHighlight)}
                </h2>
                <p className="mt-2 text-sm leading-snug text-white/80">
                  {faq.cta.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-2.5">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold transition hover:bg-white/90"
                  style={{ color: primary }}
                >
                  {faq.cta.primary}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/40 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
                >
                  {faq.cta.secondary}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function FAQPage() {
  return (
    <ResourcesExtraLocaleProvider>
      <FAQPageInner />
    </ResourcesExtraLocaleProvider>
  );
}
