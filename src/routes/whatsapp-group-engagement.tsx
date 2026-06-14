import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

export const Route = createFileRoute("/whatsapp-group-engagement")({
  head: () => ({
    meta: [
      { title: "Increasing WhatsApp Group Engagement — Case Study" },
      { name: "description", content: "Designing product interventions to increase participation, retention, and meaningful interactions within WhatsApp groups." },
      { property: "og:title", content: "Increasing WhatsApp Group Engagement" },
      { property: "og:description", content: "Product interventions to drive participation and retention inside WhatsApp groups." },
    ],
  }),
  component: WhatsAppCase,
});

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-border/70 px-4 py-1.5 font-sans text-sm text-muted-foreground">
      {children}
    </span>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div className="font-mono text-[0.7rem] tracking-[0.22em] text-emerald-400/90 mb-6">
      {children}
    </div>
  );
}

function SectionH({ children }: { children: React.ReactNode }) {
  return <h2 className="font-serif text-4xl md:text-5xl mb-8">{children}</h2>;
}

const personas = [
  {
    name: "Ayush Sharma", role: "STARTUP FOUNDER", color: "emerald",
    goals: ["Team communication", "Employee coordination", "Sharing company updates", "Managing discussions efficiently"],
    pains: ["Unorganized communication", "Important updates get buried", "File management challenges", "Repetitive communication efforts"],
    needs: ["Structured communication", "Better discoverability", "Easier information retrieval"],
  },
  {
    name: "Rohan Dutta", role: "STUDENT & GAMER", color: "orange",
    goals: ["Participate in communities", "Discuss shared interests", "Coordinate events and activities"],
    pains: ["Notification overload", "Too many irrelevant messages", "Difficulty following discussions", "Poor content discoverability"],
    needs: ["Topic-specific discussions", "Lightweight engagement mechanisms", "Better community experiences"],
  },
];

const insights = [
  "Users mute groups when message volume becomes overwhelming.",
  "Users participate more when discussions remain relevant to their interests.",
  "Organized conversations drive higher engagement.",
  "Users need interaction methods beyond simple messaging.",
];

const competitors = [
  { name: "Slack", points: ["Excellent channel management", "Rich threading functionality", "Powerful integration ecosystem"], quote: "Organisation improves engagement." },
  { name: "Discord", points: ["Deep community focus", "Modular roles and permissions", "Seamless voice/video spaces"], quote: "Communities thrive when conversations are segmented." },
  { name: "Telegram", points: ["Massive group capabilities", "Bot platform for automation", "Public channel reach"], quote: "As communities grow, structure becomes increasingly important." },
];

const features = [
  {
    p: "P1 PRIMARY", color: "emerald",
    title: "Groups and Subgroups",
    problem: "Large groups often suffer from \"noise,\" where 90% of messages are irrelevant to any single user, leading them to mute the entire community.",
    solution: "Introduce subgroups within a parent group, allowing users to opt into specific topics of interest while remaining part of the overall community.",
    benefits: ["Reduces notification fatigue", "Increases relevance of discussions", "Enables better community organization"],
  },
  {
    p: "P2 HIGH", color: "blue",
    title: "Native Polls",
    problem: "Decisions in groups today require scrolling through hundreds of individual responses.",
    solution: "Enable users to make decisions quickly without scrolling through hundreds of individual responses. Polls provide a lightweight way to engage the silent majority.",
    benefits: ["Event planning", "Team decisions", "Community voting"],
  },
  {
    p: "P3 UTILITY", color: "orange",
    title: "Built-in Splitwise",
    problem: "Groups coordinating trips and shared expenses leave WhatsApp for tracking tools.",
    solution: "Integrated expense tracking for shared trips, roommates, and events. Bringing utility into the chat keeps users returning to WhatsApp for practical coordination.",
    benefits: ["Trips", "Roommates", "Events"],
  },
  {
    p: "P4 ENGAGEMENT", color: "violet",
    title: "In-chat Games",
    problem: "Social groups go quiet during downtime, weakening community bonds.",
    solution: "Lightweight games that can be played asynchronously within the chat thread. Perfect for keeping social groups active during low-conversation periods.",
    benefits: ["Tic Tac Toe", "Trivia", "Quiz Games"],
  },
];

const prioritization = [
  { p: "P1", color: "emerald", title: "Groups & Subgroups", note: "Highest impact on reducing notification noise and increasing conversation relevance for professional and community groups." },
  { p: "P2", color: "blue", title: "Native Polls", note: "Essential utility for quick decision-making; highly requested feature that encourages participation from passive members." },
  { p: "P3", color: "orange", title: "Splitwise Integration", note: "Drives retention through utility; users have a specific reason to revisit the app even when there is no social conversation." },
  { p: "P4", color: "violet", title: "In-chat Games", note: "Purely social engagement metric; builds community bond during downtime but lower priority than organization tools." },
];

const supportingMetrics = [
  "MESSAGES PER ACTIVE GROUP",
  "POLL PARTICIPATION RATE",
  "WEEKLY ACTIVE GROUPS",
  "ARCHIVED REACTIVATION RATE",
  "30-DAY RETENTION",
];

const rollout = [
  { phase: "PHASE 01", items: ["Polls Integration", "Pinned Messages"] },
  { phase: "PHASE 02", items: ["Groups & Subgroups", "Topic Discovery"] },
  { phase: "PHASE 03", items: ["Built-in Splitwise", "Shared Wallet UI"] },
  { phase: "PHASE 04", items: ["In-chat Games", "Leaderboards"] },
];

const learnings = [
  "Engagement problems are often organization problems.",
  "Users participate more when discussions are relevant.",
  "Communities need structure to scale effectively.",
  "Utility-based features can significantly improve long-term retention beyond social triggers.",
  "Product decisions should balance simplicity with functionality.",
];

const colorMap: Record<string, string> = {
  emerald: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  blue: "bg-blue-500/15 text-blue-400 border-blue-500/30",
  orange: "bg-orange-500/15 text-orange-400 border-orange-500/30",
  violet: "bg-violet-500/15 text-violet-400 border-violet-500/30",
};

function WhatsAppCase() {
  return (
    <div className="relative z-10 min-h-screen text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#050505]/70 border-b border-border/40">
        <div className="max-w-[1200px] mx-auto px-8 lg:px-16 h-16 flex items-center justify-between">
          <Link to="/" className="font-mono text-xs tracking-[0.18em] text-foreground/90 hover:text-foreground transition">
            SM <span className="text-muted-foreground">//</span> PORTFOLIO
          </Link>
          <Link to="/" className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.18em] text-muted-foreground hover:text-foreground transition">
            <ArrowLeft className="h-3.5 w-3.5" /> BACK TO PORTFOLIO
          </Link>
        </div>
      </header>

      <main className="max-w-[1200px] mx-auto px-8 lg:px-16">
        {/* HERO */}
        <section className="pt-24 pb-20">
          <Label>CASE_STUDY_01</Label>
          <h1 className="font-serif text-[clamp(3rem,8vw,7rem)] leading-[1.02] tracking-[-0.03em] mb-12">
            Increasing WhatsApp Group Engagement
          </h1>
          <div className="flex flex-wrap gap-3">
            <Tag>Growth Strategy</Tag>
            <Tag>Product Manager</Tag>
            <Tag>Engagement · Retention · Community Building</Tag>
            <Tag>6–8 mins</Tag>
          </div>
        </section>

        <div className="border-t border-border/40" />

        {/* CONTEXT */}
        <section className="py-24">
          <Label>CONTEXT</Label>
          <SectionH>Context</SectionH>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            WhatsApp is the most widely used messaging platform globally. While one-to-one messaging remains highly active, engagement within groups declines over time due to information overload, notification fatigue, and fragmented conversations.
          </p>
        </section>

        <div className="border-t border-border/40" />

        {/* PROBLEM STATEMENT */}
        <section className="py-24 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <Label>PROBLEM_STATEMENT</Label>
            <SectionH>Problem Statement</SectionH>
            <div className="space-y-5 text-muted-foreground leading-relaxed max-w-xl">
              <p>WhatsApp is one of the most widely used communication platforms globally.</p>
              <p>While one-to-one messaging remains highly active, engagement within WhatsApp Groups declines over time.</p>
              <p>Users frequently mute groups, disengage from conversations, and struggle to find relevant discussions.</p>
            </div>
          </div>
          <div className="border border-emerald-500/30 rounded-2xl p-8 bg-emerald-500/[0.03] relative">
            <Quote className="absolute top-5 right-5 h-5 w-5 text-emerald-400/60" />
            <p className="font-serif italic text-2xl leading-snug">
              "How can WhatsApp increase engagement within groups while maintaining the simplicity that users value?"
            </p>
          </div>
        </section>

        <div className="border-t border-border/40" />

        {/* USER PERSONAS */}
        <section className="py-24">
          <Label>V.01 / USER_RESEARCH</Label>
          <SectionH>User Personas</SectionH>
          <p className="text-muted-foreground mb-12">Two core personas representing professional and community use cases.</p>
          <div className="grid md:grid-cols-2 gap-6">
            {personas.map((p) => (
              <div key={p.name} className="border border-border/60 rounded-2xl p-8 bg-card/30">
                <div className="flex items-center gap-4 mb-6 justify-center">
                  <div className={`h-10 w-10 rounded-full ${p.color === "emerald" ? "bg-emerald-500/20 text-emerald-400" : "bg-orange-500/20 text-orange-400"} grid place-items-center font-sans font-semibold`}>
                    {p.name[0]}
                  </div>
                  <div className="text-center">
                    <div className="font-serif text-xl">{p.name}</div>
                    <div className="font-mono text-[0.65rem] tracking-[0.18em] text-muted-foreground mt-1">{p.role}</div>
                  </div>
                </div>
                {[
                  { label: "GOALS", items: p.goals, dot: "bg-emerald-400" },
                  { label: "PAIN POINTS", items: p.pains, dot: "bg-red-400" },
                  { label: "NEEDS", items: p.needs, dot: "bg-blue-400" },
                ].map((g) => (
                  <div key={g.label} className="mt-6">
                    <div className="font-mono text-[0.65rem] tracking-[0.18em] text-muted-foreground mb-3">{g.label}</div>
                    <ul className="space-y-2">
                      {g.items.map((it) => (
                        <li key={it} className="flex items-center gap-3 text-sm text-foreground/90">
                          <span className={`h-1.5 w-1.5 rounded-full ${g.dot}`} />{it}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-border/40" />

        {/* INSIGHTS */}
        <section className="py-24">
          <Label>V.02 / RESEARCH_INSIGHTS</Label>
          <SectionH>Key Research Insights</SectionH>
          <div className="grid md:grid-cols-2 gap-6">
            {insights.map((i, idx) => (
              <div key={i} className="border border-emerald-500/20 rounded-2xl p-7 bg-emerald-500/[0.02]">
                <div className="font-mono text-[0.65rem] tracking-[0.18em] text-emerald-400/90 mb-4">INSIGHT #{String(idx + 1).padStart(2, "0")}</div>
                <p className="text-foreground/90">{i}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-border/40" />

        {/* COMPETITIVE ANALYSIS */}
        <section className="py-24">
          <Label>V.03 / COMPETITIVE_LANDSCAPE</Label>
          <SectionH>Competitive Analysis</SectionH>
          <div className="grid md:grid-cols-3 gap-6">
            {competitors.map((c) => (
              <div key={c.name} className="border border-border/60 rounded-2xl p-7 bg-card/30">
                <div className="font-serif text-2xl mb-5">{c.name}</div>
                <ul className="space-y-2 mb-6">
                  {c.points.map((pt) => (
                    <li key={pt} className="text-sm text-muted-foreground">{pt}</li>
                  ))}
                </ul>
                <div className="border border-border/60 rounded-lg p-4 italic text-sm text-muted-foreground/90">
                  {c.quote}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-border/40" />

        {/* SOLUTIONS */}
        <section className="py-24">
          <Label>V.04 / PRODUCT_OPPORTUNITIES</Label>
          <SectionH>Solutions</SectionH>
          <p className="text-muted-foreground mb-12">Proposed feature additions to solve core engagement problems.</p>
          <div className="space-y-6">
            {features.map((f) => (
              <div key={f.title} className="border border-border/60 rounded-2xl p-8 md:p-10 bg-card/30">
                <span className={`inline-block font-mono text-[0.65rem] tracking-[0.18em] rounded border px-2.5 py-1 mb-6 ${colorMap[f.color]}`}>{f.p}</span>
                <h3 className="font-serif text-3xl md:text-4xl mb-6">{f.title}</h3>
                <div className="grid md:grid-cols-[1fr_auto] gap-10 items-start">
                  <div className="space-y-4 max-w-xl">
                    <p className="text-muted-foreground"><em className="text-foreground not-italic font-semibold">The Problem: </em>{f.problem}</p>
                    <p className="text-muted-foreground"><em className="text-foreground not-italic font-semibold">The Solution: </em>{f.solution}</p>
                    <div className="flex flex-wrap gap-2 pt-4">
                      {f.benefits.map((b) => (
                        <span key={b} className="rounded-full border border-border/70 px-3 py-1 text-xs text-muted-foreground">{b}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-border/40" />

        {/* PRIORITIZATION */}
        <section className="py-24">
          <Label>V.05 / PRIORITIZATION</Label>
          <SectionH>Prioritization</SectionH>
          <div className="space-y-3">
            {prioritization.map((r) => (
              <div key={r.p} className="border border-border/60 rounded-xl p-5 bg-card/30 grid md:grid-cols-[auto_240px_1fr] items-center gap-6">
                <span className={`font-mono text-xs rounded border px-2.5 py-1 ${colorMap[r.color]}`}>{r.p}</span>
                <div className="font-sans font-semibold text-lg">{r.title}</div>
                <p className="italic text-sm text-muted-foreground border-l border-border/60 pl-6">{r.note}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-border/40" />

        {/* SUCCESS METRICS */}
        <section className="py-24">
          <Label>V.06 / SUCCESS_METRICS</Label>
          <SectionH>Success Metrics</SectionH>
          <div className="border border-emerald-500/30 rounded-2xl p-10 bg-emerald-500/[0.03] mb-8">
            <div className="font-mono text-[0.65rem] tracking-[0.22em] text-emerald-400/90 mb-6">◎ NORTH STAR METRIC</div>
            <h3 className="font-serif text-4xl md:text-6xl mb-4">Weekly Active Group Participants</h3>
            <div className="font-mono text-[0.7rem] tracking-[0.18em] text-emerald-400/80 mb-5">WAGP_ENGAGEMENT_CORE</div>
            <p className="text-muted-foreground max-w-3xl">
              The primary indicator of success will be the number of unique users who perform at least one meaningful interaction (message, poll vote, game move) within a group setting per week.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {supportingMetrics.map((m) => (
              <div key={m} className="border border-border/60 rounded-lg p-5 bg-card/30">
                <div className="font-mono text-[0.6rem] tracking-[0.18em] text-muted-foreground mb-3">SUPPORTING METRIC</div>
                <div className="font-mono text-xs tracking-[0.12em] text-foreground/90">{m}</div>
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-border/40" />

        {/* RISKS & TRADEOFFS */}
        <section className="py-24">
          <Label>V.07 / RISKS_TRADEOFFS</Label>
          <SectionH>Risks & Tradeoffs</SectionH>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              ["Feature Creep", "Adding utility and games risks turning WhatsApp into a bloated app, undermining the simplicity users value."],
              ["Adoption Curve", "Subgroups and polls may confuse passive users; onboarding must be progressive and contextual."],
              ["Moderation Load", "More structure means more configuration; admins need lightweight controls that don't require ongoing effort."],
              ["Privacy Perception", "Splitwise and games introduce richer data; communication must emphasize end-to-end privacy guarantees."],
            ].map(([t, b]) => (
              <div key={t} className="border border-border/60 rounded-2xl p-7 bg-card/30">
                <h3 className="font-sans font-semibold text-lg mb-3">{t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-border/40" />

        {/* PRODUCT THINKING */}
        <section className="py-24 grid md:grid-cols-[1fr_2fr] gap-12">
          <div>
            <Label>V.08 / PM_THINKING</Label>
            <h2 className="font-serif italic text-4xl">Product Thinking</h2>
          </div>
          <div className="space-y-5 text-muted-foreground leading-relaxed max-w-2xl">
            <p>Engagement is rarely a single-feature problem. In a product as ubiquitous as WhatsApp, the right answer is rarely "add more." It is usually <span className="text-foreground">"organize better, then add purposefully."</span></p>
            <p>Subgroups, polls, utility, and play each target a specific stage of the participation loop: <em className="text-foreground">discover relevance → contribute easily → return with purpose → stay through play</em>.</p>
            <p>Each intervention preserves WhatsApp's minimalism while unlocking depth for the users who want it.</p>
          </div>
        </section>

        <div className="border-t border-border/40" />

        {/* ROLLOUT */}
        <section className="py-24">
          <Label>V.09 / ROLLOUT_PLAN</Label>
          <SectionH>Future Journey · Rollout Plan</SectionH>
          <div className="grid md:grid-cols-4 gap-5">
            {rollout.map((r) => (
              <div key={r.phase} className="border border-emerald-500/20 rounded-2xl p-6 bg-emerald-500/[0.02]">
                <div className="font-mono text-[0.65rem] tracking-[0.22em] text-emerald-400/90 mb-5">{r.phase}</div>
                <ul className="space-y-2">
                  {r.items.map((i) => (
                    <li key={i} className="text-sm text-foreground/90">— {i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-border/40" />

        {/* KEY LEARNINGS */}
        <section className="py-24">
          <Label>V.10 / KEY_LEARNINGS</Label>
          <SectionH>Key Learnings</SectionH>
          <div className="grid md:grid-cols-3 gap-5">
            {learnings.map((l) => (
              <div key={l} className="border border-border/60 rounded-2xl p-7 bg-card/30">
                <div className="text-yellow-400/80 mb-4">◐</div>
                <p className="text-sm text-foreground/90 leading-relaxed">{l}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-border/40" />

        {/* FINAL REFLECTION */}
        <section className="py-28 text-center max-w-2xl mx-auto">
          <Label>FINAL_REFLECTION</Label>
          <p className="font-serif italic text-3xl md:text-4xl leading-snug">
            The best engagement features are the ones users don't notice — they simply feel the group is alive again.
          </p>
        </section>

        {/* PREV / NEXT NAV */}
        <section className="py-16 border-t border-border/50 grid sm:grid-cols-2 gap-6">
          <Link to="/" className="group block">
            <div className="label-mono mb-3">PREVIOUS</div>
            <div className="flex items-center gap-3 font-serif italic text-2xl text-muted-foreground group-hover:text-foreground transition">
              <ArrowLeft className="h-5 w-5" /> Portfolio Home
            </div>
          </Link>
          <Link to="/blusmart-mumbai-expansion" className="group block sm:text-right">
            <div className="label-mono mb-3">NEXT</div>
            <div className="flex items-center gap-3 sm:justify-end font-serif italic text-2xl text-muted-foreground group-hover:text-foreground transition">
              BluSmart Mumbai Expansion <ArrowRight className="h-5 w-5" />
            </div>
          </Link>
        </section>

        <footer className="border-t border-border/50 py-12 flex flex-wrap items-center justify-between gap-4">
          <div className="font-mono text-[0.65rem] tracking-[0.18em] text-muted-foreground/60">
            © 2026 SHRIYASHISH MISHRA — ALL RIGHTS RESERVED
          </div>
          <Link to="/" className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.18em] text-muted-foreground hover:text-foreground transition">
            <ArrowLeft className="h-3.5 w-3.5" /> BACK TO PORTFOLIO
          </Link>
        </footer>
      </main>
    </div>
  );
}
