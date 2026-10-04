import type { ReactNode } from "react";

const variants = {
  lime: "bg-lime-100 text-lime-900",
  neutral: "bg-zinc-100 font-mono text-zinc-600",
  error: "bg-red-50 text-red-600",
};

export type BadgeVariant = keyof typeof variants;

type BadgeProps = {
  variant?: BadgeVariant;
  className?: string;
  children: ReactNode;
};

export function Badge({ variant = "lime", className = "", children }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-md px-2 py-[3px] text-xs font-medium whitespace-nowrap ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}

export function ModelBadge({ model }: { model: string }) {
  return (
    <span className="inline-flex items-center rounded-md bg-zinc-100 px-2 py-[3px] font-mono text-xs whitespace-nowrap text-zinc-950">
      {model}
    </span>
  );
}
