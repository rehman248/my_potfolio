"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Mail } from "lucide-react";

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center pt-28 pb-16 px-4 sm:px-6 text-center overflow-hidden"
    >
      {/* Subtle Yellow Ambient Behind Hero */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FACC15]/05 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Clean Status Pill */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#121212] border border-zinc-800 mb-8 shadow-sm">
        <span className="w-2 h-2 rounded-full bg-[#FACC15] shadow-[0_0_8px_#FACC15]" />
        <span className="text-xs font-medium text-zinc-300 tracking-wide">
          Available for Freelance &amp; Full-time Work
        </span>
      </div>

      {/* Center Profile Image with Clean Yellow Accent Border */}
      <div className="relative mb-8 group">
        {/* Soft yellow ambient glow */}
        <div className="absolute -inset-2 rounded-full bg-[#FACC15]/15 blur-lg group-hover:bg-[#FACC15]/25 transition-all duration-300 pointer-events-none" />

        {/* Thin Yellow Border Ring */}
        <div className="relative p-[2px] rounded-full bg-gradient-to-tr from-[#FACC15] via-[#EAB308]/60 to-[#FACC15]/40 shadow-[0_8px_25px_rgba(0,0,0,0.6)]">
          <div className="relative w-[170px] h-[170px] sm:w-[200px] sm:h-[200px] md:w-[240px] md:h-[240px] rounded-full overflow-hidden bg-[#080808]">
            <Image
              src="/images/profile/abdul-rehman-profile.jpg"
              alt="Abdul Rehman - Web Developer"
              width={500}
              height={500}
              priority
              className="w-full h-full object-cover object-[center_25%] transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* Hero Typography */}
      <div className="max-w-3xl mx-auto space-y-3">
        <p className="text-sm font-semibold text-[#FACC15] tracking-widest uppercase">
          Hi, I&apos;m
        </p>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white leading-tight">
          Abdul Rehman
        </h1>

        <h2 className="text-2xl sm:text-3xl font-bold text-[#FACC15]">
          Web Developer
        </h2>

        <p className="text-base sm:text-lg text-zinc-400 max-w-xl mx-auto font-normal leading-relaxed pt-1">
          I build modern, responsive and high-performance websites that help
          businesses grow online.
        </p>
      </div>

      {/* Clean Black & Yellow Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 w-full max-w-md">
        <button
          onClick={() => scrollTo("projects")}
          className="w-full sm:w-auto px-7 py-3 rounded-full font-bold text-black btn-yellow flex items-center justify-center gap-2 text-sm tracking-wide cursor-pointer group"
        >
          <span>View Projects</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>

        <button
          onClick={() => scrollTo("contact")}
          className="w-full sm:w-auto px-7 py-3 rounded-full font-semibold btn-outline-yellow flex items-center justify-center gap-2 text-sm tracking-wide cursor-pointer"
        >
          <Mail className="w-4 h-4 text-[#FACC15]" />
          <span>Contact Me</span>
        </button>
      </div>

      {/* Clean Metric Badges */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto mt-14 w-full px-2">
        <div className="theme-card p-4 rounded-2xl flex flex-col items-center justify-center text-center">
          <div className="text-2xl sm:text-3xl font-black text-[#FACC15]">
            100%
          </div>
          <div className="text-xs text-zinc-400 mt-1 font-medium">Responsive Design</div>
        </div>

        <div className="theme-card p-4 rounded-2xl flex flex-col items-center justify-center text-center">
          <div className="text-2xl sm:text-3xl font-black text-[#FACC15]">
            15+
          </div>
          <div className="text-xs text-zinc-400 mt-1 font-medium">Projects Built</div>
        </div>

        <div className="theme-card p-4 rounded-2xl flex flex-col items-center justify-center text-center">
          <div className="text-2xl sm:text-3xl font-black text-[#FACC15]">
            &lt; 1s
          </div>
          <div className="text-xs text-zinc-400 mt-1 font-medium">Fast Load Times</div>
        </div>

        <div className="theme-card p-4 rounded-2xl flex flex-col items-center justify-center text-center">
          <div className="text-2xl sm:text-3xl font-black text-[#FACC15]">
            24/7
          </div>
          <div className="text-xs text-zinc-400 mt-1 font-medium">Client Support</div>
        </div>
      </div>
    </section>
  );
}
