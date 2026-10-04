import StarBackground from "@/components/StarBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import FloatingActions from "@/components/FloatingActions";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#080808] text-white selection:bg-[#FACC15]/30 selection:text-white overflow-x-hidden">
      {/* Minimal Clean Dark Background */}
      <StarBackground />

      {/* Navigation */}
      <Navbar />

      {/* Main Sections */}
      <div className="relative z-10 flex flex-col">
        <Hero />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </div>

      {/* Floating Actions */}
      <FloatingActions />

      {/* Footer */}
      <Footer />
    </main>
  );
}
