/*
 * MIDNIGHT CIRCUIT — Technology marquee.
 * Two rows, opposite directions, subtle glow, pause on hover.
 */
import { motion } from "framer-motion";
import {
  ArrowRight,
  Server,
  Layout,
  Database,
  KeyRound,
  Sparkles,
  Box,
  GitBranch,
  Github,
  Paintbrush,
  Clapperboard,
} from "lucide-react";
import { MARQUEE_ROW_1, MARQUEE_ROW_2 } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Python: Sparkles,
  FastAPI: Server,
  React: Layout,
  "Next.js": Layout,
  TypeScript: ArrowRight,
  JavaScript: ArrowRight,
  MySQL: Database,
  MongoDB: Database,
  SQLAlchemy: Database,
  JWT: KeyRound,
  "Google Gemini": Sparkles,
  Docker: Box,
  Git: GitBranch,
  GitHub: Github,
  "Tailwind CSS": Paintbrush,
  "Framer Motion": Clapperboard,
};

function Row({
  items,
  direction,
}: {
  items: string[];
  direction: "left" | "right";
}) {
  const content = (
    <>
      {[0, 1].map((dup) => (
        <div key={dup} className="flex shrink-0">
          {items.map((t) => {
            const Icon = iconMap[t] ?? ArrowRight;
            return (
              <div
                key={`${t}-${dup}`}
                className="mx-3 flex items-center gap-2.5 whitespace-nowrap rounded-full border border-[rgba(56,189,248,0.18)] bg-[#0d1b2a]/60 px-5 py-2.5 backdrop-blur-sm transition-colors duration-200 hover:border-[rgba(56,189,248,0.45)] hover:bg-[rgba(56,189,248,0.08)]"
              >
                <Icon size={15} className="text-[#38bdf8]" />
                <span className="font-mono text-xs font-medium tracking-[0.1em] text-[#c7ddf3] uppercase">
                  {t}
                </span>
              </div>
            );
          })}
        </div>
      ))}
    </>
  );

  return (
    <div className="marquee-row relative overflow-hidden py-2" aria-hidden>
      <motion.div
        className={`marquee-track ${
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        }`}
      >
        {content}
      </motion.div>
    </div>
  );
}

export default function Marquee() {
  return (
    <section className="relative border-y border-[rgba(56,189,248,0.1)] bg-[#0a1626]/80 py-8" aria-label="Technologies">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(56,189,248,0.06) 0%, transparent 8%, transparent 92%, rgba(45,212,191,0.06) 100%)",
        }}
        aria-hidden
      />
      <div className="flex flex-col gap-4">
        <Row items={MARQUEE_ROW_1} direction="left" />
        <Row items={MARQUEE_ROW_2} direction="right" />
      </div>
    </section>
  );
}
