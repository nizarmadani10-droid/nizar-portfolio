import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { AnimatedGrid } from "@/components/motion/AnimatedGrid";
import { I18nProvider } from "@/components/providers/I18nProvider";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import {
  ProjectPaperContent,
} from "@/components/ui/ProjectPaperContent";
import { projects } from "@/data/projects";
import { siteConfig } from "@/lib/constants";
import {
  getDictionary,
  getDirection,
  getLocalizedProject,
  projectHref,
  projectPaperHref,
  type Locale,
} from "@/lib/i18n";

type RouteMode = "legacy" | "localized";

type ProjectPaperPageProps = {
  locale: Locale;
  slug: string;
  routeMode?: RouteMode;
};

export function getProjectPaperMetadata({
  locale,
  slug,
  routeMode = "localized",
}: ProjectPaperPageProps): Metadata {
  const project = getLocalizedProject(locale, slug);

  if (!project?.paper) {
    return {
      title: "Project Paper Not Found",
      description: siteConfig.seoDescription,
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const labels = getDictionary(locale).projectPaper;
  const paperUrl =
    routeMode === "localized"
      ? projectPaperHref(locale, project.slug)
      : `/projects/${project.slug}/paper`;

  return {
    title: `${project.title} | ${labels.metadataSuffix}`,
    description: project.paper.abstract,
    alternates: {
      canonical: paperUrl,
      languages: {
        en: projectPaperHref("en", project.slug),
        fr: projectPaperHref("fr", project.slug),
        ar: projectPaperHref("ar", project.slug),
      },
    },
    openGraph: {
      title: `${project.title} | ${labels.metadataSuffix}`,
      description: project.paper.abstract,
      url: paperUrl,
      siteName: `${siteConfig.name} Portfolio`,
      type: "article",
    },
    twitter: {
      card: "summary",
      title: `${project.title} | ${labels.metadataSuffix}`,
      description: project.paper.abstract,
    },
  };
}

export function ProjectPaperPage({
  locale,
  slug,
  routeMode = "localized",
}: ProjectPaperPageProps) {
  const project = getLocalizedProject(locale, slug);
  const direction = getDirection(locale);
  const labels = getDictionary(locale).projectPaper;
  const isLocalizedRoute = routeMode === "localized";

  if (!project?.paper) {
    notFound();
  }

  const detailLink = isLocalizedRoute
    ? projectHref(locale, project.slug)
    : `/projects/${project.slug}`;

  return (
    <I18nProvider locale={locale}>
      <main
        lang={locale}
        dir={direction}
        className="relative min-h-screen overflow-hidden"
      >
        <AnimatedGrid />
        <Navbar />

        <section className="relative z-10 overflow-hidden py-14 md:py-20">
          {project.heroImage && (
            <>
              <Image
                src={project.heroImage}
                alt={project.heroImageAlt ?? `${project.title} hero background`}
                fill
                priority
                sizes="100vw"
                className="absolute inset-0 z-0 object-cover object-[70%_center] opacity-35 saturate-[1.18] contrast-110 md:opacity-60 lg:object-center"
              />
              <div className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(3,5,12,0.84)_0%,rgba(3,5,12,0.66)_38%,rgba(3,5,12,0.32)_72%,rgba(3,5,12,0.52)_100%)]" />
              <div className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(3,5,12,0.62)_0%,rgba(3,5,12,0.1)_48%,rgba(3,5,12,0.94)_100%)]" />
            </>
          )}
          <AnimatedGrid className="z-[2] opacity-30" />

          <Container className="relative z-10">
            <Button href={detailLink} variant="ghost" size="sm">
              {labels.backToProject}
            </Button>

            <div className="mt-10 max-w-4xl">
              <p className="font-code text-xs uppercase tracking-[0.24em] text-[#7DF9FF]">
                {labels.eyebrow}
              </p>
              <h1 className="mt-5 font-display text-4xl font-semibold tracking-tight text-white md:text-6xl">
                {project.title}
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-8 text-[#AEB7C8] md:text-lg">
                {labels.title}
              </p>
            </div>
          </Container>
        </section>

        <section className="relative z-10 pb-16 md:pb-24">
          <Container>
            <Card className="overflow-hidden p-0">
              <div className="border-b border-white/10 px-6 py-5 sm:px-8 sm:py-6">
                <p className="max-w-3xl text-sm leading-7 text-[#8F9AAF]">
                  {labels.description}
                </p>
              </div>
              <div className="px-6 py-6 sm:px-8 sm:py-8">
                <ProjectPaperContent
                  paper={project.paper}
                  labels={labels}
                  lang={locale}
                  dir={direction}
                />
              </div>
            </Card>
          </Container>
        </section>

        <Footer />
      </main>
    </I18nProvider>
  );
}

export function projectPaperStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}
