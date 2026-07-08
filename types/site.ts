import type { Locale } from "@/types/products-page";

export interface NavLinkItem {
  id: string;
  label: string;
  href: string;
}

export interface NavDropdownItem {
  id: string;
  label: string;
  href: string;
}

export interface NavDropdown {
  id: string;
  label: string;
  href: string;
  items: NavDropdownItem[];
}

export interface SiteNavContent {
  home: NavLinkItem;
  products: NavDropdown;
  resources: NavLinkItem;
  about: NavDropdown;
  contact: NavLinkItem;
  language: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface SiteFooterContent {
  description: string;
  connectTitle: string;
  email: string;
  phone: string;
  address: string;
  aboutTitle: string;
  aboutLinks: FooterLink[];
  productsTitle: string;
  programsTitle: string;
  contactTitle: string;
  contactLink: string;
  privacyPolicy: string;
  termsOfService: string;
  copyright: string;
  poweredByPrefix: string;
  poweredBySuffix: string;
  poweredByCompany: string;
}

export interface SiteContent {
  nav: SiteNavContent;
  footer: SiteFooterContent;
}

export type { Locale };
