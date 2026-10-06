import { ethics, profile } from "../data/content";
import { SectionHead, SectionShell, Tag } from "./ui";

const FACTS = [
  { k: "Role", v: "Jr. Pentester @ Byte Capsule" },
  { k: "Previously", v: "Jr. Red Team Analyst (Intern)" },
  { k: "Started", v: "Aug 2025 — offensive security" },
  { k: "Focus", v: "Web apps, REST APIs, recon" },
  { k: "Tooling", v: "Burp Suite, Python, Bash" },
  { k: "Ethics", v: "Authorised targets only" },
];

export default function Profile() {
  return (
    <SectionShell id="about">
      <SectionHead
        index="01 /"
        title="Profile"
        kicker="Who I am, what I actually do, and the rules I work under. Written plainly — no inflated titles."
        right={
          <div className="flex flex-wrap gap-2">
            <Tag tone="term">Open to work</Tag>
            <Tag tone="line">Junior · honest</Tag>
          </div>
        }
      />

      <div className="grid gap-8 lg:grid-cols-[1.25fr_1fr] lg:gap-12">
        {/* bio */}
        <div className="reveal">
          <div className="relative border-l-2 border-blood-600 pl-6">
            <p className="text-[14px] leading-relaxed text-slate-300">{profile.blurb1}</p>
            <p className="mt-4 text-[14px] leading-relaxed text-slate-400">{profile.blurb2}</p>
          </div>

          <div className="mt-8 grid gap-px border border-line bg-line sm:grid-cols-2">
            {ethics.map((e, i) => (
              <div key={e.t} className="group bg-panel/60 p-5 transition-colors hover:bg-panel-2">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] text-blood-600">0{i + 1}</span>
                  <span className="h-px flex-1 bg-line" />
                  <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-term/70">
                    rule
                  </span>
                </div>
                <h4 className="mt-3 font-display text-[15px] font-bold uppercase tracking-tight text-white">
                  {e.t}
                </h4>
                <p className="mt-2 text-[12px] leading-relaxed text-slate-400">{e.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 border border-line bg-void-2/70 p-5">
            <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-blood-500">
              how I work
            </div>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              {[
                "Manual testing first — scanners support, they do not decide",
                "Logic flaws over payload spam",
                "Two accounts minimum before any authorisation claim",
                "Every report written so a developer can reproduce it alone",
              ].map((x) => (
                <div key={x} className="flex items-start gap-2 font-mono text-[11.5px] text-slate-400">
                  <span className="mt-[3px] text-blood-600">▸</span>
                  <span>{x}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* fact sheet */}
        <div className="reveal">
          <div className="clip-notch border border-line bg-panel/80">
            <div className="flex items-center justify-between border-b border-line px-5 py-3">
              <span className="font-display text-sm font-bold uppercase tracking-[0.16em] text-white">
                fact sheet
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-600">
                verifiable
              </span>
            </div>
            <div className="divide-y divide-line">
              {FACTS.map((f) => (
                <div key={f.k} className="group px-5 py-3.5 transition-colors hover:bg-panel-2">
                  <div className="font-mono text-[9.5px] uppercase tracking-[0.2em] text-slate-600">
                    {f.k}
                  </div>
                  <div className="mt-0.5 font-mono text-[12.5px] text-slate-200">{f.v}</div>
                </div>
              ))}
            </div>

            <div className="border-t border-line px-5 py-4">
              <div className="font-mono text-[9.5px] uppercase tracking-[0.2em] text-slate-600">
                where to verify
              </div>
              <div className="mt-3 space-y-2">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between border border-line bg-void px-3 py-2.5 font-mono text-[11.5px] text-slate-300 transition-colors hover:border-blood-600 hover:text-blood-300"
                >
                  <span>github/{profile.handle}</span>
                  <span className="text-blood-600">↗</span>
                </a>
                <a
                  href={profile.cv}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between border border-line bg-void px-3 py-2.5 font-mono text-[11.5px] text-slate-300 transition-colors hover:border-blood-600 hover:text-blood-300"
                >
                  <span>curriculum vitae (PDF)</span>
                  <span className="text-blood-600">↗</span>
                </a>
                <a
                  href="#certificates"
                  className="flex items-center justify-between border border-line bg-void px-3 py-2.5 font-mono text-[11.5px] text-slate-300 transition-colors hover:border-blood-600 hover:text-blood-300"
                >
                  <span>5 certificates (hosted)</span>
                  <span className="text-blood-600">↗</span>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-4 border border-dashed border-line bg-void-2/50 p-5">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-amber">
              a note on honesty
            </div>
            <p className="mt-2 font-mono text-[11.5px] leading-relaxed text-slate-500">
              I am a junior. I will not claim engagements, CVEs or tool proficiency I do not have —
              everything on this page is something I have actually done, built or studied, and I am
              comfortable being asked to demonstrate any of it.
            </p>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
