"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import toast from "react-hot-toast";

import { useContactLocale } from "@/contexts/ContactLocaleContext";
import { theme } from "@/config/theme";

const methodIcons = {
  email: Mail,
  phone: Phone,
  location: MapPin,
} as const;

const methodAccent = {
  email: theme.colors.primary,
  phone: theme.colors.green,
  location: theme.colors.secondary,
} as const;

export default function ContactMainSection() {
  const { content } = useContactLocale();
  const { form, toasts, methods } = content;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed to send message");

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      toast.success(toasts.success);
    } catch (error: unknown) {
      console.error("Contact form error:", error);
      setStatus("error");
    }
  };

  const fieldClass =
    "w-full rounded-xl border border-[#e6e8ec] bg-[#f6f8fb] px-3.5 py-2.5 text-sm text-[#0f1622] outline-none transition placeholder:text-[#0f1622]/35 focus:border-[#00a2e5] focus:bg-white focus:ring-2 focus:ring-[#00a2e5]/20";

  return (
    <section className="bg-white py-8 sm:py-10">
      <div className="content-container">
        <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-8">
          {/* Form */}
          <div
            id="contact-form"
            className="scroll-mt-28 rounded-2xl border border-[#e6e8ec] bg-white p-5 shadow-[0_12px_40px_rgba(15,22,34,0.06)] sm:p-6"
          >
            <div className="mb-5">
              <h2
                className="text-xl font-bold tracking-tight"
                style={{ color: theme.colors.ink }}
              >
                {form.title}
              </h2>
              <p className="mt-1 text-sm text-[#0f1622]/55">{form.subtitle}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-[12px] font-semibold text-[#0f1622]/70"
                  >
                    {form.name.label}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={fieldClass}
                    placeholder={form.name.placeholder}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-[12px] font-semibold text-[#0f1622]/70"
                  >
                    {form.email.label}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={fieldClass}
                    placeholder={form.email.placeholder}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-[12px] font-semibold text-[#0f1622]/70"
                >
                  {form.message.label}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className={`${fieldClass} resize-none`}
                  placeholder={form.message.placeholder}
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                style={{ backgroundColor: theme.colors.primary }}
              >
                <Send className="h-4 w-4" />
                {status === "sending" ? form.submitting : form.submit}
              </button>

              {status === "error" ? (
                <p className="text-sm text-red-600">{form.errorInline}</p>
              ) : null}

              <p className="text-[11px] leading-snug text-[#0f1622]/40">
                {form.note}
              </p>
            </form>
          </div>

          {/* Methods */}
          <div className="space-y-4">
            <div>
              <h2
                className="text-xl font-bold tracking-tight"
                style={{ color: theme.colors.ink }}
              >
                {methods.title}
              </h2>
              <p className="mt-1 text-sm text-[#0f1622]/55">{methods.subtitle}</p>
            </div>

            <div className="space-y-3">
              {methods.methods.map((method) => {
                const Icon = methodIcons[method.id];
                const accent = methodAccent[method.id];
                return (
                  <div
                    key={method.id}
                    className="rounded-2xl border border-[#e6e8ec] bg-[#f6f8fb] p-4 transition hover:border-[#00a2e5]/35 hover:bg-white"
                  >
                    <div className="flex items-start gap-3">
                      <span
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white shadow-sm"
                        style={{ backgroundColor: accent }}
                      >
                        <Icon className="h-4 w-4" />
                      </span>
                      <div className="min-w-0">
                        <h3
                          className="text-sm font-bold"
                          style={{ color: theme.colors.ink }}
                        >
                          {method.title}
                        </h3>
                        <p className="mt-0.5 text-[12px] text-[#0f1622]/55">
                          {method.description}
                        </p>
                        {method.href ? (
                          <a
                            href={method.href}
                            className="mt-2 inline-flex text-sm font-semibold transition hover:underline"
                            style={{ color: accent }}
                          >
                            {method.value}
                          </a>
                        ) : (
                          <p
                            className="mt-2 text-sm font-semibold leading-snug"
                            style={{ color: theme.colors.ink }}
                          >
                            {method.value}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <Link
              href={methods.officesCta.href}
              className="inline-flex items-center gap-1.5 text-sm font-semibold transition hover:gap-2"
              style={{ color: theme.colors.primary }}
            >
              {methods.officesCta.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
