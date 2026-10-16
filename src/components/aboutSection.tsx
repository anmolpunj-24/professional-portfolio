import { Braces, Layers3, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

interface aboutProps {
  scrollTo: string;
}

export default function About({ scrollTo }: aboutProps) {
  const shouldReduceMotion = useReducedMotion();

  const revealLeft = {
    hidden: {
      opacity: 0,
      x: shouldReduceMotion ? 0 : -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 1.4,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.4,
        delayChildren: shouldReduceMotion ? 0 : 0.2,
      },
    },
  };

  const cardReveal = {
    hidden: {
      opacity: 0,
      x: shouldReduceMotion ? 0 : 55,
      y: shouldReduceMotion ? 0 : 12,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 1.1,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section
      id={scrollTo}
      className="relative overflow-hidden border-t border-[#10B981]/25 px-6 py-28 lg:px-10 lg:py-40"
    >
      <div className="pointer-events-none absolute -left-40 top-32 h-96 w-96 rounded-full bg-[#10B981]/[0.035] blur-[120px]" />

      <div className="relative mx-auto max-w-[1400px]">
        <motion.div
          className="mb-20 flex items-center gap-4"
          variants={revealLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <span className="text-sm font-black text-[#34D399]">01</span>

          <span className="h-[2px] w-10 bg-[#10B981]/70" />

          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#A3AEA8]">
            About
          </span>
        </motion.div>

        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            variants={revealLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <h2 className="max-w-4xl text-4xl font-black leading-[1.05] tracking-[-0.055em] md:text-6xl lg:text-7xl">
              I LIKE
              <br />
              <span className="text-[#F5F7F6]">UNDERSTANDING</span>
              <br />
              <span className="text-[#10B981]">HOW THINGS WORK.</span>
            </h2>

            <p className="mt-8 max-w-lg text-sm font-medium leading-7 text-[#A3AEA8]">
              I don't just want to build things that look good. I want to
              understand the systems behind them, solve real problems, and
              create products that work beautifully from{" "}
              <span className="font-bold text-[#34D399]">
                interface to infrastructure.
              </span>
            </p>

            <div className="mt-12 flex items-center gap-3">
              <div className="h-[2px] w-12 bg-[#10B981]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#34D399]">
                Build with intention
              </span>

              <ArrowUpRight size={15} className="text-[#10B981]" />
            </div>
          </motion.div>

          <motion.div
            className="grid gap-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <motion.div
              variants={cardReveal}
              className="group relative overflow-hidden border border-white/[0.1] bg-[#080C0A] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#10B981]/60 hover:bg-[#0C1510] hover:shadow-[0_0_30px_rgba(16,185,129,0.07)] sm:p-8"
            >
              <div className="absolute bottom-0 left-0 top-0 w-[3px] bg-[#10B981] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="mb-6 flex items-center justify-between">
                <Layers3
                  size={23}
                  strokeWidth={2}
                  className="text-[#10B981] transition-transform duration-300 group-hover:scale-110"
                />

                <span className="text-[10px] font-bold tracking-[0.2em] text-[#34D399]">
                  01
                </span>
              </div>

              <h3 className="text-xl font-bold tracking-tight text-[#F5F7F6] transition-colors duration-300 group-hover:text-[#34D399]">
                Full-stack thinking
              </h3>

              <p className="mt-3 text-sm font-medium leading-7 text-[#A3AEA8]">
                I work across the frontend and backend, connecting interfaces,
                APIs and database-driven systems into one cohesive product.
              </p>
            </motion.div>

            <motion.div
              variants={cardReveal}
              className="group relative overflow-hidden border border-white/[0.1] bg-[#080C0A] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#10B981]/60 hover:bg-[#0C1510] hover:shadow-[0_0_30px_rgba(16,185,129,0.07)] sm:p-8"
            >
              <div className="absolute bottom-0 left-0 top-0 w-[3px] bg-[#10B981] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="mb-6 flex items-center justify-between">
                <Braces
                  size={23}
                  strokeWidth={2}
                  className="text-[#10B981] transition-transform duration-300 group-hover:scale-110"
                />

                <span className="text-[10px] font-bold tracking-[0.2em] text-[#34D399]">
                  02
                </span>
              </div>

              <h3 className="text-xl font-bold tracking-tight text-[#F5F7F6] transition-colors duration-300 group-hover:text-[#34D399]">
                Clean architecture
              </h3>

              <p className="mt-3 text-sm font-medium leading-7 text-[#A3AEA8]">
                My approach is simple: understand the problem, design the
                experience, build the system and make sure the whole thing works
                together.
              </p>
            </motion.div>

            <motion.div
              className="grid gap-3 sm:grid-cols-2"
              variants={staggerContainer}
            >
              <motion.div
                variants={cardReveal}
                className="group border border-[#10B981]/30 bg-[#080C0A] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#10B981]/70 hover:bg-[#0C1510] hover:shadow-[0_0_25px_rgba(16,185,129,0.07)]"
              >
                <p className="text-5xl font-black tracking-[-0.06em] text-[#10B981] transition-colors duration-300 group-hover:text-[#34D399]">
                  3<span className="text-[#34D399]">+</span>
                </p>

                <div className="mt-4 h-[2px] w-8 bg-[#10B981]/70 transition-all duration-300 group-hover:w-14 group-hover:bg-[#34D399]" />

                <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#A3AEA8]">
                  Years Frontend
                </p>
              </motion.div>

              <motion.div
                variants={cardReveal}
                className="group border border-[#10B981]/30 bg-[#080C0A] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#10B981]/70 hover:bg-[#0C1510] hover:shadow-[0_0_25px_rgba(16,185,129,0.07)]"
              >
                <p className="text-5xl font-black tracking-[-0.06em] text-[#10B981] transition-colors duration-300 group-hover:text-[#34D399]">
                  6<span className="text-[#34D399]">+</span>
                </p>

                <div className="mt-4 h-[2px] w-8 bg-[#10B981]/70 transition-all duration-300 group-hover:w-14 group-hover:bg-[#34D399]" />

                <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.18em] text-[#A3AEA8]">
                  Months Backend
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
