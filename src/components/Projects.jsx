import { motion } from "framer-motion";
import { Github, ArrowUpRight, Play } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { projects } from "../data";

const accents = {
  teal: {
    ring: "hover:border-teal-soft/40",
    glow: "from-teal-soft/10",
    text: "text-teal-soft",
    dot: "bg-teal-soft",
  },
  violet: {
    ring: "hover:border-violet-soft/40",
    glow: "from-violet-soft/10",
    text: "text-violet-soft",
    dot: "bg-violet-soft",
  },
};

export default function Projects() {
  return (
    <section id="projects" className="section-pad">
      <SectionHeading
        eyebrow="Projects"
        title="Production-grade AI applications"
        subtitle="Four public apps — each containerized, tested with evaluation suites, and deployment-ready."
      />

      <div className="flex flex-col gap-6">
        {projects.map((p, i) => {
          const a = accents[p.accent] || accents.teal;
          return (
            <Reveal key={p.name} delay={i * 0.08}>
              <motion.article
                whileHover={{ y: -4 }}
                className={`glass group relative overflow-hidden rounded-3xl p-7 transition-colors md:p-9 ${a.ring}`}
              >
                <div
                  className={`pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-b ${a.glow} to-transparent opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100`}
                />

                <div className="relative flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                  <div className="lg:max-w-2xl">
                    <div className="mb-2 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-slate-500">
                      <span className={`h-1.5 w-1.5 rounded-full ${a.dot}`} />
                      {String(i + 1).padStart(2, "0")} · {p.tagline}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-100 md:text-3xl">
                      {p.name}
                    </h3>

                    <ul className="mt-5 space-y-3">
                      {p.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex gap-3 text-sm leading-relaxed text-slate-400"
                        >
                          <span
                            className={`mt-2 h-1 w-1 shrink-0 rounded-full ${a.dot}`}
                          />
                          {h}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {p.stack.map((t) => (
                        <span key={t} className="chip font-mono text-[11px]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Side panel: metrics + link */}
                  <div className="flex shrink-0 flex-col gap-4 lg:w-52">
                    <div className="grid grid-cols-2 gap-3 lg:grid-cols-1">
                      {p.metrics.map((m) => (
                        <div
                          key={m.k}
                          className="rounded-xl border border-white/[0.08] bg-ink-950/40 px-4 py-3"
                        >
                          <div className={`text-xl font-bold ${a.text}`}>
                            {m.v}
                          </div>
                          <div className="text-[11px] text-slate-500">{m.k}</div>
                        </div>
                      ))}
                    </div>
                    {p.demo && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-teal-soft to-violet-soft px-4 py-2.5 text-sm font-semibold text-ink-950 transition-transform hover:scale-[1.03]"
                      >
                        <Play size={15} /> Live Demo
                        <ArrowUpRight size={14} className="opacity-70" />
                      </a>
                    )}
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm font-semibold text-slate-200 transition-colors hover:border-teal-soft/40 hover:text-teal-soft"
                    >
                      <Github size={16} /> Code
                      <ArrowUpRight size={14} className="opacity-60" />
                    </a>
                  </div>
                </div>
              </motion.article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
