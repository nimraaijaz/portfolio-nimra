/*
 * MIDNIGHT CIRCUIT — Selected Projects.
 * Cinematic stacked case-study sequence: oversized project numbers,
 * dominant titles, integrated engineering artifacts per card,
 * sticky sliding feel with scale/opacity as you scroll.
 */
import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Github, ExternalLink, Terminal } from "lucide-react";
import { PROJECTS } from "@/lib/data";
import { SectionHeading, CodeBrackets, DbCylinder, ApiNodes, Floating } from "./primitives";
import { PROJECT_VISUALS } from "./ProjectVisuals";

function GiantNumber({ n, accent = "#38bdf8" }: { n: string; accent?: string }) {
  return (
    <span
      aria-hidden
      className="pointer-events-none select-none font-display font-bold uppercase leading-none"
      style={{
        fontSize: "clamp(4.5rem, 10vw, 9rem)",
        WebkitTextStroke: `1.5px ${accent}`,
        color: "transparent",
        opacity: 0.55,
      }}
    >
      {n}
    </span>
  );
}

function ProjectCard({
  project,
  index,
  total,
}: {
  project: (typeof PROJECTS)[number];
  index: number;
  total: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isLast = index === total - 1;
  const isHeroProject = index === 0;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", isLast ? "end end" : "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.85, 1], [1, 0.96, isLast ? 1 : 0.9]);
  const y = useTransform(scrollYProgress, [0, 0.85, 1], [0, 0, isLast ? 0 : -24]);
  const opacity = useTransform(scrollYProgress, [0, 0.85, 1], [1, 1, isLast ? 1 : 0.5]);

  const Visual = PROJECT_VISUALS[index];
  const accents = ["#38bdf8", "#2dd4bf", "#a78bfa", "#0ea5e9", "#38bdf8", "#2dd4bf", "#a78bfa", "#0ea5e9"];
  const accent = accents[index % accents.length];

  const artifacts: Record<number, ReactNode> = {
    0: <ApiNodes size={96} />,
    1: <CodeBrackets size={74} />,
    2: <DbCylinder size={64} />,
    3: <DbCylinder size={58} />,
    4: <ApiNodes size={80} />,
    5: (
      <div className="relative flex h-20 w-20 items-center justify-center">
        <svg width="70" height="70" viewBox="0 0 70 70" fill="none">
          <motion.circle cx="35" cy="35" r="16" stroke={accent} strokeWidth="2" fill="rgba(56,189,248,0.08)"
            animate={{ r: [16, 19, 16] }} transition={{ duration: 3, repeat: Infinity }} />
          <path d="M35 4 V14 M35 56 V66 M4 35 H14 M56 35 H66" stroke={accent} strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
    ),
    6: <ApiNodes size={76} />,
    7: (
      <div className="flex h-20 w-20 items-center justify-center rounded-lg border border-[rgba(56,189,248,0.2)] bg-[#0d1b2a]/80 font-mono text-[0.6rem] text-[#7dd3fc]">
        <div>
          <div className="flex gap-1 mb-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#38bdf8]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#2dd4bf]" />
          </div>
          tx.commit()
        </div>
      </div>
    ),
  };

  return (
    <div ref={containerRef} className={!isLast ? "h-[105vh]" : "h-auto"}>
      <motion.div className={!isLast ? "sticky top-16" : ""} style={{ scale, y, opacity }}>
        <motion.div
          initial={{ opacity: 0, y: 44 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
          className="glow-border-hover relative mb-10 overflow-hidden rounded-2xl border border-[rgba(56,189,248,0.18)] bg-[#0d1b2a]/85 backdrop-blur-sm"
        >
          {/* Section artifact backdrop */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-8 -top-8 opacity-15"
          >
            {artifacts[index]}
          </div>
          {isHeroProject && (
            <div
              aria-hidden
              className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full opacity-30"
              style={{ background: `radial-gradient(circle, ${accent}33 0%, transparent 70%)` }}
            />
          )}

          {/* Giant number band */}
          <div className="flex items-end gap-5 px-6 pt-6 md:px-10">
            <GiantNumber n={project.number} accent={accent} />
            <div className="pb-3">
              <span className="terminal-chip mb-2">
                <Terminal size={11} />
                {project.category}
              </span>
            </div>
          </div>

          <div className={`grid gap-0 ${isHeroProject ? "lg:grid-cols-[1.05fr_0.95fr]" : "lg:grid-cols-2"}`}>
            {/* Content panel */}
            <div className="order-2 p-6 md:p-10 lg:order-1">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <h3
                  className="font-display font-bold uppercase tracking-tight text-[#e6f1ff]"
                  style={{ fontSize: "clamp(1.6rem, 3.2vw, 2.6rem)", lineHeight: 1.08 }}
                >
                  {project.name}
                </h3>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glow-border-hover shrink-0 inline-flex items-center gap-2 rounded-full border border-[rgba(56,189,248,0.35)] bg-[rgba(56,189,248,0.06)] px-5 py-2.5 font-mono text-[0.7rem] font-semibold tracking-[0.12em] text-[#7dd3fc] uppercase transition-colors duration-200 hover:bg-[rgba(56,189,248,0.14)]"
                  >
                    <Github size={15} />
                    <span className="hidden sm:inline">View on GitHub</span>
                    <span className="sm:hidden">GitHub</span>
                    <ExternalLink size={12} />
                  </a>
                )}
              </div>

              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                {project.description}
              </p>

              {project.highlights && (
                <div className="mt-6 border-t border-[rgba(56,189,248,0.1)] pt-5">
                  <p className="font-mono text-[0.65rem] tracking-[0.2em] text-[#38bdf8] uppercase mb-3">
                    Engineering Highlights
                  </p>
                  <div className="grid gap-1.5 sm:grid-cols-2">
                    {project.highlights.map((h) => (
                      <div key={h} className="flex items-center gap-2">
                        <span className="h-1 w-1 shrink-0 rounded-full bg-[#2dd4bf]" />
                        <span className="text-sm text-[#c7ddf3]">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-6">
                <p className="font-mono text-[0.65rem] tracking-[0.2em] text-[#8aa3bd] uppercase mb-2.5">
                  Stack
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((t) => (
                    <span
                      key={t}
                      className="border border-[rgba(56,189,248,0.2)] bg-[rgba(56,189,248,0.05)] px-2.5 py-1 font-mono text-[0.66rem] font-medium text-[#a9c6e4]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {project.badge && (
                <span className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-[rgba(45,212,191,0.5)] bg-[rgba(45,212,191,0.1)] px-3.5 py-1.5 font-mono text-[0.68rem] font-semibold tracking-[0.14em] text-[#5eead4] uppercase shadow-[0_0_18px_rgba(45,212,191,0.25)]">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#2dd4bf]" />
                  {project.badge}
                </span>
              )}
            </div>

            {/* Visual panel */}
            <div className="order-1 border-b border-[rgba(56,189,248,0.1)] bg-[#0a1626] p-6 md:p-8 lg:order-2 lg:border-b-0 lg:border-l">
              <Visual />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32" aria-label="Projects">
      <Floating speed={0.7} delay={0.4} className="left-[3%] top-24 hidden xl:block" aria-hidden>
        <CodeBrackets size={72} />
      </Floating>
      <Floating speed={0.9} delay={1.2} className="right-[3%] top-40 hidden xl:block" aria-hidden>
        <DbCylinder size={60} />
      </Floating>
      <div className="container">
        <SectionHeading
          kicker="04 — Selected Projects"
          title="Software I've Built"
          subtitle="Projects across AI, backend systems, databases, and full-stack development."
        />
      </div>
      <div className="container">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.number} project={p} index={i} total={PROJECTS.length} />
        ))}
      </div>
    </section>
  );
}
