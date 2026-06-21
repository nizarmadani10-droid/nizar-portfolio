import type { ProjectPaper } from "@/data/projectPapers";
import { cn } from "@/lib/utils";

type ProjectPaperKey = keyof ProjectPaper;

type PaperSection = {
  key: ProjectPaperKey;
};

export type ProjectPaperLabels = {
  eyebrow: string;
  title: string;
  description: string;
  readFullPaper: string;
  backToProject: string;
  metadataSuffix: string;
  sections: Record<ProjectPaperKey, string>;
};

const paperSections: PaperSection[] = [
  { key: "abstract" },
  { key: "problemContext" },
  { key: "methodology" },
  { key: "implementation" },
  { key: "results" },
  { key: "limitations" },
  { key: "takeaways" },
];

function getPreviewText(paper: ProjectPaper) {
  const text = [paper.abstract, paper.problemContext, paper.methodology].join(
    " ",
  );
  const sentences =
    text.match(/[^.!?؟]+[.!?؟]+|[^.!?؟]+$/g)?.map((sentence) =>
      sentence.trim(),
    ) ?? [];

  return (sentences.length > 0 ? sentences : [paper.abstract])
    .slice(0, 2)
    .join(" ");
}

export function ProjectPaperContent({
  paper,
  labels,
  lang,
  dir,
  className,
}: {
  paper: ProjectPaper;
  labels: ProjectPaperLabels;
  lang: string;
  dir: "ltr" | "rtl";
  className?: string;
}) {
  return (
    <div className={cn("space-y-7", className)} lang={lang} dir={dir}>
      {paperSections.map((section) => (
        <section key={section.key}>
          <h3 className="font-display text-xl font-semibold text-white">
            {labels.sections[section.key]}
          </h3>
          <p className="mt-3 text-sm leading-7 text-[#AEB7C8] md:text-[0.95rem] md:leading-8">
            {paper[section.key]}
          </p>
        </section>
      ))}
    </div>
  );
}

export function ProjectPaperPreview({
  paper,
  lang,
  dir,
}: {
  paper: ProjectPaper;
  lang: string;
  dir: "ltr" | "rtl";
}) {
  const previewText = getPreviewText(paper);

  return (
    <div className="space-y-4" lang={lang} dir={dir}>
      <p className="text-sm leading-7 text-[#AEB7C8]">{previewText}</p>
    </div>
  );
}
