import Reveal from "./Reveal";

export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <Reveal className="mb-14 max-w-2xl">
      <div className="section-eyebrow">
        <span className="h-px w-8 bg-teal-soft/40" />
        {eyebrow}
      </div>
      <h2 className="text-3xl font-bold tracking-tight text-slate-100 md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-slate-400">{subtitle}</p>
      )}
    </Reveal>
  );
}
