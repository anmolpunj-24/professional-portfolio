import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const easing = [0.22, 1, 0.36, 1] as const;

export default function Header() {
  const shouldReduceMotion = useReducedMotion();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const entrance = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : -12,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.8,
        ease: easing,
      },
    },
  };

  const navigation = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: shouldReduceMotion ? 0 : 0.2,
      },
    },
  };

  const navItem = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : -6,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.55,
        ease: easing,
      },
    },
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <motion.header
      variants={entrance}
      initial="hidden"
      animate="visible"
      className="fixed left-0 top-0 z-50 w-full border-b border-[#10B981]/25 bg-[#050706]/95 backdrop-blur-xl"
    >
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#10B981]/30 to-transparent" />

      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6">
        <Link
          href="/"
          onClick={closeMenu}
          className="group flex items-center gap-3"
          aria-label="Anmol Punj home"
        >
          <span className="text-lg font-black tracking-[-0.005em] lg:tracking-[-0.055em] text-[#F5F7F6] transition-colors duration-300 group-hover:text-[#34D399]">
            ANMOL <span className="text-[#10B981]">PUNJ</span>
          </span>

          <span className="h-2 w-2 rounded-full bg-[#10B981] shadow-[0_0_14px_rgba(16,185,129,0.7)] transition-all duration-300 group-hover:scale-125 group-hover:bg-[#34D399]" />
        </Link>

        <motion.nav
          variants={navigation}
          initial="hidden"
          animate="visible"
          className="hidden items-center gap-9 md:flex"
          aria-label="Main navigation"
        >
          {navItems.map((item, index) => (
            <motion.div key={item.href} variants={navItem}>
              <Link
                href={item.href}
                className="group relative py-2 text-[11px] font-bold uppercase tracking-[0.17em] text-[#A3AEA8] transition-colors duration-300 hover:text-[#34D399]"
              >
                <span className="mr-1.5 text-[9px] font-black text-[#10B981]/60 transition-colors duration-300 group-hover:text-[#34D399]">
                  0{index + 1}
                </span>
                {item.label}

                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#10B981] transition-all duration-300 group-hover:w-full" />
              </Link>
            </motion.div>
          ))}
        </motion.nav>

        <div className="flex items-center gap-4">
          <motion.div
            initial={{
              opacity: 0,
              x: shouldReduceMotion ? 0 : 10,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.7,
              delay: shouldReduceMotion ? 0 : 0.45,
              ease: easing,
            }}
            className="hidden items-center gap-3 rounded-full border border-[#10B981]/30 bg-[#10B981]/[0.07] px-4 py-2 transition-all duration-300 hover:border-[#10B981]/60 hover:bg-[#10B981]/[0.12] sm:flex"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#34D399] opacity-40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#10B981]" />
            </span>

            <span className="text-[9px] font-black uppercase tracking-[0.14em] text-[#D4DDD8]">
              Open to opportunities
            </span>
          </motion.div>

          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center border border-[#10B981]/25 bg-[#10B981]/[0.06] text-[#34D399] transition-colors duration-300 hover:border-[#10B981]/60 hover:bg-[#10B981]/[0.13] md:hidden"
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            <motion.span
              animate={{
                rotate: shouldReduceMotion ? 0 : isMenuOpen ? 90 : 0,
              }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
              className="flex"
            >
              {isMenuOpen ? <X size={21} /> : <Menu size={21} />}
            </motion.span>
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isMenuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{
              opacity: 0,
              height: 0,
              y: shouldReduceMotion ? 0 : -8,
            }}
            animate={{
              opacity: 1,
              height: "auto",
              y: 0,
            }}
            exit={{
              opacity: 0,
              height: 0,
              y: shouldReduceMotion ? 0 : -8,
            }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.3,
              ease: easing,
            }}
            className="overflow-hidden border-t border-[#10B981]/20 bg-[#080C0A] md:hidden"
          >
            <div className="px-6 pb-6 pt-4">
              <p className="mb-4 text-[9px] font-bold uppercase tracking-[0.25em] text-[#66736B]">
                Navigation
              </p>

              <nav aria-label="Mobile navigation" className="flex flex-col">
                {navItems.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className="group flex items-center justify-between border-b border-white/[0.07] py-4 transition-colors duration-300 hover:text-[#34D399]"
                  >
                    <span className="flex items-center gap-4">
                      <span className="text-[10px] font-black text-[#10B981]/60">
                        0{index + 1}
                      </span>

                      <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#D4DDD8] transition-colors duration-300 group-hover:text-[#34D399]">
                        {item.label}
                      </span>
                    </span>

                    <ArrowUpRight
                      size={16}
                      className="text-[#10B981]/50 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#34D399]"
                    />
                  </Link>
                ))}
              </nav>

              <div className="mt-6 flex items-center gap-3 border border-[#10B981]/25 bg-[#10B981]/[0.06] px-4 py-4">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#34D399] opacity-40" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#10B981]" />
                </span>

                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.15em] text-[#34D399]">
                    Open to opportunities
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
