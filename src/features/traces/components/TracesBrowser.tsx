"use client";

import { useState } from "react";
import type { TraceSummary } from "@/features/traces/types/types";
import { TraceFilters } from "./TraceFilters";
import { TracesTable } from "./TracesTable";

export function TracesBrowser({ traces }: { traces: TraceSummary[] }) {
  const [query, setQuery] = useState("");
  const needle = query.trim().toLowerCase();
  const visible = needle
    ? traces.filter((trace) =>
        [trace.id, trace.user, trace.name, ...trace.models].some((field) =>
          field.toLowerCase().includes(needle),
        ),
      )
    : traces;

  return (
    <>
      <TraceFilters query={query} onQueryChange={setQuery} />
      <TracesTable traces={visible} />
    </>
  );
}
