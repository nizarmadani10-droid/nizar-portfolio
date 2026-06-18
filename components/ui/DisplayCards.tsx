import { cn } from "@/lib/utils";

export type DisplayCard = {
  title: string;
  description: string;
  label: string;
  status: string;
};

type DisplayCardsProps = {
  cards: readonly DisplayCard[];
  className?: string;
};

const cardPositions = [
  "left-1/2 top-0 z-10 -translate-x-1/2 rotate-[-2deg] sm:rotate-[-3deg]",
  "left-[53%] top-[86px] z-20 -translate-x-1/2 rotate-[2deg] sm:top-[94px]",
  "left-[47%] top-[172px] z-30 -translate-x-1/2 rotate-[-1deg] sm:top-[188px]",
];

const iconStyles = [
  "border-[#7DF9FF]/25 bg-[#7DF9FF]/10 text-[#7DF9FF]",
  "border-[#2F80FF]/30 bg-[#2F80FF]/12 text-[#8FB9FF]",
  "border-white/15 bg-white/[0.06] text-white",
];

function SignalIcon({ index }: { index: number }) {
  if (index === 1) {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4">
        <path
          d="M4 7.5h7m-7 9h7m-3.5-9v9M14.5 6l5 6-5 6"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
        />
      </svg>
    );
  }

  if (index === 2) {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4">
        <path
          d="M12 3.5v17M4.5 8.5h15M6 15.5h12M7.5 5.5l9 13M16.5 5.5l-9 13"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.6"
        />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4">
      <path
        d="M5 12h3l2-6 4 12 2-6h3"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export function DisplayCards({ cards, className }: DisplayCardsProps) {
  return (
    <div
      className={cn(
        "relative h-[292px] w-full max-w-[410px] sm:h-[320px] sm:max-w-[460px] lg:h-[338px] lg:max-w-[560px]",
        className,
      )}
    >
      <div className="pointer-events-none absolute left-1/2 top-10 h-48 w-56 -translate-x-1/2 rounded-full bg-[#2F80FF]/12 blur-3xl sm:h-56 sm:w-72" />
      <div className="pointer-events-none absolute left-1/2 bottom-4 h-36 w-48 -translate-x-1/2 rounded-full bg-[#7DF9FF]/10 blur-3xl sm:h-44 sm:w-60" />

      {cards.map((card, index) => (
        <article
          key={card.title}
          className={cn(
            "group absolute min-h-[116px] w-[min(86vw,340px)] overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] p-3.5 shadow-[0_18px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl transition duration-300 sm:min-h-[124px] sm:w-[370px] sm:p-4 lg:w-[400px]",
            "hover:-translate-y-1 hover:border-[#7DF9FF]/30 hover:bg-white/[0.085] lg:hover:rotate-0 lg:hover:scale-[1.025]",
            cardPositions[index] ?? "",
          )}
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#7DF9FF]/45 to-transparent" />
          <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-[#7DF9FF]/10 blur-2xl transition group-hover:bg-[#7DF9FF]/16" />

          <div className="relative flex items-start gap-3">
            <span
              className={cn(
                "flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl border sm:h-9 sm:w-9",
                iconStyles[index] ?? iconStyles[0],
              )}
            >
              <SignalIcon index={index} />
            </span>

            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <p className="font-code text-[0.58rem] uppercase tracking-[0.16em] text-[#7DF9FF]/80 sm:text-[0.62rem] sm:tracking-[0.18em]">
                  {card.label}
                </p>
                <span className="rounded-full border border-white/10 bg-[#03050C]/45 px-2 py-0.5 font-code text-[0.54rem] uppercase tracking-[0.12em] text-[#AEB7C8] sm:text-[0.58rem] sm:tracking-[0.14em]">
                  {card.status}
                </span>
              </div>

              <h3 className="mt-1.5 font-display text-base font-semibold tracking-tight text-white sm:mt-2 sm:text-lg">
                {card.title}
              </h3>

              <p className="mt-1.5 text-xs leading-5 text-[#AEB7C8] sm:mt-2 sm:text-sm sm:leading-6">
                {card.description}
              </p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
