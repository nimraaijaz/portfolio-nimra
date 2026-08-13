/*
 * MIDNIGHT CIRCUIT — Tech Stack (Skills).
 * Interactive category cards: lift, border glow, animated chips on hover.
 * No percentage bars, no expert claims.
 */
import { motion } from "framer-motion";
import { SKILL_CATEGORIES } from "@/lib/data";
import { SectionHeading, ApiNodes, Floating } from "./primitives";

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-24 md:py-32" aria-label="Skills">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-20 h-[420px] w-[420px] rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(45,212,191,0.2) 0%, transparent 70%)",
        }}
      />
      <Floating speed={0.8} delay={0.8} className="left-[4%] bottom-20 hidden xl:block" aria-hidden>
        <ApiNodes size={110} />
      </Floating>
      <div
        aria-hidden
        className="absolute left-[6%] top-16 hidden -rotate-2 select-none font-mono text-[0.62rem] tracking-wider text-[#2dd4bf]/25 xl:block"
      >
        stack.languages[].push("python")
      </div>
      <div className="container relative z-10">
        <SectionHeading
          kicker="02 — Tech Stack"
          title="What I Work With"
          subtitle="The tools and concepts I use to take software from idea to deployment."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.07, ease: [0.23, 1, 0.32, 1] }}
              whileHover={{ y: -5 }}
              className="glow-border-hover group relative overflow-hidden rounded-xl border border-[rgba(56,189,248,0.16)] bg-[#0d1b2a]/70 p-6 backdrop-blur-sm"
            >
              {/* subtle animated bg on hover */}
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-x-8 -top-16 h-32 rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.14)_0%,transparent_70%)] opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100"
              />
              <div className="relative">
                <div className="mb-5 flex items-center justify-between">
                  <span className="font-mono text-[0.7rem] tracking-[0.2em] text-[#2dd4bf]">
                    {cat.index}
                  </span>
                  <span className="h-px flex-1 ml-4 bg-gradient-to-r from-[rgba(56,189,248,0.4)] to-transparent opacity-40 transition-all duration-300 group-hover:opacity-100" />
                </div>
                <h3 className="font-display text-lg font-bold tracking-tight text-[#e6f1ff] uppercase">
                  {cat.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {cat.items.map((item, j) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: j * 0.05 }}
                      whileHover={{ scale: 1.06, borderColor: "rgba(56,189,248,0.5)" }}
                      className="border border-[rgba(56,189,248,0.2)] bg-[rgba(56,189,248,0.05)] px-3 py-1.5 font-mono text-[0.7rem] font-medium tracking-wide text-[#a9c6e4] transition-colors duration-200 group-hover:border-[rgba(56,189,248,0.35)]"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
