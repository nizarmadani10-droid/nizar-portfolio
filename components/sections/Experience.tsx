import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { ExperienceCard } from "@/components/ui/ExperienceCard";
import { experiences } from "@/data/experience";

export function Experience() {
  return (
    <Section
      id="experience"
      label="Experience"
      title="Experience across AI, data, software, and intelligent systems."
      description="A practical trajectory across local RAG systems, applied data workflows, machine learning, software engineering, and IT foundations."
    >
      <div className="relative">
        <div className="absolute bottom-0 left-4 top-0 hidden w-px bg-gradient-to-b from-[#7DF9FF]/60 via-white/10 to-transparent md:block" />

        <div className="space-y-4 sm:space-y-6">
          {experiences.map((experience, index) => (
            <Reveal
              key={`${experience.role}-${experience.company}`}
              delay={index * 0.08}
            >
              <div className="relative md:pl-12">
                <div className="absolute left-[0.55rem] top-8 hidden h-4 w-4 rounded-full border border-[#7DF9FF]/60 bg-[#03050C] shadow-[0_0_24px_rgba(125,249,255,0.35)] md:block" />
                <ExperienceCard experience={experience} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
