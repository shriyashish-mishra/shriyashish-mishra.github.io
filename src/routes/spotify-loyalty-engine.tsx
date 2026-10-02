import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ChevronRight, Check, Lock, Music, Play, Sparkles, Star, Download, Headphones } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { CaseShell } from "@/components/site-frame";

export const Route = createFileRoute("/spotify-loyalty-engine")({
  head: () => ({
    meta: [
      { title: "Spotify Loyalty Engine — Case Study" },
      { name: "description", content: "Designing a gamified loyalty system to increase listening hours and premium conversion." },
      { property: "og:title", content: "Spotify Loyalty Engine — Case Study" },
      { property: "og:description", content: "Gamified loyalty system for Spotify to drive listening hours and Premium conversion." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: SpotifyCase,
});

function Label({ children }: { children: React.ReactNode }) {
  return <div className="font-mono text-xs tracking-[0.18em] text-brand mb-6">{children}</div>;
}
function SectionH({ children }: { children: React.ReactNode }) {
  return <h2 className="font-serif text-4xl md:text-5xl mb-8">{children}</h2>;
}
function Tag({ children, active }: { children: React.ReactNode; active?: boolean }) {
  return (
    <span className={`rounded-full border px-4 py-1.5 font-mono text-xs ${active ? "border-emerald-500/60 text-emerald-300" : "border-border/70 text-muted-foreground"}`}>{children}</span>
  );
}

/* -------- Mobile mockup shell -------- */
function Phone({ label, title, accent = "emerald", children }: { label: string; title: string; accent?: string; children: React.ReactNode }) {
  return (
    <div className="space-y-3">
      <div className={`font-mono text-[0.6rem] tracking-[0.18em] text-${accent}-400/80`}>{label}</div>
      <div className="mockup mx-auto w-full max-w-[260px] rounded-[2.2rem] border border-border bg-[#0a0a0a] p-2 shadow-2xl">
        <div className="rounded-[1.8rem] overflow-hidden bg-black border border-white/5">
          <div className="flex items-center justify-between px-4 py-2 text-white/80 text-[10px]">
            <span>9:41</span><span>•••</span><span>100%</span>
          </div>
          <div className="px-3 pt-1 pb-2 text-white/90 text-[11px] font-semibold tracking-wide">{title}</div>
          <div className="px-3 pb-4">{children}</div>
        </div>
      </div>
    </div>
  );
}

const problemPoints = [
  ["Listening hours plateauing", "Free-tier users are not forming daily habits at scale."],
  ["Ad-blocker erosion", "Freemium ad revenue is under pressure from browser and DNS blocking."],
  ["Competitive switching", "Lossless audio and bundled offerings are pulling power users away."],
  ["Premium conversion gap", "Users lack tangible motivation to upgrade beyond removing ads."],
  ["Artist retention risk", "Perceived low monetization is pushing artists toward direct-to-fan platforms."],
  ["Revenue concentration", "Freemium contributes only 20–25% of revenue despite high usage volume."],
];

const issues = [
  { t: "Issue 1: Competitor Perception", color: "border-l-sky-400",
    problem: "Users perceive higher value in competing platforms due to lossless audio, bundled hardware, and regional catalogs.",
    evidence: "Power-user churn surveys cite audio quality and ecosystem bundling as top-two reasons for switching.",
    impact: "Reduction in average listening hours per active user, especially in high-ARPU demographics." },
  { t: "Issue 2: Ad Fatigue", color: "border-l-amber-400",
    problem: "Ad load in Freemium creates session abandonment and drives ad-blocker adoption, eroding the ad-supported model.",
    evidence: "Session drop-off spikes after the second ad break. Freemium users with ad blockers show 40% higher retention but zero ad revenue.",
    impact: "Lower listening hours and reduced retention in the monetizable free tier." },
  { t: "Issue 3: Artist Ecosystem", color: "border-l-rose-400",
    problem: "Emerging artists struggle with visibility and monetization, reducing catalog freshness and user discovery value.",
    evidence: "Local artists report that algorithmic discovery favors global headliners, driving them to direct-to-fan platforms.",
    impact: "Reduced listener engagement and catalog differentiation versus competitors." },
];

const personas = [
  { name: "Ayush Roy", role: "Student · Heavy Freemium User", initial: "A", color: "bg-sky-500/30 text-sky-200",
    motivations: "Wants uninterrupted study music, social sharing, and status recognition without spending.",
    behaviors: "Streams 3+ hours daily across pop and indie. Uses ad blockers on web. Skips ads when on mobile.",
    pains: "Ad fatigue breaks flow. No visible progress toward rewards. Premium price feels abstract without trial.",
    barriers: "Price sensitivity, lack of perceived upgrade value, no social proof from peers." },
  { name: "Mona Saha", role: "Singer · Emerging Local Artist", initial: "M", color: "bg-fuchsia-500/30 text-fuchsia-200",
    motivations: "Build a loyal local fanbase, monetize through streams and live events, and break into algorithmic playlists.",
    behaviors: "Releases singles monthly. Engages with fans on Instagram. Struggles to get featured in Spotify editorial.",
    pains: "Algorithmic discovery favors global headliners. Low per-stream revenue. No direct fan-reward tools.",
    barriers: "Competition with established artists, limited playlist submission slots, no gamified discovery mechanism." },
];

const strategies = [
  { n: 1, title: "Next Song Recommendation", score: 15, body: "Improve recommendations based on history, liked songs, and similar users.", tags: ["Impact: Medium","Effort: High","Confidence: High"], selected: false },
  { n: 2, title: "Gamified Loyalty Program", score: 21, body: "Reward users for listening time and streaks with badges and temporary Premium access.", tags: ["Impact: High","Effort: Medium","Confidence: High"], selected: true },
  { n: 3, title: "Artist Marketplace", score: 15, body: "Allow artists to launch merchandise and concert tickets within the app.", tags: ["Impact: Medium","Effort: Very High","Confidence: Low"], selected: false },
];

const flowStages = [
  ["Discovery","Find content"], ["Engagement","Build habit"], ["Accrual","Earn progress"], ["Rewards","Reinforce behavior"], ["Premium Experience","Showcase value"], ["Premium Conversion","Monetize engagement"],
];

const levels = [
  { name: "Listener", pts: "0 PTS", color: "bg-white/5 border-white/10 text-white/80" },
  { name: "Gold Listener", pts: "1,000 PTS", color: "bg-amber-500/10 border-amber-500/40 text-amber-200" },
  { name: "Platinum Listener", pts: "2,500 PTS", color: "bg-white/5 border-white/15 text-white/80" },
  { name: "Elite Listener", pts: "5,000 PTS", color: "bg-rose-500/10 border-rose-500/40 text-rose-200" },
];

const impactMetrics = [
  ["+8%","LISTENING HOURS"], ["+12%","ENGAGEMENT"], ["+4pp","RETENTION"],
  ["+2pp","PREMIUM CONVERSIONS"], ["+15%","ARTIST DISCOVERY"], ["+6%","MRR CONTRIBUTION"],
];

const aarrr = [
  { tag: "ACQUISITION", color: "border-t-sky-400", items: ["Rewards Page Visit Rate","Reward Enrollment Rate","Reward Sharing Rate"] },
  { tag: "ACTIVATION", color: "border-t-purple-400", items: ["Listening Hours per User","Reward Claim Rate","Premium Trial Activation"] },
  { tag: "RETENTION", color: "border-t-emerald-400", items: ["30-Day Active Listening Rate","Listener Retention Cohort","Churn Reduction"] },
  { tag: "REFERRAL", color: "border-t-amber-400", items: ["Viral Coefficient (K-Factor)","Invite Conversion Rate","Reward Social Sharing Rate"] },
  { tag: "REVENUE", color: "border-t-rose-400", items: ["Freemium to Premium Conversion","Customer Lifetime Value (CLV)","Monthly Recurring Revenue (MRR)"] },
];

const risks = [
  { t: "Risk 1: Reward Farming", body: "Users might game the system with low-intent listening to farm points.", l: "Medium", i: "High", m: "Points decay after 30 days of inactivity. Minimum daily listening thresholds and skip-rate detection prevent passive farming." },
  { t: "Risk 2: Low Participation", body: "Users may ignore the program if the value proposition is unclear.", l: "Medium", i: "Medium", m: "Strong onboarding during first-session streak setup. Push notifications at natural listening moments. Social proof via friend leaderboards." },
  { t: "Risk 3: High Implementation Effort", body: "Building a full loyalty engine requires significant backend and design investment.", l: "High", i: "Medium", m: "Launch as a lightweight MVP with manual point accrual and limited redemption catalog. Scale automation after validation." },
  { t: "Risk 4: Short-Term Engagement Spike", body: "Novelty may fade after launch, causing participation to drop.", l: "Medium", i: "Medium", m: "Introduce seasonal challenges, evolving reward tiers, and limited-time artist collaborations to maintain long-term motivation." },
];

const learnings = [
  "Behavioral incentives outperform transactional incentives. Users respond to progress, not discounts.",
  "Users convert after experiencing value, not after seeing pricing. Free trials must be structured as earned rewards.",
  "Marketplace products require balancing user and creator incentives. A loyalty layer can serve both sides simultaneously.",
  "Retention improvements often precede monetization improvements. Investing in engagement pays compounding returns.",
  "Growth features need sustainable reward economics. Caps and decay prevent exploitation and preserve long-term value.",
];

function SpotifyCase() {
  return (
    <CaseShell
      path="/spotify-loyalty-engine"
      title="Spotify Loyalty Engine"
      summary="Designing a gamified loyalty system to increase listening hours and premium conversion."
      tags={["Product Strategy", "Consumer Growth", "Gamification", "Retention"]}
      meta={[["Focus", "Product strategy"], ["Domain", "Consumer · Music"], ["Levers", "Gamification"], ["Goal", "Premium conversion"]]}
    >
        {/* tailwind-safelist */}
        <div className="hidden bg-emerald-400/70 bg-emerald-400/80 bg-emerald-500 bg-emerald-500/10 bg-emerald-500/15 bg-emerald-500/30 border-emerald-500/30 border-emerald-500/40 border-emerald-500/60 text-emerald-100 text-emerald-200 text-emerald-300 text-emerald-400/80 text-emerald-400/90 bg-amber-400/70 bg-amber-500/10 bg-amber-500/20 bg-amber-500/30 border-amber-500/30 border-amber-500/40 text-amber-100 text-amber-200 text-amber-300 bg-sky-500/30 border-sky-500/40 text-sky-200 text-sky-300 bg-fuchsia-500/30 border-fuchsia-500/40 text-fuchsia-200 text-fuchsia-300 bg-rose-400/70 bg-rose-500/5 bg-rose-500/10 bg-rose-500/20 border-rose-500/30 border-rose-500/40 text-rose-100 text-rose-200 text-rose-300 bg-purple-400/70 text-purple-300 border-l-sky-400 border-l-amber-400 border-l-rose-400 border-t-sky-400 border-t-purple-400 border-t-emerald-400 border-t-amber-400 border-t-rose-400" />

        {/* PROBLEM */}
        <section className="py-24">
          <p className="text-muted-foreground max-w-3xl mb-14 leading-relaxed">
            Freemium users drive engagement but monetize poorly. To improve Lifetime Value, Spotify must increase both listening hours and Premium conversion without eroding the artist ecosystem or increasing Customer Acquisition Cost.
          </p>
          <div className="grid lg:grid-cols-2 gap-12">
            <ol className="space-y-5">
              {problemPoints.map(([t, b], i) => (
                <li key={t} className="grid grid-cols-[28px_1fr] gap-4">
                  <span className="font-mono text-xs text-emerald-400/80">{String(i+1).padStart(2,"0")}</span>
                  <div>
                    <div className="text-white font-semibold text-sm mb-1">{t}</div>
                    <div className="text-muted-foreground text-sm leading-relaxed">{b}</div>
                  </div>
                </li>
              ))}
            </ol>
            <div className="space-y-6">
              <div className="border-l-2 border-emerald-500/60 rounded-md p-6 bg-card/40">
                <p className="font-serif italic text-xl leading-snug">"How can Spotify increase listening hours while simultaneously increasing conversion from Freemium to Premium?"</p>
              </div>
              <div className="rounded-md border border-border/60 p-5 bg-card/30 flex flex-wrap items-center gap-3 text-xs font-mono text-muted-foreground">
                <span className="text-emerald-400/80">FLOW</span>
                <span>Listen Time</span><ChevronRight className="h-3 w-3" /><span>Retention</span><ChevronRight className="h-3 w-3" /><span>Conversion</span><ChevronRight className="h-3 w-3" /><span className="text-emerald-300">Revenue</span>
              </div>
              {[1].map((i) => (
                <div key={i} className="rounded-md border border-border/60 p-5 bg-card/30">
                  <div className="flex justify-between text-xs font-mono mb-3"><span className="text-muted-foreground">OPPORTUNITY SIZE</span><span className="text-emerald-400/80">MODELED</span></div>
                  <div className="flex gap-8">
                    <div><div className="text-3xl font-serif">+8%</div><div className="text-xs text-muted-foreground">Listening Hours</div></div>
                    <div><div className="text-3xl font-serif">+2pp</div><div className="text-xs text-muted-foreground">Premium Conv.</div></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROBLEM VALIDATION */}
        <section className="py-24">
          <Label>V.01 / PROBLEM_VALIDATION</Label>
          <div className="grid md:grid-cols-3 gap-5">
            {issues.map((it) => (
              <div key={it.t} className={`rounded-xl border border-border/60 bg-card/40 p-6 border-l-2 ${it.color}`}>
                <h3 className="font-sans font-semibold text-base mb-4">{it.t}</h3>
                <div className="space-y-3 text-sm">
                  <div><div className="font-mono text-[0.65rem] tracking-[0.18em] text-sky-300 mb-1">PROBLEM</div><p className="text-muted-foreground leading-relaxed">{it.problem}</p></div>
                  <div><div className="font-mono text-[0.65rem] tracking-[0.18em] text-purple-300 mb-1">EVIDENCE</div><p className="text-muted-foreground leading-relaxed">{it.evidence}</p></div>
                  <div><div className="font-mono text-[0.65rem] tracking-[0.18em] text-amber-300 mb-1">IMPACT</div><p className="text-muted-foreground leading-relaxed">{it.impact}</p></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* MARKET RESEARCH */}
        <section className="py-24">
          <Label>V.02 / MARKET_RESEARCH</Label>
          <div className="flex flex-col items-center text-center">
            <div className="rounded-md border border-emerald-500/40 px-4 py-1.5 font-mono text-xs text-emerald-300">LISTENERS</div>
            <svg viewBox="0 0 320 160" className="w-full max-w-md my-4 stroke-border" fill="none" strokeWidth="1">
              <path d="M160 10 L40 150 L280 150 Z" />
            </svg>
            <div className="flex gap-32 -mt-6">
              <div className="rounded-md border border-fuchsia-500/40 px-4 py-1.5 font-mono text-xs text-fuchsia-300">ARTISTS</div>
              <div className="rounded-md border border-sky-500/40 px-4 py-1.5 font-mono text-xs text-sky-300">SPOTIFY</div>
            </div>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {[
              ["LISTENERS","Want uninterrupted music, social recognition, and clear upgrade value."],
              ["ARTISTS","Need visibility, discovery mechanics, and sustainable fan relationships."],
              ["SPOTIFY","Needs engagement growth, Premium conversion, and healthy creator economics."],
            ].map(([t,b]) => (
              <div key={t} className="rounded-xl border border-border/60 bg-card/40 p-6 text-center">
                <div className="font-mono text-[0.65rem] tracking-[0.22em] text-muted-foreground mb-3">{t}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{b}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center font-serif italic text-muted-foreground max-w-2xl mx-auto">"The proposed solution must create value for all three stakeholders. A loyalty layer rewards listeners, promotes artists, and improves Spotify's unit economics simultaneously."</p>
        </section>

        {/* USER SEGMENTATION */}
        <section className="py-24">
          <Label>V.03 / USER_SEGMENTATION</Label>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-border/60 bg-card/40 p-6">
              <div className="font-mono text-[0.65rem] tracking-[0.22em] text-muted-foreground mb-4">LISTENERS</div>
              <div className="space-y-2">
                {[["Heavy Freemium Users","FOCUS","emerald"],["Casual Freemium Users","SECONDARY","sky"],["Premium Subscribers","RETENTION","amber"],["Dormant Users","REACTIVATION","rose"]].map(([n,t,c]) => (
                  <div key={n} className="flex justify-between items-center rounded-lg bg-white/5 px-4 py-3">
                    <span className="text-sm text-white/90">{n}</span>
                    <span className={`font-mono text-[0.6rem] tracking-[0.18em] text-${c}-300`}>{t}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-4 leading-relaxed">Heavy Freemium users show high session frequency but low conversion intent. They are the highest-leverage segment for listening-hour growth and Premium upgrade.</p>
            </div>
            <div className="rounded-xl border border-border/60 bg-card/40 p-6">
              <div className="font-mono text-[0.65rem] tracking-[0.22em] text-muted-foreground mb-4">ARTISTS</div>
              <div className="space-y-2">
                {[["Established Artists","CATALOG","sky"],["Emerging / Local Artists","FOCUS","emerald"]].map(([n,t,c]) => (
                  <div key={n} className="flex justify-between items-center rounded-lg bg-white/5 px-4 py-3">
                    <span className="text-sm text-white/90">{n}</span>
                    <span className={`font-mono text-[0.6rem] tracking-[0.18em] text-${c}-300`}>{t}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-4 leading-relaxed">Local artists provide high differentiation in emerging markets. Discovery rewards can surface their catalogs to high-intent listeners.</p>
            </div>
          </div>
          <div className="mt-8 rounded-xl border border-border/60 bg-card/30 px-6 py-4 text-center text-sm">
            Focus Segment: <span className="text-emerald-300 font-mono">Freemium Users and Local Artists</span>
          </div>
        </section>

        {/* PERSONAS */}
        <section className="py-24">
          <Label>V.04 / PERSONAS</Label>
          <div className="grid md:grid-cols-2 gap-6">
            {personas.map((p) => (
              <div key={p.name} className="rounded-xl border border-border/60 bg-card/40 p-7">
                <div className="flex items-center gap-4 mb-5">
                  <div className={`h-12 w-12 rounded-full grid place-items-center font-serif text-lg ${p.color}`}>{p.initial}</div>
                  <div>
                    <div className="font-serif text-xl">{p.name}</div>
                    <div className="font-mono text-xs text-muted-foreground">{p.role}</div>
                  </div>
                </div>
                <div className="space-y-4 text-sm">
                  {[["MOTIVATIONS",p.motivations,"emerald"],["BEHAVIORS",p.behaviors,"sky"],["PAIN POINTS",p.pains,"rose"],[p.name==="Mona Saha"?"VISIBILITY BARRIERS":"CONVERSION BARRIERS",p.barriers,"amber"]].map(([t,b,c]) => (
                    <div key={t as string}>
                      <div className={`font-mono text-[0.6rem] tracking-[0.22em] text-${c}-300 mb-1`}>{t}</div>
                      <p className="text-muted-foreground leading-relaxed">{b}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* KEY INSIGHT */}
        <section className="py-20">
          <Label>V.05 / KEY_INSIGHT</Label>
          <div className="rounded-xl border border-border/60 bg-card/40 p-12 text-center">
            <p className="font-serif text-3xl md:text-4xl leading-snug max-w-3xl mx-auto">"Users invest more time when progress, status, and reward are visible. By making engagement itself the currency, Spotify turns listening into a conversion funnel."</p>
            <div className="mt-8 font-mono text-[0.65rem] tracking-[0.22em] text-muted-foreground">INSIGHT: REWARD THE BEHAVIOR, NOT THE TRANSACTION. THE REWARD IS A TASTE OF PREMIUM.</div>
          </div>
        </section>

        {/* STRATEGIES */}
        <section className="py-24">
          <Label>V.06 / STRATEGIES</Label>
          <div className="grid md:grid-cols-3 gap-5">
            {strategies.map((s) => (
              <div key={s.n} className={`relative rounded-xl border p-6 bg-card/40 ${s.selected ? "border-emerald-500/60 shadow-[0_0_0_1px_rgba(16,185,129,0.4)]" : "border-border/60"}`}>
                {s.selected && <div className="absolute -top-3 right-4 rounded bg-emerald-500 text-black font-mono text-[0.6rem] px-2 py-0.5 tracking-[0.18em]">SELECTED</div>}
                <div className="flex justify-between font-mono text-[0.65rem] tracking-[0.22em] text-muted-foreground mb-3">
                  <span>STRATEGY {s.n}</span><span className="text-emerald-300">SCORE: {s.score}</span>
                </div>
                <h3 className="font-sans font-semibold text-lg mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{s.body}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {s.tags.map((t) => <span key={t} className="font-mono text-[0.6rem] tracking-[0.18em] text-muted-foreground border border-border/60 rounded px-2 py-0.5">{t}</span>)}
                </div>
                <div className={`font-mono text-[0.65rem] tracking-[0.22em] ${s.selected ? "text-emerald-300" : "text-muted-foreground/60"}`}>{s.selected ? "SELECTED" : "NOT SELECTED"}</div>
              </div>
            ))}
          </div>
        </section>

        {/* RECOMMENDATION */}
        <section className="py-24">
          <Label>V.07 / RECOMMENDATION</Label>
          <div className="rounded-xl border border-border/60 bg-card/40 p-8">
            <h3 className="font-serif text-3xl mb-4">Selected Strategy: Gamified Loyalty Program</h3>
            <p className="text-muted-foreground leading-relaxed mb-8">Reason: Highest combined score across Listening Hours, User Engagement, User Acquisition, Revenue Generation, and Market Value. This strategy directly addresses the drop in listening hours while creating a bridge for Freemium users to experience Premium benefits risk-free.</p>
            <div className="grid md:grid-cols-4 gap-4">
              {[["USER VALUE","Free rewards, status recognition, and Premium previews."],["BUSINESS VALUE","Higher retention, lower CAC, improved conversion."],["ARTIST VALUE","Discovery boost and direct fan engagement."],["COMPLEXITY","Medium — existing points system can be extended."]].map(([t,b]) => (
                <div key={t} className="rounded-lg border border-border/60 bg-card/30 p-4">
                  <div className="font-mono text-[0.6rem] tracking-[0.22em] text-emerald-300 mb-2">{t}</div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SOLUTION DESIGN */}
        <section className="py-24">
          <Label>V.08 / SOLUTION_DESIGN</Label>
          <SectionH>Core Concept</SectionH>
          <p className="font-serif italic text-lg text-muted-foreground mb-10">"Reward users for listening. The more users listen, the more value they unlock."</p>
          <div className="flex flex-wrap items-center gap-2">
            {flowStages.map(([t], i) => (
              <div key={t} className="flex items-center gap-2">
                <div className={`rounded-full border px-4 py-1.5 font-mono text-xs ${i===flowStages.length-1 ? "bg-emerald-500 text-black border-emerald-500" : i===flowStages.length-2 ? "border-emerald-500/60 text-emerald-300" : "border-border/70 text-muted-foreground"}`}>{t}</div>
                {i < flowStages.length-1 && <ChevronRight className="h-4 w-4 text-muted-foreground" />}
              </div>
            ))}
          </div>
          <div className="mt-6 grid grid-cols-3 md:grid-cols-6 gap-4 text-center">
            {flowStages.map(([t,sub], i) => (
              <div key={t}>
                <div className="font-mono text-[0.6rem] tracking-[0.22em] text-muted-foreground mb-1">STAGE {i+1}</div>
                <div className="text-sm">{sub}</div>
              </div>
            ))}
          </div>
        </section>

        {/* MECHANICS */}
        <section className="py-24 grid md:grid-cols-2 gap-12">
          <div>
            <Label>V.09 / MECHANICS</Label>
            <div className="font-mono text-[0.65rem] tracking-[0.22em] text-muted-foreground mb-4">ACCRUAL MECHANICS</div>
            <ul className="space-y-3 text-sm">
              {["Listening hours (1 pt / 10 min)","Daily streaks (10 pt bonus)","Discovery challenges (50 pt bonus)"].map((t) => (
                <li key={t} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400" />{t}</li>
              ))}
            </ul>
            <div className="font-mono text-[0.65rem] tracking-[0.22em] text-muted-foreground mt-8 mb-3">SUSTAINABILITY GUARDRAILS</div>
            <p className="text-sm text-muted-foreground leading-relaxed">Premium trials are capped at 3 days per month. Points decay after 30 days of inactivity to prevent farming. Rewards require minimum daily listening to enforce genuine engagement.</p>
          </div>
          <div>
            <div className="font-mono text-[0.65rem] tracking-[0.22em] text-muted-foreground mb-4">LEVELS & BADGES</div>
            <div className="space-y-2 mb-6">
              {levels.map((l) => (
                <div key={l.name} className={`flex justify-between items-center rounded-lg border px-4 py-3 ${l.color}`}>
                  <span className="text-sm">{l.name}</span>
                  <span className="font-mono text-[0.65rem] tracking-[0.18em]">{l.pts}</span>
                </div>
              ))}
            </div>
            <div className="font-mono text-[0.65rem] tracking-[0.22em] text-muted-foreground mb-3">REDEMPTION CATALOG</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {["Ad-free listening (1 day — 500 pts)","Exclusive playlists (800 pts)","Artist experience entries (1,500 pts)","Early feature access (2,000 pts)"].map((t) => (
                <li key={t} className="flex gap-2"><span>•</span>{t}</li>
              ))}
            </ul>
            <p className="mt-4 font-serif italic text-sm text-emerald-300/90">Temporary Premium access is the primary conversion driver. Users who taste Premium show 3x higher upgrade intent.</p>
          </div>
        </section>

        {/* USER JOURNEY + MOBILE MOCKUPS */}
        <section className="py-24">
          <Label>V.10 / USER_JOURNEY</Label>
          <SectionH>User Journey & Product Experience</SectionH>
          <p className="text-muted-foreground max-w-2xl mb-14">End-to-end rewards experience designed as a native Spotify feature.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Phone label="SCREEN 1 / LOYALTY ENGINE HOME" title="Rewards Hub">
              <div className="space-y-3 text-[10px]">
                <div className="grid grid-cols-2 gap-2">
                  <div className="rounded-lg bg-white/5 p-3"><div className="text-white/50">Streak</div><div className="text-white font-semibold text-lg">12 Days</div></div>
                  <div className="rounded-lg bg-white/5 p-3"><div className="text-white/50">Listen Time</div><div className="text-white font-semibold text-lg">47h</div></div>
                </div>
                <div className="rounded-lg bg-gradient-to-br from-amber-500/30 to-amber-700/10 border border-amber-500/40 p-3 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-amber-500/30 grid place-items-center"><Star className="h-5 w-5 text-amber-300" /></div>
                  <div>
                    <div className="text-amber-200/80 text-[9px]">Current Badge</div>
                    <div className="text-amber-100 font-semibold">Gold Listener</div>
                    <div className="text-amber-200/70 text-[9px]">2,250 pts/2,500</div>
                  </div>
                </div>
                <div className="flex justify-between"><span className="text-white/80 font-semibold">Available Rewards</span><span className="text-emerald-300">View All</span></div>
                <div className="rounded-lg bg-emerald-500/10 border border-emerald-500/30 p-2.5 flex items-center justify-between"><span className="text-emerald-100">⚡ 3 Day Premium Access</span><ChevronRight className="h-3 w-3 text-emerald-300" /></div>
                <div className="rounded-lg bg-white/5 p-2.5 flex items-center justify-between"><span className="text-white/80">☆ Exclusive Playlist</span><ChevronRight className="h-3 w-3 text-white/40" /></div>
                <div className="pt-1"><div className="h-1 rounded bg-white/10"><div className="h-full rounded bg-emerald-400 w-[88%]" /></div><div className="flex justify-between text-white/50 mt-1"><span>Next: Platinum</span><span>250 pts to go</span></div></div>
              </div>
            </Phone>

            <Phone label="SCREEN 2 / LEVEL PROGRESSION" title="Your Journey">
              <div className="space-y-2 text-[10px]">
                {[
                  ["Listener","0h listening","white/5",""],
                  ["Gold Listener","20h listening","amber","CURRENT"],
                  ["Platinum Listener","50h listening","white/5","LOCKED"],
                  ["Elite Listener","100h listening","rose","LOCKED"],
                ].map(([n,m,c,s]) => (
                  <div key={n as string} className={`rounded-lg p-3 border ${c==="amber" ? "bg-amber-500/10 border-amber-500/40" : c==="rose" ? "bg-rose-500/5 border-rose-500/30" : "bg-white/5 border-white/10"}`}>
                    <div className="flex justify-between items-start">
                      <div>
                        <div className={`font-semibold ${c==="amber"?"text-amber-200":c==="rose"?"text-rose-200":"text-white/80"}`}>{n}</div>
                        <div className="text-white/40 mt-0.5">Milestone: {m}</div>
                      </div>
                      {s==="CURRENT" ? <span className="text-amber-300 font-mono text-[8px]">CURRENT</span> : s==="LOCKED" ? <Lock className="h-3 w-3 text-white/40" /> : null}
                    </div>
                    {n==="Gold Listener" && <div className="mt-2 inline-block rounded bg-amber-500/30 text-amber-100 px-2 py-0.5">1 Day Premium Unlocked</div>}
                    {n==="Platinum Listener" && <div className="mt-2 inline-block rounded bg-white/10 text-white/60 px-2 py-0.5">3 Days Premium Unlocked</div>}
                    {n==="Elite Listener" && <div className="mt-2 inline-block rounded bg-rose-500/20 text-rose-200 px-2 py-0.5">Exclusive Merch Access</div>}
                  </div>
                ))}
              </div>
            </Phone>

            <Phone label="SCREEN 3 / LISTENING STREAKS" title="Quest Hub">
              <div className="space-y-3 text-[10px]">
                <div className="rounded-lg bg-gradient-to-br from-emerald-500/30 to-emerald-700/10 border border-emerald-500/40 p-3">
                  <div className="text-emerald-200/80">Current Streak</div>
                  <div className="text-3xl font-semibold text-white mt-1">12 🔥</div>
                  <div className="text-emerald-200/70 mt-0.5">Best: 18 days</div>
                </div>
                <div className="grid grid-cols-7 gap-1">
                  {Array.from({length:14}).map((_,i) => (
                    <div key={i} className={`aspect-square rounded ${i<12?"bg-emerald-400/80":"bg-white/5"}`} />
                  ))}
                </div>
                <div className="text-white/60">Daily quests</div>
                {[["Listen 30 min","+10 pts","done"],["Discover a new artist","+50 pts","active"],["Share a playlist","+25 pts","locked"]].map(([t,p,s]) => (
                  <div key={t as string} className="flex justify-between items-center rounded bg-white/5 p-2">
                    <div className="flex items-center gap-2">{s==="done"?<Check className="h-3 w-3 text-emerald-400" />:s==="locked"?<Lock className="h-3 w-3 text-white/40" />:<Play className="h-3 w-3 text-emerald-300" />}<span className="text-white/80">{t}</span></div>
                    <span className="text-emerald-300">{p}</span>
                  </div>
                ))}
              </div>
            </Phone>

            <Phone label="SCREEN 4 / DISCOVERY CHALLENGES" title="Active Challenge">
              <div className="space-y-3 text-[10px]">
                <div className="rounded-lg bg-emerald-500/10 border border-emerald-500/30 p-3">
                  <div className="flex items-center gap-2 text-emerald-300"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /><span className="font-mono text-[9px] tracking-[0.18em]">ACTIVE CHALLENGE</span></div>
                  <div className="text-white font-semibold mt-2">Discover 5 local artists this week</div>
                  <div className="mt-2 text-white/60">Progress: 3/5</div>
                  <div className="mt-1 h-1.5 rounded bg-white/10"><div className="h-full rounded bg-emerald-400 w-3/5" /></div>
                  <div className="text-emerald-300 text-right mt-1">+500 PTS</div>
                </div>
                <div className="text-white/70">Recommended Local Artists</div>
                {[["MS","Mona Saha","Indie Pop","fuchsia"],["AK","Arjun K.","Classic Fusion","sky"],["PM","Priya M.","Indie Rock","amber"]].map(([i,n,g,c]) => (
                  <div key={n as string} className="flex items-center gap-2 rounded bg-white/5 p-2">
                    <div className={`h-7 w-7 rounded-full bg-${c}-500/30 grid place-items-center text-${c}-200 font-semibold`}>{i}</div>
                    <div className="flex-1"><div className="text-white">{n}</div><div className="text-white/40">{g}</div></div>
                    <button className="rounded-full bg-emerald-500 text-black px-2.5 py-0.5 text-[9px] font-semibold">Listen</button>
                  </div>
                ))}
              </div>
            </Phone>

            <Phone label="SCREEN 5 / ACHIEVEMENT BADGES" title="Rewards Unlock">
              <div className="space-y-3 text-[10px]">
                <div className="rounded-2xl bg-gradient-to-br from-amber-500/20 via-amber-700/10 to-black/40 border border-amber-500/30 p-6 text-center">
                  <div className="mx-auto h-14 w-14 rounded-full bg-amber-500/30 grid place-items-center"><Star className="h-7 w-7 text-amber-300" /></div>
                  <div className="text-white font-semibold mt-3 text-sm">Congratulations!</div>
                  <div className="text-white font-semibold">You're a Gold Listener.</div>
                  <div className="text-white/60 mt-2">You've earned 3 Days of Premium Access as a reward for your loyalty.</div>
                  <button className="mt-4 w-full rounded-full bg-emerald-500 text-black font-semibold py-2">Claim Reward</button>
                  <button className="mt-2 text-white/60">Maybe Later</button>
                </div>
              </div>
            </Phone>

            <Phone label="SCREEN 6 / REWARDS MARKETPLACE" title="Marketplace">
              <div className="grid grid-cols-2 gap-2 text-[10px]">
                {[
                  ["⚡","1 Day Premium","500 PTS","white"],
                  ["👑","3 Day Premium","1,200 PTS","emerald"],
                  ["🎵","Exclusive Mix","800 PTS","white"],
                  ["🔓","Early Access","2,000 PTS","white"],
                ].map(([i,t,p,c]) => (
                  <div key={t as string} className={`rounded-lg p-3 ${c==="emerald"?"bg-emerald-500/15 border border-emerald-500/40":"bg-white/5 border border-white/10"}`}>
                    <div className="text-2xl">{i}</div>
                    <div className="text-white mt-2 font-semibold">{t}</div>
                    <div className="text-white/50">{p}</div>
                    <button className={`mt-3 w-full rounded ${c==="emerald"?"bg-emerald-500 text-black":"bg-white/10 text-white/70"} text-[9px] py-1 font-semibold`}>Redeem</button>
                  </div>
                ))}
              </div>
            </Phone>

            <Phone label="SCREEN 7 / PREMIUM UNLOCK JOURNEY" title="Reward Activated!">
              <div className="text-center space-y-3 text-[10px]">
                <div className="mx-auto h-16 w-16 rounded-full border-2 border-emerald-400 grid place-items-center mt-2"><Check className="h-8 w-8 text-emerald-400" /></div>
                <div className="text-white font-semibold text-sm">Reward Activated!</div>
                <div className="text-white/60 px-3">You now have 3 days of ad-free listening and unlimited skips. Enjoy the premium experience.</div>
                <div className="inline-block rounded-full border border-white/15 px-3 py-1 text-white/70">3 DAYS REMAINING</div>
                <button className="w-full rounded-full bg-white text-black font-semibold py-2.5 mt-2">Start Listening</button>
              </div>
            </Phone>

            <Phone label="SCREEN 8 / CONVERSION FLOW" title="Premium Preview · Currently Unlocked">
              <div className="space-y-2 text-[10px]">
                <div className="flex items-center gap-2 text-emerald-300"><span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /><span className="font-mono text-[9px] tracking-[0.18em]">PREMIUM ACTIVE</span></div>
                {[[Music,"Ad-Free Listening","No interruptions. Just music."],[Play,"Unlimited Skips","Play any song you want."],[Download,"Offline Downloads","Listen anywhere without data."],[Headphones,"Better Audio Quality","Experience higher fidelity."]].map(([I,t,d],i) => {
                  const Ico = I as typeof Music;
                  return (
                    <div key={i} className="flex items-start gap-2 rounded bg-white/5 p-2">
                      <Ico className="h-3.5 w-3.5 text-emerald-300 mt-0.5" />
                      <div><div className="text-white font-semibold">{t as string}</div><div className="text-white/50">{d as string}</div></div>
                    </div>
                  );
                })}
                <div className="rounded-lg border border-emerald-500/40 bg-emerald-500/10 p-3 mt-2">
                  <div className="text-emerald-100 font-semibold mb-1">Your Premium preview ends in 2 days</div>
                  <div className="text-emerald-200/70 mb-2">Don't lose your ad-free experience.</div>
                  <div className="rounded bg-white/5 border border-white/10 p-2 mb-1.5">
                    <div className="flex justify-between"><span className="text-white">Premium Individual</span><span className="text-white/60">₹119/mo</span></div>
                    <button className="mt-2 w-full rounded bg-emerald-500 text-black font-semibold py-1.5">Upgrade Now</button>
                  </div>
                  <div className="text-white/60 mt-1">Premium Duo · ₹149/mo</div>
                  <div className="text-white/60">Premium Family · ₹179/mo</div>
                </div>
              </div>
            </Phone>
          </div>
        </section>

        {/* IMPACT */}
        <section className="py-24">
          <Label>V.11 / IMPACT</Label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {impactMetrics.map(([v,t]) => (
              <div key={t} className="rounded-xl border border-border/60 bg-card/40 p-8 text-center">
                <div className="font-serif text-4xl md:text-5xl text-emerald-300">{v}</div>
                <div className="font-mono text-[0.65rem] tracking-[0.22em] text-muted-foreground mt-3">{t}</div>
                <div className="font-mono text-[0.55rem] tracking-[0.18em] text-muted-foreground/60 mt-1">MODELED</div>
              </div>
            ))}
          </div>
        </section>

        {/* AARRR */}
        <section className="py-24">
          <Label>V.12 / METRICS</Label>
          <SectionH>AARRR Framework</SectionH>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {aarrr.map((c) => (
              <div key={c.tag} className={`rounded-xl border border-border/60 bg-card/40 p-5 border-t-2 ${c.color}`}>
                <div className="font-mono text-[0.6rem] tracking-[0.22em] text-muted-foreground mb-4">{c.tag}</div>
                <ul className="space-y-3 text-sm">
                  {c.items.map((i) => <li key={i} className="text-muted-foreground leading-snug">{i}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* RISKS */}
        <section className="py-24">
          <Label>V.13 / RISKS</Label>
          <div className="grid md:grid-cols-2 gap-5">
            {risks.map((r) => (
              <div key={r.t} className="rounded-xl border border-border/60 bg-card/40 p-6 border-l-2 border-l-rose-400">
                <h3 className="font-sans font-semibold text-base mb-2">{r.t}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{r.body}</p>
                <div className="flex justify-between text-xs font-mono mb-1"><span className="text-muted-foreground">Likelihood</span><span>{r.l}</span></div>
                <div className="flex justify-between text-xs font-mono mb-4"><span className="text-muted-foreground">Impact</span><span>{r.i}</span></div>
                <div className="font-mono text-[0.6rem] tracking-[0.22em] text-emerald-300 mb-1">MITIGATION</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.m}</p>
              </div>
            ))}
          </div>
        </section>

        {/* LEARNINGS */}
        <section className="py-24">
          <Label>V.14 / LEARNINGS</Label>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {learnings.map((l, i) => (
              <div key={l} className="rounded-xl border border-border/60 bg-card/40 p-5">
                <div className="font-serif text-2xl text-emerald-300/90 mb-3">{String(i+1).padStart(2,"0")}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{l}</p>
              </div>
            ))}
          </div>
        </section>
    </CaseShell>
  );
}
