"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Sparkles, ExternalLink, ShieldCheck, Zap, HeartPulse } from "lucide-react";

const HERO_PROJECTS = [
  {
    id: "apply-mitra",
    name: "Apply Mitra",
    tagline: "Job & Application Automation System",
    tools: "Next.js • Node.js • Automation",
    metric: "Sub-second Workflow",
    icon: Zap,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
    accent: "from-amber-500/30 via-orange-600/20 to-transparent",
    badgeColor: "text-amber-400 border-amber-500/30 bg-amber-500/10",
  },
  {
    id: "civic-shield",
    name: "Civic Shield",
    tagline: "Public Safety & Incident Tracking Portal",
    tools: "React • Express • GeoJSON API",
    metric: "Real-Time Tracking",
    icon: ShieldCheck,
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop",
    accent: "from-rose-500/30 via-red-600/20 to-transparent",
    badgeColor: "text-rose-400 border-rose-500/30 bg-rose-500/10",
  },
  {
    id: "medi-connect",
    name: "Medi Connect",
    tagline: "Telemedicine & Health Records Network",
    tools: "Full-Stack • PostgreSQL • WebRTC",
    metric: "Secure Records",
    icon: HeartPulse,
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop",
    accent: "from-indigo-500/30 via-cyan-600/20 to-transparent",
    badgeColor: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
  },
];

export default function Hero() {
  const [selectedProject, setSelectedProject] = useState(0);
  const active = HERO_PROJECTS[selectedProject];
  const IconComponent = active.icon;

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center px-6 sm:px-14 py-10 overflow-hidden bg-[#040406]">
      {/* 1. Clear Bold Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[18vw] font-black tracking-tighter text-white/[0.04] uppercase select-none pointer-events-none z-0">
        CREATIVE
      </div>

      {/* 2. Seamless Radial Glows */}
      <div className="absolute top-1/4 right-[15%] w-[600px] h-[600px] bg-gradient-to-br from-rose-600/20 via-purple-600/15 to-transparent blur-[160px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-10 left-[10%] w-[550px] h-[550px] bg-gradient-to-tr from-indigo-600/20 via-blue-600/15 to-transparent blur-[160px] rounded-full pointer-events-none z-0" />

      {/* 3. Main Hero Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side: Headline & Bio */}
        <div className="lg:col-span-7 flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-rose-500/30 bg-rose-500/10 text-rose-300 text-xs font-bold tracking-wider uppercase mb-6 w-fit"
          >
            <Sparkles className="w-3.5 h-3.5 text-rose-400" />
            Graphic Designer &amp; Creative Developer
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-6xl sm:text-8xl md:text-9xl font-black tracking-tight leading-[0.9] uppercase text-white"
          >
            VISUAL <br />
            <span className="font-serif italic font-light lowercase text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-orange-300 to-amber-200">
              dimension.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-base sm:text-lg text-zinc-400 font-light leading-relaxed max-w-xl"
          >
            Crafting high-impact brand identities, visual systems, and full-stack web applications engineered for speed and fluid user experience.
          </motion.p>

          <div className="mt-8 flex flex-wrap gap-4 items-center">
            <a
              href="#works"
              className="flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-black font-extrabold text-xs uppercase tracking-widest hover:bg-zinc-200 transition-all shadow-[0_0_35px_rgba(255,255,255,0.25)] hover:scale-105"
            >
              View All Works
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 px-8 py-3.5 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 font-semibold text-xs uppercase tracking-widest hover:border-zinc-600 hover:text-white transition-all hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </div>

        {/* Right Side: 3 Core Projects Switcher Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-zinc-950/90 shadow-[0_25px_60px_rgba(0,0,0,0.85)] backdrop-blur-xl p-5">
            
            {/* Top Project Selector Tabs */}
            <div className="flex items-center gap-2 pb-4 mb-4 border-b border-white/10 overflow-x-auto">
              {HERO_PROJECTS.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedProject(idx)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-mono uppercase tracking-wider transition-all whitespace-nowrap ${
                    selectedProject === idx
                      ? "bg-white text-black font-bold shadow-lg"
                      : "bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </div>

            {/* Active Project Animated Showcase */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="relative rounded-2xl overflow-hidden bg-zinc-900 border border-white/10"
              >
                {/* Visual Image Screen */}
                <div className="h-64 sm:h-72 w-full relative overflow-hidden">
                  <img
                    src={active.image}
                    alt={active.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                  {/* Dynamic Status Badge */}
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider border backdrop-blur-md ${active.badgeColor}`}>
                      {active.metric}
                    </span>
                  </div>

                  {/* Overlay Title & Details */}
                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                    <div>
                      <div className="flex items-center gap-1.5 text-[11px] font-mono text-zinc-300 mb-1">
                        <IconComponent className="w-3.5 h-3.5 text-rose-400" />
                        <span>{active.tools}</span>
                      </div>
                      <h3 className="text-2xl font-black text-white uppercase tracking-tight">
                        {active.name}
                      </h3>
                      <p className="text-xs text-zinc-400 mt-0.5 font-light">
                        {active.tagline}
                      </p>
                    </div>

                    <a
                      href="#works"
                      className="px-3 py-2 rounded-xl bg-white text-black text-xs font-bold hover:bg-zinc-200 transition-all flex items-center gap-1 shadow-lg shrink-0 ml-3"
                    >
                      <span>Explore</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

          </div>
        </motion.div>

      </div>
    </section>
  );
}