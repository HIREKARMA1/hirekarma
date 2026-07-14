"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { getProductAccent } from "@/config/theme";
import { resolveHref } from "@/lib/config/env";
import {
  getProductsPageMediaSync,
  resolveMediaSrc,
} from "@/services/products-page-media";
import type { ProductItem } from "@/types/products-page";

interface ProductDetailCardProps {
  product: ProductItem;
}

export function ProductDetailCard({ product }: ProductDetailCardProps) {
  const media = getProductsPageMediaSync();
  const accent = getProductAccent(product.accentKey);
  const imageSrc = resolveMediaSrc(
    media.products[product.id]?.image ?? "/about-us/hero-tablet.png"
  );
  const href = resolveHref(product.cta.hrefKey);
  const isExternal = href.startsWith("http");

  const ctaClassName =
    "group/cta mt-auto inline-flex w-full items-center justify-between gap-3 rounded-xl border px-4 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(15,22,34,0.1)]";

  const ctaStyle = {
    color: accent.main,
    backgroundColor: accent.bg,
    borderColor: accent.border,
  } as const;

  const ctaContent = (
    <>
      <span>{product.cta.label}</span>
      <span
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
        style={{
          backgroundColor: accent.main,
          color: accent.contrastText,
        }}
      >
        <ArrowUpRight className="h-4 w-4" aria-hidden />
      </span>
    </>
  );

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#e6e8ec] bg-white shadow-[0_8px_28px_rgba(15,22,34,0.06)] transition hover:border-[#00a2e5]/35 hover:shadow-[0_14px_36px_rgba(15,22,34,0.1)]">
      <div
        className="h-1 w-full"
        style={{ backgroundColor: accent.main }}
        aria-hidden
      />

      <div className="px-4 pb-0 pt-4">
        <h3 className="text-[1.05rem] font-bold tracking-tight text-[#0f1622]">
          {product.title}
        </h3>
        <p
          className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.12em]"
          style={{ color: accent.main }}
        >
          {product.subtitle}
        </p>
      </div>

      <div className="px-4 pt-3">
        <div
          className="overflow-hidden rounded-xl border p-1"
          style={{
            borderColor: accent.border,
            backgroundColor: accent.bg,
          }}
        >
          <div className="relative aspect-[18/10] overflow-hidden rounded-lg bg-[#f6f8fb]">
            <Image
              src={imageSrc}
              alt={`${product.title} preview`}
              fill
              className="object-contain object-center p-1 transition duration-500 group-hover:scale-[1.02]"
              sizes="(max-width: 768px) 90vw, 33vw"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col px-4 pb-4 pt-3">
        <p className="line-clamp-3 text-[13px] leading-snug text-[#0f1622]/60">
          {product.description}
        </p>

        <div className="mt-auto pt-3.5">
          {isExternal ? (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={ctaClassName}
              style={ctaStyle}
            >
              {ctaContent}
            </a>
          ) : (
            <Link href={href} className={ctaClassName} style={ctaStyle}>
              {ctaContent}
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
