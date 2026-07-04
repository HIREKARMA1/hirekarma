"use client";

import { useEffect, useState } from "react";

const MAX_WAIT_MS = 4000;

export function usePreloadHeroImage(src?: string) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!src) {
      setReady(true);
      return;
    }

    let cancelled = false;
    const img = new window.Image();

    const finish = () => {
      if (!cancelled) setReady(true);
    };

    img.onload = finish;
    img.onerror = finish;
    img.src = src;

    const fallback = window.setTimeout(finish, MAX_WAIT_MS);

    return () => {
      cancelled = true;
      window.clearTimeout(fallback);
    };
  }, [src]);

  return ready;
}
