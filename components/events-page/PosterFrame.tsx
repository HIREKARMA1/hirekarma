"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export interface PosterFrameProps {
  src: string;
  alt: string;
  onOpenChange?: (isOpen: boolean) => void;
  children?: React.ReactNode;
}

export function PosterFrame({ src, alt, onOpenChange, children }: PosterFrameProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggle = (v: boolean) => {
    setOpen(v);
    onOpenChange?.(v);
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && toggle(false);
    const prev = document.body.style.overflow;
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      <div className="frame" onClick={() => toggle(true)}>
        <img className="art" src={src} alt={alt} />
        <button
          type="button"
          className="zoom-btn"
          aria-label="Enlarge poster"
          onClick={(e) => {
            e.stopPropagation();
            toggle(true);
          }}
        >
          <svg viewBox="0 0 24 24">
            <path d="M14 4h6v6M10 20H4v-6M20 4l-7 7M4 20l7-7" />
          </svg>
        </button>
        <span className="zoom-hint">Click to enlarge</span>
        {children}
      </div>

      {open &&
        mounted &&
        createPortal(
          <div
            className="lb"
            role="dialog"
            aria-modal="true"
            aria-label={alt}
            onClick={() => toggle(false)}
          >
            <figure onClick={(e) => e.stopPropagation()}>
              <div className="lb-media">
                <img src={src} alt={alt} />
              </div>
              <figcaption>{alt}</figcaption>
              <button
                type="button"
                className="lb-close"
                aria-label="Close"
                autoFocus
                onClick={() => toggle(false)}
              >
                <svg viewBox="0 0 24 24">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </figure>
          </div>,
          document.body
        )}

      <style jsx global>{`
        /* ---------- Zoom popup ---------- */
        .lb {
          position: fixed;
          inset: 0;
          z-index: 1000;
          display: grid;
          place-items: center;
          padding: 24px;
          background: rgba(10, 18, 36, 0.74);
          backdrop-filter: blur(6px);
          animation: lbIn 0.2s ease;
        }
        .lb figure {
          margin: 0;
          position: relative;
          width: min(1100px, 94vw);
        }
        .lb-media {
          border-radius: 16px;
          overflow: hidden;
          background: #fff;
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.5);
          animation: lbPop 0.25s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .lb-media img {
          display: block;
          width: 100%;
          height: auto;
          max-height: 82vh;
          object-fit: contain;
        }
        .lb figcaption {
          margin-top: 12px;
          color: #fff;
          font-weight: 600;
          text-align: center;
          font-size: 14px;
        }
        .lb-close {
          position: absolute;
          top: 12px;
          right: 12px;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 0;
          background: #fff;
          cursor: pointer;
          display: grid;
          place-items: center;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.35);
          transition: transform 0.2s, background-color 0.2s;
        }
        .lb-close:hover {
          background: #f1f5fb;
          transform: scale(1.05);
        }
        .lb-close svg {
          width: 18px;
          height: 18px;
          stroke: #0f1b33;
          fill: none;
          stroke-width: 2.4;
          stroke-linecap: round;
        }
        @keyframes lbIn {
          from {
            opacity: 0;
          }
        }
        @keyframes lbPop {
          from {
            opacity: 0;
            transform: scale(0.96);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .lb,
          .lb-media {
            animation: none;
          }
        }
      `}</style>
    </>
  );
}

export default PosterFrame;
