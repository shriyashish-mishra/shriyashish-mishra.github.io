import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowDown, ArrowRight, ArrowUpRight, Blocks, Dumbbell, Flame, Github, Linkedin, Mail, Network, Plus, ShieldCheck, Swords,
  type LucideIcon,
} from "lucide-react";
import { CountUp } from "@/components/playful-page";
import { ArchitectArt, CookedOrHiredArt, HulkArt, ProductBattleArt, RegImpactArt, WhoBrokeItArt } from "@/components/case-art";
import {
  CASES, Cover, EMAIL, GITHUB_URL, LINKEDIN_URL, RESUME_URL, SectionHeading, SiteFooter, SiteHeader, Tag, container,
} from "@/components/site-frame";
import portrait from "@/assets/shriyashish-playful-original.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shriyashish Mishra · Product Manager" },
      { name: "description", content: "Product manager building AI products, with a background in growth and engagement." },
      { property: "og:title", content: "Shriyashish Mishra · Product Manager" },
      { property: "og:description", content: "Product manager building AI products, with a background in growth and engagement." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Home,
});

const principles = [
  { num: "01", tag: "DISCOVERY", title: "Problem discovery", body: "Understand what users need and what's technically possible before jumping to solutions." },
  { num: "02", tag: "VALIDATION", title: "Experimentation", body: "Test assumptions with MVPs and data before committing to scale." },
  { num: "03", tag: "DELIVERY", title: "Execution", body: "Turn strategy into shipped product, with quality in check and the whole team aligned." },
  { num: "04", tag: "FRONTIER", title: "AI where it helps", body: "Use LLMs and agentic workflows where they clearly improve outcomes or remove manual work." },
];

const metrics = [
  { value: "60%", src: "Eka Care", title: "Increase in activated users", body: "Achieved through streamlined onboarding flows and targeted growth experiments during expansion phases." },
  { value: "40%", src: "Qure.ai", title: "Lift in product adoption", body: "Optimization of core product features and data-driven improvements in the user journey." },
  { value: "20%", src: "Eka Care", title: "Growth in lead conversion", body: "Refining the funnel through API-driven integrations and enhanced engagement strategies." },
  { value: "3+", src: "Since 2023", title: "Years in product management", body: "Of dedicated experience leading cross-functional teams from discovery to global rollout." },
];

const capabilities = [
  { group: "PRODUCT", items: ["Product Strategy", "Product Discovery", "User Research", "Prioritization", "Roadmapping"] },
  { group: "GROWTH", items: ["Funnel Analysis", "KPI Tracking", "Experimentation", "SQL"] },
  { group: "EXECUTION", items: ["Agile Delivery", "Stakeholder Mgmt", "Workflow Design", "API Integrations"] },
  { group: "AI", items: ["AI Product Mgmt", "Prompt Engineering", "Agentic Workflows", "AI Evaluation"] },
  { group: "TOOLS", items: ["Claude & ChatGPT", "Cursor & Figma", "Lovable", "Jira & Postman", "n8n"] },
];

const exploring = ["AI PM", "Agentic Workflows", "Product Strategy", "Growth Systems", "Modern Dev"];

const experience = [
  {
    company: "Meril Life Sciences", role: "Product Manager", start: "02.2026", end: null,
    scope: "Leading AI product development for next-generation clinical and enterprise workflows.",
    responsibilities: ["AI Product Discovery", "Agentic Workflow Design", "User Research", "Clinical AI Strategy"],
    initiatives: [
      "Identified high-impact AI opportunities through structured user research",
      "Designed workflow systems built around agentic AI models",
      "Set up architecture reviews for high-stakes clinical AI use cases",
    ],
    stats: [
      { value: "0 → 1", label: "AI product charter", context: "Building AI-native clinical workflows from first principles" },
      { value: "Enterprise", label: "Clinical scale", context: "Agentic workflow systems across enterprise healthcare" },
      { value: "Regulated", label: "AI evaluation", context: "Architectural evaluation for regulated clinical use cases" },
    ],
  },
  {
    company: "Eka Care", role: "Product Manager", start: "05.2024", end: "12.2025",
    scope: "Owned CRM product and growth charter across healthcare providers and clinical partners.",
    responsibilities: ["CRM Product", "Growth Initiatives", "Enterprise Workflows", "Lead Funnel Optimization"],
    initiatives: [
      "Shipped major platform features end to end",
      "Scaled enterprise workflows for healthcare and clinical partners",
      "Worked with engineering to speed up the CRM and its reporting pipelines",
    ],
    stats: [
      { value: "+60%", label: "Activated users", context: "Increase in user activation through onboarding and engagement" },
      { value: "3,000–4,000", label: "Monthly leads", context: "CRM managing 3,000–4,000 monthly leads at scale" },
      { value: "+20%", label: "Lead conversion", context: "Increase in lead conversion through refined funnels" },
    ],
  },
  {
    company: "Qure.ai", role: "Product Manager", start: "07.2023", end: "05.2024",
    scope: "Drove product adoption for radiology AI across Tier-1 global markets.",
    responsibilities: ["Product Adoption", "Global Rollouts", "Workflow Optimization", "Cross-Functional Alignment"],
    initiatives: [
      "Led global product rollouts across Tier-1 markets",
      "Removed operational bottlenecks by reworking workflows",
      "Aligned technical, clinical, and sales teams on delivery",
    ],
    stats: [
      { value: "+40%", label: "Product adoption", context: "Increase in product adoption across radiology workflows" },
      { value: "20+", label: "Agile sprints", context: "Delivered across 20+ agile sprints with global stakeholders" },
      { value: "Global", label: "Deployments", context: "Screening and diagnostic program deployments worldwide" },
    ],
  },
];

// One mark style for every build: same chip, same line icon, single colour.
const logoIcons: Record<string, LucideIcon> = {
  "Architect 2.0": Blocks,
  "Who Broke It?": Network,
  "Project Hulk": Dumbbell,
  "RegImpact AI": ShieldCheck,
  "ProductBattle AI": Swords,
  "Cooked or Hired": Flame,
};

function Logo({ id }: { id: string }) {
  const Icon = logoIcons[id];
  return (
    <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg border border-border bg-muted/60 text-foreground" aria-hidden="true">
      <Icon className="size-[18px]" strokeWidth={1.75} />
    </span>
  );
}

const aiBuilds: {
  title: string; kind: string; body: string; url: string; cta?: string;
  Art: React.ComponentType<{ className?: string }>;
}[] = [
  { title: "Architect 2.0", kind: "Vibe coding · Platform", body: "A vibe-coding platform with two front doors: prompt an app into existence, or drop into the file tree and terminal and take over. Real auth, database and GitHub import; the agent run is simulated.", url: "https://architect-20-ten.vercel.app", Art: ArchitectArt },
  { title: "Who Broke It?", kind: "Open source · Agents", body: "A coordination layer for teams building with humans and AI coding agents. Keeps a living graph of tasks, owners and contracts in the repo, and shows what an agent's change breaks downstream.", url: "https://github.com/shriyashish-mishra/who-broke-it", Art: WhoBrokeItArt, cta: "View on GitHub" },
  { title: "Project Hulk", kind: "Fitness · AI", body: "An AI fitness app that ties together workouts, nutrition, recovery and progress, and turns them into personalized insights.", url: "https://project-hulk.vercel.app", Art: HulkArt },
  { title: "RegImpact AI", kind: "RegTech · AI", body: "Checks Indian fintech products against RBI's digital lending and KYC/AML rules, with a citation for every finding.", url: "https://reg-impact-ai.vercel.app", Art: RegImpactArt },
  { title: "ProductBattle AI", kind: "LLM · Tooling", body: "Compares products head to head and evaluates how each one is positioned.", url: "https://productbattle.lovable.app/", Art: ProductBattleArt },
  { title: "Cooked or Hired", kind: "Career · Claude skills", body: "A brutally honest hiring simulator. Three panelists (HR, hiring manager, CEO) score your resume for a given company and role, then hand you a fix-it list and likely interview questions.", url: "https://github.com/shriyashish-mishra/Cooked-or-Hired", Art: CookedOrHiredArt, cta: "View on GitHub" },
];

const roleTheme: Record<string, string> = { "Meril Life Sciences": "AI 0→1", "Eka Care": "Growth", "Qure.ai": "Adoption" };
const loopVerbs = ["Discover", "Validate", "Deliver", "Amplify"];

// "MM.YYYY" → months between start and end (or today), rendered like "1y 4m".
function duration(start: string, end: string | null) {
  const [sm, sy] = start.split(".").map(Number);
  const now = new Date();
  const [em, ey] = end ? end.split(".").map(Number) : [now.getMonth() + 1, now.getFullYear()];
  const months = (ey - sy) * 12 + (em - sm) + 1;
  const y = Math.floor(months / 12);
  const m = months % 12;
  return [y && `${y}y`, m && `${m}m`].filter(Boolean).join(" ");
}

// Prerendered HTML is frozen at build time, so a role that is still running
// recomputes its duration in the browser after hydration.
function Duration({ start, end }: { start: string; end: string | null }) {
  const [text, setText] = useState(() => duration(start, end));
  useEffect(() => setText(duration(start, end)), [start, end]);
  return <span>{text}</span>;
}

function Home() {
  const [featured, ...rest] = CASES;
  return (
    <div className="min-h-screen overflow-x-clip text-foreground">
      <SiteHeader>
        <a href="#ai" className="hidden transition-colors hover:text-foreground sm:inline">AI</a>
        <a href="#work" className="hidden transition-colors hover:text-foreground sm:inline">Work</a>
        <a href="#about" className="hidden transition-colors hover:text-foreground sm:inline">About</a>
        <a href="#contact" className="hidden transition-colors hover:text-foreground sm:inline">Contact</a>
      </SiteHeader>

      <main>
        {/* Hero */}
        <section className={`${container} pb-20 pt-16 md:pb-28 md:pt-28`}>
          <div className="flex items-center gap-3">
            <img src={portrait} alt="Shriyashish Mishra" className="size-11 rounded-full border border-border object-cover" />
            <div className="text-sm leading-tight">
              <div className="font-medium">Product Manager</div>
              <div className="text-muted-foreground">now at Meril Life Sciences</div>
            </div>
            <span className="ml-2 hidden items-center gap-2 rounded-full border sm:inline-flex border-border px-3 py-1 text-xs text-muted-foreground">
              <span className="relative flex size-1.5">
                <span className="absolute inset-0 animate-ping rounded-full bg-brand opacity-70 motion-reduce:hidden" />
                <span className="relative size-1.5 rounded-full bg-brand" />
              </span>
              Open to new challenges
            </span>
          </div>

          <h1 className="mt-10 max-w-4xl text-pretty text-[clamp(2.25rem,5.2vw,4rem)] font-semibold leading-[1.05] tracking-[-0.035em]">
            I'm Shriyashish, a product manager.
            <span className="text-muted-foreground"> I build AI products, and I work on growth and engagement.</span>
          </h1>

          <p className="mt-8 max-w-xl text-pretty text-lg text-muted-foreground">
            Right now I lead AI product development for clinical and enterprise workflows at Meril Life Sciences.
            Before that I owned the CRM and growth charter at Eka Care, and drove adoption of radiology AI at Qure.ai.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a href="#ai" className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90">
              See my AI products <ArrowDown className="size-4" />
            </a>
            <a href={RESUME_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-accent">
              Resume <ArrowUpRight className="size-4" />
            </a>
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="inline-flex size-10 items-center justify-center rounded-full border border-border transition-colors hover:bg-accent">
              <Linkedin className="size-4" />
            </a>
            <a href={GITHUB_URL} target="_blank" rel="noreferrer" aria-label="GitHub" className="inline-flex size-10 items-center justify-center rounded-full border border-border transition-colors hover:bg-accent">
              <Github className="size-4" />
            </a>
          </div>
        </section>

        {/* AI builds */}
        <section className={`${container} pb-24`}>
          <SectionHeading id="ai" eyebrow="AI" aside={<span className="font-mono text-xs text-muted-foreground">6 builds · shipped and open source</span>}>
            AI products I've built
          </SectionHeading>
          <div className="grid gap-5 md:grid-cols-3">
            {aiBuilds.map((b) => (
              <a key={b.title} href={b.url} target="_blank" rel="noreferrer" className="card group flex flex-col overflow-hidden rounded-3xl border border-border">
                <Cover Art={b.Art} className="aspect-[16/10]" />
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3">
                    <Logo id={b.title} />
                    <div className="font-mono text-xs text-muted-foreground">{b.kind}</div>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold tracking-tight">{b.title}</h3>
                  <p className="mt-2 text-pretty text-sm text-muted-foreground">{b.body}</p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-medium">
                    {b.cta ?? "Try it live"} <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Selected work */}
        <section className={`${container} pb-24`}>
          <SectionHeading id="work" eyebrow="Work" aside={<span className="font-mono text-xs text-muted-foreground">3 product case studies</span>}>
            Product case studies
          </SectionHeading>

          <div className="grid gap-5 md:grid-cols-2">
            <Link to={featured.to} className="card group grid overflow-hidden rounded-3xl border border-border md:col-span-2 md:grid-cols-[1.35fr_1fr]">
              <Cover Art={featured.Art} className="aspect-[16/10] md:aspect-auto md:min-h-80" />
              <div className="flex flex-col p-6 md:p-8">
                <div className="font-mono text-xs text-muted-foreground">{featured.n} · {featured.kind}</div>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">{featured.title}</h3>
                <p className="mt-3 text-pretty text-muted-foreground">{featured.blurb}</p>
                <div className="mt-6 text-sm"><span className="text-brand">●</span> {featured.highlight}</div>
                <span className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-medium">
                  Read case study <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>

            {rest.map((c) => (
              <Link key={c.to} to={c.to} className="card group flex flex-col overflow-hidden rounded-3xl border border-border">
                <Cover Art={c.Art} className="aspect-[16/10]" />
                <div className="flex flex-1 flex-col p-6">
                  <div className="font-mono text-xs text-muted-foreground">{c.n} · {c.kind}</div>
                  <h3 className="mt-3 text-xl font-semibold tracking-tight">{c.title}</h3>
                  <p className="mt-2 text-pretty text-sm text-muted-foreground">{c.blurb}</p>
                  <div className="mt-auto flex items-center justify-between gap-4 pt-6 text-sm">
                    <span><span className="text-brand">●</span> {c.highlight}</span>
                    <ArrowRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-foreground" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Impact */}
        <section className="border-y border-border bg-muted/40">
          <div className={`${container} grid grid-cols-2 gap-y-10 py-14 md:grid-cols-4`}>
            {metrics.map((m) => (
              <div key={m.title} title={m.body}>
                <div className="text-5xl font-semibold tracking-tight tabular-nums md:text-6xl"><CountUp value={m.value} /></div>
                <div className="mt-2 text-sm">{m.title}</div>
                <div className="mt-1 font-mono text-xs text-muted-foreground">{m.src}</div>
              </div>
            ))}
          </div>
        </section>

        {/* About + experience */}
        <section className={`${container} py-24`}>
          <SectionHeading id="about" eyebrow="About">A bit about how I work</SectionHeading>
          <div className="grid gap-14 md:grid-cols-[1fr_1.15fr]">
            <div>
              <p className="text-pretty text-lg leading-relaxed">
                I like problems that are still fuzzy: working out what users actually do, what the business needs,
                and where new technology genuinely helps.
              </p>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                My approach is simple: understand the problem properly, test assumptions before scaling, and ship with care.
              </p>

              <ol className="mt-10 space-y-5">
                {principles.map((p, i) => (
                  <li key={p.num} className="grid grid-cols-[5.5rem_1fr] gap-4">
                    <span className="pt-0.5 font-mono text-xs text-brand">{loopVerbs[i]}</span>
                    <div>
                      <div className="font-medium">{p.title}</div>
                      <p className="mt-1 text-sm text-muted-foreground">{p.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <div className="mb-4 font-mono text-xs text-muted-foreground">Experience</div>
              <ul className="divide-y divide-border border-y border-border">
                {experience.map((e) => (
                  <li key={e.company}>
                    <details className="group/role">
                      <summary className="flex cursor-pointer list-none items-center gap-4 py-5 [&::-webkit-details-marker]:hidden">
                        <span className="w-24 shrink-0 font-mono text-xs tabular-nums text-muted-foreground">
                          {e.start.split(".")[1]}–{e.end ? e.end.split(".")[1].slice(2) : "now"}
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="font-medium">{e.company}</span>
                          <span className="block text-sm text-muted-foreground">{e.role} · {roleTheme[e.company]} · <Duration start={e.start} end={e.end} /></span>
                        </span>
                        <Plus className="size-4 shrink-0 text-muted-foreground transition-transform group-open/role:rotate-45" />
                      </summary>
                      <div className="pb-6 pl-28 max-sm:pl-0">
                        <p className="text-sm">{e.scope}</p>
                        <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                          {e.initiatives.map((item) => <li key={item} className="bullet">{item}</li>)}
                        </ul>
                        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                          {e.stats.map((st) => (
                            <div key={st.label}>
                              <div className="font-semibold">{st.value}</div>
                              <div className="font-mono text-[0.7rem] text-muted-foreground">{st.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </details>
                  </li>
                ))}
              </ul>

              <div className="mt-10 mb-4 font-mono text-xs text-muted-foreground">Toolkit</div>
              <dl className="space-y-3 text-sm">
                {[...capabilities, { group: "EXPLORING", items: exploring }].map((col) => (
                  <div key={col.group} className="grid grid-cols-[6rem_1fr] gap-4">
                    <dt className="text-muted-foreground">{col.group === "AI" ? "AI" : col.group.charAt(0) + col.group.slice(1).toLowerCase()}</dt>
                    <dd>{col.items.join(", ")}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className={`${container} scroll-mt-24 pb-24`}>
          <div className="relative overflow-hidden rounded-3xl border border-border px-6 py-14 md:px-12 md:py-20">
            <div className="grid-pattern absolute inset-0 opacity-60" />
            <div className="relative">
              <div className="font-mono text-xs text-muted-foreground">Contact</div>
              <h2 className="mt-4 max-w-2xl text-balance text-3xl font-semibold tracking-tight md:text-5xl">
                Hiring, or working on a hard product problem? Let's talk.
              </h2>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-90">
                  <Mail className="size-4" /> {EMAIL}
                </a>
                <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium transition-colors hover:bg-accent">
                  LinkedIn <ArrowUpRight className="size-4" />
                </a>
                <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium transition-colors hover:bg-accent">
                  GitHub <ArrowUpRight className="size-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
