import { Badge, ModelBadge } from "@/shared/components/ui/Badge";
import { Button } from "@/shared/components/ui/Button";
import { Card } from "@/shared/components/ui/Card";
import type { ModelCost } from "@/features/overview/types/types";

export function TopModels({ models }: { models: ModelCost[] }) {
  const max = Math.max(...models.map((model) => model.cost));

  return (
    <Card className="flex flex-col justify-between gap-5 p-6 xl:w-[380px] xl:shrink-0">
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold">Top models by cost</h2>
          <Badge>7 days</Badge>
        </div>
        <ul className="flex flex-col gap-3.5">
          {models.map((model) => (
            <li key={model.model} className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between gap-2">
                <div className="flex min-w-0 items-center gap-2">
                  <ModelBadge model={model.model} />
                  <span className="truncate text-xs text-zinc-500">{model.provider}</span>
                </div>
                <span className="font-mono text-[13px]">${model.cost.toFixed(2)}</span>
              </div>
              <div className="h-1.5 rounded-[3px] bg-zinc-100">
                <div
                  className="h-full rounded-[3px] bg-lime-500"
                  style={{ width: `${(model.cost / max) * 100}%` }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Button variant="secondary" className="w-full px-4! py-2.5!">
        Open cost breakdown
      </Button>
    </Card>
  );
}
