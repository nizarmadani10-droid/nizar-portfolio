"use client";

import { lazy, Suspense, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const Spline = lazy(() => import("@splinetool/react-spline"));

type SplineSceneProps = {
  scene: string;
  className?: string;
  globalPointerTracking?: boolean;
};

function SplineFallback() {
  return (
    <div className="flex h-full min-h-[320px] w-full items-center justify-center bg-transparent">
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

export function SplineScene({
  scene,
  className,
  globalPointerTracking = false,
}: SplineSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!globalPointerTracking) {
      return;
    }

    const canTrackPointer =
      window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    if (!canTrackPointer) {
      return;
    }

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const current = { ...target };
    let frameId = 0;

    const dispatchPointerMove = () => {
      current.x += (target.x - current.x) * 0.1;
      current.y += (target.y - current.y) * 0.1;

      const canvas = containerRef.current?.querySelector("canvas");

      if (canvas) {
        const rect = canvas.getBoundingClientRect();
        const viewportWidth = Math.max(window.innerWidth, 1);
        const viewportHeight = Math.max(window.innerHeight, 1);
        const mappedX =
          rect.left + (current.x / viewportWidth) * Math.max(rect.width, 1);
        const mappedY =
          rect.top + (current.y / viewportHeight) * Math.max(rect.height, 1);

        const eventInit = {
          bubbles: true,
          cancelable: true,
          clientX: mappedX,
          clientY: mappedY,
          screenX: mappedX,
          screenY: mappedY,
          view: window,
        };

        if (typeof PointerEvent !== "undefined") {
          canvas.dispatchEvent(
            new PointerEvent("pointermove", {
              ...eventInit,
              pointerId: 1,
              pointerType: "mouse",
              isPrimary: true,
            }),
          );
        }

        canvas.dispatchEvent(new MouseEvent("mousemove", eventInit));
      }

      frameId = window.requestAnimationFrame(dispatchPointerMove);
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (!event.isTrusted || event.pointerType === "touch") {
        return;
      }

      target.x = event.clientX;
      target.y = event.clientY;

      if (!frameId) {
        frameId = window.requestAnimationFrame(dispatchPointerMove);
      }
    };

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.cancelAnimationFrame(frameId);
    };
  }, [globalPointerTracking]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative h-full w-full overflow-hidden",
        globalPointerTracking && "pointer-events-none",
        className,
      )}
      aria-hidden={globalPointerTracking ? "true" : undefined}
    >
      <Suspense fallback={<SplineFallback />}>
        <Spline scene={scene} className="h-full w-full" />
      </Suspense>
    </div>
  );
}
