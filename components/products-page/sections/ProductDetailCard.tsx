"use client";

import Image from "next/image";

import { getProductAccent } from "@/config/theme";
import {
  getProductsPageMediaSync,
  resolveMediaSrc,
} from "@/services/products-page-media";
import type { ProductItem } from "@/types/products-page";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { ProductButton } from "../ui/ProductButton";

interface ProductDetailCardProps {
  product: ProductItem;
}

export function ProductDetailCard({ product }: ProductDetailCardProps) {
  const media = getProductsPageMediaSync();
  const accent = getProductAccent(product.accentKey);
  const imageSrc = resolveMediaSrc(
    media.products[product.id]?.image ?? "/about-us/hero-tablet.png"
  );

  return (
    <CardContainer containerClassName="h-full w-full py-0" className="h-full w-full">
      <CardBody className="group/card relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-linear-to-b from-white/[0.08] via-[#0d1118]/95 to-[#080b10]/98 shadow-[0_4px_24px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-xl sm:rounded-3xl">
        {/* Accent atmosphere */}
        <div
          className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-50 blur-3xl transition-opacity duration-500 group-hover/card:opacity-80"
          style={{ backgroundColor: `${accent.main}55` }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-0.5 opacity-80"
          style={{ backgroundColor: accent.main }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-white/5"
          aria-hidden
        />

        {/* Header */}
        <CardItem translateZ={45} className="relative w-full px-5 pb-0 pt-5">
          <div className="min-w-0">
            <h3 className="text-lg font-bold tracking-tight text-white sm:text-xl">
              {product.title}
            </h3>
            <p
              className="mt-0.5 text-[11px] font-semibold uppercase tracking-[0.12em] sm:text-xs sm:tracking-[0.14em]"
              style={{ color: accent.main }}
            >
              {product.subtitle}
            </p>
          </div>
        </CardItem>

        {/* Product preview - elevated frame */}
        <CardItem translateZ={75} className="relative w-full px-4 pt-3 sm:px-5 sm:pt-4">
          <div
            className="overflow-hidden rounded-xl border p-1 shadow-[0_16px_48px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.08)]"
            style={{
              borderColor: accent.border,
              backgroundColor: accent.bg,
            }}
          >
            <div className="relative aspect-[18/10] overflow-hidden rounded-lg bg-[#0a0e14]">
              <Image
                src={imageSrc}
                alt={`${product.title} preview`}
                fill
                className="object-contain object-center p-1 transition-transform duration-500 group-hover/card:scale-[1.02]"
                sizes="(max-width: 768px) 90vw, 33vw"
              />
            </div>
          </div>
        </CardItem>

        {/* Content + CTA */}
        <CardItem
          translateZ={40}
          className="flex w-full flex-1 flex-col px-5 pb-5 pt-3 sm:px-5 sm:pb-5 sm:pt-4"
        >
          <p className="line-clamp-3 text-sm leading-snug text-white/72">
            {product.description}
          </p>

          <div className="mt-auto pt-4">
            <ProductButton
              cta={product.cta}
              fullWidth
              accentColor={accent.main}
              accentTextColor={accent.contrastText}
              className="py-2.5 shadow-[0_8px_24px_rgba(0,0,0,0.25)] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(0,0,0,0.35)]"
            />
          </div>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
