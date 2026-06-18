import type { Metadata } from "next";
import {
  getProjectCaseStudyMetadata,
  ProjectCaseStudy,
  projectStaticParams,
} from "@/components/pages/ProjectCaseStudy";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projectStaticParams();
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;

  return getProjectCaseStudyMetadata({
    locale: "en",
    slug,
    routeMode: "legacy",
  });
}

export default async function ProjectCaseStudyPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  return <ProjectCaseStudy locale="en" slug={slug} routeMode="legacy" />;
}
