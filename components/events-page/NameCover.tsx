"use client";

import { useState } from "react";

function initials(name: string) {
  const trimmed = name.trim();
  if (!trimmed) return "HK";
  return trimmed.slice(0, 2).toUpperCase();
}

export function NameCover({
  src,
  name,
  className = "",
  rounded = false,
}: {
  src?: string | null;
  name: string;
  className?: string;
  rounded?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  const showImage = Boolean(src) && !failed;

  if (!showImage) {
    return (
      <div
        className={`flex items-center justify-center bg-[#e8eef8] font-bold text-[#1b52a4] ${
          rounded ? "rounded-xl" : ""
        } ${className}`}
      >
        {initials(name)}
      </div>
    );
  }

  return (
    // The address comes from Disha. If it fails, the name initials replace it.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src || ""}
      alt=""
      className={`object-cover ${rounded ? "rounded-xl" : ""} ${className}`}
      onError={() => setFailed(true)}
    />
  );
}
