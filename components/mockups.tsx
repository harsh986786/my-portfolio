"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import type { MockupKey } from "@/lib/data";

/* Decorative, code-drawn product previews. Swap for real screenshots
   (next/image) whenever you have them. All are hidden from assistive tech. */

function WindowFrame({ url, children }: { url: string; children: ReactNode }) {
  return (
    <div className="overflow-hidden rounded-lg border border-line bg-card shadow-2xl shadow-black/60">
      <div className="flex items-center gap-3 border-b border-line bg-raised/70 px-3 py-2">
        <div className="flex gap-1.5">
          <span className="size-2 rounded-full bg-zinc-700" />
          <span className="size-2 rounded-full bg-zinc-700" />
          <span className="size-2 rounded-full bg-zinc-700" />
        </div>
        <div className="mx-auto w-full max-w-[13rem] truncate rounded-md bg-ink/70 px-3 py-0.5 text-center font-mono text-[10px] text-zinc-500">
          {url}
        </div>
        <div className="w-9" />
      </div>
      {children}
    </div>
  );
}

/* --------------------------------- Pulse ---------------------------------- */

function PulseMockup() {
  const line =
    "M0,92 C22,84 40,88 62,72 S102,62 124,68 S162,38 192,44 S242,22 272,28 S304,12 320,14";
  return (
    <WindowFrame url="pulse.app/overview">
      <div className="p-4">
        <div className="grid grid-cols-3 gap-2">
          {[
            ["Events / s", "48.2k"],
            ["p95 latency", "38ms"],
            ["Error rate", "0.02%"],
          ].map(([k, v]) => (
            <div key={k} className="rounded-md border border-line bg-raised/60 px-2.5 py-2">
              <div className="text-[10px] text-zinc-500">{k}</div>
              <div className="mt-0.5 font-mono text-sm text-zinc-100">{v}</div>
            </div>
          ))}
        </div>

        <svg viewBox="0 0 320 120" className="mt-4 h-auto w-full" role="presentation">
          <defs>
            <linearGradient id="pulse-fill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#8b5cf6" stopOpacity="0.35" />
              <stop offset="1" stopColor="#8b5cf6" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="pulse-stroke" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="#8b5cf6" />
              <stop offset="1" stopColor="#22d3ee" />
            </linearGradient>
          </defs>
          {[30, 60, 90].map((y) => (
            <line key={y} x1="0" x2="320" y1={y} y2={y} stroke="#26262a" strokeDasharray="2 4" />
          ))}
          <motion.path
            d={`${line} L320,120 L0,120 Z`}
            fill="url(#pulse-fill)"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <motion.path
            d={line}
            fill="none"
            stroke="url(#pulse-stroke)"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 1.4, ease: "easeOut" }}
          />
        </svg>
      </div>
    </WindowFrame>
  );
}

/* --------------------------------- Relay ---------------------------------- */

function RelayMockup() {
  const steps = [
    ["Resolved dependencies", "0.4s"],
    ["Built 38 targets", "11.8s"],
    ["Passed 1,204 tests", "9.1s"],
    ["Deployed to 14 regions", "6.3s"],
  ];
  return (
    <div className="overflow-hidden rounded-lg border border-line bg-card font-mono text-[11px] shadow-2xl shadow-black/60 sm:text-xs">
      <div className="flex items-center gap-1.5 border-b border-line bg-raised/70 px-3 py-2">
        <span className="size-2 rounded-full bg-zinc-700" />
        <span className="size-2 rounded-full bg-zinc-700" />
        <span className="size-2 rounded-full bg-zinc-700" />
        <span className="ml-3 text-[10px] text-zinc-500">~/monorepo</span>
      </div>
      <div className="space-y-2 p-4 leading-relaxed">
        <p className="text-zinc-100">
          <span className="text-violet-400">$</span> relay deploy --env production
        </p>
        {steps.map(([label, time]) => (
          <p key={label} className="flex items-center gap-2 text-zinc-400">
            <span className="text-emerald-400">✓</span>
            <span className="flex-1 truncate">{label}</span>
            <span className="text-zinc-600">{time}</span>
          </p>
        ))}
        <p className="border-t border-line pt-3 text-zinc-200">
          Done in <span className="text-cyan-300">27.6s</span>
          <span className="text-zinc-600"> (was 1m 56s)</span>
        </p>
        <p className="text-zinc-100">
          <span className="text-violet-400">$</span>
          <span className="ml-2 inline-block h-3.5 w-1.5 translate-y-0.5 bg-zinc-300 motion-safe:animate-pulse" />
        </p>
      </div>
    </div>
  );
}

/* ---------------------------------- Lumen --------------------------------- */

function ScoreRing({ score, label }: { score: number; label: string }) {
  const c = 2 * Math.PI * 16;
  return (
    <div className="flex flex-col items-center gap-1.5">
      <svg viewBox="0 0 40 40" className="size-11" role="presentation">
        <circle cx="20" cy="20" r="16" fill="none" stroke="#26262a" strokeWidth="3" />
        <motion.circle
          cx="20"
          cy="20"
          r="16"
          fill="none"
          stroke="#34d399"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray={c}
          transform="rotate(-90 20 20)"
          initial={{ strokeDashoffset: c }}
          whileInView={{ strokeDashoffset: c * (1 - score / 100) }}
          viewport={{ once: true, margin: "-20%" }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        />
        <text x="20" y="23.5" textAnchor="middle" fontSize="11" fill="#e4e4e7" fontFamily="var(--font-geist-mono)">
          {score}
        </text>
      </svg>
      <span className="text-[9px] text-zinc-500">{label}</span>
    </div>
  );
}

function LumenMockup() {
  return (
    <WindowFrame url="lumen.store">
      <div className="space-y-3 p-4">
        <div className="flex items-center justify-between">
          <div className="h-2 w-12 rounded bg-zinc-600" />
          <div className="flex gap-2">
            <div className="h-1.5 w-8 rounded bg-zinc-700" />
            <div className="h-1.5 w-8 rounded bg-zinc-700" />
            <div className="h-1.5 w-8 rounded bg-zinc-700" />
          </div>
        </div>
        <div className="h-20 rounded-md bg-gradient-to-br from-violet-500/30 via-violet-500/10 to-cyan-400/25" />
        <div className="grid grid-cols-3 gap-2">
          {["from-zinc-700/60", "from-violet-500/25", "from-cyan-400/20"].map((g) => (
            <div key={g} className="space-y-1.5">
              <div className={`aspect-square rounded-md bg-gradient-to-br ${g} to-zinc-900`} />
              <div className="h-1.5 w-3/4 rounded bg-zinc-700" />
              <div className="h-1.5 w-1/3 rounded bg-zinc-800" />
            </div>
          ))}
        </div>
        <div className="flex items-center justify-around border-t border-line pt-3">
          <ScoreRing score={99} label="Performance" />
          <ScoreRing score={100} label="Accessibility" />
          <ScoreRing score={100} label="Best practices" />
          <ScoreRing score={100} label="SEO" />
        </div>
      </div>
    </WindowFrame>
  );
}

const mockups: Record<MockupKey, () => ReactNode> = {
  pulse: PulseMockup,
  relay: RelayMockup,
  lumen: LumenMockup,
};

export function Mockup({ name }: { name: MockupKey }) {
  const Component = mockups[name];
  return (
    <div
      aria-hidden
      className="relative h-full overflow-hidden rounded-xl border border-line bg-[#08080a] p-4 sm:p-6"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_0%,rgba(139,92,246,0.14),transparent_55%),radial-gradient(circle_at_0%_100%,rgba(34,211,238,0.08),transparent_50%)]" />
      <div className="relative mx-auto flex h-full max-w-md items-center">
        <div className="w-full">
          <Component />
        </div>
      </div>
    </div>
  );
}
