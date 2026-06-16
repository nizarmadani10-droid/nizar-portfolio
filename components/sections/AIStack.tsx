import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { SkillBadge } from "@/components/ui/SkillBadge";
import { skillGroups, type SkillGroup } from "@/data/skills";

export function AIStack() {
  return (
    <Section
      id="skills"
      label="AI Stack"
      title="Structured AI engineering capability map."
      description="A practical technical profile spanning machine learning, RAG systems, computer vision, data workflows, software engineering, and robotics foundations."
    >
      <div className="grid gap-4 md:grid-cols-2 md:gap-5 xl:grid-cols-3 xl:gap-6">
        {skillGroups.map((group, index) => (
          <Reveal key={group.title} delay={index * 0.05}>
            <CapabilityCard group={group} index={index} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function CapabilityCard({
  group,
  index,
}: {
  group: SkillGroup;
  index: number;
}) {
  const primarySignals = group.skills.slice(0, 3);

  return (
    <Card interactive className="group relative h-full overflow-hidden p-0">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#7DF9FF]/35 to-transparent sm:via-[#7DF9FF]/60" />
      <div className="absolute right-5 top-5 hidden font-code text-xs text-[#7DF9FF]/40 transition group-hover:text-[#7DF9FF]/80 sm:block">
        0{index + 1}
      </div>

      <div className="flex h-full flex-col p-4 sm:p-6">
        <div className="flex flex-wrap gap-2 sm:pr-12">
          <Badge className="hidden border-[#7DF9FF]/20 bg-[#7DF9FF]/10 text-[#7DF9FF] sm:inline-flex">
            Capability Area
          </Badge>
          <Badge>{group.skills.length} skills</Badge>
        </div>

        <h3 className="mt-4 font-display text-lg font-semibold tracking-tight text-white sm:mt-5 sm:text-2xl">
          {group.title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-[#AEB7C8] sm:mt-4 sm:leading-7">
          {group.description}
        </p>

        <div className="mt-4 rounded-2xl border border-white/10 bg-[#03050C]/30 p-3.5 sm:mt-5 sm:p-4">
          <p className="font-code text-[0.66rem] uppercase tracking-[0.16em] text-[#7DF9FF]/80 sm:text-[0.68rem] sm:tracking-[0.2em]">
            Primary Signals
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {primarySignals.map((signal) => (
              <span
                key={signal}
                className="rounded-full border border-[#7DF9FF]/12 bg-[#7DF9FF]/[0.045] px-2.5 py-1 text-xs leading-5 text-[#DDE4F2] sm:px-3"
              >
                {signal}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-1.5 border-t border-white/10 pt-4 sm:mt-5 sm:gap-2 sm:pt-5">
          {group.skills.map((skill) => (
            <SkillBadge
              key={skill}
              skill={skill}
              className="border border-white/10 bg-white/[0.035] text-[#AEB7C8] hover:border-[#7DF9FF]/25 hover:bg-[#7DF9FF]/10 hover:text-white"
            />
          ))}
        </div>
      </div>
    </Card>
  );
}
