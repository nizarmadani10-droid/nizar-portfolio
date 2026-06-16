import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type CardProps = {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
};

export function Card({ children, className, interactive = false }: CardProps) {
  return (
    <div
      className={cn(
        "glass-panel rounded-2xl p-5 sm:rounded-3xl sm:p-6",
        interactive &&
          "transition duration-300 sm:hover:-translate-y-1 sm:hover:border-[#7DF9FF]/30 sm:hover:bg-white/[0.08]",
        className,
      )}
    >
      {children}
    </div>
  );
}
