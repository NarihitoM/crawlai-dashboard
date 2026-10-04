import type { Span, SpanKind } from "@/features/traces/types/types";
import { Icon, type IconName } from "@/shared/components/ui/Icon";

const icons: Record<SpanKind, IconName> = {
  agent: "bot",
  prompt: "messageSquareText",
  llm: "sparkles",
  tool: "wrench",
};

function tone(span: Span) {
  if (span.error) return "bg-red-50 text-red-600";
  if (span.kind === "llm") return "bg-lime-100 text-lime-900";
  return "bg-zinc-100 text-zinc-600";
}

export function SpanKindIcon({ span }: { span: Span }) {
  return (
    <span className={`flex size-5 shrink-0 items-center justify-center rounded-[5px] ${tone(span)}`}>
      <Icon name={icons[span.kind]} size={12} />
    </span>
  );
}
