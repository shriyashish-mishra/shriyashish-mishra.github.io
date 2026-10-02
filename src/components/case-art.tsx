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

// Small marks for the AI builds.
export function HulkArt({ className }: ArtProps) {
  return (
    <Frame className={className}>
      <path d="M 40 170 L 110 170 L 130 120 L 150 200 L 170 90 L 190 170 L 360 170" stroke="currentColor" strokeOpacity="0.35" strokeWidth="2" />
      <path className="art-drift stroke-brand" d="M 40 190 C 140 186, 220 150, 360 70" strokeWidth="2" />
      <circle cx="360" cy="70" r="5" className="fill-brand" />
    </Frame>
  );
}

export function RegImpactArt({ className }: ArtProps) {
  return (
    <Frame className={className}>
      <rect x="120" y="36" width="160" height="176" rx="10" stroke="currentColor" strokeOpacity="0.5" />
      {[0, 1, 2, 3].map((i) => (
        <g key={i} className={i === 1 ? "art-rise" : ""}>
          <rect x="140" y={64 + i * 36} width="14" height="14" rx="3" className={i === 1 ? "fill-brand" : ""} stroke="currentColor" strokeOpacity={i === 1 ? 0 : 0.4} />
          <line x1="166" y1={71 + i * 36} x2={i === 1 ? 260 : 240 - i * 10} y2={71 + i * 36} stroke="currentColor" strokeOpacity="0.35" strokeWidth="4" strokeLinecap="round" />
        </g>
      ))}
    </Frame>
  );
}

export function ProductBattleArt({ className }: ArtProps) {
  const a = [60, 96, 72, 120];
  const b = [84, 70, 110, 90];
  return (
    <Frame className={className}>
      {a.map((h, i) => (
        <g key={i}>
          <rect x={104 + i * 52} y={190 - h} width="16" height={h} rx="3" fill="currentColor" fillOpacity="0.2" />
          <rect x={124 + i * 52} y={190 - b[i]} width="16" height={b[i]} rx="3" className="art-rise fill-brand" />
        </g>
      ))}
      <line x1="90" y1="190" x2="320" y2="190" stroke="currentColor" strokeOpacity="0.3" />
    </Frame>
  );
}

export function ArchitectArt({ className }: ArtProps) {
  return (
    <Frame className={className}>
      <rect x="70" y="50" width="110" height="140" rx="8" stroke="currentColor" strokeOpacity="0.5" />
      {[0, 1, 2, 3].map((i) => (
        <line key={i} x1="86" y1={76 + i * 28} x2={150 - (i % 2) * 24} y2={76 + i * 28} stroke="currentColor" strokeOpacity="0.35" strokeWidth="4" strokeLinecap="round" />
      ))}
      <rect x="210" y="50" width="120" height="140" rx="8" className="art-rise stroke-brand" strokeWidth="2" />
      <rect x="226" y="68" width="88" height="30" rx="4" className="fill-brand" fillOpacity="0.25" />
      <rect x="226" y="108" width="40" height="64" rx="4" stroke="currentColor" strokeOpacity="0.4" />
      <rect x="274" y="108" width="40" height="64" rx="4" stroke="currentColor" strokeOpacity="0.4" />
    </Frame>
  );
}

export function WhoBrokeItArt({ className }: ArtProps) {
  const nodes: [number, number][] = [[200, 50], [120, 120], [280, 120], [80, 190], [160, 190], [320, 190]];
  const edges: [number, number][] = [[0, 1], [0, 2], [1, 3], [1, 4], [2, 5]];
  return (
    <Frame className={className}>
      {edges.map(([a, b], i) => (
        <line key={i} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} stroke="currentColor" strokeOpacity="0.35" strokeWidth="2" />
      ))}
      {nodes.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i === 2 ? 9 : 7} className={i === 2 ? "art-rise fill-brand" : ""} stroke="currentColor" strokeOpacity={i === 2 ? 0 : 0.5} strokeWidth="2" />
      ))}
    </Frame>
  );
}

export function CookedOrHiredArt({ className }: ArtProps) {
  const scores = [70, 48, 90];
  return (
    <Frame className={className}>
      {scores.map((h, i) => (
        <g key={i}>
          <circle cx={120 + i * 80} cy="70" r="14" stroke="currentColor" strokeOpacity="0.5" strokeWidth="2" />
          <rect x={106 + i * 80} y={200 - h} width="28" height={h} rx="4" className={i === 2 ? "art-rise fill-brand" : ""} fill={i === 2 ? undefined : "currentColor"} fillOpacity={i === 2 ? undefined : 0.2} />
        </g>
      ))}
      <line x1="90" y1="200" x2="330" y2="200" stroke="currentColor" strokeOpacity="0.3" />
    </Frame>
  );
}
