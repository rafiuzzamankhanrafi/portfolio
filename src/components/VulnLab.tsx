import { useState } from "react";
import { vulnClasses } from "../data/content";
import { SectionHead, SectionShell } from "./ui";
import { cn } from "../utils/cn";

const SEV: Record<string, string> = {
  CRITICAL: "border-blood-600 bg-blood-900/50 text-blood-300",
  HIGH: "border-amber/50 bg-amber/10 text-amber",
  MEDIUM: "border-ice/40 bg-ice/10 text-ice",
};

export default function VulnLab() {
  const [open, setOpen] = useState<string | null>(vulnClasses[0].code);

  return (
    <SectionShell id="vulns">
      <SectionHead
        index="04 /"
        title="Vulnerability Classes"
        kicker="The classes I test for and understand well enough to explain, prove and write up. Expand any card to see how I approach testing it."
        right={
          <div className="border border-line bg-panel px-5 py-4 text-right">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
              classes covered
            </div>
            <div className="font-display text-4xl font-bold leading-none text-blood-400 text-glow-red">
              {vulnClasses.length}
            </div>
            <div className="mt-1 font-mono text-[10px] text-slate-600">OWASP + API Top 10</div>
          </div>
        }
      />

      <div className="reveal grid gap-px border border-line bg-line md:grid-cols-2">
        {vulnClasses.map((v, i) => {
          const on = open === v.code;
          return (
            <div
              key={v.code}
              className={cn(
                "group bg-panel/70 transition-colors duration-300",
                on ? "bg-panel-2" : "hover:bg-panel-2/60",
              )}
              style={{ transitionDelay: `${i * 20}ms` }}
            >
              <button
                onClick={() => setOpen(on ? null : v.code)}
                className="w-full p-5 text-left"
                aria-expanded={on}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <span className="border border-line-2 bg-void px-2 py-1 font-mono text-[10px] tracking-[0.1em] text-blood-400">
                      {v.code}
                    </span>
                    <h3 className="font-display text-[16px] font-bold uppercase leading-tight tracking-tight text-white">
                      {v.name}
                    </h3>
                  </div>
                  <div className="flex shrink-0 items-center gap-2">
                    <span
                      className={cn(
                        "border px-1.5 py-[2px] font-mono text-[9px] tracking-[0.14em]",
                        SEV[v.sev],
                      )}
                    >
                      {v.sev}
                    </span>
                    <span
                      className={cn(
                        "font-mono text-[13px] transition-transform duration-300",
                        on ? "rotate-45 text-blood-400" : "text-slate-600",
                      )}
                    >
                      +
                    </span>
                  </div>
                </div>

                <p className="mt-3 text-[12.5px] leading-relaxed text-slate-400">{v.brief}</p>

                <div
                  className={cn(
                    "overflow-hidden transition-all duration-400",
                    on ? "mt-4 max-h-56 opacity-100" : "max-h-0 opacity-0",
                  )}
                >
                  <div className="space-y-2.5 border-t border-line pt-4">
                    <div>
                      <div className="font-mono text-[9.5px] uppercase tracking-[0.2em] text-blood-600">
                        how I test
                      </div>
                      <div className="mt-1 font-mono text-[11.5px] leading-relaxed text-slate-300">
                        {v.test}
                      </div>
                    </div>
                    <div>
                      <div className="font-mono text-[9.5px] uppercase tracking-[0.2em] text-blood-600">
                        real impact
                      </div>
                      <div className="mt-1 font-mono text-[11.5px] leading-relaxed text-slate-300">
                        {v.impact}
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          );
        })}
      </div>

      <div className="reveal mt-6 grid gap-px border border-line bg-line sm:grid-cols-3">
        {[
          { t: "Manual before automated", d: "Scanners flag the obvious. Authorisation flaws and logic bugs need two accounts, a diff and patience." },
          { t: "Evidence or it did not happen", d: "Every claim is backed by a captured request and response pair from a clean, unauthenticated session." },
          { t: "Impact over severity score", d: "A CVSS number means nothing to an executive. I explain what an attacker would actually walk away with." },
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
