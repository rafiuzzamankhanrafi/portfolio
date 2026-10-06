import { useEffect, useState } from "react";
import { methodology } from "../data/content";
import { SectionHead, SectionShell, Tag } from "./ui";
import { cn } from "../utils/cn";

export default function Methodology() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const cur = methodology[active];
  const done = active >= methodology.length - 1;

  useEffect(() => {
    if (!playing) return;
    if (done) {
      setPlaying(false);
      return;
    }
    const t = window.setTimeout(() => setActive((a) => Math.min(methodology.length - 1, a + 1)), 2200);
    return () => window.clearTimeout(t);
  }, [playing, active, done]);

  useEffect(() => setPlaying(false), [active]);

  return (
    <SectionShell id="method">
      <SectionHead
        index="03 /"
        title="Methodology"
        kicker="My eight-phase assessment process, phase by phase. This is the actual sequence I follow on a web or API assessment — from written authorisation through to the report."
        right={
          <div className="flex items-center gap-2">
            <Tag tone="term">live walkthrough</Tag>
            <Tag tone="line">8 phases</Tag>
          </div>
        }
      />

      {/* phase rail */}
      <div className="reveal relative">
        <div className="pointer-events-none absolute left-0 right-0 top-[26px] hidden h-px xl:block">
          <svg className="h-px w-full" preserveAspectRatio="none">
            <line
              x1="0"
              y1="0.5"
              x2="100%"
              y2="0.5"
              stroke="rgba(255,34,56,0.5)"
              strokeWidth="1"
              strokeDasharray="5 6"
              className="anim-dash"
            />
          </svg>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 xl:grid-cols-8">
          {methodology.map((s, i) => {
            const on = i === active;
            const past = i < active;
            return (
              <button
                key={s.step}
                onClick={() => setActive(i)}
                className={cn(
                  "group relative border p-3 text-left transition-all duration-300",
                  on
                    ? "border-blood-600 bg-blood-900/40"
                    : past
                      ? "border-blood-700/40 bg-panel/60"
                      : "border-line bg-panel/50 hover:border-line-2 hover:bg-panel-2",
                )}
              >
                <span
                  className={cn(
                    "relative mb-3 block h-2 w-2 rounded-full transition-colors",
                    on ? "bg-blood-500" : past ? "bg-blood-700" : "bg-line-2 group-hover:bg-slate-500",
                  )}
                >
                  {on && <span className="absolute inset-0 animate-ping rounded-full bg-blood-500/70" />}
                </span>
                <div className={cn("font-mono text-[10px]", on ? "text-blood-400" : "text-slate-600")}>
                  {s.step}
                </div>
                <div
                  className={cn(
                    "font-display text-[15px] font-bold uppercase leading-tight",
                    on ? "text-white" : "text-slate-300",
                  )}
                >
                  {s.name}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="reveal mt-6 grid gap-6 lg:grid-cols-[1.35fr_1fr]">
        {/* detail */}
        <div key={cur.step} className="relative border border-line bg-panel/80 p-6 sm:p-8">
          <div className="hatch absolute inset-y-0 left-0 w-1 opacity-60" />
          <div className="flex flex-wrap items-center gap-3">
            <Tag tone="red">PHASE {cur.step} / 08</Tag>
            <Tag tone="amber">{cur.ttp}</Tag>
          </div>

          <h3 className="mt-4 font-display text-3xl font-bold uppercase tracking-tight text-white">
            {cur.name}
          </h3>
          <p className="mt-3 max-w-2xl text-[13.5px] leading-relaxed text-slate-300">{cur.summary}</p>

          <div className="mt-7">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-600">
              what I do
            </div>
            <ul className="mt-3 space-y-2">
              {cur.actions.map((a) => (
                <li key={a} className="flex items-start gap-2.5 font-mono text-[12px] text-slate-300">
                  <span className="mt-[3px] text-blood-600">▸</span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-7 flex flex-wrap gap-2">
            {cur.tools.map((t) => (
              <span
                key={t}
                className="border border-line-2 bg-void px-2.5 py-1.5 font-mono text-[11px] text-slate-300"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* right column */}
        <div className="flex flex-col gap-4">
          <div className="border border-line bg-void-2 p-6">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-blood-500">
              what I am looking for
            </div>
            <p key={cur.step + "l"} className="mt-3 font-mono text-[12.5px] leading-relaxed text-slate-200">
              {cur.looksFor}
            </p>
          </div>

          <div className="border border-line bg-panel/70 p-6">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-600">
              progress
            </div>
            <div className="mt-4 space-y-3">
              {methodology.map((s, i) => (
                <button key={s.step} onClick={() => setActive(i)} className="group flex w-full items-center gap-3">
                  <span
                    className={cn(
                      "w-6 shrink-0 font-mono text-[10px]",
                      i === active ? "text-blood-400" : i < active ? "text-blood-700" : "text-slate-700",
                    )}
                  >
                    {s.step}
                  </span>
                  <span className="relative h-px flex-1 bg-line">
                    <span
                      className={cn(
                        "absolute inset-y-0 left-0 h-px transition-all duration-500",
                        i <= active ? "bg-blood-500" : "bg-transparent",
                      )}
                      style={{ width: `${((i + 1) / methodology.length) * 100}%` }}
                    />
                    <span
                      className={cn(
                        "absolute -top-[3px] h-[7px] w-[7px] -translate-x-1/2 rounded-full transition-colors",
                        i === active ? "bg-blood-500" : i < active ? "bg-blood-700" : "bg-line-2",
                      )}
                      style={{ left: `${((i + 1) / methodology.length) * 100}%` }}
                    />
                  </span>
                  <span
                    className={cn(
                      "w-24 shrink-0 text-right font-mono text-[10px] uppercase tracking-[0.12em]",
                      i === active ? "text-white" : "text-slate-600 group-hover:text-slate-400",
                    )}
                  >
                    {s.name}
                  </span>
                </button>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2 border-t border-line pt-5">
              <button
                onClick={() => {
                  if (done) setActive(0);
                  setPlaying((p) => !p);
                }}
                className="border border-blood-600 bg-blood-900/40 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-blood-300 transition-colors hover:bg-blood-600 hover:text-white"
              >
                {done ? "↺ replay" : playing ? "❚❚ pause" : "▶ walk through"}
              </button>
              <button
                onClick={() => setActive((a) => Math.min(methodology.length - 1, a + 1))}
                className="border border-line-2 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-300 transition-colors hover:border-slate-400 hover:text-white"
              >
                next ›
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="reveal mt-6 border border-amber/30 bg-amber/[0.04] p-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
          <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.22em] text-amber">
            ⚠ phase 01 is mandatory
          </span>
          <p className="font-mono text-[11.5px] leading-relaxed text-slate-400">
            Phases 02–08 only happen after written authorisation is confirmed. Testing a system without
            permission is a crime regardless of intent, skill or how obvious the vulnerability looks.
            This is the part of the discipline I take most seriously.
          </p>
        </div>
      </div>
    </SectionShell>
  );
}
