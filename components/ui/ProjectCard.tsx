"use client";

import Image from "next/image";
import Link from "next/link";

import { useI18n } from "@/components/providers/I18nProvider";
import type { Project } from "@/data/projects";
import { projectHref } from "@/lib/i18n";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const { locale, dictionary } = useI18n();
  const visibleTech = project.stack.slice(0, 5);
  const cardDescription = project.shortDescription ?? project.description;

  return (
    <article className="group/card relative flex h-full min-h-[460px] flex-col overflow-hidden rounded-[1.35rem] border border-white/10 bg-[#07101E]/72 shadow-2xl shadow-[#020815]/35 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:scale-[1.025] hover:border-[#7DF9FF]/40 hover:shadow-[0_28px_90px_rgba(47,128,255,0.18)] group-hover/projects:opacity-70 hover:!opacity-100 sm:rounded-[1.6rem]">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-px bg-gradient-to-r from-transparent via-[#7DF9FF]/70 to-transparent" />
      <div className="pointer-events-none absolute -right-20 top-12 z-10 h-44 w-44 rounded-full bg-[#7DF9FF]/10 blur-3xl transition duration-500 group-hover/card:bg-[#7DF9FF]/18" />
      <div className="pointer-events-none absolute -bottom-24 left-8 z-10 h-52 w-52 rounded-full bg-[#2F80FF]/12 blur-3xl" />

      <ProjectThumbnail project={project} />

      <div className="relative z-20 flex flex-1 flex-col p-4 sm:p-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-[#7DF9FF]/20 bg-[#7DF9FF]/10 px-2.5 py-1 font-code text-[0.62rem] uppercase leading-5 tracking-[0.13em] text-[#7DF9FF]">
            {dictionary.categories[project.category]}
          </span>
          <span className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 font-code text-[0.62rem] uppercase leading-5 tracking-[0.13em] text-[#AEB7C8]">
            {project.signal}
          </span>
        </div>

        <h3 className="mt-4 font-display text-xl font-semibold tracking-tight text-white sm:text-2xl">
          {project.title}
        </h3>

        <p className="mt-3 line-clamp-2 text-sm leading-6 text-[#AEB7C8]">
          {cardDescription}
        </p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {visibleTech.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/[0.045] px-2.5 py-1 font-code text-[0.62rem] leading-5 text-[#AEB7C8] transition group-hover/card:border-[#7DF9FF]/18 group-hover/card:text-[#DDFEFF]"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-col gap-2.5 pt-6 sm:flex-row sm:flex-wrap">
          <Link
            href={projectHref(locale, project.slug)}
            className="inline-flex min-h-10 items-center justify-center rounded-full bg-[#2F80FF] px-4 py-2.5 text-center text-sm font-semibold text-white shadow-[0_0_24px_rgba(47,128,255,0.22)] transition duration-300 hover:scale-[1.02] hover:bg-[#1f6ee8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7DF9FF]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#03050C]"
          >
            {dictionary.projects.enterDetails}
          </Link>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] px-4 py-2.5 text-center font-code text-[0.66rem] uppercase leading-5 tracking-[0.12em] text-[#AEB7C8] transition duration-300 hover:border-[#7DF9FF]/45 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7DF9FF]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#03050C]"
            >
              {dictionary.projects.github}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function ProjectThumbnail({ project }: { project: Project }) {
  const thumbnailSrc = project.thumbnailImage;

  return (
    <div className="relative h-48 overflow-hidden border-b border-white/10 bg-[#03050C] sm:h-52">
      {thumbnailSrc && (
        <Image
          src={thumbnailSrc}
          alt={project.heroImageAlt ?? `${project.title} project visual thumbnail`}
          fill
          sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition duration-700 group-hover/card:scale-105"
        />
      )}

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,transparent,rgba(3,5,12,0.2)_46%,rgba(3,5,12,0.64)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#07101E] to-transparent" />

      <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-[#03050C]/60 px-3 py-1 font-code text-[0.62rem] uppercase tracking-[0.16em] text-[#DDFEFF] backdrop-blur">
        {project.domain}
      </div>
    </div>
  );
}
