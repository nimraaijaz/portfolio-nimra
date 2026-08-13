/*
 * MIDNIGHT CIRCUIT — Experience.
 * Single prominent FlyRank internship card, timeline design.
 * Dates exactly as provided.
 */
import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { EXPERIENCE } from "@/lib/data";
import { SectionHeading, Floating, AiOrb } from "./primitives";

export default function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden py-24 md:py-32" aria-label="Experience">
      <div className="circuit-grid absolute inset-0 opacity-30" aria-hidden />
      <Floating speed={1} delay={0.6} className="right-[4%] top-20 hidden xl:block" aria-hidden>
        <AiOrb size={130} />
      </Floating>
      <div
        aria-hidden
        className="absolute right-[7%] bottom-24 hidden rotate-2 select-none font-mono text-[0.62rem] tracking-wider text-[#a78bfa]/25 xl:block"
      >
        prompt.engineer() → agentic.flow()
      </div>
      <div className="container relative z-10">
        <SectionHeading kicker="03 — Experience" title="Where I've Worked" />

        <div className="relative max-w-4xl">
          {/* Timeline line */}
          <div
            aria-hidden
            className="absolute left-[18px] top-0 h-full w-px bg-gradient-to-b from-[rgba(56,189,248,0.5)] via-[rgba(45,212,191,0.25)] to-transparent md:left-[26px]"
          />

          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            className="relative"
          >
            {/* Timeline node */}
            <div className="absolute -left-[33px] top-7 hidden h-3.5 w-3.5 rounded-full border-2 border-[#38bdf8] bg-[#07111F] md:block md:left-[-39px]" aria-hidden>
              <div className="absolute inset-[3px] rounded-full bg-[#38bdf8] shadow-[0_0_10px_#38bdf8]" />
            </div>

            <div className="glow-border-hover border border-[rgba(56,189,248,0.2)] bg-[#0d1b2a]/80 p-7 md:p-10 backdrop-blur-sm">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="mb-2 inline-flex items-center gap-2">
                    <Briefcase size={16} className="text-[#38bdf8]" />
                    <h3 className="font-display text-xl font-bold text-[#e6f1ff] md:text-2xl">
                      {EXPERIENCE.role}
                    </h3>
                  </div>
                  <p className="font-mono text-sm font-semibold tracking-wide text-[#2dd4bf]">
                    {EXPERIENCE.company}
                  </p>
                </div>
                <div className="flex flex-col gap-2 text-right">
                  <span className="inline-flex items-center gap-2 font-mono text-[0.7rem] tracking-[0.12em] text-[#8aa3bd] uppercase md:justify-end">
                    <Calendar size={13} className="text-[#38bdf8]" />
                    {EXPERIENCE.date}
                  </span>
                  <span className="inline-flex items-center gap-2 font-mono text-[0.7rem] tracking-[0.12em] text-[#8aa3bd] uppercase md:justify-end">
                    <MapPin size={13} className="text-[#38bdf8]" />
                    {EXPERIENCE.location}
                  </span>
                </div>
              </div>

              <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
                {EXPERIENCE.description}
              </p>

              <div className="mt-8">
                <p className="font-mono text-[0.65rem] tracking-[0.2em] text-[#38bdf8] uppercase mb-4">
                  Responsibilities
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {EXPERIENCE.responsibilities.map((r) => (
                    <span
                      key={r}
                      className="border border-[rgba(45,212,191,0.25)] bg-[rgba(45,212,191,0.06)] px-3.5 py-2 font-mono text-[0.72rem] font-medium tracking-wide text-[#a9e8db]"
                    >
                      {r}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
