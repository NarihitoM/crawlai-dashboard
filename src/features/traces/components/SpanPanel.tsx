import type { Span } from "@/features/traces/types/types";
import { Badge, ModelBadge } from "@/shared/components/ui/Badge";
import { Card } from "@/shared/components/ui/Card";
import { SpanKindIcon } from "./SpanKindIcon";

export function SpanPanel({ span }: { span: Span }) {
  return (
    <Card className="overflow-hidden xl:w-[440px] xl:shrink-0">
      <div className="flex flex-wrap items-center gap-2 border-b border-zinc-200 px-4 py-3.5">
        <SpanKindIcon span={span} />
        <span className="font-mono text-[13px] font-medium text-zinc-950">{span.name}</span>
        <ModelBadge model={span.target} />
        <Badge variant={span.status.variant}>{span.status.label}</Badge>
      </div>
      <dl className="flex flex-col gap-2 border-b border-zinc-200 p-4">
        {span.attributes.map((attribute) => (
          <div key={attribute.key} className="flex items-start justify-between gap-4">
            <dt className="text-[13px] whitespace-nowrap text-zinc-500">{attribute.key}</dt>
            <dd
              className={`text-right font-mono text-xs ${attribute.accent ? "font-medium text-lime-900" : "text-zinc-950"}`}
            >
              {attribute.value}
            </dd>
          </div>
        ))}
      </dl>
      <div className="flex flex-col gap-2.5 p-4">
        <h2 className="text-sm font-semibold">Messages</h2>
        {span.messages.map((message, index) => {
          const assistant = message.role === "assistant";
          return (
            <div
              key={index}
              className={`flex flex-col gap-1 rounded-lg border px-3 py-2.5 ${assistant ? "border-lime-100 bg-lime-50" : "border-zinc-200 bg-zinc-50"}`}
            >
              <span className={`font-mono text-[11px] ${assistant ? "text-lime-900" : "text-zinc-500"}`}>
                {message.name ? `${message.role} · ${message.name}` : message.role}
              </span>
              <p className="text-[13px] leading-5 text-zinc-950">{message.text}</p>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
