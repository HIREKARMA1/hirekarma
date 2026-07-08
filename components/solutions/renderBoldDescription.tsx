import type { ReactNode } from "react";

/** Renders text with **bold** markers, preserving theme-aware strong styles. */
export function renderBoldDescription(
  text: string,
  strongClassName: string
): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className={strongClassName}>
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <span key={index}>{part}</span>;
  });
}
