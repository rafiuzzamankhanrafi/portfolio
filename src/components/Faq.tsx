import { useState } from "react";
import { faqs, profile } from "../data/content";
import { SectionHead, SectionShell } from "./ui";
import { cn } from "../utils/cn";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <SectionShell id="faq" className="bg-void-2">
      <SectionHead
        index="13 /"
        title="Recruiter FAQ"
        kicker="The questions I get asked most, answered directly. No hedging — if I cannot do something yet, the answer says so."
        right={
          <a
            href={profile.cv}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 border border-line-2 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-300 transition-colors hover:border-blood-500 hover:text-blood-300"
          >
            skip to CV (pdf) ↗
          </a>
        }
      />

      <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr] lg:gap-8">
        <div className="reveal divide-y divide-line border border-line bg-panel/60">
          {faqs.map((f, i) => {
            const on = open === i;
            return (
              <div key={f.q} className={cn("transition-colors", on ? "bg-panel-2/60" : "hover:bg-panel-2/40")}>
                <button
                  onClick={() => setOpen(on ? null : i)}
                  className="flex w-full items-start gap-4 p-5 text-left"
                  aria-expanded={on}
                >
                  <span
                    className={cn(
                      "mt-0.5 shrink-0 font-mono text-[10px] transition-colors",
                      on ? "text-blood-400" : "text-slate-700",
                    )}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={cn(
                      "flex-1 font-display text-[15px] font-bold leading-snug tracking-tight transition-colors",
                      on ? "text-white" : "text-slate-200",
                    )}
                  >
                    {f.q}
                  </span>
                  <span
                    className={cn(
                      "mt-0.5 shrink-0 font-mono text-[13px] transition-transform duration-300",
                      on ? "rotate-45 text-blood-400" : "text-slate-600",
                    )}
                  >
                    +
                  </span>
                </button>

                <div
                  className={cn(
                    "overflow-hidden transition-all duration-400",
                    on ? "max-h-64 opacity-100" : "max-h-0 opacity-0",
                  )}
                >
                  <p className="border-t border-line bg-void/40 px-5 py-4 pl-[54px] font-mono text-[12px] leading-relaxed text-slate-400">
                    {f.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* quick answers sidebar */}
        <div className="reveal space-y-4">
          <div className="clip-notch border border-term/30 bg-term/[0.04] p-5">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-term">
              the 30-second version
            </div>
            <ul className="mt-3.5 space-y-2.5">
              {[
                "Available for junior pentester / red team roles",
                "5 verifiable certifications, all linked on this site",
                "Red team internship completed at Byte Capsule",
                "2 released Python security tools on GitHub",
                "Strongest in web app + REST API manual testing",
                "Bangladesh based · remote friendly",
              ].map((x) => (
                <li key={x} className="flex items-start gap-2 font-mono text-[11.5px] leading-relaxed text-slate-300">
                  <span className="mt-[3px] text-term">✔</span>
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-line bg-panel/70 p-5">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-blood-500">
              still deciding?
            </div>
            <p className="mt-2.5 font-mono text-[11.5px] leading-relaxed text-slate-400">
              Ask me a technical question instead of a CV one. I would rather be judged on whether I can
              explain how a JWT breaks than on how my CV is formatted.
            </p>
            <a
              href="#contact"
              className="mt-4 inline-flex items-center gap-2 border border-line-2 px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-300 transition-colors hover:border-blood-500 hover:text-blood-300"
            >
              get in touch →
            </a>
          </div>

          <div className="border border-dashed border-line bg-void/50 p-5">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber">
              honest limitation
            </div>
            <p className="mt-2 font-mono text-[11px] leading-relaxed text-slate-500">
              I do not yet have production red team experience at scale, Active Directory expertise or
              cloud attack-path depth. I am working toward all three — see the roadmap in the Experience
              section for exactly how.
            </p>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
