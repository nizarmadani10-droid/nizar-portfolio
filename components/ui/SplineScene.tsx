"use client";

import { lazy, Suspense } from "react";
import { cn } from "@/lib/utils";

const Spline = lazy(() => import("@splinetool/react-spline"));

type SplineSceneProps = {
  scene: string;
  className?: string;
};

function SplineFallback() {
  return (
    <div className="flex h-full min-h-[320px] w-full items-center justify-center bg-[#03050C]/70">
      <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-[#7DF9FF]/20 bg-white/[0.04]">
        <div className="absolute inset-3 rounded-full border border-[#2F80FF]/20" />
        <div className="absolute inset-0 rounded-full border-t border-[#7DF9FF]/70 animate-spin" />
        <span className="font-code text-[0.62rem] uppercase leading-4 tracking-[0.2em] text-[#AEB7C8]">
          Loading
        </span>
      </div>
    </div>
  );
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  return (
    <div className={cn("relative h-full w-full overflow-hidden", className)}>
      <Suspense fallback={<SplineFallback />}>
        <Spline scene={scene} className="h-full w-full" />
      </Suspense>
    </div>
  );
}
