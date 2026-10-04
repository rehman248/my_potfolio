"use client";

import React from "react";
import { Zap, Layers, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: Zap,
      title: "Fast Performance",
      desc: "Optimized code, fast load times, and smooth micro-interactions that keep visitors engaged.",
    },
    {
      icon: Layers,
      title: "100% Responsive Layouts",
      desc: "Pixel-perfect rendering across mobile phones, tablets, laptops, and large screens.",
    },
    {
      icon: ShieldCheck,
      title: "Clean Modern Architecture",
      desc: "Structured, maintainable code following modern React, TypeScript, and Tailwind standards.",
    },
  ];

  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs font-bold uppercase tracking-widest text-[#FACC15] bg-[#FACC15]/10 px-3 py-1 rounded-full border border-[#FACC15]/20">
          About Me
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-3">
          Passionate About Building{" "}
          <span className="text-[#FACC15]">Quality Web Experiences</span>
        </h2>
        <p className="mt-3 text-zinc-400 text-sm sm:text-base leading-relaxed">
          I am a Web Developer based in Faisalabad, Pakistan. I focus on creating fast, user-friendly websites with clean code and high attention to detail.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Left Story Card */}
        <div className="lg:col-span-7 theme-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">
              Turning client ideas into functional, beautiful websites.
            </h3>

            <p className="text-zinc-400 text-sm leading-relaxed">
              Whether building an e-commerce platform, a business showcase, or an interactive web application, I emphasize usability, responsiveness, and clean aesthetics that give businesses a professional edge online.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2 text-sm text-zinc-200">
                <CheckCircle2 className="w-4 h-4 text-[#FACC15] shrink-0" />
                <span>React &amp; Next.js</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-zinc-200">
                <CheckCircle2 className="w-4 h-4 text-[#FACC15] shrink-0" />
                <span>Tailwind CSS</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-zinc-200">
                <CheckCircle2 className="w-4 h-4 text-[#FACC15] shrink-0" />
                <span>TypeScript Discipline</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-zinc-200">
                <CheckCircle2 className="w-4 h-4 text-[#FACC15] shrink-0" />
                <span>Mobile-First Design</span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-5 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="block text-xs uppercase tracking-wider text-zinc-400">Location</span>
              <span className="text-white font-semibold text-sm">Faisalabad, Pakistan</span>
            </div>
            <div>
              <span className="block text-xs uppercase tracking-wider text-zinc-400">Specialty</span>
              <span className="text-white font-semibold text-sm">Frontend &amp; Web Development</span>
            </div>
            <div>
              <span className="block text-xs uppercase tracking-wider text-zinc-400">Status</span>
              <span className="text-[#FACC15] font-semibold text-sm">Open for Work</span>
            </div>
          </div>
        </div>

        {/* Right Highlights */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="theme-card p-5 rounded-2xl flex items-start gap-4"
              >
                <div className="p-2.5 rounded-xl bg-[#FACC15]/10 text-[#FACC15] border border-[#FACC15]/20 shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
