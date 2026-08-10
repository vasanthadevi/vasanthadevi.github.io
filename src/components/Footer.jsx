import { Github, Linkedin, Mail } from "lucide-react";
import { profile, navLinks } from "../data";

export default function Footer() {
  const socials = [
    { icon: Github, href: profile.github, label: "GitHub" },
    { icon: Linkedin, href: profile.linkedin, label: "LinkedIn" },
    { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
  ];

  return (
    <footer className="border-t border-white/5">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row">
        <div className="text-center sm:text-left">
          <div className="font-semibold text-slate-200">{profile.name}</div>
          <div className="mt-1 text-sm text-slate-500">
            Forward Deployed Engineer · Built with React, Tailwind & Framer Motion
          </div>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-slate-500 transition-colors hover:text-teal-soft"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex gap-2">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="grid h-10 w-10 place-items-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-slate-400 transition-all hover:border-teal-soft/40 hover:text-teal-soft"
            >
              <s.icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
