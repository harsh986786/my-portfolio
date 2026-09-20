"use client";
import React from "react";
import { Sparkles, ArrowUpRight } from "lucide-react";

export function Header() {
  // Apna naam yahan set kar lo:
  const firstName = "HARSH"; // e.g., "AMAN"
  const lastName = "KESHRI";   // e.g., "SHARMA"
  const initials = `${firstName[0] || "Y"}${lastName[0] || "N"}`;

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-[#040406]/75 border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-14 h-20 flex items-center justify-between">
        
        {/* Stylish Brand Logo / Signature Identity */}
        <a href="#" className="group flex items-center gap-3.5 select-none">
          {/* Glowing Animated Monogram Shield */}
          <div className="relative flex items-center justify-center w-11 h-11 rounded-2xl bg-gradient-to-tr from-rose-500 via-purple-600 to-indigo-500 p-[1.5px] shadow-[0_0_20px_rgba(244,63,94,0.3)] group-hover:shadow-[0_0_30px_rgba(244,63,94,0.6)] group-hover:scale-105 transition-all duration-500">
            <div className="w-full h-full bg-[#09090d] rounded-[14px] flex items-center justify-center">
              <span className="font-black text-sm tracking-tighter bg-gradient-to-br from-white via-zinc-200 to-rose-300 bg-clip-text text-transparent font-mono">
                {initials}
              </span>
            </div>
          </div>

          {/* Luxury Editorial Typography Name */}
          <div className="flex flex-col">
            <div className="flex items-baseline gap-1.5 leading-none">
              <span className="text-lg font-black tracking-tight text-white uppercase group-hover:text-rose-400 transition-colors">
                {firstName}
              </span>
              <span className="font-serif italic font-light text-lg text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-orange-300 to-amber-200 tracking-normal lowercase">
                {lastName}.
              </span>
            </div>
            <span className="text-[9px] font-mono tracking-[0.25em] text-zinc-400 uppercase mt-1">
              Creative Director &amp; Dev
            </span>
          </div>
        </a>

        {/* Center Pill Navigation */}
        <nav className="hidden md:flex items-center gap-1 px-4 py-1.5 rounded-full bg-zinc-900/80 border border-white/10 backdrop-blur-md">
          <a
            href="#works"
            className="px-4 py-1.5 text-xs font-mono uppercase tracking-widest text-zinc-400 hover:text-white hover:bg-white/5 rounded-full transition-all"
          >
            Works
          </a>
          <a
            href="#works"
            className="px-4 py-1.5 text-xs font-mono uppercase tracking-widest text-zinc-400 hover:text-white hover:bg-white/5 rounded-full transition-all"
          >
            Graphics
          </a>
          <a
            href="#contact"
            className="px-4 py-1.5 text-xs font-mono uppercase tracking-widest text-zinc-400 hover:text-white hover:bg-white/5 rounded-full transition-all"
          >
            Contact
          </a>
        </nav>

        {/* Right CTA Button */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-extrabold text-xs uppercase tracking-widest hover:bg-zinc-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:scale-105"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

      </div>
    </header>
  );
}