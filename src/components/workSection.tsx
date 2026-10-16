import {
  ArrowDownRight,
  ArrowUpRight,
  Code2,
  ExternalLink,
  Layers3,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import data from "@/data.json";

interface Technology {
  name: string;
  primary?: boolean;
}

interface ProjectCaseStudy {
  number: string;
  status?: "featured" | "live";
  slug?: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: Technology[];
  github?: string;
  live?: string;
  screenshot?: string;
  role?: string;
  problem?: string;
  solution?: string;
  outcome?: string;
}

interface WorkProps {
  scrollTo: string;
}

interface PreviewTileProps {
  src?: string;
  title: string;
}

const projects = data.projects as ProjectCaseStudy[];

const easing = [0.22, 1, 0.36, 1] as const;

function PreviewTile({ src, title }: PreviewTileProps) {
  return (
    <div className="flex aspect-[16/10] min-h-0 items-center justify-center overflow-hidden bg-[#080B09] lg:min-h-[280px]">
      {src ? (
        <img
          src={src}
          alt={`${title} admin dashboard screenshot`}
          className="h-full w-full object-cover object-top"
          loading="eager"
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-[#68756D]">
          <Code2 size={30} strokeWidth={1.3} />
          <span className="text-[10px] font-semibold uppercase tracking-[0.18em]">
            Preview coming soon
          </span>
        </div>
      )}
    </div>
  );
}

function TechnologyTags({ technologies }: { technologies: Technology[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech) => (
        <span
          key={tech.name}
          className={`rounded-md border px-2.5 py-1.5 text-[10px] font-semibold tracking-wide ${
            tech.primary
              ? "border-[#10B981]/20 bg-[#10B981]/[0.07] text-[#34D399]"
              : "border-white/[0.08] bg-white/[0.025] text-[#89958D]"
          }`}
        >
          {tech.name}
        </span>
      ))}
    </div>
  );
}

export default function Work({ scrollTo }: WorkProps) {
  const shouldReduceMotion = useReducedMotion();

  const reveal = {
    initial: shouldReduceMotion ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: {
      duration: shouldReduceMotion ? 0 : 0.55,
      ease: easing,
    },
  };

  const featuredProject =
    projects.find((project) => project.status === "featured") ?? projects[0];

  const liveProjects = projects
    .filter(
      (project) => project.status === "live" && project !== featuredProject,
    )
    .slice(0, 2);

  return (
    <section
      id={scrollTo}
      className="relative overflow-hidden border-t border-[#10B981]/20 bg-[#050706] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      <div className="pointer-events-none absolute -right-52 top-32 h-[420px] w-[420px] rounded-full bg-[#10B981]/[0.045] blur-[140px]" />

      <div className="relative mx-auto max-w-[1400px]">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.8,
            ease: easing,
          }}
          className="mb-12 flex flex-wrap items-center justify-between gap-4 sm:mb-16"
        >
          <div className="flex items-center gap-3">
            <span className="text-sm font-black text-[#34D399]">03</span>
            <span className="h-px w-8 bg-[#10B981]/60" />
            <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#A3AEA8] sm:text-xs">
              Selected Work
            </span>
          </div>

          <span className="flex items-center gap-2 text-[9px] font-semibold uppercase tracking-[0.15em] text-[#68756D] sm:text-[10px]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#34D399]" />
            Product & Engineering
          </span>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.9,
            ease: easing,
          }}
          className="mb-14 max-w-3xl sm:mb-16"
        >
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.22em] text-[#34D399]">
            From concept to implementation
          </p>

          <h2 className="text-5xl font-black leading-[0.96] tracking-[-0.015em] text-[#F5F7F6] sm:text-6xl md:text-7xl md:tracking-[-0.065em]">
            BUILT WITH <span className="text-[#10B981]">PURPOSE.</span>
          </h2>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-lg text-sm leading-7 text-[#9AA69E]">
              A closer look at the products I build, the problems they solve,
              and the engineering decisions behind them.
            </p>

            <a
              href="#contact"
              className="inline-flex shrink-0 items-center gap-2 text-xs font-semibold text-[#34D399] transition-colors hover:text-[#6EE7B7]"
            >
              Have a project in mind?
              <ArrowDownRight size={15} />
            </a>
          </div>
        </motion.div>

        {featuredProject && (
          <motion.article
            initial={shouldReduceMotion ? false : { opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.9,
              ease: easing,
            }}
            className="border-b border-white/[0.09] pb-12 sm:pb-16"
          >
            <div className="mb-5 flex items-center justify-between gap-4">
              <span className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.18em] text-[#34D399] sm:text-[10px]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#34D399]" />
                Featured project
              </span>

              <span className="text-[10px] font-medium text-[#68756D]">
                {featuredProject.number}
              </span>
            </div>

            <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-10">
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.85,
                  ease: easing,
                }}
                className="min-w-0 lg:col-span-7"
              >
                <div className="overflow-hidden rounded-xl border border-white/[0.11] bg-[#0B100D] shadow-[0_20px_65px_rgba(0,0,0,0.24)] transition-colors duration-300 hover:border-[#10B981]/30 sm:rounded-2xl">
                  <div className="flex h-10 items-center justify-between border-b border-white/[0.08] bg-[#101612] px-3 sm:h-11 sm:px-4">
                    <div className="flex shrink-0 items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-[#F87171]/80" />
                      <span className="h-2 w-2 rounded-full bg-[#FBBF24]/80" />
                      <span className="h-2 w-2 rounded-full bg-[#34D399]/80" />
                    </div>

                    <div className="mx-3 flex h-6 min-w-0 max-w-[300px] flex-1 items-center justify-center gap-2 rounded-md border border-white/[0.06] bg-[#080B09] px-2 sm:px-3">
                      <Code2 size={11} className="shrink-0 text-[#34D399]" />
                      <span className="truncate text-[9px] text-[#89958D]">
                        {featuredProject.live
                          ? featuredProject.live.replace(/^https?:\/\//, "")
                          : `${featuredProject.slug || featuredProject.title.toLowerCase().replace(/\s+/g, "-")}.project`}
                      </span>
                    </div>

                    {featuredProject.live ? (
                      <a
                        href={featuredProject.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${featuredProject.title} in a new tab`}
                        className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-[#849188] transition-colors hover:bg-[#10B981]/10 hover:text-[#34D399]"
                      >
                        <ExternalLink size={12} />
                      </a>
                    ) : (
                      <span className="h-6 w-6 shrink-0" />
                    )}
                  </div>

                  <div className="p-2 sm:p-3">
                    <PreviewTile
                      src={featuredProject.screenshot}
                      title={featuredProject.title}
                    />
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-2 border-t border-white/[0.07] bg-[#0C110E] px-3 py-2.5 sm:px-4">
                    <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#829087]">
                      {featuredProject.subtitle}
                    </span>

                    <span className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.12em] text-[#34D399]">
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          featuredProject.screenshot
                            ? "bg-[#34D399]"
                            : "bg-[#68756D]"
                        }`}
                      />
                      {featuredProject.screenshot
                        ? "Project preview"
                        : "Preview pending"}
                    </span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.85,
                  delay: shouldReduceMotion ? 0 : 0.1,
                  ease: easing,
                }}
                className="min-w-0 lg:col-span-5 lg:pt-2"
              >
                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-[#34D399]">
                  {featuredProject.subtitle}
                </p>

                <h3 className="text-4xl font-black leading-none tracking-[-0.06em] text-[#F5F7F6] sm:text-5xl">
                  {featuredProject.title}
                  <span className="text-[#10B981]">.</span>
                </h3>

                <p className="mt-5 text-sm leading-7 text-[#A3AEA8]">
                  {featuredProject.description}
                </p>

                {featuredProject.role && (
                  <div className="mt-5 border-l border-[#10B981]/40 pl-4">
                    <p className="mb-1.5 text-[9px] font-bold uppercase tracking-[0.16em] text-[#68756D]">
                      My contribution
                    </p>
                    <p className="text-xs leading-6 text-[#C1CCC4]">
                      {featuredProject.role}
                    </p>
                  </div>
                )}

                <div className="mt-6">
                  <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.17em] text-[#68756D]">
                    Built with
                  </p>
                  <TechnologyTags technologies={featuredProject.technologies} />
                </div>

                <div className="mt-7 flex flex-wrap items-center gap-4">
                  {featuredProject.live && (
                    <a
                      href={featuredProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/live inline-flex items-center gap-2 rounded-lg bg-[#10B981] px-4 py-3 text-[10px] font-extrabold uppercase tracking-[0.1em] text-[#04110B] transition-all hover:bg-[#34D399] hover:shadow-[0_0_22px_rgba(16,185,129,0.16)]"
                    >
                      Live Demo
                      <ArrowUpRight
                        size={14}
                        className="transition-transform group-hover/live:translate-x-0.5 group-hover/live:-translate-y-0.5"
                      />
                    </a>
                  )}

                  {featuredProject.github && (
                    <a
                      href={featuredProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/github inline-flex items-center gap-2 py-2 text-[10px] font-bold uppercase tracking-[0.1em] text-[#A3AEA8] transition-colors hover:text-[#34D399]"
                    >
                      <Code2 size={14} />
                      Source Code
                      <ArrowUpRight
                        size={13}
                        className="transition-transform group-hover/github:translate-x-0.5 group-hover/github:-translate-y-0.5"
                      />
                    </a>
                  )}
                </div>
              </motion.div>
            </div>

            {(featuredProject.problem ||
              featuredProject.solution ||
              featuredProject.outcome) && (
              <motion.div
                initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.75,
                  ease: easing,
                }}
                className="mt-8 sm:mt-10"
              >
                <div className="grid gap-3 md:grid-cols-3">
                  {featuredProject.problem && (
                    <div className="rounded-xl border border-white/[0.08] bg-[#0A0E0B] p-4 sm:p-5">
                      <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.18em] text-[#34D399]">
                        01 / The problem
                      </p>
                      <p className="text-xs leading-6 text-[#9AA69E]">
                        {featuredProject.problem}
                      </p>
                    </div>
                  )}

                  {featuredProject.solution && (
                    <div className="rounded-xl border border-white/[0.08] bg-[#0A0E0B] p-4 sm:p-5">
                      <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.18em] text-[#34D399]">
                        02 / The approach
                      </p>
                      <p className="text-xs leading-6 text-[#9AA69E]">
                        {featuredProject.solution}
                      </p>
                    </div>
                  )}

                  {featuredProject.outcome && (
                    <div className="rounded-xl border border-white/[0.08] bg-[#0A0E0B] p-4 sm:p-5">
                      <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.18em] text-[#34D399]">
                        03 / The outcome
                      </p>
                      <p className="text-xs leading-6 text-[#9AA69E]">
                        {featuredProject.outcome}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </motion.article>
        )}

        {liveProjects.length > 0 && (
          <div className="mt-24 sm:mt-28">
            <motion.div
              {...reveal}
              className="mb-9 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"
            >
              <div>
                <div className="mb-4 flex items-center gap-3">
                  <span className="h-px w-7 bg-[#10B981]" />
                  <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#34D399]">
                    Professional experience
                  </span>
                </div>

                <h3 className="text-2xl font-black tracking-[-0.04em] text-[#F5F7F6] sm:text-3xl">
                  Live projects
                </h3>
              </div>

              <p className="max-w-md text-sm leading-6 text-[#8D9A92]">
                Production websites I contributed to through frontend
                development, API integration, CMS functionality, and SEO
                improvements.
              </p>
            </motion.div>

            <div className="grid gap-5 md:grid-cols-2">
              {liveProjects.map((project, index) => (
                <motion.article
                  key={project.slug ?? project.title}
                  {...reveal}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.5,
                    delay: shouldReduceMotion ? 0 : index * 0.1,
                    ease: easing,
                  }}
                  className="group flex h-full flex-col rounded-2xl border border-white/10 bg-[#0A0D0B] p-6 transition-colors duration-300 hover:border-[#10B981]/35 sm:p-7"
                >
                  <div className="mb-6 flex items-center justify-between gap-3">
                    <span className="text-xs font-bold tracking-[0.16em] text-[#738078]">
                      {project.number}
                    </span>

                    <span className="inline-flex items-center gap-2 rounded-full border border-[#10B981]/20 bg-[#10B981]/[0.06] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#6EE7B7]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#34D399]" />
                      Live
                    </span>
                  </div>

                  <div className="mb-3 flex items-start justify-between gap-4">
                    <div>
                      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#34D399]">
                        {project.subtitle}
                      </p>

                      <h4 className="text-2xl font-black tracking-[-0.035em] text-[#F5F7F6] transition-colors group-hover:text-[#6EE7B7]">
                        {project.title}
                      </h4>
                    </div>

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.025] text-[#34D399] transition-colors group-hover:border-[#10B981]/30 group-hover:bg-[#10B981]/[0.08]">
                      {index === 0 ? (
                        <Layers3 size={19} />
                      ) : (
                        <ExternalLink size={19} />
                      )}
                    </div>
                  </div>

                  <p className="text-sm leading-7 text-[#A3AEA8]">
                    {project.description}
                  </p>

                  {project.role && (
                    <div className="mt-6 rounded-xl border border-white/[0.07] bg-white/[0.02] p-4">
                      <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#34D399]">
                        My contribution
                      </p>
                      <p className="text-sm leading-6 text-[#A3AEA8]">
                        {project.role}
                      </p>
                    </div>
                  )}

                  {(project.problem || project.solution) && (
                    <div className="mt-6 space-y-4">
                      {project.problem && (
                        <div>
                          <h5 className="mb-1 text-xs font-bold text-[#D4DDD8]">
                            Challenge
                          </h5>
                          <p className="text-sm leading-6 text-[#8D9A92]">
                            {project.problem}
                          </p>
                        </div>
                      )}

                      {project.solution && (
                        <div>
                          <h5 className="mb-1 text-xs font-bold text-[#D4DDD8]">
                            Work delivered
                          </h5>
                          <p className="text-sm leading-6 text-[#8D9A92]">
                            {project.solution}
                          </p>
                        </div>
                      )}
                    </div>
                  )}

                  <div className="mt-6">
                    <h5 className="mb-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#D4DDD8]">
                      Technologies
                    </h5>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology.name}
                          className={`rounded-md border px-2.5 py-1.5 text-[11px] ${
                            technology.primary
                              ? "border-[#10B981]/20 bg-[#10B981]/[0.06] text-[#6EE7B7]"
                              : "border-white/[0.08] bg-white/[0.02] text-[#A3AEA8]"
                          }`}
                        >
                          {technology.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-7">
                    <span className="text-xs text-[#738078]">
                      Frontend contribution
                    </span>

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[#34D399] transition-colors hover:text-[#6EE7B7]"
                      >
                        Visit website
                        <ArrowUpRight
                          size={15}
                          className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                        />
                      </a>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        )}

        <motion.div
          {...reveal}
          className="mt-20 flex flex-col items-start justify-between gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center"
        >
          <div>
            <p className="text-lg font-bold text-[#F5F7F6]">
              Have a project in mind?
            </p>
            <p className="mt-1 text-sm text-[#8D9A92]">
              Let&apos;s build something meaningful together.
            </p>
          </div>

          <a
            href="#contact"
            className="group inline-flex items-center gap-3 rounded-lg border border-[#10B981]/30 bg-[#10B981]/[0.06] px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-[#6EE7B7] transition hover:-translate-y-0.5 hover:bg-[#10B981]/[0.12]"
          >
            Let&apos;s talk
            <ArrowDownRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
