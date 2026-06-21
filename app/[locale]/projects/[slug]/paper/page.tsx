import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getProjectPaperMetadata,
  ProjectPaperPage,
} from "@/components/pages/ProjectPaperPage";
import { projects } from "@/data/projects";
import { isLocale, locales, type Locale } from "@/lib/i18n";

type LocalizedProjectPaperRouteProps = {
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
}: LocalizedProjectPaperRouteProps): Promise<Metadata> {
  const { locale: localeParam, slug } = await params;

  if (!isLocale(localeParam)) {
    return {
      title: "Project Paper Not Found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return getProjectPaperMetadata({
    locale: localeParam as Locale,
    slug,
  });
}

export default async function LocalizedProjectPaperRoute({
  params,
}: LocalizedProjectPaperRouteProps) {
  const { locale, slug } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return <ProjectPaperPage locale={locale} slug={slug} />;
}
