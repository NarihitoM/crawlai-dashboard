import type { BrandMark } from "@/shared/lib/brandMarks";

type BrandIconProps = {
  icon: BrandMark;
  size?: number;
  className?: string;
};

export function BrandIcon({ icon, size = 18, className }: BrandIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      fillRule={icon.evenOdd ? "evenodd" : undefined}
      aria-hidden="true"
      className={className}
    >
      <path d={icon.path} />
    </svg>
  );
}
