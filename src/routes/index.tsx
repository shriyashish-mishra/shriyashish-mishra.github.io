import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, Car, Music, Sparkles, AudioLines } from "lucide-react";

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
  { icon: MessageCircle, tag: "HEALTHCARE / SAFETY", title: "WhatsApp Medication Safety", body: "Designing a safety layer for healthcare communication via messaging platforms.", to: "/" as const },
  { icon: Car, tag: "MOBILITY / GROWTH", title: "BluSmart Mumbai Expansion", body: "Scaling the electric mobility fleet through hyper-local operations and strategy.", to: "/blusmart-mumbai-expansion" as const },
  { icon: Music, tag: "CONSUMER / ENGAGEMENT", title: "Spotify Loyalty Engine", body: "Gamification of user acquisition flows for premium subscriptions.", to: "/" as const },
];

const aiCases = [
  { icon: Sparkles, tag: "LLM / TOOLING", title: "ProductBattle AI", body: "Competitive analysis engine leveraging AI to evaluate product positioning.", url: "https://example.com/productbattle" },
  { icon: AudioLines, tag: "SOCIAL / VIBE", title: "Flat Vibecheck", body: "AI-powered roommate and living space compatibility assessment.", url: "https://example.com/vibecheck" },
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
    bullets: [
      "Leading AI Product Development and initial Product Discovery for next-gen workflows.",
      "Conducting extensive User Research to define high-impact AI opportunities.",
      "Designing complex Workflow systems integrated with agentic AI models.",
      "Overseeing the architectural evaluation of AI systems for mission-critical use cases.",
    ],
  },
  {
    company: "Eka Care", role: "Product Manager", period: "MAY 2024 — DEC 2025",
    bullets: [
      "Owned CRM Product and Growth initiatives, driving significant lifts in user activation.",
      "Developed and scaled Enterprise Workflows for healthcare providers and clinical partners.",
      "Executed full product lifecycle from hypothesis to shipping major platform features.",
      "Collaborated with engineering to optimize CRM latency and data reporting pipelines.",
    ],
  },
  {
    company: "Qure.ai", role: "Product Manager", period: "JULY 2023 — MAY 2024",
    bullets: [
      "Managed Product Adoption strategies for global product rollouts across Tier-1 markets.",
      "Spearheaded Workflow Optimization projects that reduced operational bottlenecks.",
      "Facilitated cross-functional leadership between technical, clinical, and sales teams.",
      "Streamlined Product Delivery processes for radiology-focused AI solutions.",
    ],
  },
  {
    company: "AltWorld", role: "Product Management Intern", period: "FEB 2020 — AUG 2020",
    bullets: [
      "Analyzed consumer product user journeys to identify engagement drop-off points.",
      "Assisted in engagement optimization experiments for social discovery features.",
      "Developed initial wireframes and user stories for community engagement tools.",
    ],
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <div className="label-mono mb-6">{children}</div>;
}

function Home() {
  return (
    <div className="relative z-10 min-h-screen text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#050505]/70 border-b border-border/40">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16 h-16 flex items-center justify-between">
          <a href="#top" className="font-mono text-xs tracking-[0.18em] text-foreground/90 hover:text-foreground transition">
            SM <span className="text-muted-foreground">//</span> PORTFOLIO
          </a>
          <nav className="flex items-center gap-10">
            {[["WORK", "#work"], ["EXPERIENCE", "#experience"], ["CONTACT", "#contact"]].map(([l, h]) => (
              <a key={l} href={h} className="font-mono text-xs tracking-[0.18em] text-muted-foreground hover:text-foreground transition-colors">
                {l}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="top" className="max-w-[1400px] mx-auto px-8 lg:px-16">
        {/* HERO */}
        <section className="min-h-[88vh] flex flex-col justify-center py-24">
          <div className="fade-up">
            <div className="inline-flex items-center rounded-full border border-border/70 px-5 py-2 mb-12">
              <span className="font-mono text-[0.7rem] tracking-[0.18em] text-muted-foreground">AVAILABLE FOR NEW CHALLENGES</span>
            </div>
            <h1 className="font-serif text-[clamp(3.5rem,11vw,10rem)] leading-[1.02] tracking-[-0.03em]">
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
              <a href="#resume" className="inline-flex items-center gap-2 border border-border px-7 py-4 text-sm hover:bg-accent transition">
                Download Resume
              </a>
            </div>
          </div>
        </section>

        {/* THE JOURNEY */}
        <section className="py-28 grid md:grid-cols-[1fr_2fr] gap-12">
          <div>
            <SectionLabel>SECTION 01 / NARRATIVE</SectionLabel>
            <h2 className="font-serif italic text-5xl">The Journey</h2>
          </div>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
            <p>My path started with a deep curiosity for how things work, which naturally evolved into a fascination with <span className="text-foreground">technology as a problem-solving tool</span>.</p>
            <p>Transitioning into product management allowed me to combine technical intuition with <span className="text-foreground">structured product thinking</span>. From initial research at Meril to scaling platforms at Eka Care, I've focused on translating complex needs into elegant solutions.</p>
            <p>Today, I view <em className="text-foreground">AI as the ultimate lever</em>—a modern frontier that redefines how we architect user experiences and automate value delivery.</p>
            <div className="pt-10 border-t border-border/50 mt-10 grid grid-cols-3 gap-8 max-w-xl">
              {[["CURRENTLY","Meril"],["PREVIOUSLY","Eka Care"],["EARLY CAREER","Qure.ai"]].map(([l,v]) => (
                <div key={l}>
                  <div className="label-mono mb-2">{l}</div>
                  <div className="text-foreground">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CORE PRINCIPLES */}
        <section className="py-28">
          <SectionLabel>SECTION 02 / FRAMEWORKS</SectionLabel>
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
          <SectionLabel>SECTION 03 / OUTCOMES</SectionLabel>
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

        {/* PRODUCT CASE STUDIES */}
        <section id="work" className="py-28">
          <div className="flex items-end justify-between mb-10">
            <div>
              <SectionLabel>GROUP A</SectionLabel>
              <h2 className="font-serif italic text-5xl">Product Case Studies</h2>
            </div>
            <div className="font-mono text-[0.7rem] tracking-[0.18em] text-muted-foreground">01 — 03</div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {productCases.map((c) => {
              const Icon = c.icon;
              return (
                <a key={c.title} href="#" className="group block border border-border/60 rounded-md overflow-hidden bg-card/40 hover:bg-card/70 hover:-translate-y-0.5 transition-all">
                  <div className="aspect-[4/3] bg-gradient-to-br from-white/[0.03] to-white/[0.01] flex items-center justify-center">
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

        {/* AI CASE STUDIES */}
        <section className="py-28">
          <div className="flex items-end justify-between mb-10">
            <div>
              <SectionLabel>GROUP B</SectionLabel>
              <h2 className="font-serif italic text-5xl">AI Case Studies</h2>
            </div>
            <div className="font-mono text-[0.7rem] tracking-[0.18em] text-muted-foreground">04 — 05</div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {aiCases.map((c) => {
              const Icon = c.icon;
              return (
                <a key={c.title} href={c.url} target="_blank" rel="noreferrer" className="group block border border-border/60 rounded-md overflow-hidden bg-card/40 hover:bg-card/70 hover:-translate-y-0.5 transition-all">
                  <div className="aspect-[4/3] bg-gradient-to-br from-white/[0.03] to-white/[0.01] flex items-center justify-center">
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
            <div className="hidden md:flex items-center justify-center">
              <span className="font-serif italic text-muted-foreground/60">More in progress...</span>
            </div>
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

        {/* EXPERIENCE */}
        <section id="experience" className="py-28">
          <SectionLabel>SECTION 06 / CAREER</SectionLabel>
          <h2 className="font-serif italic text-5xl mb-16">Experience Summary</h2>
          <div className="border border-border/60 rounded-md p-8 md:p-12 bg-card/30">
            {experience.map((e, idx) => (
              <div key={e.company} className={idx > 0 ? "pt-10 mt-10 border-t border-border/50" : ""}>
                <div className="flex flex-wrap justify-between items-start gap-2 mb-6">
                  <div>
                    <h3 className="font-sans font-bold text-xl">{e.company}</h3>
                    <div className="font-serif italic text-muted-foreground mt-1">{e.role}</div>
                  </div>
                  <div className="font-mono text-[0.7rem] tracking-[0.18em] text-muted-foreground pt-2">{e.period}</div>
                </div>
                <ul className="grid md:grid-cols-2 gap-x-12 gap-y-3">
                  {e.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                      <span className="mt-1.5 h-1 w-1 rounded-full bg-muted-foreground shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
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
        <footer id="contact" className="border-t border-border/50 py-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
            <div>
              <SectionLabel>CONTACT</SectionLabel>
              <p className="font-serif italic text-3xl max-w-md">
                I'm always interested in product conversations, ambitious teams, and <em>difficult problems worth solving</em>.
              </p>
              <a href="mailto:hello@shriyashish.com" className="inline-block mt-6 font-serif italic text-xl underline-offset-4 hover:underline">
                Get in touch
              </a>
            </div>
            <div className="flex gap-8 font-mono text-[0.7rem] tracking-[0.18em] text-muted-foreground">
              <a href="#" className="hover:text-foreground">LINKEDIN</a>
              <a href="#" id="resume" className="hover:text-foreground">RESUME</a>
              <a href="#" className="hover:text-foreground">X / TWITTER</a>
              <a href="mailto:hello@shriyashish.com" className="hover:text-foreground">EMAIL</a>
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
