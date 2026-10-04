"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { WhatsAppIcon } from "@/components/Icons";

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-center gap-2.5">
      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-300 flex items-center justify-center hover:bg-[#FACC15] hover:text-black hover:border-[#FACC15] transition-all cursor-pointer shadow-lg"
        >
          <ArrowUp className="w-4 h-4 stroke-[2.5]" />
        </button>
      )}

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/923072151932?text=Hi%20Abdul%20Rehman,%20I%20saw%20your%20portfolio!"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-105 transition-all cursor-pointer"
      >
        <WhatsAppIcon className="w-6 h-6" />
      </a>
    </div>
  );
}
