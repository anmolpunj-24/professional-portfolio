import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Code2, Mail, Download } from "lucide-react";

interface contactProps {
  scrollTo: string;
}

export default function Contact({ scrollTo }: contactProps) {
  const shouldReduceMotion = useReducedMotion();

  const easing = [0.22, 1, 0.36, 1] as const;

  const revealLeft = {
    hidden: {
      opacity: 0,
      x: shouldReduceMotion ? 0 : -45,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 1.1,
        ease: easing,
      },
    },
  };

  const revealRight = {
    hidden: {
      opacity: 0,
      x: shouldReduceMotion ? 0 : 45,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 1.1,
        ease: easing,
      },
    },
  };

  const revealUp = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 1,
        ease: easing,
      },
    },
  };

  const stagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.22,
        delayChildren: shouldReduceMotion ? 0 : 0.15,
      },
    },
  };

  const headline = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.18,
        delayChildren: shouldReduceMotion ? 0 : 0.2,
      },
    },
  };

  const headlineLine = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 55,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 1.15,
        ease: easing,
      },
    },
  };

  const particles = [
    { left: "12%", top: "18%", size: "1px", opacity: 0.4, blur: "1px" },
    { left: "31%", top: "11%", size: "2px", opacity: 0.7, blur: "0.5px" },
    { left: "67%", top: "17%", size: "1px", opacity: 0.45, blur: "0.5px" },
    { left: "89%", top: "24%", size: "2px", opacity: 0.75, blur: "0.5px" },
    { left: "76%", top: "39%", size: "1px", opacity: 0.35, blur: "1px" },
    { left: "18%", top: "48%", size: "2px", opacity: 0.55, blur: "1px" },
    { left: "55%", top: "53%", size: "1px", opacity: 0.8, blur: "0px" },
    { left: "94%", top: "61%", size: "1px", opacity: 0.4, blur: "1px" },
    { left: "37%", top: "72%", size: "2px", opacity: 0.65, blur: "0.5px" },
    { left: "71%", top: "81%", size: "1px", opacity: 0.4, blur: "1px" },
    { left: "13%", top: "88%", size: "1px", opacity: 0.55, blur: "0.5px" },
    { left: "87%", top: "91%", size: "2px", opacity: 0.7, blur: "0.5px" },
  ];

  const contactLinks = [
    {
      number: "01",
      label: "Email",
      value: "anmolpunj24@gmail.com",
      href: "mailto:anmolpunj24@gmail.com",
      icon: Mail,
      external: false,
    },
    {
      number: "02",
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/anmol-punj",
      icon: ArrowUpRight,
      external: true,
    },
    {
      number: "03",
      label: "GitHub",
      value: "View my work",
      href: "https://github.com/anmolpunj-24",
      icon: Code2,
      external: true,
    },
  ];

  return (
    <section
      id={scrollTo}
      className="relative overflow-hidden border-t border-[#10B981]/30 px-6 py-28 lg:px-10 lg:py-36"
    >
      <motion.div
        className="pointer-events-none absolute right-[-120px] top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-[#10B981]/[0.06] blur-[150px]"
        initial={false}
        animate={
          shouldReduceMotion
            ? { opacity: 1, scale: 1 }
            : { opacity: [0.65, 1, 0.65], scale: [1, 1.08, 1] }
        }
        transition={
          shouldReduceMotion
            ? { duration: 0 }
            : { duration: 9, repeat: Infinity, ease: "easeInOut" }
        }
      />

      <div className="pointer-events-none absolute left-[-180px] top-[10%] h-[400px] w-[400px] rounded-full bg-[#10B981]/[0.035] blur-[140px]" />

      <div className="pointer-events-none absolute inset-0">
        {particles.map((dot, index) => (
          <motion.span
            key={index}
            className="absolute rounded-full bg-[#34D399]"
            style={{
              left: dot.left,
              top: dot.top,
              width: dot.size,
              height: dot.size,
              opacity: dot.opacity,
              filter: `blur(${dot.blur})`,
            }}
            initial={false}
            animate={
              shouldReduceMotion
                ? { opacity: dot.opacity }
                : {
                    opacity: [
                      dot.opacity * 0.45,
                      dot.opacity,
                      dot.opacity * 0.45,
                    ],
                    scale: [1, 1.5, 1],
                  }
            }
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : {
                    duration: 3 + (index % 4),
                    delay: index * 0.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }
            }
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-[1400px]">
        <motion.div
          className="mb-20 flex items-center gap-4"
          initial={shouldReduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={revealLeft}
        >
          <span className="text-sm font-black text-[#34D399]">05</span>
          <span className="h-[2px] w-10 bg-[#10B981]/70" />
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#A3AEA8]">
            Contact
          </span>
        </motion.div>

        <div className="relative">
          <motion.p
            className="mb-8 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.28em] text-[#34D399]"
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.7 }}
            variants={revealUp}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#10B981] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#10B981] shadow-[0_0_12px_rgba(16,185,129,0.7)]" />
            </span>
            Open to interesting problems
          </motion.p>

          <motion.h2
            className="max-w-[1250px] text-[clamp(3.5rem,8vw,8rem)] font-black leading-[0.86] md:leading-[0.84] tracking-[-0.01em] md:tracking-[-0.04em] text-[#F5F7F6]"
            variants={headline}
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
          >
            <span className="block overflow-hidden pb-2">
              <motion.span className="block" variants={headlineLine}>
                LET&apos;S BUILD
              </motion.span>
            </span>

            <span className="block overflow-hidden pb-2">
              <motion.span
                className="block text-[#10B981] drop-shadow-[0_0_35px_rgba(16,185,129,0.12)]"
                variants={headlineLine}
              >
                SOMETHING
              </motion.span>
            </span>

            <span className="block overflow-hidden pb-2">
              <motion.span className="block" variants={headlineLine}>
                WORTH SHIPPING
                <span className="text-[#34D399]">.</span>
              </motion.span>
            </span>
          </motion.h2>
        </div>

        <div className="mt-20 grid gap-12 lg:mt-24 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16">
          <motion.div
            className="relative flex flex-col justify-between border-l-2 border-[#10B981]/40 pl-6 lg:min-h-[340px]"
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={revealLeft}
          >
            <div className="absolute -left-[2px] top-0 h-24 w-[2px] bg-[#34D399] shadow-[0_0_14px_rgba(16,185,129,0.45)]" />

            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#34D399]">
                Start a conversation
              </span>

              <p className="mt-6 max-w-[340px] text-sm font-medium leading-7 text-[#A3AEA8]">
                Whether you&apos;re building something new or improving what
                already exists, I&apos;m always interested in{" "}
                <span className="font-bold text-[#F5F7F6]">
                  meaningful technical challenges.
                </span>
              </p>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-3">
              <a
                href="/resume.pdf"
                download="Anmol-Punj-Full-Stack-Developer-Resume.pdf"
                className="group inline-flex w-fit items-center gap-3 border border-[#10B981] bg-[#10B981] py-4 pl-3 pr-6 text-[10px] font-bold uppercase tracking-[0.18em] text-[#050706] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#34D399] hover:bg-[#059669] hover:shadow-[0_0_25px_rgba(16,185,129,0.2)]"
              >
                <Download
                  size={17}
                  className="text-[#050706] transition-transform duration-300 group-hover:translate-y-0.5"
                />
                Download Resume
              </a>
            </div>
          </motion.div>

          <motion.div
            className="border-t border-[#10B981]/30"
            variants={stagger}
            initial={shouldReduceMotion ? false : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {contactLinks.map((item) => {
              const Icon = item.icon;

              return (
                <motion.a
                  key={item.number}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  variants={revealRight}
                  className="group relative flex items-center justify-between gap-4 border-b border-white/[0.1] py-7 transition-all duration-300 hover:border-[#10B981]/50 hover:bg-[#10B981]/[0.035] hover:px-4 sm:gap-7"
                >
                  <span className="absolute bottom-0 left-0 top-0 w-[2px] origin-top scale-y-0 bg-[#10B981] transition-transform duration-300 group-hover:scale-y-100" />

                  <div className="flex min-w-0 items-center gap-5 sm:gap-7">
                    <span className="font-mono text-xs font-bold text-[#34D399]/70 transition-colors group-hover:text-[#34D399]">
                      {item.number}
                    </span>

                    <div className="min-w-0">
                      <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#84938B] transition-colors group-hover:text-[#34D399]">
                        {item.label}
                      </p>

                      <p className="mt-2 break-all text-sm font-bold text-[#D4DDD8] transition-colors group-hover:text-white sm:text-base">
                        {item.value}
                      </p>
                    </div>
                  </div>

                  <Icon
                    size={20}
                    strokeWidth={1.8}
                    className="shrink-0 text-[#66736D] transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#34D399]"
                  />
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
