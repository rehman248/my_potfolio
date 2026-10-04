"use client";

import React from "react";

export default function StarBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#080808]">
      {/* Subtle Warm Yellow Top Center Ambient Light */}
      <div className="absolute top-[-15%] left-1/2 -translate-x-1/2 w-[700px] sm:w-[900px] h-[450px] bg-gradient-to-b from-[#FACC15]/10 via-[#EAB308]/04 to-transparent rounded-full blur-[140px] pointer-events-none" />

      {/* Subtle Side Ambient Glow */}
      <div className="absolute top-[45%] right-[-10%] w-[500px] h-[500px] bg-[#FACC15]/04 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#FACC15]/03 rounded-full blur-[160px] pointer-events-none" />

      {/* Clean Subtle Grid Texture */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #FFFFFF 1px, transparent 1px), linear-gradient(to bottom, #FFFFFF 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />
    </div>
  );
}
