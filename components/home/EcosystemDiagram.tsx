"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  BarChart3,
  Briefcase,
  Building2,
  Code2,
  GraduationCap,
  Target,
  UserRound,
  Users,
  type LucideIcon,
} from "lucide-react";

import { theme } from "@/config/theme";
import { useHomeLocale } from "@/contexts/HomeLocaleContext";

const HK_LOGO_WHITE =
  "https://hirekarma.s3.us-east-1.amazonaws.com/hirekarma_ui/home_ui/HKlogowhite.png";

const NODE_META: Record<
  string,
  {
    Icon: LucideIcon;
    color: string;
    shortLabel: string;
    angle: number;
    darkIcon?: boolean;
  }
> = {
  skills: {
    Icon: GraduationCap,
    color: "#5b4bdb",
    shortLabel: "Skill Development",
    angle: -135,
  },
  disha: {
    Icon: Building2,
    color: "#1b3a6b",
    shortLabel: "DISHA",
    angle: -90,
  },
  solviq: {
    Icon: BarChart3,
    color: "#1b52a4",
    shortLabel: "SOLVIQ",
    angle: -45,
  },
  lakshya: {
    Icon: Target,
    color: "#00a2e5",
    shortLabel: "Lakshya",
    angle: 0,
  },
  shortlisted: {
    Icon: Briefcase,
    color: "#fec40d",
    shortLabel: "Shortlisted",
    angle: 45,
    darkIcon: true,
  },
  dpi: {
    Icon: Code2,
    color: "#d64246",
    shortLabel: "Open Source & DPI",
    angle: 90,
  },
  staffing: {
    Icon: UserRound,
    color: "#f58020",
    shortLabel: "Staff Augmentation",
    angle: 135,
  },
  consulting: {
    Icon: Users,
    color: "#098855",
    shortLabel: "IT Consulting",
    angle: 180,
  },
};

const ORDER = [
  "skills",
  "disha",
  "solviq",
  "lakshya",
  "shortlisted",
  "dpi",
  "staffing",
  "consulting",
] as const;

function polar(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

/** Extra outward clearance on left/right so wide labels never cover nodes. */
function labelRadius(orbitR: number, angleDeg: number) {
  const side = Math.abs(Math.cos((angleDeg * Math.PI) / 180));
  return orbitR + 58 + side * 42;
}

function spokePath(
  cx: number,
  cy: number,
  rInner: number,
  rOuter: number,
  angleDeg: number
) {
  const start = polar(cx, cy, rInner, angleDeg);
  const end = polar(cx, cy, rOuter, angleDeg);
  const midR = (rInner + rOuter) / 2;
  const ctrl = polar(cx, cy, midR + 6, angleDeg + 2.5);
  return {
    d: `M ${start.x} ${start.y} Q ${ctrl.x} ${ctrl.y} ${end.x} ${end.y}`,
    start,
    end,
  };
}

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function EcosystemDiagram() {
  const { content } = useHomeLocale();
  const items = content.divisions.items;
  const byId = Object.fromEntries(items.map((item) => [item.id, item]));
  const yellow = theme.colors.yellow;
  const primary = theme.colors.primary;

  const size = 680;
  const cx = size / 2;
  const cy = size / 2;
  const orbitR = 186;
  const hubR = 70;
  const nodeR = 26;

  return (
    <div className="relative mx-auto w-full max-w-[680px]">
      <div
        className="pointer-events-none absolute -right-6 -top-8 h-56 w-56 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(0,162,229,0.22) 0%, rgba(27,82,164,0.1) 50%, transparent 70%)",
        }}
        aria-hidden
      />

      <svg
        viewBox={`0 0 ${size} ${size}`}
        className="h-auto w-full overflow-visible"
        role="img"
        aria-label="HireKarma ecosystem: products and activities evolving from one hub"
      >
        <defs>
          <radialGradient id="eco-dot-fade" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1b52a4" stopOpacity="0.35" />
            <stop offset="70%" stopColor="#1b52a4" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#1b52a4" stopOpacity="0" />
          </radialGradient>
          <filter id="eco-hub-glow" x="-40%" y="-40%" width="180%" height="180%">
            <feDropShadow
              dx="0"
              dy="10"
              stdDeviation="14"
              floodColor="#1b52a4"
              floodOpacity="0.4"
            />
          </filter>
          {ORDER.map((id) => {
            const color = NODE_META[id].color;
            return (
              <linearGradient
                key={`grad-${id}`}
                id={`eco-spoke-${id}`}
                gradientUnits="userSpaceOnUse"
                x1={cx}
                y1={cy}
                x2={polar(cx, cy, orbitR, NODE_META[id].angle).x}
                y2={polar(cx, cy, orbitR, NODE_META[id].angle).y}
              >
                <stop offset="0%" stopColor="#00a2e5" stopOpacity="0.9" />
                <stop offset="55%" stopColor={color} stopOpacity="0.75" />
                <stop offset="100%" stopColor={color} stopOpacity="0.35" />
              </linearGradient>
            );
          })}
        </defs>

        <circle cx={cx} cy={cy} r={260} fill="url(#eco-dot-fade)" opacity="0.2" />

        {/* Expanding evolve rings from the hub */}
        {[0, 1, 2].map((i) => (
          <motion.circle
            key={`pulse-${i}`}
            cx={cx}
            cy={cy}
            r={hubR}
            fill="none"
            stroke="rgba(0,162,229,0.45)"
            strokeWidth="1.5"
            initial={{ r: hubR, opacity: 0.55 }}
            animate={{ r: orbitR + 24, opacity: 0 }}
            transition={{
              duration: 2.8,
              delay: 0.9 + i * 0.95,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        ))}

        <circle
          cx={cx}
          cy={cy}
          r={orbitR}
          fill="none"
          stroke="rgba(27,82,164,0.1)"
          strokeWidth="1.25"
          strokeDasharray="3 10"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from={`0 ${cx} ${cy}`}
            to={`360 ${cx} ${cy}`}
            dur="56s"
            repeatCount="indefinite"
          />
        </circle>

        {ORDER.map((id, index) => {
          const meta = NODE_META[id];
          const { d, start, end } = spokePath(
            cx,
            cy,
            hubR + 2,
            orbitR - nodeR - 4,
            meta.angle
          );
          const delay = 0.28 + index * 0.09;

          return (
            <g key={`spoke-${id}`}>
              <motion.path
                d={d}
                fill="none"
                stroke={meta.color}
                strokeWidth="7"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.12 }}
                transition={{ duration: 0.85, delay, ease: easeOut }}
              />
              <motion.path
                d={d}
                fill="none"
                stroke={`url(#eco-spoke-${id})`}
                strokeWidth="2.5"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.9, delay, ease: easeOut }}
              />
              <motion.path
                d={d}
                fill="none"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="10 120"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ delay: delay + 0.7, duration: 0.4 }}
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="130"
                  to="0"
                  dur="2.8s"
                  begin={`${delay + 0.7}s`}
                  repeatCount="indefinite"
                />
              </motion.path>
              <motion.circle
                cx={start.x}
                cy={start.y}
                r="4.5"
                fill="#12233f"
                stroke="#00a2e5"
                strokeWidth="1.5"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay, duration: 0.35 }}
                style={{ transformOrigin: `${start.x}px ${start.y}px` }}
              />
              <motion.circle
                cx={end.x}
                cy={end.y}
                r="4.5"
                fill="#ffffff"
                stroke={meta.color}
                strokeWidth="2.25"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: delay + 0.55, duration: 0.35 }}
                style={{ transformOrigin: `${end.x}px ${end.y}px` }}
              />
            </g>
          );
        })}

        <g filter="url(#eco-hub-glow)">
          <circle cx={cx} cy={cy} r={hubR + 14} fill="rgba(27,82,164,0.1)" />
          <circle cx={cx} cy={cy} r={hubR} fill="#12233f" />
          <circle
            cx={cx}
            cy={cy}
            r={hubR - 3}
            fill="none"
            stroke="rgba(0,162,229,0.5)"
            strokeWidth="2"
          />
          <circle
            cx={cx}
            cy={cy}
            r={hubR - 10}
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="1"
          />
        </g>
      </svg>

      {/* Center logo */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center"
        style={{ width: `${(hubR * 2) / size * 100}%`, height: `${(hubR * 2) / size * 100}%` }}
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.55, ease: easeOut }}
      >
        <motion.div
          className="relative flex h-[72%] w-[78%] items-center justify-center"
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
        >
          <Image
            src={HK_LOGO_WHITE}
            alt="HireKarma"
            width={140}
            height={48}
            className="h-auto w-full object-contain"
            priority
          />
        </motion.div>
      </motion.div>

      {/* Nodes emerge from hub along each ray */}
      <div className="pointer-events-none absolute inset-0">
        {ORDER.map((id, index) => {
          const meta = NODE_META[id];
          const item = byId[id];
          if (!item || !meta) return null;

          const iconPos = polar(cx, cy, orbitR, meta.angle);
          const labelPos = polar(
            cx,
            cy,
            labelRadius(orbitR, meta.angle),
            meta.angle
          );
          const Icon = meta.Icon;
          const kind = item.kind === "product" ? "Product" : "Activity";
          const href = item.href;
          const external = href.startsWith("http");
          const delay = 0.32 + index * 0.09;
          const iconTone = meta.darkIcon
            ? "text-[#0f1622] group-hover:text-[#0f1622]"
            : "text-white group-hover:text-[#0f1622]";

          const leftPct = (iconPos.x / size) * 100;
          const topPct = (iconPos.y / size) * 100;
          const labelLeft = (labelPos.x / size) * 100;
          const labelTop = (labelPos.y / size) * 100;

          const icon = (
            <motion.span
              className="group pointer-events-auto absolute flex flex-col items-center"
              initial={{
                left: "50%",
                top: "50%",
                x: "-50%",
                y: "-50%",
                scale: 0.18,
                opacity: 0,
              }}
              animate={{
                left: `${leftPct}%`,
                top: `${topPct}%`,
                x: "-50%",
                y: "-50%",
                scale: 1,
                opacity: 1,
              }}
              transition={{ duration: 0.9, delay, ease: easeOut }}
            >
              <span
                className={`relative flex h-12 w-12 items-center justify-center rounded-full shadow-[0_8px_24px_rgba(15,22,34,0.2)] transition duration-300 group-hover:scale-110 group-hover:shadow-[0_12px_28px_rgba(254,196,13,0.35)] sm:h-[3.4rem] sm:w-[3.4rem] ${iconTone}`}
                style={{ backgroundColor: meta.color }}
              >
                <span
                  className="absolute inset-0 rounded-full opacity-0 transition group-hover:opacity-100"
                  style={{ backgroundColor: yellow }}
                  aria-hidden
                />
                <Icon
                  className="relative z-10 h-5 w-5 sm:h-[1.35rem] sm:w-[1.35rem]"
                  strokeWidth={2.1}
                />
              </span>
            </motion.span>
          );

          const label = (
            <motion.span
              className="pointer-events-none absolute w-[7.25rem] text-center sm:w-[8rem]"
              style={{ left: `${labelLeft}%`, top: `${labelTop}%` }}
              initial={{ opacity: 0, scale: 0.9, x: "-50%", y: "-50%" }}
              animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
              transition={{ duration: 0.45, delay: delay + 0.55, ease: easeOut }}
            >
              <span className="block text-[11px] font-bold leading-tight text-[#0f1622] sm:text-[12px]">
                {meta.shortLabel}
              </span>
              <span
                className="mt-1 inline-block rounded-full px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide"
                style={{
                  color: primary,
                  backgroundColor: "rgba(27,82,164,0.08)",
                }}
              >
                {kind}
              </span>
            </motion.span>
          );

          return (
            <span key={id} className="contents">
              {external ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contents"
                >
                  {icon}
                </a>
              ) : (
                <Link href={href} className="contents">
                  {icon}
                </Link>
              )}
              {label}
            </span>
          );
        })}
      </div>
    </div>
  );
}
