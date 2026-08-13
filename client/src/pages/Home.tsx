/*
 * MIDNIGHT CIRCUIT — Home page composition.
 * Single-page portfolio: Navbar → Hero → Marquee → About → Skills →
 * Experience → Projects → Certifications/Education → Contact → Footer.
 */
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import Marquee from "@/components/portfolio/Marquee";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Experience from "@/components/portfolio/Experience";
import Projects from "@/components/portfolio/Projects";
import Certifications from "@/components/portfolio/Certifications";
import ContactFooter from "@/components/portfolio/ContactFooter";
import { CursorGlow } from "@/components/portfolio/primitives";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <ContactFooter />
      </main>
    </div>
  );
}
