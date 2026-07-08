import type { Locale } from "@/types/products-page";

export type { Locale };

export interface ContactMeta {
  title: string;
  description: string;
}

export interface ContactHero {
  title: string;
  subtitle: string;
  description: string;
}

export interface ContactFormField {
  label: string;
  placeholder: string;
}

export interface ContactFormContent {
  title: string;
  name: ContactFormField;
  email: ContactFormField;
  message: ContactFormField;
  submit: string;
  submitting: string;
  errorInline: string;
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
}

export interface ContactPageContent {
  meta: ContactMeta;
  hero: ContactHero;
  form: ContactFormContent;
  toasts: ContactToasts;
  methods: ContactMethodsContent;
}
