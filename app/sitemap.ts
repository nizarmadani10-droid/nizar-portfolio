import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { siteConfig } from "@/lib/constants";
import { locales, projectHref } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const localizedHomepages = locales.map((locale) => ({
    url: `${siteConfig.url}/${locale}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: locale === "en" ? 0.95 : 0.9,
  }));

  const legacyProjectPages = projects.map((project) => ({
    url: `${siteConfig.url}/projects/${project.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const localizedProjectPages = locales.flatMap((locale) =>
    projects.map((project) => ({
      url: `${siteConfig.url}${projectHref(locale, project.slug)}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  );

  return [
    {
      url: siteConfig.url,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...localizedHomepages,
    ...legacyProjectPages,
    ...localizedProjectPages,
  ];
}
