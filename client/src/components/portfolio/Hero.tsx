/*
 * MIDNIGHT CIRCUIT — Hero.
 * 90–100vh cinematic opening: status badge, oversized gradient headline,
 * AI orb + floating dev artifacts, particles, grid.
 */
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import {
  MagneticButton,
  Particles,
  Floating,
  AiOrb,
  CodeBrackets,
  DbCylinder,
  Terminal,
  ApiNodes,
} from "./primitives";

const EASE = [0.23, 1, 0.32, 1] as const;
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};
const rise = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="noise-overlay relative flex min-h-[92vh] items-center overflow-hidden"
      aria-label="Introduction"
    >
      {/* Ambient background layers */}
      <div className="circuit-grid absolute inset-0 opacity-60" aria-hidden />
      <Particles count={22} />
      <div
        aria-hidden
        className="absolute -top-40 -left-40 h-[480px] w-[480px] rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(56,189,248,0.22) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="absolute -bottom-48 right-[-100px] h-[560px] w-[560px] rounded-full opacity-25"
        style={{
          background:
            "radial-gradient(circle, rgba(45,212,191,0.18) 0%, transparent 70%)",
        }}
      />

      <div className="container relative z-10 grid items-center gap-12 py-24 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Text side */}
        <motion.div variants={stagger} initial="hidden" animate="show">
          <motion.div variants={rise} className="mb-7 inline-block">
            <span className="terminal-chip">
              <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-[#2dd4bf]" />
              Open to Opportunities
            </span>
          </motion.div>

          <motion.p variants={rise} className="font-mono text-sm font-medium tracking-[0.22em] text-[#7dd3fc] uppercase mb-3">
            Hi, I'm Nimra
          </motion.p>

          <motion.h1
            variants={rise}
            className="font-display font-bold uppercase leading-[1.02] tracking-tight"
            style={{ fontSize: "clamp(2.6rem, 6.2vw, 6.4rem)" }}
          >
            <span className="text-gradient-cyan">Full-Stack</span>
            <br />
            <span className="text-[#e6f1ff]">Software</span>
            <br />
            <span className="text-[#e6f1ff]">Engineer</span>
          </motion.h1>

          <motion.p
            variants={rise}
            className="mt-6 font-mono text-xs md:text-sm tracking-[0.16em] text-[#94a3b8] uppercase"
          >
            Backend <span className="text-[#38bdf8]">•</span> AI Integration{" "}
            <span className="text-[#38bdf8]">•</span> APIs{" "}
            <span className="text-[#38bdf8]">•</span> Databases
          </motion.p>

          <motion.p variants={rise} className="mt-6 max-w-lg text-[1.02rem] leading-relaxed text-muted-foreground">
            Software Engineering student building full-stack applications,
            scalable backend systems, and AI-powered experiences.
          </motion.p>

          <motion.div variants={rise} className="mt-9 flex flex-wrap gap-4">
            <MagneticButton href="#projects" ariaLabel="View projects">
              View Projects <ArrowRight size={15} />
            </MagneticButton>
            <MagneticButton href="#contact" variant="ghost" ariaLabel="Let's connect">
              Let's Connect
            </MagneticButton>
          </motion.div>
        </motion.div>

        {/* Visual side — AI orb + floating dev artifacts */}
        <div className="relative mx-auto hidden aspect-square w-full max-w-[520px] lg:block" aria-hidden>
          <Floating speed={1.2} className="inset-0 flex items-center justify-center">
            <AiOrb size={250} />
          </Floating>
          <Floating speed={0.9} delay={1.2} className="left-0 top-8">
            <CodeBrackets size={92} />
          </Floating>
          <Floating speed={1.4} delay={0.6} className="right-2 top-24">
            <Terminal w={190} />
          </Floating>
          <Floating speed={0.8} delay={2} className="bottom-16 left-4">
            <DbCylinder size={72} />
          </Floating>
          <Floating speed={1.1} delay={1.6} className="right-8 bottom-10">
            <ApiNodes size={130} />
          </Floating>
          <div className="absolute left-1/2 top-1/2 h-[85%] w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(56,189,248,0.1)]" />
          <div className="absolute left-1/2 top-1/2 h-[105%] w-[105%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[rgba(45,212,191,0.12)] animate-orbit-reverse" />
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        aria-hidden
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="font-mono text-[0.6rem] tracking-[0.3em] text-[#64748b] uppercase">Scroll</span>
          <motion.div
            className="h-10 w-[1px] bg-gradient-to-b from-[#38bdf8] to-transparent"
            animate={{ scaleY: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "top" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
