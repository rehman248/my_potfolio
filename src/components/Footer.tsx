"use client";

import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-zinc-800/80 bg-[#080808] z-10 py-10 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-[#FACC15] flex items-center justify-center font-black text-xs text-black">
            AR
          </div>
          <span className="text-white font-bold text-sm tracking-wide">
            Abdul <span className="text-[#FACC15]">Rehman</span>
          </span>
          <span className="text-xs text-zinc-500 ml-2">| Web Developer</span>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-5 text-xs text-zinc-400 font-medium">
          <a href="#home" className="hover:text-[#FACC15] transition-colors">
            Home
          </a>
          <a href="#projects" className="hover:text-[#FACC15] transition-colors">
            Project
          </a>
          <a href="#skills" className="hover:text-[#FACC15] transition-colors">
            Skills
          </a>
          <a href="#education" className="hover:text-[#FACC15] transition-colors">
            Education
          </a>
          <a href="#contact" className="hover:text-[#FACC15] transition-colors">
            Contact
          </a>
          <a href="/inbox" className="text-[#FACC15] hover:underline transition-colors font-semibold">
            Messages Inbox
          </a>
        </div>

        {/* Copyright */}
        <div className="text-xs text-zinc-500">
          <p>© {currentYear} Abdul Rehman. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
