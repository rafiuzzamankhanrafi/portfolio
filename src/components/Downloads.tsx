import { downloads, profile } from "../data/content";
import { SectionHead, SectionShell, Tag } from "./ui";

const ALL_LINKS = [
  { k: "GitHub", v: "/" + profile.handle, url: profile.github, glyph: "◧" },
  {
    k: "YouTube",
    v: "@gh05tx-r",
    url: "https://youtube.com/@gh05tx-r?si=7QdjncYPIAOonr-d",
    glyph: "▶",
  },
  { k: "X / Twitter", v: "@rafi_uzzamam", url: profile.x, glyph: "✕" },
  { k: "Portfolio", v: "rafiuzzamankhanrafi.github.io", url: profile.site, glyph: "◈" },
];

export default function Downloads() {
  return (
    <SectionShell id="downloads">
      <SectionHead
        index="14 /"
        title="CV & Links"
        kicker="Everything a recruiter needs in one place. Download the CV, verify the certificates, read the code, or watch the technique walkthroughs."
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

      {/* download cards */}
      <div className="grid gap-px border border-line bg-line md:grid-cols-2 lg:grid-cols-4">
        {downloads.map((d, i) => (
          <a
            key={d.t}
            href={d.url}
            target={d.url.startsWith("#") ? undefined : "_blank"}
            rel="noreferrer"
            className="reveal group relative flex flex-col bg-panel/70 p-6 transition-colors duration-300 hover:bg-panel-2"
            style={{ transitionDelay: `${i * 55}ms` }}
          >
            <div className="flex items-start justify-between">
              <Tag tone={d.primary ? "red" : "line"}>{d.kind}</Tag>
              <span className="font-mono text-[10px] text-slate-700">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="mt-5 font-display text-[17px] font-bold uppercase leading-tight tracking-tight text-white">
              {d.t}
            </h3>
            <p className="mt-2 flex-1 font-mono text-[11.5px] leading-relaxed text-slate-500">{d.d}</p>
            <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-slate-600">
                {d.cta}
              </span>
              <span className="font-mono text-[12px] text-blood-500 transition-transform duration-300 group-hover:translate-x-1">
                {d.url.startsWith("#") ? "↓" : "↗"}
              </span>
            </div>
            <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px scale-x-0 bg-blood-500 transition-transform duration-500 group-hover:scale-x-100" />
          </a>
        ))}
      </div>

      {/* social hub */}
      <div className="reveal mt-6 border border-line bg-panel/70">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-5 py-3.5">
          <span className="font-display text-sm font-bold uppercase tracking-[0.18em] text-white">
            find me everywhere
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-600">
            all links · none abbreviated
          </span>
        </div>

        <div className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
          {ALL_LINKS.map((l) => (
            <a
              key={l.k}
              href={l.url}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-3.5 bg-void-2 px-5 py-5 transition-colors hover:bg-panel-2"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-line-2 bg-void text-[14px] text-blood-400 transition-colors group-hover:border-blood-600">
                {l.glyph}
              </span>
              <span className="min-w-0">
                <span className="block font-mono text-[9.5px] uppercase tracking-[0.2em] text-slate-600">
                  {l.k}
                </span>
                <span className="block truncate font-mono text-[12.5px] text-slate-200">{l.v}</span>
              </span>
              <span className="ml-auto shrink-0 font-mono text-[11px] text-blood-700 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-blood-400">
                ↗
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* verification strip */}
      <div className="reveal mt-6 grid gap-px border border-line bg-line sm:grid-cols-3">
        {[
          { t: "Verify, do not trust", d: "Every claim here links to something you can open — a PDF, a repository, a commit history or a public video." },
          { t: "Ask for a demo", d: "I am genuinely happy to walk through any tool, note or technique on this site in a call." },
          { t: "One page summary", d: "If your ATS chokes on links, email me and I will send a plain-text version of the CV." },
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
