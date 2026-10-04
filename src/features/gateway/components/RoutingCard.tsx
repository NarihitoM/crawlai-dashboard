import type { RoutingRules } from "@/features/gateway/types/types";
import { ModelBadge } from "@/shared/components/ui/Badge";
import { Card } from "@/shared/components/ui/Card";
import { Icon } from "@/shared/components/ui/Icon";

export function RoutingCard({ routing }: { routing: RoutingRules }) {
  return (
    <Card className="overflow-hidden">
      <div className="flex items-center justify-between gap-4 border-b border-zinc-200 px-5 py-3.5">
        <div className="flex flex-col gap-0.5">
          <h2 className="text-sm font-semibold">Routing rules</h2>
          <p className="text-xs text-zinc-500">
            {routing.project} · applies to every model call
          </p>
        </div>
        <button
          type="button"
          aria-label="Edit routing rules"
          className="text-zinc-500 transition-colors hover:text-zinc-950"
        >
          <Icon name="pencil" size={14} />
        </button>
      </div>
      <ol className="flex flex-col gap-2 px-5 py-4">
        {routing.chain.map((step, index) => {
          const primary = step.role === "Primary";

          return (
            <li
              key={step.model}
              className={`flex items-center gap-2.5 rounded-lg border px-2.5 py-2 ${
                primary ? "border-lime-100 bg-lime-50" : "border-zinc-200 bg-white"
              }`}
            >
              <span
                className={`grid size-5 shrink-0 place-items-center rounded-full text-[11px] font-semibold ${
                  primary ? "bg-lime-500 text-ink" : "bg-zinc-100 text-zinc-600"
                }`}
              >
                {index + 1}
              </span>
              <span className="text-[13px] text-zinc-600">{step.role}</span>
              <ModelBadge model={step.model} />
            </li>
          );
        })}
      </ol>
      <dl className="flex flex-col gap-2 px-5 pt-1 pb-4">
        {routing.settings.map((setting) => (
          <div key={setting.label} className="flex items-start justify-between gap-4">
            <dt className="text-[13px] text-zinc-500">{setting.label}</dt>
            <dd className="text-right font-mono text-xs">{setting.value}</dd>
          </div>
        ))}
      </dl>
    </Card>
  );
}
