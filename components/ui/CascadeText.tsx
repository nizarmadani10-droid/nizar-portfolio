import type { CSSProperties, ElementType } from "react";

import { cn } from "@/lib/utils";

type CascadeTextProps = {
  text: string;
  as?: ElementType;
  className?: string;
  fontSize?: string;
  staggerDelay?: number;
  duration?: number;
  color?: string;
  hoverColor?: string;
  direction?: "up" | "down";
};

type SegmenterLike = {
  segment(input: string): Iterable<{ segment: string }>;
};

type SegmenterConstructor = new (
  locales?: string | string[],
  options?: { granularity: "grapheme" },
) => SegmenterLike;

function splitGraphemes(text: string) {
  const Segmenter = (Intl as typeof Intl & { Segmenter?: SegmenterConstructor })
    .Segmenter;

  if (!Segmenter) {
    return Array.from(text);
  }

  return Array.from(
    new Segmenter(undefined, { granularity: "grapheme" }).segment(text),
    ({ segment }) => segment,
  );
}

export function CascadeText({
  text,
  as,
  className,
  fontSize,
  staggerDelay = 0.035,
  duration = 0.42,
  color = "inherit",
  hoverColor = "#7DF9FF",
  direction = "up",
}: CascadeTextProps) {
  const Component = as ?? "span";
  const characters = splitGraphemes(text);
  const exitClass =
    direction === "up"
      ? "group-hover/cascade:-translate-y-full"
      : "group-hover/cascade:translate-y-full";
  const enterStartClass =
    direction === "up" ? "translate-y-full" : "-translate-y-full";

  return (
    <Component
      aria-label={text}
      className={cn("group/cascade inline-block max-w-full", className)}
      style={{ color, fontSize }}
    >
      {characters.map((character, index) => {
        if (character === " ") {
          return (
            <span
              key={`${character}-${index}`}
              aria-hidden="true"
              className="inline-block w-[0.28em]"
            >
              &nbsp;
            </span>
          );
        }

        const transitionStyle: CSSProperties = {
          transitionDelay: `${index * staggerDelay}s`,
          transitionDuration: `${duration}s`,
          transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
        };

        return (
          <span
            key={`${character}-${index}`}
            aria-hidden="true"
            className="relative inline-block overflow-hidden align-baseline leading-[0.95]"
          >
            <span
              className={cn(
                "block translate-y-0 transition-transform will-change-transform",
                exitClass,
              )}
              style={transitionStyle}
            >
              {character}
            </span>
            <span
              className={cn(
                "absolute inset-0 block transition-transform will-change-transform group-hover/cascade:translate-y-0",
                enterStartClass,
              )}
              style={{ ...transitionStyle, color: hoverColor }}
            >
              {character}
            </span>
          </span>
        );
      })}
    </Component>
  );
}
