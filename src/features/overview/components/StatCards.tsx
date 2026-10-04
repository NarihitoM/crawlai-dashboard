import { Card } from "@/shared/components/ui/Card";
import { Icon } from "@/shared/components/ui/Icon";
import type { Stat } from "@/features/overview/types/types";

export function StatCards({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.label} className="flex flex-col gap-3 p-5">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-zinc-600">{stat.label}</h2>
            <Icon name={stat.icon} className="text-zinc-400" />
          </div>
          <p className="text-[28px]/normal font-semibold tracking-[-0.6px]">{stat.value}</p>
          <p className="text-xs text-zinc-500">{stat.delta}</p>
        </Card>
      ))}
    </div>
  );
}
