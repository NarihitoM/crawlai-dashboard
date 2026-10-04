"use client";

import { useState } from "react";
import type { Span } from "@/features/traces/types/types";
import { SpanPanel } from "./SpanPanel";
import { SpanWaterfall } from "./SpanWaterfall";

type SpanExplorerProps = {
  spans: Span[];
  total: number;
};

export function SpanExplorer({ spans, total }: SpanExplorerProps) {
  const [selected, setSelected] = useState(spans.length - 1);

  return (
    <div className="flex flex-1 flex-col gap-4 xl:flex-row">
      <SpanWaterfall spans={spans} total={total} selected={selected} onSelect={setSelected} />
      <SpanPanel span={spans[selected]} />
    </div>
  );
}
