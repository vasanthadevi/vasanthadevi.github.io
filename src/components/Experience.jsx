import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { experience } from "../data";

export default function Experience() {
  return (
    <section id="experience" className="section-pad">
      <SectionHeading
        eyebrow="Experience"
        title="A track record across the stack"
      />

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[7px] top-2 h-full w-px bg-gradient-to-b from-teal-soft/40 via-white/10 to-transparent md:left-[9px]" />

        <div className="flex flex-col gap-10">
          {experience.map((e, i) => (
            <Reveal key={`${e.org}-${e.period}`} delay={i * 0.06}>
              <div className="relative pl-10 md:pl-14">
                {/* Node */}
                <span className="absolute left-0 top-1.5 grid h-4 w-4 place-items-center rounded-full bg-ink-950 ring-2 ring-teal-soft/50 md:h-5 md:w-5">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-soft" />
                </span>

                <div className="glass rounded-2xl p-6 transition-colors hover:border-teal-soft/25">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-lg font-semibold text-slate-100">
                      {e.role}
                      <span className="text-teal-soft"> · {e.org}</span>
                    </h3>
                    <span className="font-mono text-xs text-slate-500">
                      {e.period}
                    </span>
                  </div>
                  <div className="mt-1 flex items-center gap-2 text-xs text-slate-500">
                    <span className="chip !py-0.5 !text-[10px] uppercase tracking-wide">
                      {e.kind}
                    </span>
                    {e.location}
                  </div>
                  <ul className="mt-4 space-y-2">
                    {e.points.map((pt) => (
                      <li
                        key={pt}
                        className="flex gap-3 text-sm leading-relaxed text-slate-400"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-teal-soft/60" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
