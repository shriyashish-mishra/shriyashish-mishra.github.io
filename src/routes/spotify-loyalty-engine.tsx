import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ChevronRight, Check, Lock, Music, Play, Sparkles, Star, Download, Headphones } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { CaseShell } from "@/components/site-frame";

export const Route = createFileRoute("/spotify-loyalty-engine")({
  head: () => ({
    meta: [
      { title: "Spotify loyalty program · Case study" },
      { name: "description", content: "A loyalty program for Spotify that rewards listening and uses short Premium trials to drive upgrades." },
      { property: "og:title", content: "Spotify loyalty program" },
      { property: "og:description", content: "A loyalty program for Spotify that rewards listening and uses short Premium trials to drive upgrades." },
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
      <div className="text-sm text-muted-foreground">{label}</div>
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
  ["Listening hours have plateaued", "Free users aren't building a daily habit at scale."],
  ["Ad blockers", "Browser and DNS blocking is eating into Freemium ad revenue."],
  ["Switching to competitors", "Lossless audio and bundles are pulling power users away."],
  ["Weak reason to upgrade", "Removing ads alone isn't enough motivation to pay."],
  ["Artists drifting away", "Low payouts are pushing artists toward direct-to-fan platforms."],
  ["Revenue is concentrated", "Freemium brings in only 20–25% of revenue despite most of the usage."],
];

const issues = [
  { t: "Competitors look better", color: "border-l-sky-400",
    problem: "Users see more value elsewhere: lossless audio, hardware bundles and regional catalogs.",
    evidence: "In power-user churn surveys, audio quality and ecosystem bundles are the top two reasons for switching.",
    impact: "Fewer listening hours per active user, especially among high-ARPU users." },
  { t: "Ad fatigue", color: "border-l-amber-400",
    problem: "Too many ads in Freemium cut sessions short and push people to ad blockers, which undermines the ad model.",
    evidence: "Sessions drop off after the second ad break. Freemium users with ad blockers retain 40% better but bring in no ad revenue.",
    impact: "Lower listening hours and weaker retention in the free tier that's meant to make money." },
  { t: "Artists struggle to be found", color: "border-l-rose-400",
    problem: "Emerging artists get little visibility or income, so the catalog feels less fresh and discovery is less useful.",
    evidence: "Local artists say the algorithm favors global headliners, which pushes them toward direct-to-fan platforms.",
    impact: "Less engagement from listeners and less to set Spotify apart from competitors." },
];

const personas = [
  { name: "Ayush Roy", role: "Student, heavy Freemium user", initial: "A", color: "bg-sky-500/30 text-sky-200",
    motivations: "Wants uninterrupted music for studying, to share what he's listening to, and some recognition, without paying.",
    behaviors: "Streams 3+ hours a day, mostly pop and indie. Uses an ad blocker on the web and skips ads on mobile.",
    pains: "Ads break his focus. He can't see any progress toward rewards, and Premium feels abstract without trying it.",
    barriers: "Price-sensitive, doesn't see enough reason to upgrade, and none of his friends are on Premium." },
  { name: "Mona Saha", role: "Singer, emerging local artist", initial: "M", color: "bg-fuchsia-500/30 text-fuchsia-200",
    motivations: "Build a loyal local fanbase, earn from streams and live shows, and get into algorithmic playlists.",
    behaviors: "Releases a single every month and talks to fans on Instagram. Rarely gets featured in Spotify's editorial playlists.",
    pains: "Discovery favors global headliners. Per-stream income is low, and there's no way to reward fans directly.",
    barriers: "Competing with established artists, few playlist submission slots, and nothing that rewards fans for discovering her." },
];

const strategies = [
  { n: 1, title: "Better next-song recommendations", score: 15, body: "Improve recommendations using listening history, liked songs and similar users.", tags: ["Impact: medium","Effort: high","Confidence: high"], selected: false },
  { n: 2, title: "Gamified loyalty program", score: 21, body: "Reward listening time and streaks with badges and short Premium trials.", tags: ["Impact: high","Effort: medium","Confidence: high"], selected: true },
  { n: 3, title: "Artist marketplace", score: 15, body: "Let artists sell merch and concert tickets inside the app.", tags: ["Impact: medium","Effort: very high","Confidence: low"], selected: false },
];

const flowStages = [
  ["Discovery","Find something to listen to"], ["Engagement","Build a habit"], ["Accrual","Earn points"], ["Rewards","Get something back"], ["Premium trial","See what Premium is like"], ["Upgrade","Convert to paid"],
];

const levels = [
  { name: "Listener", pts: "0 PTS", color: "bg-white/5 border-white/10 text-white/80" },
  { name: "Gold Listener", pts: "1,000 PTS", color: "bg-amber-500/10 border-amber-500/40 text-amber-200" },
  { name: "Platinum Listener", pts: "2,500 PTS", color: "bg-white/5 border-white/15 text-white/80" },
  { name: "Elite Listener", pts: "5,000 PTS", color: "bg-rose-500/10 border-rose-500/40 text-rose-200" },
];

const impactMetrics = [
  ["+8%","Listening hours"], ["+12%","Engagement"], ["+4pp","Retention"],
  ["+2pp","Premium conversion"], ["+15%","Artist discovery"], ["+6%","MRR contribution"],
];

const aarrr = [
  { tag: "Acquisition", color: "border-t-sky-400", items: ["Rewards page visit rate","Enrollment rate","Reward sharing rate"] },
  { tag: "Activation", color: "border-t-purple-400", items: ["Listening hours per user","Reward claim rate","Premium trial activation"] },
  { tag: "Retention", color: "border-t-emerald-400", items: ["30-day active listening rate","Retention by cohort","Churn reduction"] },
  { tag: "Referral", color: "border-t-amber-400", items: ["Viral coefficient (K-factor)","Invite conversion rate","Social sharing of rewards"] },
  { tag: "Revenue", color: "border-t-rose-400", items: ["Freemium to Premium conversion","Customer lifetime value","Monthly recurring revenue"] },
];

const risks = [
  { t: "Reward farming", body: "People could leave music running just to collect points.", l: "Medium", i: "High", m: "Points expire after 30 days of inactivity. Minimum daily listening and skip-rate checks stop passive farming." },
  { t: "Low participation", body: "If the value isn't obvious, people will ignore the program.", l: "Medium", i: "Medium", m: "Set up a streak in the first session, send reminders at natural listening moments, and show friends' progress on leaderboards." },
  { t: "Build effort", body: "A full loyalty system needs real backend and design work.", l: "High", i: "Medium", m: "Start with a lightweight MVP: manual point accrual and a small rewards catalog. Automate once it's validated." },
  { t: "Novelty wears off", body: "Participation could drop once the launch excitement fades.", l: "Medium", i: "Medium", m: "Seasonal challenges, evolving tiers and limited-time artist collaborations to keep it interesting." },
];

const learnings = [
  "Rewarding behavior works better than discounts. People respond to progress.",
  "People upgrade after they've felt the value, not after they've seen the price. Trials work best when they're earned.",
  "Marketplaces have to balance both sides. A loyalty layer can serve listeners and artists at once.",
  "Retention usually improves before revenue does, and the gains compound.",
  "Reward economics have to be sustainable. Caps and expiry keep the system from being gamed.",
];

function SpotifyCase() {
  return (
    <CaseShell
      path="/spotify-loyalty-engine"
      title="A loyalty program for Spotify"
      summary="Freemium listeners use Spotify a lot but rarely pay. This case study designs a loyalty program that rewards listening and uses short Premium trials to drive upgrades."
      tags={["Product Strategy", "Consumer Growth", "Gamification", "Retention"]}
      meta={[["Focus", "Product strategy"], ["Domain", "Consumer · Music"], ["Levers", "Gamification"], ["Goal", "Premium conversion"]]}
    >
        {/* tailwind-safelist */}
        <div className="hidden bg-emerald-400/70 bg-emerald-400/80 bg-emerald-500 bg-emerald-500/10 bg-emerald-500/15 bg-emerald-500/30 border-emerald-500/30 border-emerald-500/40 border-emerald-500/60 text-emerald-100 text-emerald-200 text-emerald-300 text-emerald-400/80 text-emerald-400/90 bg-amber-400/70 bg-amber-500/10 bg-amber-500/20 bg-amber-500/30 border-amber-500/30 border-amber-500/40 text-amber-100 text-amber-200 text-amber-300 bg-sky-500/30 border-sky-500/40 text-sky-200 text-sky-300 bg-fuchsia-500/30 border-fuchsia-500/40 text-fuchsia-200 text-fuchsia-300 bg-rose-400/70 bg-rose-500/5 bg-rose-500/10 bg-rose-500/20 border-rose-500/30 border-rose-500/40 text-rose-100 text-rose-200 text-rose-300 bg-purple-400/70 text-purple-300 border-l-sky-400 border-l-amber-400 border-l-rose-400 border-t-sky-400 border-t-purple-400 border-t-emerald-400 border-t-amber-400 border-t-rose-400" />

        {/* PROBLEM */}
        <section className="py-24">
          <p className="text-muted-foreground max-w-3xl mb-14 leading-relaxed">
            Freemium users listen a lot but bring in little revenue. To raise lifetime value, Spotify needs more listening hours and more Premium upgrades, without hurting artists or raising acquisition costs.
          </p>
          <div className="grid lg:grid-cols-2 gap-12">
            <ol className="space-y-5">
              {problemPoints.map(([t, b], i) => (
                <li key={t} className="grid grid-cols-[28px_1fr] gap-4">
                  <span className="text-sm text-muted-foreground tabular-nums">{i+1}</span>
                  <div>
                    <div className="text-white font-semibold text-sm mb-1">{t}</div>
                    <div className="text-muted-foreground text-sm leading-relaxed">{b}</div>
                  </div>
                </li>
              ))}
            </ol>
            <div className="space-y-6">
              <div className="border-l-2 border-emerald-500/60 rounded-md p-6 bg-card/40">
                <div className="text-sm text-muted-foreground mb-2">The question</div><p className="font-serif text-xl leading-snug">How can Spotify grow listening hours and, at the same time, convert more Freemium users to Premium?</p>
              </div>
              <div className="rounded-md border border-border/60 p-5 bg-card/30 flex flex-wrap items-center gap-3 text-xs font-mono text-muted-foreground">
                <span className="text-emerald-500">The chain</span>
                <span>Listening time</span><ChevronRight className="h-3 w-3" /><span>Retention</span><ChevronRight className="h-3 w-3" /><span>Conversion</span><ChevronRight className="h-3 w-3" /><span className="text-emerald-300">Revenue</span>
              </div>
              {[1].map((i) => (
                <div key={i} className="rounded-md border border-border/60 p-5 bg-card/30">
                  <div className="flex justify-between text-xs font-mono mb-3"><span className="text-muted-foreground font-sans text-sm">Opportunity</span><span className="text-muted-foreground font-sans text-sm">Modeled</span></div>
                  <div className="flex gap-8">
                    <div><div className="text-3xl font-serif">+8%</div><div className="text-xs text-muted-foreground">Listening hours</div></div>
                    <div><div className="text-3xl font-serif">+2pp</div><div className="text-xs text-muted-foreground">Premium conversion</div></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROBLEM VALIDATION */}
        <section className="py-24">
          <SectionH>Three problems underneath</SectionH>
          <div className="grid md:grid-cols-3 gap-5">
            {issues.map((it) => (
              <div key={it.t} className={`rounded-xl border border-border/60 bg-card/40 p-6 border-l-2 ${it.color}`}>
                <h3 className="font-sans font-semibold text-base mb-4">{it.t}</h3>
                <div className="space-y-3 text-sm">
                  <div><div className="text-xs font-medium text-foreground mb-1">Problem</div><p className="text-muted-foreground leading-relaxed">{it.problem}</p></div>
                  <div><div className="text-xs font-medium text-foreground mb-1">Evidence</div><p className="text-muted-foreground leading-relaxed">{it.evidence}</p></div>
                  <div><div className="text-xs font-medium text-foreground mb-1">Impact</div><p className="text-muted-foreground leading-relaxed">{it.impact}</p></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* MARKET RESEARCH */}
        <section className="py-24">
          <SectionH>Three groups to keep happy</SectionH>
          <div className="flex flex-col items-center text-center">
            <div className="rounded-md border border-emerald-500/40 px-4 py-1.5 font-mono text-xs text-emerald-300">Listeners</div>
            <svg viewBox="0 0 320 160" className="w-full max-w-md my-4 stroke-border" fill="none" strokeWidth="1">
              <path d="M160 10 L40 150 L280 150 Z" />
            </svg>
            <div className="flex gap-32 -mt-6">
              <div className="rounded-md border border-fuchsia-500/40 px-4 py-1.5 font-mono text-xs text-fuchsia-300">Artists</div>
              <div className="rounded-md border border-sky-500/40 px-4 py-1.5 font-mono text-xs text-sky-300">Spotify</div>
            </div>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {[
              ["Listeners","Want uninterrupted music, some recognition, and a clear reason to upgrade."],
              ["Artists","Need visibility, ways to be discovered, and lasting relationships with fans."],
              ["Spotify","Needs more engagement, more Premium upgrades, and healthy creator economics."],
            ].map(([t,b]) => (
              <div key={t} className="rounded-xl border border-border/60 bg-card/40 p-6 text-center">
                <div className="text-sm font-medium mb-2">{t}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{b}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-muted-foreground max-w-2xl mx-auto">The solution has to work for all three. A loyalty layer can reward listeners, promote artists and improve Spotify's unit economics at the same time.</p>
        </section>

        {/* USER SEGMENTATION */}
        <section className="py-24">
          <SectionH>Who to focus on</SectionH>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-border/60 bg-card/40 p-6">
              <div className="text-sm font-medium mb-4">Listeners</div>
              <div className="space-y-2">
                {[["Heavy Freemium users","Focus","emerald"],["Casual Freemium users","Secondary","sky"],["Premium subscribers","Retain","amber"],["Dormant users","Reactivate","rose"]].map(([n,t,c]) => (
                  <div key={n} className="flex justify-between items-center rounded-lg bg-white/5 px-4 py-3">
                    <span className="text-sm text-white/90">{n}</span>
                    <span className={`text-xs text-${c}-300`}>{t}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-4 leading-relaxed">Heavy Freemium users open the app often but rarely think about paying. They have the most room to grow, in both listening hours and upgrades.</p>
            </div>
            <div className="rounded-xl border border-border/60 bg-card/40 p-6">
              <div className="text-sm font-medium mb-4">Artists</div>
              <div className="space-y-2">
                {[["Established artists","Catalog","sky"],["Emerging and local artists","Focus","emerald"]].map(([n,t,c]) => (
                  <div key={n} className="flex justify-between items-center rounded-lg bg-white/5 px-4 py-3">
                    <span className="text-sm text-white/90">{n}</span>
                    <span className={`text-xs text-${c}-300`}>{t}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-4 leading-relaxed">Local artists are what makes Spotify different in emerging markets. Discovery rewards can put their music in front of engaged listeners.</p>
            </div>
          </div>
          <div className="mt-8 rounded-xl border border-border/60 bg-card/30 px-6 py-4 text-center text-sm">
            Focus: <span className="text-emerald-500">heavy Freemium listeners and local artists</span>
          </div>
        </section>

        {/* PERSONAS */}
        <section className="py-24">
          <SectionH>Two personas</SectionH>
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
                  {[["Motivations",p.motivations,"emerald"],["Behavior",p.behaviors,"sky"],["Frustrations",p.pains,"rose"],[p.name==="Mona Saha"?"What holds her back":"Why he hasn't upgraded",p.barriers,"amber"]].map(([t,b,c]) => (
                    <div key={t as string}>
                      <div className="text-xs font-medium text-foreground mb-1">{t}</div>
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
          <SectionH>The key insight</SectionH>
          <div className="rounded-xl border border-border/60 bg-card/40 p-12 text-center">
            <p className="font-serif text-3xl md:text-4xl leading-snug max-w-3xl mx-auto">People put in more time when they can see their progress, status and rewards. If engagement itself becomes the currency, listening turns into a path to Premium.</p>
            <div className="mt-6 text-muted-foreground">Reward the behavior, not the purchase. The reward is a taste of Premium.</div>
          </div>
        </section>

        {/* STRATEGIES */}
        <section className="py-24">
          <SectionH>Options considered</SectionH>
          <div className="grid md:grid-cols-3 gap-5">
            {strategies.map((s) => (
              <div key={s.n} className={`relative rounded-xl border p-6 bg-card/40 ${s.selected ? "border-emerald-500/60 shadow-[0_0_0_1px_rgba(16,185,129,0.4)]" : "border-border/60"}`}>
                {s.selected && <div className="absolute -top-3 right-4 rounded bg-emerald-500 text-black text-xs px-2 py-0.5">Chosen</div>}
                <div className="flex justify-between text-xs text-muted-foreground mb-3">
                  <span>Option {s.n}</span><span className="text-emerald-500">Score {s.score}</span>
                </div>
                <h3 className="font-sans font-semibold text-lg mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{s.body}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {s.tags.map((t) => <span key={t} className="text-xs text-muted-foreground border border-border/60 rounded px-2 py-0.5">{t}</span>)}
                </div>
                <div className={`text-sm ${s.selected ? "text-emerald-300" : "text-muted-foreground/60"}`}>{s.selected ? "Chosen" : "Not chosen"}</div>
              </div>
            ))}
          </div>
        </section>

        {/* RECOMMENDATION */}
        <section className="py-24">
          <SectionH>The recommendation</SectionH>
          <div className="rounded-xl border border-border/60 bg-card/40 p-8">
            <h3 className="font-serif text-3xl mb-4">Build a gamified loyalty program</h3>
            <p className="text-muted-foreground leading-relaxed mb-8">It scored highest across listening hours, engagement, acquisition, revenue and market value. It tackles the drop in listening hours directly, and lets Freemium users try Premium with no risk.</p>
            <div className="grid md:grid-cols-4 gap-4">
              {[["For listeners","Free rewards, recognition and Premium previews."],["For Spotify","Better retention, lower acquisition cost, higher conversion."],["For artists","More discovery and direct fan engagement."],["Effort","Medium. The existing points system can be extended."]].map(([t,b]) => (
                <div key={t} className="rounded-lg border border-border/60 bg-card/30 p-4">
                  <div className="text-sm font-medium mb-1">{t}</div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{b}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SOLUTION DESIGN */}
        <section className="py-24">
          <SectionH>How it works</SectionH>
          <p className="text-lg text-muted-foreground mb-10">Reward people for listening. The more they listen, the more they unlock.</p>
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
                <div className="text-xs text-muted-foreground mb-1">Step {i+1}</div>
                <div className="text-sm">{sub}</div>
              </div>
            ))}
          </div>
        </section>

        {/* MECHANICS */}
        <section className="py-24 grid md:grid-cols-2 gap-12">
          <div>
            <SectionH>Points, levels and rewards</SectionH>
            <div className="text-sm font-medium mb-4">Earning points</div>
            <ul className="space-y-3 text-sm">
              {["Listening: 1 point per 10 minutes","Daily streaks: 10-point bonus","Discovery challenges: 50-point bonus"].map((t) => (
                <li key={t} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400" />{t}</li>
              ))}
            </ul>
            <div className="text-sm font-medium mt-8 mb-3">Guardrails</div>
            <p className="text-sm text-muted-foreground leading-relaxed">Premium trials are capped at 3 days a month. Points expire after 30 days of inactivity so they can't be stockpiled, and rewards need a minimum amount of real daily listening.</p>
          </div>
          <div>
            <div className="text-sm font-medium mb-4">Levels</div>
            <div className="space-y-2 mb-6">
              {levels.map((l) => (
                <div key={l.name} className={`flex justify-between items-center rounded-lg border px-4 py-3 ${l.color}`}>
                  <span className="text-sm">{l.name}</span>
                  <span className="text-xs">{l.pts}</span>
                </div>
              ))}
            </div>
            <div className="text-sm font-medium mb-3">What points buy</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {["A day of ad-free listening: 500 pts","Exclusive playlists: 800 pts","Entry to artist experiences: 1,500 pts","Early access to features: 2,000 pts"].map((t) => (
                <li key={t} className="flex gap-2"><span>•</span>{t}</li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-foreground">Short Premium trials are the main conversion lever. Users who try Premium show 3x higher intent to upgrade.</p>
          </div>
        </section>

        {/* USER JOURNEY + MOBILE MOCKUPS */}
        <section className="py-24">
          <SectionH>The experience, screen by screen</SectionH>
          <p className="text-muted-foreground max-w-2xl mb-14">The full rewards flow, designed to sit inside Spotify as a native feature.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Phone label="1. Rewards home" title="Rewards Hub">
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

            <Phone label="2. Levels" title="Your Journey">
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

            <Phone label="3. Streaks and daily quests" title="Quest Hub">
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

            <Phone label="4. A discovery challenge" title="Active Challenge">
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

            <Phone label="5. Unlocking a reward" title="Rewards Unlock">
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

            <Phone label="6. Spending points" title="Marketplace">
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

            <Phone label="7. The trial starts" title="Reward Activated!">
              <div className="text-center space-y-3 text-[10px]">
                <div className="mx-auto h-16 w-16 rounded-full border-2 border-emerald-400 grid place-items-center mt-2"><Check className="h-8 w-8 text-emerald-400" /></div>
                <div className="text-white font-semibold text-sm">Reward Activated!</div>
                <div className="text-white/60 px-3">You now have 3 days of ad-free listening and unlimited skips. Enjoy the premium experience.</div>
                <div className="inline-block rounded-full border border-white/15 px-3 py-1 text-white/70">3 DAYS REMAINING</div>
                <button className="w-full rounded-full bg-white text-black font-semibold py-2.5 mt-2">Start Listening</button>
              </div>
            </Phone>

            <Phone label="8. Asking for the upgrade" title="Premium Preview · Currently Unlocked">
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
          <SectionH>Expected impact</SectionH>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {impactMetrics.map(([v,t]) => (
              <div key={t} className="rounded-xl border border-border/60 bg-card/40 p-8 text-center">
                <div className="font-serif text-4xl md:text-5xl text-emerald-300">{v}</div>
                <div className="text-sm text-muted-foreground mt-2">{t}</div>
                <div className="text-xs text-muted-foreground/70 mt-0.5">modeled</div>
              </div>
            ))}
          </div>
        </section>

        {/* AARRR */}
        <section className="py-24">
          <SectionH>What to track</SectionH>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {aarrr.map((c) => (
              <div key={c.tag} className={`rounded-xl border border-border/60 bg-card/40 p-5 border-t-2 ${c.color}`}>
                <div className="text-sm font-medium mb-4">{c.tag}</div>
                <ul className="space-y-3 text-sm">
                  {c.items.map((i) => <li key={i} className="text-muted-foreground leading-snug">{i}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* RISKS */}
        <section className="py-24">
          <SectionH>Risks</SectionH>
          <div className="grid md:grid-cols-2 gap-5">
            {risks.map((r) => (
              <div key={r.t} className="rounded-xl border border-border/60 bg-card/40 p-6 border-l-2 border-l-rose-400">
                <h3 className="font-sans font-semibold text-base mb-2">{r.t}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{r.body}</p>
                <div className="flex justify-between text-xs font-mono mb-1"><span className="text-muted-foreground">Likelihood</span><span>{r.l}</span></div>
                <div className="flex justify-between text-xs font-mono mb-4"><span className="text-muted-foreground">Impact</span><span>{r.i}</span></div>
                <div className="text-xs font-medium text-foreground mb-1">How to handle it</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.m}</p>
              </div>
            ))}
          </div>
        </section>

        {/* LEARNINGS */}
        <section className="py-24">
          <SectionH>What I took away</SectionH>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {learnings.map((l, i) => (
              <div key={l} className="rounded-xl border border-border/60 bg-card/40 p-5">
                <div className="text-sm text-muted-foreground mb-2 tabular-nums">{i+1}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{l}</p>
              </div>
            ))}
          </div>
        </section>
    </CaseShell>
  );
}
