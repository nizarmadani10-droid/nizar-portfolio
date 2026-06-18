import { cn } from "@/lib/utils";

type GeminiLinesProps = {
  className?: string;
};

const waveLines = [
  {
    d: "M1540 74 C1320 42 1116 122 918 82 C802 58 770 58 710 76 C612 106 520 54 404 82 C250 118 96 34 -100 70",
    stroke: "url(#gemini-cyan)",
    duration: "8s",
    opacity: "0.96",
  },
  {
    d: "M1540 164 C1320 232 1100 86 926 154 C832 192 780 174 742 154 C636 102 524 206 412 162 C250 100 94 218 -100 158",
    stroke: "url(#gemini-blue)",
    duration: "9.5s",
    opacity: "0.9",
  },
  {
    d: "M1540 250 C1332 194 1114 306 922 246 C822 214 758 236 686 250 C566 274 508 216 392 246 C244 284 86 202 -100 252",
    stroke: "url(#gemini-white)",
    duration: "11s",
    opacity: "0.78",
  },
];

export function GeminiLines({ className }: GeminiLinesProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden opacity-60 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] sm:opacity-100",
        className,
      )}
    >
      <svg
        viewBox="0 0 1440 320"
        preserveAspectRatio="xMidYMid slice"
        className="h-full w-full"
      >
        <defs>
          <linearGradient id="gemini-cyan" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#7DF9FF" stopOpacity="0.08" />
            <stop offset="36%" stopColor="#7DF9FF" stopOpacity="1" />
            <stop offset="62%" stopColor="#2F80FF" stopOpacity="0.96" />
            <stop offset="100%" stopColor="#7DF9FF" stopOpacity="0.08" />
          </linearGradient>
          <linearGradient id="gemini-blue" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#2F80FF" stopOpacity="0.08" />
            <stop offset="44%" stopColor="#8FB9FF" stopOpacity="0.94" />
            <stop offset="72%" stopColor="#7DF9FF" stopOpacity="0.78" />
            <stop offset="100%" stopColor="#2F80FF" stopOpacity="0.08" />
          </linearGradient>
          <linearGradient id="gemini-white" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#F0ABFC" stopOpacity="0.08" />
            <stop offset="48%" stopColor="#FFFFFF" stopOpacity="0.86" />
            <stop offset="70%" stopColor="#7DF9FF" stopOpacity="0.68" />
            <stop offset="100%" stopColor="#F0ABFC" stopOpacity="0.08" />
          </linearGradient>
          <filter id="gemini-soft-glow" x="-10%" y="-40%" width="120%" height="180%">
            <feGaussianBlur stdDeviation="5.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g filter="url(#gemini-soft-glow)">
          {waveLines.map((line) => (
            <path
              key={line.d}
              d={line.d}
              fill="none"
              opacity={line.opacity}
              stroke={line.stroke}
              strokeDasharray="20 28"
              strokeLinecap="round"
              strokeWidth="2.35"
            >
              <animate
                attributeName="stroke-dashoffset"
                dur={line.duration}
                repeatCount="indefinite"
                values="0;260"
              />
            </path>
          ))}
        </g>

        <ellipse
          cx="720"
          cy="166"
          fill="url(#gemini-cyan)"
          opacity="0.16"
          rx="330"
          ry="126"
        />
      </svg>
    </div>
  );
}
