"use client";

import Image from "next/image";
import { Eye, HeartHandshake, Target } from "lucide-react";

import { useAboutLocale } from "@/contexts/AboutLocaleContext";
import { theme } from "@/config/theme";
import type { AboutMissionBlock } from "@/types/about-page";

const blocks: {
  key: "mission" | "vision" | "values";
  Icon: typeof Target;
  accent: string;
  soft: string;
  softStrong: string;
  image: string;
}[] = [
  {
    key: "mission",
    Icon: Target,
    accent: theme.colors.primary,
    soft: "rgba(27, 82, 164, 0.06)",
    softStrong: "rgba(27, 82, 164, 0.12)",
    image: "/about/mission/mission-bridge.png",
  },
  {
    key: "vision",
    Icon: Eye,
    accent: theme.colors.secondary,
    soft: "rgba(0, 162, 229, 0.06)",
    softStrong: "rgba(0, 162, 229, 0.12)",
    image: "/about/mission/vision-path.png",
  },
  {
    key: "values",
    Icon: HeartHandshake,
    accent: theme.colors.green,
    soft: "rgba(9, 136, 85, 0.06)",
    softStrong: "rgba(9, 136, 85, 0.12)",
    image: "/about/mission/values-constellation.png",
  },
];

function BlockCard({
  block,
  Icon,
  accent,
  soft,
  softStrong,
  image,
}: {
  block: AboutMissionBlock;
  Icon: typeof Target;
  accent: string;
  soft: string;
  softStrong: string;
  image: string;
}) {
  return (
    <article
      className="group relative flex flex-col overflow-hidden rounded-2xl border bg-white shadow-[0_8px_24px_rgba(15,22,34,0.05)]"
      style={{ borderColor: theme.colors.line }}
    >
      <div
        className="absolute inset-x-0 top-0 h-1"
        style={{ backgroundColor: accent }}
        aria-hidden
      />

      <div
        className="relative h-40 overflow-hidden sm:h-44"
        style={{
          background: `linear-gradient(165deg, ${softStrong} 0%, ${soft} 55%, #ffffff 100%)`,
        }}
      >
        <Image
          src={image}
          alt={block.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover object-center transition duration-500 group-hover:scale-[1.03]"
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white to-transparent"
          aria-hidden
        />
      </div>

      <div className="flex flex-1 flex-col px-5 pb-5 pt-3">
        <div className="mb-3 flex items-center gap-3">
          <span
            className="flex h-10 w-10 items-center justify-center rounded-xl text-white shadow-md"
            style={{
              backgroundColor: accent,
              boxShadow: `0 10px 20px ${accent}33`,
            }}
          >
            <Icon className="h-5 w-5" strokeWidth={2.25} />
          </span>
          <div className="min-w-0">
            <p
              className="text-[10px] font-semibold uppercase tracking-[0.14em]"
              style={{ color: accent }}
            >
              {block.title}
            </p>
            <h3
              className="text-[15px] font-bold leading-snug tracking-tight"
              style={{ color: theme.colors.ink }}
            >
              {block.subtitle}
            </h3>
          </div>
        </div>
        <p className="text-[13px] leading-relaxed text-gray-600">{block.body}</p>
      </div>
    </article>
  );
}

export default function MissionBlocksSection() {
  const { content } = useAboutLocale();
  const missionContent = content.mission;

  return (
    <section className="bg-white py-5 sm:py-6">
      <div className="content-container">
        <div className="grid gap-4 md:grid-cols-3">
          {blocks.map(({ key, Icon, accent, soft, softStrong, image }) => (
            <BlockCard
              key={key}
              block={missionContent[key]}
              Icon={Icon}
              accent={accent}
              soft={soft}
              softStrong={softStrong}
              image={image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
