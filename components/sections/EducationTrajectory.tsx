import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import {
  educationTrajectory,
  languageCredentials,
  type EducationNode,
} from "@/data/education";

export function EducationTrajectory() {
  const primaryNodes = educationTrajectory.filter((node) => !node.compact);
  const foundationNode = educationTrajectory.find((node) => node.compact);

  return (
    <Section
      id="education"
      label="Academic Trajectory"
      title="Academic foundation for AI engineering and data systems."
      description="A five-year Moroccan engineering path in Big Data and AI, strengthened by an Italian exchange semester and compact scientific foundations."
    >
      <div className="grid gap-5 sm:gap-6 lg:grid-cols-[1fr_0.38fr] lg:gap-8">
        <div className="relative">
          <div className="absolute bottom-0 left-6 top-0 hidden w-px bg-gradient-to-b from-[#7DF9FF]/60 via-white/10 to-transparent md:block" />

          <div className="space-y-4 sm:space-y-6">
            {primaryNodes.map((node, index) => (
              <Reveal key={node.institution} delay={index * 0.1}>
                <div className="relative grid gap-6 md:grid-cols-[4rem_1fr]">
                  <div className="hidden md:flex md:justify-center">
                    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-[#7DF9FF]/30 bg-[#03050C] shadow-[0_0_30px_rgba(125,249,255,0.12)]">
                      <span className="font-code text-xs text-[#7DF9FF]">
                        0{index + 1}
                      </span>
                    </div>
                  </div>

                  <EducationCard node={node} index={index} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <aside className="space-y-4 sm:space-y-6">
          {foundationNode && (
            <Reveal delay={0.18}>
              <FoundationCard node={foundationNode} />
            </Reveal>
          )}

          <Reveal delay={0.24}>
            <Card className="relative overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#7DF9FF]/60 to-transparent" />
              <p className="font-code text-xs uppercase tracking-[0.24em] text-[#7DF9FF]">
                Language Credentials
              </p>
              <div className="mt-4 grid gap-2.5 sm:mt-5 sm:gap-3">
                {languageCredentials.map((credential) => (
                  <div
                    key={credential.language}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#03050C]/30 px-3.5 py-2.5 sm:px-4 sm:py-3"
                  >
                    <span className="text-sm font-medium text-white">
                      {credential.language}
                    </span>
                    <span className="font-code text-xs uppercase tracking-[0.18em] text-[#7DF9FF]">
                      {credential.level}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </Reveal>
        </aside>
      </div>
    </Section>
  );
}

function EducationCard({ node, index }: { node: EducationNode; index: number }) {
  return (
    <Card interactive className="relative overflow-hidden p-0">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#7DF9FF]/35 to-transparent sm:via-[#7DF9FF]/70" />

      <div className="grid gap-5 p-4 sm:gap-6 sm:p-6 lg:grid-cols-[0.72fr_1fr]">
        <div>
          <div className="flex flex-wrap gap-2">
            <span className="max-w-full rounded-full border border-[#7DF9FF]/20 bg-[#7DF9FF]/[0.08] px-2.5 py-1 font-code text-[0.64rem] uppercase leading-5 tracking-[0.12em] text-[#7DF9FF] sm:px-3 sm:text-[0.68rem] sm:tracking-[0.18em]">
              {node.type}
            </span>
            <span className="max-w-full rounded-full border border-white/10 bg-white/[0.035] px-2.5 py-1 font-code text-[0.64rem] uppercase leading-5 tracking-[0.12em] text-[#AEB7C8] sm:px-3 sm:text-[0.68rem] sm:tracking-[0.18em]">
              {node.period}
            </span>
          </div>

          <p className="mt-5 font-code text-xs uppercase tracking-[0.22em] text-[#6F7A90]">
            {node.location}
          </p>

          <h3 className="mt-3 font-display text-lg font-semibold tracking-tight text-white sm:text-2xl">
            {node.institution}
          </h3>

          <p className="mt-4 text-sm font-medium leading-7 text-[#DDE4F2]">
            {node.credential}
          </p>

          <div className="mt-5 rounded-2xl border border-white/10 bg-[#03050C]/30 p-3.5 sm:mt-6 sm:p-4">
            <p className="font-code text-[0.66rem] uppercase tracking-[0.16em] text-[#7DF9FF]/80 sm:text-[0.68rem] sm:tracking-[0.2em]">
              Academic Role
            </p>
            <p className="mt-3 text-sm leading-6 text-[#AEB7C8]">
              {index === 0
                ? "Core engineering formation in Morocco with a Big Data and AI specialization."
                : "International exchange experience expanding the academic profile beyond the home engineering program."}
            </p>
          </div>

          {node.externalUrl && (
            <p className="mt-4 text-sm leading-6 text-[#AEB7C8]">
              Official page:{" "}
              <a
                href={node.externalUrl}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-[#7DF9FF] underline decoration-[#7DF9FF]/35 underline-offset-4 transition hover:text-white hover:decoration-white"
              >
                {node.externalLabel ?? "View Program Page"}
                <span aria-hidden="true"> -&gt;</span>
              </a>
            </p>
          )}
        </div>

        <div className="flex flex-col">
          <p className="text-sm leading-7 text-[#AEB7C8]">
            {node.description}
          </p>

          <ul className="mt-5 space-y-3">
            {node.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex gap-3 text-sm leading-6 text-[#AEB7C8] sm:leading-7"
              >
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7DF9FF]/70 shadow-[0_0_12px_rgba(125,249,255,0.25)] sm:mt-3 sm:shadow-[0_0_16px_rgba(125,249,255,0.45)]" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-1.5 border-t border-white/10 pt-4 sm:mt-6 sm:gap-2 sm:pt-5">
            {node.tags.map((tag) => (
              <Badge
                key={tag}
                className="border-[#7DF9FF]/15 bg-[#7DF9FF]/[0.04] text-[#AEB7C8]"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}

function FoundationCard({ node }: { node: EducationNode }) {
  return (
    <Card interactive className="relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#7DF9FF]/35 to-transparent sm:via-[#7DF9FF]/50" />
      <p className="font-code text-xs uppercase tracking-[0.24em] text-[#7DF9FF]">
        Academic Foundation
      </p>

      <h3 className="mt-4 font-display text-lg font-semibold text-white sm:text-xl">
        {node.credential}
      </h3>

      <div className="mt-3 flex flex-wrap gap-2 text-sm text-[#AEB7C8]">
        <span>{node.location}</span>
        <span className="text-[#6F7A90]">/</span>
        <span>{node.period}</span>
      </div>

      <p className="mt-4 text-sm leading-7 text-[#AEB7C8]">
        {node.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {node.tags.map((tag) => (
          <Badge key={tag} className="text-[#AEB7C8]">
            {tag}
          </Badge>
        ))}
      </div>
    </Card>
  );
}
