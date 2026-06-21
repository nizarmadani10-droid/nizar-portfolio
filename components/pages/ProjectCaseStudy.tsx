import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { AnimatedGrid } from "@/components/motion/AnimatedGrid";
import { I18nProvider } from "@/components/providers/I18nProvider";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import {
  ProjectPaperContent,
  ProjectPaperPreview,
} from "@/components/ui/ProjectPaperContent";
import type { Project } from "@/data/projects";
import { projects } from "@/data/projects";
import { siteConfig } from "@/lib/constants";
import {
  getDictionary,
  getDirection,
  getLocalizedProject,
  getLocalizedProjects,
  homeHref,
  projectHref,
  projectPaperHref,
  type Locale,
} from "@/lib/i18n";

type RouteMode = "legacy" | "localized";

type ProjectCaseStudyProps = {
  locale: Locale;
  slug: string;
  routeMode?: RouteMode;
};

const openGraphLocales: Record<Locale, string> = {
  en: "en_US",
  fr: "fr_FR",
  ar: "ar_MA",
};

export function getProjectCaseStudyMetadata({
  locale,
  slug,
  routeMode = "localized",
}: ProjectCaseStudyProps): Metadata {
  const dictionary = getDictionary(locale);
  const project = getLocalizedProject(locale, slug);

  if (!project) {
    return {
      title: "Project Not Found",
      description: siteConfig.seoDescription,
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const projectUrl =
    routeMode === "localized" ? projectHref(locale, project.slug) : `/projects/${project.slug}`;
  const title = `${project.title} | ${dictionary.projectDetail.metadataSuffix}`;
  const keywords = [
    project.title,
    project.domain,
    project.category,
    project.signal,
    ...project.stack,
    ...siteConfig.keywords,
  ];

  return {
    title,
    description: project.description,
    keywords,
    alternates: {
      canonical: projectUrl,
      languages: {
        en: projectHref("en", project.slug),
        fr: projectHref("fr", project.slug),
        ar: projectHref("ar", project.slug),
      },
    },
    openGraph: {
      title: `${project.title} | ${siteConfig.name}`,
      description: project.description,
      url: projectUrl,
      siteName: `${siteConfig.name} Portfolio`,
      locale: openGraphLocales[locale],
      type: "article",
    },
    twitter: {
      card: "summary",
      title: `${project.title} | ${siteConfig.name}`,
      description: project.description,
    },
  };
}

export function ProjectCaseStudy({
  locale,
  slug,
  routeMode = "localized",
}: ProjectCaseStudyProps) {
  const dictionary = getDictionary(locale);
  const project = getLocalizedProject(locale, slug);
  const localizedProjects = getLocalizedProjects(locale);
  const direction = getDirection(locale);
  const isLocalizedRoute = routeMode === "localized";
  const homeLink = (hash: string) =>
    isLocalizedRoute ? homeHref(locale, hash) : `/#${hash}`;
  const detailLink = (projectSlug: string) =>
    isLocalizedRoute ? projectHref(locale, projectSlug) : `/projects/${projectSlug}`;

  if (!project) {
    notFound();
  }

  const paperLink = isLocalizedRoute
    ? projectPaperHref(locale, project.slug)
    : `/projects/${project.slug}/paper`;

  const projectIndex = localizedProjects.findIndex(
    (item) => item.slug === project.slug,
  );
  const previousProject =
    projectIndex > 0 ? localizedProjects[projectIndex - 1] : null;
  const nextProject =
    projectIndex < localizedProjects.length - 1
      ? localizedProjects[projectIndex + 1]
      : null;
  const copy = dictionary.projectDetail;
  const paperCopy = dictionary.projectPaper;

  return (
    <I18nProvider locale={locale}>
      <main
        lang={locale}
        dir={direction}
        className="relative min-h-screen overflow-hidden"
      >
        <AnimatedGrid />
        <Navbar />

        <section className="relative z-10 overflow-hidden py-16 md:py-24">
          {project.heroImage && (
            <>
              <Image
                src={project.heroImage}
                alt={project.heroImageAlt ?? `${project.title} hero background`}
                fill
                priority
                sizes="100vw"
                className="absolute inset-0 z-0 object-cover object-[70%_center] opacity-40 saturate-[1.16] contrast-110 sm:opacity-55 md:opacity-70 lg:object-center"
              />
              <div className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(3,5,12,0.7)_0%,rgba(3,5,12,0.58)_34%,rgba(3,5,12,0.2)_68%,rgba(3,5,12,0.36)_100%)] md:bg-[linear-gradient(90deg,rgba(3,5,12,0.62)_0%,rgba(3,5,12,0.46)_34%,rgba(3,5,12,0.08)_68%,rgba(3,5,12,0.22)_100%)]" />
              <div className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(3,5,12,0.58)_0%,rgba(3,5,12,0.04)_42%,rgba(3,5,12,0.9)_100%)]" />
              <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(circle_at_76%_22%,rgba(125,249,255,0.2),transparent_34%),radial-gradient(circle_at_16%_8%,rgba(46,123,255,0.12),transparent_36%)]" />
            </>
          )}
          <AnimatedGrid className="z-[2] opacity-30 sm:opacity-40" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[3] h-32 bg-gradient-to-b from-transparent to-[#03050C]" />

          <Container className="relative z-10">
            <div className="mb-10">
              <Button href={homeLink("projects")} variant="ghost" size="sm">
                {copy.backToProjects}
              </Button>
            </div>

            <div className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-end">
              <div className="relative isolate max-w-5xl">
                <div className="pointer-events-none absolute -inset-x-5 -inset-y-6 -z-10 rounded-[2rem] border border-white/10 bg-[#03050C]/35 shadow-[0_24px_90px_rgba(0,0,0,0.38)] backdrop-blur-[2px] md:bg-[#03050C]/25" />
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-[#7DF9FF]/30 bg-[#7DF9FF]/10 px-4 py-2 font-code text-xs uppercase tracking-[0.2em] text-[#7DF9FF]">
                    {project.signal}
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 font-code text-xs uppercase tracking-[0.2em] text-[#AEB7C8]">
                    {project.domain}
                  </span>
                </div>

                <h1 className="mt-7 font-display text-4xl font-semibold tracking-tight text-white md:text-6xl">
                  {project.title}
                </h1>

                <p className="mt-6 max-w-3xl text-lg leading-8 text-[#AEB7C8]">
                  {project.description}
                </p>
              </div>

              <Card className="relative overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#7DF9FF]/70 to-transparent" />
                <p className="font-code text-xs uppercase tracking-[0.24em] text-[#7DF9FF]">
                  {copy.readiness}
                </p>
                <p className="mt-4 text-sm leading-7 text-[#AEB7C8]">
                  {copy.readinessBody}
                </p>
                <div className="mt-6 rounded-2xl border border-white/10 bg-[#03050C]/35 p-4">
                  <p className="font-code text-[0.68rem] uppercase tracking-[0.2em] text-[#6F7A90]">
                    {copy.currentCase}
                  </p>
                  <p className="mt-2 font-display text-3xl font-semibold text-white">
                    {String(projectIndex + 1).padStart(2, "0")}
                    <span className="text-[#6F7A90]">
                      /{localizedProjects.length}
                    </span>
                  </p>
                </div>
              </Card>
            </div>
          </Container>
        </section>

        <section className="relative z-10 pb-16 md:pb-24">
          <Container>
            <Card className="mt-10 overflow-hidden p-0">
              <div className="border-b border-white/10 px-6 py-5">
                <p className="font-code text-xs uppercase tracking-[0.24em] text-[#7DF9FF]">
                  {copy.overview}
                </p>
              </div>
              <div className="grid divide-y divide-white/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
                <OverviewItem
                  label={copy.category}
                  value={dictionary.categories[project.category]}
                />
                <OverviewItem label={copy.domain} value={project.domain} />
                <OverviewItem label={copy.signal} value={project.signal} />
                <OverviewItem
                  label={copy.stack}
                  value={`${project.stack.length} ${copy.technologies}`}
                  detail={`${copy.key}: ${project.stack[0]}`}
                />
              </div>
            </Card>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              <CaseStudySection
                eyebrow={copy.problem}
                title={copy.problemTitle}
                body={project.problem}
              />
              <CaseStudySection
                eyebrow={copy.solution}
                title={copy.solutionTitle}
                body={project.solution}
              />
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
              <Card className="overflow-hidden">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="font-code text-xs uppercase tracking-[0.24em] text-[#7DF9FF]">
                      {copy.systemFlow}
                    </p>
                    <h2 className="mt-3 font-display text-2xl font-semibold text-white">
                      {copy.systemFlowTitle}
                    </h2>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-code text-xs uppercase tracking-[0.18em] text-[#AEB7C8]">
                    {project.architecture.length} {copy.stages}
                  </span>
                </div>

                <div className="mt-8 grid gap-4 md:grid-cols-5">
                  {project.architecture.map((step, index) => (
                    <FlowStep
                      key={step}
                      index={index}
                      step={step}
                      isLast={index === project.architecture.length - 1}
                      direction={direction}
                    />
                  ))}
                </div>
              </Card>

              <Card>
                <p className="font-code text-xs uppercase tracking-[0.24em] text-[#7DF9FF]">
                  {copy.stack}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <Badge
                      key={tech}
                      className="border-[#7DF9FF]/15 bg-[#7DF9FF]/[0.04] text-[#AEB7C8]"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            </div>

            <Card className="mt-6 overflow-hidden">
              <div className="grid gap-6 md:grid-cols-[0.35fr_0.65fr] md:items-center">
                <div>
                  <p className="font-code text-xs uppercase tracking-[0.24em] text-[#7DF9FF]">
                    {copy.impact}
                  </p>
                  <h2 className="mt-3 font-display text-2xl font-semibold text-white">
                    {copy.impactTitle}
                  </h2>
                </div>
                <p className="text-base leading-8 text-[#AEB7C8]">
                  {project.impact}
                </p>
              </div>
            </Card>

            {project.paper && (
              <Card className="mt-6 overflow-hidden p-0">
                <div className="border-b border-white/10 px-6 py-5 sm:px-7 sm:py-6">
                  <p className="font-code text-xs uppercase tracking-[0.24em] text-[#7DF9FF]">
                    {paperCopy.eyebrow}
                  </p>
                  <div className="mt-3 grid gap-4 md:grid-cols-[0.45fr_0.55fr] md:items-end">
                    <h2 className="font-display text-2xl font-semibold text-white md:text-3xl">
                      {paperCopy.title}
                    </h2>
                    <p className="text-sm leading-7 text-[#8F9AAF]">
                      {paperCopy.description}
                    </p>
                  </div>
                </div>

                <div className="px-6 py-6 sm:px-7 sm:py-7">
                  <ProjectPaperContent
                    paper={project.paper}
                    labels={paperCopy}
                    lang={locale}
                    dir={direction}
                    className="hidden md:block"
                  />

                  <div className="md:hidden">
                    <ProjectPaperPreview
                      paper={project.paper}
                      lang={locale}
                      dir={direction}
                    />
                    <Button
                      href={paperLink}
                      variant="primary"
                      className="mt-6 w-full"
                    >
                      {paperCopy.readFullPaper}
                    </Button>
                  </div>
                </div>
              </Card>
            )}

            {(previousProject || nextProject) && (
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {previousProject && (
                  <ProjectNavigationCard
                    label={copy.previousProject}
                    project={previousProject}
                    href={detailLink(previousProject.slug)}
                    direction="previous"
                  />
                )}
                {nextProject && (
                  <ProjectNavigationCard
                    label={copy.nextProject}
                    project={nextProject}
                    href={detailLink(nextProject.slug)}
                    direction="next"
                  />
                )}
              </div>
            )}

            <Card className="mt-6 overflow-hidden">
              <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
                <div>
                  <p className="font-code text-xs uppercase tracking-[0.24em] text-[#7DF9FF]">
                    {copy.nextStep}
                  </p>
                  <h2 className="mt-3 font-display text-3xl font-semibold text-white">
                    {copy.ctaTitle}
                  </h2>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button href={homeLink("projects")} variant="secondary">
                    {copy.backToProjectsCta}
                  </Button>
                  {project.githubUrl && (
                    <Button
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      variant="secondary"
                    >
                      {copy.githubRepository}
                    </Button>
                  )}
                  <Button href={homeLink("contact")} variant="primary">
                    {copy.contactMe}
                  </Button>
                </div>
              </div>
            </Card>
          </Container>
        </section>

        <Footer />
      </main>
    </I18nProvider>
  );
}

export function projectStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

function OverviewItem({
  label,
  value,
  detail,
}: {
  label: string;
  value: string;
  detail?: string;
}) {
  return (
    <div className="p-6">
      <p className="font-code text-[0.68rem] uppercase tracking-[0.2em] text-[#6F7A90]">
        {label}
      </p>
      <p className="mt-3 text-base font-medium text-white">{value}</p>
      {detail && <p className="mt-2 text-sm text-[#8F9AAF]">{detail}</p>}
    </div>
  );
}

function CaseStudySection({
  eyebrow,
  title,
  body,
}: {
  eyebrow: string;
  title: string;
  body: string;
}) {
  return (
    <Card className="relative min-h-[220px] overflow-hidden">
      <div className="absolute right-6 top-6 h-12 w-12 rounded-full border border-[#7DF9FF]/15 bg-[#7DF9FF]/[0.04]" />
      <p className="font-code text-xs uppercase tracking-[0.24em] text-[#7DF9FF]">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-display text-2xl font-semibold text-white">
        {title}
      </h2>
      <p className="mt-5 text-sm leading-7 text-[#AEB7C8]">{body}</p>
    </Card>
  );
}

function FlowStep({
  index,
  step,
  isLast,
  direction,
}: {
  index: number;
  step: Project["architecture"][number];
  isLast: boolean;
  direction: "ltr" | "rtl";
}) {
  return (
    <div className="relative rounded-2xl border border-white/10 bg-[#03050C]/40 p-4">
      <p className="font-code text-[0.68rem] uppercase tracking-[0.2em] text-[#7DF9FF]/80">
        0{index + 1}
      </p>
      <p className="mt-3 min-h-10 text-sm font-medium leading-5 text-white">
        {step}
      </p>
      {!isLast && (
        <span className="mt-4 inline-flex font-code text-sm text-[#7DF9FF]/60 md:absolute md:-right-4 md:top-1/2 md:mt-0 md:-translate-y-1/2">
          {direction === "rtl" ? "\u2190" : "\u2192"}
        </span>
      )}
    </div>
  );
}

function ProjectNavigationCard({
  label,
  project,
  href,
  direction,
}: {
  label: string;
  project: Project;
  href: string;
  direction: "previous" | "next";
}) {
  return (
    <Link
      href={href}
      className="group block rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7DF9FF]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#03050C]"
    >
      <Card
        interactive
        className="relative h-full overflow-hidden transition group-hover:border-[#7DF9FF]/35"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#7DF9FF]/60 to-transparent opacity-0 transition group-hover:opacity-100" />
        <p className="font-code text-xs uppercase tracking-[0.22em] text-[#7DF9FF]/70">
          {label}
        </p>
        <div className="mt-4 flex items-end justify-between gap-4">
          <div>
            <h3 className="font-display text-xl font-semibold text-white">
              {project.title}
            </h3>
            <p className="mt-2 text-sm text-[#8F9AAF]">{project.signal}</p>
          </div>
          <span className="font-code text-lg text-[#7DF9FF]/70 transition group-hover:text-[#7DF9FF]">
            {direction === "previous" ? "\u2190" : "\u2192"}
          </span>
        </div>
      </Card>
    </Link>
  );
}
