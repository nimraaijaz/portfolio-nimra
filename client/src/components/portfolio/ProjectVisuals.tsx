/*
 * MIDNIGHT CIRCUIT — animated project visuals.
 * Pure CSS/SVG/JSX illustrations, GPU-friendly transforms, unique per project.
 * No stock images, no fake screenshots.
 */
import { motion } from "framer-motion";

function CardShell({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <div
      className="relative h-40 w-full overflow-hidden rounded-xl border border-[rgba(56,189,248,0.18)] bg-gradient-to-br from-[#0a1828] to-[#0d1b2a] p-4"
      aria-hidden
      role="img"
      aria-label={label}
    >
      <div className="absolute inset-0 circuit-grid opacity-40" />
      {children}
    </div>
  );
}

/** 01 — AI orb + chat bubbles + API nodes */
export function VisualAiInterview() {
  return (
    <CardShell label="Animated AI interview coach illustration">
      <div className="relative h-full w-full">
        <motion.div
          className="absolute right-6 top-4 h-14 w-14 rounded-full"
          style={{
            background:
              "radial-gradient(circle at 35% 30%, #2dd4bf 0%, #0ea5e9 45%, #0e2a42 90%)",
            boxShadow: "0 0 24px rgba(45,212,191,0.4)",
          }}
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute left-3 rounded-lg border border-[rgba(56,189,248,0.3)] bg-[rgba(56,189,248,0.08)]"
            style={{ top: 12 + i * 24, width: 78 - i * 12, height: 14 }}
            initial={{ opacity: 0.1 }}
            whileInView={{ opacity: 0.9 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.25, duration: 0.6 }}
          >
            <div className="m-2 h-2 rounded bg-[rgba(56,189,248,0.5)]" style={{ width: `${85 - i * 20}%` }} />
          </motion.div>
        ))}
        <div className="absolute bottom-4 right-4 flex items-center gap-1.5 font-mono text-[0.55rem] text-[#7dd3fc]">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#2dd4bf]" />
          gemini://score
        </div>
      </div>
    </CardShell>
  );
}

/** 02 — browser window + code brackets */
export function VisualPortfolio() {
  return (
    <CardShell label="Animated browser window with code brackets">
      <div className="relative h-full w-full">
        <motion.div
          className="absolute left-4 top-4 h-28 w-52 rounded-md border border-[rgba(56,189,248,0.35)] bg-[#07111F]/90"
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="flex items-center gap-1 border-b border-[rgba(56,189,248,0.15)] px-2 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#38bdf8]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#2dd4bf]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#a78bfa]" />
          </div>
          <div className="m-2 space-y-1.5">
            <div className="h-1.5 w-3/4 rounded bg-[rgba(56,189,248,0.35)]" />
            <div className="h-1.5 w-1/2 rounded bg-[rgba(45,212,191,0.3)]" />
            <div className="mt-2 h-8 rounded border border-dashed border-[rgba(56,189,248,0.25)]" />
          </div>
        </motion.div>
        <svg className="absolute bottom-3 right-5" width="46" height="34" viewBox="0 0 90 68" fill="none">
          <path d="M28 8 L6 34 L28 60" stroke="#38bdf8" strokeWidth="5" strokeLinecap="round" opacity="0.8" />
          <path d="M62 8 L84 34 L62 60" stroke="#2dd4bf" strokeWidth="5" strokeLinecap="round" opacity="0.8" />
        </svg>
      </div>
    </CardShell>
  );
}

/** 03 — medicine / database objects */
export function VisualMediTrust() {
  return (
    <CardShell label="Animated pharmacy database illustration">
      <div className="relative h-full w-full">
        <svg className="absolute right-8 top-3" width="56" height="72" viewBox="0 0 80 112" fill="none">
          <ellipse cx="40" cy="14" rx="30" ry="10" fill="#0D1B2A" stroke="#38bdf8" strokeWidth="2" />
          <path d="M10 14 V84 a30 10 0 0 0 60 0 V14" fill="#0d1b2a" stroke="#38bdf8" strokeWidth="2" opacity="0.9" />
          <ellipse cx="40" cy="40" rx="30" ry="9" stroke="#2dd4bf" strokeWidth="1.5" opacity="0.6" />
          <ellipse cx="40" cy="14" rx="30" ry="10" fill="rgba(56,189,248,0.15)" />
        </svg>
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute left-5 flex items-center gap-2"
            style={{ top: 14 + i * 30 }}
            animate={{ x: [0, 6, 0] }}
            transition={{ duration: 3, delay: i * 0.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="h-3 w-3 rotate-45 rounded-[3px] border border-[#2dd4bf] bg-[rgba(45,212,191,0.15)]" />
            <div className="h-2 rounded bg-[rgba(45,212,191,0.35)]" style={{ width: 56 - i * 8 }} />
          </motion.div>
        ))}
        <span className="absolute bottom-3 right-6 font-mono text-[0.55rem] text-[#7dd3fc]">
          inventory.sync
        </span>
      </div>
    </CardShell>
  );
}

/** 04 — POS terminal + database */
export function VisualSwiftPos() {
  return (
    <CardShell label="Animated POS terminal illustration">
      <div className="relative h-full w-full">
        <motion.div
          className="absolute left-6 top-4 h-26 w-36 rounded-md border border-[rgba(45,212,191,0.35)] bg-[#07111F]/90"
          style={{ height: 100 }}
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="border-b border-[rgba(45,212,191,0.2)] px-2 py-1.5 font-mono text-[0.5rem] text-[#5eead4]">
            $ cart.checkout
          </div>
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="mx-2 mt-1.5 h-1.5 rounded bg-[rgba(45,212,191,0.3)]" style={{ width: `${88 - i * 15}%` }} />
          ))}
          <div className="mx-2 mt-2 flex items-center gap-1 font-mono text-[0.5rem] text-[#2dd4bf]">
            <span className="animate-caret">▌</span> total: $24.50
          </div>
        </motion.div>
        <motion.div
          className="absolute bottom-5 right-6"
          animate={{ rotate: [0, 4, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="44" height="58" viewBox="0 0 80 112" fill="none">
            <ellipse cx="40" cy="14" rx="30" ry="10" fill="#0D1B2A" stroke="#2dd4bf" strokeWidth="2" />
            <path d="M10 14 V84 a30 10 0 0 0 60 0 V14" fill="#0d1b2a" stroke="#2dd4bf" strokeWidth="2" opacity="0.85" />
            <ellipse cx="40" cy="14" rx="30" ry="10" fill="rgba(45,212,191,0.15)" />
          </svg>
        </motion.div>
      </div>
    </CardShell>
  );
}

/** 05 — route / network nodes */
export function VisualRideWave() {
  return (
    <CardShell label="Animated ride-sharing route network">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 320 160" fill="none" preserveAspectRatio="none">
        <motion.path
          d="M30 120 C 110 40, 200 130, 290 50"
          stroke="rgba(56,189,248,0.45)"
          strokeWidth="2"
          strokeDasharray="5 5"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <motion.circle cx="30" cy="120" r="9" fill="#0d1b2a" stroke="#38bdf8" strokeWidth="2.5"
          animate={{ r: [9, 11, 9] }} transition={{ duration: 2.5, repeat: Infinity }} />
        <motion.circle cx="160" cy="85" r="7" fill="#0d1b2a" stroke="#2dd4bf" strokeWidth="2"
          animate={{ r: [7, 9, 7] }} transition={{ duration: 2.5, delay: 0.6, repeat: Infinity }} />
        <motion.circle cx="290" cy="50" r="9" fill="#0d1b2a" stroke="#a78bfa" strokeWidth="2.5"
          animate={{ r: [9, 11, 9] }} transition={{ duration: 2.5, delay: 1.2, repeat: Infinity }} />
        <text x="30" y="145" fontSize="9" fill="#7dd3fc" fontFamily="JetBrains Mono">pick-up</text>
        <text x="258" y="38" fontSize="9" fill="#c4b5fd" fontFamily="JetBrains Mono">midway.join</text>
      </svg>
      <motion.div
        className="absolute h-2.5 w-2.5 rounded-full bg-[#2dd4bf] shadow-[0_0_10px_#2dd4bf]"
        animate={{ offsetDistance: ["0%", "100%"], offsetRotate: "0deg" }}
        style={{ offsetPath: "path('M30 120 C 110 40, 200 130, 290 50')" }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
      />
    </CardShell>
  );
}

/** 06 — queue blocks + CPU scheduler */
export function VisualFestify() {
  return (
    <CardShell label="Animated CPU scheduling queue visualization">
      <div className="relative h-full w-full">
        <div className="absolute left-5 top-6 flex gap-1.5">
          {["FIFO", "SJF", "RR"].map((algo, i) => (
            <motion.div
              key={algo}
              className="flex h-10 w-12 flex-col items-center justify-center rounded border border-[rgba(56,189,248,0.3)] bg-[rgba(56,189,248,0.07)] font-mono text-[0.5rem] text-[#7dd3fc]"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 2.2, delay: i * 0.35, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="mb-0.5 h-1 w-6 rounded bg-[rgba(56,189,248,0.5)]" />
              {algo}
            </motion.div>
          ))}
        </div>
        <motion.div
          className="absolute right-8 top-1/2 -translate-y-1/2"
          animate={{ rotate: 360 }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        >
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="8" fill="rgba(45,212,191,0.2)" stroke="#2dd4bf" strokeWidth="2" />
            <path d="M20 2 V10 M20 30 V38 M2 20 H10 M30 20 H38 M7 7 L13 13 M27 27 L33 33 M7 33 L13 27 M27 13 L33 7" stroke="#2dd4bf" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </motion.div>
        <span className="absolute bottom-3 left-5 font-mono text-[0.55rem] text-[#7dd3fc]">
          queue.dispatch()
        </span>
      </div>
    </CardShell>
  );
}

/** 07 — donation network nodes */
export function VisualCareChain() {
  return (
    <CardShell label="Animated donation network nodes">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 320 160" fill="none" preserveAspectRatio="none">
        {[[60, 40], [160, 90], [260, 30], [240, 125], [110, 130]].map(([cx, cy], i) => (
          <motion.g key={i} initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }}>
            <motion.circle cx={cx} cy={cy} r={14} fill="#0d1b2a" stroke="#38bdf8" strokeWidth="2"
              animate={{ r: [14, 16, 14] }} transition={{ duration: 3, delay: i * 0.4, repeat: Infinity }} />
            <circle cx={cx} cy={cy} r={5} fill="rgba(56,189,248,0.6)" />
          </motion.g>
        ))}
        <line x1="72" y1="46" x2="148" y2="85" stroke="rgba(56,189,248,0.35)" strokeWidth="1.5" />
        <line x1="172" y1="86" x2="248" y2="36" stroke="rgba(45,212,191,0.35)" strokeWidth="1.5" />
        <line x1="168" y1="98" x2="232" y2="120" stroke="rgba(167,139,250,0.35)" strokeWidth="1.5" />
        <line x1="118" y1="128" x2="152" y2="96" stroke="rgba(56,189,248,0.3)" strokeWidth="1.5" />
        <line x1="72" y1="48" x2="104" y2="124" stroke="rgba(45,212,191,0.25)" strokeWidth="1.5" strokeDasharray="4 4" />
      </svg>
      <span className="absolute bottom-3 right-5 font-mono text-[0.55rem] text-[#7dd3fc]">
        donate.flow
      </span>
    </CardShell>
  );
}

/** 08 — banking dashboard + transaction nodes */
export function VisualBanking() {
  return (
    <CardShell label="Animated banking dashboard illustration">
      <div className="relative h-full w-full">
        <div className="absolute left-4 top-4 space-y-2">
          {[64, 48, 32].map((w, i) => (
            <motion.div
              key={i}
              className="h-2 rounded bg-[rgba(56,189,248,0.35)]"
              style={{ width: w }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2, ease: [0.23, 1, 0.32, 1] }}
            />
          ))}
        </div>
        <div className="absolute right-5 top-6 flex flex-col gap-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="flex items-center gap-1.5"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2.6, delay: i * 0.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="h-2 w-2 rotate-45 rounded-[2px] bg-[#38bdf8]" />
              <div className="h-1.5 w-10 rounded bg-[rgba(56,189,248,0.3)]" />
            </motion.div>
          ))}
        </div>
        <svg className="absolute bottom-3 left-5" width="120" height="44" viewBox="0 0 120 44" fill="none">
          <motion.polyline
            points="0,36 20,26 40,30 60,16 80,20 100,8 120,12"
            stroke="#2dd4bf"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
          />
        </svg>
      </div>
    </CardShell>
  );
}

export const PROJECT_VISUALS = [
  VisualAiInterview,
  VisualPortfolio,
  VisualMediTrust,
  VisualSwiftPos,
  VisualRideWave,
  VisualFestify,
  VisualCareChain,
  VisualBanking,
];
