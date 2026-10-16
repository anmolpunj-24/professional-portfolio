
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Code2,
  Database,
  Layers3,
  Palette,
  Server,
  Settings2,
  Sparkles,
  Terminal,
  Wrench,
} from "lucide-react";
import data from "@/data.json";

interface SkillsProps {
  scrollTo: string;
}

const categoryIcons = [
  Code2,
  Palette,
  Server,
  Database,
  Layers3,
  Wrench,
  Settings2,
];

const categoryDescriptions = [
  "Building interfaces that feel intuitive, fast, and refined.",
  "Turning designs into consistent, accessible experiences.",
  "Designing APIs and business logic that power applications.",
  "Structuring data for reliability and maintainability.",
  "Connecting application layers into cohesive products.",
  "Streamlining development, testing, and delivery.",
  "Writing maintainable code with sound engineering practices.",
];

export default function Skills({ scrollTo }: SkillsProps) {
  const shouldReduceMotion = useReducedMotion();
  const skillSet = data?.skillSet ?? [];

  const reveal = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 24,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const revealLeft = {
    hidden: {
      opacity: 0,
      x: shouldReduceMotion ? 0 : -30,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  const revealRight = {
    hidden: {
      opacity: 0,
      x: shouldReduceMotion ? 0 : 30,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  const transition = {
    duration: shouldReduceMotion ? 0 : 0.8,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  const stagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  return (
    <section
      id={scrollTo}
      className="relative isolate overflow-hidden bg-[#050706] px-5 py-20 text-white sm:px-8 sm:py-26 lg:px-12 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.16] [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:72px_72px]" />

      <div className="pointer-events-none absolute -left-56 top-40 -z-10 h-[520px] w-[520px] rounded-full bg-emerald-500/[0.075] blur-[150px]" />

      <div className="pointer-events-none absolute -right-48 top-[38%] -z-10 h-[460px] w-[460px] rounded-full bg-teal-500/[0.055] blur-[150px]" />

      <div className="mx-auto max-w-[1400px]">
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={transition}
          className="mb-16 flex flex-col justify-between gap-8 border-b border-white/[0.09] pb-10 md:mb-20 md:flex-row md:items-end md:pb-12"
        >
          <div className="max-w-3xl">
            <div className="mb-8 inline-flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/40" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              </span>

              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-emerald-300 sm:text-xs">
                Capabilities & Technologies
              </span>
            </div>

            <h2 className="text-5xl font-semibold leading-[0.98] tracking-[-0.065em] sm:text-6xl md:text-7xl lg:text-[88px]">
              More than
              <br />
              <span className="bg-gradient-to-r from-emerald-300 via-emerald-400 to-teal-200 bg-clip-text text-transparent">
                just code.
              </span>
            </h2>

            <p className="mt-7 max-w-xl text-sm leading-7 text-white/50 sm:text-base sm:leading-8">
              The technologies, tools, and engineering principles I bring
              together to transform ideas into polished, reliable digital
              products.
            </p>
          </div>

          <div className="flex shrink-0 flex-col items-start gap-3 md:items-end md:pb-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/30">
              Full-stack development
            </span>

            <div className="flex items-center gap-3 text-sm text-white/65">
              <span className="h-px w-9 bg-emerald-400/60" />
              From interface to infrastructure
            </div>

            <a
              href="#contact"
              className="group mt-3 inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/[0.06] px-5 py-3 text-xs font-medium text-emerald-200 transition-all duration-300 hover:border-emerald-300/50 hover:bg-emerald-400/[0.12]"
            >
              Build with me
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </motion.div>

        <div className="grid gap-5 lg:grid-cols-[0.72fr_1.28fr] lg:gap-7">
          <motion.aside
            variants={revealLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            transition={transition}
            className="relative flex flex-col overflow-hidden rounded-3xl border border-white/[0.1] bg-[#0A0D0B] p-6 sm:p-8 lg:p-9"
          >
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-400/[0.09] blur-[90px]" />

            <div className="relative flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Terminal size={15} className="text-emerald-300" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/45">
                  Engineering mindset
                </span>
              </div>

              <Sparkles size={17} className="text-emerald-300/60" />
            </div>

            <div className="relative my-12">
              <div className="mb-5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-400/70">
                <span>01</span>
                <span className="h-px w-8 bg-emerald-400/30" />
                <span>How I work</span>
              </div>

              <h3 className="max-w-sm text-3xl font-medium leading-tight tracking-[-0.045em] sm:text-4xl">
                Thoughtful
                <span className="block text-white/45">by design.</span>
                <span className="block text-emerald-300">Built to scale.</span>
              </h3>

              <p className="mt-6 max-w-sm text-sm leading-7 text-white/45">
                I care about the details users notice and the architecture
                developers depend on. Every layer has a purpose.
              </p>
            </div>

            <div className="relative mt-auto border-t border-white/[0.09] pt-6">
              <div className="mb-5 flex items-center justify-between">
                <span className="text-xs text-white/50">
                  Areas of focus
                </span>
                <span className="font-mono text-[10px] text-emerald-300/70">
                  01 — 03
                </span>
              </div>

              <div className="space-y-4">
                {[
                  {
                    number: "01",
                    title: "User experience",
                    detail: "Interfaces, usability & performance",
                  },
                  {
                    number: "02",
                    title: "Application logic",
                    detail: "APIs, validation & business rules",
                  },
                  {
                    number: "03",
                    title: "System structure",
                    detail: "Data models & maintainable architecture",
                  },
                ].map((item) => (
                  <div
                    key={item.number}
                    className="group flex items-start gap-4"
                  >
                    <span className="pt-0.5 font-mono text-[10px] text-emerald-400/50">
                      {item.number}
                    </span>

                    <div>
                      <p className="text-sm font-medium text-white/80 transition-colors group-hover:text-emerald-200">
                        {item.title}
                      </p>
                      <p className="mt-1 text-xs leading-5 text-white/35">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mt-8 flex items-center gap-3 rounded-2xl border border-emerald-400/[0.12] bg-emerald-400/[0.045] p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-emerald-400/15 bg-emerald-400/[0.08]">
                <Layers3 size={18} className="text-emerald-300" />
              </div>

              <div>
                <p className="text-xs font-semibold text-white/80">
                  End-to-end perspective
                </p>
                <p className="mt-1 text-[11px] leading-5 text-white/40">
                  Connecting the pieces, not just writing the code.
                </p>
              </div>
            </div>
          </motion.aside>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.08 }}
            className="grid auto-rows-min gap-4 sm:grid-cols-2"
          >
            {skillSet.map((group, index) => {
              const Icon = categoryIcons[index % categoryIcons.length];
              const description =
                group.description ||
                categoryDescriptions[index % categoryDescriptions.length];

              return (
                <motion.article
                  key={group.title}
                  variants={revealRight}
                  transition={transition}
                  className={`group relative overflow-hidden rounded-3xl border border-white/[0.09] bg-[#0A0D0B] p-5 transition-colors duration-300 hover:border-emerald-400/25 hover:bg-[#0C100D] sm:p-6 ${
                    index === 0 ? "sm:col-span-2" : ""
                  }`}
                >
                  <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-emerald-400/[0.045] opacity-0 blur-[65px] transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="relative flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3.5">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-emerald-400/[0.17] bg-gradient-to-br from-emerald-400/[0.12] to-emerald-400/[0.015] text-emerald-300 transition-all duration-300 group-hover:border-emerald-300/35 group-hover:shadow-[0_0_25px_rgba(16,185,129,0.09)]">
                        <Icon size={19} strokeWidth={1.6} />
                      </div>

                      <div>
                        <p className="mb-1.5 font-mono text-[9px] uppercase tracking-[0.2em] text-emerald-400/55">
                          Expertise /{" "}
                          {String(index + 1).padStart(2, "0")}
                        </p>

                        <h3 className="text-base font-semibold tracking-tight text-white sm:text-lg">
                          {group.title}
                        </h3>
                      </div>
                    </div>

                    <span className="font-mono text-[10px] text-white/25">
                      {String(group.skills?.length ?? 0).padStart(2, "0")}
                    </span>
                  </div>

                  <p className="relative mt-5 max-w-lg text-xs leading-6 text-white/40">
                    {description}
                  </p>

                  <div className="relative mt-5 flex flex-wrap gap-2">
                    {group.skills?.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-white/[0.08] bg-white/[0.025] px-3 py-2 text-[11px] font-medium text-white/65 transition-all duration-300 hover:border-emerald-400/30 hover:bg-emerald-400/[0.07] hover:text-emerald-200 sm:text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="pointer-events-none absolute bottom-0 left-6 right-6 h-px origin-left scale-x-0 bg-gradient-to-r from-emerald-400/50 via-teal-300/20 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
                </motion.article>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ ...transition, delay: 0.1 }}
          className="mt-12 flex flex-col gap-5 border-t border-white/[0.09] pt-7 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <p className="text-xs leading-6 text-white/40">
              A toolkit that evolves with the problems worth solving.
            </p>
          </div>

          <a
            href="#work"
            className="group inline-flex w-fit items-center gap-2 text-xs font-medium text-white/60 transition-colors hover:text-emerald-300"
          >
            See these skills in action
            <ArrowDownRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
