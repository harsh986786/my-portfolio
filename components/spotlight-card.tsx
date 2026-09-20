"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import type { PointerEvent, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  /** Classes for the outer shell (grid spans, etc.). */
  className?: string;
  /** Classes for the padded content area. */
  innerClassName?: string;
};

/**
 * The card primitive used across the page.
 *
 * A 1px shell in the border colour wraps the card surface. On hover (or
 * keyboard focus inside) a violet → cyan radial gradient follows the cursor,
 * lighting the border and washing the surface — the page's signature detail.
 */
export function SpotlightCard({ children, className, innerClassName }: Props) {
  const x = useMotionValue(-999);
  const y = useMotionValue(-999);

  const borderGlow = useMotionTemplate`radial-gradient(260px circle at ${x}px ${y}px, rgba(139,92,246,0.95), rgba(34,211,238,0.55) 45%, transparent 75%)`;
  const surfaceGlow = useMotionTemplate`radial-gradient(440px circle at ${x}px ${y}px, rgba(139,92,246,0.10), rgba(34,211,238,0.05) 45%, transparent 70%)`;

  function handleMove(e: PointerEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  }

  const reveal =
    "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100";

  return (
    <div onPointerMove={handleMove} className={cn("group relative rounded-2xl bg-line p-px", className)}>
      <motion.div aria-hidden style={{ background: borderGlow }} className={cn(reveal, "rounded-2xl")} />
      <div className="relative h-full rounded-[15px] bg-card">
        <motion.div aria-hidden style={{ background: surfaceGlow }} className={cn(reveal, "rounded-[15px]")} />
        <div className={cn("relative h-full", innerClassName)}>{children}</div>
      </div>
    </div>
  );
}
