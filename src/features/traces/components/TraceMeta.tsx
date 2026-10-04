import { formatCost, formatSeconds, formatTokens } from "@/features/traces/lib/format";
import type { TraceDetail } from "@/features/traces/types/types";
import { Card } from "@/shared/components/ui/Card";

export function TraceMeta({ trace }: { trace: TraceDetail }) {
  const { summary } = trace;
  const items = [
    { key: "Duration", value: formatSeconds(summary.latency) },
    { key: "Tokens", value: formatTokens(summary.tokens) },
    { key: "Cost", value: formatCost(summary.cost) },
    { key: "Spans", value: String(trace.spans.length) },
    { key: "User", value: summary.user },
    { key: "Project", value: trace.project },
    { key: "Started", value: trace.started },
  ];

  return (
    <Card className="flex overflow-x-auto">
      {items.map((item) => (
        <div
          key={item.key}
          className="flex min-w-36 flex-1 flex-col gap-1 border-zinc-200 px-4 py-3.5 not-first:border-l"
        >
          <span className="text-xs text-zinc-500">{item.key}</span>
          <span className="font-mono text-[13px] font-medium whitespace-nowrap text-zinc-950">{item.value}</span>
        </div>
      ))}
    </Card>
  );
}
