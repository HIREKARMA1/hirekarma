"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  ChevronDown,
  CircleHelp,
  Code2,
  Compass,
  GraduationCap,
  Heart,
  LayoutGrid,
  MapPin,
  Menu,
  Network,
  Newspaper,
  Target,
  TrendingUp,
  Users,
  UsersRound,
  X,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { env } from "@/lib/config/env";
// import { LanguageDropdown } from "@/components/layout/LanguageDropdown";
import { useSiteLocale } from "@/contexts/SiteLocaleContext";
import { theme } from "@/config/theme";

interface NavbarProps {
  className?: string;
}

interface DropdownItem {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  accent?: string;
  description?: string;
}

interface NavigationItem {
  label: string;
  href: string;
  dropdownItems: DropdownItem[];
}

interface SimpleLink {
  label: string;
  href: string;
}

const productMeta: Record<
  string,
  { icon: React.ComponentType<{ className?: string }>; accent: string; description: string }
> = {
  overview: {
    icon: LayoutGrid,
    accent: theme.colors.primary,
    description: "Full product suite",
  },
  disha: {
    icon: Compass,
    accent: theme.productAccents.disha.main,
    description: "Campus recruitment",
  },
  solviq: {
    icon: TrendingUp,
    accent: theme.productAccents.solviq.main,
    description: "AI career readiness",
  },
  lakshya: {
    icon: Users,
    accent: theme.productAccents.lakshya.main,
    description: "Hiring ecosystem",
  },
  shortlisted: {
    icon: Briefcase,
    accent: theme.productAccents.shortlisted.main,
    description: "Virtual placement",
  },
};

const productHrefById: Record<string, string> = {
  overview: "/products",
  disha: env.dishaUrl,
  solviq: env.solviqUrl,
  lakshya: env.lakshyaUrl,
  shortlisted: env.shortlistedUrl,
};

function isExternalHref(href: string) {
  return href.startsWith("http");
}

function DropdownNavLink({
  href,
  className,
  onClick,
  children,
  role,
}: {
  href: string;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
  role?: string;
}) {
  if (isExternalHref(href)) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        onClick={onClick}
        role={role}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} onClick={onClick} role={role}>
      {children}
    </Link>
  );
}

const servicesMeta: Record<
  string,
  { icon: React.ComponentType<{ className?: string }>; accent: string; description: string }
> = {
  overview: {
    icon: LayoutGrid,
    accent: theme.colors.primary,
    description: "All divisions",
  },
  recruitment: {
    icon: Compass,
    accent: "#1b52a4",
    description: "DISHA + SOLVIQ",
  },
  "skill-development": {
    icon: GraduationCap,
    accent: "#5b4bdb",
    description: "CSR livelihood training",
  },
  "pre-placement-training": {
    icon: Target,
    accent: "#00a2e5",
    description: "On-campus PPT",
  },
  "it-consulting": {
    icon: Code2,
    accent: "#098855",
    description: "Software engineering",
  },
  "open-source-dpi": {
    icon: Network,
    accent: "#d64246",
    description: "MOSIP · INJI · VC",
  },
  "staff-augmentation": {
    icon: UsersRound,
    accent: "#f58020",
    description: "Bench & deployment",
  },
};

const aboutMeta: Record<
  string,
  { icon: React.ComponentType<{ className?: string }>; accent: string; description: string }
> = {
  story: {
    icon: BookOpen,
    accent: theme.colors.orange,
    description: "How HireKarma began",
  },
  mission: {
    icon: Heart,
    accent: theme.colors.primary,
    description: "Purpose & principles",
  },
  people: {
    icon: UsersRound,
    accent: theme.colors.secondary,
    description: "Team & leadership",
  },
  locations: {
    icon: MapPin,
    accent: theme.colors.green,
    description: "Offices across Odisha",
  },
};

const resourcesMeta: Record<
  string,
  { icon: React.ComponentType<{ className?: string }>; accent: string; description: string }
> = {
  overview: {
    icon: Newspaper,
    accent: theme.colors.primary,
    description: "Blogs & insights",
  },
  faq: {
    icon: CircleHelp,
    accent: theme.colors.secondary,
    description: "Common questions",
  },
};

const Navbar: React.FC<NavbarProps> = ({ className = "" }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const desktopNavRef = useRef<HTMLDivElement>(null);
  const { content } = useSiteLocale();
  const { nav } = content;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isMobileMenuOpen]);

  // Click-outside + Escape close for desktop dropdowns (no hover)
  useEffect(() => {
    if (!activeDropdown || isMobileMenuOpen) return;

    const onPointerDown = (event: MouseEvent) => {
      if (!desktopNavRef.current?.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveDropdown(null);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [activeDropdown, isMobileMenuOpen]);

  const closeDropdowns = () => setActiveDropdown(null);

  const toggleDropdown = (label: string) => {
    setActiveDropdown((current) => (current === label ? null : label));
  };

  const productsItem: NavigationItem = {
    label: nav.products.label,
    href: nav.products.href,
    dropdownItems: nav.products.items.map((item) => {
      const meta = productMeta[item.id] ?? productMeta.overview;
      return {
        label: item.label,
        href: productHrefById[item.id] ?? item.href,
        icon: meta.icon,
        accent: meta.accent,
        description: meta.description,
      };
    }),
  };

  const servicesItem: NavigationItem = {
    label: nav.services.label,
    href: nav.services.href,
    dropdownItems: nav.services.items.map((item) => {
      const meta = servicesMeta[item.id] ?? servicesMeta.overview;
      return {
        label: item.label,
        href: item.href,
        icon: meta.icon,
        accent: meta.accent,
        description: meta.description,
      };
    }),
  };

  const aboutItem: NavigationItem = {
    label: nav.about.label,
    href: nav.about.href,
    dropdownItems: nav.about.items.map((item) => {
      const meta = aboutMeta[item.id] ?? aboutMeta.people;
      return {
        label: item.label,
        href: item.href,
        icon: meta.icon,
        accent: meta.accent,
        description: meta.description,
      };
    }),
  };

  const resourcesItem: NavigationItem = {
    label: nav.resources.label,
    href: nav.resources.href,
    dropdownItems: nav.resources.items.map((item) => {
      const meta = resourcesMeta[item.id] ?? resourcesMeta.overview;
      return {
        label: item.label,
        href: item.href,
        icon: meta.icon,
        accent: meta.accent,
        description: meta.description,
      };
    }),
  };

  type NavEntry =
    | { type: "link"; item: SimpleLink }
    | { type: "dropdown"; item: NavigationItem };

  const navEntries: NavEntry[] = [
    { type: "link", item: { label: nav.home.label, href: nav.home.href } },
    { type: "dropdown", item: productsItem },
    { type: "dropdown", item: servicesItem },
    { type: "link", item: { label: nav.impact.label, href: nav.impact.href } },
    { type: "dropdown", item: resourcesItem },
    { type: "dropdown", item: aboutItem },
    { type: "link", item: { label: nav.events.label, href: nav.events.href } },
    { type: "link", item: { label: nav.contact.label, href: nav.contact.href } },
  ];

  const linkClass =
    "relative px-3.5 py-2.5 text-base font-semibold tracking-tight text-[#0f172a] transition-colors duration-200 hover:text-[#fec40d] xl:px-4 xl:text-[17px]";

  const renderDropdown = (item: NavigationItem, open: boolean) => (
    <div key={item.label} className="relative">
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => toggleDropdown(item.label)}
        className={`${linkClass} inline-flex items-center gap-1.5 ${
          open ? "text-[#fec40d]" : ""
        }`}
      >
        {item.label}
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open ? (
        <div
          role="menu"
          className="absolute left-1/2 top-full z-50 mt-2 w-[320px] -translate-x-1/2 overflow-hidden rounded-2xl border border-[#e6e8ec] bg-white shadow-[0_20px_50px_rgba(15,22,34,0.14)]"
        >
          <div
            className="flex items-center justify-between border-b border-[#e6e8ec] px-4 py-3"
            style={{
              background:
                "linear-gradient(135deg, rgba(27,82,164,0.06), rgba(0,162,229,0.06))",
            }}
          >
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-[#00a2e5]">
                Explore
              </p>
              <Link
                href={item.href}
                onClick={closeDropdowns}
                className="text-sm font-bold text-[#0f1622] transition hover:text-[#1b52a4]"
              >
                {item.label}
              </Link>
            </div>
            <Link
              href={item.href}
              onClick={closeDropdowns}
              className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[12px] font-semibold text-[#1b52a4] transition hover:bg-[#1b52a4]/08"
            >
              View all
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>

          <div className="p-2">
            {item.dropdownItems.map((dropdownItem) => {
              const Icon = dropdownItem.icon;
              const accent = dropdownItem.accent ?? theme.colors.primary;
              return (
                <DropdownNavLink
                  key={dropdownItem.label}
                  href={dropdownItem.href}
                  role="menuitem"
                  onClick={closeDropdowns}
                  className="group flex items-center gap-3 rounded-xl px-2.5 py-2.5 transition hover:bg-[#f6f8fb]"
                >
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-white shadow-sm"
                    style={{ backgroundColor: accent }}
                  >
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-semibold text-[#0f1622] transition group-hover:text-[#1b52a4]">
                      {dropdownItem.label}
                    </span>
                    {dropdownItem.description ? (
                      <span className="mt-0.5 block truncate text-[12px] text-[#475569]">
                        {dropdownItem.description}
                      </span>
                    ) : null}
                  </span>
                  <ArrowRight className="h-3.5 w-3.5 shrink-0 text-[#0f1622]/25 transition group-hover:translate-x-0.5 group-hover:text-[#00a2e5]" />
                </DropdownNavLink>
              );
            })}
          </div>
        </div>
      ) : null}
    </div>
  );

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
          isScrolled
            ? "border-[#e6e8ec]/90 bg-white/95 shadow-[0_10px_30px_rgba(15,22,34,0.08)] backdrop-blur-xl"
            : "border-[#e6e8ec]/60 bg-gradient-to-b from-[#f7f8fc] to-white/95 backdrop-blur-md"
        } ${className}`}
      >
        <div className="content-container">
          <div className="grid h-[4.5rem] grid-cols-[auto_1fr_auto] items-center gap-4 lg:h-[4.75rem] lg:gap-6">
            {/* Brand */}
            <Link
              href="/"
              className="flex min-w-0 items-center"
              onClick={closeDropdowns}
            >
              <Image
                src="https://hirekarma.s3.us-east-1.amazonaws.com/hirekarma_ui/home_ui/HKlogoblack.png"
                alt="HireKarma"
                width={160}
                height={36}
                className="h-7 w-auto sm:h-8"
                priority
              />
              {/* <span className="mt-0.5 hidden text-[10px] font-medium tracking-wide text-[#475569] sm:block">
                {nav.tagline}
              </span> */}
            </Link>

            {/* Center nav */}
            <div className="hidden items-center justify-center lg:flex">
              <div
                ref={desktopNavRef}
                className="flex items-center gap-1 rounded-full border border-[#e6e8ec]/80 bg-white/70 px-2.5 py-1.5 shadow-[0_1px_0_rgba(15,22,34,0.03)] backdrop-blur-sm xl:gap-1.5 xl:px-3"
              >
                {navEntries.map((entry) => {
                  if (entry.type === "link") {
                    return (
                      <Link
                        key={entry.item.label}
                        href={entry.item.href}
                        className={linkClass}
                        onClick={closeDropdowns}
                      >
                        {entry.item.label}
                      </Link>
                    );
                  }
                  return renderDropdown(
                    entry.item,
                    activeDropdown === entry.item.label
                  );
                })}
              </div>
            </div>

            {/* Right actions */}
            <div className="flex items-center justify-end gap-2">
              <div className="hidden items-center gap-2 lg:flex">
                {/* <LanguageDropdown /> */}
                {/* <Link
                  href={nav.secondaryCta.href}
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-lg border border-[#0f1622]/15 bg-white px-3.5 py-2 text-[13px] font-semibold text-[#0f1622] transition hover:border-[#1b52a4]/35 hover:text-[#1b52a4]"
                  onClick={closeDropdowns}
                >
                  {nav.secondaryCta.label}
                </Link> */}
                <Link
                  href={nav.primaryCta.href}
                  className="inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-lg px-4 py-2 text-[14px] font-semibold text-white shadow-sm transition hover:brightness-110"
                  style={{ backgroundColor: theme.colors.primary }}
                  onClick={closeDropdowns}
                >
                  {nav.primaryCta.label}
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              <div className="flex items-center gap-1.5 lg:hidden">
                {/* <LanguageDropdown /> */}
                <button
                  type="button"
                  aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                  aria-expanded={isMobileMenuOpen}
                  onClick={() => setIsMobileMenuOpen((v) => !v)}
                  className="flex h-10 w-10 items-center justify-center rounded-xl text-[#0f1622] transition hover:bg-[#f6f8fb]"
                >
                  {isMobileMenuOpen ? (
                    <X className="h-5 w-5" />
                  ) : (
                    <Menu className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile panel */}
        <div
          className={`lg:hidden overflow-hidden border-t border-[#e6e8ec] bg-white transition-all duration-300 ${
            isMobileMenuOpen
              ? "max-h-[min(80vh,680px)] opacity-100"
              : "max-h-0 border-transparent opacity-0"
          }`}
        >
          <div className="content-container space-y-1 overflow-y-auto py-4 pb-6">
            {/* <p className="px-3 pb-2 text-[11px] font-medium tracking-wide text-[#475569]">
              {nav.tagline}
            </p> */}

            {navEntries.map((entry) => {
              if (entry.type === "link") {
                return (
                  <Link
                    key={entry.item.label}
                    href={entry.item.href}
                    className="block rounded-xl px-3 py-3 text-sm font-semibold text-[#0f1622] transition hover:bg-[#f6f8fb] hover:text-[#1b52a4]"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      closeDropdowns();
                    }}
                  >
                    {entry.item.label}
                  </Link>
                );
              }

              const item = entry.item;
              const open = activeDropdown === item.label;

              return (
                <div key={item.label} className="rounded-xl">
                  <button
                    type="button"
                    onClick={() =>
                      setActiveDropdown(open ? null : item.label)
                    }
                    className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-sm font-semibold text-[#0f1622] transition hover:bg-[#f6f8fb]"
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-4 w-4 text-[#475569] transition ${
                        open ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {open ? (
                    <div className="mb-1 space-y-0.5 px-2 pb-2">
                      {item.dropdownItems.map((dropdownItem) => {
                        const Icon = dropdownItem.icon;
                        const accent =
                          dropdownItem.accent ?? theme.colors.primary;
                        return (
                          <DropdownNavLink
                            key={dropdownItem.label}
                            href={dropdownItem.href}
                            className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition hover:bg-[#f6f8fb]"
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              closeDropdowns();
                            }}
                          >
                            <span
                              className="flex h-8 w-8 items-center justify-center rounded-lg text-white"
                              style={{ backgroundColor: accent }}
                            >
                              <Icon className="h-3.5 w-3.5" />
                            </span>
                            <span>
                              <span className="block text-sm font-semibold text-[#0f1622]">
                                {dropdownItem.label}
                              </span>
                              {dropdownItem.description ? (
                                <span className="block text-[12px] text-[#475569]">
                                  {dropdownItem.description}
                                </span>
                              ) : null}
                            </span>
                          </DropdownNavLink>
                        );
                      })}
                    </div>
                  ) : null}
                </div>
              );
            })}

            <div className="mt-3 grid gap-2">
              {/* <Link
                href={nav.secondaryCta.href}
                className="flex items-center justify-center rounded-xl border border-[#0f1622]/15 px-4 py-3 text-sm font-semibold text-[#0f1622]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {nav.secondaryCta.label}
              </Link> */}
              <Link
                href={nav.primaryCta.href}
                className="inline-flex items-center justify-center gap-1.5 rounded-xl px-4 py-3 text-sm font-semibold text-white"
                style={{ backgroundColor: theme.colors.primary }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {nav.primaryCta.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen ? (
        <div
          className="fixed inset-0 z-40 bg-[#0f1622]/25 backdrop-blur-[2px] lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden
        />
      ) : null}
    </>
  );
};

export default Navbar;
