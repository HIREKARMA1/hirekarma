"use client";

import React from 'react';
import { useTheme } from 'next-themes';
import mapData from '../../data/locations-map.json';

const GoogleLocationSection: React.FC = () => {
  const [mounted, setMounted] = React.useState(false);
  const { resolvedTheme } = useTheme();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === 'dark';

  const isMyMapsEmbed = mapData.iframeHtml.includes('maps/d/embed');
  const headerCropPx =
    typeof mapData.headerCropPx === 'number'
      ? mapData.headerCropPx
      : isMyMapsEmbed
        ? 64
        : 46;

  const mapFrameStyle = {
    '--map-header-crop': `${headerCropPx}px`,
  } as React.CSSProperties;

  return (
    <section className="relative content-container py-12 sm:py-16 md:py-20">
      <div className="mb-10 sm:mb-12 md:mb-14 space-y-6">
        <h2
          className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight ${
            isDark ? 'text-gray-100' : 'text-gray-900'
          }`}
        >
          {mapData.heading}
          <span
            className={`block mt-2 text-lg sm:text-xl lg:text-2xl xl:text-3xl font-medium ${
              isDark ? 'text-cyan-400' : 'text-cyan-600'
            }`}
          >
            {mapData.subheading}
          </span>
        </h2>

        <p
          className={`text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}
        >
          {mapData.description}
        </p>
      </div>

      <div
        className={`relative overflow-hidden rounded-2xl border shadow-lg transition-all duration-500 ${
          isDark
            ? 'border-gray-700 bg-gray-900/30 shadow-black/25'
            : 'border-gray-200 bg-white shadow-gray-900/10'
        }`}
      >
        {/* Fade top edge so any residual My Maps chrome blends into the card */}
        <div
          className={`pointer-events-none absolute inset-x-0 top-0 z-10 h-3 bg-gradient-to-b to-transparent ${
            isDark ? 'from-gray-900/90' : 'from-white'
          }`}
          aria-hidden
        />
        <div
          className="map-embed-wrapper"
          style={mapFrameStyle}
          dangerouslySetInnerHTML={{ __html: mapData.iframeHtml }}
        />
      </div>

      <style jsx>{`
        .map-embed-wrapper {
          position: relative;
          height: 360px;
          overflow: hidden;
        }

        .map-embed-wrapper :global(iframe) {
          width: 100%;
          height: calc(100% + var(--map-header-crop, 46px));
          margin-top: calc(-1 * var(--map-header-crop, 46px));
          border: 0;
          display: block;
        }

        @media (min-width: 1024px) {
          .map-embed-wrapper {
            height: 420px;
          }
        }
      `}</style>
    </section>
  );
};

export default GoogleLocationSection;

