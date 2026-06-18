"use client";

import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { useI18n } from "@/components/providers/I18nProvider";
import { DisplayCards } from "@/components/ui/DisplayCards";
import { GeminiLines } from "@/components/ui/GeminiLines";

export function AIStack() {
  const { dictionary } = useI18n();
  const stack = dictionary.aiStack;

  return (
    <Section id="skills">
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-code text-[0.68rem] uppercase leading-5 tracking-[0.22em] text-[#7DF9FF] sm:text-xs sm:tracking-[0.3em]">
            {stack.label}
          </p>

          <h2 className="mx-auto mt-3 max-w-2xl font-display text-2xl font-semibold tracking-tight text-white sm:mt-4 sm:text-4xl md:text-5xl">
            {stack.title}
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#AEB7C8] sm:mt-5 sm:text-base">
            {stack.description}
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.08} className="mt-7 sm:mt-9">
        <div className="relative mx-auto w-full">
          <GeminiLines className="left-1/2 top-1/2 h-[340px] w-screen -translate-x-1/2 -translate-y-1/2 sm:h-[390px]" />
          <DisplayCards cards={stack.cards} className="relative z-10 mx-auto" />
        </div>
      </Reveal>
    </Section>
  );
}
