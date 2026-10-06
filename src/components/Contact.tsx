import { useState } from "react";
import { profile } from "../data/content";
import { SectionHead, SectionShell, Tag } from "./ui";
import { cn } from "../utils/cn";

const CHANNELS = [
  {
    k: "GitHub",
    v: "github.com/" + profile.handle,
    hint: "code, tools, commit history",
    url: profile.github,
    act: "open",
    glyph: "◧",
  },
  {
    k: "YouTube",
    v: "@gh05tx-r",
    hint: "technique walkthroughs & study logs",
    url: "https://youtube.com/@gh05tx-r?si=7QdjncYPIAOonr-d",
    act: "open",
    glyph: "▶",
  },
  {
    k: "Writeups",
    v: "8 lab notes",
    hint: "documented technique deep-dives",
    url: "#writeups",
    act: "anchor",
    glyph: "▤",
  },
  {
    k: "X / Twitter",
    v: "@rafi_uzzamam",
    hint: "security notes and updates",
    url: profile.x,
    act: "open",
    glyph: "✕",
  },
  {
    k: "Curriculum Vitae",
    v: "Resume (PDF)",
    hint: "full experience and skills",
    url: profile.cv,
    act: "open",
    glyph: "▤",
  },
  {
    k: "Portfolio site",
    v: "rafiuzzamankhanrafi.github.io",
    hint: "this document, hosted",
    url: profile.site,
    act: "open",
    glyph: "◈",
  },
  {
    k: "Recruiter FAQ",
    v: "8 answers",
    hint: "availability, certs, limitations",
    url: "#faq",
    act: "anchor",
    glyph: "?",
  },
  {
    k: "Hireable",
    v: "Yes — open to work",
    hint: "junior pentester / red team roles",
    url: "#contact",
    act: "self",
    glyph: "●",
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyHandle = async () => {
    try {
      await navigator.clipboard.writeText(profile.handle);
    } catch {
      /* clipboard unavailable */
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <SectionShell id="contact" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(700px 400px at 20% 30%, rgba(255,34,56,0.13), transparent 65%), linear-gradient(to bottom, #05060a, rgba(5,6,10,0.9))",
        }}
      />
      <div className="dot-bg pointer-events-none absolute inset-0 -z-10 opacity-30" />

      <SectionHead
        index="08 /"
        title="Get In Touch"
        kicker="I am open to junior pentester and red team analyst roles, internships and bug bounty collaborations. If you want to talk shop, or you have a target that needs looking at properly, reach out."
        right={
          <div className="border border-term/40 bg-term/5 px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="anim-ping-ring h-1.5 w-1.5 rounded-full bg-term" />
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-term">
                hireable · available now
              </span>
            </div>
          </div>
        }
      />

      <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:gap-10">
        {/* channels */}
        <div className="reveal">
          <div className="divide-y divide-line border border-line bg-panel/70">
            {CHANNELS.map((c) => {
              const inner = (
                <>
                  <span
                    className={cn(
                      "flex h-10 w-10 shrink-0 items-center justify-center border border-line-2 bg-void text-[15px]",
                      c.act === "self" ? "text-term" : "text-blood-400",
                    )}
                  >
                    {c.glyph}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-600">
                      {c.k}
                    </div>
                    <div className="truncate font-mono text-[13px] text-slate-100">{c.v}</div>
                    <div className="mt-0.5 font-mono text-[10px] text-slate-600">{c.hint}</div>
                  </div>
                  <span className="shrink-0 font-mono text-[12px] text-blood-600 transition-transform duration-300 group-hover:translate-x-1">
                    {c.act === "self" ? "✔" : "↗"}
                  </span>
                </>
              );

              return c.act === "self" ? (
                <div key={c.k} className="group flex items-center gap-4 px-5 py-4">
                  {inner}
                </div>
              ) : (
                <a
                  key={c.k}
                  href={c.url}
                  target={c.url.startsWith("#") ? undefined : "_blank"}
                  rel="noreferrer"
                  className="group flex items-center gap-4 px-5 py-4 transition-colors hover:bg-panel-2"
                >
                  {inner}
                </a>
              );

            })}
          </div>

          <button
            onClick={copyHandle}
            className={cn(
              "mt-4 flex w-full items-center justify-between border px-5 py-4 font-mono text-left transition-colors",
              copied
                ? "border-term bg-term/10 text-term"
                : "border-line bg-void-2 text-slate-300 hover:border-blood-600",
            )}
          >
            <span>
              <span className="block text-[10px] uppercase tracking-[0.2em] text-slate-600">
                github handle
              </span>
              <span className="text-[13px]">{profile.handle}</span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.18em]">
              {copied ? "copied ✓" : "copy"}
            </span>
          </button>
        </div>

        {/* what I can do for you */}
        <div className="reveal clip-notch border border-line bg-panel/80 p-6 sm:p-7">
          <div className="flex items-center justify-between border-b border-line pb-3">
            <span className="font-display text-sm font-bold uppercase tracking-[0.18em] text-white">
              what I can help with
            </span>
            <span className="font-mono text-[10px] text-slate-600">junior scope</span>
          </div>

          <div className="mt-5 space-y-3">
            {[
              {
                t: "Web application pentesting",
                d: "Manual assessment against the OWASP Top 10 with Burp Suite. Reproduction steps and remediation in every finding.",
              },
              {
                t: "REST API security testing",
                d: "BOLA, mass assignment, JWT handling and authorisation boundaries — the classes scanners systematically miss.",
              },
              {
                t: "Recon & attack surface mapping",
                d: "Subdomain enumeration, technology fingerprinting and JS endpoint extraction using my own tooling.",
              },
              {
                t: "Assessment automation",
                d: "Python or Bash scripts for repetitive parts of your workflow, written and documented properly.",
              },
            ].map((x, i) => (
              <div key={x.t} className="border border-line bg-void/50 p-4 transition-colors hover:border-line-2">
                <div className="flex items-start gap-3">
                  <span className="font-mono text-[10px] text-blood-600">0{i + 1}</span>
                  <div>
                    <div className="font-display text-[14px] font-bold uppercase tracking-tight text-white">
                      {x.t}
                    </div>
                    <p className="mt-1.5 font-mono text-[11.5px] leading-relaxed text-slate-400">{x.d}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-2 border-t border-line pt-5">
            <Tag tone="term">Full-time roles</Tag>
            <Tag tone="line">Internships</Tag>
            <Tag tone="line">Bug bounty collab</Tag>
            <Tag tone="line">Remote friendly</Tag>
          </div>

          <a
            href={profile.cv}
            target="_blank"
            rel="noreferrer"
            className="bracket mt-6 flex w-full items-center justify-center gap-2 border border-blood-600 bg-blood-900/40 px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.22em] text-blood-300 transition-colors hover:bg-blood-600 hover:text-white"
          >
            view resume (pdf) →
          </a>
        </div>
      </div>
    </SectionShell>
  );
}
