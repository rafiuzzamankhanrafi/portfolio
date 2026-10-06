import { profile, tickerItems } from "../data/content";

export default function Footer() {
  return (
    <footer className="relative border-t border-line bg-void">
      <div className="overflow-hidden border-b border-line py-3">
        <div className="anim-marquee flex w-max gap-10 whitespace-nowrap">
          {[...tickerItems.slice().reverse(), ...tickerItems.slice().reverse()].map((t, i) => (
            <span
              key={i}
              className="flex items-center gap-10 font-mono text-[10px] uppercase tracking-[0.3em] text-slate-700"
            >
              {t}
              <span className="text-blood-700">/</span>
            </span>
          ))}
        </div>
      </div>

      <div className="mx-auto grid w-full max-w-7xl gap-8 px-5 py-12 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="relative flex h-10 w-10 items-center justify-center border border-blood-600/70 bg-blood-900/30">
              <span className="absolute inset-0 hatch opacity-40" />
              <span className="relative font-display text-[13px] font-bold text-blood-400">RF</span>
            </span>
            <span className="leading-none">
              <span className="block font-display text-[13px] font-bold uppercase tracking-[0.16em] text-white">
                Rafi Uzzaman Khan Rafi
              </span>
              <span className="mt-1 block font-mono text-[10px] tracking-[0.14em] text-slate-500">
                JR. PENTESTER · JR. RED TEAM ANALYST
              </span>
            </span>
          </div>
          <p className="mt-4 max-w-sm font-mono text-[11.5px] leading-relaxed text-slate-500">
            Junior pentester and bug hunter focused on web application and REST API security. Red team
            trained at Byte Capsule. I test only what I am authorised to test, and I report only what I
            can prove.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {["OWASP TOP 10", "BURP SUITE", "PYTHON", "OSINT", "ISO 27001 LA"].map((c) => (
              <span
                key={c}
                className="border border-line px-2 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-slate-600"
              >
                {c}
              </span>
            ))}
          </div>
        </div>

        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-blood-500">sitemap</div>
          <div className="mt-4 grid grid-cols-2 gap-y-2 font-mono text-[11.5px] text-slate-500">
            {[
              ["Profile", "about"],
              ["Skillset", "skills"],
              ["Methodology", "method"],
              ["Vuln Classes", "vulns"],
              ["Tools", "projects"],
              ["Certificates", "certificates"],
              ["Experience", "experience"],
              ["YouTube", "youtube"],
              ["Writeups", "writeups"],
              ["Labs", "labs"],
              ["Value", "value"],
              ["FAQ", "faq"],
              ["Contact", "contact"],
              ["CV & Links", "downloads"],
            ].map(([label, id]) => (
              <a key={id} href={`#${id}`} className="transition-colors hover:text-blood-400">
                {label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-blood-500">direct</div>
          <div className="mt-4 space-y-2.5 font-mono text-[11.5px]">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="block text-slate-300 transition-colors hover:text-blood-400"
            >
              github/{profile.handle}
            </a>
            <a
              href="https://youtube.com/@gh05tx-r?si=7QdjncYPIAOonr-d"
              target="_blank"
              rel="noreferrer"
              className="block text-slate-300 transition-colors hover:text-blood-400"
            >
              youtube/@gh05tx-r
            </a>
            <a
              href={profile.x}
              target="_blank"
              rel="noreferrer"
              className="block text-slate-500 transition-colors hover:text-blood-400"
            >
              x/@rafi_uzzamam
            </a>
            <a
              href={profile.cv}
              target="_blank"
              rel="noreferrer"
              className="block text-slate-500 transition-colors hover:text-blood-400"
            >
              resume (PDF)
            </a>
            <a
              href={profile.site}
              target="_blank"
              rel="noreferrer"
              className="block text-slate-500 transition-colors hover:text-blood-400"
            >
              portfolio site
            </a>
          </div>
          <a
            href="#top"
            className="mt-5 inline-block border border-line-2 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400 transition-colors hover:border-blood-500 hover:text-blood-300"
          >
            ↑ back to top
          </a>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-5 py-5 font-mono text-[10px] uppercase tracking-[0.16em] text-slate-700 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <span>© 2026 Rafi Uzzaman Khan Rafi · authorised testing only</span>
          <span className="text-slate-600">
            no cookies · no trackers · <span className="text-blood-700">ethical &amp; legal standards</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
