"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const REVEAL_SELECTOR =
  "section, article, [data-hk-animate], .hk-reveal";

const AUTO_STAGGER_SELECTOR =
  "[data-hk-stagger], section .grid, section [class*='grid-cols']";

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Site-wide scroll reveals + auto-stagger for grids.
 */
export function ScrollMotion() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (prefersReducedMotion()) {
      document.documentElement.classList.remove("hk-motion-on");
      document
        .querySelectorAll(REVEAL_SELECTOR)
        .forEach((el) => el.classList.add("hk-revealed"));
      return;
    }

    document.documentElement.classList.add("hk-motion-on");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          el.classList.add("hk-revealed");
          observer.unobserve(el);
        }
      },
      { root: null, rootMargin: "0px 0px -12% 0px", threshold: 0.08 }
    );

    const seen = new WeakSet<Element>();

    const applyStagger = () => {
      document
        .querySelectorAll<HTMLElement>(AUTO_STAGGER_SELECTOR)
        .forEach((grid) => {
          if (grid.closest(".hk-marquee-track") || grid.querySelector(".hk-marquee-track")) {
            return;
          }
          const kids = Array.from(grid.children).filter(
            (c): c is HTMLElement =>
              c instanceof HTMLElement &&
              !c.classList.contains("pointer-events-none") &&
              !c.classList.contains("hk-marquee-track")
          );
          if (kids.length < 2 || kids.length > 16) return;

          kids.forEach((child, i) => {
            if (child.classList.contains("hk-stagger-child")) return;
            child.style.setProperty("--hk-stagger", `${Math.min(i, 12) * 70}ms`);
            child.classList.add("hk-stagger-child");
          });
        });
    };

    const scan = () => {
      applyStagger();
      document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR).forEach((el) => {
        if (seen.has(el)) return;
        seen.add(el);

        if (el.classList.contains("hk-no-reveal")) {
          el.classList.add("hk-revealed");
          return;
        }

        // Only skip animation for the true first fold (flush under nav)
        const rect = el.getBoundingClientRect();
        if (rect.top < 96 && rect.bottom > 0) {
          el.classList.add("hk-revealed");
          return;
        }

        el.classList.remove("hk-revealed");
        observer.observe(el);
      });
    };

    scan();

    let raf = 0;
    const mo = new MutationObserver(() => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(scan);
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      mo.disconnect();
    };
  }, [pathname]);

  return null;
}
