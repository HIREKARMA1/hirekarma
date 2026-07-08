"use client";

import React from 'react';
import { useTheme } from 'next-themes';
import ProductCard from './ProductCard';
import productsData from '../../data/products.json';
import { useHomeLocale } from '@/contexts/HomeLocaleContext';

type ProductMedia = {
  id: string;
  logoLight: string;
  logoDark: string;
  href: string;
};

const ProductsSection: React.FC = () => {
  const [mounted, setMounted] = React.useState(false);
  const { resolvedTheme } = useTheme();
  const { content } = useHomeLocale();
  const { productsSection } = content;
  const productMedia = productsData.products as ProductMedia[];

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === 'dark';

  const products = productMedia.map((media) => {
    const localized = productsSection.items.find((item) => item.id === media.id);
    return {
      ...media,
      title: localized?.title ?? media.id,
      subtitle: localized?.subtitle ?? '',
      description: localized?.description ?? '',
    };
  });

  return (
    <section className="relative content-container py-12 sm:py-16 md:py-20">
      <div className="mb-10 sm:mb-12 md:mb-14 space-y-6">
        <h2
          className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight ${
            isDark ? 'text-gray-100' : 'text-gray-900'
          }`}
        >
          {productsSection.heading}
          <span
            className={`block mt-2 text-lg sm:text-xl lg:text-2xl xl:text-3xl font-medium ${
              isDark ? 'text-violet-400' : 'text-violet-600'
            }`}
          >
            {productsSection.subheading}
          </span>
        </h2>

        <p
          className={`text-lg sm:text-xl leading-relaxed max-w-3xl ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}
        >
          {productsSection.description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            logoLight={product.logoLight}
            logoDark={product.logoDark}
            title={product.title}
            subtitle={product.subtitle}
            description={product.description}
            href={product.href}
            viewMoreLabel={productsSection.viewMore}
            productBadge={productsSection.productBadge}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
