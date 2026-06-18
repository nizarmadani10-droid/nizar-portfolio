"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";

import { cn } from "@/lib/utils";

type ContactScrollContainerProps = {
  children: ReactNode;
  className?: string;
};

const spring = {
  stiffness: 120,
  damping: 26,
  restDelta: 0.001,
};

export function ContactScrollContainer({
  children,
  className,
}: ContactScrollContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [isCompactScreen, setIsCompactScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const updateScreenState = () => setIsCompactScreen(mediaQuery.matches);

    updateScreenState();
    mediaQuery.addEventListener("change", updateScreenState);

    return () => {
      mediaQuery.removeEventListener("change", updateScreenState);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 98%", "start 34%"],
  });

  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.72, 1], [16, 0, 0]),
    spring,
  );
  const scale = useSpring(
    useTransform(scrollYProgress, [0, 0.72, 1], [0.95, 1, 1]),
    spring,
  );
  const y = useSpring(
    useTransform(scrollYProgress, [0, 0.72, 1], [150, 0, 0]),
    spring,
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.55, 1], [0.78, 1, 1]),
    spring,
  );
  const mobileY = useSpring(
    useTransform(scrollYProgress, [0, 1], [54, 0]),
    spring,
  );
  const mobileOpacity = useSpring(
    useTransform(scrollYProgress, [0, 1], [0.86, 1]),
    spring,
  );
  const boxShadow = useTransform(
    scrollYProgress,
    [0, 0.72, 1],
    [
      "0 14px 34px rgba(47, 128, 255, 0.09)",
      "0 34px 110px rgba(125, 249, 255, 0.2), 0 18px 54px rgba(47, 128, 255, 0.2)",
      "0 28px 90px rgba(125, 249, 255, 0.18), 0 14px 42px rgba(47, 128, 255, 0.16)",
    ],
  );

  const panelStyle = shouldReduceMotion
    ? undefined
    : isCompactScreen
      ? { y: mobileY, opacity: mobileOpacity, transformOrigin: "50% 100%" }
      : { rotateX, scale, y, opacity, boxShadow, transformOrigin: "50% 100%" };

  return (
    <div
      ref={containerRef}
      className={cn("relative mx-auto max-w-6xl [perspective:1400px]", className)}
    >
      <motion.div
        className="relative origin-bottom transform-gpu overflow-hidden rounded-[1.35rem] border border-[#7DF9FF]/15 bg-[#07101E]/75 p-px shadow-2xl shadow-[#2F80FF]/10 backdrop-blur-xl sm:rounded-[2rem]"
        style={panelStyle}
      >
        <div className="pointer-events-none absolute -left-24 top-8 h-44 w-44 rounded-full bg-[#2F80FF]/18 blur-3xl sm:h-64 sm:w-64" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-52 w-52 rounded-full bg-[#7DF9FF]/14 blur-3xl sm:h-72 sm:w-72" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(115deg,rgba(125,249,255,0.13),transparent_28%,rgba(255,255,255,0.05)_58%,transparent_78%)]" />

        <div className="relative overflow-hidden rounded-[calc(1.35rem-1px)] bg-[#03050C]/82 sm:rounded-[calc(2rem-1px)]">
          <div className="pointer-events-none absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(125,249,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(125,249,255,0.07)_1px,transparent_1px)] [background-size:44px_44px]" />
          <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#7DF9FF]/70 to-transparent" />

          <div className="relative flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3 sm:px-6">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#7DF9FF]/80 shadow-[0_0_14px_rgba(125,249,255,0.55)]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#2F80FF]/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
            </div>

            <p className="hidden font-code text-[0.68rem] uppercase tracking-[0.24em] text-[#AEB7C8] sm:block">
              Communication Console
            </p>

            <p className="font-code text-[0.62rem] uppercase tracking-[0.18em] text-[#7DF9FF] sm:text-[0.68rem] sm:tracking-[0.22em]">
              Signal Ready
            </p>
          </div>

          <div className="relative p-4 sm:p-7 md:p-10">{children}</div>
        </div>
      </motion.div>
    </div>
  );
}
