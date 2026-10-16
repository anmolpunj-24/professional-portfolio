import {
  ArrowDownRight,
  Download,
  Layers3,
  Database,
  Server,
  type LucideIcon,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

import Seo from "@/components/seo";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Contact from "@/components/contactSection";
import Work from "@/components/workSection";
import About from "@/components/aboutSection";
import Skills from "@/components/skillsSection";

const techStack: [string, string, string, LucideIcon][] = [
  ["01", "CLIENT", "React / Next.js", Layers3],
  ["02", "API", "Node.js / Express", Server],
  ["03", "DATA", "MongoDB / MySQL", Database],
];

export default function Home() {
  const shouldReduceMotion = useReducedMotion();

  const leftReveal = {
    hidden: {
      opacity: 0,
      x: shouldReduceMotion ? 0 : -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 1.2,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const cardContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.3,
        delayChildren: shouldReduceMotion ? 0 : 0.2,
      },
    },
  };

  const cardReveal = {
    hidden: {
      opacity: 0,
      x: shouldReduceMotion ? 0 : 55,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 1.1,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const reveal = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 28,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 1,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const headline = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.2,
        delayChildren: shouldReduceMotion ? 0 : 0.3,
      },
    },
  };

  const headlineLine = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 45,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 1.1,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <>
      <Seo />

      <div className="min-h-screen overflow-hidden bg-[#050706] font-sans text-[#F5F7F6] selection:bg-[#10B981]/30 selection:text-white">
        <Header />

        <main>
          <section className="relative flex items-end overflow-hidden px-6 pb-16 pt-32 lg:px-10 lg:pb-20">
            <motion.div
              aria-hidden="true"
              initial={false}
              animate={
                shouldReduceMotion
                  ? { opacity: 0.09 }
                  : { opacity: [0.06, 0.11, 0.06] }
              }
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : { duration: 8, repeat: Infinity, ease: "easeInOut" }
              }
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_75%_30%,rgba(16,185,129,0.09),transparent_45%)]"
            />

            <div className="pointer-events-none absolute inset-0 opacity-[0.045] [background-image:linear-gradient(to_right,#10B981_1px,transparent_1px),linear-gradient(to_bottom,#10B981_1px,transparent_1px)] [background-size:80px_80px]" />

            <motion.div
              aria-hidden="true"
              initial={false}
              animate={
                shouldReduceMotion
                  ? { opacity: 0.07 }
                  : {
                      opacity: [0.045, 0.09, 0.045],
                      scale: [1, 1.06, 1],
                    }
              }
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : { duration: 10, repeat: Infinity, ease: "easeInOut" }
              }
              className="pointer-events-none absolute right-[9%] top-[18%] h-[420px] w-[420px] rounded-full bg-[#10B981]/[0.07] blur-[130px]"
            />

            <div className="pointer-events-none absolute right-[19%] top-[23%] h-1.5 w-1.5 rounded-full bg-[#34D399] shadow-[0_0_16px_5px_rgba(52,211,153,0.4)]" />

            <div className="pointer-events-none absolute right-[28%] top-[39%] h-1.5 w-1.5 rounded-full bg-[#10B981]/80 shadow-[0_0_18px_6px_rgba(16,185,129,0.25)]" />

            <div className="pointer-events-none absolute left-[38%] top-[28%] h-px w-20 rotate-[35deg] bg-gradient-to-r from-transparent via-[#10B981]/50 to-transparent" />

            <div className="pointer-events-none absolute right-[13%] top-[31%] h-px w-24 -rotate-[35deg] bg-gradient-to-r from-transparent via-[#10B981]/40 to-transparent" />

            <div className="pointer-events-none absolute bottom-[23%] left-[14%] h-1 w-1 rounded-full bg-[#10B981]/80 shadow-[0_0_12px_4px_rgba(16,185,129,0.3)]" />

            <div className="relative mx-auto w-full max-w-[1400px]">
              <motion.div
                variants={reveal}
                initial="hidden"
                animate="visible"
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.8,
                  delay: shouldReduceMotion ? 0 : 0.1,
                }}
                className="mb-10 flex items-center gap-3"
              >
                <span className="h-[2px] w-12 bg-[#10B981] shadow-[0_0_12px_rgba(16,185,129,0.5)]" />

                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#34D399]">
                  Full Stack Developer
                </span>

                <span className="h-1.5 w-1.5 rounded-full bg-[#10B981] shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
              </motion.div>

              <motion.h1
                variants={headline}
                initial="hidden"
                animate="visible"
                className="relative max-w-[1200px] text-[clamp(4rem,10vw,10rem)] font-black leading-[0.82] tracking-[-0.015em] lg:tracking-[-0.075em]"
              >
                <span className="block overflow-hidden pb-[0.06em]">
                  <motion.span variants={headlineLine} className="block">
                    I BUILD
                  </motion.span>
                </span>

                <span className="block overflow-hidden pb-[0.06em]">
                  <motion.span
                    variants={headlineLine}
                    className="block text-[#10B981] drop-shadow-[0_0_35px_rgba(16,185,129,0.12)]"
                  >
                    DIGITAL
                  </motion.span>
                </span>

                <span className="block overflow-hidden pb-[0.06em]">
                  <motion.span variants={headlineLine} className="block">
                    PRODUCTS<span className="text-[#34D399]">.</span>
                  </motion.span>
                </span>
              </motion.h1>

              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: shouldReduceMotion ? 0 : 0.15,
                      delayChildren: shouldReduceMotion ? 0 : 0.85,
                    },
                  },
                }}
                className="mt-10 flex flex-col justify-between gap-8 sm:mt-12 xl:flex-row xl:items-end lg:gap-10"
              >
                <motion.p
                  variants={reveal}
                  className="xl:max-w-xl text-base font-medium leading-8 text-[#A3AEA8] md:text-lg"
                >
                  Full Stack Developer focused on building{" "}
                  <span className="font-bold text-white">
                    scalable, responsive
                  </span>{" "}
                  and thoughtful digital experiences — from{" "}
                  <span className="font-bold text-[#34D399]">
                    interface to API to database.
                  </span>
                </motion.p>

                <motion.div variants={reveal}>
                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href="/resume.pdf"
                      download="Anmol-Punj-Full-Stack-Developer-Resume.pdf"
                      className="group inline-flex w-fit items-center gap-3 border border-[#10B981] bg-[#10B981] py-4 pl-3 pr-6 text-xs font-bold uppercase tracking-[0.18em] text-[#050706] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#34D399] hover:bg-[#059669] hover:shadow-[0_0_25px_rgba(16,185,129,0.2)]"
                    >
                      <Download
                        size={17}
                        className="text-[#050706] transition-transform duration-300 group-hover:translate-y-0.5"
                      />
                      Download Resume
                    </a>
                    <a
                      href="#work"
                      className="group flex cursor-pointer items-center gap-4 border border-[#10B981]/50 bg-[#10B981]/[0.07] px-6 py-4 text-xs font-bold uppercase tracking-[0.2em] text-[#34D399] transition-all duration-300 hover:-translate-y-1 hover:border-[#34D399] hover:bg-[#10B981]/[0.15] hover:text-white hover:shadow-[0_0_30px_rgba(16,185,129,0.13)]"
                    >
                      Explore my work
                      <ArrowDownRight
                        size={17}
                        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
                      />
                    </a>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                initial="hidden"
                animate="visible"
                variants={reveal}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.8,
                  delay: shouldReduceMotion ? 0 : 1.25,
                }}
                className="mt-14 flex items-center text-center justify-between gap-4 border-t border-[#10B981]/25 pt-5 sm:mt-16"
              >
                <span className="cursor-default text-[10px] font-bold uppercase tracking-[0.2em] text-[#84938B]">
                  Based in <span className="text-[#34D399]">India</span>
                </span>

                <span className="cursor-default text-[10px] font-semibold uppercase tracking-[0.2em] text-[#84938B]">
                  React <span className="text-[#10B981]">·</span> Next.js{" "}
                  <span className="text-[#10B981]">·</span> Node{" "}
                  <span className="text-[#10B981]">·</span> MongoDB
                </span>

                <a
                  href="#about"
                  className="group flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#84938B] transition-colors duration-300 hover:text-[#34D399]"
                >
                  Scroll to explore
                  <ArrowDownRight
                    size={14}
                    className="text-[#10B981] transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
                  />
                </a>
              </motion.div>
            </div>
          </section>

          <About scrollTo="about" />
          <Skills scrollTo="skills" />
          <Work scrollTo="work" />

          <section className="relative overflow-hidden border-t border-[#10B981]/25 bg-[#080C0A] px-6 py-28 lg:px-10 lg:py-40">
            <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#10B981]/[0.045] blur-[120px]" />

            <div className="relative mx-auto max-w-[1400px]">
              <motion.div
                variants={leftReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                className="mb-20 flex items-center gap-4"
              >
                <span className="text-sm font-black text-[#34D399]">04</span>
                <span className="h-[2px] w-10 bg-[#10B981]/70" />
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#A3AEA8]">
                  Engineering
                </span>
              </motion.div>

              <div className="grid gap-20 lg:grid-cols-2 lg:items-center">
                <motion.div
                  variants={leftReveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <h2 className="text-5xl font-black leading-[0.95] tracking-[-0.015em] md:tracking-[-0.055em] md:text-7xl">
                    FROM
                    <br />
                    <span className="text-[#F5F7F6]">INTERFACE</span>
                    <br />
                    <span className="text-[#10B981]">TO DATABASE.</span>
                  </h2>

                  <p className="mt-10 max-w-lg text-sm font-medium leading-7 text-[#A3AEA8]">
                    I enjoy working across the entire application — from{" "}
                    <span className="font-bold text-white">
                      responsive interfaces
                    </span>{" "}
                    and API integration to{" "}
                    <span className="font-bold text-[#34D399]">
                      backend architecture, authentication and database design.
                    </span>
                  </p>

                  <div className="mt-10 flex items-center gap-3">
                    <span className="h-[2px] w-12 bg-[#10B981]" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#34D399]">
                      One system. Every layer.
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  variants={cardContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  className="space-y-3"
                >
                  {techStack.map(([number, title, description, Icon]) => (
                    <motion.div
                      key={number}
                      variants={cardReveal}
                      className="group relative flex cursor-default items-center gap-6 overflow-hidden border border-white/[0.1] bg-[#0D1411] p-6 transition-all duration-300 hover:-translate-x-1 hover:border-[#10B981]/60 hover:bg-[#0F1914] hover:shadow-[0_0_28px_rgba(16,185,129,0.07)]"
                    >
                      <span className="absolute bottom-0 left-0 top-0 w-[2px] bg-[#10B981] opacity-0 transition-all duration-300 group-hover:opacity-100" />

                      <span className="text-xs font-bold text-[#34D399]">
                        {number}
                      </span>

                      <Icon
                        size={21}
                        strokeWidth={2}
                        className="shrink-0 text-[#84938B] transition-all duration-300 group-hover:scale-110 group-hover:text-[#34D399]"
                      />

                      <div className="flex-1">
                        <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#84938B] transition-colors duration-300 group-hover:text-[#34D399]">
                          {title}
                        </p>

                        <p className="mt-1 text-base font-bold text-[#F5F7F6] transition-colors duration-300 group-hover:text-white sm:text-lg">
                          {description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </section>

          <Contact scrollTo="contact" />
        </main>

        <Footer />
      </div>
    </>
  );
}
