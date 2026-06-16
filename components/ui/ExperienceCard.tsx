import type { Experience } from "@/data/experience";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

type ExperienceCardProps = {
  experience: Experience;
};

export function ExperienceCard({ experience }: ExperienceCardProps) {
  return (
    <Card interactive className="group relative overflow-hidden p-0">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#7DF9FF]/35 to-transparent opacity-70 sm:via-[#7DF9FF]/60" />

      <div className="grid gap-5 p-4 sm:gap-6 sm:p-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <div className="flex flex-wrap gap-2">
            <span className="max-w-full rounded-full border border-[#7DF9FF]/20 bg-[#7DF9FF]/[0.08] px-2.5 py-1 font-code text-[0.64rem] uppercase leading-5 tracking-[0.12em] text-[#7DF9FF] sm:px-3 sm:text-[0.68rem] sm:tracking-[0.18em]">
              {experience.type}
            </span>
            <span className="max-w-full rounded-full border border-white/10 bg-white/[0.035] px-2.5 py-1 font-code text-[0.64rem] uppercase leading-5 tracking-[0.12em] text-[#AEB7C8] sm:px-3 sm:text-[0.68rem] sm:tracking-[0.18em]">
              {experience.period}
            </span>
          </div>

          <h3 className="mt-4 font-display text-lg font-semibold tracking-tight text-white sm:mt-5 sm:text-2xl">
            {experience.role}
          </h3>

          <div className="mt-3 space-y-1 text-sm text-[#AEB7C8]">
            <p className="font-medium text-white">{experience.company}</p>
            <p>{experience.location}</p>
          </div>

          <div className="mt-5 rounded-2xl border border-white/10 bg-[#03050C]/30 p-3.5 sm:mt-6 sm:p-4">
            <p className="font-code text-[0.66rem] uppercase tracking-[0.16em] text-[#7DF9FF]/80 sm:text-[0.68rem] sm:tracking-[0.2em]">
              Focus
            </p>
            <p className="mt-3 text-sm leading-6 text-[#AEB7C8]">
              {experience.focus}
            </p>
          </div>
        </div>

        <div className="flex flex-col">
          <div>
            <p className="font-code text-[0.66rem] uppercase tracking-[0.16em] text-[#7DF9FF]/80 sm:text-[0.68rem] sm:tracking-[0.2em]">
              Contributions
            </p>
            <ul className="mt-3 space-y-2.5 sm:mt-4 sm:space-y-3">
              {experience.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex gap-3 text-sm leading-6 text-[#AEB7C8] sm:leading-7"
                >
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7DF9FF]/70 shadow-[0_0_12px_rgba(125,249,255,0.25)] sm:mt-3 sm:shadow-[0_0_16px_rgba(125,249,255,0.45)]" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-5 border-t border-white/10 pt-4 sm:mt-6 sm:pt-5">
            <p className="font-code text-[0.66rem] uppercase tracking-[0.16em] text-[#6F7A90] sm:text-[0.68rem] sm:tracking-[0.2em]">
              Stack / Tools
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5 sm:mt-4 sm:gap-2">
              {experience.tools.map((tool) => (
                <Badge
                  key={tool}
                  className="border-[#7DF9FF]/15 bg-[#7DF9FF]/[0.04] text-[#AEB7C8]"
                >
                  {tool}
                </Badge>
              ))}
            </div>
            {experience.reportUrl && (
              <div className="mt-5">
                <Button
                  href={experience.reportUrl}
                  target="_blank"
                  rel="noreferrer"
                  size="sm"
                  variant="secondary"
                  className="w-full border-[#7DF9FF]/30 bg-[#7DF9FF]/[0.06] sm:w-auto"
                >
                  {experience.reportLabel ?? "Download Report"}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}
