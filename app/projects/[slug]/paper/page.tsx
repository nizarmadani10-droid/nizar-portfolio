import type { Metadata } from "next";
import {
  getProjectPaperMetadata,
  ProjectPaperPage,
  projectPaperStaticParams,
} from "@/components/pages/ProjectPaperPage";

type ProjectPaperRouteProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projectPaperStaticParams();
}

export async function generateMetadata({
  params,
}: ProjectPaperRouteProps): Promise<Metadata> {
  const { slug } = await params;

  return getProjectPaperMetadata({
    locale: "en",
    slug,
    routeMode: "legacy",
  });
}

export default async function ProjectPaperRoute({
  params,
}: ProjectPaperRouteProps) {
  const { slug } = await params;

  return <ProjectPaperPage locale="en" slug={slug} routeMode="legacy" />;
}
