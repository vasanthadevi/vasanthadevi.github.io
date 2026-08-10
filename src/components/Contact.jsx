import { Mail, Github, Linkedin, Phone, MapPin, FileText, ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import { profile } from "../data";

export default function Contact() {
  const links = [
    { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: Linkedin, label: "LinkedIn", value: "vasantha-devi-kandasamy", href: profile.linkedin },
    { icon: Github, label: "GitHub", value: "vasanthadevi", href: profile.github },
    { icon: Phone, label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/[^\d+]/g, "")}` },
  ];

  return (
    <section id="contact" className="section-pad">
      <Reveal>
        <div className="glass relative overflow-hidden rounded-3xl p-8 md:p-14">
          <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-teal-soft/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-violet-soft/10 blur-3xl" />

          <div className="relative">
            <div className="section-eyebrow">
              <span className="h-px w-8 bg-teal-soft/40" />
              Contact
            </div>
            <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-slate-100 md:text-4xl">
              Let's build something that ships.
            </h2>
            <p className="mt-4 flex items-center gap-2 text-slate-400">
              <MapPin size={16} className="text-teal-soft/70" />
              {profile.location} · Open to remote & on-site
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-white/[0.08] bg-ink-950/40 p-4 transition-all hover:-translate-y-0.5 hover:border-teal-soft/40"
                >
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-teal-soft/15 to-violet-soft/15 text-teal-soft ring-1 ring-white/5">
                    <l.icon size={18} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs text-slate-500">{l.label}</div>
                    <div className="truncate text-sm font-medium text-slate-200">
                      {l.value}
                    </div>
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="text-slate-600 transition-colors group-hover:text-teal-soft"
                  />
                </a>
              ))}
            </div>

            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-teal-soft to-violet-soft px-6 py-3 text-sm font-semibold text-ink-950 transition-transform hover:scale-[1.03]"
            >
              <FileText size={16} /> Download Resume
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
