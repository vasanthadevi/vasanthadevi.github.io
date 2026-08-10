import { motion } from "framer-motion";
import {
  BrainCircuit,
  Server,
  Layout,
  BarChart3,
  Cloud,
  FlaskConical,
} from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { skills } from "../data";

const icons = {
  "AI & LLM Engineering": BrainCircuit,
  Backend: Server,
  Frontend: Layout,
  "Data & Analytics": BarChart3,
  "DevOps & Cloud": Cloud,
  "Testing & Practices": FlaskConical,
};

export default function Skills() {
  return (
    <section id="skills" className="section-pad">
      <SectionHeading
        eyebrow="Skills"
        title="A full-stack toolkit for shipping AI"
        subtitle="From the model layer down to the deployment pipeline."
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s, i) => {
          const Icon = icons[s.group] || BrainCircuit;
          const highlight = i === 0;
          return (
            <Reveal key={s.group} delay={i * 0.06}>
              <div
                className={`glass h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-teal-soft/30 ${
                  highlight ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-teal-soft/15 to-violet-soft/15 text-teal-soft ring-1 ring-white/5">
                    <Icon size={18} />
                  </div>
                  <h3 className="font-semibold text-slate-100">{s.group}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {s.items.map((item, j) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: j * 0.03, duration: 0.3 }}
                      className="chip transition-colors hover:border-teal-soft/40 hover:text-teal-soft"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
