"use client";

import React from "react";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

interface EducationItem {
  degree: string;
  institution: string;
  field: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
}

const EDUCATION_DATA: EducationItem[] = [
  {
    degree: "Intermediate",
    institution: "Superior College Arifwala",
    field: "Pre-Engineering / Computer Science Studies",
    period: "2020 — 2022",
    location: "Arifwala, Pakistan",
    description:
      "Coursework focused on computer science fundamentals, mathematics, analytical problem solving, and physics.",
    highlights: [
      "Mathematics & Logic",
      "Computer Science Fundamentals",
      "Academic Excellence",
    ],
  },
  {
    degree: "Matriculation",
    institution: "Guards Public School",
    field: "Science & Information Technology",
    period: "2018 — 2020",
    location: "Punjab, Pakistan",
    description:
      "Core education in general science and computer basics that established my foundational interest in web development.",
    highlights: [
      "Basic IT & Programming",
      "General Science & Math",
      "School Academic Recognition",
    ],
  },
];

export default function Education() {
  return (
    <section id="education" className="relative py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs font-bold uppercase tracking-widest text-[#FACC15] bg-[#FACC15]/10 px-3 py-1 rounded-full border border-[#FACC15]/20">
          Education
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-3">
          Academic <span className="text-[#FACC15]">Background</span>
        </h2>
        <p className="mt-3 text-zinc-400 text-sm sm:text-base">
          Foundational milestones that developed my analytical and technical skills.
        </p>
      </div>

      {/* Cards Container */}
      <div className="max-w-3xl mx-auto space-y-6">
        {EDUCATION_DATA.map((item) => (
          <div
            key={item.degree}
            className="theme-card p-6 sm:p-7 rounded-2xl flex flex-col justify-between"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-zinc-800">
              <div>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#FACC15]/10 text-[#FACC15] border border-[#FACC15]/30">
                  {item.degree}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white mt-2">
                  {item.institution}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 mt-0.5">
                  {item.field}
                </p>
              </div>

              <div className="flex flex-col sm:items-end gap-1 text-xs text-zinc-400 font-mono">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#FACC15]" />
                  <span>{item.period}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                  <span>{item.location}</span>
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 mt-3 leading-relaxed">
              {item.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              {item.highlights.map((h, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs bg-zinc-900 text-zinc-300 border border-zinc-800"
                >
                  <Award className="w-3 h-3 text-[#FACC15]" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
