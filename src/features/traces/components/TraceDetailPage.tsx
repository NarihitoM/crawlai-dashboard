import Link from "next/link";
import { notFound } from "next/navigation";
import { getTrace } from "@/features/traces/api/tracesApi";
import { PageShell } from "@/shared/components/layout/PageShell";
import { Badge } from "@/shared/components/ui/Badge";
import { ButtonLink } from "@/shared/components/ui/Button";
import { Icon } from "@/shared/components/ui/Icon";
import { CopyLinkButton } from "./CopyLinkButton";
import { SpanExplorer } from "./SpanExplorer";
import { TraceMeta } from "./TraceMeta";

export async function TraceDetailPage({ traceId }: { traceId: string }) {
  const trace = await getTrace(traceId);
  if (!trace) notFound();

  const { summary } = trace;

  return (
    <PageShell page="Traces">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="flex flex-col gap-1.5">
          <Link
            href="/traces"
            className="flex w-fit items-center gap-1 text-[13px] text-zinc-500 transition-colors hover:text-zinc-950"
          >
            <Icon name="arrowLeft" size={14} />
            All traces
          </Link>
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-2xl font-semibold tracking-[-0.5px]">{summary.name}</h1>
            <span className="font-mono text-[13px] text-zinc-500">{summary.id}</span>
            <Badge variant={summary.status.variant}>{summary.status.label}</Badge>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <CopyLinkButton />
          <ButtonLink href="/gateway" variant="secondary">
            Replay in gateway
          </ButtonLink>
        </div>
      </div>
      <TraceMeta trace={trace} />
      <SpanExplorer spans={trace.spans} total={summary.latency} />
    </PageShell>
  );
}
