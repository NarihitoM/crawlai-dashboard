import Link from "next/link";
import type { ComponentProps } from "react";

const variants = {
  primary: "bg-lime-500 text-ink hover:bg-lime-400",
  secondary: "bg-white ring-1 ring-zinc-200 ring-inset text-zinc-950 hover:bg-zinc-50",
  ghost: "text-zinc-600 hover:bg-zinc-100 hover:text-zinc-950",
  destructive: "bg-white text-red-600 ring-1 ring-zinc-200 ring-inset hover:bg-red-50",
};

const sizes = {
  sm: "px-3 py-[7px] text-[13px] leading-4",
  md: "px-4 py-2.5 text-sm",
};

type Variant = keyof typeof variants;
type Size = keyof typeof sizes;

function buttonClass(variant: Variant, size: Size, className: string) {
  return `inline-flex items-center justify-center gap-2 rounded-lg font-medium whitespace-nowrap transition-colors disabled:pointer-events-none disabled:opacity-50 ${variants[variant]} ${sizes[size]} ${className}`;
}

type ButtonProps = ComponentProps<"button"> & {
  variant?: Variant;
  size?: Size;
};

export function Button({
  variant = "primary",
  size = "sm",
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  return <button type={type} className={buttonClass(variant, size, className)} {...props} />;
}

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: Variant;
  size?: Size;
};

export function ButtonLink({
  variant = "primary",
  size = "sm",
  className = "",
  ...props
}: ButtonLinkProps) {
  return <Link className={buttonClass(variant, size, className)} {...props} />;
}
