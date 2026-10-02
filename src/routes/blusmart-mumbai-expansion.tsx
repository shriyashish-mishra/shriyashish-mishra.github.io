import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { CaseShell } from "@/components/site-frame";

export const Route = createFileRoute("/blusmart-mumbai-expansion")({
  head: () => ({
    meta: [
      { title: "Launching BluSmart in Mumbai · Case study" },
      { name: "description", content: "How BluSmart could launch in Mumbai with 150 electric cars: zones, drivers, charging and rider acquisition." },
      { property: "og:title", content: "Launching BluSmart in Mumbai · Case study" },
      { property: "og:description", content: "How BluSmart could launch in Mumbai with 150 electric cars: zones, drivers, charging and rider acquisition." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: BluSmartCaseStudy,
});

function Label({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`text-xs text-muted-foreground ${className}`}>{children}</div>;
}

const challengeLeft = ["Serviceable zones", "Driver requirements", "User acquisition strategy"];
const challengeRight = ["Fleet utilization", "Charging infrastructure", "Customer onboarding"];

const questions = [
  "Which areas should BluSmart serve first?",
  "How many trips should each vehicle complete daily?",
  "How many drivers are required?",
  "How many charging stations are required?",
  "Where should charging stations be located?",
  "How should users be acquired?",
];

const sources = [
  "Mumbai user surveys",
  "Secondary market research",
  "Competitor analysis",
  "Demand estimation",
  "Operational assumptions",
];

const opMetrics = [
  { l: "Average trip", v: "20 min" },
  { l: "Traffic", v: "15 min" },
  { l: "Waiting", v: "20 min" },
  { l: "Full cycle", v: "55 min" },
  { l: "Trips per hour", v: "~1" },
  { l: "Trips per day", v: "12" },
];

const baseline = [
  { l: "Trips per car", v: "12", s: "Per car, per day" },
  { l: "Fleet at launch", v: "150", s: "Tata Ziptron EVs" },
  { l: "Daily capacity", v: "1,800", s: "Trips per day across the fleet" },
];

const infra = [
  { l: "Fleet", v: "150 EVs" },
  { l: "Cars per hub", v: "30" },
  { l: "Hubs needed", v: "5" },
];

const zones = ["Andheri","Bandra","Dadar","Worli","Goregaon","Malad","BKC","Vashi","Ghatkopar","Thane","Churchgate","Sion","Kurla"];

const expansionZones = [
  { title: "Navi Mumbai", bullets: ["Large residential population", "Less congestion", "Well suited to EV operations", "Good intercity potential"] },
  { title: "Railway hubs", sub: "Dadar, CST, Bandra Terminus", body: "Heavy daily commuter traffic with predictable peaks." },
  { title: "Tourist areas", sub: "Marine Drive, Wankhede", body: "Steady leisure demand from non-commuters, especially at weekends." },
];

const gtm = [
  { n: "1", t: "Monsoon positioning", b: "Reliable rides when other options fail during Mumbai's monsoon." },
  { n: "2", t: "First-ride offers", b: "Discounted first rides to lower the barrier and build trust." },
  { n: "3", t: "Referrals", b: "Reward regular riders for bringing friends, which keeps acquisition costs down." },
  { n: "4", t: "Points-based rewards", b: "A tiered loyalty program to increase repeat rides and lifetime value." },
  { n: "5", t: "Digital marketing", b: "Targeted LinkedIn and Instagram ads for business districts like BKC." },
];

const differentiators = [
  { t: "No cancellations", s: "Reliability" },
  { t: "Zero-emission rides", s: "Sustainability" },
  { t: "Clean cars", s: "Experience" },
  { t: "Fixed pricing", s: "Transparency" },
  { t: "Dependable airport rides", s: "Premium" },
  { t: "A better ride overall", s: "Rider focus" },
];

const opFramework = [
  { t: "Fleet allocation", b: "Spread the 150 cars across priority zones based on demand and trip volume. At peak hours, concentrate them in business districts like BKC and Andheri. Off-peak, shift toward residential areas and airport routes." },
  { t: "Charging", b: "Five hubs with space for 30 cars each. Cars charge during driver shift changes, and hubs sit where zones meet to cut dead kilometers." },
  { t: "Expanding the footprint", b: "Phase 1 covers core Mumbai and Navi Mumbai. Phase 2 adds Thane and the western suburbs, and phase 3 the eastern corridors. Each step happens only once utilization is above 75% and driver supply is stable." },
  { t: "Acquiring riders", b: "A digital-first launch aimed at airport travelers and monsoon riders, B2B partnerships with offices in BKC, and referrals to keep acquisition costs down." },
];

const kpis = [
  { l: "Performance", t: "Fleet utilization" },
  { l: "Supply", t: "Driver utilization" },
  { l: "Infrastructure", t: "Charging hub usage" },
  { l: "Growth", t: "New riders" },
  { l: "Finance", t: "Acquisition cost" },
  { l: "Loyalty", t: "Retention rate" },
  { l: "Lifetime value", t: "Repeat ride rate" },
  { l: "Strategic", t: "Share of airport rides" },
];

const risks = [
  { n: "1", t: "Not enough charging capacity", m: "Put hubs at busy zone intersections to cut dead kilometers." },
  { n: "2", t: "Not enough drivers", m: "Launch with two drivers per car to cover shift overlaps and fatigue." },
  { n: "3", t: "Slow rider adoption", m: "Monsoon-focused campaigns, plus referrals through corporate partners people already trust." },
  { n: "4", t: "A competitor pushes hard", m: "Lean on fixed, transparent pricing and reliable service when competitors surge." },
];

const learnings = [
  "Expanding to a new city needs careful operational planning before you push for growth.",
  "Supply has to be ready on day one, or service quality slips immediately.",
  "Charging infrastructure decides how far an EV fleet can scale and how many hours it earns.",
  "Rider acquisition and fleet planning have to be designed together.",
  "Product strategy here goes well beyond software. The physical operations shape most of the rider's experience.",
];

function BluSmartCaseStudy() {
  const accent = "text-brand";
  return (
    <CaseShell
      path="/blusmart-mumbai-expansion"
      title="Launching BluSmart in Mumbai"
      summary="How BluSmart could launch in Mumbai with 150 electric cars: where to start, how many drivers and chargers it needs, and how to win riders."
      tags={["Go-to-Market Strategy", "Market Expansion", "Operations", "Supply Strategy", "User Acquisition"]}
      meta={[["Type", "Product case study"], ["Focus", "Go-to-market"], ["Domain", "Electric mobility"], ["Fleet", "150 EVs"]]}
    >


        {/* BUSINESS CONTEXT */}
        <section className="pb-28">
          <div className="mb-4 text-sm text-muted-foreground">Background</div>
          <div className="border border-border/60 rounded-2xl p-8 md:p-12 bg-card/30 max-w-3xl">
            <p className="font-serif text-xl md:text-2xl leading-snug mb-6">
              BluSmart is launching in Mumbai with an initial fleet of 150 Tata Ziptron EVs.
            </p>
            <p className="text-muted-foreground mb-6">Entering a new city is the easy part. The harder questions are about:</p>
            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-3 mb-8">
              {[...challengeLeft, ...challengeRight].map((c) => (
                <div key={c} className="flex items-center gap-3 text-sm">
                  <span className={`h-1.5 w-1.5 rounded-full bg-brand shrink-0`} />
                  <span>{c}</span>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground">All while keeping the operation viable in the long run.</p>
          </div>
        </section>

        {/* V.01 PROBLEM STATEMENT */}
        <section className="pb-28 grid md:grid-cols-[2fr_1fr] gap-10">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-10">
              The brief: plan BluSmart's launch in Mumbai, starting with a fleet of 150 Tata Ziptron EVs.
            </h2>
            <ol className="space-y-3">
              {questions.map((q, i) => (
                <li key={q} className="flex gap-4 text-sm md:text-base">
                  <span className="w-4 shrink-0 text-sm text-muted-foreground tabular-nums">{i + 1}</span>
                  <span className="text-foreground/90">{q}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="border border-brand/40 rounded-2xl p-8 bg-brand/[0.04] self-start">
            <div className="mb-3 text-sm text-muted-foreground">Objective</div>
            <p className="font-serif text-lg leading-snug">
              Maximize orders, new riders, retention and conversion from competitors, while keeping operations efficient.
            </p>
          </div>
        </section>

        {/* V.02 APPROACH */}
        <section className="pb-28">
          <h2 className="font-serif text-3xl md:text-4xl mb-12">What the plan is based on</h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <ul className="space-y-3">
              {sources.map((s, i) => (
                <li key={s} className="flex items-center justify-between border border-border/60 rounded-xl px-6 py-4 bg-card/30">
                  <span>{s}</span>
                </li>
              ))}
            </ul>
            <p className="font-serif text-2xl md:text-3xl text-muted-foreground leading-snug pt-4">
              The aim was to find the parts of the city with enough demand to keep every car busy.
            </p>
          </div>
        </section>

        {/* V.03 ASSUMPTIONS */}
        <section className="pb-28">
          <h2 className="font-serif text-3xl md:text-4xl mb-10">Operating assumptions</h2>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-8">
            {opMetrics.map((m) => (
              <div key={m.l} className="border border-border/60 rounded-xl p-5 bg-card/30">
                <div className="text-xs text-muted-foreground mb-3">{m.l}</div>
                <div className="font-sans font-bold text-2xl">{m.v}</div>
              </div>
            ))}
          </div>
          <div className="border border-brand/40 rounded-2xl p-10 bg-brand/[0.04] text-center">
                        <p className="font-serif text-xl md:text-2xl">In a day, one car can complete about 12 trips.</p>
            <p className="text-sm text-muted-foreground mt-3">These numbers feed into all the fleet planning below.</p>
          </div>
        </section>

        {/* V.04 FLEET LOGISTICS */}
        <section className="pb-28">
          <h2 className="font-serif text-3xl md:text-4xl mb-10">Capacity at launch</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {baseline.map((b) => (
              <div key={b.l} className="border border-border/60 rounded-2xl p-8 bg-card/30 text-center">
                <div className="text-xs text-muted-foreground mb-6">{b.l}</div>
                <div className={`font-serif text-6xl mb-6 ${accent}`}>{b.v}</div>
                <div className="text-sm text-muted-foreground">{b.s}</div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-10">
            This sets the volume the rest of the plan has to support.
          </p>
        </section>

        {/* V.05 SUPPLY STRATEGY */}
        <section className="pb-28">
          <h2 className="font-serif text-3xl md:text-4xl mb-10">How many drivers</h2>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="border border-border/60 rounded-2xl p-8 bg-card/30">
              <div className="mb-5 text-sm font-medium">Market potential</div>
              {[["Potential users","875K"],["Daily conversion","0.01%"],["Expected daily riders","~87.5K"]].map(([l,v]) => (
                <div key={l} className="flex items-center justify-between py-4 border-b border-border/40 last:border-0">
                  <span className="text-sm">{l}</span>
                  <span className="font-serif text-xl">{v}</span>
                </div>
              ))}
            </div>
            <div className="border border-border/60 rounded-2xl p-8 bg-card/30">
              <div className="mb-5 text-sm font-medium">Calculation</div>
              {[["Fleet","150 cars"],["Drivers per car","2"]].map(([l,v]) => (
                <div key={l} className="flex items-center justify-between py-4 border-b border-border/40">
                  <span className="text-sm">{l}</span>
                  <span className="font-serif text-xl">{v}</span>
                </div>
              ))}
              <div className="flex items-center justify-between py-4">
                <span className={`text-sm ${accent}`}>Drivers needed</span>
                <span className={`font-serif text-xl ${accent}`}>300</span>
              </div>
            </div>
          </div>
          <div className="border border-brand/40 rounded-2xl p-8 bg-brand/[0.04] mt-5 grid md:grid-cols-2 gap-8">
            <div>
              <div className="mb-2 text-sm text-muted-foreground">Recommendation</div>
              <p className="font-serif text-xl md:text-2xl">Launch with about 300 driver partners.</p>
            </div>
            <div className="text-right">
              <div className="mb-2 text-sm text-muted-foreground">Why</div>
              <p className="text-muted-foreground">Two shifts per car keep each vehicle on the road longer, which is where the return comes from.</p>
            </div>
          </div>
        </section>

        {/* V.06 INFRASTRUCTURE */}
        <section className="pb-28">
          <h2 className="font-serif text-3xl md:text-4xl mb-10">Charging hubs</h2>
          <div className="grid md:grid-cols-3 gap-5 mb-6">
            {infra.map((i) => (
              <div key={i.l} className="border border-border/60 rounded-2xl p-7 bg-card/30">
                <div className="text-xs text-muted-foreground mb-5">{i.l}</div>
                <div className={`font-serif text-4xl ${accent}`}>{i.v}</div>
              </div>
            ))}
          </div>
          <div className="border border-brand/40 rounded-2xl p-10 bg-brand/[0.04]">
            <div className="mb-2 text-sm text-muted-foreground">Recommendation</div>
            <h3 className="font-serif text-2xl md:text-3xl mb-10">Set up at least 5 charging hubs across Mumbai.</h3>
            <div className="grid sm:grid-cols-3 gap-8">
              {[["Goal 1","Less downtime"],["Goal 2","Steady utilization"],["Goal 3","Room to scale"]].map(([l,t]) => (
                <div key={l}>
                  <div className="text-xs text-muted-foreground mb-3">{l}</div>
                  <div className="font-sans font-semibold">{t}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* V.07 SERVICE ZONES */}
        <section className="pb-28">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl mb-6">Where to launch</h2>
              <p className="text-muted-foreground mb-8 max-w-md">
                Don't launch across all of Mumbai at once. Start with the areas that have the most ride demand and the most competitor activity.
              </p>
              <div className="mb-4 text-sm font-medium">Objectives</div>
              <ol className="space-y-3 mb-10">
                {["Dense ride demand","Win over competitors' riders","Better retention"].map((t, i) => (
                  <li key={t} className="flex items-center gap-4">
                    <span className={`font-mono text-[0.65rem] rounded-full border border-brand/50 ${accent} px-2 py-0.5`}>{i+1}</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ol>
              <div className="flex flex-wrap gap-2">
                {zones.map((z) => (
                  <span key={z} className={`rounded-full border border-brand/40 px-3 py-1 font-mono text-[0.7rem] ${accent}`}>{z}</span>
                ))}
              </div>
            </div>
            <div className="relative aspect-square border border-border/60 rounded-[50%] bg-card/20 p-8">
              {[
                {n:"Thane", x:60, y:15},{n:"Goregaon", x:65, y:30},{n:"Malad", x:78, y:38},
                {n:"Andheri", x:60, y:48},{n:"Vashi", x:82, y:55},{n:"Bandra", x:55, y:62},
                {n:"Worli", x:48, y:75},{n:"Churchgate", x:38, y:88},
              ].map((p) => (
                <div key={p.n} className="absolute flex items-center gap-2" style={{ left: `${p.x}%`, top: `${p.y}%` }}>
                  <span className="h-2 w-2 rounded-full bg-brand" />
                  <span className="font-mono text-[0.65rem] text-muted-foreground -rotate-[20deg] origin-left">{p.n}</span>
                </div>
              ))}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-[0.65rem] tracking-wider text-muted-foreground">
                Launch zones (approximate)
              </div>
            </div>
          </div>
        </section>

        {/* V.08 PRIORITY AREAS */}
        <section className="pb-28">
          <h2 className="font-serif text-3xl md:text-4xl mb-10">Priority areas</h2>
          <div className="grid md:grid-cols-3 gap-5 mb-6">
            {expansionZones.map((z) => (
              <div key={z.title} className="border border-border/60 rounded-2xl p-7 bg-card/30">
                <h3 className={`font-serif text-2xl mb-4 ${accent}`}>{z.title}</h3>
                {z.sub && <div className="text-xs text-muted-foreground mb-3">{z.sub}</div>}
                {z.bullets ? (
                  <ul className="space-y-2">
                    {z.bullets.map((b) => (
                      <li key={b} className="flex gap-2 text-sm text-muted-foreground"><span>•</span><span>{b}</span></li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-muted-foreground">{z.body}</p>
                )}
              </div>
            ))}
          </div>
          <div className="border border-brand/40 rounded-2xl p-10 bg-brand/[0.04] flex flex-wrap items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h3 className="font-serif text-3xl md:text-4xl mb-4">The airport comes first</h3>
              <p className="text-muted-foreground">Airport riders care most about surge pricing and cancellations. BluSmart's fixed prices and guaranteed availability stand out most here, and it's a high-margin segment.</p>
            </div>
            <div className={`h-28 w-28 rounded-full border border-brand/60 flex items-center justify-center text-center font-mono text-[0.65rem] tracking-wider ${accent}`}>
              High<br />margin
            </div>
          </div>
        </section>

        {/* V.09 INFRA STRATEGY */}
        <section className="pb-28">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="border border-border/60 rounded-2xl bg-card/20 p-8 aspect-square relative">
              <div className="text-xs text-muted-foreground absolute top-6 left-6">Hub layout</div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative h-2/3 w-2/3 rounded-full border border-border/50">
                  <span className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-brand`} />
                  {[
                    { style: { top: 0, left: "50%", transform: "translate(-50%,-50%)" } },
                    { style: { top: "50%", right: 0, transform: "translate(50%,-50%)" } },
                    { style: { bottom: 0, left: "50%", transform: "translate(-50%,50%)" } },
                    { style: { top: "50%", left: 0, transform: "translate(-50%,-50%)" } },
                  ].map((p, i) => (
                    <span key={i} className="absolute h-2 w-2 rounded-full bg-muted-foreground" style={p.style} />
                  ))}
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-serif text-3xl md:text-4xl mb-6">Where to put the hubs</h2>
              <p className="text-muted-foreground mb-8">
                Hubs should be spread across the key zones so cars don't drive empty just to charge. Placing them where zones meet gives the widest coverage.
              </p>
              <div className="border-l-2 border-brand pl-6 py-2">
                <div className="mb-2 text-sm text-muted-foreground">Objective</div>
                <p className="font-serif text-lg">Keep charging downtime between drop-offs and pickups as low as possible, so cars spend more hours earning.</p>
              </div>
            </div>
          </div>
        </section>

        {/* V.10 GTM PLAN */}
        <section className="pb-28">
          <h2 className="font-serif text-3xl md:text-4xl mb-3">Getting riders</h2>
          <p className="text-muted-foreground mb-10">Focus on early adopters, with clear positioning and a few well-chosen incentives.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {gtm.map((g) => (
              <div key={g.n} className="border border-border/60 rounded-2xl p-6 bg-card/30">
                <div className={`mb-3 text-sm tabular-nums ${accent}`}>{g.n}</div>
                <h3 className="font-serif text-xl mb-4">{g.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{g.b}</p>
              </div>
            ))}
          </div>
        </section>

        {/* V.11 MARKET EDGE */}
        <section className="pb-28">
          <h2 className="font-serif text-3xl md:text-4xl mb-10">Why riders would switch</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {differentiators.map((d) => (
              <div key={d.t} className="border border-border/60 rounded-2xl p-6 bg-card/30 text-center">
                <h3 className="font-serif text-lg mb-3">{d.t}</h3>
                <div className="text-xs text-muted-foreground">{d.s}</div>
              </div>
            ))}
          </div>
        </section>

        {/* V.12 OPERATIONAL FRAMEWORK */}
        <section className="pb-28">
          <h2 className="font-serif text-3xl md:text-4xl mb-10">How the operations fit together</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {opFramework.map((f) => (
              <div key={f.t} className="border border-border/60 border-l-2 border-l-brand rounded-2xl p-7 bg-card/30">
                <h3 className={`font-serif text-2xl mb-4 ${accent}`}>{f.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.b}</p>
              </div>
            ))}
          </div>
        </section>

        {/* V.13 KPI DASHBOARD */}
        <section className="pb-28">
          <h2 className="font-serif text-3xl md:text-4xl mb-10">How to measure success</h2>
          <div className="border border-brand/40 rounded-2xl p-12 md:p-16 bg-brand/[0.04] text-center mb-6">
            <div className={`mb-4 text-sm ${accent}`}>North star metric</div>
            <h3 className="font-serif text-4xl md:text-5xl mb-6">Completed rides per day</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">The clearest single signal of how efficiently the fleet is used and how much demand the service is capturing.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {kpis.map((k) => (
              <div key={k.t} className="border border-border/60 rounded-2xl p-6 bg-card/30">
                <div className="text-xs text-muted-foreground mb-3">{k.l}</div>
                <h4 className="font-sans font-semibold">{k.t}</h4>
              </div>
            ))}
          </div>
        </section>

        {/* V.14 RISK MANAGEMENT */}
        <section className="pb-28">
          <h2 className="font-serif text-3xl md:text-4xl mb-10">Risks</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {risks.map((r) => (
              <div key={r.n} className="border border-border/60 rounded-2xl p-7 bg-card/30">
                <div className="mb-3 text-sm text-muted-foreground">Risk {r.n}</div>
                <h3 className="font-serif text-2xl mb-6 pb-6 border-b border-border/40">{r.t}</h3>
                <div className="mb-2 text-sm font-medium">How to handle it</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.m}</p>
              </div>
            ))}
          </div>
        </section>

        {/* V.15 REFLECTION */}
        <section className="pb-28">
          <h2 className="font-serif text-3xl md:text-4xl mb-10">What I took away</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {learnings.map((l, i) => (
              <div key={i} className="border border-border/60 rounded-2xl p-7 bg-card/30">
                <div className="mb-3 text-sm text-muted-foreground tabular-nums">{i + 1}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{l}</p>
              </div>
            ))}
          </div>
        </section>
    </CaseShell>
  );
}
