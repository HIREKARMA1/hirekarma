"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Mail, Phone, MapPin, Send, User, MessageSquare } from "lucide-react";
import contactAnimation from "../../public/contect.json";
import dynamic from "next/dynamic";
import toast from "react-hot-toast";

import {
  ContactLocaleProvider,
  useContactLocale,
} from "@/contexts/ContactLocaleContext";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const methodIcons = {
  email: Mail,
  phone: Phone,
  location: MapPin,
} as const;

const methodColorClasses = {
  email: {
    dark: "bg-blue-500/20 text-blue-400",
    light: "bg-blue-100 text-blue-600",
    link: "text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300",
  },
  phone: {
    dark: "bg-green-500/20 text-green-400",
    light: "bg-green-100 text-green-600",
    link: "text-green-500 hover:text-green-600 dark:text-green-400 dark:hover:text-green-300",
  },
  location: {
    dark: "bg-purple-500/20 text-purple-400",
    light: "bg-purple-100 text-purple-600",
    link: "",
  },
} as const;

function ContactPageInner() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  const { content } = useContactLocale();
  const { hero, form, toasts, methods } = content;

  useEffect(() => {
    setMounted(true);
  }, []);

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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
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

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      toast.success(toasts.success);
    } catch (error: unknown) {
      console.error("Contact form error:", error);
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen flex flex-col transition-all duration-500">
      <main className="flex-grow">
        <section className="relative min-h-screen transition-all duration-500">
          <div className="relative content-container pt-20 pb-20">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center min-h-[85vh]">
              <div className="space-y-8 lg:space-y-10">
                <div className="space-y-6">
                  <h1
                    className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight ${
                      mounted && resolvedTheme === "dark"
                        ? "text-gray-100"
                        : "text-gray-900"
                    }`}
                  >
                    {hero.title}
                    <span
                      className={`block mt-2 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium ${
                        mounted && resolvedTheme === "dark"
                          ? "text-cyan-400"
                          : "text-cyan-600"
                      }`}
                    >
                      {hero.subtitle}
                    </span>
                  </h1>
                </div>

                <div className="space-y-4">
                  <p
                    className={`text-lg sm:text-xl leading-relaxed max-w-2xl ${
                      mounted && resolvedTheme === "dark"
                        ? "text-gray-300"
                        : "text-gray-600"
                    }`}
                  >
                    {hero.description}
                  </p>
                </div>
              </div>

              <div className="order-2 lg:order-1 space-y-10">
                <div>
                  <h2
                    className={`text-3xl lg:text-4xl xl:text-5xl font-bold ${
                      mounted && resolvedTheme === "dark"
                        ? "text-gray-100"
                        : "text-gray-900"
                    }`}
                  >
                    {form.title}
                  </h2>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className={`block text-sm font-medium mb-2 ${
                        mounted && resolvedTheme === "dark"
                          ? "text-gray-300"
                          : "text-gray-700"
                      }`}
                    >
                      <User className="inline w-4 h-4 mr-2" />
                      {form.name.label}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        mounted && resolvedTheme === "dark"
                          ? "bg-gray-800 border-gray-600 text-gray-100 placeholder-gray-400"
                          : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                      }`}
                      placeholder={form.name.placeholder}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className={`block text-sm font-medium mb-2 ${
                        mounted && resolvedTheme === "dark"
                          ? "text-gray-300"
                          : "text-gray-700"
                      }`}
                    >
                      <Mail className="inline w-4 h-4 mr-2" />
                      {form.email.label}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        mounted && resolvedTheme === "dark"
                          ? "bg-gray-800 border-gray-600 text-gray-100 placeholder-gray-400"
                          : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                      }`}
                      placeholder={form.email.placeholder}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className={`block text-sm font-medium mb-2 ${
                        mounted && resolvedTheme === "dark"
                          ? "text-gray-300"
                          : "text-gray-700"
                      }`}
                    >
                      <MessageSquare className="inline w-4 h-4 mr-2" />
                      {form.message.label}
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none ${
                        mounted && resolvedTheme === "dark"
                          ? "bg-gray-800 border-gray-600 text-gray-100 placeholder-gray-400"
                          : "bg-white border-gray-300 text-gray-900 placeholder-gray-500"
                      }`}
                      placeholder={form.message.placeholder}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className={`w-full flex items-center justify-center space-x-2 px-8 py-4 font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 ${
                      mounted && resolvedTheme === "dark"
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-blue-600 text-white hover:bg-blue-700"
                    } ${status === "sending" ? "opacity-60 cursor-not-allowed" : ""}`}
                  >
                    <Send className="w-5 h-5" />
                    <span>
                      {status === "sending" ? form.submitting : form.submit}
                    </span>
                  </button>

                  {status === "error" && (
                    <p className="text-sm text-red-600">{form.errorInline}</p>
                  )}
                </form>
              </div>
            </div>
          </div>

          <div className="relative content-container py-20">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-16 lg:gap-30 items-center">
                <div className="order-1 lg:order-1">
                  <div className="rounded-3xl overflow-hidden bg-transparent">
                    <Lottie
                      animationData={contactAnimation}
                      loop={true}
                      autoplay={true}
                      style={{
                        width: "100%",
                        height: "auto",
                        minHeight: 320,
                        background: "transparent",
                      }}
                    />
                  </div>
                </div>

                <div className="order-2 lg:order-2 space-y-10">
                  <div>
                    <h2
                      className={`text-3xl lg:text-4xl xl:text-5xl font-bold ${
                        mounted && resolvedTheme === "dark"
                          ? "text-gray-100"
                          : "text-gray-900"
                      }`}
                    >
                      {methods.title}
                      <span
                        className={`block mt-2 text-2xl lg:text-3xl font-medium ${
                          mounted && resolvedTheme === "dark"
                            ? "text-blue-400"
                            : "text-blue-600"
                        }`}
                      >
                        {methods.subtitle}
                      </span>
                    </h2>
                  </div>

                  <div className="space-y-6">
                    {methods.methods.map((method) => {
                      const Icon = methodIcons[method.id];
                      const colors = methodColorClasses[method.id];
                      return (
                        <div key={method.id} className="flex items-start space-x-4">
                          <div
                            className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl ${
                              mounted && resolvedTheme === "dark"
                                ? colors.dark
                                : colors.light
                            }`}
                          >
                            <Icon className="w-6 h-6" />
                          </div>
                          <div>
                            <h3
                              className={`text-xl font-semibold ${
                                mounted && resolvedTheme === "dark"
                                  ? "text-gray-100"
                                  : "text-gray-900"
                              }`}
                            >
                              {method.title}
                            </h3>
                            <p
                              className={`text-base ${
                                mounted && resolvedTheme === "dark"
                                  ? "text-gray-400"
                                  : "text-gray-600"
                              }`}
                            >
                              {method.description}
                            </p>
                            {method.href ? (
                              <a
                                href={method.href}
                                className={`inline-flex items-center space-x-2 mt-2 font-semibold ${colors.link}`}
                              >
                                <Icon className="w-4 h-4" />
                                <span>{method.value}</span>
                              </a>
                            ) : (
                              <p
                                className={`mt-2 font-semibold ${
                                  mounted && resolvedTheme === "dark"
                                    ? "text-gray-100"
                                    : "text-gray-900"
                                }`}
                              >
                                {method.value}
                              </p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default function ContactPage() {
  return (
    <ContactLocaleProvider>
      <ContactPageInner />
    </ContactLocaleProvider>
  );
}
