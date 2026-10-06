import { useEffect, useRef, useState } from "react";

const LINES = [
  "[ ok ] loading workstation profile ............... rafi@cybersecurity",
  "[ ok ] importing modules: burp, python, bash ..... done",
  "[ ok ] loading skills: web, api, osint, recon .... 4 domains",
  "[ ok ] enumerating attack surface ............... subdomains ready",
  "[warn] ethics check: AUTHORISATION REQUIRED",
  "[ ok ] scope verification ....................... mandatory · enforced",
  "[ >> ] establishing interactive session",
];

export default function BootOverlay() {
  const [lines, setLines] = useState<string[]>([]);
  const [done, setDone] = useState(false);
  const [gone, setGone] = useState(false);
  const timers = useRef<number[]>([]);

  useEffect(() => {
    const safe = {
      get: () => {
        try {
          return window.sessionStorage.getItem("booted");
        } catch {
          return null;
        }
      },
      set: () => {
        try {
          window.sessionStorage.setItem("booted", "1");
        } catch {
          /* storage blocked */
        }
      },
    };
    const seen = safe.get();
    const finish = () => {
      setDone(true);
      const t = window.setTimeout(() => setGone(true), 620);
      timers.current.push(t);
      safe.set();
    };

    if (seen) {
      finish();
      return () => timers.current.forEach(window.clearTimeout);
    }

    LINES.forEach((l, i) => {
      const t = window.setTimeout(() => setLines((p) => [...p, l]), 210 + i * 215);
      timers.current.push(t);
    });
    const tEnd = window.setTimeout(finish, 210 + LINES.length * 215 + 420);
    timers.current.push(tEnd);

    const skip = () => finish();
    window.addEventListener("keydown", skip);
    window.addEventListener("pointerdown", skip);
    return () => {
      timers.current.forEach(window.clearTimeout);
      window.removeEventListener("keydown", skip);
      window.removeEventListener("pointerdown", skip);
    };
  }, []);

  if (gone) return null;

  return (
    <div
      className={`fixed inset-0 z-[200] flex flex-col justify-end bg-void px-5 py-8 transition-all duration-500 sm:px-10 sm:py-12 ${
        done ? "pointer-events-none translate-y-0 opacity-0" : "opacity-100"
      }`}
      style={{ transitionDuration: "600ms" }}
    >
      <div className="scanlines pointer-events-none absolute inset-0" />
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-60" />
      <div className="relative mx-auto w-full max-w-3xl">
        <div className="mb-5 flex items-end justify-between gap-4 font-mono text-[10px] uppercase tracking-[0.28em] text-blood-500">
          <span>rafi.uzzaman · offensive security workstation</span>
          <span className="text-slate-600">press any key to skip</span>
        </div>
        <div className="min-h-[188px] space-y-1 font-mono text-[11px] leading-relaxed sm:text-xs">
          {lines.map((l, i) => (
            <div
              key={i}
              className={
                l.startsWith("[warn]")
                  ? "text-amber"
                  : l.startsWith("[ >> ]")
                    ? "text-blood-400"
                    : "text-term/80"
              }
            >
              {l}
            </div>
          ))}
          <div className="text-blood-400">
            root@operator:~# <span className="anim-blink">▌</span>
          </div>
        </div>
        <div className="mt-6 h-[3px] w-full bg-line">
          <div
            className="h-full bg-blood-500 transition-[width] duration-300 ease-out"
            style={{ width: `${(lines.length / LINES.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}
