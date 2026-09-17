import Head from "next/head";
import {
  ArrowDownRight,
  ArrowUpRight,
  Code2,
  Mail,
  ArrowRight,
  Layers3,
  Database,
  Server,
  Braces,
  LucideIcon,
} from "lucide-react";

const skillGroups = [
  {
    number: "01",
    title: "Frontend",
    description:
      "Interfaces built with modern frameworks, reusable components and strong frontend fundamentals.",
    skills: [
      "React.js",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "React Hooks",
      "HTML5",
      "CSS3",
      "SCSS / SASS",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },

  {
    number: "02",
    title: "UI / UX",
    description:
      "Responsive and accessible experiences designed to remain consistent across devices and browsers.",
    skills: [
      "Responsive Design",
      "WCAG",
      "Semantic HTML",
      "Figma",
      "UI Implementation",
      "Cross-Browser Compatibility",
    ],
  },

  {
    number: "03",
    title: "Backend",
    description:
      "Server-side applications, APIs and authentication built around clear application logic.",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Middleware",
      "JWT",
      "Authentication",
      "Authorization",
      "MVC",
      "Error Handling",
    ],
  },

  {
    number: "04",
    title: "Databases",
    description:
      "Database-driven applications with structured schemas, relationships and reliable data workflows.",
    skills: [
      "MongoDB",
      "Mongoose",
      "MySQL",
      "SQL",
      "Schema Design",
      "Database Design",
      "Data Modeling",
      "CRUD Operations",
    ],
  },

  {
    number: "05",
    title: "Architecture",
    description:
      "System-level thinking across rendering strategies, application structure and scalable design.",
    skills: [
      "SSR / CSR",
      "LLD / HLD",
      "Monolithic Architecture",
      "Microservices",
      "Scalable Architecture",
      "Modular Architecture",
    ],
  },

  {
    number: "06",
    title: "Tooling",
    description:
      "Development workflows, performance practices and tooling that support reliable delivery.",
    skills: [
      "Rendering Optimization",
      "Git",
      "GitHub",
      "NPM",
      "CI / CD",
      "Environment Variables",
      "Lazy Loading",
      "Dynamic Imports",
      "Code Splitting",
      "Image Optimization",
    ],
  },

  {
    number: "07",
    title: "Engineering",
    description:
      "Practices focused on maintainability, reliability and solving problems effectively.",
    skills: [
      "Clean Code",
      "Debugging",
      "Technical Documentation",
      "Code Reusability",
      "Problem Solving",
      "Data Structures",
      "Algorithms",
    ],
  },
];

const projects = [
  {
    number: "01 / 03",
    title: "SWAAD",
    slug: "swaad",
    subtitle: "Taste of Punjab",
    description:
      "A full-stack e-commerce CMS designed for managing products, categories, customers, addresses, authentication and storefront data.",
    technologies: [
      { name: "Next.js", primary: true },
      { name: "Node.js", primary: true },
      { name: "Express", primary: false },
      { name: "MongoDB", primary: true },
    ],
  },
  {
    number: "02 / 03",
    title: "PROJECT TWO",
    slug: "swaad",
    subtitle: "Coming next",
    description:
      "A future project focused on demonstrating product thinking, engineering depth and real-world application development.",
    technologies: [
      { name: "React", primary: true },
      { name: "Node.js", primary: true },
      { name: "API", primary: false },
    ],
  },
  {
    number: "03 / 03",
    title: "PROJECT THREE",
    slug: "swaad",
    subtitle: "Coming next",
    description:
      "Another project that will become a complete case study covering architecture, technical decisions and implementation.",
    technologies: [
      { name: "Next.js", primary: true },
      { name: "TypeScript", primary: true },
      { name: "Database", primary: false },
    ],
  },
];

const techStack: [string, string, string, LucideIcon][] = [
  ["01", "CLIENT", "React / Next.js", Layers3],
  ["02", "API", "Node.js / Express", Server],
  ["03", "DATA", "MongoDB / MySQL", Database],
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Anmol Punj — Full Stack Developer</title>
        <meta
          name="description"
          content="Portfolio of Anmol Punj — Full Stack Developer building modern digital products."
        />
      </Head>

      <div className="min-h-screen bg-[#050706] text-[#F5F7F6]">
        <header className="fixed left-0 top-0 z-50 w-full border-b border-white/[0.06] bg-[#050706]/80 backdrop-blur-xl">
          <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6 lg:px-10">
            <a
              href="#"
              className="group flex cursor-pointer items-center gap-3"
            >
              <span className="text-lg font-semibold tracking-[-0.03em] transition-colors duration-300 group-hover:text-[#10B981]">
                ANMOL PUNJ
              </span>

              <span className="h-1.5 w-1.5 rounded-full bg-[#10B981] shadow-[0_0_10px_rgba(16,185,129,0.45)]" />
            </a>

            <nav className="hidden items-center gap-10 md:flex">
              <a
                href="#work"
                className="group cursor-pointer text-xs font-medium uppercase tracking-[0.18em] text-[#9CA8A2] transition-all duration-300 ease-out hover:scale-[1.08] hover:font-semibold hover:text-[#10B981] hover:[text-shadow:0_0_14px_rgba(16,185,129,0.45)]"
              >
                Work
              </a>

              <a
                href="#about"
                className="group cursor-pointer text-xs font-medium uppercase tracking-[0.18em] text-[#9CA8A2] transition-all duration-300 ease-out hover:scale-[1.08] hover:font-semibold hover:text-[#10B981] hover:[text-shadow:0_0_14px_rgba(16,185,129,0.45)]"
              >
                About
              </a>

              <a
                href="#skills"
                className="group cursor-pointer text-xs font-medium uppercase tracking-[0.18em] text-[#9CA8A2] transition-all duration-300 ease-out hover:scale-[1.08] hover:font-semibold hover:text-[#10B981] hover:[text-shadow:0_0_14px_rgba(16,185,129,0.45)]"
              >
                Skills
              </a>

              <a
                href="#contact"
                className="group cursor-pointer text-xs font-medium uppercase tracking-[0.18em] text-[#9CA8A2] transition-all duration-300 ease-out hover:scale-[1.08] hover:font-semibold hover:text-[#10B981] hover:[text-shadow:0_0_14px_rgba(16,185,129,0.45)]"
              >
                Contact
              </a>
            </nav>

            <div className="hidden cursor-default items-center gap-2 sm:flex">
              <span className="h-2 w-2 rounded-full bg-[#10B981] shadow-[0_0_12px_rgba(16,185,129,0.7)]" />

              <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#9CA8A2]">
                Open to opportunities
              </span>
            </div>
          </div>
        </header>

        <main>
          <section className="relative flex min-h-screen items-end overflow-hidden px-6 pb-16 pt-32 lg:px-10 lg:pb-20">
            <div className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(to_right,#10B981_1px,transparent_1px),linear-gradient(to_bottom,#10B981_1px,transparent_1px)] [background-size:80px_80px]" />

            <div className="pointer-events-none absolute right-[9%] top-[18%] h-[420px] w-[420px] rounded-full bg-[#10B981]/[0.035] blur-[130px]" />

            <div className="pointer-events-none absolute right-[19%] top-[23%] h-1 w-1 rounded-full bg-[#34D399] shadow-[0_0_12px_4px_rgba(52,211,153,0.35)]" />

            <div className="pointer-events-none absolute right-[28%] top-[39%] h-1.5 w-1.5 rounded-full bg-[#10B981]/70 shadow-[0_0_14px_5px_rgba(16,185,129,0.2)]" />

            <div className="pointer-events-none absolute left-[38%] top-[28%] h-px w-20 rotate-[35deg] bg-gradient-to-r from-transparent via-[#10B981]/30 to-transparent" />

            <div className="pointer-events-none absolute right-[13%] top-[31%] h-px w-24 -rotate-[35deg] bg-gradient-to-r from-transparent via-[#10B981]/20 to-transparent" />

            <div className="pointer-events-none absolute bottom-[23%] left-[14%] h-1 w-1 rounded-full bg-[#10B981]/60 shadow-[0_0_10px_3px_rgba(16,185,129,0.2)]" />

            <div className="relative mx-auto w-full max-w-[1400px]">
              <div className="mb-10 flex items-center gap-3">
                <span className="h-px w-10 bg-[#10B981]" />

                <span className="text-xs uppercase tracking-[0.25em] text-[#66736D]">
                  Full Stack Developer
                </span>
              </div>

              <h1 className="relative max-w-[1200px] text-[clamp(4rem,10vw,10rem)] font-semibold leading-[0.82] tracking-[-0.075em]">
                I BUILD
                <br />
                <span className="text-[#9CA8A2]">DIGITAL</span>
                <br />
                PRODUCTS<span className="text-[#10B981]">.</span>
              </h1>

              <div className="mt-14 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
                <p className="max-w-xl text-base leading-7 text-[#8B9690] md:text-lg">
                  Full Stack Developer focused on building scalable, responsive
                  and thoughtful digital experiences — from interface to API to
                  database.
                </p>

                <div className="flex flex-col items-start gap-5">
                  <a
                    href="#work"
                    className="group flex cursor-pointer items-center gap-4 border border-white/10 px-6 py-4 text-xs font-medium uppercase tracking-[0.2em] transition duration-300 hover:border-[#10B981]/50 hover:bg-[#10B981]/[0.06]"
                  >
                    Explore my work
                    <ArrowDownRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
                    />
                  </a>

                  <span className="cursor-default text-[10px] uppercase tracking-[0.2em] text-[#66736D]">
                    React · Next.js · Node · MongoDB
                  </span>
                </div>
              </div>

              <div className="mt-20 flex items-center justify-between border-t border-white/[0.07] pt-5">
                <span className="cursor-default text-[10px] uppercase tracking-[0.2em] text-[#66736D]">
                  Based in India
                </span>

                <span className="flex cursor-default items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-[#66736D]">
                  Scroll to explore
                  <ArrowDownRight size={13} />
                </span>
              </div>
            </div>
          </section>

          <section
            id="about"
            className="border-t border-white/[0.06] px-6 py-28 lg:px-10 lg:py-40"
          >
            <div className="mx-auto max-w-[1400px]">
              <div className="mb-20 flex items-center gap-4">
                <span className="text-xs font-medium text-[#10B981]">01</span>
                <span className="h-px w-8 bg-white/[0.12]" />
                <span className="text-xs uppercase tracking-[0.25em] text-[#66736D]">
                  About
                </span>
              </div>

              <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
                <div>
                  <h2 className="max-w-4xl text-4xl font-medium leading-[1.05] tracking-[-0.045em] md:text-6xl lg:text-7xl">
                    I like understanding
                    <span className="text-[#66736D]"> how things work.</span>
                  </h2>

                  <div className="mt-12 flex items-center gap-3">
                    <div className="h-px w-8 bg-[#10B981]/60" />
                    <span className="text-[9px] uppercase tracking-[0.25em] text-[#66736D]">
                      Build with intention
                    </span>
                  </div>
                </div>

                <div className="grid gap-3">
                  <div className="group border border-white/[0.08] bg-[#080C0A] p-7 transition duration-300 hover:border-[#10B981]/20 hover:bg-[#0A100D]">
                    <div className="mb-5 flex items-center justify-between">
                      <Layers3
                        size={19}
                        className="text-[#10B981]/70 transition group-hover:text-[#10B981]"
                      />

                      <span className="text-[9px] uppercase tracking-[0.2em] text-[#66736D]">
                        01
                      </span>
                    </div>

                    <h3 className="text-lg font-medium">Full-stack thinking</h3>

                    <p className="mt-3 text-sm leading-7 text-[#8B9690]">
                      I work across the frontend and backend, connecting
                      interfaces, APIs and database-driven systems into one
                      cohesive product.
                    </p>
                  </div>

                  <div className="group border border-white/[0.08] bg-[#080C0A] p-7 transition duration-300 hover:border-[#10B981]/20 hover:bg-[#0A100D]">
                    <div className="mb-5 flex items-center justify-between">
                      <Braces
                        size={19}
                        className="text-[#10B981]/70 transition group-hover:text-[#10B981]"
                      />

                      <span className="text-[9px] uppercase tracking-[0.2em] text-[#66736D]">
                        02
                      </span>
                    </div>

                    <h3 className="text-lg font-medium">Clean architecture</h3>

                    <p className="mt-3 text-sm leading-7 text-[#8B9690]">
                      My approach is simple: understand the problem, design the
                      experience, build the system and make sure the whole thing
                      works together.
                    </p>
                  </div>

                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="border border-white/[0.08] bg-[#080C0A] p-7">
                      <p className="text-4xl font-medium tracking-[-0.04em]">
                        3+
                      </p>

                      <p className="mt-3 text-[9px] uppercase tracking-[0.2em] text-[#66736D]">
                        Years Frontend
                      </p>
                    </div>

                    <div className="border border-white/[0.08] bg-[#080C0A] p-7">
                      <p className="text-4xl font-medium tracking-[-0.04em]">
                        6+
                      </p>

                      <p className="mt-3 text-[9px] uppercase tracking-[0.2em] text-[#66736D]">
                        Months Backend
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            id="skills"
            className="border-t border-white/[0.06] bg-[#080C0A] px-6 py-28 lg:px-10 lg:py-28"
          >
            <div className="mx-auto max-w-[1400px]">
              <div className="mb-20 flex items-center gap-4">
                <span className="text-xs font-medium text-[#10B981]">02</span>
                <span className="h-px w-8 bg-white/[0.12]" />
                <span className="text-xs uppercase tracking-[0.25em] text-[#66736D]">
                  Capabilities
                </span>
              </div>

              <div className="mb-20 max-w-3xl">
                <h2 className="text-5xl font-medium leading-[0.95] tracking-[-0.055em] md:text-7xl">
                  Tools I use
                  <br />
                  <span className="text-[#66736D]">to build things.</span>
                </h2>

                <p className="mt-8 max-w-xl text-sm leading-7 text-[#8B9690]">
                  A practical stack shaped around building complete digital
                  products — from the first component to the final database
                  query.
                </p>
              </div>

              <div className="space-y-10">
                {skillGroups.map((group) => (
                  <section
                    key={group.number}
                    className="relative min-h-[400px] overflow-hidden border-t border-white/[0.07] pt-8"
                  >
                    {/* Ambient particles */}
                    <div className="pointer-events-none absolute inset-0">
                      {[
                        // Bright
                        {
                          left: "38%",
                          top: "11%",
                          size: "2px",
                          opacity: 0.75,
                          blur: "0.5px",
                        },
                        {
                          left: "72%",
                          top: "21%",
                          size: "2px",
                          opacity: 0.7,
                          blur: "0.5px",
                        },
                        {
                          left: "54%",
                          top: "47%",
                          size: "1px",
                          opacity: 0.8,
                          blur: "0px",
                        },
                        {
                          left: "88%",
                          top: "78%",
                          size: "2px",
                          opacity: 0.7,
                          blur: "0.5px",
                        },

                        // Medium
                        {
                          left: "31%",
                          top: "18%",
                          size: "1px",
                          opacity: 0.55,
                          blur: "0.5px",
                        },
                        {
                          left: "63%",
                          top: "14%",
                          size: "2px",
                          opacity: 0.5,
                          blur: "1px",
                        },
                        {
                          left: "93%",
                          top: "31%",
                          size: "1px",
                          opacity: 0.6,
                          blur: "0.5px",
                        },
                        {
                          left: "43%",
                          top: "36%",
                          size: "2px",
                          opacity: 0.5,
                          blur: "1px",
                        },
                        {
                          left: "76%",
                          top: "48%",
                          size: "1px",
                          opacity: 0.6,
                          blur: "0.5px",
                        },
                        {
                          left: "36%",
                          top: "67%",
                          size: "2px",
                          opacity: 0.5,
                          blur: "1px",
                        },

                        // Dim
                        {
                          left: "48%",
                          top: "17%",
                          size: "1px",
                          opacity: 0.3,
                          blur: "1px",
                        },
                        {
                          left: "84%",
                          top: "16%",
                          size: "1px",
                          opacity: 0.25,
                          blur: "1px",
                        },
                        {
                          left: "28%",
                          top: "43%",
                          size: "1px",
                          opacity: 0.3,
                          blur: "1px",
                        },
                        {
                          left: "68%",
                          top: "61%",
                          size: "1px",
                          opacity: 0.25,
                          blur: "1px",
                        },
                        {
                          left: "45%",
                          top: "79%",
                          size: "1px",
                          opacity: 0.3,
                          blur: "1px",
                        },
                        {
                          left: "82%",
                          top: "91%",
                          size: "1px",
                          opacity: 0.25,
                          blur: "1px",
                        },
                      ].map((dot, index) => (
                        <span
                          key={index}
                          className="absolute rounded-full bg-[#10B981] animate-particle"
                          style={{
                            left: dot.left,
                            top: dot.top,
                            width: dot.size,
                            height: dot.size,
                            opacity: dot.opacity,
                            filter: `blur(${dot.blur})`,
                            animationDelay: `${index * -1.3}s`,
                          }}
                        />
                      ))}
                    </div>

                    {/* Number */}
                    <span className="absolute left-0 top-8 text-[11px] tracking-[0.15em] text-[#10B981]">
                      {group.number}
                    </span>

                    {/* Editorial heading */}
                    <div className="relative z-20 ml-16 max-w-[300px]">
                      <h3 className="text-[2rem] font-medium tracking-[-0.05em] text-[#F5F7F6]">
                        {group.title}
                      </h3>

                      <p className="mt-4 text-[11px] leading-6 text-[#66736D]">
                        {group.description}
                      </p>
                    </div>

                    {/* Floating skills */}
                    <div className="absolute inset-0">
                      {group.skills.map((skill, index) => {
                        const positions = [
                          "left-[43%] top-[19%]",
                          "left-[59%] top-[13%]",
                          "left-[76%] top-[27%]",
                          "left-[48%] top-[38%]",
                          "left-[67%] top-[45%]",
                          "left-[83%] top-[53%]",
                          "left-[39%] top-[61%]",
                          "left-[56%] top-[69%]",
                          "left-[73%] top-[77%]",
                          "left-[87%] top-[69%]",
                        ];

                        return (
                          <div
                            key={skill}
                            className={`
                absolute
                ${positions[index % positions.length]}
                animate-skill-float
              `}
                            style={{
                              animationDelay: `${index * -0.8}s`,
                            }}
                          >
                            <div className="group/skill relative">
                              {/* Hover glow */}
                              <div
                                className="
                    pointer-events-none
                    absolute -inset-6
                    rounded-full
                    bg-[#10B981]/0
                    blur-2xl
                    transition-all duration-700
                    group-hover/skill:bg-[#10B981]/[0.08]
                  "
                              />

                              {/* Skill */}
                              <span
                                className="
                    relative block
                    cursor-default
                    border border-white/[0.075]
                    bg-[#0D1411]/70
                    px-5 py-3
                    text-[11px]
                    tracking-[0.02em]
                    text-[#7F8A84]
                    backdrop-blur-sm
                    transition-all duration-500

                    group-hover/skill:-translate-y-1
                    group-hover/skill:scale-[1.07]
                    group-hover/skill:border-[#10B981]/30
                    group-hover/skill:text-[#F5F7F6]
                  "
                              >
                                {skill}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </section>

          <section
            id="work"
            className="border-t border-white/[0.06] px-6 py-28 lg:px-10 lg:py-40"
          >
            <div className="mx-auto max-w-[1400px]">
              {/* Section Header */}
              <div className="mb-20 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-xs font-medium text-[#10B981]">03</span>

                  <span className="h-px w-8 bg-white/[0.12]" />

                  <span className="text-xs uppercase tracking-[0.25em] text-[#66736D]">
                    Selected Work
                  </span>
                </div>

                <span className="hidden cursor-default text-xs uppercase tracking-[0.18em] text-[#66736D] md:block">
                  {projects.length.toString().padStart(2, "0")} Projects
                </span>
              </div>

              {/* Projects */}
              <div className="space-y-20 lg:space-y-28">
                {projects.map((project, index) => {
                  const reversed = index % 2 !== 0;

                  return (
                    <article
                      key={project.number}
                      className={`group grid items-center gap-10 lg:grid-cols-2 lg:gap-20 ${
                        reversed ? "lg:[&>*:first-child]:order-2" : ""
                      }`}
                    >
                      {/* Project Image */}
                      <div className="relative">
                        {/* Number */}
                        <div className="mb-5 flex items-center justify-between">
                          <span className="font-mono text-[10px] tracking-[0.15em] text-[#10B981]">
                            {project.number}
                          </span>

                          <span className="text-[9px] uppercase tracking-[0.2em] text-[#4F5A55]">
                            {String(index + 1).padStart(2, "0")} /{" "}
                            {String(projects.length).padStart(2, "0")}
                          </span>
                        </div>

                        <a
                          href={`/work/${project.slug}`}
                          className="relative block aspect-[16/10] overflow-hidden border border-white/[0.07] bg-[#0D1411]"
                        >
                          {/* Grid */}
                          <div
                            className="
                    absolute inset-0
                    opacity-[0.025]
                    [background-image:linear-gradient(to_right,#10B981_1px,transparent_1px),linear-gradient(to_bottom,#10B981_1px,transparent_1px)]
                    [background-size:60px_60px]
                  "
                          />

                          {/* Project Preview */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center transition duration-700 group-hover:scale-[1.04]">
                              <p className="text-5xl font-semibold tracking-[-0.06em] text-white/[0.06] transition duration-500 group-hover:text-white/[0.1] md:text-7xl">
                                {project.title === "SWAAD"
                                  ? "SWAAD"
                                  : "PROJECT"}
                              </p>

                              <div className="mt-4 flex items-center justify-center gap-2 text-[9px] uppercase tracking-[0.28em] text-[#10B981]/50">
                                <p className="mt-4 text-[9px] uppercase tracking-[0.28em] text-[#10B981]/50">
                                  Project Preview
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Hover overlay */}
                          <div className="absolute inset-0 bg-[#10B981]/0 transition duration-500 group-hover:bg-[#10B981]/[0.025]" />

                          {/* View */}
                          <div className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center border border-white/[0.1] bg-black/30 text-[#66736D] backdrop-blur-sm transition-all duration-500 group-hover:border-[#10B981]/40 group-hover:bg-[#10B981]/10 group-hover:text-[#10B981]">
                            <ArrowUpRight
                              size={16}
                              strokeWidth={1.5}
                              className="transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            />
                          </div>
                        </a>
                      </div>

                      {/* Project Info */}
                      <div className="lg:max-w-[520px]">
                        <div className="mb-6 flex items-center gap-3">
                          <span className="h-px w-6 bg-[#10B981]/40" />

                          <span className="text-[9px] uppercase tracking-[0.25em] text-[#66736D]">
                            {project.subtitle}
                          </span>
                        </div>

                        <a href={`/work/${project.slug}`} className="block">
                          <h3 className="text-4xl font-medium tracking-[-0.055em] text-[#F5F7F6] transition duration-300 group-hover:text-[#10B981] md:text-6xl">
                            {project.title}
                          </h3>
                        </a>

                        <p className="mt-6 max-w-lg text-sm leading-7 text-[#7F8A84]">
                          {project.description}
                        </p>

                        {/* Technologies */}
                        <div className="mt-8 flex max-w-md flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech.name}
                              className={`
                      border px-3 py-2
                      text-[9px]
                      uppercase
                      tracking-[0.15em]
                      transition duration-300
                      ${
                        tech.primary
                          ? "border-[#10B981]/25 bg-[#10B981]/[0.05] text-[#10B981]"
                          : "border-white/[0.07] text-[#66736D]"
                      }
                    `}
                            >
                              {tech.name}
                            </span>
                          ))}
                        </div>

                        {/* Project link */}
                        <a
                          href={`/work/${project.slug}`}
                          className="group/link mt-10 inline-flex items-center gap-3 border-b border-[#10B981]/20 pb-2 text-[9px] uppercase tracking-[0.25em] text-[#9CA8A2] transition duration-300 hover:border-[#10B981] hover:text-[#10B981]"
                        >
                          Explore project
                          <ArrowUpRight
                            size={13}
                            strokeWidth={1.5}
                            className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                          />
                        </a>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="border-t border-white/[0.06] bg-[#080C0A] px-6 py-28 lg:px-10 lg:py-40">
            <div className="mx-auto max-w-[1400px]">
              <div className="mb-20 flex items-center gap-4">
                <span className="text-xs font-medium text-[#10B981]">04</span>
                <span className="h-px w-8 bg-white/[0.12]" />
                <span className="text-xs uppercase tracking-[0.25em] text-[#66736D]">
                  Engineering
                </span>
              </div>

              <div className="grid gap-20 lg:grid-cols-2 lg:items-center">
                <div>
                  <h2 className="text-5xl font-medium leading-[0.95] tracking-[-0.055em] md:text-7xl">
                    FROM
                    <br />
                    INTERFACE
                    <br />
                    <span className="text-[#66736D]">TO DATABASE.</span>
                  </h2>

                  <p className="mt-10 max-w-lg text-sm leading-7 text-[#8B9690]">
                    I enjoy working across the entire application — from
                    responsive interfaces and API integration to backend
                    architecture, authentication and database design.
                  </p>

                  <div className="mt-10 flex items-center gap-3">
                    <span className="h-px w-12 bg-[#10B981]/50" />
                    <span className="text-[9px] uppercase tracking-[0.22em] text-[#66736D]">
                      One system. Every layer.
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  {techStack.map(([number, title, description, Icon]) => (
                    <div
                      key={number}
                      className="group flex cursor-pointer items-center gap-6 border border-white/[0.08] bg-[#0D1411] p-6 transition duration-300 hover:-translate-x-1 hover:border-[#10B981]/30 hover:bg-[#0F1713]"
                    >
                      <span className="text-xs text-[#10B981]">{number}</span>

                      <Icon
                        size={19}
                        className="text-[#66736D] transition group-hover:text-[#10B981]"
                      />

                      <div className="flex-1">
                        <p className="text-xs uppercase tracking-[0.2em] text-[#66736D]">
                          {title}
                        </p>

                        <p className="mt-1 text-lg">{description}</p>
                      </div>

                      <ArrowRight
                        size={17}
                        className="text-[#66736D] transition group-hover:translate-x-1 group-hover:text-[#10B981]"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section
            id="contact"
            className="relative overflow-hidden border-t border-white/[0.06] px-6 py-28 lg:px-10"
          >
            {/* Ambient glow */}
            <div className="pointer-events-none absolute right-[-120px] top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-[#10B981]/[0.025] blur-[150px]" />

            {/* Ambient particles */}
            <div className="pointer-events-none absolute inset-0">
              {[
                {
                  left: "12%",
                  top: "18%",
                  size: "1px",
                  opacity: 0.3,
                  blur: "1px",
                },
                {
                  left: "31%",
                  top: "11%",
                  size: "2px",
                  opacity: 0.55,
                  blur: "0.5px",
                },
                {
                  left: "67%",
                  top: "17%",
                  size: "1px",
                  opacity: 0.35,
                  blur: "0.5px",
                },
                {
                  left: "89%",
                  top: "24%",
                  size: "2px",
                  opacity: 0.65,
                  blur: "0.5px",
                },
                {
                  left: "76%",
                  top: "39%",
                  size: "1px",
                  opacity: 0.25,
                  blur: "1px",
                },
                {
                  left: "18%",
                  top: "48%",
                  size: "2px",
                  opacity: 0.4,
                  blur: "1px",
                },
                {
                  left: "55%",
                  top: "53%",
                  size: "1px",
                  opacity: 0.7,
                  blur: "0px",
                },
                {
                  left: "94%",
                  top: "61%",
                  size: "1px",
                  opacity: 0.3,
                  blur: "1px",
                },
                {
                  left: "37%",
                  top: "72%",
                  size: "2px",
                  opacity: 0.5,
                  blur: "0.5px",
                },
                {
                  left: "71%",
                  top: "81%",
                  size: "1px",
                  opacity: 0.3,
                  blur: "1px",
                },
                {
                  left: "13%",
                  top: "88%",
                  size: "1px",
                  opacity: 0.45,
                  blur: "0.5px",
                },
                {
                  left: "87%",
                  top: "91%",
                  size: "2px",
                  opacity: 0.6,
                  blur: "0.5px",
                },
              ].map((dot, index) => (
                <span
                  key={index}
                  className="absolute rounded-full bg-[#10B981] animate-particle"
                  style={{
                    left: dot.left,
                    top: dot.top,
                    width: dot.size,
                    height: dot.size,
                    opacity: dot.opacity,
                    filter: `blur(${dot.blur})`,
                    animationDelay: `${index * -1.3}s`,
                  }}
                />
              ))}
            </div>

            <div className="relative mx-auto max-w-[1400px]">
              {/* Section label */}
              <div className="mb-20 flex items-center gap-4">
                <span className="text-[11px] font-medium tracking-[0.12em] text-[#10B981]">
                  05
                </span>

                <span className="h-px w-8 bg-white/[0.12]" />

                <span className="text-[10px] uppercase tracking-[0.3em] text-[#66736D]">
                  Contact
                </span>
              </div>

              {/* Main statement */}
              <div className="relative">
                <p className="mb-8 text-[10px] uppercase tracking-[0.28em] text-[#66736D]">
                  Open to interesting problems
                </p>

                <h2 className="max-w-[1250px] text-[clamp(3.5rem,8vw,8rem)] font-medium leading-[0.84] tracking-[-0.075em] text-[#F5F7F6]">
                  LET'S BUILD
                  <br />
                  <span className="text-[#66736D]">SOMETHING</span>
                  <br />
                  WORTH SHIPPING
                  <span className="text-[#10B981]">.</span>
                </h2>
              </div>

              {/* Contact metadata */}
              <div className="mt-24 grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
                {/* Left — Contact intro */}
                <div className="relative flex flex-col justify-between border-l border-[#10B981]/30 pl-6 lg:min-h-[330px]">
                  {/* Emerald accent */}
                  <div className="absolute -left-px top-0 h-20 w-px bg-[#10B981]" />

                  <div>
                    <span className="text-[9px] uppercase tracking-[0.28em] text-[#10B981]">
                      Start a conversation
                    </span>

                    <p className="mt-6 max-w-[310px] text-sm leading-7 text-[#7F8A84]">
                      Whether you're building something new or improving what
                      already exists, I'm always interested in meaningful
                      technical challenges.
                    </p>
                  </div>

                  {/* CTA */}
                  <a
                    href="mailto:your@email.com"
                    className="group mt-12 inline-flex w-fit items-center gap-4"
                  >
                    <span className="flex h-11 w-11 items-center justify-center border border-[#10B981]/30 bg-[#10B981]/[0.06] transition-all duration-500 group-hover:border-[#10B981] group-hover:bg-[#10B981]/10">
                      <ArrowUpRight
                        size={16}
                        strokeWidth={1.5}
                        className="text-[#10B981] transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </span>

                    <span className="text-[10px] uppercase tracking-[0.22em] text-[#9CA8A2] transition-colors duration-300 group-hover:text-[#10B981]">
                      Let's talk
                    </span>
                  </a>
                </div>

                {/* Right — Contact links */}
                <div className="border-t border-white/[0.08]">
                  {/* Email */}
                  <a
                    href="mailto:your@email.com"
                    className="group relative flex items-center justify-between border-b border-white/[0.08] py-7 transition-all duration-500 hover:px-5"
                  >
                    {/* Emerald hover line */}
                    <span className="absolute left-0 top-0 h-full w-px origin-top scale-y-0 bg-[#10B981] transition-transform duration-500 group-hover:scale-y-100" />

                    <div className="flex items-center gap-7">
                      <span className="font-mono text-[10px] text-[#10B981]/60 transition-colors group-hover:text-[#10B981]">
                        01
                      </span>

                      <div>
                        <p className="text-[9px] uppercase tracking-[0.25em] text-[#66736D] transition-colors group-hover:text-[#10B981]">
                          Email
                        </p>

                        <p className="mt-2 text-sm text-[#A7B0AB] transition-colors group-hover:text-[#F5F7F6]">
                          your@email.com
                        </p>
                      </div>
                    </div>

                    <Mail
                      size={17}
                      strokeWidth={1.4}
                      className="text-[#4F5A55] transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#10B981]"
                    />
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="#"
                    className="group relative flex items-center justify-between border-b border-white/[0.08] py-7 transition-all duration-500 hover:px-5"
                  >
                    <span className="absolute left-0 top-0 h-full w-px origin-top scale-y-0 bg-[#10B981] transition-transform duration-500 group-hover:scale-y-100" />

                    <div className="flex items-center gap-7">
                      <span className="font-mono text-[10px] text-[#10B981]/60 transition-colors group-hover:text-[#10B981]">
                        02
                      </span>

                      <div>
                        <p className="text-[9px] uppercase tracking-[0.25em] text-[#66736D] transition-colors group-hover:text-[#10B981]">
                          LinkedIn
                        </p>

                        <p className="mt-2 text-sm text-[#A7B0AB] transition-colors group-hover:text-[#F5F7F6]">
                          Connect with me
                        </p>
                      </div>
                    </div>

                    <ArrowUpRight
                      size={17}
                      strokeWidth={1.4}
                      className="text-[#4F5A55] transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#10B981]"
                    />
                  </a>

                  {/* GitHub */}
                  <a
                    href="#"
                    className="group relative flex items-center justify-between border-b border-white/[0.08] py-7 transition-all duration-500 hover:px-5"
                  >
                    <span className="absolute left-0 top-0 h-full w-px origin-top scale-y-0 bg-[#10B981] transition-transform duration-500 group-hover:scale-y-100" />

                    <div className="flex items-center gap-7">
                      <span className="font-mono text-[10px] text-[#10B981]/60 transition-colors group-hover:text-[#10B981]">
                        03
                      </span>

                      <div>
                        <p className="text-[9px] uppercase tracking-[0.25em] text-[#66736D] transition-colors group-hover:text-[#10B981]">
                          GitHub
                        </p>

                        <p className="mt-2 text-sm text-[#A7B0AB] transition-colors group-hover:text-[#F5F7F6]">
                          View my work
                        </p>
                      </div>
                    </div>

                    <Code2
                      size={17}
                      strokeWidth={1.4}
                      className="text-[#4F5A55] transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#10B981]"
                    />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="relative overflow-hidden border-t border-white/[0.06] px-6 py-8 lg:px-10">
          <div className="relative mx-auto flex max-w-[1400px] flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
            {/* Identity */}
            <div className="flex items-center gap-4">
              <span className="h-1.5 w-1.5 rounded-full bg-[#10B981] shadow-[0_0_12px_rgba(16,185,129,0.45)]" />

              <span className="text-[9px] uppercase tracking-[0.2em] text-[#7F8A84]">
                © 2026 Anmol Punj
              </span>
            </div>

            {/* Role */}
            <div className="flex items-center gap-3 text-[9px] uppercase tracking-[0.2em]">
              <span className="text-[#4F5A55]">Role</span>

              <span className="text-[#9CA8A2]">Full Stack Developer</span>
            </div>

            {/* Built with */}
            <div className="flex items-center gap-3 text-[9px] uppercase tracking-[0.2em]">
              <span className="text-[#4F5A55]">Built with</span>

              <span className="text-[#10B981]">Next.js</span>

              <span className="text-[#4F5A55]">·</span>

              <span className="text-[#66736D]">TypeScript</span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
