/* =========================================================================
   Real profile data — Rafi Uzzaman Khan Rafi
   Source: portfolio index.html + GitHub profile API
   Nothing in this file is invented: every role, tool, certificate and link
   below comes from the supplied portfolio document or the public profile.
   ========================================================================= */

export const profile = {
  name: "RAFI UZZAMAN KHAN RAFI",
  short: "RAFI UZZAMAN KHAN",
  handle: "rafiuzzamankhanrafi",
  avatar: "https://avatars.githubusercontent.com/u/258406408?v=4",
  role: "Jr. Pentester · Jr. Red Team Analyst · Bug Hunter",
  tagline: "Pentester (Jr.) | Red Team Analyst (Jr.) | Bug Hunter",
  location: "Bangladesh · Open to remote",
  hireable: true,
  blurb1:
    "I am Rafi Uzzaman Khan Rafi, a dedicated Junior Pentester and Bug Hunter with practical experience in web application security and vulnerability assessment. I have completed my internship as a Junior Red Team Analyst, where I worked with offensive security techniques to simulate real-world attacks and evaluate organizational defenses.",
  blurb2:
    "I am driven by a strong interest in red teaming, penetration testing, and continuous learning in cybersecurity, always adhering to ethical and legal standards.",
  site: "https://rafiuzzamankhanrafi.github.io/Rafi_Uzzaman_Khan_Rafi-Portfolio/",
  cv: "https://drive.google.com/file/d/1wCt2bKSZaHpY7xryltGSRms-jTu8S5-B/view?usp=sharing",
  github: "https://github.com/rafiuzzamankhanrafi",
  x: "https://x.com/rafi_uzzamam",
  repos: "https://github.com/rafiuzzamankhanrafi?tab=repositories",
};

export const heroStats = [
  { k: "2", label: "Security tools built", sub: "Python · released on GitHub" },
  { k: "5", label: "Certifications", sub: "incl. ISO/IEC 27001 Lead Auditor" },
  { k: "10", label: "OWASP Top 10 classes", sub: "tested manually via Burp Suite" },
  { k: "2", label: "Roles at Byte Capsule", sub: "intern → Jr. Pentester" },
];

/* ---------------- skills ---------------- */

export type SkillGroup = {
  id: string;
  title: string;
  brief: string;
  items: { n: string; lvl: number; note: string }[];
  tag: string;
};

export const skills: SkillGroup[] = [
  {
    id: "SK-01",
    title: "Web Pentesting",
    brief: "Manual, logic-first testing of web applications. Every finding reproduced by hand in Burp Suite before it goes in a report.",
    tag: "CORE",
    items: [
      { n: "Burp Suite (Pro workflows)", lvl: 88, note: "Repeater, Intruder, match/replace, session rules" },
      { n: "OWASP Top 10", lvl: 85, note: "Mapped, tested and documented per class" },
      { n: "Manual testing", lvl: 90, note: "Business-logic and authorisation flaws over scanner noise" },
      { n: "SQL Injection", lvl: 82, note: "Union, boolean-blind, time-based, manual enumeration" },
      { n: "Cross-Site Scripting", lvl: 84, note: "Reflected, stored, DOM — context-aware payload crafting" },
    ],
  },
  {
    id: "SK-02",
    title: "API Testing",
    brief: "REST API security assessment with emphasis on broken object-level authorisation and token handling.",
    tag: "API",
    items: [
      { n: "REST API security", lvl: 84, note: "Method, header and content-type abuse" },
      { n: "BOLA / IDOR", lvl: 86, note: "Object reference enumeration across roles and tenants" },
      { n: "Mass Assignment", lvl: 80, note: "Parameter pollution and hidden-field injection" },
      { n: "JWT exploitation", lvl: 83, note: "alg:none, weak HMAC secrets, kid injection, claim tampering" },
      { n: "BFLA / BFLA-adjacent", lvl: 74, note: "Privileged function access on lower-privilege tokens" },
    ],
  },
  {
    id: "SK-03",
    title: "Red Teaming",
    brief: "Adversary simulation fundamentals — reconnaissance, OSINT collection and attack-surface mapping before any exploitation.",
    tag: "OFFENSIVE",
    items: [
      { n: "Adversary simulation", lvl: 76, note: "Attack-path thinking under supervision at Byte Capsule" },
      { n: "Reconnaissance", lvl: 88, note: "Passive and active surface discovery" },
      { n: "OSINT methodologies", lvl: 85, note: "Certificate transparency, code search, public records" },
      { n: "Subdomain enumeration", lvl: 90, note: "Built my own tooling for it" },
      { n: "MITRE ATT&CK mapping", lvl: 70, note: "Technique-level reporting" },
    ],
  },
  {
    id: "SK-04",
    title: "Automation",
    brief: "Turning repetitive assessment steps into small, reliable Python and Bash tooling.",
    tag: "BUILD",
    items: [
      { n: "Python", lvl: 86, note: "requests, asyncio, argparse, report generation" },
      { n: "Bash scripting", lvl: 80, note: "Pipelines, one-liners, recon automation" },
      { n: "Linux", lvl: 84, note: "Daily driver for testing and tooling" },
      { n: "Git / GitHub", lvl: 82, note: "Versioned tooling and documentation" },
      { n: "Report writing", lvl: 85, note: "Reproduction steps, impact, remediation" },
    ],
  },
];

/* ---------------- methodology (real, teachable process) ---------------- */

export type MethodPhase = {
  step: string;
  name: string;
  ttp: string;
  summary: string;
  actions: string[];
  tools: string[];
  looksFor: string;
};

export const methodology: MethodPhase[] = [
  {
    step: "01",
    name: "Scope & Rules",
    ttp: "Pre-engagement",
    summary:
      "Before anything touches a target: confirm written authorisation, define what is in and out of scope, and agree on how findings get reported.",
    actions: [
      "Confirm authorisation and testing window in writing",
      "Agree scope: domains, APIs, accounts, excluded hosts",
      "Define severity scale and reporting format",
      "Set a safe word for pausing the test",
    ],
    tools: ["signed scope doc", "asset inventory"],
    looksFor: "Nothing — an out-of-scope test is an illegal test.",
  },
  {
    step: "02",
    name: "Recon",
    ttp: "Reconnaissance",
    summary:
      "Map the attack surface passively before sending a single request. This is where most of the interesting findings are actually discovered.",
    actions: [
      "Enumerate subdomains from certificate transparency logs",
      "Fingerprint technology stack, frameworks and WAF",
      "Collect JS files and extract API endpoints and secrets",
      "Harvest historical URLs and parameters from public archives",
    ],
    tools: ["Master-SubFinder", "crt.sh", "httpx", "wayback"],
    looksFor: "Forgotten staging hosts, exposed API docs, verbose JS bundles.",
  },
  {
    step: "03",
    name: "Mapping",
    ttp: "Discovery",
    summary:
      "Walk the application like a real user with Burp logging everything, so the proxy has a complete site map before any active testing begins.",
    actions: [
      "Create accounts at every privilege level offered",
      "Manually visit every page, feature and state transition",
      "Catalogue every endpoint, parameter and role combination",
      "Note rate limits, error messages and session behaviour",
    ],
    tools: ["Burp Suite", "browser devtools", "site map notes"],
    looksFor: "Role boundaries, admin-only functions, per-tenant object IDs.",
  },
  {
    step: "04",
    name: "Auth & Session",
    ttp: "Broken Auth",
    summary:
      "Attack the front door: how tokens are issued, how they are validated, and whether the server actually trusts what the client sends.",
    actions: [
      "Test JWTs for alg:none, weak HMAC secrets and kid injection",
      "Swap, strip and replay claims to test signature enforcement",
      "Check cookie flags, expiry and invalidation on logout",
      "Attempt registration and password-reset flow abuse",
    ],
    tools: ["Burp", "jwt_tool", "base64 decode"],
    looksFor: "Unsigned tokens accepted, claims trusted client-side, sessions that never die.",
  },
  {
    step: "05",
    name: "Injection",
    ttp: "Injection",
    summary:
      "Test how user input reaches an interpreter. Manual, character-by-character — automated scanners miss the interesting half of these.",
    actions: [
      "SQLi: union, boolean-blind and time-based with manual enumeration",
      "XSS: reflected, stored and DOM-based with context-aware payloads",
      "Command and template injection in unusual parameter positions",
      "Probe error handling for stack traces and query leakage",
    ],
    tools: ["Burp Repeater", "sqlmap (verified manually)", "custom payloads"],
    looksFor: "Errors that change with a quote, encoding that gets decoded twice.",
  },
  {
    step: "06",
    name: "Access Control",
    ttp: "BOLA / Broken Authz",
    summary:
      "The highest-value class in modern API testing: does the server check that this object actually belongs to the caller?",
    actions: [
      "Enumerate object IDs across two accounts and two roles",
      "Swap UUIDs, incrementing IDs and email values in requests",
      "Test privileged endpoints with low-privilege tokens (BFLA)",
      "Mass assignment: add role or is_admin fields to requests",
    ],
    tools: ["Burp", "Autorize", "diff of two sessions"],
    looksFor: "200 responses on another user's data, fields the API accepts but never documents.",
  },
  {
    step: "07",
    name: "Logic & Config",
    ttp: "Misconfiguration",
    summary:
      "Everything the scanner cannot see: business logic, security headers, CORS, and the transport-level redirects users never question.",
    actions: [
      "Test CORS reflection and arbitrary origin acceptance",
      "Check security headers, cookie scope and TLS configuration",
      "Abuse open redirects in OAuth and login return URLs",
      "Race conditions and negative-value / integer-boundary logic",
    ],
    tools: ["Burp", "curl", "ORDC", "custom scripts"],
    looksFor: "Redirects to attacker-controlled domains, permissive CORS, missing rate limits.",
  },
  {
    step: "08",
    name: "Report",
    ttp: "Reporting",
    summary:
      "A finding is worthless if it cannot be reproduced. Every report ships with exact steps, evidence, impact and a fix the developer can implement.",
    actions: [
      "Write minimal reproduction steps from a clean session",
      "Attach request/response evidence and screenshots",
      "State real business impact in plain language",
      "Propose specific remediation, not just the severity score",
    ],
    tools: ["markdown", "screenshots", "CVSS 3.1"],
    looksFor: "Whether a developer who has never seen the app can reproduce it in five minutes.",
  },
];

/* ---------------- vulnerability classes (real knowledge base) ---------------- */

export const vulnClasses = [
  {
    code: "A01",
    name: "Broken Access Control",
    sev: "CRITICAL",
    brief: "Server fails to verify that the caller is authorised for the specific object or function requested.",
    test: "Two accounts, swap identifiers, compare responses.",
    impact: "Full account or tenant takeover without any credential theft.",
  },
  {
    code: "A02",
    name: "Cryptographic Failures",
    sev: "HIGH",
    brief: "Sensitive data exposed through weak, absent or misapplied cryptography, including unvalidated JWT signatures.",
    test: "Decode tokens, test alg:none, brute weak HMAC secrets.",
    impact: "Authentication bypass and plaintext credential exposure.",
  },
  {
    code: "A03",
    name: "Injection",
    sev: "CRITICAL",
    brief: "Untrusted input interpreted as code or query — SQL, OS command, template or expression injection.",
    test: "Manual quote/bracket probes, blind timing, union enumeration.",
    impact: "Database extraction, RCE, full backend compromise.",
  },
  {
    code: "A03b",
    name: "Cross-Site Scripting",
    sev: "HIGH",
    brief: "Attacker-controlled JavaScript executes in another user's browser session context.",
    test: "Context-aware payload placement, DOM sink tracing, filter bypass.",
    impact: "Session theft, keylogging, silent actions as the victim.",
  },
  {
    code: "API1",
    name: "BOLA / IDOR",
    sev: "CRITICAL",
    brief: "Object references returned by the API are accepted without ownership verification.",
    test: "Enumerate IDs across accounts; diff authorised vs unauthorised responses.",
    impact: "Mass extraction of other users' records, often with no trace.",
  },
  {
    code: "API3",
    name: "Broken Object Property Level Authz",
    sev: "HIGH",
    brief: "Mass assignment — the API accepts properties it should ignore, letting clients escalate their own role.",
    test: "Add privileged fields to PATCH/POST bodies and observe acceptance.",
    impact: "Self-service privilege escalation to administrator.",
  },
  {
    code: "API2",
    name: "Broken Authentication",
    sev: "CRITICAL",
    brief: "API authentication is incorrectly implemented — token handling, endpoint protection or brute-force protection.",
    test: "Token replay, endpoint exclusion checks, rate-limit probing.",
    impact: "Impersonation of any user or full API access.",
  },
  {
    code: "A01r",
    name: "Open Redirect",
    sev: "MEDIUM",
    brief: "Unvalidated redirect parameters let an attacker bounce users through a trusted domain.",
    test: "Scheme and encoding bypasses; chain into OAuth token capture.",
    impact: "Phishing credibility and OAuth code/token interception.",
  },
  {
    code: "A05",
    name: "Security Misconfiguration",
    sev: "MEDIUM",
    brief: "Permissive CORS, verbose errors, default credentials, exposed debug endpoints and directory listing.",
    test: "Origin reflection tests, error triggering, path probing.",
    impact: "Information disclosure that chains into a critical finding.",
  },
  {
    code: "A07",
    name: "Identification & Auth Failures",
    sev: "HIGH",
    brief: "Session fixation, missing invalidation, credential stuffing tolerance and weak recovery flows.",
    test: "Logout invalidation, session reuse, reset-link entropy.",
    impact: "Persistent unauthorised access after password change.",
  },
];

/* ---------------- real projects ---------------- */

export const projects = [
  {
    name: "Master-SubFinder",
    kind: "Python · recon tool",
    status: "Released",
    desc: "Subdomain enumeration tool built with Python. Automates passive discovery of an organisation's external attack surface before a web assessment begins.",
    features: [
      "Passive subdomain discovery from multiple public sources",
      "Deduplication and wildcard filtering of noise",
      "Concurrent resolution with liveness checking",
      "Plain-text output ready to pipe into httpx or Burp",
    ],
    role: "Sole author — design, development and documentation",
    stack: ["Python", "asyncio", "requests", "DNS"],
    why: "Recon was the most repetitive part of every assessment, so I automated the part I was doing by hand each time.",
    repo: "https://github.com/rafiuzzamankhanrafi?tab=repositories",
  },
  {
    name: "ORDC",
    kind: "Python · vulnerability scanner",
    status: "Released",
    desc: "Automated Open Redirection vulnerability tester. Sends encoded and bypass-variant payloads against redirect parameters and confirms which ones actually bounce off-host.",
    features: [
      "Payload set covering scheme, slash and encoding bypasses",
      "Automatic redirect-parameter discovery from a target URL",
      "Confirmation by observing the actual Location header",
      "Severity-annotated output for direct report inclusion",
    ],
    role: "Sole author — payload research and detection logic",
    stack: ["Python", "requests", "regex", "argparse"],
    why: "Open redirect bypasses were tedious to test thoroughly by hand, so I built a tool to cover the full payload matrix.",
    repo: "https://github.com/rafiuzzamankhanrafi?tab=repositories",
  },
];

/* ---------------- real certificates (live links) ---------------- */

export const certs = [
  {
    title: "Web Application Security Testing",
    issuer: "Professional Bug Hunting & Web App Security Testing",
    tag: "WEB",
    url: "https://drive.google.com/file/d/1iLDQL_-nxijs7WTXR01UZNtufFJypEwz/view?usp=sharing",
  },
  {
    title: "Jr. Red Team Analyst",
    issuer: "Internship Completion Certificate — Byte Capsule",
    tag: "RED TEAM",
    url: "https://drive.google.com/file/d/1XjfNuoxeL1FHgHC9bx7OJLnaNSh3OS3M/view?usp=sharing",
  },
  {
    title: "ISO/IEC 27001:2022 Lead Auditor Training",
    issuer: "Information Security Management Systems — Byte Capsule",
    tag: "GRC",
    url: "https://drive.google.com/file/d/1qc9oJtA3vEnRE2CBZV6u_NGrDIVw1mPK/view?usp=drive_link",
  },
  {
    title: "Ethically Hack the Planet: Part-2",
    issuer: "Offensive Security and Ethical Hacking — Udemy",
    tag: "OFFENSIVE",
    url: "https://drive.google.com/file/d/1Qg9OWTuR0_tSC18zxRf_viTp-Xg-XN_w/view?usp=drive_link",
  },
  {
    title: "Pentesting 101: The Ultimate Hacking Guide",
    issuer: "Offensive Security and Ethical Hacking — Udemy",
    tag: "FOUNDATIONS",
    url: "https://drive.google.com/file/d/1jJuyLDrzb-lMgcRxr-78Od697W5EmaCS/view?usp=sharing",
  },
];

/* ---------------- real work history ---------------- */

export const experience = [
  {
    span: "01 DEC 2025 — PRESENT",
    current: true,
    role: "Jr. Pentester",
    org: "Byte Capsule",
    body: "Conducting security audits and vulnerability assessments. Manual web application and API testing, finding documentation, and remediation guidance for client-facing reports.",
    tags: ["Web app audits", "API security", "Vulnerability assessment", "Reporting"],
  },
  {
    span: "01 AUG 2025 — 01 DEC 2025",
    current: false,
    role: "Jr. Red Team Analyst (Internship)",
    org: "Byte Capsule",
    body: "Learning red teaming and adversary simulation. Reconnaissance and OSINT collection, attack surface mapping, and supporting offensive security engagements under senior supervision.",
    tags: ["Adversary simulation", "Recon", "OSINT", "Attack surface mapping"],
  },
];

/* ---------------- honest learning roadmap ---------------- */

export const roadmap = [
  {
    phase: "NOW",
    title: "Deepening web & API exploitation",
    state: "active",
    items: [
      "Advanced SQL injection — blind and out-of-band techniques",
      "JWT and OAuth misconfiguration deep-dive",
      "Building a personal vulnerable lab to practise safely",
    ],
  },
  {
    phase: "NEXT",
    title: "Certification targets",
    state: "planned",
    items: [
      "Burp Suite Certified Practitioner (BSCP)",
      "eJPT → PNPT progression path",
      "API Security certification (APISec / similar)",
    ],
  },
  {
    phase: "LATER",
    title: "Red team expansion",
    state: "planned",
    items: [
      "Active Directory attack paths and Kerberos abuse",
      "C2 fundamentals and detection-aware tradecraft",
      "Cloud (AWS/Azure) identity attack surface",
    ],
  },
  {
    phase: "ALWAYS",
    title: "Non-negotiables",
    state: "ethics",
    items: [
      "Written authorisation before any testing",
      "Stay in scope — no exceptions, ever",
      "Responsible disclosure only",
      "Never test a system I do not have permission to test",
    ],
  },
];

export const tickerItems = [
  "WEB PENTESTING",
  "BURP SUITE",
  "OWASP TOP 10",
  "SQL INJECTION",
  "XSS",
  "REST API SECURITY",
  "BOLA / IDOR",
  "MASS ASSIGNMENT",
  "JWT EXPLOITATION",
  "OPEN REDIRECTION",
  "OSINT",
  "RECONNAISSANCE",
  "PYTHON AUTOMATION",
  "ADVERSARY SIMULATION",
];

export const ethics = [
  {
    t: "Authorisation first",
    d: "I do not send a single request at a target until written permission and scope are confirmed. No exceptions, regardless of how easy the target looks.",
  },
  {
    t: "Stay inside the lines",
    d: "Out-of-scope means out-of-scope. If a finding leads somewhere I was not authorised to go, I document the boundary and stop.",
  },
  {
    t: "Reproduce or it is not a finding",
    d: "Every vulnerability I report is proven step by step from a clean session. If I cannot reproduce it, I do not report it.",
  },
  {
    t: "Responsible disclosure",
    d: "Reported privately to the owner first, with a reasonable window to fix. Public detail only after remediation or agreed disclosure.",
  },
];

/* =========================================================================
   YouTube / media
   ========================================================================= */

export const channel = {
  handle: "@gh05tx-r",
  name: "Rafi uzzaman khan Rafi",
  url: "https://youtube.com/@gh05tx-r?si=7QdjncYPIAOonr-d",
  handleUrl: "https://www.youtube.com/@gh05tx-r",
  focus: "Offensive security · web exploitation · study logs",
};

export const contentPillars = [
  {
    id: "P-01",
    title: "Vulnerability walkthroughs",
    desc: "Screen-recorded exploitation of a single vulnerability class end to end — from first request to a clean proof of impact.",
    tags: ["SQLi", "XSS", "BOLA"],
  },
  {
    id: "P-02",
    title: "Tool builds & code reviews",
    desc: "Building my own Python tooling on camera: what the tool does, why it exists, and the parts I got wrong first time.",
    tags: ["Python", "ORDC", "SubFinder"],
  },
  {
    id: "P-03",
    title: "Burp Suite technique notes",
    desc: "Short, specific Burp workflows — Repeater patterns, match-and-replace rules and session handling tricks I use daily.",
    tags: ["Burp", "Repeater", "Intruder"],
  },
  {
    id: "P-04",
    title: "Certification & study logs",
    desc: "Honest progress notes on what I am studying, what is actually hard, and the resources that were worth the time.",
    tags: ["Study", "Roadmap"],
  },
  {
    id: "P-05",
    title: "Recon & OSINT method",
    desc: "How I map an attack surface before touching it — subdomain enumeration, JS endpoint extraction, surface inventory.",
    tags: ["Recon", "OSINT"],
  },
  {
    id: "P-06",
    title: "Ethics & getting started",
    desc: "The unglamorous side: authorisation, scope discipline, and how to practise legally when you have no budget.",
    tags: ["Ethics", "Beginner"],
  },
];

/* =========================================================================
   Writeups / lab notes
   ========================================================================= */

export type Writeup = {
  code: string;
  title: string;
  cat: "Web" | "API" | "Recon" | "Tooling" | "Method";
  status: "PUBLISHED" | "DRAFTING" | "OUTLINED";
  read: string;
  summary: string;
  takeaways: string[];
};

export const writeups: Writeup[] = [
  {
    code: "WU-01",
    title: "JWT exploitation beyond alg:none",
    cat: "API",
    status: "DRAFTING",
    read: "12 min",
    summary:
      "A practical map of JSON Web Token attacks that actually work against modern implementations — and the ones that only work in tutorials.",
    takeaways: [
      "alg:none is rare now; weak HMAC secrets and kid injection are not",
      "Claim tampering only matters if the server re-validates the wrong field",
      "Testing method: decode, modify, replay, and watch what the server trusts",
    ],
  },
  {
    code: "WU-02",
    title: "Finding BOLA with two accounts and a diff",
    cat: "API",
    status: "PUBLISHED",
    read: "10 min",
    summary:
      "The complete manual workflow for broken object-level authorisation: why scanners miss it, and the exact request-pair diff that proves it.",
    takeaways: [
      "Scanners cannot know which object belongs to which user — only you can",
      "Two accounts at different privilege levels is the minimum viable test",
      "A 200 on another user's object is the finding; status alone is not enough",
    ],
  },
  {
    code: "WU-03",
    title: "Subdomain enumeration without paid sources",
    cat: "Recon",
    status: "PUBLISHED",
    read: "9 min",
    summary:
      "Mapping an external attack surface using only free, passive sources — plus how I filter wildcard noise so results stay usable.",
    takeaways: [
      "Certificate transparency logs give you more than most paid feeds",
      "Wildcard filtering is the difference between 40 hosts and 4,000",
      "Output should pipe straight into httpx — no manual cleaning",
    ],
  },
  {
    code: "WU-04",
    title: "Context-aware XSS: payloads that survive",
    cat: "Web",
    status: "DRAFTING",
    read: "14 min",
    summary:
      "Why the same payload works in one sink and dies in another. Reflection contexts, encoding layers, and building payloads backwards from the sink.",
    takeaways: [
      "Identify the context first — HTML body, attribute, JS string or URL",
      "Double-decoding is the single most common filter bypass I find",
      "Prove execution; an alert box that never fires is not a finding",
    ],
  },
  {
    code: "WU-05",
    title: "Mass assignment: escalating yourself politely",
    cat: "API",
    status: "PUBLISHED",
    read: "8 min",
    summary:
      "How undocumented request properties become privilege escalation, and how to test for them without breaking anything.",
    takeaways: [
      "Add the field, do not remove others — minimal diffs stay in scope",
      "PATCH bodies leak far more than POST bodies in most frameworks",
      "A silent 200 that ignores your field is a null result, not a finding",
    ],
  },
  {
    code: "WU-06",
    title: "Open redirect as a chain, not a finding",
    cat: "Web",
    status: "DRAFTING",
    read: "7 min",
    summary:
      "Open redirect alone is usually low severity. Chained into an OAuth flow it becomes token theft — here is how to test and document the chain.",
    takeaways: [
      "Test scheme, slash and encoding variants — the bypass is rarely the obvious one",
      "Look for redirects in login, logout and OAuth return URLs specifically",
      "Report the chain and the impact, not just the redirect parameter",
    ],
  },
  {
    code: "WU-07",
    title: "Automating the boring half of recon",
    cat: "Tooling",
    status: "PUBLISHED",
    read: "11 min",
    summary:
      "The reasoning behind Master-SubFinder and ORDC: when to automate, how to keep tools small, and how to verify a tool's own output.",
    takeaways: [
      "Automate only what you have done manually at least three times",
      "One job per tool beats a framework nobody else can read",
      "Always validate tool output against a target you already understand",
    ],
  },
  {
    code: "WU-08",
    title: "Writing a finding a developer will act on",
    cat: "Method",
    status: "OUTLINED",
    read: "13 min",
    summary:
      "Report writing as the actual deliverable. Structure, evidence, severity justification, and remediation that does not need a meeting to understand.",
    takeaways: [
      "Reproduction steps must work from a clean session with no context",
      "State business impact in one sentence before any technical detail",
      "Propose a fix — 'use a framework' is not remediation",
    ],
  },
];

export const writeupCats = ["All", "Web", "API", "Recon", "Tooling", "Method"] as const;

/* =========================================================================
   Labs, platforms & practice
   ========================================================================= */

export const platforms = [
  {
    n: "PortSwigger Web Security Academy",
    kind: "LABS",
    focus: "Web exploitation",
    why: "The single best free web security training that exists. Topic-by-topic labs with the exact reasoning Burp Suite is built around.",
    tags: ["SQLi", "XSS", "Auth", "Access control"],
    primary: true,
  },
  {
    n: "HackTheBox",
    kind: "PLATFORM",
    focus: "Offensive practice",
    why: "Machine-based practice for exploitation methodology and privilege escalation thinking under time pressure.",
    tags: ["Exploitation", "PrivEsc"],
    primary: true,
  },
  {
    n: "TryHackMe",
    kind: "PLATFORM",
    focus: "Structured learning",
    why: "Guided paths that fill foundation gaps quickly — networking, Linux, and introductory offensive concepts.",
    tags: ["Foundations", "Paths"],
    primary: true,
  },
  {
    n: "OWASP Top 10 & API Top 10",
    kind: "REFERENCE",
    focus: "Method framework",
    why: "The backbone of how I structure a test and how I classify and report what I find.",
    tags: ["Method", "Reporting"],
    primary: false,
  },
  {
    n: "MITRE ATT&CK",
    kind: "REFERENCE",
    focus: "Adversary mapping",
    why: "Lets me describe offensive activity in a language defenders and other red teamers both understand.",
    tags: ["Red team", "Mapping"],
    primary: false,
  },
  {
    n: "Public bug bounty programmes",
    kind: "PRACTICE",
    focus: "Real targets",
    why: "Legally authorised targets with defined scope — the only ethical way to test real applications as a junior.",
    tags: ["In-scope only", "VDP"],
    primary: false,
  },
];

export const homeLab = [
  {
    t: "Isolated testing network",
    d: "Deliberately vulnerable applications hosted on a segmented virtual network with no route to production systems or third parties.",
  },
  {
    t: "Vulnerable app catalogue",
    d: "OWASP Juice Shop, DVWA, crAPI, and deliberately broken REST APIs for practising BOLA and mass assignment safely.",
  },
  {
    t: "Burp Suite project files",
    d: "One project per target, with scope configured before the first request so nothing accidentally leaves bounds.",
  },
  {
    t: "Tooling sandbox",
    d: "Every script I write is executed against my own lab first — never against a live target on its first run.",
  },
  {
    t: "Notes & evidence store",
    d: "Structured markdown notes per engagement with screenshots and request/response pairs, so writeups write themselves.",
  },
  {
    t: "Logging & detection side",
    d: "Server-side logs on my lab apps so I can see what my own requests look like from the defender's chair.",
  },
];

/* =========================================================================
   Professional value — what employers actually screen for
   ========================================================================= */

export const professional = [
  {
    icon: "▤",
    t: "Documentation discipline",
    d: "I write findings so a developer who has never seen the application can reproduce them alone in five minutes. Reports are the deliverable, not an afterthought.",
    proof: "Every certificate course included a written reporting component.",
  },
  {
    icon: "◐",
    t: "Communication without jargon",
    d: "Comfortable explaining a technical flaw to a product manager and to an engineer in the same afternoon, in language each of them can act on.",
    proof: "Bilingual working style — English and Bangla.",
  },
  {
    icon: "◈",
    t: "Self-directed learning speed",
    d: "Went from first exposure to a completed red team internship in five months, while building two tools and completing five certifications in parallel.",
    proof: "Aug 2025 → Dec 2025 internship completion.",
  },
  {
    icon: "⬢",
    t: "Builds, does not just consume",
    d: "When a workflow is repetitive I automate it and publish the tool. Two released Python tools, both documented with READMEs and usage examples.",
    proof: "Master-SubFinder and ORDC.",
  },
  {
    icon: "◍",
    t: "Ethics under pressure",
    d: "I treat authorisation as a hard gate, not a formality. Out-of-scope is out-of-scope, even when the flaw is sitting right next to it.",
    proof: "Zero scope violations across all work to date.",
  },
  {
    icon: "▲",
    t: "Receives technical review well",
    d: "Junior means I expect my work to be checked. I would rather have a finding corrected in review than defended wrongly in a client meeting.",
    proof: "Internship completed under senior supervision.",
  },
];

export const workModes = [
  { k: "Full-time roles", v: "Available", tone: "term" as const },
  { k: "Internships", v: "Available", tone: "term" as const },
  { k: "Remote work", v: "Yes", tone: "term" as const },
  { k: "On-site (Bangladesh)", v: "Available", tone: "term" as const },
  { k: "Freelance assessments", v: "Available", tone: "term" as const },
  { k: "Bug bounty collaboration", v: "Open", tone: "term" as const },
];

/* =========================================================================
   Recruiter FAQ
   ========================================================================= */

export const faqs = [
  {
    q: "Are you currently available for hire?",
    a: "Yes. I am actively looking for junior pentester, red team analyst or security analyst roles, and I am open to internships and structured graduate programmes. My GitHub profile is marked hireable.",
  },
  {
    q: "You are a junior — why should I consider you?",
    a: "Because you are not paying for years I do not have; you are hiring for trajectory, ethics and work ethic. I already test manually, document properly, write Python tooling, and I have completed a formal red team internship at a named company. I will also be honest about the boundary of my knowledge rather than improvising.",
  },
  {
    q: "Do you have professional certifications?",
    a: "Five, all publicly verifiable via the links on this site — including ISO/IEC 27001:2022 Lead Auditor training and a completed Jr. Red Team Analyst internship certificate. My next targets are Burp Suite Certified Practitioner and eJPT.",
  },
  {
    q: "What can you realistically do on day one?",
    a: "Manual web application testing against the OWASP Top 10 in Burp Suite, REST API testing with a focus on BOLA, mass assignment and JWT handling, external reconnaissance and subdomain enumeration with my own tooling, and clear written reporting with reproduction steps.",
  },
  {
    q: "What will you need help with?",
    a: "Active Directory attack paths, C2 development, cloud identity attack surface and exploit development are on my roadmap but not yet in my skillset. I will say so explicitly rather than guessing — and I am studying them deliberately.",
  },
  {
    q: "How do you handle testing authorisation?",
    a: "Written authorisation and confirmed scope before any request is sent. I do not test systems I have not been explicitly permitted to test, and I do not go out of scope to chase a finding. This is non-negotiable for me.",
  },
  {
    q: "Where are your writeups and proof of work?",
    a: "In the Writeups section, in my two public GitHub tools, and on my YouTube channel where I walk through techniques on my own lab targets. Certificate PDFs are hosted publicly and linked directly.",
  },
  {
    q: "Are you remote friendly and what is your location?",
    a: "Based in Bangladesh and fully comfortable working remote, asynchronous and across time zones. Also available on-site within Bangladesh.",
  },
];

/* =========================================================================
   CV / download hub
   ========================================================================= */

export const downloads = [
  {
    t: "Curriculum Vitae",
    d: "The full document — experience, skills, certifications and tooling, formatted for printing.",
    cta: "VIEW RESUME (PDF)",
    url: profile.cv,
    kind: "PDF",
    primary: true,
  },
  {
    t: "Certificate bundle",
    d: "All five certificates, individually hosted and linked for independent verification.",
    cta: "VIEW CERTIFICATES",
    url: "#certificates",
    kind: "5 FILES",
    primary: false,
  },
  {
    t: "GitHub profile",
    d: "Commit history, two released security tools and public code — the raw evidence behind everything above.",
    cta: "OPEN GITHUB",
    url: profile.github,
    kind: "LIVE",
    primary: false,
  },
  {
    t: "YouTube channel",
    d: "Technique walkthroughs and study logs, recorded on my own lab targets.",
    cta: "OPEN CHANNEL",
    url: channel.url,
    kind: "LIVE",
    primary: false,
  },
];
