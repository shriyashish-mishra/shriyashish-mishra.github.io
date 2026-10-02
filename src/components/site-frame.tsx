import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { PlayfulPage } from "@/components/playful-page";

export const RESUME_URL = "https://drive.google.com/file/d/19mbhHCeIVmJ8NG_GDBZqh_mZI0tt4TjD/view?usp=sharing";
export const LINKEDIN_URL = "https://www.linkedin.com/in/shriyashish-mishra/";
export const EMAIL = "shriyashishm@gmail.com";

/* Layout primitives shared by the homepage and the case studies.
   Every row spans the viewport with a hairline rule, while its content sits
   in one centered column framed by vertical guide lines. */

export function Row({ children, className = "", wide = false }: { children: ReactNode; className?: string; wide?: boolean }) {
  return (
    <div className="border-b border-border">
      <div className={`mx-auto border-x border-border ${wide ? "max-w-5xl" : "max-w-3xl"} ${className}`}>{children}</div>
    </div>
  );
}

export function Gap({ wide = false }: { wide?: boolean }) {
  return (
    <div className="hatch h-8 border-b border-border">
      <div className={`mx-auto h-full border-x border-border ${wide ? "max-w-5xl" : "max-w-3xl"}`} />
    </div>
  );
}

export function SectionTitle({ id, n, note, children, wide = false }: { id?: string; n: string; note?: string; children: ReactNode; wide?: boolean }) {
  return (
    <Row wide={wide} className="flex items-baseline gap-3 px-4 py-2">
      <span className="font-mono text-xs text-brand">{n}</span>
      <h2 id={id} className="scroll-mt-16 text-3xl font-semibold tracking-tight">{children}</h2>
      {note && <span className="ml-auto hidden font-mono text-xs text-muted-foreground sm:inline">{note}</span>}
    </Row>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-border bg-muted/60 px-1.5 py-0.5 font-mono text-xs text-muted-foreground">
      {children}
    </span>
  );
}

export function IconBox({ children }: { children: ReactNode }) {
  return (
    <span className="flex size-7 shrink-0 items-center justify-center rounded-md border border-border bg-muted/60 text-muted-foreground transition-colors group-hover:border-brand/40 group-hover:text-brand [&_svg]:size-3.5">
      {children}
    </span>
  );
}

export function SiteHeader({ wide = false, children }: { wide?: boolean; children?: ReactNode }) {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className={`mx-auto flex h-12 items-center justify-between border-x border-border px-4 ${wide ? "max-w-5xl" : "max-w-3xl"}`}>
        <Link to="/" className="font-mono text-sm font-medium tracking-tight">
          SM<span className="text-brand">.</span>
        </Link>
        <nav className="flex items-center gap-5 text-sm text-muted-foreground">
          {children}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}

/* Big hatched wordmark that closes every page. */
export function SiteFooter({ wide = false }: { wide?: boolean }) {
  return (
    <>
      <Row wide={wide} className="@container overflow-hidden px-4 pt-6">
        <div aria-hidden="true" className="wordmark select-none text-[18cqw] font-semibold leading-[0.78] tracking-[-0.05em]">
          Shriyashish
        </div>
      </Row>
      <Row wide={wide} className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 font-mono text-xs text-muted-foreground">
        <span>© 2026 Shriyashish Mishra</span>
        <span className="flex gap-4">
          <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="hover:text-foreground">LinkedIn</a>
          <a href={`mailto:${EMAIL}`} className="hover:text-foreground">Email</a>
          <a href={RESUME_URL} target="_blank" rel="noreferrer" className="hover:text-foreground">Resume</a>
        </span>
      </Row>
      <div className="h-16">
        <div className={`mx-auto h-full border-x border-border ${wide ? "max-w-5xl" : "max-w-3xl"}`} />
      </div>
    </>
  );
}

/* Case studies, in reading order. The homepage list and prev/next links use this. */
export const CASES = [
  { n: "01", to: "/whatsapp-group-engagement", title: "WhatsApp Group Engagement" },
  { n: "02", to: "/spotify-loyalty-engine", title: "Spotify Loyalty Engine" },
  { n: "03", to: "/blusmart-mumbai-expansion", title: "BluSmart Mumbai Expansion" },
] as const;

type CasePath = (typeof CASES)[number]["to"];

export function CaseShell({
  path, title, summary, tags, meta, children,
}: {
  path: CasePath;
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
      <SiteHeader wide>
        <Link to="/" className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground">
          <ArrowLeft className="size-3.5" /> Portfolio
        </Link>
      </SiteHeader>

      {/* Case hero */}
      <Row wide className="relative overflow-hidden">
        <div className="grid-pattern absolute inset-0" />
        <div className="relative flex items-end justify-between gap-6 px-4 pt-10">
          <span className="font-mono text-xs text-muted-foreground">Case study {current.n} / {String(CASES.length).padStart(2, "0")}</span>
          <span aria-hidden="true" className="wordmark -mb-3 text-[clamp(5rem,14vw,9rem)] font-semibold leading-none tracking-[-0.06em]">
            {current.n}
          </span>
        </div>
      </Row>
      <Row wide className="px-4 py-3">
        <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-5xl">{title}</h1>
      </Row>
      <Row wide className="px-4 py-3">
        <p className="max-w-2xl text-pretty text-muted-foreground md:text-lg">{summary}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {tags.map((t) => <Tag key={t}>{t}</Tag>)}
        </div>
      </Row>
      <Row wide className="grid grid-cols-2 font-mono text-sm sm:grid-cols-4">
        {meta.map(([label, value], k) => (
          <div key={label} className={`border-border p-4 ${k % 2 === 0 ? "border-r" : ""} ${k < meta.length - 2 ? "border-b sm:border-b-0" : ""} ${k === 1 ? "sm:border-r" : ""} ${k === 2 ? "sm:border-r" : ""}`}>
            <div className="mb-1 text-[0.65rem] uppercase tracking-widest text-muted-foreground">{label}</div>
            {value}
          </div>
        ))}
      </Row>

      <Gap wide />

      {/* Case content: each <section> becomes a framed row with a hatched gap above it (see .case-frame in styles.css). */}
      <main className="case-frame">{children}</main>

      <Gap wide />

      {/* Prev / next */}
      <Row wide className="grid sm:grid-cols-2">
        <Link to={prev.to} className="row-link group flex flex-col gap-1 border-border p-4 sm:border-r">
          <span className="font-mono text-xs text-muted-foreground">← Previous · {prev.n}</span>
          <span className="flex items-center gap-2 font-medium">
            <ArrowLeft className="size-4 text-muted-foreground transition-transform group-hover:-translate-x-0.5" /> {prev.title}
          </span>
        </Link>
        <Link to={next.to} className="row-link group flex flex-col gap-1 border-t border-border p-4 sm:items-end sm:border-t-0 sm:text-right">
          <span className="font-mono text-xs text-muted-foreground">Next · {next.n} →</span>
          <span className="flex items-center gap-2 font-medium">
            {next.title} <ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
          </span>
        </Link>
      </Row>

      <Gap wide />
      <SiteFooter wide />
    </div>
  );
}
