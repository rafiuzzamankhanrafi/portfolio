import MatrixCanvas from "./MatrixCanvas";
import { heroStats, profile, tickerItems } from "../data/content";
import { useCountUp, useRotatingType } from "../hooks/useSite";
import { Caret, Tag } from "./ui";

const PHRASES = [
  "Junior pentester — manual web and API testing, first principles.",
  "Every finding reproduced by hand in Burp Suite before it is reported.",
  "Red team fundamentals: recon, OSINT, attack surface mapping.",
  "Learning in the open. Nothing reported that I cannot prove.",
  "Strictly authorised targets only — scope before requests.",
];

function Stat({ k, label, sub }: { k: string; label: string; sub: string }) {
  const numeric = Number(k);
  const { ref, val } = useCountUp(Number.isFinite(numeric) ? numeric : 0);
  return (
    <div className="group relative flex-1 border-l border-line px-4 py-4 first:border-l-0 sm:px-6">
      <div className="font-display text-2xl font-bold leading-none text-white sm:text-3xl">
        <span ref={ref}>{Number.isFinite(numeric) ? val : k}</span>
      </div>
      <div className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-slate-300">{label}</div>
      <div className="mt-0.5 font-mono text-[10px] text-slate-600">{sub}</div>
      <span className="absolute -left-px top-4 h-6 w-px bg-blood-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  );
}

export default function Hero() {
  const typed = useRotatingType(PHRASES);

  return (
    <section id="top" className="relative flex min-h-screen flex-col overflow-hidden pt-16">
      <div className="absolute inset-0 -z-10">
        <MatrixCanvas />
        <div className="grid-bg absolute inset-0 opacity-70" />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(900px 520px at 78% 12%, rgba(255,34,56,0.16), transparent 60%), radial-gradient(700px 500px at 8% 80%, rgba(99,214,255,0.07), transparent 60%)",
          }}
        />
        <div className="scanlines absolute inset-0 opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-void/70 via-void/30 to-void" />
        <div className="anim-sweep absolute inset-x-0 top-0 h-[38vh] bg-gradient-to-b from-transparent via-blood-500/[0.045] to-transparent" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl flex-1 items-center gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
        {/* ---- left ---- */}
        <div>
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 border border-term/40 bg-term/5 px-3 py-1.5">
              <span className="anim-ping-ring h-1.5 w-1.5 rounded-full bg-term" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-term">
                Open to work
              </span>
            </span>
            <Tag tone="ice">Web &amp; API Security</Tag>
            <Tag tone="line">Ethical · legal only</Tag>
          </div>

          <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-blood-500">
            {"// offensive security · junior pentester"}
          </div>

          <h1 className="mt-3 font-display font-bold uppercase leading-[0.88] tracking-[-0.03em] text-white">
            <span
              className="glitch block text-[8vw] text-glow-red anim-flicker sm:text-[5.4vw] lg:text-[3.6rem]"
              data-text="RAFI UZZAMAN"
            >
              RAFI UZZAMAN 
            </span>
            <span
              className="glitch block bg-gradient-to-r from-blood-500 via-blood-400 to-slate-200 bg-clip-text text-[8vw] text-transparent sm:text-[5.4vw] lg:text-[3.6rem]"
              data-text="KHAN RAFI"
            >
              KHAN RAFI
            </span>
          </h1>

          <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 border-l-2 border-blood-600 pl-4">
            <span className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-slate-300">
              Jr. Pentester
            </span>
            <span className="h-3 w-px bg-line-2" />
            <span className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-slate-300">
              Jr. Red Team Analyst
            </span>
            <span className="h-3 w-px bg-line-2" />
            <span className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-slate-300">Bug Hunter</span>
          </div>

          <p className="mt-6 max-w-xl font-mono text-[13px] leading-relaxed text-slate-400 sm:min-h-[66px]">
            <span className="text-blood-400">{typed}</span>
            <Caret />
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={profile.cv}
              target="_blank"
              rel="noreferrer"
              className="bracket group inline-flex items-center gap-2 border border-blood-600 bg-blood-900/40 px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-blood-300 transition-colors hover:bg-blood-600 hover:text-white"
            >
              View resume (PDF)
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 border border-line-2 bg-panel/60 px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-300 transition-colors hover:border-slate-400 hover:text-white"
            >
              My tools
            </a>
            <a
              href="https://youtube.com/@gh05tx-r?si=7QdjncYPIAOonr-d"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-line-2 bg-panel/60 px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-300 transition-colors hover:border-blood-500 hover:text-blood-300"
            >
              <svg viewBox="0 0 24 24" className="h-3 w-3" fill="currentColor">
                <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z" />
              </svg>
              YouTube
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-2 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500 transition-colors hover:text-blood-400"
            >
              Get in touch
            </a>
          </div>

          <div className="mt-8 grid max-w-lg grid-cols-2 gap-x-6 gap-y-2 font-mono text-[10px] uppercase tracking-[0.14em] text-slate-600 sm:grid-cols-3">
            <div>
              <span className="block text-slate-500">focus</span>Web · API · Recon
            </div>
            <div>
              <span className="block text-slate-500">stack</span>Burp · Python · Bash
            </div>
            <div>
              <span className="block text-slate-500">status</span>Hireable
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-[10px] uppercase tracking-[0.14em] text-slate-700">
            <span>
              <span className="text-blood-600">⌘K</span> command palette
            </span>
            <span className="hidden h-3 w-px bg-line sm:block" />
            <span>
              type <span className="text-blood-600">sudo</span> to escalate
            </span>
          </div>
        </div>

        {/* ---- right: identity + terminal ---- */}
        <div className="relative">
          <div className="absolute -inset-6 -z-10 bg-blood-500/[0.05] blur-2xl" />

          <div className="clip-notch border border-line bg-panel/85 backdrop-blur">
            <div className="flex items-center gap-4 border-b border-line px-5 py-4">
              <span className="relative shrink-0">
                <span className="absolute -inset-1 border border-blood-600/50" />
                <img
                  src={profile.avatar}
                  alt="Rafi Uzzaman Khan Rafi"
                  className="relative h-16 w-16 object-cover grayscale transition-all duration-500 hover:grayscale-0"
                  onError={(e) => {
                    const el = e.currentTarget;
                    el.style.visibility = "hidden";
                  }}
                />
                <span
                  className="absolute inset-0 -z-10 flex items-center justify-center bg-blood-900/40 font-display text-xl font-bold text-blood-400"
                  aria-hidden="true"
                >
                  RU
                </span>
              </span>
              <div className="min-w-0">
                <div className="truncate font-display text-[15px] font-bold uppercase tracking-tight text-white">
                  {profile.short}
                </div>
                <div className="mt-1 font-mono text-[10.5px] leading-relaxed text-slate-500">
                  {profile.tagline}
                </div>
                <div className="mt-1.5 flex flex-wrap gap-1.5">
                  <Tag tone="term">Available</Tag>
                  <Tag tone="line">BD · Remote</Tag>
                </div>
              </div>
            </div>

            <div className="scanlines relative space-y-3 px-5 py-4 font-mono text-[11px] leading-relaxed">
              <div className="text-slate-200">
                <span className="text-blood-500">rafi@cybersecurity:~$ </span>whoami
              </div>
              <div className="text-term/85">
                junior pentester · red team analyst · bug hunter
              </div>
              <div className="text-slate-200">
                <span className="text-blood-500">rafi@cybersecurity:~$ </span>cat skillset.txt
              </div>
              <div className="text-slate-400">
                web pentesting · API security · OSINT recon
                <br />
                burp suite · python · bash automation
              </div>
              <div className="text-slate-200">
                <span className="text-blood-500">rafi@cybersecurity:~$ </span>ls ./tools
              </div>
              <div className="text-ice">
                Master-SubFinder/ <span className="text-slate-600">ORDC/</span>
              </div>
              <div className="text-slate-200">
                <span className="text-blood-500">rafi@cybersecurity:~$ </span>
                <span className="anim-blink text-blood-400">▌</span>
              </div>
            </div>

            <div className="grid grid-cols-3 divide-x divide-line border-t border-line font-mono">
              {[
                { l: "Focus", v: "Web / API", t: "text-blood-400" },
                { l: "Method", v: "Manual", t: "text-ice" },
                { l: "Ethics", v: "Strict", t: "text-term" },
              ].map((s) => (
                <div key={s.l} className="px-3 py-3">
                  <div className="text-[9px] uppercase tracking-[0.18em] text-slate-600">{s.l}</div>
                  <div className={`text-[11px] ${s.t}`}>{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-3 flex flex-wrap items-center justify-between gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-600">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-blood-400"
            >
              github.com/{profile.handle}
            </a>
            <span className="text-blood-500">verifiable · no inflated claims</span>
          </div>
        </div>
      </div>

      {/* ---- stats strip ---- */}
      <div className="relative border-t border-line bg-void/70 backdrop-blur-sm">
        <div className="mx-auto flex w-full max-w-7xl flex-col divide-y divide-line px-0 sm:flex-row sm:divide-y-0">
          {heroStats.map((s) => (
            <Stat key={s.label} {...s} />
          ))}
        </div>
      </div>

      {/* ---- ticker ---- */}
      <div className="relative overflow-hidden border-t border-line bg-blood-900/10 py-2.5">
        <div className="anim-marquee flex w-max gap-8 whitespace-nowrap">
          {[...tickerItems, ...tickerItems].map((t, i) => (
            <span
              key={i}
              className="flex items-center gap-8 font-mono text-[10px] uppercase tracking-[0.28em] text-blood-400/70"
            >
              {t}
              <span className="text-blood-700">◆</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
