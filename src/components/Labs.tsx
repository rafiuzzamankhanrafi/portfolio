import { homeLab, platforms } from "../data/content";
import { SectionHead, SectionShell, Tag } from "./ui";
import { cn } from "../utils/cn";

export default function Labs() {
  return (
    <SectionShell id="labs" className="bg-void-2">
      <SectionHead
        index="11 /"
        title="Labs & Practice"
        kicker="How I actually train. Offensive security cannot be learned by reading — everything below is hands-on, legally safe practice on systems built to be broken."
        right={
          <div className="flex flex-wrap gap-2">
            <Tag tone="term">hands-on</Tag>
            <Tag tone="line">no live-target risk</Tag>
          </div>
        }
      />

      <div className="grid gap-6 lg:grid-cols-[1.15fr_1fr] lg:gap-8">
        {/* platforms */}
        <div className="reveal">
          <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.24em] text-slate-600">
            platforms &amp; references I train on
          </div>
          <div className="grid gap-px border border-line bg-line sm:grid-cols-2">
            {platforms.map((p, i) => (
              <div
                key={p.n}
                className={cn(
                  "group relative flex flex-col p-5 transition-colors duration-300",
                  p.primary ? "bg-panel/70 hover:bg-panel-2" : "bg-void-2/70 hover:bg-panel-2/60",
                )}
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <div className="flex items-start justify-between gap-2">
                  <Tag tone={p.primary ? "red" : "line"}>{p.kind}</Tag>
                  {p.primary && <span className="font-mono text-[9px] text-blood-600">core</span>}
                </div>
                <h4 className="mt-3.5 font-display text-[14.5px] font-bold leading-snug tracking-tight text-white">
                  {p.n}
                </h4>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-blood-400/80">
                  {p.focus}
                </div>
                <p className="mt-2.5 flex-1 text-[12px] leading-relaxed text-slate-400">{p.why}</p>
                <div className="mt-3.5 flex flex-wrap gap-1.5 border-t border-line pt-3">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="border border-line px-1.5 py-[2px] font-mono text-[9px] uppercase tracking-[0.1em] text-slate-500"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* home lab */}
        <div className="reveal">
          <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.24em] text-slate-600">
            my home lab
          </div>
          <div className="clip-notch border border-line bg-panel/75">
            <div className="flex items-center justify-between border-b border-line px-5 py-3">
              <span className="font-display text-sm font-bold uppercase tracking-[0.16em] text-white">
                lab build
              </span>
              <span className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-term">
                <span className="h-1.5 w-1.5 rounded-full bg-term anim-ping-ring" /> isolated
              </span>
            </div>

            <div className="scanlines relative">
              <div className="divide-y divide-line">
                {homeLab.map((h, i) => (
                  <div key={h.t} className="group px-5 py-4 transition-colors hover:bg-panel-2">
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 font-mono text-[10px] text-blood-600">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div>
                        <div className="font-mono text-[12.5px] text-slate-100">{h.t}</div>
                        <p className="mt-1 font-mono text-[11px] leading-relaxed text-slate-500">{h.d}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-line px-5 py-4">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-blood-500">
                ground rule
              </div>
              <p className="mt-2 font-mono text-[11.5px] leading-relaxed text-slate-400">
                Every technique on this site was learned and demonstrated inside this lab. If it is not
                mine, or I have not got written permission, I do not touch it.
              </p>
            </div>
          </div>

          <div className="mt-4 border border-line bg-void/60 p-5">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber">
              no invented rankings
            </div>
            <p className="mt-2 font-mono text-[11px] leading-relaxed text-slate-500">
              You will not find a fabricated HTB rank or TryHackMe leaderboard position on this page.
              Platform progress changes weekly and does not measure judgment — I would rather show you
              what I can demonstrate than a number that could be wrong by Friday.
            </p>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
