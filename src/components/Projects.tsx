import { projects, profile } from "../data/content";
import { SectionHead, SectionShell, Tag } from "./ui";

export default function Projects() {
  return (
    <SectionShell id="projects" className="bg-void-2">
      <SectionHead
        index="05 /"
        title="Tools I Built"
        kicker="I write Python tooling for the parts of an assessment that are repetitive and boring — so the boring parts get done properly every single time."
        right={
          <a
            href={profile.repos}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-line-2 px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-300 transition-colors hover:border-blood-500 hover:text-blood-300"
          >
            all repositories ↗
          </a>
        }
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((p, i) => (
          <article
            key={p.name}
            className="reveal clip-notch group relative flex flex-col border border-line bg-panel/80 p-6 transition-colors duration-300 hover:border-line-2 sm:p-7"
            style={{ transitionDelay: `${i * 90}ms` }}
          >
            <div className="hatch absolute inset-x-0 top-0 h-1 opacity-70" />

            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Tag tone="red">{p.status}</Tag>
                <Tag tone="ice">{p.kind}</Tag>
              </div>
              <span className="font-mono text-[10px] text-slate-700">PRJ-0{i + 1}</span>
            </div>

            <div className="mt-5 flex items-baseline gap-2">
              <span className="font-mono text-[11px] text-blood-600">$</span>
              <h3
                className="glitch font-display text-2xl font-bold uppercase tracking-tight text-white"
                data-text={p.name}
              >
                {p.name}
              </h3>
            </div>

            <p className="mt-3 text-[13px] leading-relaxed text-slate-300">{p.desc}</p>

            <div className="mt-5">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-600">
                capabilities
              </div>
              <ul className="mt-2.5 space-y-1.5">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 font-mono text-[11.5px] text-slate-400">
                    <span className="mt-[3px] text-blood-600">▸</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-5 border border-line bg-void/60 p-3.5">
              <div className="font-mono text-[9.5px] uppercase tracking-[0.2em] text-term/80">
                why I built it
              </div>
              <p className="mt-1.5 font-mono text-[11.5px] leading-relaxed text-slate-400">{p.why}</p>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-1.5">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="border border-line px-2 py-[3px] font-mono text-[9.5px] uppercase tracking-[0.12em] text-slate-500"
                >
                  {s}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-5">
              <span className="font-mono text-[10.5px] text-slate-600">{p.role}</span>
              <a
                href={p.repo}
                target="_blank"
                rel="noreferrer"
                className="bracket inline-flex items-center gap-2 border border-blood-600 bg-blood-900/40 px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.18em] text-blood-300 transition-colors hover:bg-blood-600 hover:text-white"
              >
                view project →
              </a>
            </div>
          </article>
        ))}
      </div>

      {/* build process strip */}
      <div className="reveal mt-6 border border-line bg-panel/60 p-5 sm:p-6">
        <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-blood-500">
          how a tool of mine gets made
        </div>
        <div className="mt-4 grid gap-px border border-line bg-line sm:grid-cols-4">
          {[
            { n: "01", t: "Feel the pain", d: "Notice I am repeating the same manual step for the third time this week." },
            { n: "02", t: "Write it small", d: "Python, argparse, one job. No framework, no config file unless it earns its place." },
            { n: "03", t: "Verify output", d: "Run it against a known-vulnerable lab target and confirm the result by hand." },
            { n: "04", t: "Ship & document", d: "Push to GitHub with a README, usage examples and honest limitations." },
          ].map((s) => (
            <div key={s.n} className="bg-void-2 p-4">
              <span className="font-mono text-[10px] text-blood-600">{s.n}</span>
              <div className="mt-1.5 font-display text-[14px] font-bold uppercase tracking-tight text-white">
                {s.t}
              </div>
              <p className="mt-1.5 text-[11.5px] leading-relaxed text-slate-500">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
