import { useCallback, useEffect, useState } from "react";
import BootOverlay from "./components/BootOverlay";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Methodology from "./components/Methodology";
import VulnLab from "./components/VulnLab";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Experience from "./components/Experience";
import YouTube from "./components/YouTube";
import Writeups from "./components/Writeups";
import Labs from "./components/Labs";
import Professional from "./components/Professional";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Downloads from "./components/Downloads";
import Footer from "./components/Footer";
import CommandPalette from "./components/CommandPalette";
import { CursorReticle, StatusDock, SudoOverlay } from "./components/HudLayer";
import { useRevealObserver, useScrollProgress } from "./hooks/useSite";

const SECTION_IDS = [
  "top",
  "about",
  "skills",
  "method",
  "vulns",
  "projects",
  "certificates",
  "experience",
  "youtube",
  "writeups",
  "labs",
  "value",
  "faq",
  "contact",
  "downloads",
];

function StatementBand() {
  const p = useScrollProgress();
  return (
    <section className="relative overflow-hidden border-y border-line bg-void py-16 md:py-24">
      <div className="dot-bg absolute inset-0 opacity-40" />
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(700px 340px at 50% 50%, rgba(255,34,56,0.13), transparent 70%)",
        }}
      />
      <div className="scanlines absolute inset-0 opacity-50" />
      <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-8">
        <div className="font-mono text-[10px] uppercase tracking-[0.34em] text-blood-500">
          {"// how I approach this field"}
        </div>
        <p className="mt-5 font-display text-2xl font-bold uppercase leading-[1.14] tracking-tight text-white sm:text-4xl">
          I am early in this career — so I learn it{" "}
          <span className="text-blood-500 text-glow-red">properly</span>, not quickly.
        </p>
        <p className="mx-auto mt-5 max-w-2xl font-mono text-[12.5px] leading-relaxed text-slate-400">
          Manual testing before automation. Reproduced before reported. Authorised before touched.
          Everything on this site is something I have actually done, built or studied.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 font-mono text-[10px] uppercase tracking-[0.22em] text-slate-600">
          <span className="h-px w-10 bg-line-2" />
          <span>ethics · rigour · curiosity</span>
          <span className="h-px w-10 bg-line-2" />
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-3 right-5 font-mono text-[9px] uppercase tracking-[0.24em] text-slate-800">
        scroll {String(Math.round(p * 100)).padStart(2, "0")}%
      </div>
    </section>
  );
}

function SideRail() {
  return (
    <>
      <div className="pointer-events-none fixed left-3 top-1/2 z-[60] hidden -translate-y-1/2 2xl:block">
        <div className="flex flex-col items-center gap-4">
          <span className="h-14 w-px bg-gradient-to-b from-transparent to-blood-700" />
          <span
            className="font-mono text-[9px] uppercase tracking-[0.4em] text-slate-600"
            style={{ writingMode: "vertical-rl" }}
          >
            web · api · recon · automation
          </span>
          <span className="h-14 w-px bg-gradient-to-t from-transparent to-blood-700" />
        </div>
      </div>
      <div className="pointer-events-none fixed right-3 top-1/2 z-[60] hidden -translate-y-1/2 2xl:block">
        <div className="flex flex-col items-center gap-3">
          <span className="h-8 w-px bg-line-2" />
          <span className="font-mono text-[9px] text-blood-600">▲</span>
          <span
            className="font-mono text-[9px] uppercase tracking-[0.4em] text-slate-600"
            style={{ writingMode: "vertical-rl" }}
          >
            authorised targets only
          </span>
          <span className="font-mono text-[9px] text-blood-600">▼</span>
          <span className="h-8 w-px bg-line-2" />
        </div>
      </div>
    </>
  );
}

export default function App() {
  useRevealObserver();
  const progress = useScrollProgress();
  const [sudo, setSudo] = useState(false);
  const [section, setSection] = useState("hero");

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        const v = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (v) setSection(v.target.id === "top" ? "hero" : v.target.id);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0.05, 0.3, 0.6] },
    );
    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  // "sudo" easter egg
  useEffect(() => {
    let buf = "";
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && ["INPUT", "TEXTAREA", "SELECT"].includes(target.tagName)) return;
      if (e.key.length !== 1) return;
      buf = (buf + e.key.toLowerCase()).slice(-6);
      if (buf.endsWith("sudo")) {
        setSudo(true);
        buf = "";
        window.setTimeout(() => setSudo(false), 3200);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const toggleMotion = useCallback(() => {
    const root = document.documentElement;
    root.classList.toggle("calm");
  }, []);

  const triggerSudo = useCallback(() => {
    setSudo(true);
    window.setTimeout(() => setSudo(false), 3200);
  }, []);

  return (
    <div className="relative min-h-screen bg-void">
      <BootOverlay />
      <CursorReticle />
      <SudoOverlay on={sudo} />
      <Nav />
      <CommandPalette onSudo={triggerSudo} onMotion={toggleMotion} />
      <SideRail />
      <StatusDock progress={progress} section={section} />
      <main>
        <Hero />
        <Profile />
        <StatementBand />
        <Skills />
        <Methodology />
        <VulnLab />
        <Projects />
        <Certificates />
        <Experience />
        <YouTube />
        <Writeups />
        <Labs />
        <Professional />
        <Faq />
        <Contact />
        <Downloads />
      </main>
      <Footer />

      <button
        onClick={() => window.dispatchEvent(new KeyboardEvent("keydown", { key: "k", ctrlKey: true }))}
        className="fixed bottom-3 right-3 z-[90] flex h-11 w-11 items-center justify-center border border-line bg-void/90 font-mono text-[13px] text-blood-400 backdrop-blur md:hidden"
        aria-label="Open command palette"
      >
        ⌘
      </button>
    </div>
  );
}
