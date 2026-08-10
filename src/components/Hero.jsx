import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { profile, stats } from "../data";

// Typewriter that cycles through the role list.
function useTypewriter(words, speed = 90, pause = 1600) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[i % words.length];
    let timeout;
    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setI((v) => v + 1);
    } else {
      timeout = setTimeout(
        () => {
          setText(
            deleting
              ? current.slice(0, text.length - 1)
              : current.slice(0, text.length + 1)
          );
        },
        deleting ? speed / 2 : speed
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, i, words, speed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(profile.roles);

  const socials = [
    { icon: Github, href: profile.github, label: "GitHub" },
    { icon: Linkedin, href: profile.linkedin, label: "LinkedIn" },
    { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
  ];

  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Glow orbs */}
      <div className="pointer-events-none absolute -left-40 top-24 h-96 w-96 rounded-full bg-teal-soft/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-violet-soft/10 blur-[120px]" />

      <div className="mx-auto w-full max-w-6xl px-6 pt-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-1.5 text-xs font-medium text-slate-300"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-soft opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-soft" />
          </span>
          Open to Forward Deployed / AI Engineer roles
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-4xl text-5xl font-extrabold leading-[1.05] tracking-tight text-slate-100 sm:text-6xl md:text-7xl"
        >
          <span className="bg-gradient-to-r from-[#9af5ec] via-[#c7e6ff] to-[#cdc2ff] bg-clip-text text-transparent">
            {profile.name}
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-5 flex h-9 items-center font-mono text-lg text-teal-soft md:text-2xl"
        >
          <span className="text-slate-500">&gt;&nbsp;</span>
          {typed}
          <span className="ml-1 inline-block h-6 w-[2px] animate-pulse bg-teal-soft md:h-7" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400"
        >
          {profile.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-6 flex items-center gap-2 text-sm text-slate-500"
        >
          <MapPin size={15} className="text-teal-soft/70" />
          {profile.location}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-teal-soft to-violet-soft px-6 py-3 text-sm font-semibold text-ink-950 transition-transform hover:scale-[1.03]"
          >
            View Projects
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-teal-soft/40 hover:text-teal-soft"
          >
            Get in touch
          </a>
          <div className="ml-1 flex items-center gap-1">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="grid h-11 w-11 place-items-center rounded-xl border border-white/[0.08] bg-white/[0.03] text-slate-400 transition-all hover:border-teal-soft/40 hover:text-teal-soft"
              >
                <s.icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] sm:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-ink-900/40 px-5 py-5">
              <div className="gradient-text text-2xl font-bold md:text-3xl">
                {s.value}
              </div>
              <div className="mt-1 text-xs leading-snug text-slate-500">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
