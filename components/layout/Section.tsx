import type { ReactNode } from "react";
import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  label?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function Section({
  id,
  label,
  title,
  description,
  children,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("relative z-10 py-12 sm:py-20 lg:py-24", className)}
    >
      <Container>
        {(label || title || description) && (
          <div className="mb-7 max-w-4xl sm:mb-10">
            {label && (
              <p className="font-code text-[0.68rem] uppercase leading-5 tracking-[0.22em] text-[#7DF9FF] sm:text-xs sm:tracking-[0.3em]">
                {label}
              </p>
            )}

            {title && (
              <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-white sm:mt-4 sm:text-4xl md:text-5xl">
                {title}
              </h2>
            )}

            {description && (
              <p className="mt-4 max-w-3xl text-sm leading-7 text-[#AEB7C8] sm:mt-5 sm:text-base">
                {description}
              </p>
            )}
          </div>
        )}

        {children}
      </Container>
    </section>
  );
}
