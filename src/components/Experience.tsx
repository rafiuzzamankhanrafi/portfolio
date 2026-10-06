import { experience, roadmap } from "../data/content";
import { SectionHead, SectionShell, Tag } from "./ui";
import { cn } from "../utils/cn";

export default function Experience() {
  return (
    <SectionShell id="experience" className="bg-void-2">
      <SectionHead
        index="07 /"
        title="Experience"
        kicker="My work history so far. It is short and that is the truth of being early in this field — but every entry here is real, at a named company, and verifiable."
        right={
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
            <div className="text-blood-500">since Aug 2025</div>
            <div>Byte Capsule</div>
          </div>
        }
      />

      <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
        {/* timeline */}
        <div className="reveal">
          <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.24em] text-slate-600">
            work history
          </div>
          <div className="relative border-l border-line pl-6">
            {experience.map((t, i) => (
              <div key={t.span} className="relative pb-9 last:pb-0">
                <span
                  className={cn(
                    "absolute -left-[30px] top-1 flex h-[17px] w-[17px] items-center justify-center border bg-void",
                    t.current ? "border-blood-500" : "border-blood-700/70",
                  )}
                >
                  <span
                    className={cn("h-[5px] w-[5px]", t.current ? "bg-blood-500 anim-blink" : "bg-blood-700")}
                  />
                </span>
                {i !== experience.length - 1 && (
                  <span className="absolute -left-[23px] top-6 h-full w-px bg-line" />
                )}
                <div className="flex flex-wrap items-center gap-3">
                  <Tag tone={t.current ? "red" : "line"}>{t.span}</Tag>
                  {t.current && <Tag tone="term">current</Tag>}
                </div>
                <h3 className="mt-3 font-display text-xl font-bold uppercase leading-tight tracking-tight text-white">
                  {t.role}
                </h3>
                <div className="mt-0.5 font-mono text-[12px] text-blood-400/80">{t.org}</div>
                <p className="mt-3 text-[13px] leading-relaxed text-slate-400">{t.body}</p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {t.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-line px-2 py-[3px] font-mono text-[9.5px] uppercase tracking-[0.12em] text-slate-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 border border-line bg-panel/60 p-5">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-blood-500">
              what the internship actually gave me
            </div>
            <ul className="mt-3 space-y-2">
              {[
                "Exposure to real offensive engagements under senior supervision",
                "A structured view of adversary simulation versus ad-hoc testing",
                "Discipline in scoping, documentation and evidence handling",
                "Confirmation that I wanted this to be my career, not a hobby",
              ].map((x) => (
                <li key={x} className="flex items-start gap-2 font-mono text-[11.5px] text-slate-400">
                  <span className="mt-[3px] text-blood-600">▸</span>
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* roadmap */}
        <div className="reveal">
          <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.24em] text-slate-600">
            learning roadmap
          </div>
          <div className="space-y-3">
            {roadmap.map((r) => (
              <div
                key={r.phase}
                className={cn(
                  "border p-5",
                  r.state === "active"
                    ? "border-blood-600/60 bg-blood-900/20"
                    : r.state === "ethics"
                      ? "border-term/30 bg-term/[0.04]"
                      : "border-line bg-panel/60",
                )}
              >
                <div className="flex items-center justify-between gap-3">
                  <span
                    className={cn(
                      "font-mono text-[10px] uppercase tracking-[0.24em]",
                      r.state === "active"
                        ? "text-blood-400"
                        : r.state === "ethics"
                          ? "text-term"
                          : "text-slate-600",
                    )}
                  >
                    {r.phase}
                  </span>
                  {r.state === "active" && (
                    <span className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-blood-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-blood-500 anim-blink" /> in progress
                    </span>
                  )}
                  {r.state === "ethics" && (
                    <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-term/70">
                      permanent
                    </span>
                  )}
                </div>
                <h4 className="mt-2.5 font-display text-[15px] font-bold uppercase tracking-tight text-white">
                  {r.title}
                </h4>
                <ul className="mt-3 space-y-1.5">
                  {r.items.map((it) => (
                    <li key={it} className="flex items-start gap-2 font-mono text-[11.5px] text-slate-400">
                      <span
                        className={cn(
                          "mt-[3px]",
                          r.state === "ethics" ? "text-term/70" : "text-blood-600",
                        )}
                      >
                        ▸
                      </span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
