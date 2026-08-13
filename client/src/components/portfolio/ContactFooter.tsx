/*
 * MIDNIGHT CIRCUIT — Contact + Footer.
 * Large animated CTA, clickable links, minimal footer.
 */

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Globe } from "lucide-react";
import { CONTACT_LINKS } from "@/lib/data";
import { AiOrb, Floating, SectionHeading } from "./primitives";

export default function ContactFooter() {
  return (
    <>
      <section
        id="contact"
        className="relative overflow-hidden py-24 md:py-32"
        aria-label="Contact"
      >
        <div
          className="circuit-grid absolute inset-0 opacity-40"
          aria-hidden
        />

        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[720px] -translate-x-1/2 rounded-full opacity-25"
          style={{
            background:
              "radial-gradient(circle, rgba(56,189,248,0.18) 0%, transparent 70%)",
          }}
        />

        <div className="container relative z-10 text-center">
          <SectionHeading
            kicker="07 — Contact"
            title="Let's Build Something"
            className="items-center"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.7,
              ease: [0.23, 1, 0.32, 1],
            }}
            className="mx-auto mb-12 max-w-xl leading-relaxed text-muted-foreground"
          >
            Interested in working together, discussing an internship
            opportunity, or building something with AI? I'd love to connect.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              ease: [0.23, 1, 0.32, 1],
            }}
            className="mb-14"
          >
            <a
              href="mailto:nimraaijazhere@gmail.com"
              className="group relative mx-auto inline-flex items-center gap-3 rounded-full bg-[#38bdf8] px-10 py-5 font-mono text-sm font-bold uppercase tracking-[0.16em] text-[#06101b] shadow-[0_0_40px_rgba(56,189,248,0.35)] transition-transform duration-150 hover:bg-[#7dd3fc] active:scale-[0.97] md:px-14 md:text-base"
            >
              <span className="relative">
                Let's Connect

                <span className="absolute -bottom-2 left-0 h-0.5 w-full origin-left scale-x-0 rounded bg-[#06101b] transition-transform duration-300 group-hover:scale-x-100" />
              </span>

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </motion.div>

          {/* Contact links */}
          <div className="mx-auto grid max-w-3xl gap-3 sm:grid-cols-2">
            {CONTACT_LINKS.map((link, i) => {
              const Icon =
                link.label === "Email"
                  ? Mail
                  : link.label === "LinkedIn"
                    ? Linkedin
                    : link.label === "GitHub"
                      ? Github
                      : Globe;

              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={
                    link.href.startsWith("mailto") ? undefined : "_blank"
                  }
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.07,
                    ease: [0.23, 1, 0.32, 1],
                  }}
                  className="glow-border-hover flex items-center gap-3.5 rounded-xl border border-[rgba(56,189,248,0.16)] bg-[#0d1b2a]/70 px-5 py-4 backdrop-blur-sm"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[rgba(56,189,248,0.3)] bg-[rgba(56,189,248,0.06)]">
                    <Icon size={17} className="text-[#38bdf8]" />
                  </span>

                  <span className="min-w-0 text-left">
                    <span className="block font-mono text-[0.62rem] uppercase tracking-[0.16em] text-[#38bdf8]">
                      {link.label}
                    </span>

                    <span className="block truncate text-sm font-medium text-[#e6f1ff]">
                      {link.value}
                    </span>
                  </span>
                </motion.a>
              );
            })}
          </div>
        </div>

        {/* Floating orb accents */}
        <Floating
          speed={1}
          className="left-[6%] top-16 hidden xl:block"
          aria-hidden
        >
          <AiOrb size={140} />
        </Floating>

        <Floating
          speed={0.8}
          delay={1.4}
          className="right-[6%] bottom-16 hidden xl:block"
          aria-hidden
        >
          <AiOrb size={110} />
        </Floating>
      </section>

      <footer
        className="border-t border-[rgba(56,189,248,0.1)] bg-[#050d18]"
        aria-label="Footer"
      >
        <div className="container flex flex-col items-center gap-5 py-10 md:flex-row md:justify-between">
          <div className="flex items-center gap-3.5 text-center md:text-left">
            <img
              src="/logo.svg"
              alt="Nimra Aijaz logo"
              className="h-11 w-11"
            />

            <div>
              <p className="font-mono text-lg font-bold uppercase tracking-[0.22em] text-[#e6f1ff]">
                Nimra<span className="text-[#38bdf8]">.dev</span>
              </p>

              <p className="mt-1 font-mono text-[0.66rem] uppercase tracking-[0.12em] text-[#8aa3bd]">
                Full-Stack Software Engineer • Backend • AI Integration
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/nimraaijaz"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(56,189,248,0.25)] text-[#7dd3fc] transition-colors duration-200 hover:border-[rgba(56,189,248,0.6)] hover:bg-[rgba(56,189,248,0.1)]"
            >
              <Github size={17} />
            </a>

            <a
              href="https://linkedin.com/in/nimraaijazz"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(56,189,248,0.25)] text-[#7dd3fc] transition-colors duration-200 hover:border-[rgba(56,189,248,0.6)] hover:bg-[rgba(56,189,248,0.1)]"
            >
              <Linkedin size={17} />
            </a>

            <a
              href="mailto:nimraaijazhere@gmail.com"
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(56,189,248,0.25)] text-[#7dd3fc] transition-colors duration-200 hover:border-[rgba(56,189,248,0.6)] hover:bg-[rgba(56,189,248,0.1)]"
            >
              <Mail size={17} />
            </a>
          </div>

          <p className="font-mono text-[0.65rem] tracking-[0.1em] text-[#64748b]">
            © {new Date().getFullYear()} Nimra Aijaz
          </p>
        </div>
      </footer>
    </>
  );
}