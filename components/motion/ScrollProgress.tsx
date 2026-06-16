"use client";

import { motion, useScroll, useSpring } from "motion/react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed left-0 top-0 z-[100] h-px w-full origin-left bg-gradient-to-r from-[#2F80FF] via-[#7DF9FF] to-white"
      style={{ scaleX }}
    />
  );
}
