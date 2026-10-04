import { formatSeconds } from "@/features/traces/lib/format";
import type { Span } from "@/features/traces/types/types";
import { Card } from "@/shared/components/ui/Card";
import { SpanKindIcon } from "./SpanKindIcon";

const ticks = [0, 0.25, 0.5, 0.75, 1];

function barTone(span: Span) {
  if (span.error) return "bg-red-600";
  if (span.kind === "llm") return "bg-lime-500";
  if (span.kind === "agent") return "bg-chart-3";
  return "bg-zinc-600";
}

type SpanWaterfallProps = {
  spans: Span[];
  total: number;
  selected: number;
  onSelect: (index: number) => void;
};

export function SpanWaterfall({ spans, total, selected, onSelect }: SpanWaterfallProps) {
  return (
    <Card className="min-w-0 overflow-hidden xl:flex-1">
      <div className="overflow-x-auto">
        <div className="min-w-[640px]">
          <div className="flex items-center gap-3 border-b border-zinc-200 px-4 py-3.5">
            <h2 className="w-[300px] shrink-0 text-sm font-semibold">Span waterfall</h2>
            <div className="flex flex-1 justify-between font-mono text-[11px] text-zinc-400">
              {ticks.map((tick) => (
                <span key={tick}>{formatSeconds(total * tick)}</span>
              ))}
            </div>
          </div>
          {spans.map((span, index) => (
            <button
              key={span.id}
              type="button"
              onClick={() => onSelect(index)}
              aria-pressed={index === selected}
              className={`flex h-10 w-full items-center gap-3 border-b border-zinc-200 px-4 text-left transition-colors ${index === selected ? "bg-lime-50" : "hover:bg-zinc-50"}`}
            >
              <span className="flex w-[300px] shrink-0 items-center gap-2">
                <span className="shrink-0" style={{ width: span.depth * 20 }} />
                <SpanKindIcon span={span} />
                <span className="font-mono text-[13px] whitespace-nowrap text-zinc-950">{span.name}</span>
                <span className={`truncate text-xs ${span.error ? "text-red-600" : "text-zinc-500"}`}>{span.meta}</span>
              </span>
              <span className="relative h-full flex-1">
                <span
                  className={`absolute top-4 h-2 min-w-1.5 rounded-[2px] ${barTone(span)}`}
                  style={{ left: `${(span.start / total) * 100}%`, width: `${(span.duration / total) * 100}%` }}
                />
              </span>
              <span className="w-10 shrink-0 text-right font-mono text-xs text-zinc-600">
                {formatSeconds(span.duration)}
              </span>
            </button>
          ))}
        </div>
      </div>
    </Card>
  );
}
