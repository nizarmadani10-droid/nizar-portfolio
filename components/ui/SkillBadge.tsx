import { cn } from "@/lib/utils";

type SkillBadgeProps = {
  skill: string;
  className?: string;
};

export function SkillBadge({ skill, className }: SkillBadgeProps) {
  return (
    <span
      className={cn(
        "rounded-full bg-white/5 px-2.5 py-1 text-xs leading-5 text-[#AEB7C8] transition hover:bg-white/10 hover:text-white sm:px-3 sm:text-sm",
        className,
      )}
    >
      {skill}
    </span>
  );
}
