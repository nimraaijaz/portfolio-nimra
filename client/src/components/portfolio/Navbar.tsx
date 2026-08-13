/*
 * MIDNIGHT CIRCUIT — Navbar.
 * Translucent + blurred on scroll, magnetic CTA, mobile menu.
 */
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/data";
import { MagneticButton } from "./primitives";

const LOGO_URL = "/logo.svg";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-[rgba(56,189,248,0.12)] bg-[#07111F]/75 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="container flex h-16 items-center justify-between md:h-[72px]" aria-label="Primary">
        <a
          href="#home"
          className="flex items-center gap-2.5"
          aria-label="Nimra Aijaz — Home"
        >
          <img src={LOGO_URL} alt="Nimra Aijaz logo" className="h-9 w-9 md:h-10 md:w-10" />
          <span className="font-mono text-sm font-semibold tracking-[0.18em] text-[#e6f1ff] uppercase whitespace-nowrap mr-4">
            Nimra<span className="text-[#38bdf8]">.dev</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.slice(0, -1).map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-[0.72rem] font-medium tracking-[0.12em] text-[#8aa3bd] uppercase transition-colors duration-200 hover:text-[#7dd3fc]"
            >
              {l.label}
            </a>
          ))}
          <MagneticButton href="#contact" ariaLabel="Contact Nimra">
            Let's Work Together
          </MagneticButton>
        </div>

        <button
          className="lg:hidden text-[#7dd3fc] p-2"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
            className="overflow-hidden border-t border-[rgba(56,189,248,0.12)] bg-[#07111F]/95 backdrop-blur-xl lg:hidden"
          >
            <div className="container flex flex-col gap-1 py-5">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-mono text-sm font-medium tracking-[0.12em] text-[#c7ddf3] uppercase py-2.5 hover:text-[#7dd3fc]"
                >
                  {l.label}
                </a>
              ))}
              <div className="pt-3">
                <MagneticButton href="#contact" ariaLabel="Contact Nimra">
                  Let's Work Together
                </MagneticButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
