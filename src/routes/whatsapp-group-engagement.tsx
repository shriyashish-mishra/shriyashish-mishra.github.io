import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { CaseShell } from "@/components/site-frame";

export const Route = createFileRoute("/whatsapp-group-engagement")({
  head: () => ({
    meta: [
      { title: "WhatsApp group engagement · Case study" },
      { name: "description", content: "How WhatsApp could keep groups active without making the app more complicated." },
      { property: "og:title", content: "WhatsApp group engagement" },
      { property: "og:description", content: "How WhatsApp could keep groups active without making the app more complicated." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary" },
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
    <div className="font-mono text-xs tracking-[0.18em] text-brand mb-6">
      {children}
    </div>
  );
}

function SectionH({ children }: { children: React.ReactNode }) {
  return <h2 className="font-serif text-4xl md:text-5xl mb-8">{children}</h2>;
}

const personas = [
  {
    name: "Ayush Sharma", role: "Startup founder", color: "emerald",
    goals: ["Keep the team in sync", "Coordinate people across functions", "Share company updates", "Run discussions without chaos"],
    pains: ["Conversations are disorganized", "Important updates get buried", "Files are hard to find later", "Repeating the same message to different people"],
    needs: ["More structure", "Easier to find things", "Quicker ways to look back"],
  },
  {
    name: "Rohan Dutta", role: "Student and gamer", color: "orange",
    goals: ["Be part of communities", "Talk about shared interests", "Plan events and meetups"],
    pains: ["Too many notifications", "Most messages aren't relevant", "Hard to follow a thread", "Good posts get lost"],
    needs: ["Topic-based discussions", "Low-effort ways to join in", "A better community experience"],
  },
];

const insights = [
  "People mute groups once the message volume gets too high.",
  "They join in when the conversation is relevant to them.",
  "Groups with some structure stay more active.",
  "Text alone isn't enough. People want quicker ways to respond.",
];

const competitors = [
  { name: "Slack", points: ["Strong channel management", "Threads that keep replies together", "Lots of integrations"], quote: "Structure keeps people engaged." },
  { name: "Discord", points: ["Built around communities", "Flexible roles and permissions", "Drop-in voice and video"], quote: "Communities do better when conversations are split by topic." },
  { name: "Telegram", points: ["Very large groups", "Bots for automation", "Public channels for reach"], quote: "The bigger the group, the more structure it needs." },
];

const features = [
  {
    p: "Priority 1", color: "emerald",
    title: "Subgroups",
    problem: "In large groups, around 90% of messages aren't relevant to any one member, so people mute the whole group.",
    solution: "Let members join topic-based subgroups inside a parent group. They follow what matters to them and still stay part of the wider community.",
    benefits: ["Fewer notifications", "More relevant conversations", "Better-organized communities"],
  },
  {
    p: "Priority 2", color: "blue",
    title: "Native polls",
    problem: "Making a decision in a group means scrolling through hundreds of replies.",
    solution: "A poll settles it in one message, and gives quieter members an easy way to take part.",
    benefits: ["Event planning", "Team decisions", "Community votes"],
  },
  {
    p: "Priority 3", color: "orange",
    title: "Built-in expense splitting",
    problem: "Groups planning trips or sharing costs move to other apps to keep track of who owes what.",
    solution: "Expense tracking inside the chat, for trips, roommates and events. It gives the group a practical reason to come back.",
    benefits: ["Trips", "Roommates", "Events"],
  },
  {
    p: "Priority 4", color: "violet",
    title: "In-chat games",
    problem: "Social groups go quiet between plans, and the group slowly loses its pull.",
    solution: "Short turn-based games that people can play whenever they're free, to keep things going during quiet stretches.",
    benefits: ["Tic-tac-toe", "Trivia", "Quizzes"],
  },
];

const prioritization = [
  { p: "P1", color: "emerald", title: "Subgroups", note: "Biggest effect on notification noise and relevance, for both work and community groups." },
  { p: "P2", color: "blue", title: "Native polls", note: "Simple and broadly useful. Gets passive members to take part." },
  { p: "P3", color: "orange", title: "Expense splitting", note: "Gives people a reason to open the group even when nobody is chatting." },
  { p: "P4", color: "violet", title: "In-chat games", note: "Good for group bonding, but less important than the organization features." },
];

const supportingMetrics = [
  "Messages per active group",
  "Poll participation rate",
  "Weekly active groups",
  "Archived groups reactivated",
  "30-day retention",
];

const rollout = [
  { phase: "Phase 1", items: ["Polls", "Pinned messages"] },
  { phase: "Phase 2", items: ["Subgroups", "Topic discovery"] },
  { phase: "Phase 3", items: ["Expense splitting", "Shared wallet"] },
  { phase: "Phase 4", items: ["In-chat games", "Leaderboards"] },
];

const learnings = [
  "A lot of engagement problems are really organization problems.",
  "Relevance drives participation.",
  "Communities need structure to grow.",
  "Useful features can hold retention better than purely social ones.",
  "Every new feature has to earn its place against WhatsApp's simplicity.",
];

const colorMap: Record<string, string> = {
  emerald: "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  blue: "bg-blue-500/15 text-blue-400 border-blue-500/30",
  orange: "bg-orange-500/15 text-orange-400 border-orange-500/30",
  violet: "bg-violet-500/15 text-violet-400 border-violet-500/30",
};

function WhatsAppCase() {
  return (
    <CaseShell
      path="/whatsapp-group-engagement"
      title="Keeping WhatsApp groups active"
      summary="Group chats on WhatsApp tend to go quiet over time. This case study looks at why, and proposes four features that could bring people back without making the app harder to use."
      tags={["Growth", "Engagement", "Retention", "Communities"]}
      meta={[["Type", "Product case study"], ["Focus", "Engagement"], ["Domain", "Messaging"], ["Read", "6–8 min"]]}
    >
        {/* tailwind-safelist */}
        <div className="hidden bg-emerald-400/70 bg-amber-400/70 bg-rose-400/70 text-emerald-200 text-emerald-300 text-amber-200 text-amber-300 text-rose-200 text-rose-300 border-emerald-500/30 border-amber-500/30 border-rose-500/30 bg-emerald-500/5 bg-emerald-500/10 bg-amber-500/10 bg-rose-500/10" />

        {/* PROBLEM */}
        <section className="py-24 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <SectionH>The problem</SectionH>
            <div className="space-y-5 text-muted-foreground leading-relaxed max-w-xl">
              <p>WhatsApp is the most widely used messaging app in the world. One-to-one chats stay busy, but group activity tends to fade.</p>
              <p>There are too many messages, too many notifications, and conversations that are hard to follow. People mute the group, stop replying and, eventually, stop opening it.</p>
            </div>
          </div>
          <div className="border border-emerald-500/30 rounded-2xl p-8 bg-emerald-500/[0.03]">
            <div className="text-sm text-muted-foreground mb-3">The question</div>
            <p className="text-2xl leading-snug">
              How might WhatsApp make groups more engaging without losing the simplicity people like about it?
            </p>
          </div>
        </section>

        {/* USER PERSONAS */}
        <section className="py-24">
          <SectionH>Who this is for</SectionH>
          <p className="text-muted-foreground mb-12">Two personas: one uses groups for work, the other for communities.</p>
          <div className="grid md:grid-cols-2 gap-6">
            {personas.map((p) => (
              <div key={p.name} className="border border-border/60 rounded-2xl p-8 bg-card/30">
                <div className="flex items-center gap-4 mb-6 justify-center">
                  <div className={`h-10 w-10 rounded-full ${p.color === "emerald" ? "bg-emerald-500/20 text-emerald-400" : "bg-orange-500/20 text-orange-400"} grid place-items-center font-sans font-semibold`}>
                    {p.name[0]}
                  </div>
                  <div className="text-center">
                    <div className="font-serif text-xl">{p.name}</div>
                    <div className="text-xs text-muted-foreground mt-1">{p.role}</div>
                  </div>
                </div>
                {[
                  { label: "Goals", items: p.goals, dot: "bg-emerald-400" },
                  { label: "Frustrations", items: p.pains, dot: "bg-red-400" },
                  { label: "Needs", items: p.needs, dot: "bg-blue-400" },
                ].map((g) => (
                  <div key={g.label} className="mt-6">
                    <div className="text-xs text-muted-foreground mb-3">{g.label}</div>
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

        {/* INSIGHTS */}
        <section className="py-24">
          <SectionH>What the research showed</SectionH>
          <div className="grid md:grid-cols-2 gap-6">
            {insights.map((i, idx) => (
              <div key={i} className="border border-emerald-500/20 rounded-2xl p-7 bg-emerald-500/[0.02]">
                <div className="text-sm text-muted-foreground mb-2">{idx + 1}</div>
                <p className="text-foreground/90">{i}</p>
              </div>
            ))}
          </div>
        </section>

        {/* COMPETITIVE ANALYSIS */}
        <section className="py-24">
          <SectionH>How others handle it</SectionH>
          <div className="grid md:grid-cols-3 gap-6">
            {competitors.map((c) => (
              <div key={c.name} className="border border-border/60 rounded-2xl p-7 bg-card/30">
                <div className="font-serif text-2xl mb-5">{c.name}</div>
                <ul className="space-y-2 mb-6">
                  {c.points.map((pt) => (
                    <li key={pt} className="text-sm text-muted-foreground">{pt}</li>
                  ))}
                </ul>
                <div className="border-t border-border/60 pt-4 text-sm">
                  <span className="text-muted-foreground">Takeaway: </span>{c.quote}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SOLUTIONS */}
        <section className="py-24">
          <SectionH>Four ideas</SectionH>
          <p className="text-muted-foreground mb-12">Each one targets a different reason groups go quiet.</p>
          <div className="space-y-6">
            {features.map((f) => (
              <div key={f.title} className="border border-border/60 rounded-2xl p-8 md:p-10 bg-card/30">
                <span className={`inline-block text-xs rounded border px-2.5 py-1 mb-6 ${colorMap[f.color]}`}>{f.p}</span>
                <h3 className="font-serif text-3xl md:text-4xl mb-6">{f.title}</h3>
                <div className="grid md:grid-cols-[1fr_auto] gap-10 items-start">
                  <div className="space-y-4 max-w-xl">
                    <p className="text-muted-foreground"><span className="text-foreground font-medium">Why: </span>{f.problem}</p>
                    <p className="text-muted-foreground"><span className="text-foreground font-medium">What: </span>{f.solution}</p>
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

        {/* PRODUCT MOCKUPS */}
        <section className="py-24">
          <SectionH>How it could look</SectionH>
          <p className="text-muted-foreground max-w-2xl mb-14 leading-relaxed">
            Concept screens for the ideas above. Each one is meant to feel like part of WhatsApp, not a separate tool added on top of the chat.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                label: "Group health", title: "Family Trip Planning",
                render: () => (
                  <div className="p-3 space-y-3 text-[10px]">
                    <div className="flex items-center justify-between">
                      <div className="font-semibold text-white text-xs">Group Health</div>
                      <span className="text-emerald-400">Healthy</span>
                    </div>
                    <div className="rounded-lg bg-emerald-500/10 border border-emerald-500/30 p-3">
                      <div className="text-2xl font-semibold text-emerald-300">87<span className="text-xs text-emerald-400/70">/100</span></div>
                      <div className="text-emerald-300/70 mt-0.5">Engagement Score</div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="rounded bg-white/5 p-2"><div className="text-white font-semibold">142</div><div className="text-white/50">Msgs / wk</div></div>
                      <div className="rounded bg-white/5 p-2"><div className="text-white font-semibold">18/22</div><div className="text-white/50">Active</div></div>
                      <div className="rounded bg-white/5 p-2"><div className="text-white font-semibold">94%</div><div className="text-white/50">Read</div></div>
                      <div className="rounded bg-white/5 p-2"><div className="text-white font-semibold">+12%</div><div className="text-emerald-300">Vs last wk</div></div>
                    </div>
                  </div>
                ),
              },
              {
                label: "Weekly summary", title: "Weekly Pulse",
                render: () => (
                  <div className="p-3 space-y-2 text-[10px]">
                    <div className="text-white font-semibold text-xs mb-1">Top Contributors</div>
                    {[["Priya M.", 38, "emerald"], ["Arjun K.", 27, "emerald"], ["Mona S.", 19, "amber"], ["Rohan D.", 11, "amber"], ["Ayush R.", 4, "rose"]].map(([n, v, c]) => (
                      <div key={n as string} className="space-y-1">
                        <div className="flex justify-between"><span className="text-white/80">{n}</span><span className="text-white/50">{v}%</span></div>
                        <div className="h-1.5 rounded bg-white/10"><div className={`h-full rounded bg-${c}-400/70`} style={{ width: `${v}%` }} /></div>
                      </div>
                    ))}
                    <div className="pt-2 border-t border-white/10 text-white/50">Peak hour: 9–11 PM</div>
                  </div>
                ),
              },
              {
                label: "Conversation starters", title: "Conversation Starters",
                render: () => (
                  <div className="p-3 space-y-2 text-[10px]">
                    <div className="text-white font-semibold text-xs">For your group</div>
                    {["Plan this weekend's outing?", "Share a song you can't stop replaying", "Drop a photo from this week", "Quick poll: pizza or biryani?"].map((p) => (
                      <div key={p} className="rounded-lg border border-emerald-500/30 bg-emerald-500/5 p-2 text-emerald-100/90">{p}</div>
                    ))}
                    <button className="w-full mt-1 rounded-lg bg-emerald-500 text-black font-semibold py-1.5">Send to group</button>
                  </div>
                ),
              },
              {
                label: "Nudging quiet members", title: "Re-engage gently",
                render: () => (
                  <div className="p-3 space-y-2 text-[10px]">
                    <div className="rounded-lg bg-amber-500/10 border border-amber-500/30 p-2.5">
                      <div className="font-semibold text-amber-200 mb-0.5">3 members silent for 7+ days</div>
                      <div className="text-amber-100/70">Send a soft check-in?</div>
                    </div>
                    <div className="space-y-1.5">
                      {["Mona Saha", "Arjun Kapoor", "Priya Mehta"].map((n) => (
                        <div key={n} className="flex items-center justify-between rounded bg-white/5 p-2">
                          <span className="text-white/80">{n}</span>
                          <button className="text-emerald-300">Nudge</button>
                        </div>
                      ))}
                    </div>
                  </div>
                ),
              },
              {
                label: "Admin view", title: "Group Operator View",
                render: () => (
                  <div className="p-3 space-y-2 text-[10px]">
                    <div className="text-white font-semibold text-xs">Last 30 days</div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="rounded bg-white/5 p-2"><div className="text-white font-semibold">4,218</div><div className="text-white/50">Msgs</div></div>
                      <div className="rounded bg-white/5 p-2"><div className="text-white font-semibold">86%</div><div className="text-white/50">Active</div></div>
                      <div className="rounded bg-white/5 p-2"><div className="text-emerald-300 font-semibold">+22%</div><div className="text-white/50">Growth</div></div>
                      <div className="rounded bg-white/5 p-2"><div className="text-white font-semibold">12</div><div className="text-white/50">Polls</div></div>
                    </div>
                    <div className="h-16 rounded bg-gradient-to-t from-emerald-500/20 to-transparent flex items-end gap-1 p-1">
                      {[40,55,30,70,60,85,75,90,65,80,72,95].map((h,i) => (
                        <div key={i} className="flex-1 bg-emerald-400/60 rounded-sm" style={{ height: `${h}%` }} />
                      ))}
                    </div>
                  </div>
                ),
              },
              {
                label: "Winning people back", title: "Win back members",
                render: () => (
                  <div className="p-3 space-y-2 text-[10px]">
                    <div className="rounded-lg bg-rose-500/10 border border-rose-500/30 p-2.5">
                      <div className="font-semibold text-rose-200">8 dormant members</div>
                      <div className="text-rose-100/70">Inactive 14+ days</div>
                    </div>
                    <div className="text-white/60">Suggested DM:</div>
                    <div className="rounded-lg bg-white/5 p-2 text-white/80 italic">"Hey! The group missed you this week. Priya shared the trip photos, catch up here →"</div>
                    <button className="w-full rounded-lg bg-emerald-500 text-black font-semibold py-1.5">Send personalised</button>
                  </div>
                ),
              },
              {
                label: "Milestones", title: "Celebrate together",
                render: () => (
                  <div className="p-3 space-y-2 text-[10px]">
                    <div className="text-center py-2">
                      <div className="text-3xl">🎉</div>
                      <div className="text-white font-semibold mt-1">1 Year Together</div>
                      <div className="text-white/50">22 members · 14,820 msgs</div>
                    </div>
                    <div className="space-y-1.5">
                      {[["First poll", "Jan 12"], ["100th member", "Mar 04"], ["Trip planned", "Jun 28"], ["Anniversary", "Nov 02"]].map(([t, d]) => (
                        <div key={t} className="flex justify-between rounded bg-white/5 p-2">
                          <span className="text-emerald-200">★ {t}</span><span className="text-white/40">{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ),
              },
              {
                label: "Polls in the chat", title: "In-thread surfacing",
                render: () => (
                  <div className="p-3 space-y-1.5 text-[10px]">
                    <div className="self-start max-w-[80%] rounded-lg rounded-tl-none bg-white/10 p-2 text-white/90">Anyone up for chai later?</div>
                    <div className="ml-auto max-w-[80%] rounded-lg rounded-tr-none bg-emerald-500/30 p-2 text-emerald-50">Count me in 🙌</div>
                    <div className="my-2 rounded-lg border border-emerald-500/30 bg-emerald-500/5 p-2">
                      <div className="text-emerald-300 font-semibold mb-1">📊 Quick poll</div>
                      <div className="text-emerald-100/90">CCD or Blue Tokai?</div>
                      <div className="mt-1 space-y-1">
                        <div className="flex justify-between"><span>CCD</span><span>3</span></div>
                        <div className="h-1 rounded bg-white/10"><div className="h-full bg-emerald-400/70 rounded" style={{ width: "60%" }} /></div>
                      </div>
                    </div>
                  </div>
                ),
              },
            ].map((s) => (
              <div key={s.label} className="space-y-3">
                <div className="text-sm text-muted-foreground">{s.label}</div>
                <div className="mockup mx-auto w-full max-w-[240px] rounded-[2rem] border border-border bg-[#0a0a0a] p-2 shadow-2xl">
                  <div className="rounded-[1.6rem] overflow-hidden bg-[#0b141a] border border-white/5">
                    <div className="flex items-center justify-between px-3 py-2 bg-[#1f2c33] text-white/90 text-[10px]">
                      <span>9:41</span><span className="font-semibold">WhatsApp</span><span>100%</span>
                    </div>
                    <div className="px-3 py-2 bg-[#202c33] border-b border-white/5 text-white/80 text-[11px] font-semibold">{s.title}</div>
                    {s.render()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>



        {/* PRIORITIZATION */}
        <section className="py-24">
          <SectionH>What to build first</SectionH>
          <div className="space-y-3">
            {prioritization.map((r) => (
              <div key={r.p} className="border border-border/60 rounded-xl p-5 bg-card/30 grid md:grid-cols-[auto_240px_1fr] items-center gap-6">
                <span className={`font-mono text-xs rounded border px-2.5 py-1 ${colorMap[r.color]}`}>{r.p}</span>
                <div className="font-sans font-semibold text-lg">{r.title}</div>
                <p className="text-sm text-muted-foreground border-l border-border/60 pl-6">{r.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SUCCESS METRICS */}
        <section className="py-24">
          <SectionH>How to measure it</SectionH>
          <div className="border border-emerald-500/30 rounded-2xl p-10 bg-emerald-500/[0.03] mb-8">
            <div className="text-sm text-emerald-500 mb-4">North star metric</div>
            <h3 className="font-serif text-4xl md:text-5xl mb-4">Weekly active group participants</h3>
            <p className="text-muted-foreground max-w-3xl">
              Unique people who do at least one meaningful thing in a group each week: send a message, vote in a poll or take a turn in a game.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {supportingMetrics.map((m) => (
              <div key={m} className="border border-border/60 rounded-lg p-5 bg-card/30">
                <div className="text-sm">{m}</div>
              </div>
            ))}
          </div>
        </section>

        {/* RISKS & TRADEOFFS */}
        <section className="py-24">
          <SectionH>Risks and trade-offs</SectionH>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              ["Feature creep", "Utilities and games could make WhatsApp feel bloated and undo the simplicity people value."],
              ["Learning curve", "Subgroups and polls may confuse less active users, so they should be introduced gradually and in context."],
              ["Admin effort", "More structure means more setup. Admin controls need to be light and mostly set-and-forget."],
              ["Privacy", "Expenses and games put more data in chats. It needs to be clear that end-to-end encryption still applies."],
            ].map(([t, b]) => (
              <div key={t} className="border border-border/60 rounded-2xl p-7 bg-card/30">
                <h3 className="font-sans font-semibold text-lg mb-3">{t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PRODUCT THINKING */}
        <section className="py-24 grid md:grid-cols-[1fr_2fr] gap-12">
          <div>
            <h2 className="font-serif text-4xl">The thinking behind it</h2>
          </div>
          <div className="space-y-5 text-muted-foreground leading-relaxed max-w-2xl">
            <p>Engagement is rarely fixed by a single feature. In a product as widely used as WhatsApp, the answer is usually <span className="text-foreground">to organize better first, then add features carefully.</span></p>
            <p>Each idea covers a different step in how people take part: finding what's relevant, contributing easily, coming back for a reason, and staying because it's fun.</p>
            <p>None of them change the basic chat. They add depth for the people who want it and stay out of the way for everyone else.</p>
          </div>
        </section>

        {/* ROLLOUT */}
        <section className="py-24">
          <SectionH>Rollout</SectionH>
          <div className="grid md:grid-cols-4 gap-5">
            {rollout.map((r) => (
              <div key={r.phase} className="border border-emerald-500/20 rounded-2xl p-6 bg-emerald-500/[0.02]">
                <div className="text-sm text-emerald-500 mb-4">{r.phase}</div>
                <ul className="space-y-2">
                  {r.items.map((i) => (
                    <li key={i} className="text-sm text-foreground/90">{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* KEY LEARNINGS */}
        <section className="py-24">
          <SectionH>What I took away</SectionH>
          <ol className="max-w-3xl divide-y divide-border border-y border-border">
            {learnings.map((l, i) => (
              <li key={l} className="flex gap-6 py-4">
                <span className="w-5 shrink-0 text-sm text-muted-foreground tabular-nums">{i + 1}</span>
                <p className="text-foreground/90">{l}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* FINAL REFLECTION */}
        <section className="py-28 text-center max-w-2xl mx-auto">
          <p className="font-serif text-3xl md:text-4xl leading-snug">
            The best engagement features are the ones people don't notice. The group just feels active again.
          </p>
        </section>
    </CaseShell>
  );
}
