"use client"

import React, { useEffect, useMemo, useState } from "react"

type HeroConstellationNetworkProps = {
  isDark: boolean
}

// Deterministic PRNG for stable geometry.
function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5)
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

export function HeroConstellationNetwork({
  isDark,
}: HeroConstellationNetworkProps) {
  const width = 1440
  const height = 900

  const [enableMotion, setEnableMotion] = useState(false)

  useEffect(() => {
    const reduceMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    ).matches
    setEnableMotion(!reduceMotion)
  }, [])

  const { points, edges } = useMemo(() => {
    const rng = mulberry32(1337)

    const cols = 15
    const rows = 9
    const jitterX = 28
    const jitterY = 22

    const maxCenterDist = Math.sqrt(width * width + height * height) / 2

    const points: Array<{
      x: number
      y: number
      kind: 0 | 1
      alpha: number
      pulseDelay: number
      pulseDur: number
      pulseEnabled: boolean
      r: number
    }> = []

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const xBase = (c / (cols - 1)) * width
        const yBase = (r / (rows - 1)) * height

        const x = xBase + (rng() - 0.5) * jitterX
        const y = yBase + (rng() - 0.5) * jitterY

        const kind: 0 | 1 = x < width * 0.55 ? 0 : 1

        const dx = x - width / 2
        const dy = y - height / 2
        const centerNorm = Math.min(
          1,
          Math.sqrt(dx * dx + dy * dy) / maxCenterDist
        )

        // stronger in the center; fades out near edges
        const alpha = 0.12 + 0.88 * Math.pow(1 - centerNorm, 1.6)

        const pulseDelay = rng() * 3.8
        const pulseDur = 2.4 + rng() * 2.0
        const pulseEnabled = rng() > 0.35 // ~65% dots animate
        const rDot = kind === 0 ? 1.45 : 1.25

        points.push({
          x,
          y,
          kind,
          alpha,
          pulseDelay,
          pulseDur,
          pulseEnabled,
          r: rDot,
        })
      }
    }

    // Build connected edges using limited nearest-neighbors.
    const distMax = 230
    const k = 3
    const created = new Set<string>()

    const edges: Array<{
      a: number
      b: number
      kind: 0 | 1
      alpha: number
      dash: string
      dur: number
      delay: number
      dashOffsetTo: number
    }> = []

    for (let i = 0; i < points.length; i++) {
      const a = points[i]

      const candidates: Array<{ j: number; dist: number }> = []
      for (let j = 0; j < points.length; j++) {
        if (i === j) continue
        const b = points[j]
        const dx = a.x - b.x
        const dy = a.y - b.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist <= distMax) candidates.push({ j, dist })
      }

      candidates.sort((p, q) => p.dist - q.dist)
      const picks = candidates.slice(0, k)

      for (const pick of picks) {
        const j = pick.j
        const keyA = Math.min(i, j)
        const keyB = Math.max(i, j)
        const key = `${keyA}-${keyB}`
        if (created.has(key)) continue
        created.add(key)

        const b = points[j]
        const t = 1 - pick.dist / distMax

        // gating so it looks like a designed network, not a full mesh.
        const centerBoost = (a.alpha + b.alpha) / 2
        const gate = 0.35 + 0.55 * centerBoost
        if (rng() > gate) continue

        const alpha = (0.16 + 0.42 * t) * (0.65 + 0.55 * centerBoost)

        const kind: 0 | 1 = a.kind === b.kind ? a.kind : (rng() > 0.5 ? a.kind : b.kind)

        // Denser dash pattern so lines are more clearly visible under vignette.
        const dash = kind === 0 ? "1.4 4.2" : "1.2 3.8"
        const dur = 3.2 + rng() * 3.2
        const delay = rng() * 2.5
        const dashOffsetTo = 30 + rng() * 45

        edges.push({
          a: i,
          b: j,
          kind,
          alpha,
          dash,
          dur,
          delay,
          dashOffsetTo,
        })
      }
    }

    return { points, edges }
  }, [])

  const dotCyan = isDark ? "rgba(0,242,255,0.62)" : "rgba(0,186,232,0.50)"
  const dotPink = isDark ? "rgba(255,0,229,0.56)" : "rgba(236,72,153,0.38)"
  const lineCyan = isDark ? "rgba(0,242,255,0.40)" : "rgba(0,186,232,0.26)"
  const linePink = isDark ? "rgba(255,0,229,0.34)" : "rgba(236,72,153,0.20)"

  return (
    <svg
      aria-hidden
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <filter id="netGlow">
          <feGaussianBlur stdDeviation="3.2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g opacity={isDark ? 1 : 0.85}>
        {/* Glow underlay */}
        {edges.map((e, idx) => {
          const a = points[e.a]
          const b = points[e.b]
          const stroke = e.kind === 0 ? lineCyan : linePink

          return (
            <line
              key={`g-${idx}`}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke={stroke}
              strokeWidth={2.2}
              strokeOpacity={Math.min(1, e.alpha * 0.34)}
              strokeLinecap="round"
              strokeDasharray={e.dash}
              strokeDashoffset={0}
              filter="url(#netGlow)"
            >
              {enableMotion ? (
                <animate
                  attributeName="stroke-dashoffset"
                  from="0"
                  to={e.dashOffsetTo.toFixed(0)}
                  dur={`${e.dur.toFixed(2)}s`}
                  repeatCount="indefinite"
                  begin={`${(-e.delay).toFixed(2)}s`}
                />
              ) : null}
            </line>
          )
        })}

        {/* Main edges */}
        {edges.map((e, idx) => {
          const a = points[e.a]
          const b = points[e.b]
          const stroke = e.kind === 0 ? lineCyan : linePink

          return (
            <line
              key={`l-${idx}`}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke={stroke}
              strokeWidth={1}
              strokeOpacity={Math.min(1, e.alpha * 1.05)}
              strokeLinecap="round"
              strokeDasharray={e.dash}
              strokeDashoffset={0}
            >
              {enableMotion ? (
                <animate
                  attributeName="stroke-dashoffset"
                  from="0"
                  to={e.dashOffsetTo.toFixed(0)}
                  dur={`${e.dur.toFixed(2)}s`}
                  repeatCount="indefinite"
                  begin={`${(-e.delay).toFixed(2)}s`}
                />
              ) : null}
            </line>
          )
        })}

        {/* Dots */}
        {points.map((p, idx) => {
          const fill = p.kind === 0 ? dotCyan : dotPink
          const baseOpacity = (isDark ? 1 : 0.9) * p.alpha

          return (
            <circle
              key={idx}
              cx={p.x}
              cy={p.y}
              r={p.r}
              fill={fill}
              opacity={baseOpacity}
              filter="url(#netGlow)"
            >
              {enableMotion && p.pulseEnabled ? (
                <animate
                  attributeName="opacity"
                  values={`${(baseOpacity * 0.35).toFixed(3)};${baseOpacity.toFixed(
                    3
                  )};${(baseOpacity * 0.6).toFixed(3)}`}
                  dur={`${p.pulseDur.toFixed(2)}s`}
                  repeatCount="indefinite"
                  begin={`${(-p.pulseDelay).toFixed(2)}s`}
                />
              ) : null}
            </circle>
          )
        })}
      </g>
    </svg>
  )
}

