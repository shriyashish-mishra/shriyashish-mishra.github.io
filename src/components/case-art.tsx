/* Line-art covers for projects. Drawn with currentColor so they follow the
   theme; the mint accent marks the one idea each project is about. */

type ArtProps = { className?: string };

function Frame({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <svg viewBox="0 0 400 240" className={`h-full w-full text-foreground ${className}`} aria-hidden="true" fill="none">
      {children}
    </svg>
  );
}

// Group chat: noisy messages, one subgroup thread and a poll.
export function WhatsAppArt({ className }: ArtProps) {
  return (
    <Frame className={className}>
      <g className="art-drift" stroke="currentColor" strokeOpacity="0.35">
        <rect x="48" y="40" width="120" height="22" rx="11" />
        <rect x="48" y="70" width="86" height="22" rx="11" />
        <rect x="232" y="56" width="120" height="22" rx="11" />
        <rect x="48" y="100" width="104" height="22" rx="11" />
      </g>
      <g className="art-rise">
        <rect x="196" y="104" width="156" height="92" rx="12" stroke="currentColor" strokeOpacity="0.6" fill="var(--background)" />
        <text x="212" y="126" className="fill-foreground font-mono text-[10px]">Quick poll</text>
        <rect x="212" y="138" width="124" height="6" rx="3" fill="currentColor" fillOpacity="0.1" />
        <rect x="212" y="138" width="76" height="6" rx="3" className="fill-brand" />
        <rect x="212" y="156" width="124" height="6" rx="3" fill="currentColor" fillOpacity="0.1" />
        <rect x="212" y="156" width="40" height="6" rx="3" fill="currentColor" fillOpacity="0.35" />
        <text x="212" y="182" className="fill-muted-foreground font-mono text-[9px]">12 votes · 2 options</text>
      </g>
      <path d="M 60 134 v 40 h 24" stroke="currentColor" strokeOpacity="0.35" strokeDasharray="3 3" />
      <rect x="88" y="164" width="80" height="20" rx="10" className="stroke-brand" />
      <text x="100" y="178" className="fill-brand font-mono text-[9px]"># subgroup</text>
    </Frame>
  );
}

// Listening streak: a waveform whose latest bars light up, plus a tier badge.
const bars = [14, 22, 30, 18, 40, 26, 48, 34, 56, 30, 44, 62, 38, 70, 52, 78, 60, 86, 68, 92];
export function SpotifyArt({ className }: ArtProps) {
  return (
    <Frame className={className}>
      <g className="art-drift">
        {bars.map((h, i) => (
          <rect
            key={i}
            x={48 + i * 12}
            y={176 - h}
            width="6"
            height={h}
            rx="3"
            className={i >= 14 ? "fill-brand" : ""}
            fill={i >= 14 ? undefined : "currentColor"}
            fillOpacity={i >= 14 ? undefined : 0.18}
          />
        ))}
      </g>
      <line x1="40" y1="190" x2="290" y2="190" stroke="currentColor" strokeOpacity="0.25" />
      <text x="48" y="208" className="fill-muted-foreground font-mono text-[9px]">streak · day 6</text>
      <g className="art-rise">
        <circle cx="334" cy="84" r="34" stroke="currentColor" strokeOpacity="0.5" fill="var(--background)" />
        <circle cx="334" cy="84" r="34" className="stroke-brand" strokeWidth="2" strokeDasharray="150 214" transform="rotate(-90 334 84)" />
        <text x="334" y="82" textAnchor="middle" className="fill-foreground font-mono text-[10px]">Gold</text>
        <text x="334" y="96" textAnchor="middle" className="fill-muted-foreground font-mono text-[8px]">1,000 pts</text>
      </g>
    </Frame>
  );
}

// City launch: coastline, demand zones and one charging hub.
export function BluSmartArt({ className }: ArtProps) {
  const zones = [[132, 70], [172, 112], [118, 150], [214, 168], [246, 92]];
  return (
    <Frame className={className}>
      <path
        d="M 70 20 C 96 60, 84 96, 100 128 S 92 196, 128 228"
        stroke="currentColor"
        strokeOpacity="0.35"
      />
      <path d="M 70 20 C 96 60, 84 96, 100 128 S 92 196, 128 228 L 40 228 L 40 20 Z" className="art-hatch" />
      <g stroke="currentColor" strokeOpacity="0.35" strokeDasharray="3 4">
        {zones.map(([x, y]) => <line key={`${x}${y}`} x1={x} y1={y} x2="196" y2="128" />)}
      </g>
      <g className="art-drift">
        {zones.map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r="5" fill="var(--background)" stroke="currentColor" strokeOpacity="0.7" />
        ))}
      </g>
      <g className="art-rise">
        <circle cx="196" cy="128" r="28" className="stroke-brand" strokeOpacity="0.35" />
        <circle cx="196" cy="128" r="16" className="stroke-brand" strokeOpacity="0.6" />
        <circle cx="196" cy="128" r="6" className="fill-brand" />
      </g>
      <text x="290" y="120" className="fill-foreground font-mono text-[10px]">charging hub</text>
      <text x="290" y="136" className="fill-muted-foreground font-mono text-[9px]">5 zones · 150 EVs</text>
    </Frame>
  );
}

// A phone: today's calories and protein, plus the nightly coach report.
export function HulkArt({ className }: ArtProps) {
  const mono = "ui-monospace, SFMono-Regular, Menlo, monospace";
  return (
    <Frame className={className}>
      <rect x="140" y="16" width="120" height="216" rx="18" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.5" />
      <rect x="186" y="22" width="28" height="4" rx="2" fill="currentColor" fillOpacity="0.25" />
      <text x="154" y="52" fontSize="10" fontWeight="600" fill="currentColor">Today</text>
      <rect x="154" y="62" width="48" height="36" rx="7" stroke="currentColor" strokeOpacity="0.35" />
      <text x="160" y="76" fontSize="6" fill="currentColor" fillOpacity="0.55" fontFamily={mono}>Calories</text>
      <text x="160" y="91" fontSize="12" fontWeight="600" fill="currentColor">1,742</text>
      <rect x="208" y="62" width="48" height="36" rx="7" stroke="currentColor" strokeOpacity="0.35" />
      <text x="214" y="76" fontSize="6" fill="currentColor" fillOpacity="0.55" fontFamily={mono}>Workout</text>
      <text x="214" y="91" fontSize="9" fontWeight="600" fill="currentColor">Pull day</text>
      <text x="154" y="114" fontSize="7" fill="currentColor" fillOpacity="0.6" fontFamily={mono}>Protein 112/130g</text>
      <rect x="154" y="120" width="102" height="6" rx="3" fill="currentColor" fillOpacity="0.15" />
      <rect x="154" y="120" width="88" height="6" rx="3" className="fill-brand" />
      <g className="art-rise">
        <rect x="152" y="140" width="106" height="62" rx="8" className="stroke-brand" strokeWidth="1.5" />
        <text x="160" y="155" fontSize="7" fontWeight="600" className="fill-brand" fontFamily={mono}>Nightly coach report</text>
        <line x1="160" y1="167" x2="248" y2="167" stroke="currentColor" strokeOpacity="0.4" strokeWidth="3" strokeLinecap="round" />
        <line x1="160" y1="177" x2="232" y2="177" stroke="currentColor" strokeOpacity="0.4" strokeWidth="3" strokeLinecap="round" />
        <line x1="160" y1="187" x2="240" y2="187" stroke="currentColor" strokeOpacity="0.4" strokeWidth="3" strokeLinecap="round" />
      </g>
      <path d="M 40 150 L 70 150 L 82 120 L 94 170 L 106 100 L 118 150 L 134 150" stroke="currentColor" strokeOpacity="0.3" strokeWidth="2" />
      <path d="M 266 110 C 290 108, 310 90, 360 60" className="stroke-brand" strokeWidth="2" />
      <circle cx="360" cy="60" r="4" className="fill-brand" />
    </Frame>
  );
}

// A compliance finding: the flagged product feature, the RBI clause it cites, and a risk rating.
export function RegImpactArt({ className }: ArtProps) {
  const mono = "ui-monospace, SFMono-Regular, Menlo, monospace";
  return (
    <Frame className={className}>
      <rect x="40" y="26" width="320" height="188" rx="10" stroke="currentColor" strokeOpacity="0.45" />
      <text x="56" y="50" fontSize="10" fontWeight="600" fill="currentColor">Compliance findings</text>
      <rect x="276" y="38" width="68" height="16" rx="8" stroke="currentColor" strokeOpacity="0.4" />
      <text x="310" y="49" textAnchor="middle" fontSize="7" fill="currentColor" fillOpacity="0.6" fontFamily={mono}>RBI · KYC/AML</text>
      {[0, 1, 2].map((i) => (
        <g key={i} className={i === 0 ? "art-rise" : ""}>
          <rect x="52" y={66 + i * 46} width="296" height="38" rx="7" stroke="currentColor" strokeOpacity={i === 0 ? 0 : 0.3} className={i === 0 ? "stroke-brand" : ""} strokeWidth={i === 0 ? 1.5 : 1} />
          <rect x="62" y={78 + i * 46} width="40" height="14" rx="7" className={i === 0 ? "fill-brand" : ""} fill={i === 0 ? undefined : "currentColor"} fillOpacity={i === 0 ? 0.9 : 0.15} />
          <text x="82" y={88 + i * 46} textAnchor="middle" fontSize="7" fontWeight="600" fill={i === 0 ? "#04130f" : "currentColor"} fillOpacity={i === 0 ? 1 : 0.6} fontFamily={mono}>{["HIGH", "MED", "LOW"][i]}</text>
          <line x1="112" y1={82 + i * 46} x2={300 - i * 30} y2={82 + i * 46} stroke="currentColor" strokeOpacity="0.45" strokeWidth="3" strokeLinecap="round" />
          <text x="112" y={96 + i * 46} fontSize="7" fill="currentColor" fillOpacity="0.55" fontFamily={mono}>{["Digital Lending Guidelines §4.2", "KYC Master Direction §16", "AML/CFT guidance §9"][i]}</text>
        </g>
      ))}
    </Frame>
  );
}

// Head-to-head: two products scored on the same dimensions, with a verdict.
export function ProductBattleArt({ className }: ArtProps) {
  const rows: [string, number, number][] = [["Onboarding", 78, 52], ["Pricing", 44, 70], ["Retention", 66, 88]];
  return (
    <Frame className={className}>
      <rect x="40" y="30" width="320" height="180" rx="10" stroke="currentColor" strokeOpacity="0.45" />
      <text x="90" y="58" textAnchor="middle" fontSize="11" fontWeight="600" fill="currentColor">Product A</text>
      <text x="200" y="58" textAnchor="middle" fontSize="10" className="fill-brand" fontFamily="ui-monospace, monospace">VS</text>
      <text x="310" y="58" textAnchor="middle" fontSize="11" fontWeight="600" fill="currentColor">Product B</text>
      {rows.map(([label, a, b], i) => (
        <g key={label}>
          <text x="200" y={90 + i * 34} textAnchor="middle" fontSize="9" fill="currentColor" fillOpacity="0.55" fontFamily="ui-monospace, monospace">{label}</text>
          <rect x={190 - a} y={96 + i * 34} width={a} height="8" rx="4" fill="currentColor" fillOpacity={a > b ? 0.55 : 0.2} />
          <rect x="210" y={96 + i * 34} width={b} height="8" rx="4" className={b > a ? "art-rise fill-brand" : ""} fill={b > a ? undefined : "currentColor"} fillOpacity={b > a ? undefined : 0.2} />
        </g>
      ))}
      <rect x="60" y="184" width="280" height="18" rx="9" className="fill-brand" fillOpacity="0.18" />
      <text x="200" y="196.5" textAnchor="middle" fontSize="9" className="fill-brand" fontFamily="ui-monospace, monospace">Verdict: B wins on retention and pricing</text>
    </Frame>
  );
}

// Two front doors: a plain-language prompt on one side, the code and live preview on the other.
export function ArchitectArt({ className }: ArtProps) {
  const mono = "ui-monospace, SFMono-Regular, Menlo, monospace";
  return (
    <Frame className={className}>
      <rect x="30" y="34" width="150" height="172" rx="10" stroke="currentColor" strokeOpacity="0.45" />
      <text x="44" y="56" fontSize="8" fill="currentColor" fillOpacity="0.55" fontFamily={mono}>&gt; Build a waitlist page</text>
      <text x="44" y="70" fontSize="8" fill="currentColor" fillOpacity="0.55" fontFamily={mono}>  with an admin view</text>
      <text x="44" y="94" fontSize="8" className="fill-brand" fontFamily={mono}>• Planning pages, form</text>
      <text x="44" y="108" fontSize="8" fill="currentColor" fillOpacity="0.45" fontFamily={mono}>writing app/page.tsx…</text>
      <text x="44" y="122" fontSize="8" fill="currentColor" fillOpacity="0.45" fontFamily={mono}>writing SignupForm.tsx…</text>
      <text x="44" y="146" fontSize="8" className="fill-brand" fontFamily={mono}>✓ Build passed</text>
      <rect x="44" y="164" width="122" height="24" rx="6" stroke="currentColor" strokeOpacity="0.3" />
      <path d="M 186 120 L 214 120 M 208 114 L 214 120 L 208 126" className="stroke-brand" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <g className="art-rise">
        <rect x="220" y="34" width="150" height="172" rx="10" className="stroke-brand" strokeWidth="1.5" />
        <line x1="220" y1="56" x2="370" y2="56" stroke="currentColor" strokeOpacity="0.25" />
        {[0, 1, 2].map((i) => <circle key={i} cx={232 + i * 10} cy="45" r="2.5" fill="currentColor" fillOpacity="0.3" />)}
        <text x="295" y="86" textAnchor="middle" fontSize="12" fontWeight="600" fill="currentColor">Join the waitlist</text>
        <rect x="244" y="98" width="102" height="16" rx="4" stroke="currentColor" strokeOpacity="0.4" />
        <rect x="244" y="122" width="102" height="16" rx="4" className="fill-brand" fillOpacity="0.9" />
        <text x="295" y="133" textAnchor="middle" fontSize="8" fontWeight="600" fill="#04130f">Sign up</text>
        <text x="295" y="164" textAnchor="middle" fontSize="7" fill="currentColor" fillOpacity="0.5" fontFamily={mono}>Live preview</text>
        <line x1="250" y1="180" x2="340" y2="180" stroke="currentColor" strokeOpacity="0.25" strokeWidth="3" strokeLinecap="round" />
      </g>
    </Frame>
  );
}

// A terminal showing `wbi blame` flagging a changed contract and its downstream tasks.
export function WhoBrokeItArt({ className }: ArtProps) {
  const mono = "ui-monospace, SFMono-Regular, Menlo, monospace";
  return (
    <Frame className={className}>
      <rect x="36" y="28" width="328" height="184" rx="10" stroke="currentColor" strokeOpacity="0.45" />
      <line x1="36" y1="52" x2="364" y2="52" stroke="currentColor" strokeOpacity="0.25" />
      {[0, 1, 2].map((i) => <circle key={i} cx={52 + i * 14} cy="40" r="3.5" fill="currentColor" fillOpacity="0.3" />)}
      <g fontFamily={mono} fontSize="10">
        <text x="52" y="76" fill="currentColor" fillOpacity="0.7">$ wbi blame src/api/billing/</text>
        <text x="52" y="100" fill="currentColor" fillOpacity="0.55">Claude  TASK-007  feat(billing): add paused</text>
        <text x="52" y="116" fill="currentColor" fillOpacity="0.55">Maya    initial commit</text>
        <g className="art-rise">
          <rect x="48" y="130" width="304" height="22" rx="4" className="fill-brand" fillOpacity="0.16" />
          <text x="56" y="144" className="fill-brand">⚠ Contract BillingStatus changed</text>
        </g>
        <text x="52" y="172" fill="currentColor" fillOpacity="0.7">→ 3 downstream tasks affected:</text>
        <text x="52" y="190" fill="currentColor" fillOpacity="0.55">TASK-008  TASK-009  TASK-016</text>
      </g>
    </Frame>
  );
}

// Three panelists each score a resume; the CEO is the harshest.
export function CookedOrHiredArt({ className }: ArtProps) {
  const mono = "ui-monospace, SFMono-Regular, Menlo, monospace";
  const panel: [string, string, number][] = [["HR", "72", 72], ["Hiring Mgr", "58", 58], ["CEO", "41", 41]];
  return (
    <Frame className={className}>
      {panel.map(([who, score, v], i) => (
        <g key={who} className={i === 2 ? "art-rise" : ""}>
          <rect x={36 + i * 112} y="34" width="104" height="120" rx="10" stroke="currentColor" strokeOpacity={i === 2 ? 0 : 0.45} className={i === 2 ? "stroke-brand" : ""} strokeWidth={i === 2 ? 2 : 1} />
          <text x={88 + i * 112} y="58" textAnchor="middle" fontSize="10" fill="currentColor" fillOpacity="0.6" fontFamily={mono}>{who}</text>
          <text x={88 + i * 112} y="100" textAnchor="middle" fontSize="30" fontWeight="600" fill="currentColor">{score}</text>
          <rect x={52 + i * 112} y="124" width="72" height="6" rx="3" fill="currentColor" fillOpacity="0.15" />
          <rect x={52 + i * 112} y="124" width={(72 * v) / 100} height="6" rx="3" className="fill-brand" />
        </g>
      ))}
      <rect x="36" y="168" width="328" height="40" rx="8" stroke="currentColor" strokeOpacity="0.3" />
      <g fontFamily={mono} fontSize="9" fill="currentColor" fillOpacity="0.6">
        <text x="48" y="184">Fix-it list</text>
        <text x="48" y="198">Quantify impact · cut the buzzwords · lead with outcomes</text>
      </g>
    </Frame>
  );
}
