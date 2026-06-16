"use client";

import { useMemo, useState } from "react";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects, type ProjectCategory } from "@/data/projects";
import { cn } from "@/lib/utils";

type Filter = "All" | ProjectCategory;

const filters: Filter[] = [
  "All",
  "Language AI",
  "Computer Vision",
  "Applied AI",
  "Robotics",
];

export function FeaturedProjects() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }

    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  return (
    <Section
      id="projects"
      label="Selected Intelligent Systems"
      title="AI projects presented as systems, not simple assignments."
      description="Filter the systems by AI domain and inspect the problem, solution, architecture, stack, and measurable signal behind each project."
    >
      <div className="-mx-5 mb-7 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:mb-8 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0 sm:gap-3">
        {filters.map((filter) => {
          const isActive = activeFilter === filter;

          return (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "shrink-0 rounded-full border px-3 py-2 font-code text-[0.66rem] uppercase leading-5 tracking-[0.12em] transition sm:px-4 sm:text-xs sm:tracking-[0.18em]",
                isActive
                  ? "border-[#7DF9FF]/50 bg-[#7DF9FF]/10 text-white sm:shadow-[0_0_24px_rgba(125,249,255,0.12)]"
                  : "border-white/10 bg-white/5 text-[#AEB7C8] hover:border-[#7DF9FF]/30 hover:text-white",
              )}
            >
              {filter}
            </button>
          );
        })}
      </div>

      <div className="grid gap-5 md:grid-cols-2 lg:gap-6">
        {filteredProjects.map((project, index) => (
          <Reveal key={project.slug} delay={index * 0.08}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
