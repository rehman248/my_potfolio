"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Send, Inbox } from "lucide-react";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "Project", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 180;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    const id = href.substring(1);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 theme-nav shadow-lg"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("#home");
          }}
          className="group flex items-center gap-2.5 text-base sm:text-lg font-bold tracking-tight text-white focus:outline-none"
        >
          <div className="w-8 h-8 rounded-lg bg-[#FACC15] flex items-center justify-center text-black font-extrabold text-sm shadow-[0_0_12px_rgba(250,204,21,0.4)]">
            AR
          </div>
          <span>
            Abdul <span className="text-[#FACC15]">Rehman</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 p-1 rounded-full bg-[#121212]/90 border border-zinc-800 backdrop-blur-md">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(item.href);
                }}
                className={`relative px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? "text-[#FACC15] bg-[#FACC15]/10 border border-[#FACC15]/30 shadow-[0_0_10px_rgba(250,204,21,0.15)]"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Desktop CTA & Inbox */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/inbox"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800 hover:border-[#FACC15] transition-colors"
          >
            <Inbox className="w-3.5 h-3.5 text-[#FACC15]" />
            <span>Inbox</span>
          </Link>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#contact");
            }}
            className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-black btn-yellow uppercase tracking-wider"
          >
            <span>Let&apos;s Talk</span>
            <Send className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-white hover:text-[#FACC15] transition-colors focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 px-4 pb-6 pt-2 mx-4 rounded-2xl bg-[#121212] border border-zinc-800 shadow-2xl">
          <div className="flex flex-col gap-2">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo(item.href);
                  }}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? "text-[#FACC15] bg-[#FACC15]/10 border border-[#FACC15]/30"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <Link
              href="/inbox"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2 rounded-xl text-sm font-medium text-zinc-400 hover:text-white flex items-center gap-2"
            >
              <Inbox className="w-4 h-4 text-[#FACC15]" />
              <span>View Messages (Inbox)</span>
            </Link>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#contact");
              }}
              className="mt-2 text-center py-2.5 rounded-xl font-bold text-black btn-yellow text-xs uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <span>Get In Touch</span>
              <Send className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
