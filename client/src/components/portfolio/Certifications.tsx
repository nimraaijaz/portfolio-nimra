/*
 * MIDNIGHT CIRCUIT — Certifications & Education.
 * Clean hover-animated cards + academic timeline card.
 */
import { motion } from "framer-motion";
import { Award, GraduationCap, Calendar } from "lucide-react";
import { CERTIFICATIONS } from "@/lib/data";
import { SectionHeading, Floating, DbCylinder } from "./primitives";

export default function Certifications() {
  return (
    <section id="certifications" className="relative overflow-hidden py-24 md:py-32" aria-label="Certifications">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 bottom-10 h-[380px] w-[380px] rounded-full opacity-15"
        style={{
          background:
            "radial-gradient(circle, rgba(56,189,248,0.25) 0%, transparent 70%)",
        }}
      />
      <Floating speed={1.1} delay={1} className="right-[4%] bottom-32 hidden xl:block" aria-hidden>
        <DbCylinder size={64} />
      </Floating>
      <div
        aria-hidden
        className="absolute left-[6%] bottom-16 hidden rotate-[-2deg] select-none font-mono text-[0.62rem] tracking-wider text-[#38bdf8]/25 xl:block"
      >
        git.commit("--amend -m 'learning, always'")
      </div>
      <div className="container relative z-10">
        <SectionHeading
          kicker="05 — Certifications"
          title="Certifications"
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CERTIFICATIONS.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.23, 1, 0.32, 1] }}
              whileHover={{ y: -4 }}
              className="glow-border-hover group flex flex-col gap-4 rounded-xl border border-[rgba(56,189,248,0.15)] bg-[#0d1b2a]/70 p-6 backdrop-blur-sm"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-[rgba(56,189,248,0.3)] bg-[rgba(56,189,248,0.07)] transition-colors duration-200 group-hover:border-[rgba(56,189,248,0.55)] group-hover:bg-[rgba(56,189,248,0.12)]">
                <Award size={20} className="text-[#38bdf8]" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold leading-snug text-[#e6f1ff]">
                  {c.name}
                </h3>
                <p className="mt-1.5 font-mono text-[0.68rem] tracking-[0.12em] text-[#8aa3bd] uppercase">
                  {c.issuer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div id="education" className="container relative z-10 mt-20 scroll-mt-24">
        <SectionHeading
          kicker="06 — Education"
          title="Education"
          className="mb-8 md:mb-12"
        />

        <div className="relative max-w-4xl">
          <div
            aria-hidden
            className="absolute left-[18px] top-0 h-full w-px bg-gradient-to-b from-[rgba(56,189,248,0.5)] to-transparent md:left-[26px]"
          />
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
            className="relative"
          >
            <div className="absolute -left-[33px] top-7 hidden h-3.5 w-3.5 rounded-full border-2 border-[#2dd4bf] bg-[#07111F] md:block md:left-[-39px]" aria-hidden>
              <div className="absolute inset-[3px] rounded-full bg-[#2dd4bf] shadow-[0_0_10px_#2dd4bf]" />
            </div>

            <div className="glow-border-hover flex flex-col gap-5 border border-[rgba(45,212,191,0.2)] bg-[#0d1b2a]/80 p-7 md:flex-row md:items-center md:p-9 backdrop-blur-sm">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-[rgba(45,212,191,0.35)] bg-[rgba(45,212,191,0.08)]">
                <GraduationCap size={26} className="text-[#2dd4bf]" />
              </div>
              <div className="flex-1">
                <h3 className="font-display text-xl font-bold text-[#e6f1ff] md:text-2xl">
                  B.S. Software Engineering
                </h3>
                <p className="mt-1.5 text-muted-foreground">
                  Sir Syed University of Engineering &amp; Technology
                </p>
              </div>
              <span className="inline-flex shrink-0 items-center gap-2 font-mono text-[0.7rem] tracking-[0.12em] text-[#8aa3bd] uppercase">
                <Calendar size={13} className="text-[#2dd4bf]" />
                Present
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
