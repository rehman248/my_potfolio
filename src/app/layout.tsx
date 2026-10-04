import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abdul Rehman | Modern Web Developer Portfolio",
  description:
    "I build modern, responsive, and high-performance websites that help businesses grow online. Explore projects, skills, education, and get in touch.",
  keywords: [
    "Abdul Rehman",
    "Web Developer",
    "Frontend Developer",
    "Portfolio",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Faisalabad Pakistan",
  ],
  authors: [{ name: "Abdul Rehman" }],
  openGraph: {
    title: "Abdul Rehman | Modern Web Developer Portfolio",
    description:
      "I build modern, responsive, and high-performance websites that help businesses grow online.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth dark`}
    >
      <body className="min-h-screen bg-[#080808] text-white antialiased selection:bg-[#FACC15]/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
