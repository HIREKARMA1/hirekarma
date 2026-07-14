import type { Locale } from "@/types/products-page";

export type { Locale };

export interface ContactMeta {
  title: string;
  description: string;
}

export interface ContactCta {
  label: string;
  href: string;
}

export interface ContactHero {
  label: string;
  title: string;
  titleHighlight: string;
  description: string;
  tagline: string;
  formJump: string;
}

export interface ContactFormField {
  label: string;
  placeholder: string;
}

export interface ContactFormContent {
  title: string;
  subtitle: string;
  name: ContactFormField;
  email: ContactFormField;
  message: ContactFormField;
  submit: string;
  submitting: string;
  errorInline: string;
  note: string;
}

export interface ContactToasts {
  success: string;
}

export interface ContactMethod {
  id: "email" | "phone" | "location";
  title: string;
  description: string;
  value: string;
  href?: string;
}

export interface ContactMethodsContent {
  title: string;
  subtitle: string;
  methods: ContactMethod[];
  officesCta: ContactCta;
}

export interface ContactPageContent {
  meta: ContactMeta;
  hero: ContactHero;
  form: ContactFormContent;
  toasts: ContactToasts;
  methods: ContactMethodsContent;
}
