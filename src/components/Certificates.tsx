import { certs, profile } from "../data/content";
import { SectionHead, SectionShell, Tag } from "./ui";

export default function Certificates() {
  return (
    <SectionShell id="certificates">
      <SectionHead
        index="06 /"
        title="Certificates"
        kicker="Every certificate below is publicly hosted and linked directly. Click through and verify — that is the whole point of listing them."
        right={
          <a
            href={profile.cv}
            target="_blank"
            rel="noreferrer"
            className="bracket inline-flex items-center gap-2 border border-blood-600 bg-blood-900/40 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-blood-300 transition-colors hover:bg-blood-600 hover:text-white"
          >
            view resume (pdf) →
          </a>
        }
      />

      <div className="grid gap-px border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
        {certs.map((c, i) => (
          <a
            key={c.title}
            href={c.url}
            target="_blank"
            rel="noreferrer"
            className="reveal group relative flex flex-col bg-panel/70 p-6 transition-colors duration-300 hover:bg-panel-2"
            style={{ transitionDelay: `${i * 50}ms` }}
          >
            <div className="flex items-start justify-between gap-3">
              <Tag tone={i === 1 ? "red" : "line"}>{c.tag}</Tag>
              <span className="font-mono text-[10px] text-slate-700">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>

            <h3 className="mt-5 font-display text-[17px] font-bold leading-snug tracking-tight text-white">
              {c.title}
            </h3>
            <p className="mt-2 flex-1 font-mono text-[11.5px] leading-relaxed text-slate-500">
              {c.issuer}
            </p>

            <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-600">
                hosted · verifiable
              </span>
              <span className="flex items-center gap-1.5 font-mono text-[10.5px] uppercase tracking-[0.14em] text-blood-500 transition-all duration-300 group-hover:gap-2.5">
                view certificate <span>↗</span>
              </span>
            </div>

            <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px scale-x-0 bg-blood-500 transition-transform duration-500 group-hover:scale-x-100" />
          </a>
        ))}

        {/* CV card */}
        <a
          href={profile.cv}
          target="_blank"
          rel="noreferrer"
          className="reveal group relative flex flex-col justify-between border border-blood-600/50 bg-blood-900/20 p-6 transition-colors duration-300 hover:bg-blood-900/35"
        >
          <div>
            <div className="flex items-start justify-between">
              <Tag tone="red">CV</Tag>
              <span className="font-mono text-[10px] text-blood-700">PDF</span>
            </div>
            <h3 className="mt-5 font-display text-xl font-bold uppercase leading-tight tracking-tight text-white">
              Curriculum Vitae
            </h3>
            <p className="mt-2 font-mono text-[11.5px] leading-relaxed text-slate-400">
              The single document with everything condensed: experience, skills, certifications and
              tooling.
            </p>
          </div>
          <div className="mt-5 flex items-center justify-between border-t border-blood-700/40 pt-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-blood-400/70">
              view or download
            </span>
            <span className="font-mono text-[13px] text-blood-400 transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </div>
        </a>
      </div>

      <div className="reveal mt-6 grid gap-px border border-line bg-line sm:grid-cols-3">
        {[
          { t: "ISO/IEC 27001:2022", d: "Lead Auditor training means I read controls from both directions — as an auditor checking them and as a pentester breaking them." },
          { t: "Red team internship", d: "Formal, completed internship at Byte Capsule covering adversary simulation fundamentals under supervision." },
          { t: "Continuous study", d: "Certifications are checkpoints, not endpoints. The lab work between them is where the actual learning happens." },
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
