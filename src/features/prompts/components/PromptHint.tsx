import type { ReactNode } from "react";
import { Icon } from "@/shared/components/ui/Icon";

export function PromptHint({ children }: { children: ReactNode }) {
  return (
    <p className="flex items-center gap-2 text-xs text-zinc-500">
      <Icon name="info" size={14} className="shrink-0" />
      <span>{children}</span>
    </p>
  );
}
