import { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "../utils/cn";
import { profile } from "../data/content";

type Cmd = {
  id: string;
  label: string;
  hint: string;
  group: string;
  run: () => void;
};

const SECTIONS = [
  ["about", "Profile"],
  ["skills", "Skillset"],
  ["method", "Methodology"],
  ["vulns", "Vulnerability Classes"],
  ["projects", "Tools I Built"],
  ["certificates", "Certificates"],
  ["experience", "Experience & Roadmap"],
  ["youtube", "YouTube Channel"],
  ["writeups", "Writeups & Lab Notes"],
  ["labs", "Labs & Practice"],
  ["value", "Professional Value"],
  ["faq", "Recruiter FAQ"],
  ["contact", "Contact"],
  ["downloads", "CV & Links"],
];

const open = (url: string) => window.open(url, "_blank", "noreferrer");

export default function CommandPalette({ onSudo, onMotion }: { onSudo: () => void; onMotion: () => void }) {
  const [openState, setOpenState] = useState(false);
  const [q, setQ] = useState("");
  const [sel, setSel] = useState(0);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const copy = (t: string) => {
    try {
      void navigator.clipboard.writeText(t);
    } catch {
      /* noop */
    }
  };

  const cmds = useMemo<Cmd[]>(
    () => [
      ...SECTIONS.map(([id, label]) => ({
        id,
        label,
        hint: `#${id}`,
        group: "Navigate",
        run: () => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }),
      })),
      {
        id: "cv",
        label: "Open resume / CV (PDF)",
        hint: "Google Drive",
        group: "Documents",
        run: () => open(profile.cv),
      },
      {
        id: "certs",
        label: "Verify certificates",
        hint: "5 hosted certificates",
        group: "Documents",
        run: () => document.getElementById("certificates")?.scrollIntoView({ behavior: "smooth" }),
      },
      {
        id: "gh",
        label: "Open GitHub profile",
        hint: profile.handle,
        group: "Links",
        run: () => open(profile.github),
      },
      {
        id: "repos",
        label: "Open repositories",
        hint: "Master-SubFinder · ORDC",
        group: "Links",
        run: () => open(profile.repos),
      },
      {
        id: "yt",
        label: "Open YouTube channel",
        hint: "@gh05tx-r",
        group: "Links",
        run: () => open("https://youtube.com/@gh05tx-r?si=7QdjncYPIAOonr-d"),
      },
      {
        id: "writeups",
        label: "Read writeups & lab notes",
        hint: "8 technique notes",
        group: "Documents",
        run: () => document.getElementById("writeups")?.scrollIntoView({ behavior: "smooth" }),
      },
      {
        id: "x",
        label: "Open X / Twitter",
        hint: "@rafi_uzzamam",
        group: "Links",
        run: () => open(profile.x),
      },
      {
        id: "faq",
        label: "Recruiter FAQ",
        hint: "availability, certs, scope",
        group: "Navigate",
        run: () => document.getElementById("faq")?.scrollIntoView({ behavior: "smooth" }),
      },
      {
        id: "copy-handle",
        label: "Copy GitHub handle",
        hint: profile.handle,
        group: "Actions",
        run: () => copy(profile.handle),
      },
      {
        id: "sudo",
        label: "sudo escalate privileges",
        hint: "easter egg",
        group: "Fun",
        run: onSudo,
      },
      {
        id: "motion",
        label: "Toggle ambient motion",
        hint: "reduced-motion mode",
        group: "Accessibility",
        run: onMotion,
      },
      {
        id: "print",
        label: "Print / save this page as PDF",
        hint: "Ctrl+P",
        group: "Actions",
        run: () => window.print(),
      },
      {
        id: "top",
        label: "Back to top",
        hint: "#top",
        group: "Navigate",
        run: () => window.scrollTo({ top: 0, behavior: "smooth" }),
      },
    ],
    [onSudo, onMotion],
  );

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return cmds;
    return cmds.filter(
      (c) =>
        c.label.toLowerCase().includes(s) || c.hint.toLowerCase().includes(s) || c.group.toLowerCase().includes(s),
    );
  }, [q, cmds]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpenState((o) => !o);
        setQ("");
        setSel(0);
        return;
      }
      if (e.key === "Escape") setOpenState(false);
      if (!openState) return;
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSel((s) => (s + 1) % Math.max(1, filtered.length));
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setSel((s) => (s - 1 + filtered.length) % Math.max(1, filtered.length));
      }
      if (e.key === "Enter") {
        e.preventDefault();
        const c = filtered[sel];
        if (c) {
          c.run();
          setOpenState(false);
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openState, filtered, sel]);

  useEffect(() => {
    if (openState) window.setTimeout(() => inputRef.current?.focus(), 30);
  }, [openState]);

  let lastGroup = "";

  return (
    <>
      <button
        onClick={() => setOpenState(true)}
        className="hidden items-center gap-2 border border-line bg-panel/70 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-slate-500 transition-colors hover:border-blood-600 hover:text-blood-300 md:flex"
      >
        <span className="text-blood-500">⌘</span> command
        <span className="border border-line-2 px-1 text-[9px] text-slate-600">K</span>
      </button>

      <div
        className={cn(
          "fixed inset-0 z-[150] flex items-start justify-center bg-void/85 px-4 pt-[13vh] backdrop-blur-md transition-opacity duration-200",
          openState ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={() => setOpenState(false)}
      >
        <div
          className="clip-notch w-full max-w-xl border border-line-2 bg-panel/95 shadow-[0_0_80px_-20px_rgba(255,34,56,0.5)]"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center gap-3 border-b border-line px-4 py-3">
            <span className="font-mono text-[11px] text-blood-500">&gt;</span>
            <input
              ref={inputRef}
              value={q}
              onChange={(e) => {
                setQ(e.target.value);
                setSel(0);
              }}
              onKeyDown={(e) => {
                if (e.key === "ArrowDown" || e.key === "ArrowUp") e.preventDefault();
              }}
              placeholder="search sections, links, certificates…"
              className="w-full bg-transparent font-mono text-[13px] text-slate-100 outline-none placeholder:text-slate-700"
            />
            <span className="shrink-0 border border-line-2 px-1.5 font-mono text-[9px] text-slate-600">esc</span>
          </div>

          <div className="max-h-[48vh] overflow-y-auto py-2">
            {filtered.length === 0 && (
              <div className="px-4 py-6 font-mono text-[11px] text-slate-600">
                no results — try “cv”, “github”, “jwt” or “tools”
              </div>
            )}
            {filtered.map((c, i) => {
              const showGroup = c.group !== lastGroup;
              lastGroup = c.group;
              return (
                <div key={c.id}>
                  {showGroup && (
                    <div className="px-4 pb-1 pt-3 font-mono text-[9px] uppercase tracking-[0.24em] text-blood-600">
                      {c.group}
                    </div>
                  )}
                  <button
                    onMouseEnter={() => setSel(i)}
                    onClick={() => {
                      c.run();
                      setOpenState(false);
                    }}
                    className={cn(
                      "flex w-full items-center justify-between gap-3 px-4 py-2 text-left transition-colors",
                      i === sel ? "bg-blood-900/40" : "hover:bg-panel-2",
                    )}
                  >
                    <span className="flex items-center gap-2.5">
                      <span className={cn("font-mono text-[10px]", i === sel ? "text-blood-400" : "text-slate-700")}>
                        {i === sel ? "▸" : "·"}
                      </span>
                      <span className={cn("font-mono text-[12.5px]", i === sel ? "text-white" : "text-slate-300")}>
                        {c.label}
                      </span>
                    </span>
                    <span className="shrink-0 font-mono text-[10px] text-slate-600">{c.hint}</span>
                  </button>
                </div>
              );
            })}
          </div>

          <div className="flex items-center justify-between border-t border-line px-4 py-2.5 font-mono text-[9px] uppercase tracking-[0.18em] text-slate-600">
            <span>↑↓ navigate · ↵ execute</span>
            <span className="text-slate-700">rafi · offensive security shell</span>
          </div>
        </div>
      </div>
    </>
  );
}
