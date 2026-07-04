"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { getProductAccent } from "@/config/theme";
import { resolveHref } from "@/lib/config/env";
import {
  getProductsPageMediaSync,
  resolveMediaSrc,
} from "@/services/products-page-media";
import type { ProductItem } from "@/types/products-page";
import { FeatureCheckList } from "../ui/FeatureCheckList";
import { IconBadge, getAccentColor, getProductIcon } from "../ui/IconBadge";

interface ProductDetailCardProps {
  product: ProductItem;
}

export function ProductDetailCard({ product }: ProductDetailCardProps) {
  const media = getProductsPageMediaSync();
  const accent = getProductAccent(product.accentKey);
  const Icon = getProductIcon(product.icon);
  const imageSrc = resolveMediaSrc(
    media.products[product.id]?.image ?? "/about-us/hero-tablet.png"
  );
  const href = resolveHref(product.cta.hrefKey);
  const isExternal = href.startsWith("http");

  const linkContent = (
  <>
    {product.cta.label}
    <ArrowRight className="h-4 w-4" aria-hidden />
  </>
  );

  return (
    <article
      className="flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md"
    >
      <div className="space-y-4 p-6 pb-4">
        <div className="flex items-start gap-4">
          <IconBadge icon={Icon} color={accent.main} size="lg" />
          <div>
            <h3 className="text-lg font-bold text-gray-900">{product.title}</h3>
            <p className="text-sm text-gray-500">{product.subtitle}</p>
          </div>
        </div>
        <p className="text-sm leading-relaxed text-gray-600">{product.description}</p>
      </div>

      <div className="relative mx-4 mb-4 aspect-[16/10] overflow-hidden rounded-xl border border-gray-100 bg-gray-50">
        <Image
          src={imageSrc}
          alt={`${product.title} preview`}
          fill
          className="object-contain object-center p-1"
          sizes="(max-width: 768px) 90vw, 33vw"
        />
      </div>

      <div className="mt-auto space-y-5 p-6 pt-2">
        <FeatureCheckList
          features={product.features}
          accentColor={getAccentColor(product.accentKey)}
        />

        {isExternal ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-80"
            style={{ color: accent.main }}
          >
            {linkContent}
          </a>
        ) : (
          <Link
            href={href}
            className="inline-flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-80"
            style={{ color: accent.main }}
          >
            {linkContent}
          </Link>
        )}
      </div>
    </article>
  );
}
