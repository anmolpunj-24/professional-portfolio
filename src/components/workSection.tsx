import {
  ArrowDownRight,
  ArrowUpRight,
  CheckCircle2,
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
  status?: "featured" | "upcoming";
  slug?: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: Technology[];
  github?: string;
  liveUrl?: string;
  screenshots?: string[];
  image?: string;
  screenshot?: string;
  role?: string;
  problem?: string;
  solution?: string;
  features?: string[];
  engineering?: string;
  outcome?: string;
}

interface WorkProps {
  scrollTo: string;
}

interface PreviewTileProps {
  src?: string;
  title: string;
  index: number;
  primary?: boolean;
}

const projects = data.projects as ProjectCaseStudy[];

const easing = [0.22, 1, 0.36, 1] as const;

function PreviewTile({ src, title, index, primary = false }: PreviewTileProps) {
  return (
    <div className="group relative min-h-0 overflow-hidden rounded-lg border border-white/[0.09] bg-[#0A100C]">
      {src ? (
        <img
          src={src}
          alt={`${title} screenshot ${index}`}
          loading={index === 1 ? "eager" : "lazy"}
          className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.025]"
        />
      ) : (
        <div className="absolute inset-0 overflow-hidden bg-[radial-gradient(ellipse_at_50%_0%,rgba(16,185,129,0.12),transparent_70%)] p-3 sm:p-4">
          <div className="absolute inset-0 opacity-[0.055] [background-image:linear-gradient(to_right,#34D399_1px,transparent_1px),linear-gradient(to_bottom,#34D399_1px,transparent_1px)] [background-size:22px_22px]" />

          <div className="relative flex items-center justify-between gap-2 border-b border-white/[0.08] pb-2">
            <span className="truncate text-[8px] font-semibold uppercase tracking-[0.14em] text-[#A3AEA8] sm:text-[9px]">
              {primary ? title : `Supporting view ${index}`}
            </span>
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#34D399]/70" />
          </div>

          <div className="relative mt-3 flex gap-2">
            <div className="h-5 w-5 shrink-0 rounded-md border border-[#10B981]/20 bg-[#10B981]/10 sm:h-7 sm:w-7" />
            <div className="flex-1 space-y-1.5 pt-0.5">
              <div className="h-1.5 w-3/4 rounded-full bg-white/10" />
              <div className="h-1 w-1/2 rounded-full bg-white/[0.06]" />
            </div>
          </div>

          <div className="relative mt-3 grid grid-cols-2 gap-2">
            <div className="h-9 rounded-md border border-white/[0.07] bg-white/[0.025] sm:h-12" />
            <div className="h-9 rounded-md border border-white/[0.07] bg-white/[0.025] sm:h-12" />
          </div>

          <div className="relative mt-2 space-y-1.5">
            <div className="h-1 w-full rounded-full bg-white/[0.07]" />
            <div className="h-1 w-4/5 rounded-full bg-white/[0.07]" />
            <div className="h-1 w-3/5 rounded-full bg-white/[0.07]" />
          </div>

          <span className="absolute bottom-2 right-2 rounded border border-white/[0.08] bg-[#050706]/80 px-1.5 py-1 text-[7px] uppercase tracking-wider text-[#829087] sm:text-[8px]">
            {src ? "" : "Preview pending"}
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

  const featuredProject =
    projects.find((project) => project.status !== "upcoming") ?? projects[0];

  const upcomingProjects = projects.filter(
    (project) => project.status === "upcoming",
  );

  const screenshots = (
    featuredProject?.screenshots?.length
      ? featuredProject.screenshots
      : [featuredProject?.image || featuredProject?.screenshot].filter(
          (src): src is string => Boolean(src),
        )
  ).slice(0, 3);

  const collageImages: (string | undefined)[] = screenshots.length
    ? screenshots
    : [undefined, undefined, undefined];

  return (
    <section
      id={scrollTo}
      className="relative overflow-hidden border-t border-[#10B981]/20 bg-[#050706] px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      <div className="pointer-events-none absolute -right-52 top-32 h-[420px] w-[420px] rounded-full bg-[#10B981]/[0.045] blur-[140px]" />

      <div className="relative mx-auto max-w-[1180px]">
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

          <h2 className="text-5xl font-black leading-[0.96] tracking-[-0.065em] text-[#F5F7F6] sm:text-6xl md:text-7xl">
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
                    <div className="flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-[#F87171]/80" />
                      <span className="h-2 w-2 rounded-full bg-[#FBBF24]/80" />
                      <span className="h-2 w-2 rounded-full bg-[#34D399]/80" />
                    </div>

                    <div className="mx-3 flex h-6 min-w-0 max-w-[300px] flex-1 items-center justify-center gap-2 rounded-md border border-white/[0.06] bg-[#080B09] px-2 sm:px-3">
                      <Code2 size={11} className="shrink-0 text-[#34D399]" />
                      <span className="truncate text-[9px] text-[#89958D]">
                        {featuredProject.liveUrl
                          ? featuredProject.liveUrl.replace(/^https?:\/\//, "")
                          : `${featuredProject.slug || featuredProject.title.toLowerCase().replace(/\s+/g, "-")}.project`}
                      </span>
                    </div>

                    {featuredProject.liveUrl ? (
                      <a
                        href={featuredProject.liveUrl}
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

                  <div className="grid gap-2 p-2 sm:gap-2.5 sm:p-3 lg:grid-cols-[1.55fr_1fr]">
                    <div className="aspect-[16/10] min-h-0 lg:aspect-auto lg:min-h-[280px]">
                      <PreviewTile
                        src={collageImages[0]}
                        title={featuredProject.title}
                        index={1}
                        primary
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2 lg:grid-cols-1 lg:grid-rows-2 lg:gap-2.5">
                      {collageImages.slice(1, 3).map((src, index) => (
                        <div
                          key={`${featuredProject.slug}-preview-${index + 2}`}
                          className="aspect-[16/10] min-h-0 lg:aspect-auto lg:min-h-[135px]"
                        >
                          <PreviewTile
                            src={src}
                            title={featuredProject.title}
                            index={index + 2}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-2 border-t border-white/[0.07] bg-[#0C110E] px-3 py-2.5 sm:px-4">
                    <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#829087]">
                      {featuredProject.subtitle}
                    </span>

                    <span className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.12em] text-[#34D399]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#34D399]" />
                      {screenshots.length
                        ? `${screenshots.length} preview${screenshots.length > 1 ? "s" : ""}`
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
                  {featuredProject.liveUrl && (
                    <a
                      href={featuredProject.liveUrl}
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
              featuredProject.outcome ||
              (featuredProject.features?.length ?? 0) > 0 ||
              featuredProject.engineering) && (
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

                {((featuredProject.features?.length ?? 0) > 0 ||
                  featuredProject.engineering) && (
                  <div className="mt-3 grid gap-3 lg:grid-cols-2">
                    {(featuredProject.features?.length ?? 0) > 0 && (
                      <div className="rounded-xl border border-white/[0.08] bg-[#0A0E0B] p-4 sm:p-5">
                        <div className="mb-4 flex items-center gap-2">
                          <CheckCircle2 size={14} className="text-[#34D399]" />
                          <p className="text-[9px] font-bold uppercase tracking-[0.17em] text-[#D1DAD3]">
                            Key features
                          </p>
                        </div>

                        <ul className="grid gap-3 sm:grid-cols-2">
                          {featuredProject.features?.map((feature) => (
                            <li
                              key={feature}
                              className="flex items-start gap-2.5 text-xs leading-5 text-[#A3AEA8]"
                            >
                              <CheckCircle2
                                size={13}
                                className="mt-0.5 shrink-0 text-[#34D399]"
                              />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {featuredProject.engineering && (
                      <div className="rounded-xl border border-white/[0.08] bg-[#0A0E0B] p-4 sm:p-5">
                        <div className="mb-4 flex items-center gap-2">
                          <Code2 size={14} className="text-[#34D399]" />
                          <p className="text-[9px] font-bold uppercase tracking-[0.17em] text-[#D1DAD3]">
                            Engineering notes
                          </p>
                        </div>
                        <p className="text-xs leading-6 text-[#9AA69E]">
                          {featuredProject.engineering}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </motion.div>
            )}
          </motion.article>
        )}

        {upcomingProjects.length > 0 && (
          <div className="mt-10 sm:mt-12">
            <div className="mb-5 flex items-center justify-between gap-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#89958D]">
                More in the works
              </p>
              <span className="text-[9px] uppercase tracking-[0.12em] text-[#68756D]">
                {String(upcomingProjects.length).padStart(2, "0")} upcoming
              </span>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              {upcomingProjects.map((project, index) => (
                <motion.article
                  key={project.slug || project.number}
                  initial={
                    shouldReduceMotion
                      ? false
                      : { opacity: 0, x: index % 2 === 0 ? -18 : 18 }
                  }
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.7,
                    ease: easing,
                  }}
                  className="group rounded-xl border border-white/[0.08] bg-[#0A0E0B] p-5 transition-all duration-300 hover:border-[#10B981]/25 hover:bg-[#0C120E] sm:p-6"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#10B981]/15 bg-[#10B981]/[0.06] text-[#34D399] transition-colors group-hover:bg-[#10B981]/10">
                      <Layers3 size={18} strokeWidth={1.5} />
                    </div>

                    <span className="text-[9px] font-medium tracking-wide text-[#68756D]">
                      {project.number}
                    </span>
                  </div>

                  <div className="mt-5 flex items-center gap-2">
                    <span className="h-px w-5 bg-[#10B981]/60" />
                    <span className="text-[9px] font-bold uppercase tracking-[0.17em] text-[#34D399]">
                      {project.subtitle}
                    </span>
                  </div>

                  <h3 className="mt-2 text-2xl font-black tracking-[-0.045em] text-[#F5F7F6] sm:text-3xl">
                    {project.title}
                    <span className="text-[#10B981]">.</span>
                  </h3>

                  <p className="mt-3 text-xs leading-6 text-[#9AA69E]">
                    {project.description}
                  </p>

                  <div className="mt-5">
                    <TechnologyTags technologies={project.technologies} />
                  </div>

                  <div className="mt-5 flex items-center gap-2 border-t border-white/[0.07] pt-4 text-[9px] font-bold uppercase tracking-[0.13em] text-[#68756D]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#68756D]" />
                    In development
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        )}

        <div className="mt-14 flex flex-col gap-4 border-t border-white/[0.08] pt-7 sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-base font-bold tracking-tight text-[#F5F7F6] sm:text-lg">
              Have a project in mind?
            </p>
            <p className="mt-1.5 text-xs leading-6 text-[#89958D]">
              Let&apos;s turn a good idea into something useful.
            </p>
          </div>

          <a
            href="#contact"
            className="group/contact inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.13em] text-[#34D399] transition-colors hover:text-[#6EE7B7]"
          >
            Let&apos;s talk
            <ArrowUpRight
              size={15}
              className="transition-transform group-hover/contact:translate-x-0.5 group-hover/contact:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
