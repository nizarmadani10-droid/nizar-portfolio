import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ContactInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

type ContactTextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
};

export function ContactInput({ label, className, ...props }: ContactInputProps) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm text-[#AEB7C8]">{label}</span>
      <input
        className={cn(
          "w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-[#6F7A90] focus:border-[#7DF9FF]/60 focus:bg-white/10 focus-visible:ring-2 focus-visible:ring-[#7DF9FF]/30",
          className,
        )}
        {...props}
      />
    </label>
  );
}

export function ContactTextarea({
  label,
  className,
  ...props
}: ContactTextareaProps) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm text-[#AEB7C8]">{label}</span>
      <textarea
        className={cn(
          "min-h-36 w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-[#6F7A90] focus:border-[#7DF9FF]/60 focus:bg-white/10 focus-visible:ring-2 focus-visible:ring-[#7DF9FF]/30",
          className,
        )}
        {...props}
      />
    </label>
  );
}
