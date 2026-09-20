"use client";
import React, { useState } from "react";
import { Copy, Check, ArrowUpRight, Mail } from "lucide-react";

export function Footer() {
  const [copied, setCopied] = useState(false);
  const email = "harshkeshri.234.hk@gmail.com"; // Yahan apna original email daal dena

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="relative max-w-7xl mx-auto px-6 sm:px-14 w-full pt-20 pb-14 overflow-hidden border-t border-white/10">
      {/* Background Subtle Ambient Light */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gradient-to-t from-rose-600/15 via-indigo-600/10 to-transparent blur-[140px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs font-mono uppercase mb-8">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          ACCEPTING NEW COMMISSIONS &amp; ROLES
        </div>

        {/* Big Editorial Headline */}
        <h2 className="text-5xl sm:text-7xl md:text-8xl font-black uppercase tracking-tight text-white leading-[0.95]">
          LET'S CREATE <br />
          <span className="font-serif italic font-light lowercase text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-orange-300 to-amber-200">
            together.
          </span>
        </h2>

        <p className="mt-6 text-zinc-400 text-base sm:text-lg max-w-xl font-light">
          Have an ambitious project, brand identity concept, or web application in mind? Let's turn it into reality.
        </p>

        {/* Interactive Email Copy Widget */}
        <div className="mt-10 flex flex-wrap justify-center items-center gap-4">
          <button
            onClick={handleCopy}
            className="flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-zinc-200 transition-all shadow-[0_0_35px_rgba(255,255,255,0.2)] hover:scale-105"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? "Copied To Clipboard!" : email}</span>
          </button>

          <a
            href={`mailto:${email}`}
            className="flex items-center gap-2 px-8 py-4 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500 transition-all text-xs font-semibold tracking-wider uppercase hover:scale-105"
          >
            <Mail className="w-4 h-4 text-rose-400" />
            Open Mail App
          </a>
        </div>

        {/* Bottom Credits & Social Strip */}
        <div className="mt-24 w-full pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>
            © 2026 STUDIO // DESIGNED WITH OBSESSION
          </div>
          <div className="flex items-center gap-6 text-zinc-400">
            <a href="https://github.com/harsh986786" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
              GITHUB <ArrowUpRight className="w-3 h-3" />
            </a>
            <a href="https://www.linkedin.com/in/harsh-keshri-b549b631b?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
              LINKEDIN <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}