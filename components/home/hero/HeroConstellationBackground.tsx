"use client"

import React, { useEffect, useMemo, useState } from "react"

type HeroConstellationBackgroundProps = {
  isDark: boolean
}

// Deterministic PRNG so the dot/line pattern is stable across renders.
function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5)
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

export function HeroConstellationBackground({
  isDark,
}: HeroConstellationBackgroundProps) {
  const width = 1440
  const height = 900
  const [enableMotion, setEnableMotion] = useState(false)

  useEffect(() => {
    const reduceMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    ).matches
    setEnableMotion(!reduceMotion)
  }, [])

  const bands = useMemo(() => {
    const rng = mulberry32(1337)

    // Diagonal zig-zag tech lines (more “designed” than random webs).
    const bandCount = 8
    const stepX = 105
    const pointsPadding = 2
    const zigAmp = 16

    const maxCenterDist = Math.sqrt(width * width + height * height) / 2

    type Band = {
      kind: 0 | 1
      points: Array<{ x: number; y: number; alpha: number }>
      strokeOpacity: number
      dash: string
      dashOffsetTo: number
      dur: number
    }

    const out: Band[] = []

    for (let b = 0; b < bandCount; b++) {
      const kind: 0 | 1 = b % 2 === 0 ? 0 : 1

      const baseY =
        height * (0.20 + (b / Math.max(1, bandCount - 1)) * 0.65) -
        (kind === 0 ? 6 : -10)

      const slope = b % 2 === 0 ? 0.42 : -0.42

      const bandRng = mulberry32(9000 + b * 777)

      const pts: Array<{ x: number; y: number; alpha: number }> = []
      const startX = -stepX * pointsPadding
      const endX = width + stepX * pointsPadding

      for (let i = 0; i <= Math.ceil((endX - startX) / stepX); i++) {
        const x = startX + i * stepX
        const xJitter = (bandRng() - 0.5) * 14
        const xx = x + xJitter

        const zig = (i + b) % 2 === 0 ? zigAmp : -zigAmp
        const noise = (bandRng() - 0.5) * 18

        const y = baseY + slope * (xx - width / 2) + zig + noise * 0.35

        const dx = xx - width / 2
        const dy = y - height / 2
        const centerNorm = Math.min(1, Math.sqrt(dx * dx + dy * dy) / maxCenterDist)
        const alpha = 0.10 + 0.90 * Math.pow(1 - centerNorm, 1.6)

        pts.push({ x: xx, y, alpha })
      }

      const dash = kind === 0 ? "5 14" : "4 12"
      const dur = 5.5 + bandRng() * 2.5

      out.push({
        kind,
        points: pts,
        strokeOpacity: 0.28 + bandRng() * 0.16,
        dash,
        dashOffsetTo: 80 + bandRng() * 60,
        dur,
      })
    }

    return out
  }, [])

  const dotCyan = isDark ? "rgba(0,242,255,0.60)" : "rgba(0,186,232,0.45)"
  const dotPink = isDark ? "rgba(255,0,229,0.52)" : "rgba(236,72,153,0.32)"
  const lineCyan = isDark ? "rgba(0,242,255,0.38)" : "rgba(0,186,232,0.22)"
  const linePink = isDark ? "rgba(255,0,229,0.30)" : "rgba(236,72,153,0.16)"

  return (
    <svg
      aria-hidden
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <filter id="constGlow">
          <feGaussianBlur stdDeviation="1.6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g
        opacity={isDark ? 0.9 : 0.55}
        transform="translate(0 0)"
      >
        {bands.map((band, bIdx) => {
          const stroke = band.kind === 0 ? lineCyan : linePink
          const dashOffsetTo = enableMotion ? band.dashOffsetTo : 0
          const pointsAttr = band.points.map((p) => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ")

          return (
            <g key={bIdx}>
              {/* Glow underlay */}
              <polyline
                points={pointsAttr}
                fill="none"
                stroke={stroke}
                strokeWidth={2}
                strokeOpacity={band.strokeOpacity * 0.25}
                strokeDasharray={band.dash}
                strokeDashoffset={0}
                filter="url(#constGlow)"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {enableMotion ? (
                  <animate
                    attributeName="stroke-dashoffset"
                    from="0"
                    to={dashOffsetTo.toFixed(0)}
                    dur={`${band.dur.toFixed(2)}s`}
                    repeatCount="indefinite"
                  />
                ) : null}
              </polyline>

              {/* Main line */}
              <polyline
                points={pointsAttr}
                fill="none"
                stroke={stroke}
                strokeWidth={1}
                strokeOpacity={band.strokeOpacity}
                strokeDasharray={band.dash}
                strokeDashoffset={0}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {enableMotion ? (
                  <animate
                    attributeName="stroke-dashoffset"
                    from="0"
                    to={dashOffsetTo.toFixed(0)}
                    dur={`${band.dur.toFixed(2)}s`}
                    repeatCount="indefinite"
                  />
                ) : null}
              </polyline>

              {/* Dots at vertices */}
              {band.points.map((p, i) => (
                <circle
                  key={`${bIdx}-${i}`}
                  cx={p.x}
                  cy={p.y}
                  r={band.kind === 0 ? 1.05 : 0.95}
                  fill={band.kind === 0 ? dotCyan : dotPink}
                  opacity={(isDark ? 0.95 : 0.75) * p.alpha}
                />
              ))}
            </g>
          )
        })}
      </g>
    </svg>
  )
}

