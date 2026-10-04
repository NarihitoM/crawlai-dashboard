import type { Metadata } from "next";
import { TraceDetailPage } from "@/features/traces";

export async function generateMetadata({ params }: PageProps<"/traces/[traceId]">): Promise<Metadata> {
  const { traceId } = await params;
  return { title: traceId };
}

export default async function Page({ params }: PageProps<"/traces/[traceId]">) {
  const { traceId } = await params;
  return <TraceDetailPage traceId={traceId} />;
}
