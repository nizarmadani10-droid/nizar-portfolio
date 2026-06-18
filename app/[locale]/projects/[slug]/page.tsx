import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getProjectCaseStudyMetadata,
  ProjectCaseStudy,
} from "@/components/pages/ProjectCaseStudy";
import { projects } from "@/data/projects";
import { isLocale, locales, type Locale } from "@/lib/i18n";

type LocalizedProjectPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    projects.map((project) => ({
      locale,
      slug: project.slug,
    })),
  );
}

export async function generateMetadata({
  params,
}: LocalizedProjectPageProps): Promise<Metadata> {
  const { locale: localeParam, slug } = await params;

  if (!isLocale(localeParam)) {
    return {
      title: "Project Not Found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return getProjectCaseStudyMetadata({
    locale: localeParam as Locale,
    slug,
  });
}

export default async function LocalizedProjectCaseStudyPage({
  params,
}: LocalizedProjectPageProps) {
  const { locale, slug } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return <ProjectCaseStudy locale={locale} slug={slug} />;
}
