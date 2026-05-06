"use client";

import React from "react";

interface NumberTickerProps {
  value: string;
  className?: string;
  durationMs?: number;
}

const NumberTicker: React.FC<NumberTickerProps> = ({
  value,
  className = "",
  durationMs = 1200,
}) => {
  const [displayValue, setDisplayValue] = React.useState(value);
  const [hasStarted, setHasStarted] = React.useState(false);
  const containerRef = React.useRef<HTMLSpanElement>(null);

  React.useEffect(() => {
    const node = containerRef.current;
    if (!node || hasStarted) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [hasStarted]);

  React.useEffect(() => {
    if (!hasStarted) return;

    const match = value.match(/^(\d+)(.*)$/);
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const target = Number(match[1]);
    const suffix = match[2] ?? "";
    let frameId = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(target * eased);
      setDisplayValue(`${current}${suffix}`);

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [value, durationMs, hasStarted]);

  return (
    <span ref={containerRef} className={className}>
      {displayValue}
    </span>
  );
};

export default NumberTicker;
