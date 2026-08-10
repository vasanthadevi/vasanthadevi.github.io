import { Sparkles, ShieldCheck, Rocket } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { profile } from "../data";

const pillars = [
  {
    icon: Sparkles,
    title: "End-to-end AI systems",
    body: "LLM agents, RAG, and tool-using assistants — designed, built, and shipped to production.",
  },
  {
    icon: ShieldCheck,
    title: "Safety & evaluation",
    body: "Human-in-the-loop approvals, read-only guarantees, and eval suites that prove correctness.",
  },
  {
    icon: Rocket,
    title: "Deployment rigor",
    body: "Containerized, observable, and deployment-ready on Docker + Google Cloud.",
  },
];

export default function About() {
  return (
    <section id="about" className="section-pad">
      <SectionHeading
        eyebrow="About"
        title="From first customer conversation to a deployed, observable solution"
      />
      <div className="grid gap-12 md:grid-cols-5">
        <Reveal className="md:col-span-3">
          <p className="text-lg leading-relaxed text-slate-300">
            {profile.longSummary}
          </p>
          <p className="mt-6 leading-relaxed text-slate-400">
            I own problems end to end — comfortable in the room with customers,
            in the codebase, and on the deployment pipeline. My recent work pairs
            modern LLM engineering (Claude API, MCP, pgvector RAG, Langfuse
            observability) with the full-stack foundation of 3+ years building
            React/Node web apps.
          </p>
        </Reveal>

        <div className="flex flex-col gap-4 md:col-span-2">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1}>
              <div className="glass group flex gap-4 rounded-2xl p-5 transition-colors hover:border-teal-soft/30">
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-teal-soft/15 to-violet-soft/15 text-teal-soft ring-1 ring-white/5">
                  <p.icon size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-100">{p.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-400">
                    {p.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
