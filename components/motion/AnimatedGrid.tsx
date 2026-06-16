import { cn } from "@/lib/utils";

type AnimatedGridProps = {
  className?: string;
};

export function AnimatedGrid({ className }: AnimatedGridProps) {
  return (
    <div
      className={cn(
        "cyber-grid pointer-events-none absolute inset-0 opacity-60",
        className,
      )}
    />
  );
}
