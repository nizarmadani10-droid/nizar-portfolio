import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BadgeProps = {
  children: ReactNode;
  className?: string;
};

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex rounded-full border border-white/10 bg-white/5 px-2.5 py-1 font-code text-[0.68rem] leading-5 text-[#AEB7C8] sm:px-3 sm:text-xs",
        className,
      )}
    >
      {children}
    </span>
  );
}
