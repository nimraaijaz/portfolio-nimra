/*
 * MIDNIGHT CIRCUIT — About.
 * Word-by-word scroll reveal, subtle floating dev objects around text.
 */
import { AiOrb, CodeBrackets, DbCylinder, Floating, SectionHeading, WordReveal } from "./primitives";

const PARA_1 =
  "I'm a Software Engineering student and Full-Stack Software Engineer focused on building complete web applications from backend APIs and databases to modern frontend interfaces. I enjoy working with Python, FastAPI, React, MySQL, MongoDB, and AI APIs to turn ideas into functional software.";

const PARA_2 =
  "My current focus is backend development and AI integration, including REST APIs, authentication, database design, LLM-powered features, and practical AI workflows.";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 md:py-32" aria-label="About">
      <div className="circuit-grid absolute inset-0 opacity-40" aria-hidden />

      {/* Floating objects around the section */}
      <Floating speed={0.9} className="left-[4%] top-16 hidden md:block" aria-hidden>
        <CodeBrackets size={84} />
      </Floating>
      <Floating speed={1.3} delay={1} className="right-[6%] top-24 hidden md:block" aria-hidden>
        <DbCylinder size={74} />
      </Floating>
      <Floating speed={0.7} delay={1.8} className="left-[8%] bottom-10 hidden md:block" aria-hidden>
        <AiOrb size={130} />
      </Floating>

      {/* Code fragment drifting in the margin */}
      <div
        aria-hidden
        className="absolute right-[8%] bottom-24 hidden rotate-3 select-none font-mono text-[0.62rem] tracking-wider text-[#38bdf8]/25 xl:block"
      >
        api.route("/v1") → gemini.score()
      </div>

      <div className="container relative z-10">
        <SectionHeading
          kicker="01 — About"
          title="About Me"
        />

        <div className="grid gap-14 lg:grid-cols-[1.3fr_0.7fr] lg:items-start">
          <div className="max-w-3xl">
            <p className="font-display text-2xl font-medium leading-[1.45] text-[#e6f1ff] md:text-[1.7rem]">
              <WordReveal text={PARA_1} />
            </p>
            <p className="mt-7 text-lg leading-[1.75] text-muted-foreground md:text-xl">
              <WordReveal text={PARA_2} />
            </p>

            <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
              {["Backend APIs", "AI Integration", "Databases", "Full-Stack Apps"].map((t, i) => (
                <div
                  key={t}
                  className="glow-border-hover border border-[rgba(56,189,248,0.18)] bg-[#0d1b2a]/60 px-3 py-4 text-center font-mono text-[0.68rem] font-medium tracking-[0.12em] text-[#94a3b8] uppercase backdrop-blur-sm"
                  style={{ transitionDelay: `${i * 40}ms` }}
                >
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* Stat-like focus cards */}
          <div className="space-y-4">
            {[
              { label: "Focus", value: "Backend + AI Integration" },
              { label: "Building with", value: "Python · FastAPI · React" },
              { label: "Positioning", value: "Full-Stack Software Engineer" },
            ].map((item, i) => (
              <div
                key={item.label}
                className="glow-border-hover border border-[rgba(56,189,248,0.16)] bg-[#0d1b2a]/70 p-5 backdrop-blur-sm"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <p className="font-mono text-[0.65rem] tracking-[0.18em] text-[#38bdf8] uppercase">{item.label}</p>
                <p className="mt-2 font-display text-base font-semibold text-[#e6f1ff]">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
