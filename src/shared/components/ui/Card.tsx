import type { ComponentProps } from "react";

export function Card({ className = "", ...props }: ComponentProps<"section">) {
  return (
    <section
      className={`rounded-lg border border-zinc-200 bg-white ${className}`}
      {...props}
    />
  );
}
