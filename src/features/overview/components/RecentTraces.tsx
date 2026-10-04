import Link from "next/link";
import { Badge, ModelBadge } from "@/shared/components/ui/Badge";
import { Card } from "@/shared/components/ui/Card";
import type { RecentTrace } from "@/features/overview/types/types";

const columns = [
  { label: "Trace", className: "min-w-0 flex-1" },
  { label: "Model", className: "w-[170px] shrink-0" },
  { label: "Tokens", className: "w-[90px] shrink-0" },
  { label: "Cost", className: "w-[90px] shrink-0" },
  { label: "Latency", className: "w-[90px] shrink-0" },
  { label: "Status", className: "w-[110px] shrink-0" },
  { label: "Time", className: "w-[100px] shrink-0" },
];

const cell = "font-mono text-[13px] text-zinc-600";

export function RecentTraces({ traces }: { traces: RecentTrace[] }) {
  return (
    <Card className="overflow-hidden">
      <div className="flex items-center justify-between px-5 py-4">
        <h2 className="text-sm font-semibold">Recent traces</h2>
        <Link href="/traces" className="text-[13px] text-zinc-500 transition-colors hover:text-zinc-950">
          View all
        </Link>
      </div>
      <div className="overflow-x-auto">
        <div className="min-w-[860px]">
          <div className="flex items-center border-t border-zinc-200 bg-zinc-50 px-5 py-2">
            {columns.map((column) => (
              <span key={column.label} className={`text-xs font-medium text-zinc-500 ${column.className}`}>
                {column.label}
              </span>
            ))}
          </div>
          {traces.map((trace) => (
            <Link
              key={trace.id}
              href={`/traces/${trace.id}`}
              className="flex items-center border-t border-zinc-200 px-5 py-3 transition-colors hover:bg-zinc-50"
            >
              <div className={`flex flex-col gap-0.5 ${columns[0].className}`}>
                <span className="truncate text-[13px] font-medium">{trace.name}</span>
                <span className="truncate font-mono text-xs text-zinc-500">{trace.subtitle}</span>
              </div>
              <div className={columns[1].className}>
                <ModelBadge model={trace.model} />
              </div>
              <span className={`${cell} ${columns[2].className}`}>
                {trace.tokens.toLocaleString("en-US")}
              </span>
              <span className={`${cell} ${columns[3].className}`}>${trace.cost.toFixed(4)}</span>
              <span className={`${cell} ${columns[4].className}`}>{trace.latency}</span>
              <div className={columns[5].className}>
                <Badge variant={trace.status.variant}>{trace.status.label}</Badge>
              </div>
              <span className={`${cell} ${columns[6].className}`}>{trace.time}</span>
            </Link>
          ))}
        </div>
      </div>
    </Card>
  );
}
