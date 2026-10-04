import Link from "next/link";
import { formatCost, formatSeconds, formatTokens } from "@/features/traces/lib/format";
import type { TraceSummary } from "@/features/traces/types/types";
import { Badge, ModelBadge } from "@/shared/components/ui/Badge";
import { Button } from "@/shared/components/ui/Button";
import { Card } from "@/shared/components/ui/Card";

const columns = [
  { label: "Trace", className: "min-w-0 flex-1" },
  { label: "Models", className: "w-[230px] shrink-0" },
  { label: "Spans", className: "w-[70px] shrink-0" },
  { label: "Tokens", className: "w-[90px] shrink-0" },
  { label: "Cost", className: "w-[90px] shrink-0" },
  { label: "Latency", className: "w-[90px] shrink-0" },
  { label: "Status", className: "w-[120px] shrink-0" },
  { label: "Time", className: "w-[90px] shrink-0" },
];

const cell = "font-mono text-[13px] whitespace-nowrap text-zinc-600";

export function TracesTable({ traces }: { traces: TraceSummary[] }) {
  return (
    <Card className="overflow-hidden">
      <div className="overflow-x-auto">
        <div className="min-w-[1000px]">
          <div className="flex items-center bg-zinc-50 px-5 py-2">
            {columns.map((column) => (
              <div key={column.label} className={`text-xs font-medium text-zinc-500 ${column.className}`}>
                {column.label}
              </div>
            ))}
          </div>
          {traces.map((trace, index) => (
            <Link
              key={trace.id}
              href={`/traces/${trace.id}`}
              className={`flex items-center border-t border-zinc-200 px-5 py-[11px] transition-colors ${index === 0 ? "bg-lime-50" : "hover:bg-zinc-50"}`}
            >
              <div className={`flex flex-col gap-0.5 ${columns[0].className}`}>
                <span className="truncate text-[13px] font-medium text-zinc-950">{trace.name}</span>
                <span className="truncate font-mono text-xs text-zinc-500">
                  {trace.id} · {trace.user}
                </span>
              </div>
              <div className={`flex items-center gap-1 ${columns[1].className}`}>
                {trace.models.map((model) => (
                  <ModelBadge key={model} model={model} />
                ))}
              </div>
              <div className={`${cell} ${columns[2].className}`}>{trace.spans}</div>
              <div className={`${cell} ${columns[3].className}`}>{formatTokens(trace.tokens)}</div>
              <div className={`${cell} ${columns[4].className}`}>{formatCost(trace.cost)}</div>
              <div className={`${cell} ${columns[5].className}`}>{formatSeconds(trace.latency)}</div>
              <div className={columns[6].className}>
                <Badge variant={trace.status.variant}>{trace.status.label}</Badge>
              </div>
              <div className={`${cell} ${columns[7].className}`}>{trace.time}</div>
            </Link>
          ))}
          {traces.length === 0 && (
            <p className="border-t border-zinc-200 px-5 py-6 text-center text-[13px] text-zinc-500">
              No traces match your search.
            </p>
          )}
        </div>
      </div>
      <div className="flex items-center justify-between gap-4 border-t border-zinc-200 px-5 py-3">
        <span className="text-xs text-zinc-500">Showing 1-10 of 48,213</span>
        <div className="flex gap-2">
          <Button variant="secondary">Previous</Button>
          <Button variant="secondary">Next</Button>
        </div>
      </div>
    </Card>
  );
}
