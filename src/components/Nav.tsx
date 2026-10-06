import { useEffect, useState } from "react";
import { useActiveSection, useScrollProgress } from "../hooks/useSite";
import { profile } from "../data/content";
import { cn } from "../utils/cn";

const NAV = [
  { id: "about", label: "Profile", short: "PROFILE" },
  { id: "skills", label: "Skillset", short: "SKILLS" },
  { id: "method", label: "Methodology", short: "METHOD" },
  { id: "vulns", label: "Vuln Classes", short: "VULNS" },
  { id: "projects", label: "Tools", short: "TOOLS" },
  { id: "certificates", label: "Certificates", short: "CERTS" },
  { id: "experience", label: "Experience", short: "EXPERIENCE" },
  { id: "youtube", label: "YouTube", short: "YOUTUBE" },
  { id: "writeups", label: "Writeups", short: "WRITEUPS" },
  { id: "labs", label: "Labs", short: "LABS" },
  { id: "value", label: "Value", short: "VALUE" },
  { id: "faq", label: "FAQ", short: "FAQ" },
  { id: "contact", label: "Contact", short: "CONTACT" },
  { id: "downloads", label: "CV & Links", short: "CV" },
];

const IDS = NAV.map((n) => n.id);

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const progress = useScrollProgress();
  const active = useActiveSection(IDS);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[100] transition-all duration-300",
          solid ? "border-b border-line bg-void/88 backdrop-blur-md" : "border-b border-transparent",
        )}
      >
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#top" className="group flex items-center gap-3">
            <span className="relative flex h-9 w-9 items-center justify-center border border-blood-600/70 bg-blood-900/30">
              <span className="absolute inset-0 hatch opacity-40" />
              <span className="relative font-display text-[13px] font-bold text-blood-400">RF</span>
            </span>
            <span className="hidden leading-none sm:block">
              <span className="block font-display text-[13px] font-bold uppercase tracking-[0.16em] text-white">
                Rafi Uzzaman Khan Rafi
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-0.5 xl:flex">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className={cn(
                  "group relative px-[7px] py-2 font-mono text-[10.5px] uppercase tracking-[0.08em] transition-colors",
                  active === n.id ? "text-blood-400" : "text-slate-400 hover:text-white",
                )}
              >
                <span
                  className="mr-1 text-[9px] text-slate-600 group-hover:text-blood-600"
                  title={n.label}
                >
                  {String(NAV.indexOf(n) + 1).padStart(2, "0")}
                </span>
                {n.short}
                <span
                  className={cn(
                    "absolute inset-x-[7px] -bottom-[1px] h-px bg-blood-500 transition-transform duration-300",
                    active === n.id ? "scale-x-100" : "scale-x-0",
                  )}
                />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="clip-tag hidden border border-blood-600 bg-blood-900/40 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-blood-300 transition-all hover:bg-blood-600 hover:text-white md:inline-block"
          >
            Engage
          </a>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] border border-line text-slate-300 xl:hidden"
            title="Menu"
          >
              <span className={cn("h-px w-4 bg-current transition-transform", open && "translate-y-[3px] rotate-45")} />
              <span className={cn("h-px w-4 bg-current transition-opacity", open && "opacity-0")} />
              <span className={cn("h-px w-4 bg-current transition-transform", open && "-translate-y-[3px] -rotate-45")} />
            </button>
          </div>
        </div>
        <div className="relative h-[2px] w-full bg-line/50">
          <div
            className="h-full bg-gradient-to-r from-blood-700 via-blood-500 to-amber"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
      </header>

      {/* mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-[95] bg-void/97 backdrop-blur-md transition-all duration-300 xl:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <div className="grid-bg absolute inset-0 opacity-50" />
        <div className="relative flex h-full flex-col justify-center gap-1 px-8">
          {NAV.map((n, i) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              onClick={() => setOpen(false)}
              className="group flex items-baseline gap-4 border-b border-line/60 py-3"
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              <span className="font-mono text-[10px] text-blood-500">{String(i + 1).padStart(2, "0")}</span>
              <span className="font-display text-2xl font-bold uppercase tracking-tight text-slate-200 group-hover:text-blood-400">
                {n.label}
              </span>
            </a>
          ))}
          <p className="mt-6 font-mono text-[11px] text-slate-500">
            github/{profile.handle} · x/@rafi_uzzamam · open to work
          </p>
        </div>
      </div>
    </>
  );
}
