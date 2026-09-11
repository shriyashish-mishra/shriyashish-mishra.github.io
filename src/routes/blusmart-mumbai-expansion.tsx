import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/blusmart-mumbai-expansion")({
  head: () => ({
    meta: [
      { title: "Launching BluSmart in Mumbai — Case Study" },
      { name: "description", content: "Go-to-market strategy for launching BluSmart in Mumbai with an initial fleet of 150 Tata Ziptron EVs." },
    ],
  }),
  component: BluSmartCaseStudy,
});

function Label({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`label-mono ${className}`}>{children}</div>;
}

function SectionTag({ v, label }: { v: string; label: string }) {
  return <div className="label-mono mb-8">V.{v} / {label}</div>;
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
  { l: "AVG_TRIP", v: "20 min" },
  { l: "TRAFFIC", v: "15 min" },
  { l: "WAITING", v: "20 min" },
  { l: "CYCLE", v: "55 min" },
  { l: "TRIPS/HR", v: "~1" },
  { l: "TRIPS/DAY", v: "12" },
];

const baseline = [
  { l: "DAILY CYCLES", v: "12", s: "Trips per vehicle per day" },
  { l: "INITIAL FLEET", v: "150", s: "Tata Ziptron EVs" },
  { l: "CAPACITY", v: "1800", s: "Total expected daily trips" },
];

const infra = [
  { l: "TOTAL FLEET", v: "150 EVs" },
  { l: "CAPACITY / HUB", v: "30 EVs" },
  { l: "REQUIRED HUBS", v: "5" },
];

const zones = ["Andheri","Bandra","Dadar","Worli","Goregaon","Malad","BKC","Vashi","Ghatkopar","Thane","Churchgate","Sion","Kurla"];

const expansionZones = [
  { title: "Navi Mumbai", bullets: ["Large residential population", "Lower congestion levels", "Optimized for EV operations", "High intercity potential"] },
  { title: "Railway Hubs", sub: "HUB: Dadar, CST, Bandra Terminus", body: "Concentrated daily commuter traffic with high predictable demand peaks." },
  { title: "Tourist Zones", sub: "LOCATIONS: Marine Drive, Wankhede", body: "Steady leisure demand from non-commuters, especially during weekends." },
];

const gtm = [
  { n: "01", t: "Monsoon Positioning", b: "Reliable transport when competitors fail during Mumbai's rain seasons." },
  { n: "02", t: "First Ride Offers", b: "Discounted entry pricing to reduce adoption friction and build trust." },
  { n: "03", t: "Referral Program", b: "Incentivize power users to lower CAC through organic word-of-mouth." },
  { n: "04", t: "Points-Based Rewards", b: "Tiered loyalty system to increase lifetime value and repeat ride rate." },
  { n: "05", t: "Digital Marketing", b: "Targeted LinkedIn/Instagram ads for corporate corridors like BKC." },
];

const differentiators = [
  { t: "No cancellations", s: "RELIABILITY" },
  { t: "Sustainable", s: "TRANSPORTATION" },
  { t: "Clean vehicles", s: "EXPERIENCE" },
  { t: "Fixed pricing", s: "TRANSPARENCY" },
  { t: "Airport reliability", s: "PREMIUM" },
  { t: "Better experience", s: "RIDER FOCUS" },
];

const opFramework = [
  { t: "Fleet Allocation Logic", b: "Distribute 150 vehicles across priority zones based on demand density and trip volume. Peak hours require higher concentration in business districts (BKC, Andheri). Off-peak shifts focus to residential zones and airport routes." },
  { t: "Charging Hub Logic", b: "5 hubs with 30-vehicle capacity each. Vehicles rotate through hubs during driver shift changes. Hubs are positioned at zone intersections to minimize dead-kilometers." },
  { t: "Geographic Expansion Logic", b: "Phase 1 covers core Mumbai + Navi Mumbai. Phase 2 extends to Thane and western suburbs. Phase 3 adds eastern corridors. Expansion is gated by utilization rates >75% and driver supply stability." },
  { t: "User Acquisition Approach", b: "Digital-first launch targeting airport commuters and monsoon riders. Partnerships with corporate offices in BKC for B2B bookings. Referral mechanics to lower CAC." },
];

const kpis = [
  { l: "PERFORMANCE", t: "Fleet Utilization" },
  { l: "SUPPLY", t: "Driver Utilization" },
  { l: "INFRA", t: "Charging Hub Use" },
  { l: "GROWTH", t: "User Acquisition" },
  { l: "FINANCE", t: "CAC Optimization" },
  { l: "LOYALTY", t: "Retention Rate" },
  { l: "LTV", t: "Repeat Ride Rate" },
  { l: "STRATEGIC", t: "Airport Ride Share" },
];

const risks = [
  { n: "01", t: "Insufficient charging infrastructure.", m: "Strategic hub placement at high-traffic zone intersections to minimize dead-km." },
  { n: "02", t: "Low driver availability.", m: "Launch with 2:1 driver ratio to handle shift overlap and fatigue effectively." },
  { n: "03", t: "Low user adoption.", m: "Aggressive monsoon-themed campaigns and high-trust corporate referrals." },
  { n: "04", t: "Major competitor surge.", m: "Focus on fixed pricing transparency and guaranteed reliability during surge periods." },
];

const learnings = [
  "Market expansion requires rigorous operational planning before growth scaling.",
  "Supply-side readiness is critical to maintaining high service levels from day one.",
  "Charging infrastructure determines EV scalability and fleet revenue uptime.",
  "User acquisition and fleet planning must be designed synchronously for efficiency.",
  "Product strategy extends beyond software into the physical business operations that power the entire customer experience.",
];

function BluSmartCaseStudy() {
  const accent = "text-[#5b8def]";
  return (
    <div className="relative z-10 min-h-screen text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/40">
        <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-16 h-16 flex items-center justify-between">
          <Link to="/" className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.18em] text-muted-foreground hover:text-foreground transition">
            <ArrowLeft className="h-3.5 w-3.5" /> BACK TO PORTFOLIO
          </Link>
          <div className="flex items-center gap-5">
            <div className="font-mono text-xs tracking-[0.18em] text-muted-foreground">CASE_STUDY_03</div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-16">
        {/* HERO */}
        <section className="pt-24 pb-32">
          <div className={`label-mono mb-10 ${accent}`}>CASE_STUDY_03</div>
          <h1 className="font-serif text-[clamp(3rem,9vw,8rem)] leading-[1.02] tracking-[-0.02em]">
            Launching BluSmart in Mumbai
          </h1>
          <div className="mt-14 flex flex-wrap items-center gap-4">
            <span className={`rounded-full border border-[#5b8def]/40 px-5 py-2 font-mono text-[0.7rem] tracking-[0.18em] ${accent}`}>GO-TO-MARKET STRATEGY</span>
            <span className={`rounded-full border border-[#5b8def]/40 px-5 py-2 font-mono text-[0.7rem] tracking-[0.18em] ${accent}`}>PRODUCT MANAGER</span>
            <span className="font-mono text-xs text-muted-foreground ml-2">Market Expansion · Operations · Supply Strategy · User Acquisition</span>
          </div>
        </section>

        {/* BUSINESS CONTEXT */}
        <section className="pb-28">
          <Label className={`mb-6 ${accent}`}>BUSINESS_CONTEXT.TXT</Label>
          <div className="border border-border/60 rounded-2xl p-8 md:p-12 bg-card/30 max-w-3xl">
            <p className="font-serif text-xl md:text-2xl leading-snug mb-6">
              BluSmart plans to launch operations in Mumbai with an initial fleet of 150 Tata Ziptron EVs.
            </p>
            <p className="text-muted-foreground mb-6">The challenge is not simply entering a new city. The challenge is determining:</p>
            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-3 mb-8">
              {[...challengeLeft, ...challengeRight].map((c) => (
                <div key={c} className="flex items-center gap-3 text-sm">
                  <span className={`h-1.5 w-1.5 rounded-full bg-[#5b8def] shrink-0`} />
                  <span>{c}</span>
                </div>
              ))}
            </div>
            <p className="italic text-muted-foreground">...while ensuring long-term operational viability.</p>
          </div>
        </section>

        {/* V.01 PROBLEM STATEMENT */}
        <section className="pb-28 grid md:grid-cols-[2fr_1fr] gap-10">
          <div>
            <SectionTag v="01" label="PROBLEM_STATEMENT" />
            <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-10">
              As a Product Manager at BluSmart, design a launch strategy for Mumbai using an initial fleet of 150 Tata Ziptron EVs.
            </h2>
            <ol className="space-y-3">
              {questions.map((q, i) => (
                <li key={q} className="flex gap-4 text-sm md:text-base">
                  <span className={`font-mono text-xs ${accent} pt-1`}>{String(i + 1).padStart(2, "0")}.</span>
                  <span className="text-foreground/90">{q}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="border border-[#5b8def]/40 rounded-2xl p-8 bg-[#5b8def]/[0.04] self-start">
            <div className={`label-mono mb-5 ${accent}`}>STRATEGIC OBJECTIVE</div>
            <p className="font-serif text-lg leading-snug">
              The goal is to maximize: Orders, User acquisition, User retention, Competitive conversion while maintaining operational efficiency.
            </p>
          </div>
        </section>

        {/* V.02 APPROACH */}
        <section className="pb-28">
          <SectionTag v="02" label="APPROACH" />
          <h2 className="font-serif text-3xl md:text-4xl mb-12">The launch strategy was built using:</h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <ul className="space-y-3">
              {sources.map((s, i) => (
                <li key={s} className="flex items-center justify-between border border-border/60 rounded-xl px-6 py-4 bg-card/30">
                  <span>{s}</span>
                  <span className={`font-mono text-[0.7rem] tracking-[0.18em] ${accent}`}>SOURCE_{String(i + 1).padStart(2, "0")}</span>
                </li>
              ))}
            </ul>
            <p className="font-serif text-2xl md:text-3xl text-muted-foreground leading-snug pt-4">
              The objective was to identify high-demand locations where BluSmart could generate maximum utilization.
            </p>
          </div>
        </section>

        {/* V.03 ASSUMPTIONS */}
        <section className="pb-28">
          <SectionTag v="03" label="ASSUMPTIONS" />
          <h2 className="font-serif text-3xl md:text-4xl mb-10">Operational Assumptions</h2>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-8">
            {opMetrics.map((m) => (
              <div key={m.l} className="border border-border/60 rounded-xl p-5 bg-card/30">
                <div className="label-mono mb-3">{m.l}</div>
                <div className="font-sans font-bold text-2xl">{m.v}</div>
              </div>
            ))}
          </div>
          <div className="border border-[#5b8def]/40 rounded-2xl p-10 bg-[#5b8def]/[0.04] text-center">
            <div className={`label-mono mb-4 ${accent}`}>HIGHLIGHT</div>
            <p className="font-serif text-xl md:text-2xl">In 24 hours: One cab can complete approximately 12 trips.</p>
            <p className="font-mono text-xs text-muted-foreground mt-3 tracking-wider">These assumptions are used throughout fleet planning.</p>
          </div>
        </section>

        {/* V.04 FLEET LOGISTICS */}
        <section className="pb-28">
          <SectionTag v="04" label="FLEET_LOGISTICS" />
          <h2 className="font-serif text-3xl md:text-4xl mb-10">Demand & Capacity Baseline</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {baseline.map((b) => (
              <div key={b.l} className="border border-border/60 rounded-2xl p-8 bg-card/30 text-center">
                <div className="label-mono mb-6">{b.l}</div>
                <div className={`font-serif text-6xl mb-6 ${accent}`}>{b.v}</div>
                <div className="text-sm text-muted-foreground">{b.s}</div>
              </div>
            ))}
          </div>
          <p className="text-center font-mono text-xs text-muted-foreground tracking-wider mt-10">
            Establishing the volume baseline for operational logistics.
          </p>
        </section>

        {/* V.05 SUPPLY STRATEGY */}
        <section className="pb-28">
          <SectionTag v="05" label="SUPPLY_STRATEGY" />
          <div className="grid md:grid-cols-2 gap-5">
            <div className="border border-border/60 rounded-2xl p-8 bg-card/30">
              <div className={`label-mono mb-6 ${accent}`}>MARKET POTENTIAL</div>
              {[["Potential User Base","875K"],["Daily Conversion","0.01%"],["Expected Daily Riders","~87.5K"]].map(([l,v]) => (
                <div key={l} className="flex items-center justify-between py-4 border-b border-border/40 last:border-0">
                  <span className="text-sm">{l}</span>
                  <span className="font-serif text-xl">{v}</span>
                </div>
              ))}
            </div>
            <div className="border border-border/60 rounded-2xl p-8 bg-card/30">
              <div className={`label-mono mb-6 ${accent}`}>CALCULATION</div>
              {[["Target Fleet","150 Vehicles"],["Driver-to-cab Ratio","2 Drivers / Cab"]].map(([l,v]) => (
                <div key={l} className="flex items-center justify-between py-4 border-b border-border/40">
                  <span className="text-sm">{l}</span>
                  <span className="font-serif text-xl">{v}</span>
                </div>
              ))}
              <div className="flex items-center justify-between py-4">
                <span className={`text-sm ${accent}`}>Required Drivers</span>
                <span className={`font-serif text-xl ${accent}`}>300</span>
              </div>
            </div>
          </div>
          <div className="border border-[#5b8def]/40 rounded-2xl p-8 bg-[#5b8def]/[0.04] mt-5 grid md:grid-cols-2 gap-8">
            <div>
              <div className={`label-mono mb-4 ${accent}`}>RECOMMENDATION</div>
              <p className="font-serif text-xl md:text-2xl">Launch with approximately 300 driver partners.</p>
            </div>
            <div className="text-right">
              <div className={`label-mono mb-4 ${accent}`}>REASONING</div>
              <p className="text-muted-foreground">Dual-shift models ensure maximum ROI on vehicle uptime.</p>
            </div>
          </div>
        </section>

        {/* V.06 INFRASTRUCTURE */}
        <section className="pb-28">
          <SectionTag v="06" label="INFRASTRUCTURE" />
          <div className="grid md:grid-cols-3 gap-5 mb-6">
            {infra.map((i) => (
              <div key={i.l} className="border border-border/60 rounded-2xl p-7 bg-card/30">
                <div className="label-mono mb-5">{i.l}</div>
                <div className={`font-serif text-4xl ${accent}`}>{i.v}</div>
              </div>
            ))}
          </div>
          <div className="border border-[#5b8def]/40 rounded-2xl p-10 bg-[#5b8def]/[0.04]">
            <div className={`label-mono mb-5 ${accent}`}>RECOMMENDATION</div>
            <h3 className="font-serif text-2xl md:text-3xl mb-10">Establish a minimum of 5 strategic charging hubs across Mumbai.</h3>
            <div className="grid sm:grid-cols-3 gap-8">
              {[["GOAL 01","Reduce downtime."],["GOAL 02","Maintain utilization."],["GOAL 03","Support scaling."]].map(([l,t]) => (
                <div key={l}>
                  <div className="label-mono mb-3">{l}</div>
                  <div className="font-sans font-semibold">{t}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* V.07 SERVICE ZONES */}
        <section className="pb-28">
          <SectionTag v="07" label="SERVICE_ZONES" />
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl mb-6">Serviceable Zone Selection</h2>
              <p className="text-muted-foreground mb-8 max-w-md">
                Launch should not target all of Mumbai initially. Priority should be given to zones with high order density and competitor activity.
              </p>
              <div className={`label-mono mb-5 ${accent}`}>KEY OBJECTIVES</div>
              <ol className="space-y-3 mb-10">
                {["High order volume density","Convert competitor users","Improve retention rates"].map((t, i) => (
                  <li key={t} className="flex items-center gap-4">
                    <span className={`font-mono text-[0.65rem] rounded-full border border-[#5b8def]/50 ${accent} px-2 py-0.5`}>{String(i+1).padStart(2,"0")}</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ol>
              <div className="flex flex-wrap gap-2">
                {zones.map((z) => (
                  <span key={z} className={`rounded-full border border-[#5b8def]/40 px-3 py-1 font-mono text-[0.7rem] ${accent}`}>{z}</span>
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
                  <span className="h-2 w-2 rounded-full bg-[#5b8def]" />
                  <span className="font-mono text-[0.65rem] text-muted-foreground -rotate-[20deg] origin-left">{p.n}</span>
                </div>
              ))}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-[0.65rem] tracking-wider text-muted-foreground">
                MUMBAI_SERVICE_MAP.LAYER
              </div>
            </div>
          </div>
        </section>

        {/* V.08 PRIORITY AREAS */}
        <section className="pb-28">
          <SectionTag v="08" label="PRIORITY_AREAS" />
          <h2 className="font-serif text-3xl md:text-4xl mb-10">Targeted Expansion Zones</h2>
          <div className="grid md:grid-cols-3 gap-5 mb-6">
            {expansionZones.map((z) => (
              <div key={z.title} className="border border-border/60 rounded-2xl p-7 bg-card/30">
                <h3 className={`font-serif text-2xl mb-4 ${accent}`}>{z.title}</h3>
                {z.sub && <div className="label-mono mb-3">{z.sub}</div>}
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
          <div className="border border-[#5b8def]/40 rounded-2xl p-10 bg-[#5b8def]/[0.04] flex flex-wrap items-center justify-between gap-8">
            <div className="max-w-2xl">
              <h3 className="font-serif text-3xl md:text-4xl mb-4">Airport (Primary Zone)</h3>
              <p className="text-muted-foreground">Users are highly sensitive to surge pricing and cancellations. BluSmart's fixed pricing and guaranteed availability create massive differentiation in this high-margin segment.</p>
            </div>
            <div className={`h-28 w-28 rounded-full border border-[#5b8def]/60 flex items-center justify-center text-center font-mono text-[0.65rem] tracking-wider ${accent}`}>
              HIGH MARGIN<br />REVENUE
            </div>
          </div>
        </section>

        {/* V.09 INFRA STRATEGY */}
        <section className="pb-28">
          <SectionTag v="09" label="INFRA_STRATEGY" />
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="border border-border/60 rounded-2xl bg-card/20 p-8 aspect-square relative">
              <div className="label-mono absolute top-6 left-6">DISTRIBUTED_HUB_TOPOLOGY.V1</div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative h-2/3 w-2/3 rounded-full border border-border/50">
                  <span className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-[#5b8def]`} />
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
              <h2 className="font-serif text-3xl md:text-4xl mb-6">Charging Hub Placement Strategy</h2>
              <p className="text-muted-foreground mb-8">
                Charging hubs must be distributed across key zones to minimize empty runs for charging. Strategic placement at zone intersections ensures maximum coverage.
              </p>
              <div className="border-l-2 border-[#5b8def] pl-6 py-2">
                <div className={`label-mono mb-3 ${accent}`}>CORE OBJECTIVE</div>
                <p className="font-serif italic text-lg">"Minimize charging downtime between pickup and drop-off locations to maximize fleet revenue hours."</p>
              </div>
            </div>
          </div>
        </section>

        {/* V.10 GTM PLAN */}
        <section className="pb-28">
          <SectionTag v="10" label="GTM_PLAN" />
          <h2 className="font-serif text-3xl md:text-4xl mb-3">User Acquisition & Launch</h2>
          <p className="text-muted-foreground mb-10">Focusing on early adopters through strategic positioning and incentives.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {gtm.map((g) => (
              <div key={g.n} className="border border-border/60 rounded-2xl p-6 bg-card/30">
                <div className={`label-mono mb-5 ${accent}`}>STRATEGY_{g.n}</div>
                <h3 className="font-serif text-xl mb-4">{g.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{g.b}</p>
              </div>
            ))}
          </div>
        </section>

        {/* V.11 MARKET EDGE */}
        <section className="pb-28">
          <SectionTag v="11" label="MARKET_EDGE" />
          <h2 className="font-serif text-3xl md:text-4xl mb-10">Strategic Differentiators</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {differentiators.map((d) => (
              <div key={d.t} className="border border-border/60 rounded-2xl p-6 bg-card/30 text-center">
                <h3 className="font-serif text-lg mb-3">{d.t}</h3>
                <div className="label-mono">{d.s}</div>
              </div>
            ))}
          </div>
        </section>

        {/* V.12 OPERATIONAL FRAMEWORK */}
        <section className="pb-28">
          <SectionTag v="12" label="PM_THINKING" />
          <h2 className="font-serif text-3xl md:text-4xl mb-10">Operational Planning Framework</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {opFramework.map((f) => (
              <div key={f.t} className="border border-border/60 border-l-2 border-l-[#5b8def] rounded-2xl p-7 bg-card/30">
                <h3 className={`font-serif text-2xl mb-4 ${accent}`}>{f.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.b}</p>
              </div>
            ))}
          </div>
        </section>

        {/* V.13 KPI DASHBOARD */}
        <section className="pb-28">
          <SectionTag v="13" label="KPI_DASHBOARD" />
          <h2 className="font-serif text-3xl md:text-4xl mb-10">Success Metrics</h2>
          <div className="border border-[#5b8def]/40 rounded-2xl p-12 md:p-16 bg-[#5b8def]/[0.04] text-center mb-6">
            <div className={`label-mono mb-6 ${accent}`}>NORTH STAR METRIC</div>
            <h3 className="font-serif text-4xl md:text-6xl mb-6">Completed Rides per Day</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">The primary indicator of both fleet utilization efficiency and market demand capture.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {kpis.map((k) => (
              <div key={k.t} className="border border-border/60 rounded-2xl p-6 bg-card/30">
                <div className="label-mono mb-3">{k.l}</div>
                <h4 className="font-sans font-semibold">{k.t}</h4>
              </div>
            ))}
          </div>
        </section>

        {/* V.14 RISK MANAGEMENT */}
        <section className="pb-28">
          <SectionTag v="14" label="RISK_MANAGEMENT" />
          <h2 className="font-serif text-3xl md:text-4xl mb-10">Risks & Mitigation</h2>
          <div className="grid md:grid-cols-2 gap-5">
            {risks.map((r) => (
              <div key={r.n} className="border border-border/60 rounded-2xl p-7 bg-card/30">
                <div className="font-mono text-[0.7rem] tracking-[0.18em] text-[#f97066] mb-4">RISK_{r.n}</div>
                <h3 className="font-serif text-2xl mb-6 pb-6 border-b border-border/40">{r.t}</h3>
                <div className="font-mono text-[0.7rem] tracking-[0.18em] text-[#3ccb7f] mb-3">MITIGATION</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.m}</p>
              </div>
            ))}
          </div>
        </section>

        {/* V.15 REFLECTION */}
        <section className="pb-28">
          <SectionTag v="15" label="REFLECTION" />
          <h2 className="font-serif text-3xl md:text-4xl mb-10">Key Learnings</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {learnings.map((l, i) => (
              <div key={i} className="border border-border/60 rounded-2xl p-7 bg-card/30">
                <div className={`font-serif text-3xl mb-5 ${accent}`}>{String(i + 1).padStart(2, "0")}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{l}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PREV / NEXT NAV */}
        <section className="py-16 border-t border-border/50 grid sm:grid-cols-2 gap-6">
          <Link to="/whatsapp-group-engagement" className="group block">
            <div className="label-mono mb-3">PREVIOUS</div>
            <div className="flex items-center gap-3 font-serif italic text-2xl text-muted-foreground group-hover:text-foreground transition">
              <ArrowLeft className="h-5 w-5" /> WhatsApp Group User Engagement
            </div>
          </Link>
          <Link to="/spotify-loyalty-engine" className="group block sm:text-right">
            <div className="label-mono mb-3">NEXT</div>
            <div className="flex items-center gap-3 sm:justify-end font-serif italic text-2xl text-muted-foreground group-hover:text-foreground transition">
              Spotify Loyalty Engine <ArrowRight className="h-5 w-5" />
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
