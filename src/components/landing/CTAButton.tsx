import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface CTAButtonProps {
  children: ReactNode;
  href?: string;
  className?: string;
  variant?: "primary" | "outline";
  full?: boolean;
  external?: boolean;
}

export function CTAButton({
  children,
  href = "#oferta",
  className,
  variant = "primary",
  full = true,
  external = false,
}: CTAButtonProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn(
        "craft-button inline-flex min-h-[56px] items-center justify-center rounded-2xl px-8 text-center text-[1.0625rem] font-bold tracking-tight transition-all duration-300 sm:text-lg",
        full ? "w-full" : "w-auto",
        variant === "primary"
          ? "bg-primary text-primary-foreground hover:-translate-y-0.5 hover:bg-primary-hover"
          : "border-2 border-border bg-card text-foreground hover:-translate-y-0.5 hover:border-primary",
        className,
      )}
    >
      {children}
    </a>
  );
}
