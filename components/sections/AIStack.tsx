import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { DisplayCards, type DisplayCard } from "@/components/ui/DisplayCards";

const stackHighlights: DisplayCard[] = [
  {
    title: "Generative AI & RAG",
    description: "RAG, embeddings, local LLMs.",
    label: "Core Strength",
    status: "Active",
  },
  {
    title: "Computer Vision",
    description: "OCR, relighting, 3D vision.",
    label: "Visual AI",
    status: "Applied",
  },
  {
    title: "Machine Learning Systems",
    description: "Training, evaluation, delivery.",
    label: "ML Layer",
    status: "Reliable",
  },
];

export function AIStack() {
  return (
    <Section id="skills">
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-code text-[0.68rem] uppercase leading-5 tracking-[0.22em] text-[#7DF9FF] sm:text-xs sm:tracking-[0.3em]">
            AI Stack
          </p>

          <h2 className="mx-auto mt-3 max-w-2xl font-display text-2xl font-semibold tracking-tight text-white sm:mt-4 sm:text-4xl md:text-5xl">
            From models to real AI systems.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#AEB7C8] sm:mt-5 sm:text-base">
            The tools I use across RAG, vision, ML, data, and robotics.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.08} className="mt-7 sm:mt-9">
        <DisplayCards cards={stackHighlights} className="mx-auto" />
      </Reveal>
    </Section>
  );
}
