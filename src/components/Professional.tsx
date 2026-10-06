import { professional, workModes } from "../data/content";
import { SectionHead, SectionShell, Tag } from "./ui";

export default function Professional() {
  return (
    <SectionShell id="value">
      <SectionHead
        index="12 /"
        title="What You Are Hiring"
        kicker="Technical skills get you the interview. These are the things that decide whether the work actually gets done well — and every one of them is something I can evidence."
        right={
          <div className="border border-line bg-panel px-5 py-4 text-right">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
              junior level
            </div>
            <div className="font-display text-2xl font-bold leading-none text-blood-400">
              HIGH CEILING
            </div>
            <div className="mt-1 font-mono text-[10px] text-slate-600">trainable · proven learner</div>
          </div>
        }
      />

      <div className="grid gap-px border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
        {professional.map((p, i) => (
          <div
            key={p.t}
            className="reveal group relative flex flex-col bg-panel/70 p-6 transition-colors duration-300 hover:bg-panel-2"
            style={{ transitionDelay: `${i * 50}ms` }}
          >
            <div className="flex items-start justify-between">
              <span className="flex h-11 w-11 items-center justify-center border border-line-2 bg-void text-lg text-blood-400 transition-all duration-300 group-hover:border-blood-600 group-hover:bg-blood-900/40 group-hover:text-blood-300">
                {p.icon}
              </span>
              <span className="font-mono text-[10px] text-slate-700">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>

            <h3 className="mt-5 font-display text-[16px] font-bold uppercase tracking-tight text-white">
              {p.t}
            </h3>
            <p className="mt-2.5 flex-1 text-[12.5px] leading-relaxed text-slate-400">{p.d}</p>

            <div className="mt-5 border-t border-line pt-3.5">
              <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-slate-600">
                evidence
              </div>
              <div className="mt-1 font-mono text-[11px] leading-relaxed text-term/80">{p.proof}</div>
            </div>

            <span className="pointer-events-none absolute inset-x-0 top-0 h-px scale-x-0 bg-blood-500 transition-transform duration-500 group-hover:scale-x-100" />
          </div>
        ))}
      </div>

      {/* work modes */}
      <div className="reveal mt-6 grid gap-px border border-line bg-line lg:grid-cols-[1fr_1.4fr]">
        <div className="bg-void-2 p-6">
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-blood-500">
            working arrangements
          </div>
          <p className="mt-2.5 font-mono text-[11.5px] leading-relaxed text-slate-400">
            Flexible on engagement type. If your team needs someone who will show up, document
            properly and ask good questions, that is the part I can guarantee from day one.
          </p>
          <a
            href="#contact"
            className="bracket mt-5 inline-flex items-center gap-2 border border-blood-600 bg-blood-900/40 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.18em] text-blood-300 transition-colors hover:bg-blood-600 hover:text-white"
          >
            discuss a role →
          </a>
        </div>

        <div className="grid grid-cols-2 gap-px bg-line sm:grid-cols-3">
          {workModes.map((m) => (
            <div key={m.k} className="flex flex-col justify-center gap-1.5 bg-void-2 px-4 py-5">
              <span className="font-mono text-[10px] uppercase leading-tight tracking-[0.14em] text-slate-600">
                {m.k}
              </span>
              <Tag tone={m.tone}>{m.v}</Tag>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
