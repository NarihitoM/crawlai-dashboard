import type { PromptVersion } from "@/features/prompts/types/types";
import { Badge } from "@/shared/components/ui/Badge";

export function VersionHistory({ versions }: { versions: PromptVersion[] }) {
  return (
    <div className="flex flex-1 flex-col px-5 py-4">
      <h3 className="text-sm font-semibold">Version history</h3>
      <ul>
        {versions.map((item) => (
          <li key={item.version} className="flex items-center gap-2.5 border-b border-zinc-200 py-2.5">
            <span className="font-mono text-[13px] font-medium">{item.version}</span>
            <Badge variant={item.state === "Production" ? "lime" : "neutral"}>{item.state}</Badge>
            <span className="min-w-0 flex-1 text-[13px] text-zinc-600">{item.message}</span>
            <span className="text-xs whitespace-nowrap text-zinc-500">{item.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
