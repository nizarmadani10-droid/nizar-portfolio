import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import { cn } from "@/lib/utils";

type CommonButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "light";
  size?: "sm" | "md";
  className?: string;
};

type LinkButtonProps = CommonButtonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type NativeButtonProps = CommonButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonProps = LinkButtonProps | NativeButtonProps;

const variants = {
  primary:
    "blue-glow bg-[#2F80FF] text-white hover:scale-[1.02] hover:bg-[#1f6ee8]",
  secondary:
    "border border-white/15 text-white hover:border-[#7DF9FF]/60 hover:bg-white/10",
  ghost: "text-[#AEB7C8] hover:text-white",
  light: "bg-white text-[#03050C] hover:scale-[1.02]",
};

const sizes = {
  sm: "min-h-10 px-4 py-2 text-sm",
  md: "min-h-11 px-6 py-3 text-sm",
};

export function Button({
  children,
  variant = "secondary",
  size = "md",
  className,
  href,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full text-center font-semibold leading-5 transition duration-300",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7DF9FF]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#03050C]",
    "disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    sizes[size],
    className,
  );

  if (href) {
    const linkProps = props as Omit<
      AnchorHTMLAttributes<HTMLAnchorElement>,
      "children" | "className"
    >;

    return (
      <a {...linkProps} href={href} className={classes}>
        {children}
      </a>
    );
  }

  const buttonProps = props as Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    "children" | "className"
  >;

  return (
    <button {...buttonProps} className={classes}>
      {children}
    </button>
  );
}
