import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight, ArrowUpRight, Briefcase, Car, Dumbbell, FileText, Linkedin, Mail,
  MessageCircle, Music, Scale, Sparkles, Target,
} from "lucide-react";
import { CountUp } from "@/components/playful-page";
import {
  CASES, EMAIL, Gap, IconBox, LINKEDIN_URL, RESUME_URL, Row, SectionTitle, SiteFooter, SiteHeader, Tag,
} from "@/components/site-frame";
import portrait from "@/assets/shriyashish-playful-original.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shriyashish Mishra — Product Manager Portfolio" },
      { name: "description", content: "Product Manager building products through strategy, experimentation, execution, and AI." },
      { property: "og:title", content: "Shriyashish Mishra — Portfolio" },
      { property: "og:description", content: "Product Manager building products through strategy, experimentation, execution, and AI." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Home,
});

const principles = [
  { num: "01", tag: "DISCOVERY", title: "Problem Discovery", body: "Understanding deep user needs and technical constraints before jumping into solutioning." },
  { num: "02", tag: "VALIDATION", title: "Experimentation", body: "Rigorous testing of assumptions through MVPs and data before committing to scale." },
  { num: "03", tag: "DELIVERY", title: "Execution", body: "Turning strategy into shipped products with a focus on quality and cross-functional alignment." },
  { num: "04", tag: "FRONTIER", title: "AI as a Lever", body: "Leveraging LLMs and agentic workflows to amplify outcomes and automate complex tasks." },
];

const metrics = [
  { value: "60%", src: "Eka Care", title: "Increase in Activated Users", body: "Achieved through streamlined onboarding flows and targeted growth experiments during expansion phases." },
  { value: "40%", src: "Qure.ai", title: "Product Adoption Lift", body: "Optimization of core product features and data-driven improvements in the user journey." },
  { value: "20%", src: "Eka Care", title: "Lead Conversion Growth", body: "Refining the funnel through API-driven integrations and enhanced engagement strategies." },
  { value: "3+", src: "Since 2023", title: "Years in Product Management", body: "Of dedicated experience leading cross-functional teams from discovery to global rollout." },
];

const productCases = [
  { icon: MessageCircle, tag: "growth · engagement", title: "WhatsApp Group User Engagement", body: "Designing product interventions to increase participation, retention, and meaningful interactions within WhatsApp groups.", to: "/whatsapp-group-engagement" as const },
  { icon: Music, tag: "consumer · engagement", title: "Spotify Loyalty Engine", body: "Gamification of user acquisition flows for premium subscriptions.", to: "/spotify-loyalty-engine" as const },
  { icon: Car, tag: "mobility · growth", title: "BluSmart Mumbai Expansion", body: "Scaling the electric mobility fleet through hyper-local operations and strategy.", to: "/blusmart-mumbai-expansion" as const },
];

const aiCases = [
  { icon: Dumbbell, tag: "fitness · ai", title: "Project Hulk", body: "AI-powered fitness operating system that connects workouts, nutrition, recovery, and progress into personalized insights.", url: "https://project-hulk.vercel.app", featured: true },
  { icon: Scale, tag: "regtech · ai", title: "RegImpact AI", body: "Evidence-backed AI compliance platform for modern fintech.", url: "https://reg-impact-ai.vercel.app" },
  { icon: Sparkles, tag: "llm · tooling", title: "ProductBattle AI", body: "Competitive analysis engine leveraging AI to evaluate product positioning.", url: "https://productbattle.lovable.app/" },
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
      "Defined high-impact AI opportunities through structured user research",
      "Designed complex workflow systems integrated with agentic AI models",
      "Established architectural evaluation for mission-critical AI use cases",
    ],
    stats: [
      { value: "0 → 1", label: "AI Product Charter", context: "Building AI-native clinical workflows from first principles" },
      { value: "Enterprise", label: "Clinical Scale", context: "Agentic workflow systems across enterprise healthcare" },
      { value: "Mission-Critical", label: "AI Evaluation", context: "Architectural evaluation for regulated clinical use cases" },
    ],
  },
  {
    company: "Eka Care", role: "Product Manager", start: "05.2024", end: "12.2025",
    scope: "Owned CRM product and growth charter across healthcare providers and clinical partners.",
    responsibilities: ["CRM Product", "Growth Initiatives", "Enterprise Workflows", "Lead Funnel Optimization"],
    initiatives: [
      "Shipped major platform features across the full product lifecycle",
      "Scaled enterprise workflows for healthcare and clinical partners",
      "Optimized CRM latency and reporting pipelines with engineering",
    ],
    stats: [
      { value: "+60%", label: "Activated Users", context: "Increase in user activation through onboarding and engagement" },
      { value: "3,000–4,000", label: "Monthly Leads", context: "CRM managing 3,000–4,000 monthly leads at scale" },
      { value: "+20%", label: "Lead Conversion", context: "Increase in lead conversion through refined funnels" },
    ],
  },
  {
    company: "Qure.ai", role: "Product Manager", start: "07.2023", end: "05.2024",
    scope: "Drove product adoption for radiology AI across Tier-1 global markets.",
    responsibilities: ["Product Adoption", "Global Rollouts", "Workflow Optimization", "Cross-Functional Alignment"],
    initiatives: [
      "Led global product rollouts across Tier-1 markets",
      "Reduced operational bottlenecks through workflow optimization",
      "Aligned technical, clinical, and sales teams on delivery",
    ],
    stats: [
      { value: "+40%", label: "Product Adoption", context: "Increase in product adoption across radiology workflows" },
      { value: "20+", label: "Agile Sprints", context: "Delivered across 20+ agile sprints with global stakeholders" },
      { value: "Global", label: "Deployments", context: "Screening and diagnostic program deployments worldwide" },
    ],
  },
];

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

/* Fig. 1 — scope over time. Roles are spaced evenly (not by date) so the
   prerendered SVG never goes stale. */
const arc = [
  { company: "Qure.ai", theme: "Adoption", year: "2023", x: 110, y: 118 },
  { company: "Eka Care", theme: "Growth", year: "2024", x: 350, y: 84 },
  { company: "Meril", theme: "AI 0→1", year: "2026", x: 590, y: 48 },
];

function CareerArc() {
  const pts = [{ x: 24, y: 140 }, ...arc, { x: 744, y: 40 }];
  const d = pts.reduce((acc, p, i) => {
    if (i === 0) return `M ${p.x} ${p.y}`;
    const a = pts[i - 1];
    const mid = (p.x - a.x) / 2;
    return `${acc} C ${a.x + mid} ${a.y}, ${p.x - mid} ${p.y}, ${p.x} ${p.y}`;
  }, "");
  return (
    <figure className="relative hidden h-44 sm:block">
      <svg viewBox="0 0 768 176" className="absolute inset-0 size-full" role="img" aria-label="Career arc: Qure.ai (adoption, 2023), Eka Care (growth, 2024), Meril Life Sciences (AI zero to one, 2026)">
        <defs>
          <pattern id="arc-hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="6" stroke="currentColor" strokeWidth="1" className="text-muted-foreground" />
          </pattern>
        </defs>
        <path d={`${d} L 744 176 L 24 176 Z`} fill="url(#arc-hatch)" className="arc-node" style={{ animationDelay: "1.1s", fillOpacity: 0.35 }} />
        <path d={d} pathLength={1} fill="none" stroke="currentColor" strokeWidth="1.25" className="arc-path text-foreground" vectorEffect="non-scaling-stroke" />
        {arc.map((p, i) => {
          const current = i === arc.length - 1;
          return (
            <g key={p.company} className="arc-node" style={{ animationDelay: `${0.5 + i * 0.4}s` }}>
              {current && <circle cx={p.x} cy={p.y} r="4" className="arc-pulse fill-brand" />}
              <circle cx={p.x} cy={p.y} r="4" className={current ? "fill-brand" : "fill-background stroke-foreground"} strokeWidth="1.25" />
              <text x={p.x} y={p.y - 14} textAnchor="middle" className="fill-foreground font-mono text-[11px]">{p.company}</text>
              <text x={p.x} y={p.y + 22} textAnchor="middle" className="fill-muted-foreground font-mono text-[10px]">{p.theme} · {p.year}</text>
            </g>
          );
        })}
        <text x="744" y="28" textAnchor="end" className="arc-node fill-muted-foreground font-mono text-[10px]" style={{ animationDelay: "1.6s" }}>now →</text>
      </svg>
      <figcaption className="absolute bottom-2 left-4 font-mono text-[0.65rem] text-muted-foreground">
        Fig. 1 — Scope over time
      </figcaption>
    </figure>
  );
}

const socials = [
  { label: "LinkedIn", href: LINKEDIN_URL, icon: Linkedin },
  { label: "Email", href: `mailto:${EMAIL}`, icon: Mail },
  { label: "Resume", href: RESUME_URL, icon: FileText },
];

const loopVerbs = ["Discover", "Validate", "Deliver", "Amplify"];

function Home() {
  return (
    <div className="min-h-screen overflow-x-clip text-foreground">
      <SiteHeader>
        <a href="#experience" className="hidden transition-colors hover:text-foreground sm:inline">Experience</a>
        <a href="#work" className="hidden transition-colors hover:text-foreground sm:inline">Work</a>
        <a href="#contact" className="hidden transition-colors hover:text-foreground sm:inline">Contact</a>
      </SiteHeader>

      <main>
        {/* Profile */}
        <Row className="relative">
          <div className="grid-pattern absolute inset-x-0 top-0 h-44" />
          <div className="relative h-16 sm:hidden" />
          <CareerArc />
          <div className="relative flex border-t border-border">
            <div className="shrink-0 border-r border-border p-1">
              <img src={portrait} alt="Shriyashish Mishra" className="size-28 rounded-full border border-border object-cover sm:size-32" />
            </div>
            <div className="flex flex-1 flex-col justify-end">
              <h1 className="px-4 py-1.5 text-3xl font-semibold tracking-tight">Shriyashish Mishra</h1>
              <p className="border-t border-border px-4 py-1.5 font-mono text-sm text-muted-foreground">
                Product Manager · Growth · AI · Execution
              </p>
            </div>
          </div>
        </Row>

        <Gap />

        <Row className="flex flex-wrap gap-2 p-4">
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-md border border-border px-3 py-1.5 text-sm transition-colors hover:border-brand/40 hover:bg-accent"
            >
              <Icon className="size-4 text-muted-foreground transition-colors group-hover:text-brand" /> {label}
            </a>
          ))}
        </Row>
        <Row className="grid gap-x-4 gap-y-2.5 p-4 font-mono text-sm sm:grid-cols-2">
          <div className="flex items-center gap-3"><IconBox><Briefcase /></IconBox>Product Manager @ Meril Life Sciences</div>
          <div className="flex items-center gap-3"><IconBox><Mail /></IconBox><a href={`mailto:${EMAIL}`} className="underline-offset-4 hover:underline">{EMAIL}</a></div>
          <div className="flex items-center gap-3"><IconBox><Target /></IconBox>Growth · Engagement · AI products</div>
          <div className="flex items-center gap-3">
            <IconBox><span className="relative flex size-2"><span className="absolute inset-0 animate-ping rounded-full bg-brand opacity-60 motion-reduce:hidden" /><span className="relative size-2 rounded-full bg-brand" /></span></IconBox>
            Available for new challenges
          </div>
        </Row>

        <Gap />

        {/* About */}
        <SectionTitle n="01" note="tl;dr">About</SectionTitle>
        <Row className="p-4">
          <ul className="space-y-2.5 text-[0.95rem] leading-relaxed">
            <li className="bullet">Product Manager building products through strategy, experimentation, execution, and AI.</li>
            <li className="bullet">I enjoy solving ambiguous problems, understanding user behavior, and building products that create measurable impact in fast-paced environments.</li>
            <li className="bullet">I work at the intersection of user behavior, business outcomes, execution, and emerging technologies — across operational challenges, growth systems, and AI-powered experiences.</li>
          </ul>
        </Row>
        <Row className="flex flex-wrap gap-x-6 gap-y-1 px-4 py-3 font-mono text-sm">
          <span>Understand deeply.</span>
          <span className="text-muted-foreground">Validate rigorously.</span>
          <span className="text-muted-foreground/70">Execute relentlessly.</span>
        </Row>

        <Gap />

        {/* Impact */}
        <SectionTitle n="02" note="measured outcomes">Impact</SectionTitle>
        <Row className="grid grid-cols-2 sm:grid-cols-4">
          {metrics.map((m, i) => (
            <div
              key={m.title}
              title={m.body}
              className={`flex flex-col p-4 ${i % 2 ? "" : "border-r"} ${i < 2 ? "border-b sm:border-b-0" : ""} ${i === 1 ? "sm:border-r" : ""} border-border`}
            >
              <div className="text-3xl font-semibold tracking-tight tabular-nums"><CountUp value={m.value} /></div>
              <div className="mt-1 text-sm leading-snug">{m.title}</div>
              <div className="mt-auto pt-3 font-mono text-[0.7rem] text-muted-foreground">@ {m.src}</div>
            </div>
          ))}
        </Row>

        <Gap />

        {/* Experience */}
        <SectionTitle id="experience" n="03" note="3 roles · 2023 → now">Experience</SectionTitle>
        {experience.map((e) => (
          <Row key={e.company} className="p-4">
            <div className="flex items-center gap-3">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-foreground font-mono text-[0.65rem] font-semibold text-background">
                {e.company[0]}
              </span>
              <h3 className="text-lg font-medium">{e.company}</h3>
              {!e.end && <span className="ml-auto inline-flex items-center gap-1.5 font-mono text-xs text-brand"><span className="size-1.5 rounded-full bg-brand" />current</span>}
            </div>

            <div className="relative mt-3 pl-9 before:absolute before:bottom-1 before:left-3 before:top-0 before:w-px before:bg-border">
              <div className="flex items-start gap-3">
                <span className="absolute left-0"><IconBox><Briefcase /></IconBox></span>
                <div>
                  <div className="font-medium">{e.role}</div>
                  <div className="mt-0.5 flex flex-wrap items-center gap-x-2 text-sm text-muted-foreground">
                    <span className="tabular-nums">{e.start} — {e.end ?? "Present"}</span>
                    <span className="h-3.5 w-px bg-border" />
                    <Duration start={e.start} end={e.end} />
                  </div>
                </div>
              </div>

              <p className="mt-4 text-[0.95rem] leading-relaxed">{e.scope}</p>
              <ul className="mt-3 space-y-1.5 text-[0.95rem] leading-relaxed">
                {e.initiatives.map((item) => <li key={item} className="bullet">{item}</li>)}
              </ul>

              <div className="mt-4 grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-3">
                {e.stats.map((st) => (
                  <div key={st.label} className="bg-background p-3">
                    <div className="font-semibold tracking-tight">{st.value}</div>
                    <div className="mt-0.5 text-xs text-muted-foreground">{st.context}</div>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {e.responsibilities.map((r) => <Tag key={r}>{r}</Tag>)}
              </div>
            </div>
          </Row>
        ))}

        <Gap />

        {/* Case studies */}
        <SectionTitle id="work" n="04" note="long reads">Case Studies</SectionTitle>
        {productCases.map((c, i) => {
          const Icon = c.icon;
          return (
            <Row key={c.title}>
              <Link to={c.to} className="row-link group flex items-start gap-4 p-4">
                <span className="w-5 pt-1 font-mono text-xs text-muted-foreground">{CASES[i].n}</span>
                <IconBox><Icon /></IconBox>
                <div className="min-w-0 flex-1">
                  <h3 className="font-medium">{c.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
                  <div className="mt-2"><Tag>{c.tag}</Tag></div>
                </div>
                <ArrowRight className="mt-1 size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-brand" />
              </Link>
            </Row>
          );
        })}

        <Gap />

        {/* AI projects */}
        <SectionTitle n="05" note="built & shipped">AI Projects</SectionTitle>
        {aiCases.map((c) => {
          const Icon = c.icon;
          return (
            <Row key={c.title}>
              <a href={c.url} target="_blank" rel="noreferrer" className="row-link group flex items-start gap-4 p-4">
                <IconBox><Icon /></IconBox>
                <div className="min-w-0 flex-1">
                  <h3 className="flex items-center gap-2 font-medium">
                    {c.title}
                    {c.featured && <span className="rounded-md bg-foreground px-1.5 py-0.5 font-mono text-[0.65rem] text-background">featured</span>}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
                  <div className="mt-2"><Tag>{c.tag}</Tag></div>
                </div>
                <ArrowUpRight className="mt-1 size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
              </a>
            </Row>
          );
        })}

        <Gap />

        {/* Principles as a loop */}
        <SectionTitle n="06" note="how I work">Principles</SectionTitle>
        <Row className="grid sm:grid-cols-4">
          {principles.map((p, i) => (
            <div key={p.num} className={`group relative border-border p-4 ${i < 3 ? "border-b sm:border-b-0 sm:border-r" : ""}`}>
              <div className="flex items-center justify-between font-mono text-xs text-muted-foreground">
                <span>{p.num}</span>
                <span className="text-brand">{loopVerbs[i]}</span>
              </div>
              <div className="mt-3 font-medium">{p.title}</div>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              {i < 3 && (
                <span className="absolute -right-2.5 top-4 z-10 hidden size-5 items-center justify-center rounded-full border border-border bg-background text-muted-foreground sm:flex">
                  <ArrowRight className="size-3" />
                </span>
              )}
            </div>
          ))}
        </Row>
        <Row className="relative h-10 px-4">
          <svg className="absolute inset-x-4 top-0 h-6 w-[calc(100%-2rem)]" viewBox="0 0 100 24" preserveAspectRatio="none" aria-hidden="true">
            <path d="M 88 0 V 14 H 12 V 0" fill="none" stroke="currentColor" strokeDasharray="3 3" vectorEffect="non-scaling-stroke" className="text-muted-foreground/60" />
          </svg>
          <span className="absolute left-1/2 top-[0.55rem] -translate-x-1/2 bg-background px-2 font-mono text-[0.7rem] text-muted-foreground">
            ↺ every launch feeds the next discovery
          </span>
        </Row>

        <Gap />

        {/* Stack */}
        <SectionTitle n="07" note="toolkit">Stack</SectionTitle>
        {[...capabilities, { group: "EXPLORING", items: exploring }].map((col, i) => (
          <Row key={col.group} className="grid sm:grid-cols-[14rem_1fr]">
            <div className="flex items-baseline gap-2 border-border px-4 pt-3 sm:border-r sm:py-3">
              <span className="font-mono text-sm text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-sm">{col.group === "AI" ? "AI" : col.group.charAt(0) + col.group.slice(1).toLowerCase()}</span>
            </div>
            <div className="flex flex-wrap gap-1.5 px-4 pb-3 pt-2 sm:py-3">
              {col.items.map((item) => <Tag key={item}>{item}</Tag>)}
            </div>
          </Row>
        ))}

        <Gap />

        {/* Contact */}
        <SectionTitle id="contact" n="08" note="say hello">Contact</SectionTitle>
        <Row className="p-4">
          <p className="text-xl font-medium leading-snug tracking-tight">
            I'm always interested in product conversations, ambitious teams, and{" "}
            <span className="text-muted-foreground">difficult problems worth solving.</span>
          </p>
          <a
            href={`mailto:${EMAIL}`}
            className="group mt-5 inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            <Mail className="size-4" /> {EMAIL}
            <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </Row>

        <Gap />
        <SiteFooter />
      </main>
    </div>
  );
}
