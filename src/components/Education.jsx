import { GraduationCap, Award } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { education, certifications } from "../data";

export default function Education() {
  return (
    <section id="education" className="section-pad">
      <SectionHeading
        eyebrow="Education & Certifications"
        title="Foundations and continuous learning"
      />

      <div className="grid gap-8 md:grid-cols-2">
        <Reveal>
          <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-slate-200">
            <GraduationCap size={18} className="text-teal-soft" /> Education
          </div>
          <div className="flex flex-col gap-4">
            {education.map((e) => (
              <div
                key={e.title}
                className="glass rounded-2xl p-5 transition-colors hover:border-teal-soft/25"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-semibold text-slate-100">{e.title}</h3>
                  <span className="font-mono text-xs text-slate-500">
                    {e.year}
                  </span>
                </div>
                <p className="mt-1 text-sm text-slate-400">{e.org}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-slate-200">
            <Award size={18} className="text-violet-soft" /> Certifications
          </div>
          <div className="flex flex-col gap-4">
            {certifications.map((c) => (
              <div
                key={c.title}
                className="glass rounded-2xl p-5 transition-colors hover:border-violet-soft/25"
              >
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-semibold text-slate-100">{c.title}</h3>
                  <span className="font-mono text-xs text-slate-500">
                    {c.year}
                  </span>
                </div>
                <p className="mt-1 text-sm text-slate-400">{c.org}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
