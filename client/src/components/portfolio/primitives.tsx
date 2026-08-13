import React, { useMemo, useRef } from "react";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  Braces,
  BrainCircuit,
  Database,
  Network,
  Terminal as TerminalIcon,
} from "lucide-react";

/* =========================================================
   Shared animation
========================================================= */

const EASE = [0.23, 1, 0.32, 1] as const;

/* =========================================================
   Floating
========================================================= */

export type FloatingProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  /**
   * Multiplier on `duration`: higher speed = shorter cycle = faster motion.
   * e.g. speed={2} halves the duration. Takes precedence over `duration`
   * when both are supplied, since call sites across the app use `speed`
   * as their primary knob.
   */
  speed?: number;
  y?: number;
  rotate?: number;
};

export function Floating({
  children,
  className = "",
  delay = 0,
  duration = 5,
  speed,
  y = 10,
  rotate = 3,
}: FloatingProps) {
  const effectiveDuration = speed && speed > 0 ? duration / speed : duration;

  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -y, 0],
        rotate: [0, rotate, 0],
      }}
      transition={{
        duration: effectiveDuration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}

/* =========================================================
   Section Heading
========================================================= */

export type SectionHeadingProps = {
  children?: React.ReactNode;
  eyebrow?: React.ReactNode;
  /** Alias for `eyebrow` — the small uppercase label above the title. */
  kicker?: React.ReactNode;
  className?: string;
  title?: React.ReactNode;
  /** Optional supporting line rendered below the title. */
  subtitle?: React.ReactNode;
};

export function SectionHeading({
  children,
  eyebrow,
  kicker,
  className = "",
  title,
  subtitle,
}: SectionHeadingProps) {
  const content = title ?? children;
  const label = eyebrow ?? kicker;

  return (
    <div className={`relative z-10 ${className}`}>
      {label && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300"
        >
          {label}
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8, ease: EASE }}
        className="text-5xl font-black uppercase leading-none tracking-tight sm:text-7xl md:text-8xl lg:text-[9rem]"
      >
        <span className="bg-gradient-to-b from-slate-200 via-cyan-200 to-slate-500 bg-clip-text text-transparent">
          {content}
        </span>
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

/* =========================================================
   AI Orb
========================================================= */

export type AiOrbProps = {
  size?: number | string;
  className?: string;
};

export function AiOrb({
  size = 180,
  className = "",
}: AiOrbProps) {
  const numericSize =
    typeof size === "number" ? size : 180;

  return (
    <motion.div
      className={`relative flex items-center justify-center ${className}`}
      style={{
        width: size,
        height: size,
      }}
      animate={{
        y: [0, -10, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* Ambient glow */}
      <div className="absolute inset-[-20%] rounded-full bg-cyan-400/10 blur-3xl" />

      {/* Outer rotating ring */}
      <motion.div
        className="absolute inset-[5%] rounded-full border border-cyan-300/25"
        animate={{ rotate: 360 }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Second rotating ring */}
      <motion.div
        className="absolute inset-[15%] rounded-full border border-violet-300/20"
        animate={{ rotate: -360 }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Orbital points */}
      <motion.div
        className="absolute left-1/2 top-[4%] h-2 w-2 -translate-x-1/2 rounded-full bg-cyan-200 shadow-[0_0_20px_rgba(103,232,249,0.9)]"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          transformOrigin: `0 ${numericSize * 0.46}px`,
        }}
      />

      {/* Core */}
      <motion.div
        className="relative flex h-[55%] w-[55%] items-center justify-center rounded-full border border-cyan-200/40 bg-gradient-to-br from-cyan-300/30 via-blue-500/20 to-violet-500/30 shadow-[0_0_70px_rgba(34,211,238,0.25)] backdrop-blur-xl"
        animate={{
          scale: [1, 1.06, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <BrainCircuit
          size={numericSize * 0.22}
          strokeWidth={1.2}
          className="text-cyan-200"
        />
      </motion.div>
    </motion.div>
  );
}

/* =========================================================
   Code Brackets
========================================================= */

export type CodeBracketsProps = {
  size?: number;
  className?: string;
};

export function CodeBrackets({
  size = 90,
  className = "",
}: CodeBracketsProps) {
  return (
    <motion.div
      className={`flex items-center justify-center rounded-2xl border border-cyan-300/20 bg-slate-900/60 p-4 shadow-xl backdrop-blur-md ${className}`}
      style={{
        width: size,
        height: size,
      }}
      animate={{
        y: [0, -8, 0],
        rotate: [-3, 3, -3],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <Braces
        size={size * 0.45}
        strokeWidth={1.2}
        className="text-cyan-200"
      />
    </motion.div>
  );
}

/* =========================================================
   Database Cylinder
========================================================= */

export type DbCylinderProps = {
  size?: number;
  className?: string;
};

export function DbCylinder({
  size = 90,
  className = "",
}: DbCylinderProps) {
  return (
    <motion.div
      className={`relative flex items-center justify-center rounded-2xl border border-blue-300/20 bg-blue-950/40 shadow-xl backdrop-blur-md ${className}`}
      style={{
        width: size,
        height: size,
      }}
      animate={{
        y: [0, -7, 0],
        rotate: [-2, 2, -2],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <Database
        size={size * 0.45}
        strokeWidth={1.2}
        className="text-blue-200"
      />

      <div className="absolute inset-x-[20%] bottom-[18%] h-px bg-blue-200/20" />
    </motion.div>
  );
}

/* =========================================================
   Terminal
========================================================= */

export type TerminalProps = {
  className?: string;
  children?: React.ReactNode;
  /** Width in pixels. Falls back to the default w-56 (224px) class when omitted. */
  w?: number;
};

export function Terminal({
  className = "",
  children,
  w,
}: TerminalProps) {
  return (
    <motion.div
      className={`relative ${w ? "" : "w-56"} overflow-hidden rounded-xl border border-slate-600/50 bg-[#07111f]/95 shadow-2xl backdrop-blur-md ${className}`}
      style={w ? { width: w } : undefined}
      animate={{
        y: [0, -8, 0],
      }}
      transition={{
        duration: 4.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* Window header */}
      <div className="flex items-center gap-1 border-b border-white/10 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-red-400/70" />
        <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
        <span className="h-2 w-2 rounded-full bg-green-400/70" />
      </div>

      {children ? (
        <div className="p-4">{children}</div>
      ) : (
        <div className="p-4 font-mono text-[10px] leading-5">
          <div className="text-cyan-200/90">
            <span className="text-violet-300">$</span>{" "}
            npm run build
          </div>

          <div className="text-slate-500">
            building application...
          </div>

          <div className="text-emerald-300/80">
            ✓ ready
          </div>
        </div>
      )}

      <TerminalIcon className="absolute right-3 top-9 h-3 w-3 text-cyan-300/30" />
    </motion.div>
  );
}

/* =========================================================
   API Nodes
========================================================= */

export type ApiNodesProps = {
  className?: string;
  size?: number;
};

export function ApiNodes({
  className = "",
  size = 1,
}: ApiNodesProps) {
  return (
    <motion.div
      className={`relative h-28 w-48 ${className}`}
      style={{
        scale: size,
      }}
      animate={{
        y: [0, -6, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 192 112"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M32 56 L96 24 L160 56 L96 88 Z"
          stroke="rgba(103,232,249,0.25)"
          strokeWidth="1"
        />

        <path
          d="M32 56 L160 56"
          stroke="rgba(103,232,249,0.15)"
          strokeWidth="1"
        />

        <path
          d="M96 24 L96 88"
          stroke="rgba(103,232,249,0.15)"
          strokeWidth="1"
        />
      </svg>

      {[
        { left: "13%", top: "40%" },
        { left: "47%", top: "11%" },
        { left: "80%", top: "40%" },
        { left: "47%", top: "70%" },
      ].map((position, index) => (
        <motion.div
          key={index}
          className="absolute h-4 w-4 rounded-full border border-cyan-200/50 bg-cyan-300/20 shadow-[0_0_15px_rgba(34,211,238,0.3)]"
          style={position}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.45, 1, 0.45],
          }}
          transition={{
            duration: 2 + index * 0.35,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <Network className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 text-cyan-200/60" />
    </motion.div>
  );
}

/* =========================================================
   Magnetic Button
========================================================= */

export type MagneticButtonProps = {
  children: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: React.MouseEventHandler<
    HTMLButtonElement | HTMLAnchorElement
  >;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  /** Accessible name applied as aria-label on the underlying element. */
  ariaLabel?: string;
  /** "solid" (default) is the filled cyan-to-blue gradient; "ghost" is an outlined, transparent style. */
  variant?: "solid" | "ghost";
};

export function MagneticButton({
  children,
  href,
  target,
  rel,
  onClick,
  className = "",
  type = "button",
  disabled = false,
  ariaLabel,
  variant = "solid",
}: MagneticButtonProps) {
  const ref =
    useRef<HTMLAnchorElement | HTMLButtonElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 250,
    damping: 20,
  });

  const springY = useSpring(y, {
    stiffness: 250,
    damping: 20,
  });

  const handleMouseMove = (
    event: React.MouseEvent<
      HTMLAnchorElement | HTMLButtonElement
    >,
  ) => {
    const element = ref.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();

    x.set(
      (event.clientX -
        (rect.left + rect.width / 2)) *
        0.12,
    );

    y.set(
      (event.clientY -
        (rect.top + rect.height / 2)) *
        0.12,
    );
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const variantClasses =
    variant === "ghost"
      ? `
    border border-cyan-200/30
    bg-transparent
    text-cyan-100
    shadow-none
    hover:bg-cyan-300/10
    hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]
  `
      : `
    border border-cyan-200/30
    bg-gradient-to-r from-cyan-300 to-blue-400
    text-slate-950
    shadow-[0_0_30px_rgba(34,211,238,0.15)]
    hover:shadow-[0_0_40px_rgba(34,211,238,0.3)]
  `;

  const classes = `
    inline-flex items-center justify-center
    rounded-full
    px-6 py-3
    text-sm font-bold uppercase tracking-[0.12em]
    transition-shadow duration-300
    disabled:cursor-not-allowed
    disabled:opacity-50
    ${variantClasses}
    ${className}
  `;

  if (href) {
    return (
      <motion.a
        ref={ref as React.Ref<HTMLAnchorElement>}
        href={href}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
        onClick={
          onClick as React.MouseEventHandler<HTMLAnchorElement>
        }
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          x: springX,
          y: springY,
        }}
        className={classes}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as React.Ref<HTMLButtonElement>}
      type={type}
      disabled={disabled}
      aria-label={ariaLabel}
      onClick={
        onClick as React.MouseEventHandler<HTMLButtonElement>
      }
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        x: springX,
        y: springY,
      }}
      className={classes}
    >
      {children}
    </motion.button>
  );
}

/* =========================================================
   Word Reveal
========================================================= */

export type WordRevealProps = {
  children?: React.ReactNode;
  /** Plain-text alternative to children — used when the caller has a string variable rather than JSX text. */
  text?: string;
  className?: string;
};

export function WordReveal({
  children,
  text: textProp,
  className = "",
}: WordRevealProps) {
  const ref = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.25"],
  });

  const text =
    textProp ??
    React.Children.toArray(children)
      .map((child) =>
        typeof child === "string"
          ? child
          : "",
      )
      .join("");

  const words = text.split(/\s+/).filter(Boolean);

  return (
    <p
      ref={ref}
      className={`leading-relaxed ${className}`}
    >
      {words.map((word, index) => {
        const start = index / Math.max(words.length, 1);
        const end = Math.min(
          start + 0.18,
          1,
        );

        return (
          <RevealWord
            key={`${word}-${index}`}
            word={word}
            progress={scrollYProgress}
            start={start}
            end={end}
          />
        );
      })}
    </p>
  );
}

function RevealWord({
  word,
  progress,
  start,
  end,
}: {
  word: string;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  start: number;
  end: number;
}) {
  const opacity = useTransform(
    progress,
    [start, end],
    [0.18, 1],
  );

  const y = useTransform(
    progress,
    [start, end],
    [8, 0],
  );

  return (
    <motion.span
      style={{
        opacity,
        y,
      }}
      className="mr-[0.3em] inline-block"
    >
      {word}
    </motion.span>
  );
}

/* =========================================================
   Cursor Glow
========================================================= */

export function CursorGlow() {
  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);

  const smoothX = useSpring(mouseX, {
    stiffness: 120,
    damping: 25,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 120,
    damping: 25,
  });

  React.useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMove,
      );
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[1] hidden h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.035] blur-3xl md:block"
      style={{
        x: smoothX,
        y: smoothY,
      }}
      aria-hidden="true"
    />
  );
}

/* =========================================================
   Particles
========================================================= */

export type ParticlesProps = {
  count?: number;
  className?: string;
};

export function Particles({
  count = 35,
  className = "",
}: ParticlesProps) {
  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, index) => ({
        id: index,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: Math.random() * 2.5 + 1,
        duration: Math.random() * 5 + 4,
        delay: Math.random() * 4,
      })),
    [count],
  );

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full bg-cyan-200/40"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            opacity: [0.1, 0.7, 0.1],
            y: [0, -20, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}