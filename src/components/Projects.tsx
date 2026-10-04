"use client";

import React from "react";
import Image from "next/image";
import { ExternalLink, CheckCircle2, Sparkles, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/Icons";

export default function Projects() {
  const project = {
    title: "Lumina Fine Jewellery Website",
    category: "Featured Project • Live Deployment",
    description:
      "A modern, luxury fine jewellery e-commerce platform built with sophisticated dark aesthetics, interactive diamond and gold showcase galleries, responsive mobile-first layouts, and seamless browsing.",
    image: "/project-jewellery.jpg",
    tags: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Responsive Web Design",
      "Vercel",
      "UI/UX Design",
    ],
    liveUrl: "https://my-jewelary.vercel.app/",
    githubUrl: "https://github.com/rehman248",
    highlights: [
      "100% Responsive layout across smartphones, tablets, and desktops",
      "High-contrast luxury dark theme with radiant jewellery displays",
      "Fast load performance and smooth interactive navigation",
      "Live deployment hosted on Vercel",
    ],
  };

  return (
    <section id="projects" className="relative py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs font-bold uppercase tracking-widest text-[#FACC15] bg-[#FACC15]/10 px-3.5 py-1 rounded-full border border-[#FACC15]/20 inline-flex items-center gap-1.5">
          <Sparkles className="w-3 h-3 text-[#FACC15]" />
          <span>Featured Work</span>
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-3">
          My <span className="text-[#FACC15]">Project</span>
        </h2>
        <p className="mt-3 text-zinc-400 text-sm sm:text-base">
          A live commercial jewellery web application designed, developed, and deployed to production.
        </p>
      </div>

      {/* Featured Single Project Showcase Card */}
      <div className="theme-card rounded-3xl overflow-hidden border border-zinc-800 hover:border-[#FACC15]/40 transition-all duration-300">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
          {/* Left Column: Image Preview */}
          <div className="lg:col-span-7 relative min-h-[300px] sm:min-h-[400px] lg:min-h-[480px] bg-black overflow-hidden group">
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#121212]" />

            {/* Floating Top Badge */}
            <div className="absolute top-4 left-4 z-10">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-black/85 text-[#FACC15] border border-[#FACC15]/30 backdrop-blur-md shadow-lg">
                {project.category}
              </span>
            </div>

            {/* Quick Live Preview Icon */}
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 right-4 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/85 border border-zinc-700 text-xs font-semibold text-white hover:text-[#FACC15] hover:border-[#FACC15] backdrop-blur-md transition-all"
            >
              <span>my-jewelary.vercel.app</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Right Column: Project Details */}
          <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-[#121212]">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-[#FACC15]" />
                <span className="text-xs uppercase font-mono text-zinc-400 tracking-wider">
                  Live Production
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white hover:text-[#FACC15] transition-colors leading-tight">
                {project.title}
              </h3>

              <p className="mt-3 text-sm text-zinc-300 leading-relaxed">
                {project.description}
              </p>

              {/* Key Highlights */}
              <div className="mt-6 space-y-2.5">
                {project.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                    <CheckCircle2 className="w-4 h-4 text-[#FACC15] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-2 mt-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono bg-zinc-900 text-zinc-300 border border-zinc-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-3 mt-8 pt-6 border-t border-zinc-800">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 py-3 px-5 rounded-xl text-center text-xs sm:text-sm font-bold text-black btn-yellow flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 py-3 px-5 rounded-xl text-center text-xs sm:text-sm font-semibold btn-outline-yellow flex items-center justify-center gap-2 cursor-pointer"
              >
                <GithubIcon className="w-4 h-4 text-[#FACC15]" />
                <span>GitHub Profile</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
