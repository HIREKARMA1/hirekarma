"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { theme } from "@/config/theme";
import { useHomeLocale } from "@/contexts/HomeLocaleContext";

export default function ProductsSection() {
  const { content } = useHomeLocale();
  const { techShowcase } = content;

  return (
    <section className="bg-white py-12 sm:py-14">
      <div className="content-container">
        <div className="max-w-xl">
          <p
            className="text-[12px] font-semibold uppercase tracking-[0.18em]"
            style={{ color: theme.colors.secondary }}
          >
            {techShowcase.label}
          </p>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#0f1622] sm:text-[1.85rem]">
            {techShowcase.heading}
          </h2>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          {techShowcase.products.map((product) => {
            const isDark = product.tone === "dark";
            return (
              <article
                key={product.id}
                className={`overflow-hidden rounded-2xl border ${
                  isDark
                    ? "border-white/10 bg-[#0f1622] text-white"
                    : "border-[#e6e8ec] bg-[#f6f8fb] text-[#0f1622]"
                }`}
              >
                <div className="grid gap-0 sm:grid-cols-[1.05fr_0.95fr]">
                  <div className="flex flex-col p-5 sm:p-6">
                    <p
                      className="text-[12px] font-semibold uppercase tracking-[0.14em]"
                      style={{ color: product.accent }}
                    >
                      {product.subtitle}
                    </p>
                    <h3 className="mt-2 text-xl font-bold tracking-tight">
                      {product.title}
                    </h3>
                    <p
                      className={`mt-2 flex-1 text-sm leading-relaxed ${
                        isDark ? "text-white/85" : "text-[#334155]"
                      }`}
                    >
                      {product.description}
                    </p>
                    <a
                      href={product.cta.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold transition hover:gap-2"
                      style={{ color: product.accent }}
                    >
                      {product.cta.label}
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                  <div
                    className={`relative min-h-[180px] sm:min-h-full ${
                      isDark ? "bg-[#121826]" : "bg-white"
                    }`}
                  >
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-contain object-center p-3"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-1.5 text-sm font-semibold"
            style={{ color: theme.colors.primary }}
          >
            See the full product stack
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
