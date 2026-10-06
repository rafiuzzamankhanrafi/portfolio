import { useMemo, useState } from "react";
import { writeupCats, writeups } from "../data/content";
import { SectionHead, SectionShell, Tag } from "./ui";
import { cn } from "../utils/cn";

const STATUS: Record<string, string> = {
  PUBLISHED: "border-term/50 bg-term/10 text-term",
  DRAFTING: "border-amber/50 bg-amber/10 text-amber",
  OUTLINED: "border-ice/40 bg-ice/10 text-ice",
};

const CAT: Record<string, "red" | "ice" | "amber" | "term" | "line"> = {
  Web: "red",
  API: "amber",
  Recon: "ice",
  Tooling: "term",
  Method: "line",
};

export default function Writeups() {
  const [cat, setCat] = useState<(typeof writeupCats)[number]>("All");
  const [open, setOpen] = useState<string | null>(writeups[1].code);

  const list = useMemo(
    () => (cat === "All" ? writeups : writeups.filter((w) => w.cat === cat)),
    [cat],
  );

  const published = writeups.filter((w) => w.status === "PUBLISHED").length;

  return (
    <SectionShell id="writeups">
      <SectionHead
        index="10 /"
        title="Writeups & Lab Notes"
        kicker="Documented technique notes from my own lab work — what I tested, how I proved it, and what I got wrong first. This is the actual evidence of how I think."
        right={
          <div className="grid grid-cols-3 gap-px border border-line bg-line">
            {[
              { k: writeups.length, l: "notes" },
              { k: published, l: "published" },
              { k: "5", l: "topics" },
            ].map((x) => (
              <div key={x.l} className="bg-panel px-3 py-2 text-center">
                <div className="font-display text-lg font-bold leading-none text-blood-400">{x.k}</div>
                <div className="mt-1 text-[9px] uppercase tracking-[0.16em] text-slate-600">{x.l}</div>
              </div>
            ))}
          </div>
        }
      />

      {/* filters */}
      <div className="reveal mb-5 flex flex-wrap items-center gap-1.5">
        <span className="mr-2 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-600">
          filter
        </span>
        {writeupCats.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={cn(
              "border px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] transition-colors",
              cat === c
                ? "border-blood-600 bg-blood-900/40 text-blood-300"
                : "border-line text-slate-500 hover:border-line-2 hover:text-slate-300",
            )}
          >
            {c}
            <span className="ml-1.5 text-[9px] text-slate-700">
              {c === "All" ? writeups.length : writeups.filter((w) => w.cat === c).length}
            </span>
          </button>
        ))}
      </div>

      {/* list */}
      <div className="reveal divide-y divide-line border border-line bg-panel/60">
        {list.map((w) => {
          const on = open === w.code;
          return (
            <div key={w.code} className={cn("transition-colors", on ? "bg-panel-2/70" : "hover:bg-panel-2/40")}>
              <button
                onClick={() => setOpen(on ? null : w.code)}
                className="flex w-full items-start gap-4 p-5 text-left"
                aria-expanded={on}
              >
                <span className="mt-0.5 shrink-0 border border-line-2 bg-void px-2 py-1 font-mono text-[10px] tracking-[0.08em] text-blood-400">
                  {w.code}
                </span>

                <span className="min-w-0 flex-1">
                  <span className="flex flex-wrap items-center gap-2">
                    <Tag tone={CAT[w.cat]}>{w.cat}</Tag>
                    <span
                      className={cn(
                        "border px-1.5 py-[2px] font-mono text-[9px] tracking-[0.14em]",
                        STATUS[w.status],
                      )}
                    >
                      {w.status}
                    </span>
                    <span className="font-mono text-[9.5px] uppercase tracking-[0.14em] text-slate-600">
                      {w.read}
                    </span>
                  </span>
                  <span className="mt-2 block font-display text-[17px] font-bold leading-snug tracking-tight text-white">
                    {w.title}
                  </span>
                  <span className="mt-1.5 block text-[12.5px] leading-relaxed text-slate-400">
                    {w.summary}
                  </span>
                </span>

                <span
                  className={cn(
                    "mt-1 shrink-0 font-mono text-[13px] transition-transform duration-300",
                    on ? "rotate-45 text-blood-400" : "text-slate-600",
                  )}
                >
                  +
                </span>
              </button>

              <div
                className={cn(
                  "overflow-hidden transition-all duration-400",
                  on ? "max-h-72 opacity-100" : "max-h-0 opacity-0",
                )}
              >
                <div className="border-t border-line bg-void/40 px-5 py-5 sm:pl-[76px]">
                  <div className="font-mono text-[9.5px] uppercase tracking-[0.2em] text-blood-600">
                    key takeaways
                  </div>
                  <ul className="mt-2.5 space-y-2">
                    {w.takeaways.map((t) => (
                      <li key={t} className="flex items-start gap-2 font-mono text-[11.5px] leading-relaxed text-slate-300">
                        <span className="mt-[3px] text-blood-600">▸</span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap items-center gap-3 border-t border-line pt-3.5">
                    <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-slate-600">
                      demonstrated on my own lab targets only
                    </span>
                    <a
                      href="https://youtube.com/@gh05tx-r?si=7QdjncYPIAOonr-d"
                      target="_blank"
                      rel="noreferrer"
                      className="font-mono text-[10px] uppercase tracking-[0.16em] text-blood-500 transition-colors hover:text-blood-300"
                    >
                      walkthroughs on YouTube ↗
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {list.length === 0 && (
        <div className="reveal border border-dashed border-line p-8 text-center font-mono text-[12px] text-slate-600">
          no notes in this category yet
        </div>
      )}

      <div className="reveal mt-6 grid gap-px border border-line bg-line sm:grid-cols-3">
        {[
          { t: "No client data, ever", d: "Nothing here comes from a client engagement. All demonstrations are against apps I host or deliberately vulnerable lab targets." },
          { t: "Status labels are honest", d: "PUBLISHED means finished and shared. DRAFTING means written but not released. I do not publish anything half-verified." },
          { t: "Written to teach", d: "If a note does not help someone else avoid the mistake I made, it does not get published." },
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
