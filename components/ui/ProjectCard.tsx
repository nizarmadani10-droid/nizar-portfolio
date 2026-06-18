import Link from "next/link";
import type { Project } from "@/data/projects";
import { Card } from "@/components/ui/Card";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card
      interactive
      className="group relative flex h-full min-h-0 flex-col overflow-hidden p-0 sm:min-h-[430px]"
    >
      <Link
        href={`/projects/${project.slug}`}
        className="absolute inset-0 z-10 rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7DF9FF]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#03050C]"
        aria-label={`Open case study for ${project.title}`}
      >
        <span className="sr-only">Open case study for {project.title}</span>
      </Link>

      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#7DF9FF]/70 to-transparent" />
      <div className="absolute right-5 top-5 hidden h-12 w-12 rounded-full border border-[#7DF9FF]/20 bg-[#7DF9FF]/[0.04] transition duration-300 group-hover:scale-110 group-hover:border-[#7DF9FF]/50 sm:block" />
      <div className="absolute right-8 top-8 hidden h-6 w-6 rounded-full bg-[#7DF9FF]/10 blur-lg transition duration-300 group-hover:bg-[#7DF9FF]/30 sm:block" />

      <div className="pointer-events-none relative z-20 flex flex-1 flex-col p-4 sm:p-6">
        <div className="flex flex-wrap items-center gap-2 sm:pr-16">
          <span className="max-w-full rounded-full border border-[#7DF9FF]/20 bg-[#7DF9FF]/[0.08] px-2.5 py-1 font-code text-[0.64rem] uppercase leading-5 tracking-[0.12em] text-[#7DF9FF] sm:px-3 sm:text-[0.68rem] sm:tracking-[0.18em]">
            {project.signal}
          </span>
          <span className="max-w-full rounded-full border border-white/10 bg-white/[0.035] px-2.5 py-1 font-code text-[0.64rem] uppercase leading-5 tracking-[0.12em] text-[#AEB7C8] sm:px-3 sm:text-[0.68rem] sm:tracking-[0.18em]">
            {project.category}
          </span>
        </div>

        <h3 className="mt-4 font-display text-lg font-semibold tracking-tight text-white sm:mt-5 sm:text-2xl">
          {project.title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-[#AEB7C8] sm:mt-4 sm:leading-7">
          {project.description}
        </p>

        <div className="mt-5 grid gap-3 sm:mt-6 sm:grid-cols-2">
          <SystemBlock label="Problem" body={project.problem} />
          <SystemBlock label="Solution" body={project.solution} />
        </div>

        <p className="mt-5 border-t border-white/10 pt-4 text-sm leading-6 text-[#8F9AAF] sm:mt-auto sm:pt-5">
          <span className="font-code text-[0.66rem] uppercase tracking-[0.14em] text-[#7DF9FF]/70 sm:text-[0.68rem] sm:tracking-[0.18em]">
            Impact
          </span>{" "}
          {project.impact}
        </p>

        <div className="mt-5 flex flex-col items-start gap-3 sm:mt-6 sm:flex-row sm:flex-wrap sm:items-center">
          <div className="font-code text-[0.68rem] uppercase tracking-[0.16em] text-[#7DF9FF]/70 transition group-hover:text-[#7DF9FF] sm:text-xs sm:tracking-[0.22em]">
            Open Case Study &rarr;
          </div>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="pointer-events-auto relative z-30 w-full rounded-full border border-white/10 bg-white/[0.035] px-3 py-2 text-center font-code text-[0.66rem] uppercase leading-5 tracking-[0.12em] text-[#AEB7C8] transition hover:border-[#7DF9FF]/45 hover:text-white sm:w-auto sm:text-[0.68rem] sm:tracking-[0.16em]"
            >
              GitHub Repository
            </a>
          )}
        </div>
      </div>
    </Card>
  );
}

function SystemBlock({ label, body }: { label: string; body: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3.5 sm:p-4">
      <p className="font-code text-[0.66rem] uppercase tracking-[0.16em] text-[#7DF9FF]/80 sm:text-[0.68rem] sm:tracking-[0.2em]">
        {label}
      </p>
      <p className="mt-2.5 text-sm leading-6 text-[#AEB7C8] sm:mt-3">
        {body}
      </p>
    </div>
  );
}
