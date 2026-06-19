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
    <article className="group/card relative flex h-full min-h-[320px] flex-col overflow-hidden rounded-[1.05rem] border border-white/10 bg-[#07101E]/72 shadow-2xl shadow-[#020815]/35 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:scale-[1.025] hover:border-[#7DF9FF]/40 hover:shadow-[0_28px_90px_rgba(47,128,255,0.18)] group-hover/projects:opacity-70 hover:!opacity-100 sm:min-h-[460px] sm:rounded-[1.6rem]">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-px bg-gradient-to-r from-transparent via-[#7DF9FF]/70 to-transparent" />
      <div className="pointer-events-none absolute -right-20 top-12 z-10 h-44 w-44 rounded-full bg-[#7DF9FF]/10 blur-3xl transition duration-500 group-hover/card:bg-[#7DF9FF]/18" />
      <div className="pointer-events-none absolute -bottom-24 left-8 z-10 h-52 w-52 rounded-full bg-[#2F80FF]/12 blur-3xl" />

      <ProjectThumbnail project={project} />

      <div className="relative z-20 flex flex-1 flex-col p-2.5 sm:p-5">
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          <span className="rounded-full border border-[#7DF9FF]/20 bg-[#7DF9FF]/10 px-2 py-0.5 font-code text-[0.5rem] uppercase leading-4 tracking-[0.1em] text-[#7DF9FF] sm:px-2.5 sm:py-1 sm:text-[0.62rem] sm:leading-5 sm:tracking-[0.13em]">
            {dictionary.categories[project.category]}
          </span>
          <span className="hidden rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 font-code text-[0.62rem] uppercase leading-5 tracking-[0.13em] text-[#AEB7C8] sm:inline-flex">
            {project.signal}
          </span>
        </div>

        <h3 className="mt-2.5 font-display text-sm font-semibold leading-5 tracking-tight text-white sm:mt-4 sm:text-2xl sm:leading-tight">
          {project.title}
        </h3>

        <p className="mt-1.5 line-clamp-2 text-[0.68rem] leading-4 text-[#AEB7C8] sm:mt-3 sm:text-sm sm:leading-6">
          {cardDescription}
        </p>

        <div className="mt-3 flex flex-wrap gap-1 sm:mt-5 sm:gap-1.5">
          {visibleTech.map((tech, index) => (
            <span
              key={tech}
              className={`rounded-full border border-white/10 bg-white/[0.045] px-1.5 py-0.5 font-code text-[0.5rem] leading-4 text-[#AEB7C8] transition group-hover/card:border-[#7DF9FF]/18 group-hover/card:text-[#DDFEFF] sm:px-2.5 sm:py-1 sm:text-[0.62rem] sm:leading-5 ${
                index > 2 ? "hidden sm:inline-flex" : "inline-flex"
              }`}
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-2 pt-4 sm:flex-row sm:flex-wrap sm:gap-2.5 sm:pt-6">
          <Link
            href={projectHref(locale, project.slug)}
            className="inline-flex min-h-8 flex-1 items-center justify-center rounded-full bg-[#2F80FF] px-2 py-1.5 text-center text-[0.62rem] font-semibold leading-4 text-white shadow-[0_0_24px_rgba(47,128,255,0.22)] transition duration-300 hover:scale-[1.02] hover:bg-[#1f6ee8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7DF9FF]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#03050C] sm:min-h-10 sm:flex-none sm:px-4 sm:py-2.5 sm:text-sm sm:leading-normal"
          >
            {dictionary.projects.enterDetails}
          </Link>

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.title} ${dictionary.projects.github}`}
              className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.035] text-[#AEB7C8] transition duration-300 hover:border-[#7DF9FF]/45 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7DF9FF]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#03050C] sm:min-h-10 sm:w-auto sm:px-4 sm:py-2.5 sm:text-center sm:font-code sm:text-[0.66rem] sm:uppercase sm:leading-5 sm:tracking-[0.12em]"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-3.5 w-3.5 sm:hidden"
              >
                <path
                  d="M12 2.5c-5.25 0-9.5 4.25-9.5 9.5 0 4.2 2.72 7.76 6.5 9.02.48.09.65-.2.65-.46v-1.6c-2.64.58-3.2-1.12-3.2-1.12-.43-1.1-1.05-1.4-1.05-1.4-.86-.58.06-.57.06-.57.95.07 1.45.98 1.45.98.84 1.44 2.2 1.02 2.74.78.08-.61.33-1.02.6-1.26-2.1-.24-4.31-1.05-4.31-4.68 0-1.03.37-1.88.98-2.54-.1-.24-.42-1.2.09-2.5 0 0 .8-.26 2.61.97A9.1 9.1 0 0 1 12 7.3c.8 0 1.6.1 2.36.32 1.8-1.23 2.6-.97 2.6-.97.52 1.3.2 2.26.1 2.5.6.66.97 1.51.97 2.54 0 3.64-2.21 4.44-4.32 4.67.34.3.64.87.64 1.76v2.44c0 .26.17.55.66.46A9.5 9.5 0 0 0 21.5 12c0-5.25-4.25-9.5-9.5-9.5Z"
                  fill="currentColor"
                />
              </svg>
              <span className="hidden sm:inline">{dictionary.projects.github}</span>
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
    <div className="relative h-24 overflow-hidden border-b border-white/10 bg-[#03050C] sm:h-52">
      {thumbnailSrc && (
        <Image
          src={thumbnailSrc}
          alt={project.heroImageAlt ?? `${project.title} project visual thumbnail`}
          fill
          sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 50vw"
          className="object-cover transition duration-700 group-hover/card:scale-105"
        />
      )}

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,transparent,rgba(3,5,12,0.2)_46%,rgba(3,5,12,0.64)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#07101E] to-transparent" />

      <div className="absolute left-4 top-4 hidden rounded-full border border-white/10 bg-[#03050C]/60 px-3 py-1 font-code text-[0.62rem] uppercase tracking-[0.16em] text-[#DDFEFF] backdrop-blur sm:block">
        {project.domain}
      </div>
    </div>
  );
}
