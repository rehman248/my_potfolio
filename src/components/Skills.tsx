"use client";

import React from "react";
import { Sparkles } from "lucide-react";

const SKILLS = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Python (Basic)",
  "GitHub",
  "Responsive Design",
  "REST APIs",
  "UI/UX Implementation",
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 px-4 sm:px-6 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-xl mx-auto mb-10">
        <span className="text-xs font-bold uppercase tracking-widest text-[#FACC15] bg-[#FACC15]/10 px-3.5 py-1 rounded-full border border-[#FACC15]/20 inline-flex items-center gap-1.5">
          <Sparkles className="w-3 h-3 text-[#FACC15]" />
          <span>Core Competencies</span>
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-3">
          Skills &amp; <span className="text-[#FACC15]">Technologies</span>
        </h2>
        <p className="mt-2 text-zinc-400 text-sm sm:text-base">
          Technologies and tools I specialize in to build modern web solutions.
        </p>
      </div>

      {/* Clean Minimalist Badges (No Heavy Cards) */}
      <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-3.5 max-w-3xl mx-auto">
        {SKILLS.map((skill, index) => (
          <div
            key={index}
            className="group relative inline-flex items-center gap-2.5 px-5 py-2.5 sm:py-3 rounded-full bg-[#121212] border border-zinc-800 hover:border-[#FACC15] hover:bg-[#FACC15]/[0.06] hover:shadow-[0_0_20px_rgba(250,204,21,0.2)] hover:-translate-y-1 transition-all duration-200 cursor-default"
          >
            {/* Glowing Accent Dot */}
            <span className="w-2 h-2 rounded-full bg-[#FACC15] group-hover:scale-125 transition-transform shadow-[0_0_6px_#FACC15]" />

            {/* Skill Name */}
            <span className="text-sm sm:text-base font-semibold text-zinc-200 group-hover:text-white transition-colors">
              {skill}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
