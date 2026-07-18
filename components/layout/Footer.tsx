"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Twitter,
} from "lucide-react";

import footerPrograms from "@/data/footer-programs.json";
import { useSiteLocale } from "@/contexts/SiteLocaleContext";
import { theme } from "@/config/theme";
import PartnersMarquee from "@/components/layout/PartnersMarquee";

const socials = [
  { href: "https://x.com/hirekarma", label: "Twitter", Icon: Twitter },
  {
    href: "https://www.linkedin.com/company/hirekarma-pvt-ltd",
    label: "LinkedIn",
    Icon: Linkedin,
  },
  { href: "https://facebook.com/hirekarma", label: "Facebook", Icon: Facebook },
  {
    href: "https://instagram.com/hirekarma",
    label: "Instagram",
    Icon: Instagram,
  },
] as const;

export default function Footer() {
  const { content } = useSiteLocale();
  const { footer, nav } = content;

  const productLinks = [
    ...footer.productLinks,
    ...footerPrograms.map((p) => ({ label: p.name, href: p.href })),
  ];

  const year = String(new Date().getFullYear());
  const ink = theme.colors.ink;

  return (
    <footer className="text-white" style={{ backgroundColor: ink }}>
      <div className="border-b border-white/10">
        <div className="content-container flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:gap-5 sm:py-5">
          <p className="shrink-0 text-sm font-medium leading-snug text-white/85 sm:max-w-[200px] lg:max-w-[220px]">
            {footer.partnersNote}
          </p>
          <PartnersMarquee />
        </div>
      </div>

      <div className="content-container py-8 sm:py-10">
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="col-span-2 space-y-4 md:col-span-1 md:pr-6">
            <Image
              src="https://hirekarma.s3.us-east-1.amazonaws.com/hirekarma_ui/home_ui/HKlogowhite.png"
              alt="HireKarma"
              width={160}
              height={36}
              className="h-8 w-auto sm:h-9"
            />
            <p className="max-w-sm text-sm leading-relaxed text-white/85">
              {footer.description}
            </p>
            <div className="flex gap-2">
              {socials.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/85 transition hover:border-[#00a2e5] hover:bg-[#00a2e5] hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-white/90">
              {footer.aboutTitle}
            </h3>
            <ul className="space-y-2">
              {footer.aboutLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 transition hover:text-[#00a2e5]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-white/90">
              {footer.productsTitle}
            </h3>
            <ul className="space-y-2">
              {productLinks.map((link) => {
                const external = link.href.startsWith("http");
                return (
                  <li key={`${link.label}-${link.href}`}>
                    <a
                      href={link.href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      className="text-sm text-white/80 transition hover:text-[#00a2e5]"
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-white/90">
              {footer.contactTitle}
            </h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-white/80 transition hover:text-[#00a2e5]"
                >
                  {footer.contactLink}
                </Link>
              </li>
              <li>
                <Link
                  href={nav.resources.href}
                  className="text-sm text-white/80 transition hover:text-[#00a2e5]"
                >
                  {nav.resources.label}
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/faq"
                  className="text-sm text-white/80 transition hover:text-[#00a2e5]"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <a
                  href={`mailto:${footer.email}`}
                  className="inline-flex items-center gap-2 text-sm text-white/80 transition hover:text-[#00a2e5]"
                >
                  <Mail
                    className="h-3.5 w-3.5"
                    style={{ color: theme.colors.secondary }}
                  />
                  {footer.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${footer.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 text-sm text-white/80 transition hover:text-[#00a2e5]"
                >
                  <Phone
                    className="h-3.5 w-3.5"
                    style={{ color: theme.colors.secondary }}
                  />
                  {footer.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-5 text-sm text-white/90 sm:flex-row sm:items-center sm:justify-between">
          <p>{footer.copyright.replace("{year}", year)}</p>
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <a href="/PrivacyPolicy" className="transition hover:text-[#00a2e5]">
              {footer.privacyPolicy}
            </a>
            <a href="/TermsofService" className="transition hover:text-[#00a2e5]">
              {footer.termsOfService}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
