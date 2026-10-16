
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const easing = [0.22, 1, 0.36, 1] as const;

export default function Header() {
  const shouldReduceMotion = useReducedMotion();

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

  return (
    <motion.header
      variants={entrance}
      initial="hidden"
      animate="visible"
      className="fixed left-0 top-0 z-50 w-full border-b border-[#10B981]/25 bg-[#050706]/90 backdrop-blur-xl"
    >
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#10B981]/30 to-transparent" />

      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6">
        <Link
          href="/"
          className="group flex items-center gap-3"
          aria-label="Anmol Punj home"
        >
          <span className="text-lg font-black tracking-[-0.055em] text-[#F5F7F6] transition-colors duration-300 group-hover:text-[#34D399]">
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
      </div>
    </motion.header>
  );
}
