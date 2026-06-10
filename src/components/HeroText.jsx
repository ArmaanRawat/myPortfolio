import { motion as Motion } from "motion/react";

function HeroText() {
  const stats = [
    { value: "12+", label: "Projects built" },
    { value: "4", label: "Core stacks" },
    { value: "Always", label: "Curious" },
  ];
  const stack = ["React", "C++", "Azure", "python"];
  const variants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="grid items-start gap-10 py-8 lg:min-h-[calc(100vh-7rem)] lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12 lg:py-0">
      <div className="max-w-3xl text-left">
        <Motion.div
          className="glass-chip mb-6 inline-flex items-center gap-3 rounded-full px-4 py-2 text-sm font-medium text-neutral-700"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2, duration: 0.65 }}>
          <span className="h-2 w-2 rounded-full bg-[#20c997]" />
          Available for freelance and product work
        </Motion.div>

        <Motion.p
          className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-neutral-500"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.32, duration: 0.65 }}>
          Armaan Rawat / Full-stack developer
        </Motion.p>

        <Motion.h1
          className="font-display max-w-4xl text-5xl font-semibold leading-[0.96] text-neutral-950 sm:text-6xl lg:text-7xl"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.44, duration: 0.75 }}>
          Designing calm digital products with sharp engineering.
        </Motion.h1>

        <Motion.p
          className="mt-6 max-w-2xl text-base leading-8 text-neutral-600 sm:text-lg"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.58, duration: 0.7 }}>
          I turn ideas into polished web apps with clean interfaces, reliable
          backends, and the kind of details that make products feel considered.
        </Motion.p>

        <Motion.div
          className="mt-8 flex flex-col gap-3 sm:flex-row"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.72, duration: 0.7 }}>
          <a
            href="#about"
            className="inline-flex h-12 items-center justify-center rounded-full bg-neutral-950 px-6 text-sm font-semibold text-white shadow-[0_16px_30px_rgba(17,17,17,0.18)] transition hover:-translate-y-0.5 hover:bg-neutral-800">
            Explore work
          </a>
          <a
            href="#contact"
            className="glass-chip inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold text-neutral-950 transition hover:-translate-y-0.5 hover:bg-white/80">
            Start a project
          </a>
        </Motion.div>

        <Motion.div
          className="mt-9 grid max-w-xl grid-cols-3 border-y border-black/10 py-5 lg:mt-12"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.86, duration: 0.7 }}>
          {stats.map((item) => (
            <div key={item.label} className="pr-4">
              <p className="text-2xl font-semibold text-neutral-950">
                {item.value}
              </p>
              <p className="mt-1 text-sm text-neutral-500">{item.label}</p>
            </div>
          ))}
        </Motion.div>
      </div>

      <Motion.div
        className="relative mx-auto w-full max-w-xl lg:mr-0"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.62, duration: 0.8 }}>
        <div className="glass-panel relative overflow-hidden rounded-[2rem] p-3">
          <div className="flex items-center justify-between px-3 py-2">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff6b6b]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#ffd43b]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#51cf66]" />
            </div>
            <span className="text-xs font-medium text-neutral-400">
              workspace.preview
            </span>
          </div>
          <img
            src="/assets/coding-pov.png"
            alt="Developer workspace preview"
            className="aspect-[1328/813] w-full rounded-[1.35rem] bg-white/60 object-contain"
          />
        </div>

        <div className="glass-panel absolute -left-3 bottom-8 hidden w-56 rounded-2xl p-4 sm:block">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-400">
            Stack
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/70 bg-white/55 px-3 py-1 text-sm font-medium text-neutral-700 backdrop-blur-md">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="glass-panel-dark absolute -right-2 top-12 hidden rounded-2xl px-5 py-4 text-white sm:block">
          <p className="text-sm text-white/60">Current focus</p>
          <p className="mt-1 text-lg font-semibold">Modern web systems</p>
        </div>
      </Motion.div>
    </div>
  );
}

export default HeroText;
