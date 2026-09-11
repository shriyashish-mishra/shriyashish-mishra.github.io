import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, Car, Music, Sparkles, Scale, Dumbbell } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shriyashish Mishra — Product Manager Portfolio" },
      { name: "description", content: "Product Manager building products through strategy, experimentation, execution, and AI." },
      { property: "og:title", content: "Shriyashish Mishra — Portfolio" },
      { property: "og:description", content: "Product Manager building products through strategy, experimentation, execution, and AI." },
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
    company: "Meril Life Sciences", role: "Product Manager", period: "FEB 2026 — PRESENT",
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
    company: "Eka Care", role: "Product Manager", period: "MAY 2024 — DEC 2025",
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
    company: "Qure.ai", role: "Product Manager", period: "JULY 2023 — MAY 2024",
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

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <div className="eyebrow mb-6">{children}</div>;
}

function Home() {
  return (
    <div className="relative z-10 min-h-screen text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/40">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16 h-16 flex items-center justify-between">
          <Link to="/" className="font-mono text-xs tracking-[0.18em] text-foreground/90 hover:text-foreground transition">
            SM <span className="text-muted-foreground">//</span> PORTFOLIO
          </Link>
          <nav className="flex items-center gap-6 md:gap-10">
            {[["WORK", "#work"], ["EXPERIENCE", "#experience"], ["CONTACT", "#contact"]].map(([l, h]) => (
              <a key={l} href={h} className="hidden sm:inline font-mono text-xs tracking-[0.18em] text-muted-foreground hover:text-brand transition-colors">
                {l}
              </a>
            ))}
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main id="top" className="max-w-[1400px] mx-auto px-8 lg:px-16">
        {/* HERO */}
        <section className="min-h-[88vh] flex flex-col justify-center py-24">
          <div className="fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand-soft px-5 py-2 mb-12">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              <span className="font-mono text-[0.7rem] tracking-[0.18em] text-brand">AVAILABLE FOR NEW CHALLENGES</span>
            </div>
            <h1 className="display-sans text-[clamp(3rem,9vw,8rem)]">
              Shriyashish Mishra
            </h1>
            <p className="font-serif italic text-2xl md:text-4xl text-muted-foreground mt-10 max-w-4xl leading-tight">
              Product Manager building products through strategy, experimentation, execution, and AI.
            </p>
            <p className="mt-10 text-base text-muted-foreground max-w-2xl leading-relaxed">
              I enjoy solving ambiguous problems, understanding user behavior, and building products that create measurable impact in fast-paced environments.
            </p>
            <div className="mt-14 flex flex-wrap gap-4">
              <a href="#work" className="inline-flex items-center gap-2 bg-foreground text-background px-7 py-4 text-sm hover:opacity-90 transition">
                View Selected Work <ArrowRight className="h-4 w-4" />
              </a>
              <a href={RESUME_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-border px-7 py-4 text-sm hover:bg-accent transition">
                Download Resume
              </a>
            </div>
          </div>
        </section>

        {/* CORE PRINCIPLES */}
        <section className="py-28">
          <SectionLabel>SECTION 01 / FRAMEWORKS</SectionLabel>
          <h2 className="font-serif text-5xl mb-16">Core Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((p) => (
              <div key={p.num} className="border border-border/60 rounded-md p-7 bg-card/40 hover:bg-card/70 hover:-translate-y-0.5 transition-all">
                <div className="font-mono text-[0.7rem] tracking-[0.18em] text-muted-foreground mb-8">
                  {p.num} / {p.tag}
                </div>
                <h3 className="font-sans font-semibold text-lg text-foreground mb-4">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* MEASURED IMPACT */}
        <section className="py-28">
          <SectionLabel>SECTION 02 / OUTCOMES</SectionLabel>
          <h2 className="font-serif italic text-5xl mb-20">Measured Impact</h2>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-20">
            {metrics.map((m) => (
              <div key={m.title} className="grid grid-cols-[auto_1fr] gap-8 items-start">
                <div className="font-serif text-7xl md:text-8xl leading-none">{m.value}</div>
                <div>
                  <h3 className="font-sans font-semibold text-foreground mb-3">{m.title}</h3>
                  <p className="italic text-sm text-muted-foreground leading-relaxed max-w-sm">{m.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="py-28 scroll-mt-20">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-16">
            <div>
              <SectionLabel>SECTION 03 / CAREER</SectionLabel>
              <h2 className="font-serif italic text-5xl">Experience Summary</h2>
            </div>
            <p className="font-serif italic text-muted-foreground max-w-sm text-sm leading-relaxed">
              Three roles. A consistent arc — from owning growth charters to shaping AI-native product surfaces.
            </p>
          </div>

          <div className="space-y-14">
            {experience.map((e) => (
              <article key={e.company} className="border border-border/60 rounded-md bg-card/40 hover:bg-card/60 transition-colors overflow-hidden">
                {/* Header */}
                <header className="p-7 md:p-9 border-b border-border/50">
                  <div className="flex flex-wrap justify-between items-start gap-3">
                    <div>
                      <h3 className="font-sans font-bold text-xl md:text-2xl">{e.company}</h3>
                      <div className="font-serif italic text-muted-foreground mt-1">{e.role}</div>
                    </div>
                    <div className="font-mono text-[0.7rem] tracking-[0.18em] text-muted-foreground pt-2">{e.period}</div>
                  </div>
                  <p className="mt-5 font-serif italic text-lg text-foreground/85 max-w-3xl leading-snug">
                    {e.scope}
                  </p>
                </header>

                {/* Impact Highlights — most visually prominent */}
                <div className="p-7 md:p-9 border-b border-border/50 bg-gradient-to-r from-accent to-transparent">
                  <div className="label-mono mb-6">IMPACT HIGHLIGHTS</div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {e.stats.map((s) => (
                      <div key={s.label} className="border border-border/50 rounded-md p-6 bg-card/30">
                        <div className="font-serif text-4xl md:text-5xl leading-none mb-3">{s.value}</div>
                        <div className="label-mono mb-2">{s.label}</div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{s.context}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Initiatives & Responsibilities */}
                <div className="grid md:grid-cols-[2fr_1fr] gap-x-12 gap-y-8 p-7 md:p-9">
                  <div>
                    <div className="label-mono mb-4">KEY INITIATIVES</div>
                    <ul className="space-y-3">
                      {e.initiatives.map((item) => (
                        <li key={item} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                          <span className="mt-2 h-1 w-1 rounded-full bg-muted-foreground shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="label-mono mb-4">RESPONSIBILITIES</div>
                    <ul className="space-y-2.5">
                      {e.responsibilities.map((r) => (
                        <li key={r} className="text-sm text-foreground/80 leading-relaxed">{r}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>


        {/* AI CASE STUDIES */}
        <section id="work" className="py-28 scroll-mt-20">
          <div className="flex items-end justify-between mb-10">
            <div>
              <SectionLabel>GROUP A</SectionLabel>
              <h2 className="font-serif italic text-5xl">AI Case Studies</h2>
            </div>
            <div className="font-mono text-[0.7rem] tracking-[0.18em] text-muted-foreground">01 — 03</div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {aiCases.map((c) => {
              const Icon = c.icon;
              return (
                <a key={c.title} href={c.url} target="_blank" rel="noreferrer" className="group block border border-border/60 rounded-md overflow-hidden bg-card/40 hover:bg-card/70 hover:-translate-y-0.5 transition-all">
                  <div className="relative aspect-[4/3] bg-gradient-to-br from-brand-soft to-transparent flex items-center justify-center">
                    {c.featured && (
                      <div className="absolute top-4 left-4 inline-flex items-center rounded-full bg-foreground text-background px-3 py-1.5">
                        <span className="font-mono text-[0.65rem] tracking-[0.18em] font-semibold">FEATURED</span>
                      </div>
                    )}
                    <Icon className="h-14 w-14 text-muted-foreground/50 group-hover:text-muted-foreground transition" strokeWidth={1.2} />
                  </div>
                  <div className="p-7">
                    <div className="label-mono mb-3">{c.tag}</div>
                    <h3 className="font-sans font-semibold text-lg mb-3">{c.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{c.body}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        {/* PRODUCT CASE STUDIES */}
        <section className="py-28">
          <div className="flex items-end justify-between mb-10">
            <div>
              <SectionLabel>GROUP B</SectionLabel>
              <h2 className="font-serif italic text-5xl">Product Case Studies</h2>
            </div>
            <div className="font-mono text-[0.7rem] tracking-[0.18em] text-muted-foreground">04 — 06</div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {productCases.map((c) => {
              const Icon = c.icon;
              return (
                <Link key={c.title} to={c.to} className="group block border border-border/60 rounded-md overflow-hidden bg-card/40 hover:bg-card/70 hover:-translate-y-0.5 transition-all">
                  <div className="aspect-[4/3] bg-gradient-to-br from-brand-soft to-transparent flex items-center justify-center">
                    <Icon className="h-14 w-14 text-muted-foreground/50 group-hover:text-muted-foreground transition" strokeWidth={1.2} />
                  </div>
                  <div className="p-7">
                    <div className="label-mono mb-3">{c.tag}</div>
                    <h3 className="font-sans font-semibold text-lg mb-3">{c.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{c.body}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* CAPABILITIES */}
        <section className="py-28">
          <SectionLabel>SECTION 04 / TOOLING</SectionLabel>
          <h2 className="font-serif italic text-5xl mb-16">Capabilities</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
            {capabilities.map((col) => (
              <div key={col.group}>
                <div className="label-mono mb-6">{col.group}</div>
                <ul className="space-y-3">
                  {col.items.map((i) => (
                    <li key={i} className="text-sm text-foreground/90">{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CURRENTLY EXPLORING */}
        <section className="py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <SectionLabel>SECTION 05 / CURIOSITIES</SectionLabel>
              <h2 className="font-serif italic text-5xl">Currently Exploring</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {exploring.map((t) => (
                <span key={t} className="rounded-full border border-border/70 px-4 py-1.5 font-mono text-xs text-muted-foreground">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-16 border-t border-border/50" />
        </section>

        {/* CONCLUDING NOTE */}
        <section className="py-32 text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-5xl md:text-6xl mb-12">Building Products That Matter</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>I enjoy working at the intersection of user behavior, business outcomes, execution, and emerging technologies.</p>
            <p>Whether solving operational challenges, improving growth systems, or designing AI-powered experiences, my focus remains the same:</p>
            <p className="font-serif italic text-2xl text-foreground pt-4">
              Understand deeply.<br />Validate rigorously.<br />Execute relentlessly.
            </p>
          </div>
        </section>

        {/* FOOTER / CONTACT */}
        <footer id="contact" className="border-t border-border/50 py-16 scroll-mt-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
            <div>
              <SectionLabel>CONTACT</SectionLabel>
              <p className="font-serif italic text-3xl max-w-md">
                I'm always interested in product conversations, ambitious teams, and <em>difficult problems worth solving</em>.
              </p>
              <a href={`mailto:${EMAIL}`} className="inline-block mt-6 font-serif italic text-xl underline underline-offset-4 hover:text-foreground text-muted-foreground">
                {EMAIL}
              </a>
            </div>
            <div className="flex gap-8 font-mono text-[0.7rem] tracking-[0.18em] text-muted-foreground">
              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="hover:text-foreground">LINKEDIN</a>
              <a href={`mailto:${EMAIL}`} className="hover:text-foreground">EMAIL</a>
              <a href={RESUME_URL} target="_blank" rel="noreferrer" className="hover:text-foreground">RESUME</a>
            </div>
          </div>
          <div className="mt-12 font-mono text-[0.65rem] tracking-[0.18em] text-muted-foreground/60">
            © 2026 SHRIYASHISH MISHRA — ALL RIGHTS RESERVED
          </div>
        </footer>
      </main>
    </div>
  );
}
