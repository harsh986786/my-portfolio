"use client";
import React, { useEffect, useState } from "react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import Hero from "@/components/hero";
import { Projects } from "@/components/projects";
import { Skills } from "@/components/skills";

export default function Page() {
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#050507] text-white selection:bg-indigo-500 selection:text-white overflow-x-hidden">
      {/* Global Cursor Spotlight Glow */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition duration-300 hidden md:block"
        style={{
          background: `radial-gradient(650px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(99, 102, 241, 0.12), transparent 80%)`,
        }}
      />

      <Header />
      <main className="relative z-10 flex flex-col gap-24 pb-20">
        <Hero />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}