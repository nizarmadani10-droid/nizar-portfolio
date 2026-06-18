import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type NameLampProps = {
  children: ReactNode;
  className?: string;
};

export function NameLamp({ children, className }: NameLampProps) {
  return (
    <div className={cn("relative isolate inline-block max-w-full py-1", className)}>
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-14 w-[min(116%,32rem)] -translate-x-1/2 rounded-full bg-[#7DF9FF]/10 blur-2xl sm:h-20 sm:w-[min(112%,44rem)] sm:bg-[#7DF9FF]/16 lg:h-24" />
      <div className="pointer-events-none absolute left-1/2 top-2 -z-10 h-20 w-[min(104%,30rem)] -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(125,249,255,0.18),rgba(47,128,255,0.08)_38%,transparent_72%)] blur-xl sm:h-28 sm:w-[min(106%,42rem)]" />
      <div className="pointer-events-none absolute left-1/2 top-1 -z-10 h-px w-[min(96%,28rem)] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#7DF9FF]/55 to-transparent sm:w-[min(98%,38rem)]" />
      <div className="pointer-events-none absolute left-1/2 top-2 -z-10 h-px w-[min(72%,22rem)] -translate-x-1/2 bg-gradient-to-r from-transparent via-white/45 to-transparent blur-[1px] sm:w-[min(74%,32rem)]" />

      <div className="relative drop-shadow-[0_0_22px_rgba(125,249,255,0.12)] sm:drop-shadow-[0_0_34px_rgba(125,249,255,0.16)]">
        {children}
      </div>
    </div>
  );
}
