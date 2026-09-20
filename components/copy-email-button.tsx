"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check, Copy } from "lucide-react";
import { site } from "@/lib/data";
import { useCopy } from "@/lib/use-copy";
import { cn } from "@/lib/utils";

type Props = {
  /** `outline` shows a "Copy Email" label; `address` shows the email itself. */
  variant?: "outline" | "address";
  className?: string;
};

export function CopyEmailButton({ variant = "outline", className }: Props) {
  const { copied, copy } = useCopy(site.email);
  const isAddress = variant === "address";

  return (
    <span className="relative inline-flex">
      <button
        type="button"
        onClick={copy}
        className={cn(
          "group/copy inline-flex items-center justify-center gap-2.5 rounded-xl border border-line bg-card text-zinc-100",
          "transition-all duration-200 hover:border-violet-500/50 hover:bg-raised",
          "hover:shadow-[0_0_0_1px_rgba(139,92,246,0.25),0_10px_36px_-10px_rgba(139,92,246,0.55)]",
          isAddress ? "h-12 px-5 font-mono text-sm sm:text-base" : "h-11 min-w-[9.5rem] px-5 text-sm font-medium",
          className,
        )}
      >
        <span>{isAddress ? site.email : copied ? "Email copied" : "Copy Email"}</span>
        <span className="relative grid size-4 place-items-center text-zinc-400 transition-colors group-hover/copy:text-cyan-300">
          <AnimatePresence mode="wait" initial={false}>
            {copied ? (
              <motion.span
                key="check"
                initial={{ scale: 0.4, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.4, opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="absolute text-emerald-400"
              >
                <Check className="size-4" aria-hidden />
              </motion.span>
            ) : (
              <motion.span
                key="copy"
                initial={{ scale: 0.4, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.4, opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="absolute"
              >
                <Copy className="size-4" aria-hidden />
              </motion.span>
            )}
          </AnimatePresence>
        </span>
      </button>

      {/* Confirmation bubble for the address variant, where the label can't change. */}
      <AnimatePresence>
        {isAddress && copied && (
          <motion.span
            aria-hidden
            initial={{ opacity: 0, y: 6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.18 }}
            className="pointer-events-none absolute -top-11 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg border border-line bg-raised px-3 py-1.5 text-xs font-medium text-emerald-400 shadow-lg"
          >
            Email copied
          </motion.span>
        )}
      </AnimatePresence>

      <span role="status" aria-live="polite" className="sr-only">
        {copied ? "Email address copied to clipboard" : ""}
      </span>
    </span>
  );
}
