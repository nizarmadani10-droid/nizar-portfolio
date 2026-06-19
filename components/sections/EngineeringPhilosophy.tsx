"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { useI18n } from "@/components/providers/I18nProvider";
import { cn } from "@/lib/utils";

const portraitSrc = "/personal/nizar-portrait.png";

const reelTiles = [
  {
    className: "left-0 top-4 h-20 w-28",
    animate: { y: [0, -26, 10, -8, 0], opacity: [0.5, 0.88, 0.62, 0.78, 0.5] },
    duration: 3.2,
    delay: 0,
  },
  {
    className: "left-0 bottom-4 h-20 w-28",
    animate: { y: [8, -16, 24, -5, 8], opacity: [0.44, 0.74, 0.84, 0.56, 0.44] },
    duration: 3.8,
    delay: 0.45,
  },
  {
    className: "right-0 top-4 h-20 w-28",
    animate: { y: [-6, 18, -24, 7, -6], opacity: [0.48, 0.76, 0.88, 0.6, 0.48] },
    duration: 3.45,
    delay: 0.9,
  },
  {
    className: "right-0 bottom-4 h-20 w-28",
    animate: { y: [12, -22, 8, -14, 12], opacity: [0.42, 0.86, 0.58, 0.74, 0.42] },
    duration: 4.05,
    delay: 0.2,
  },
  {
    className: "left-[calc(50%-3.5rem)] top-0 h-16 w-28",
    animate: { y: [-4, -28, 12, -10, -4], opacity: [0.46, 0.84, 0.58, 0.76, 0.46] },
    duration: 3.65,
    delay: 0.7,
  },
  {
    className: "bottom-0 left-[calc(50%-3.5rem)] h-16 w-28",
    animate: { y: [6, 22, -18, 9, 6], opacity: [0.4, 0.66, 0.82, 0.54, 0.4] },
    duration: 3.35,
    delay: 1.05,
  },
];

export function EngineeringPhilosophy() {
  const shouldReduceMotion = useReducedMotion();
  const { dictionary } = useI18n();
  const philosophy = dictionary.philosophy;

  return (
    <Section id="philosophy" className="py-8 sm:py-12 lg:py-14">
      <Reveal>
        <div
          dir="ltr"
          className="relative mx-auto max-w-5xl overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#07101E]/72 shadow-[0_24px_90px_rgba(0,0,0,0.3)] backdrop-blur-xl"
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#7DF9FF]/60 to-transparent" />
          <div className="pointer-events-none absolute -left-24 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-[#2F80FF]/12 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 bottom-0 h-56 w-56 rounded-full bg-[#7DF9FF]/10 blur-3xl" />

          <div className="relative grid gap-0 p-4 sm:p-5 md:grid-cols-[0.4fr_0.6fr] md:items-center md:p-6">
            <div className="group/reel relative min-h-[240px] overflow-hidden rounded-[1.35rem] border border-white/10 bg-[#03050C]/40 sm:min-h-[270px]">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(125,249,255,0.18),transparent_42%),linear-gradient(135deg,rgba(47,128,255,0.08),transparent_55%)]" />

              <div className="absolute left-1/2 top-1/2 h-[230px] w-[330px] -translate-x-1/2 -translate-y-1/2 sm:h-[250px] sm:w-[370px]">
                <motion.div
                  className="relative h-full w-full"
                  animate={
                    shouldReduceMotion
                      ? undefined
                      : {
                          x: [0, 5, -3, 0],
                          rotate: [0, -0.7, 0.45, 0],
                        }
                  }
                  whileHover={
                    shouldReduceMotion ? undefined : { y: -18, scale: 1.035 }
                  }
                  transition={{
                    duration: 3.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {reelTiles.map((tile, index) => (
                    <motion.div
                      key={tile.className}
                      className={cn(
                        "pointer-events-none absolute rounded-[1.25rem] border border-white/10 bg-white/[0.055] shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_14px_40px_rgba(0,0,0,0.22)] backdrop-blur-xl transition duration-500 group-hover/reel:bg-[#7DF9FF]/[0.07]",
                        tile.className,
                      )}
                      animate={shouldReduceMotion ? undefined : tile.animate}
                      transition={{
                        duration: tile.duration,
                        delay: tile.delay,
                        repeat: Infinity,
                        repeatType: "mirror",
                        ease: "easeInOut",
                      }}
                    />
                  ))}

                  <div className="absolute left-1/2 top-1/2 h-[138px] w-[138px] -translate-x-1/2 -translate-y-1/2 sm:h-[154px] sm:w-[154px]">
                    <motion.div
                      className="relative h-full w-full overflow-hidden rounded-[1.15rem] border border-white/15 bg-[#03050C] shadow-[0_18px_60px_rgba(0,0,0,0.35)] transition duration-500 group-hover/reel:scale-[1.03]"
                      animate={
                        shouldReduceMotion
                          ? undefined
                          : {
                              y: [0, -12, 6, -4, 0],
                              rotate: [0, 0.55, -0.35, 0.2, 0],
                              scale: [1, 1.04, 0.995, 1.02, 1],
                            }
                      }
                      transition={{
                        duration: 3.6,
                        delay: 0.3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <Image
                        src={portraitSrc}
                        alt={philosophy.imageAlt}
                        fill
                        sizes="180px"
                        className="object-cover object-[50%_18%]"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(3,5,12,0.14)_55%,rgba(3,5,12,0.58)_100%)]" />
                    </motion.div>
                  </div>
                </motion.div>
              </div>

              <div className="pointer-events-none absolute inset-x-8 bottom-6 h-px bg-gradient-to-r from-transparent via-[#7DF9FF]/45 to-transparent" />
            </div>

            <div className="relative flex min-h-[190px] items-center px-1 py-6 sm:px-4 md:px-8 md:py-7 lg:px-10">
              <blockquote className="max-w-2xl font-display text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
                "{philosophy.quote}"
              </blockquote>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
