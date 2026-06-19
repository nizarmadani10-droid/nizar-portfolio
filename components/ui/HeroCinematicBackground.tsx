"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

const HERO_BACKGROUND_VIDEO =
  "https://stream.mux.com/tLkHO1qZoaaQOUeVWo8hEBeGQfySP02EPS02BmnNFyXys.m3u8";

export function HeroCinematicBackground() {
  const shouldReduceMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoReady, setIsVideoReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    if (!video || shouldReduceMotion) {
      return;
    }

    const isSmallScreen = window.matchMedia("(max-width: 767px)").matches;

    if (isSmallScreen) {
      return;
    }

    let hls: import("hls.js").default | null = null;
    let isMounted = true;

    const playVideo = () => {
      if (!isMounted) {
        return;
      }

      setIsVideoReady(true);
      void video.play().catch(() => {
        setIsVideoReady(false);
      });
    };

    video.addEventListener("canplay", playVideo);

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = HERO_BACKGROUND_VIDEO;
      video.load();
    } else {
      void import("hls.js").then(({ default: Hls }) => {
        if (!isMounted || !Hls.isSupported()) {
          return;
        }

        hls = new Hls({
          enableWorker: false,
          lowLatencyMode: false,
        });

        hls.loadSource(HERO_BACKGROUND_VIDEO);
        hls.attachMedia(video);
      });
    }

    return () => {
      isMounted = false;
      video.removeEventListener("canplay", playVideo);
      hls?.destroy();
      video.pause();
      video.removeAttribute("src");
      video.load();
    };
  }, [shouldReduceMotion]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-[#03050C]"
    >
      <video
        ref={videoRef}
        className={`absolute inset-0 hidden h-full w-full object-cover brightness-[1.08] contrast-[1.45] saturate-[1.35] transition-opacity duration-1000 md:block ${
          isVideoReady ? "opacity-100" : "opacity-0"
        }`}
        muted
        loop
        playsInline
        preload="metadata"
      />

      <motion.div
        className={`absolute inset-0 opacity-80 transition-opacity duration-1000 sm:opacity-90 ${
          isVideoReady ? "md:opacity-10" : ""
        }`}
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, transparent 0 46px, rgba(125,249,255,0.18) 48px 52px, transparent 56px 92px), radial-gradient(circle at 62% 38%, rgba(125,249,255,0.2), transparent 22rem), radial-gradient(circle at 76% 34%, rgba(47,128,255,0.18), transparent 26rem), linear-gradient(120deg, rgba(3,5,12,0.98), rgba(5,10,26,0.82), rgba(7,24,45,0.68))",
          backgroundSize: "220px 100%, 150% 150%, 150% 150%, 150% 150%",
        }}
        animate={
          shouldReduceMotion
            ? undefined
            : {
                backgroundPosition: [
                  "0px 0%, 0% 45%, 100% 52%, 0% 45%",
                  "220px 0%, 100% 52%, 0% 45%, 100% 52%",
                  "0px 0%, 0% 45%, 100% 52%, 0% 45%",
                ],
              }
        }
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute left-1/2 top-[42%] h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2F80FF]/18 blur-3xl sm:h-[42rem] sm:w-[42rem]"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                opacity: [0.42, 0.72, 0.52, 0.42],
                scale: [0.94, 1.08, 1, 0.94],
              }
        }
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute left-[58%] top-[44%] hidden h-[22rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7DF9FF]/12 blur-3xl md:block"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: ["-50%", "-45%", "-54%", "-50%"],
                opacity: [0.28, 0.52, 0.36, 0.28],
              }
        }
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,5,12,0.96)_0%,rgba(3,5,12,0.7)_38%,rgba(3,5,12,0.1)_66%,rgba(3,5,12,0.18)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#03050C] via-[#03050C]/62 to-transparent sm:h-64" />
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#03050C]/58 to-transparent" />

      <div className="absolute inset-0 hidden lg:block">
        <div className="absolute left-1/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#7DF9FF]/18 to-transparent" />
        <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#2F80FF]/18 to-transparent" />
        <div className="absolute left-3/4 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#7DF9FF]/14 to-transparent" />
      </div>

      <motion.div
        className="absolute -left-[22%] top-0 hidden h-full w-[42%] rotate-12 bg-gradient-to-r from-transparent via-[#7DF9FF]/10 to-transparent blur-2xl md:block"
        animate={
          shouldReduceMotion
            ? undefined
            : {
                x: ["0%", "290%"],
                opacity: [0, 0.44, 0],
              }
        }
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <svg
        className="absolute left-1/2 top-[44%] hidden h-[28rem] w-[72rem] -translate-x-1/2 -translate-y-1/2 opacity-55 sm:block"
        viewBox="0 0 1152 448"
        fill="none"
      >
        <motion.path
          d="M44 250C180 112 306 108 452 222C598 336 724 334 858 196C950 102 1040 90 1110 126"
          stroke="url(#hero-line-a)"
          strokeWidth="1.2"
          strokeLinecap="round"
          animate={shouldReduceMotion ? undefined : { pathLength: [0.35, 1, 0.35] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.path
          d="M78 318C214 226 338 226 472 286C618 352 742 348 890 260C982 206 1060 198 1122 220"
          stroke="url(#hero-line-b)"
          strokeWidth="1"
          strokeLinecap="round"
          animate={shouldReduceMotion ? undefined : { pathLength: [0.25, 0.86, 0.25] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />
        <defs>
          <linearGradient id="hero-line-a" x1="44" y1="218" x2="1110" y2="218">
            <stop stopColor="#2F80FF" stopOpacity="0" />
            <stop offset="0.45" stopColor="#7DF9FF" stopOpacity="0.48" />
            <stop offset="1" stopColor="#2F80FF" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="hero-line-b" x1="78" y1="276" x2="1122" y2="276">
            <stop stopColor="#7DF9FF" stopOpacity="0" />
            <stop offset="0.5" stopColor="#2F80FF" stopOpacity="0.42" />
            <stop offset="1" stopColor="#7DF9FF" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(125,249,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(125,249,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] opacity-18 [mask-image:linear-gradient(to_bottom,black,transparent_86%)] sm:bg-[size:96px_96px]" />
    </div>
  );
}
