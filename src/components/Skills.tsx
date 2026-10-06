import { skills } from "../data/content";
import { Bar, SectionHead, SectionShell, Tag } from "./ui";

export default function Skills() {
  return (
    <SectionShell id="skills" className="bg-void-2">
      <SectionHead
        index="02 /"
        title="Skillset"
        kicker="Four working domains. The bars are an honest self-assessment of hands-on competence — not marketing numbers. Ask me to prove any of them."
        right={
          <div className="border border-line bg-panel px-5 py-4 text-right">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
              primary platform
            </div>
            <div className="font-display text-2xl font-bold leading-none text-blood-400 text-glow-red">
              BURP SUITE
            </div>
            <div className="mt-1 font-mono text-[10px] text-slate-600">manual · repeater-first</div>
          </div>
        }
      />

      <div className="grid gap-px border border-line bg-line md:grid-cols-2">
        {skills.map((g, gi) => (
          <div
            key={g.id}
            className="reveal bg-panel/70 p-6"
            style={{ transitionDelay: `${gi * 70}ms` }}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] text-blood-600">{g.id}</span>
                  <h3 className="font-display text-lg font-bold uppercase tracking-tight text-white">
                    {g.title}
                  </h3>
                </div>
                <p className="mt-2 max-w-md text-[12.5px] leading-relaxed text-slate-400">{g.brief}</p>
              </div>
              <Tag tone={gi % 2 === 0 ? "red" : "ice"}>{g.tag}</Tag>
            </div>

            <div className="mt-6 space-y-4">
              {g.items.map((it, i) => (
                <div key={it.n}>
                  <div className="mb-1.5 flex items-baseline justify-between gap-3">
                    <span className="font-mono text-[12px] text-slate-200">{it.n}</span>
                    <span className="font-mono text-[10px] text-slate-600">{it.lvl}%</span>
                  </div>
                  <Bar value={it.lvl} delay={i * 80 + gi * 70} />
                  <div className="mt-1 font-mono text-[10px] text-slate-600">↳ {it.note}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="reveal mt-6 grid gap-px border border-line bg-line sm:grid-cols-3">
        {[
          { t: "Scanner posture", d: "Burp scanner and sqlmap are used to speed things up — never as evidence. Anything I report, I proved manually first." },
          { t: "Learning method", d: "Build the tool, break the lab, write it up. I learn fastest by automating something I was doing badly by hand." },
          { t: "What I am not yet", d: "Active Directory attack paths, C2 development and cloud identity are on the roadmap, not in the skillset. I will say so." },
        ].map((x) => (
          <div key={x.t} className="bg-void-2 p-5">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-blood-500">{x.t}</div>
            <p className="mt-2 text-[12px] leading-relaxed text-slate-400">{x.d}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
