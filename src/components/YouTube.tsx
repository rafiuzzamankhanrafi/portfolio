import { channel, contentPillars, tickerItems } from "../data/content";
import { SectionHead, SectionShell, Tag } from "./ui";

export default function YouTube() {
  return (
    <SectionShell id="youtube" className="relative overflow-hidden bg-void-2">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35]"
        style={{
          background:
            "radial-gradient(620px 340px at 82% 20%, rgba(255,34,56,0.16), transparent 62%), radial-gradient(500px 320px at 10% 90%, rgba(99,214,255,0.06), transparent 62%)",
        }}
      />

      <SectionHead
        index="09 /"
        title="YouTube Channel"
        kicker="I record what I learn. Screen-recorded technique walkthroughs on my own lab targets — useful for me because explaining exposes what I have not understood yet, and useful for anyone else starting out."
        right={
          <div className="flex flex-wrap gap-2">
            <Tag tone="red">● content creator</Tag>
            <Tag tone="line">{channel.handle}</Tag>
          </div>
        }
      />

      {/* channel hero */}
      <div className="reveal clip-notch relative border border-line bg-panel/80">
        <div className="hatch absolute inset-x-0 top-0 h-1 opacity-70" />

        <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[1.35fr_1fr] lg:items-center">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center border border-blood-600/60 bg-blood-900/40">
                <svg viewBox="0 0 24 24" className="h-6 w-6 text-blood-400" fill="currentColor">
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z" />
                </svg>
              </span>
              <div className="min-w-0">
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-600">
                  channel
                </div>
                <h3 className="font-display text-xl font-bold uppercase leading-tight tracking-tight text-white">
                  {channel.handle}
                </h3>
              </div>
            </div>

            <p className="mt-5 max-w-xl text-[13px] leading-relaxed text-slate-300">
              {channel.focus}. Every demonstration is recorded against a target I own or a deliberately
              vulnerable lab application — nothing on the channel involves a system I was not authorised
              to touch.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={channel.url}
                target="_blank"
                rel="noreferrer"
                className="bracket group inline-flex items-center gap-2 border border-blood-600 bg-blood-900/40 px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-blood-300 transition-colors hover:bg-blood-600 hover:text-white"
              >
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="currentColor">
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z" />
                </svg>
                Subscribe on YouTube
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
              <a
                href={channel.handleUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-line-2 bg-panel/60 px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-300 transition-colors hover:border-slate-400 hover:text-white"
              >
                Watch the latest ↗
              </a>
            </div>
          </div>

          {/* what the channel is for */}
          <div className="border border-line bg-void/60 p-5">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-blood-500">
              why I record at all
            </div>
            <ul className="mt-3 space-y-2.5">
              {[
                "Explaining a technique is the fastest way to find out I do not fully understand it",
                "A recording is a permanent record of my own reasoning at a point in time",
                "Public proof of practical ability — not just a certificate PDF",
                "Few good offensive security resources exist for absolute beginners in my region",
              ].map((x) => (
                <li key={x} className="flex items-start gap-2 font-mono text-[11.5px] leading-relaxed text-slate-400">
                  <span className="mt-[3px] text-blood-600">▸</span>
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ticker */}
        <div className="overflow-hidden border-t border-line py-2.5">
          <div className="anim-marquee flex w-max gap-8 whitespace-nowrap">
            {[...tickerItems, ...tickerItems].map((t, i) => (
              <span
                key={i}
                className="flex items-center gap-8 font-mono text-[10px] uppercase tracking-[0.26em] text-slate-600"
              >
                {t}
                <span className="text-blood-700">◇</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* content pillars */}
      <div className="reveal mt-6">
        <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.24em] text-slate-600">
          content pillars — what the channel covers
        </div>
        <div className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {contentPillars.map((p, i) => (
            <div
              key={p.id}
              className="group relative bg-panel/60 p-5 transition-colors duration-300 hover:bg-panel-2"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] text-blood-600">{p.id}</span>
                <span className="font-mono text-[13px] text-blood-700 transition-colors group-hover:text-blood-500">
                  ▶
                </span>
              </div>
              <h4 className="mt-3 font-display text-[15px] font-bold uppercase leading-tight tracking-tight text-white">
                {p.title}
              </h4>
              <p className="mt-2 text-[12px] leading-relaxed text-slate-400">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-1.5 border-t border-line pt-3">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="border border-line px-1.5 py-[2px] font-mono text-[9px] uppercase tracking-[0.12em] text-slate-500"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <span
                className="pointer-events-none absolute inset-x-0 bottom-0 h-px scale-x-0 bg-blood-500 transition-transform duration-500 group-hover:scale-x-100"
                style={{ transitionDelay: `${i * 10}ms` }}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="reveal mt-4 flex flex-col gap-3 border border-dashed border-line bg-void/50 p-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-2xl font-mono text-[11.5px] leading-relaxed text-slate-500">
          <span className="text-amber">Note:</span> the pillars above describe the channel's subject
          areas. Specific video titles and links live on the channel itself — subscribe there to see the
          newest uploads as they land.
        </p>
        <a
          href={channel.url}
          target="_blank"
          rel="noreferrer"
          className="shrink-0 border border-line-2 px-5 py-2.5 text-center font-mono text-[10px] uppercase tracking-[0.18em] text-slate-300 transition-colors hover:border-blood-500 hover:text-blood-300"
        >
          visit {channel.handle} ↗
        </a>
      </div>
    </SectionShell>
  );
}
