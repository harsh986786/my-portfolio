"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Palette, Code2 } from "lucide-react";

const GRAPHIC_WORKS = [
  {
    title: "Viaggio India Brand Suite",
    category: "Brand Identity & Logo Design",
    tools: "Illustrator • Figma • Guidelines",
    image: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Cyberpunk Dimension Poster",
    category: "3D Kinetic & Poster Art",
    tools: "Blender 4 • Photoshop",
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Civic Shield Visual Campaign",
    category: "Public Safety UI & Visuals",
    tools: "Figma • Art Direction",
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Minimal Studio Packaging",
    category: "3D Product Mockup & Print",
    tools: "Photoshop • InDesign",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1000&auto=format&fit=crop",
  },
];

const DEV_WORKS = [
  {
    title: "Apply Mitra",
    category: "Job & Application Automation System",
    tools: "Next.js • Node.js • MongoDB",
    metric: "Fast Workflows",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Civic Shield",
    category: "Civic Security & Issue Tracking Portal",
    tools: "React • Express • GeoJSON API",
    metric: "Real-Time Tracking",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Viaggio India",
    category: "Tourism & Experience Booking Platform",
    tools: "Next.js • Tailwind CSS • Razorpay",
    metric: "Immersive UI",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Excel Analytics",
    category: "Data Parsing & Visualization Engine",
    tools: "Python / Fast-API • React • Chart.js",
    metric: "Instant Processing",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Medi Connect",
    category: "Healthcare & Appointment Telemedicine App",
    tools: "Full-Stack • PostgreSQL • WebRTC",
    metric: "Secure Records",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Student Management System",
    category: "Academic Records, Attendance & Grading Hub",
    tools: "React • Node.js • REST APIs",
    metric: "Role-Based Auth",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop",
  },
];

export function Projects() {
  const [activeTab, setActiveTab] = useState<"dev" | "graphics">("dev");

  return (
    <section id="works" className="relative max-w-7xl mx-auto px-6 sm:px-14 w-full py-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 mb-12 gap-6">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-rose-400 block mb-2">
            Selected Exhibition
          </span>
          <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight text-white">
            Works &amp; <span className="font-serif italic font-light text-zinc-400">Creations.</span>
          </h2>
        </div>

        {/* Tab Toggle */}
        <div className="flex items-center p-1.5 rounded-full bg-zinc-900 border border-zinc-800">
          <button
            onClick={() => setActiveTab("dev")}
            className={`flex items-center gap-2 px-6 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all ${
              activeTab === "dev"
                ? "bg-indigo-600 text-white shadow-[0_0_20px_rgba(99,102,241,0.4)]"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            Software &amp; Web ({DEV_WORKS.length})
          </button>
          <button
            onClick={() => setActiveTab("graphics")}
            className={`flex items-center gap-2 px-6 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all ${
              activeTab === "graphics"
                ? "bg-rose-500 text-white shadow-[0_0_20px_rgba(244,63,94,0.4)]"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            <Palette className="w-3.5 h-3.5" />
            Graphic &amp; Brand ({GRAPHIC_WORKS.length})
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === "dev" ? (
          <motion.div
            key="dev"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {DEV_WORKS.map((project) => (
              <div
                key={project.title}
                className="group rounded-3xl bg-zinc-950 border border-white/10 overflow-hidden hover:border-indigo-500/50 transition-all duration-500 shadow-2xl flex flex-col justify-between"
              >
                <div className="aspect-[16/10] w-full overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-75 group-hover:opacity-95"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                  
                
                </div>

                <div className="p-6">
                  <span className="text-[11px] font-mono text-indigo-400 uppercase tracking-wider block mb-1">
                    {project.tools}
                  </span>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm text-zinc-400 mt-2 font-light line-clamp-2">
                    {project.category}
                  </p>

                  <div className="mt-6 pt-4 border-t border-white/10 flex justify-between items-center">
  {/* Left: Metric */}
  <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-md">
    {project.metric}
  </span>

  {/* Right: Clean Production Badge (No Dead Buttons) */}
  <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider flex items-center gap-1.5">
    <span className="w-1.5 h-1.5 rounded-full bg-zinc-500" />
    Production Build
  </span>
</div>
                </div>
              </div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="graphics"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {GRAPHIC_WORKS.map((work) => (
              <div
                key={work.title}
                className="group relative rounded-3xl bg-zinc-950 border border-white/10 overflow-hidden hover:border-white/30 transition-all duration-500 shadow-2xl"
              >
                <div className="aspect-[4/3] w-full overflow-hidden relative">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                  
                  <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>

                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="text-xs font-mono uppercase tracking-widest text-zinc-300 block mb-1">
                      {work.category} • {work.tools}
                    </span>
                    <h3 className="text-3xl font-black text-white uppercase tracking-tight">
                      {work.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}