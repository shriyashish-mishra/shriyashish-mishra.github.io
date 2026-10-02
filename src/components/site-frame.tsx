import type { ComponentType, ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { PlayfulPage } from "@/components/playful-page";
import { BluSmartArt, SpotifyArt, WhatsAppArt } from "@/components/case-art";

export const RESUME_URL = "https://drive.google.com/file/d/19mbhHCeIVmJ8NG_GDBZqh_mZI0tt4TjD/view?usp=sharing";
export const LINKEDIN_URL = "https://www.linkedin.com/in/shriyashish-mishra/";
export const GITHUB_URL = "https://github.com/shriyashish-mishra";
export const EMAIL = "shriyashishm@gmail.com";

/* Case studies, in reading order. The homepage cards, case heroes and
   prev/next links all read from here. */
export const CASES: {
  n: string;
  to: "/whatsapp-group-engagement" | "/spotify-loyalty-engine" | "/blusmart-mumbai-expansion";
  title: string;
  kind: string;
  blurb: string;
  highlight: string;
  question: string;
  concepts: string[];
  steps: string[];
  Art: ComponentType<{ className?: string }>;
}[] = [
  {
    n: "01", to: "/whatsapp-group-engagement", title: "Keeping WhatsApp groups active", kind: "Engagement",
    blurb: "Why WhatsApp groups go quiet over time, and four features that could bring people back without complicating the app.",
    highlight: "North star: weekly active group participants",
    question: "Why do active groups go quiet, and what brings people back?",
    concepts: ["User research", "Personas", "Competitor analysis", "Feature prioritization", "North-star metric", "Rollout plan"],
    steps: ["Problem", "Research", "4 ideas", "Prioritize", "Metric", "Risks"],
    Art: WhatsAppArt,
  },
  {
    n: "02", to: "/spotify-loyalty-engine", title: "A loyalty program for Spotify", kind: "Consumer growth",
    blurb: "Rewarding listening with points and short Premium trials, so free users get a real reason to upgrade.",
    highlight: "+8% listening hours · +2pp Premium (modeled)",
    question: "How do you give free users a real reason to upgrade?",
    concepts: ["Problem framing", "Personas", "Opportunity scoring", "Gamification", "Impact modeling", "Success metrics"],
    steps: ["Problems", "Personas", "Score options", "Recommend", "Design", "Impact"],
    Art: SpotifyArt,
  },
  {
    n: "03", to: "/blusmart-mumbai-expansion", title: "Launching BluSmart in Mumbai", kind: "Go-to-market",
    blurb: "A launch plan for a 150-car EV fleet: which areas to start in, how many drivers and chargers, and how to win riders.",
    highlight: "150 EVs · ~12 trips per car per day",
    question: "Where do you launch 150 EVs, and what has to be true to keep them busy?",
    concepts: ["Go-to-market", "Capacity planning", "Supply planning", "Launch sequencing", "Rider acquisition", "Risk"],
    steps: ["Assumptions", "Capacity", "Drivers & hubs", "Where to launch", "Riders", "Risks"],
    Art: BluSmartArt,
  },
];

export const container = "mx-auto w-full max-w-5xl px-6";

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground">
      {children}
    </span>
  );
}

export function SectionHeading({ id, eyebrow, children, aside }: { id?: string; eyebrow: string; children: ReactNode; aside?: ReactNode }) {
  return (
    <div id={id} className="mb-10 flex scroll-mt-24 flex-wrap items-end justify-between gap-4 border-t border-border pt-6">
      <div>
        <div className="mb-2 font-mono text-xs text-muted-foreground">{eyebrow}</div>
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">{children}</h2>
      </div>
      {aside}
    </div>
  );
}

export function SiteHeader({ children }: { children?: ReactNode }) {
  return (
    <header className="sticky top-0 z-50 bg-background/75 backdrop-blur-md">
      <div className={`${container} flex h-16 items-center justify-between`}>
        <Link to="/" className="text-sm font-semibold tracking-tight">
          Shriyashish Mishra<span className="text-brand">.</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm text-muted-foreground">
          {children}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className={`${container} pb-10`}>
      <div className="@container overflow-hidden border-t border-border pt-10">
        <div aria-hidden="true" className="wordmark select-none text-[18cqw] font-semibold leading-[0.8] tracking-[-0.05em]">
          Shriyashish
        </div>
      </div>
      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-sm text-muted-foreground">
        <span>© 2026 Shriyashish Mishra</span>
        <span className="flex gap-5">
          <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="hover:text-foreground">LinkedIn</a>
          <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="hover:text-foreground">GitHub</a>
          <a href={`mailto:${EMAIL}`} className="hover:text-foreground">Email</a>
          <a href={RESUME_URL} target="_blank" rel="noreferrer" className="hover:text-foreground">Resume</a>
        </span>
      </div>
    </footer>
  );
}

/* Cover panel used on homepage cards and case heroes. */
export function Cover({ Art, className = "" }: { Art: ComponentType<{ className?: string }>; className?: string }) {
  return (
    <div className={`cover relative overflow-hidden bg-muted/50 ${className}`}>
      <div className="grid-pattern absolute inset-0 opacity-70" />
      <Art className="relative" />
    </div>
  );
}

export function CaseShell({
  path, title, summary, tags, meta, children,
}: {
  path: (typeof CASES)[number]["to"];
  title: string;
  summary: string;
  tags: string[];
  meta: [string, string][];
  children: ReactNode;
}) {
  const i = CASES.findIndex((c) => c.to === path);
  const current = CASES[i];
  const prev = CASES[(i + CASES.length - 1) % CASES.length];
  const next = CASES[(i + 1) % CASES.length];

  return (
    <div className="min-h-screen overflow-x-clip text-foreground">
      <PlayfulPage />
      <SiteHeader>
        <Link to="/" hash="work" className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground">
          <ArrowLeft className="size-3.5" /> All work
        </Link>
      </SiteHeader>

      <div className={`${container} pt-12 md:pt-20`}>
        <div className="flex items-center gap-3 font-mono text-xs text-muted-foreground">
          <span className="text-brand">Case study {current.n}</span>
          <span className="h-px w-8 bg-border" />
          <span>{current.kind}</span>
        </div>
        <h1 className="mt-5 max-w-3xl text-balance text-4xl font-semibold tracking-tight md:text-6xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-pretty text-lg text-muted-foreground">{summary}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {tags.map((t) => <Tag key={t}>{t}</Tag>)}
        </div>

        <Cover Art={current.Art} className="mt-12 aspect-[16/9] rounded-2xl border border-border md:aspect-[21/9]" />

        <dl className="mt-8 grid grid-cols-2 gap-6 border-b border-border pb-8 sm:grid-cols-4">
          {meta.map(([label, value]) => (
            <div key={label}>
              <dt className="font-mono text-xs text-muted-foreground">{label}</dt>
              <dd className="mt-1 font-medium">{value}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Long-form content; spacing and dividers come from .case-frame in styles.css */}
      <main className="case-frame">{children}</main>

      <nav className={`${container} grid gap-4 py-16 sm:grid-cols-2`}>
        {[{ c: prev, label: "Previous" }, { c: next, label: "Next" }].map(({ c, label }) => (
          <Link key={label} to={c.to} className="card group flex items-center gap-4 rounded-2xl border border-border p-3">
            <Cover Art={c.Art} className="aspect-[4/3] w-28 shrink-0 rounded-xl" />
            <div className="min-w-0">
              <div className="font-mono text-xs text-muted-foreground">{label} · {c.n}</div>
              <div className="mt-1 font-medium">{c.title}</div>
            </div>
            <ArrowRight className="ml-auto mr-2 size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-brand" />
          </Link>
        ))}
      </nav>

      <SiteFooter />
    </div>
  );
}
