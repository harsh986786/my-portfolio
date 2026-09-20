"use client";
import React from "react";
import { Palette, Box, Code, Cpu } from "lucide-react";

const TOOLKITS = [
  {
    icon: Palette,
    title: "Brand & Graphic Art",
    desc: "Posters, Identity Systems, Editorial Typography, Color Theory",
    tools: ["Photoshop", "Illustrator", "Figma", "InDesign"],
    color: "from-rose-500 to-orange-400",
  },
  {
    icon: Box,
    title: "3D & Motion",
    desc: "3D Visuals, Lighting, Kinetic Scenes, Material Simulation",
    tools: ["Blender 4", "Cycles", "Spline", "After Effects"],
    color: "from-fuchsia-500 to-purple-600",
  },
  {
    icon: Code,
    title: "Frontend & Interactions",
    desc: "Fluid 60FPS UI, WebGL Visuals, Responsive Layouts",
    tools: ["Next.js 15", "Tailwind CSS", "Three.js", "Framer Motion"],
    color: "from-indigo-500 to-cyan-400",
  },
  {
    icon: Cpu,
    title: "Engineering & Cloud",
    desc: "Serverless Architecture, Fast APIs, Edge Deployments",
    tools: ["TypeScript", "Node.js", "PostgreSQL", "Vercel"],
    color: "from-emerald-400 to-teal-500",
  },
];

export function Skills() {
  return (
    <section className="max-w-7xl mx-auto px-6 sm:px-14 w-full py-16">
      <div className="mb-12">
        <span className="text-xs font-mono uppercase tracking-widest text-rose-400 block mb-2">
          Design × Engineering Arsenal
        </span>
        <h2 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight">
          Creative <span className="font-serif italic font-light text-zinc-400">Toolkit.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {TOOLKITS.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-white/10 bg-zinc-950/60 p-6 flex flex-col justify-between hover:border-white/25 transition-all group"
          >
            <div>
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white uppercase tracking-tight">
                {item.title}
              </h3>
              <p className="text-zinc-400 text-xs mt-2 leading-relaxed font-light">
                {item.desc}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap gap-1.5">
              {item.tools.map((tool) => (
                <span key={tool} className="text-[10px] font-mono px-2 py-1 rounded bg-zinc-900 text-zinc-300 border border-zinc-800">
                  {tool}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}