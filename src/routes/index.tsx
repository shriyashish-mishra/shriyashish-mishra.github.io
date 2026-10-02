import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import {
  ArrowRight, ArrowUpRight, Briefcase, Car, Dumbbell, FileText, Linkedin, Mail,
  MessageCircle, Music, Scale, Sparkles, Target,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
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

const RESUME_URL = "https://drive.google.com/file/d/19mbhHCeIVmJ8NG_GDBZqh_mZI0tt4TjD/view?usp=sharing";
const LINKEDIN_URL = "https://www.linkedin.com/in/shriyashish-mishra/";
const EMAIL = "shriyashishm@gmail.com";

const principles = [
  { num: "01", tag: "DISCOVERY", title: "Problem Discovery", body: "Understanding deep user needs and technical constraints before jumping into solutioning." },
  { num: "02", tag: "VALIDATION", title: "Experimentation", body: "Rigorous testing of assumptions through MVPs and data before committing to scale." },
  { num: "03", tag: "DELIVERY", title: "Execution", body: "Turning strategy into shipped products with a focus on quality and cross-functional alignment." },
  { num: "04", tag: "FRONTIER", title: "AI as a Lever", body: "Leveraging LLMs and agentic workflows to amplify outcomes and automate complex tasks." },
];

const metrics = [
  { value: "60%", title: "Increase in Activated Users", body: "Achieved through streamlined onboarding flows and targeted growth experiments during expansion phases." },
  { value: "40%", title: "Product Adoption Lift", body: "Optimization of core product features and data-driven improvements in the user journey." },
  { value: "20%", title: "Lead Conversion Growth", body: "Refining the funnel through API-driven integrations and enhanced engagement strategies." },
  { value: "3+", title: "Years in Product Management", body: "Of dedicated experience leading cross-functional teams from discovery to global rollout." },
];

const productCases = [
  { icon: MessageCircle, tag: "GROWTH / ENGAGEMENT", title: "WhatsApp Group User Engagement", body: "Designing product interventions to increase participation, retention, and meaningful interactions within WhatsApp groups.", to: "/whatsapp-group-engagement" as const },
  { icon: Car, tag: "MOBILITY / GROWTH", title: "BluSmart Mumbai Expansion", body: "Scaling the electric mobility fleet through hyper-local operations and strategy.", to: "/blusmart-mumbai-expansion" as const },
  { icon: Music, tag: "CONSUMER / ENGAGEMENT", title: "Spotify Loyalty Engine", body: "Gamification of user acquisition flows for premium subscriptions.", to: "/spotify-loyalty-engine" as const },
];

const aiCases = [
  { icon: Dumbbell, tag: "FITNESS / AI", title: "Project Hulk", body: "AI-powered fitness operating system that connects workouts, nutrition, recovery, and progress into personalized insights.", url: "https://project-hulk.vercel.app", featured: true },
  { icon: Scale, tag: "REGTECH / AI", title: "RegImpact AI", body: "Evidence-backed AI compliance platform for modern fintech.", url: "https://reg-impact-ai.vercel.app" },
  { icon: Sparkles, tag: "LLM / TOOLING", title: "ProductBattle AI", body: "Competitive analysis engine leveraging AI to evaluate product positioning.", url: "https://productbattle.lovable.app/" },
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

/* Layout primitives: every row spans the viewport with a hairline rule,
   while its content sits in one centered column framed by guide lines. */
function Row({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className="border-b border-border">
      <div className={`mx-auto max-w-3xl border-x border-border ${className}`}>{children}</div>
    </div>
  );
}

function Gap() {
  return (
    <div className="hatch h-8 border-b border-border">
      <div className="mx-auto h-full max-w-3xl border-x border-border" />
    </div>
  );
}

function SectionTitle({ id, children, count }: { id?: string; children: ReactNode; count?: number }) {
  return (
    <Row>
      <h2 id={id} className="scroll-mt-16 px-4 py-2 text-3xl font-semibold tracking-tight">
        {children}
        {count !== undefined && <sup className="ml-1 font-mono text-sm font-normal text-muted-foreground">({count})</sup>}
      </h2>
    </Row>
  );
}

function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-border bg-muted/60 px-1.5 py-0.5 font-mono text-xs text-muted-foreground">
      {children}
    </span>
  );
}

function IconBox({ children }: { children: ReactNode }) {
  return (
    <span className="flex size-7 shrink-0 items-center justify-center rounded-md border border-border bg-muted/60 text-muted-foreground [&_svg]:size-3.5">
      {children}
    </span>
  );
}

const socials = [
  { label: "LinkedIn", href: LINKEDIN_URL, icon: Linkedin },
  { label: "Email", href: `mailto:${EMAIL}`, icon: Mail },
  { label: "Resume", href: RESUME_URL, icon: FileText },
];

function Home() {
  return (
    <div className="min-h-screen text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-12 max-w-3xl items-center justify-between border-x border-border px-4">
          <Link to="/" className="font-mono text-sm font-medium tracking-tight">SM</Link>
          <nav className="flex items-center gap-5 text-sm text-muted-foreground">
            <a href="#experience" className="hidden transition-colors hover:text-foreground sm:inline">Experience</a>
            <a href="#work" className="hidden transition-colors hover:text-foreground sm:inline">Work</a>
            <a href="#contact" className="hidden transition-colors hover:text-foreground sm:inline">Contact</a>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main>
        {/* Profile */}
        <Row>
          <div className="grid-pattern h-28 border-b border-border sm:h-36" />
          <div className="flex">
            <div className="shrink-0 border-r border-border p-1">
              <img
                src={portrait}
                alt="Shriyashish Mishra"
                className="size-28 rounded-full border border-border object-cover sm:size-36"
              />
            </div>
            <div className="flex flex-1 flex-col justify-end">
              <h1 className="border-t border-border px-4 py-1.5 text-3xl font-semibold tracking-tight">Shriyashish Mishra</h1>
              <p className="border-t border-border px-4 py-1.5 font-mono text-sm text-muted-foreground">
                Product Manager · Growth · AI · Execution
              </p>
            </div>
          </div>
        </Row>

        <Gap />

        {/* Socials + overview */}
        <Row className="flex flex-wrap gap-2 p-4">
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border px-3 py-1.5 text-sm transition-colors hover:bg-accent"
            >
              <Icon className="size-4 text-muted-foreground" /> {label}
            </a>
          ))}
        </Row>
        <Row className="grid gap-x-4 gap-y-2.5 p-4 font-mono text-sm sm:grid-cols-2">
          <div className="flex items-center gap-3"><IconBox><Briefcase /></IconBox>Product Manager @ Meril Life Sciences</div>
          <div className="flex items-center gap-3"><IconBox><Mail /></IconBox><a href={`mailto:${EMAIL}`} className="hover:underline underline-offset-4">{EMAIL}</a></div>
          <div className="flex items-center gap-3"><IconBox><Target /></IconBox>Growth · Engagement · AI products</div>
          <div className="flex items-center gap-3">
            <IconBox><span className="size-2 rounded-full bg-brand" /></IconBox>Available for new challenges
          </div>
        </Row>

        <Gap />

        {/* About */}
        <SectionTitle>About</SectionTitle>
        <Row className="p-4">
          <ul className="space-y-2.5 text-[0.95rem] leading-relaxed">
            <li className="bullet">Product Manager building products through strategy, experimentation, execution, and AI.</li>
            <li className="bullet">I enjoy solving ambiguous problems, understanding user behavior, and building products that create measurable impact in fast-paced environments.</li>
            <li className="bullet">I work at the intersection of user behavior, business outcomes, execution, and emerging technologies — across operational challenges, growth systems, and AI-powered experiences.</li>
          </ul>
          <p className="mt-4 font-mono text-sm text-muted-foreground">Understand deeply. Validate rigorously. Execute relentlessly.</p>
        </Row>

        <Gap />

        {/* Impact */}
        <SectionTitle>Impact</SectionTitle>
        <Row className="grid grid-cols-2 sm:grid-cols-4">
          {metrics.map((m, i) => (
            <div
              key={m.title}
              title={m.body}
              className={`p-4 ${i % 2 ? "" : "border-r"} ${i < 2 ? "border-b sm:border-b-0" : ""} ${i === 1 ? "sm:border-r" : ""} border-border`}
            >
              <div className="text-2xl font-semibold tracking-tight tabular-nums">{m.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{m.title}</div>
            </div>
          ))}
        </Row>

        <Gap />

        {/* Experience */}
        <SectionTitle id="experience">Experience</SectionTitle>
        {experience.map((e) => (
          <Row key={e.company} className="p-4">
            <div className="flex items-center gap-3">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-foreground font-mono text-[0.65rem] font-semibold text-background">
                {e.company[0]}
              </span>
              <h3 className="text-lg font-medium">{e.company}</h3>
              {!e.end && <span className="ml-auto size-2 rounded-full bg-brand" title="Current role" />}
            </div>

            <div className="relative mt-3 pl-9 before:absolute before:left-3 before:top-0 before:bottom-1 before:w-px before:bg-border">
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

        {/* Product case studies */}
        <SectionTitle id="work" count={productCases.length}>Case Studies</SectionTitle>
        {productCases.map((c) => {
          const Icon = c.icon;
          return (
            <Row key={c.title}>
              <Link to={c.to} className="group flex items-start gap-4 p-4 transition-colors hover:bg-accent/50">
                <IconBox><Icon /></IconBox>
                <div className="min-w-0 flex-1">
                  <h3 className="font-medium underline-offset-4 group-hover:underline">{c.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
                  <div className="mt-2"><Tag>{c.tag.toLowerCase().replace(" / ", " · ")}</Tag></div>
                </div>
                <ArrowRight className="mt-1 size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Row>
          );
        })}

        <Gap />

        {/* AI projects */}
        <SectionTitle count={aiCases.length}>AI Projects</SectionTitle>
        {aiCases.map((c) => {
          const Icon = c.icon;
          return (
            <Row key={c.title}>
              <a href={c.url} target="_blank" rel="noreferrer" className="group flex items-start gap-4 p-4 transition-colors hover:bg-accent/50">
                <IconBox><Icon /></IconBox>
                <div className="min-w-0 flex-1">
                  <h3 className="flex items-center gap-2 font-medium">
                    <span className="underline-offset-4 group-hover:underline">{c.title}</span>
                    {c.featured && <Tag>Featured</Tag>}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
                  <div className="mt-2"><Tag>{c.tag.toLowerCase().replace(" / ", " · ")}</Tag></div>
                </div>
                <ArrowUpRight className="mt-1 size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </Row>
          );
        })}

        <Gap />

        {/* Principles */}
        <SectionTitle>Principles</SectionTitle>
        {principles.map((p) => (
          <Row key={p.num} className="grid sm:grid-cols-[14rem_1fr]">
            <div className="flex items-baseline gap-2 border-border px-4 pt-3 sm:border-r sm:py-3">
              <span className="font-mono text-sm text-muted-foreground">{p.num}</span>
              <span className="font-medium">{p.title}</span>
            </div>
            <p className="px-4 pb-3 pt-1 text-sm leading-relaxed text-muted-foreground sm:py-3">{p.body}</p>
          </Row>
        ))}

        <Gap />

        {/* Capabilities */}
        <SectionTitle>Stack</SectionTitle>
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

        {/* Contact / footer */}
        <SectionTitle id="contact">Contact</SectionTitle>
        <Row className="p-4">
          <p className="text-[0.95rem] leading-relaxed">
            I'm always interested in product conversations, ambitious teams, and difficult problems worth solving.
          </p>
        </Row>
        <Row className="grid grid-cols-2 font-mono text-sm sm:grid-cols-4">
          {[
            ["Email", <a key="e" href={`mailto:${EMAIL}`} className="underline underline-offset-4">Write to me</a>],
            ["LinkedIn", <a key="l" href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="underline underline-offset-4">shriyashish-mishra</a>],
            ["Resume", <a key="r" href={RESUME_URL} target="_blank" rel="noreferrer" className="underline underline-offset-4">View PDF</a>],
            ["Status", <span key="s" className="inline-flex items-center gap-2"><span className="size-2 rounded-full bg-brand" />Open to roles</span>],
          ].map(([label, value], i) => (
            <div key={label as string} className={`p-4 border-border ${i % 2 ? "" : "border-r"} ${i < 2 ? "border-b sm:border-b-0" : ""} ${i === 1 ? "sm:border-r" : ""} ${i === 2 ? "sm:border-r" : ""}`}>
              <div className="mb-1 text-[0.65rem] uppercase tracking-widest text-muted-foreground">{label}</div>
              {value}
            </div>
          ))}
        </Row>
        <Row className="px-4 py-3 font-mono text-xs text-muted-foreground">
          © 2026 Shriyashish Mishra
        </Row>
        <div className="h-16">
          <div className="mx-auto h-full max-w-3xl border-x border-border" />
        </div>
      </main>
    </div>
  );
}
