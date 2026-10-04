import { getTraces } from "@/features/traces/api/tracesApi";
import { PageHeader } from "@/shared/components/layout/PageHeader";
import { PageShell } from "@/shared/components/layout/PageShell";
import { TracesBrowser } from "./TracesBrowser";

export async function TracesPage() {
  const traces = await getTraces();

  return (
    <PageShell page="Traces">
      <PageHeader
        title="Traces"
        description="Every request your SDK sent, newest first. 48,213 traces in the last 7 days."
        actions={
          <span className="inline-flex items-center gap-2 rounded-md bg-lime-100 px-2.5 py-1.5 text-xs font-medium text-lime-900">
            <span className="size-2 rounded-full bg-lime-500" />
            Live
          </span>
        }
      />
      <TracesBrowser traces={traces} />
    </PageShell>
  );
}
