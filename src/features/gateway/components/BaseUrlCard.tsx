import type { GatewayStat } from "@/features/gateway/types/types";
import { Card } from "@/shared/components/ui/Card";
import { CopyButton } from "@/shared/components/ui/CopyButton";

type BaseUrlCardProps = {
  baseUrl: string;
  stats: GatewayStat[];
};

export function BaseUrlCard({ baseUrl, stats }: BaseUrlCardProps) {
  return (
    <Card className="flex flex-col gap-6 px-5 py-4 lg:flex-row lg:items-center">
      <div className="flex min-w-0 flex-1 flex-col items-start gap-1.5">
        <span className="text-xs text-zinc-500">Gateway base URL</span>
        <div className="flex max-w-full items-center gap-2.5 rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2">
          <span className="font-mono text-[13px] font-medium break-all">{baseUrl}</span>
          <CopyButton text={baseUrl} />
        </div>
      </div>
      <dl className="flex flex-wrap gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col gap-1 border-l border-zinc-200 pl-6">
            <dt className="text-xs text-zinc-500">{stat.label}</dt>
            <dd className="text-xl font-semibold tracking-[-0.4px]">{stat.value}</dd>
          </div>
        ))}
      </dl>
    </Card>
  );
}
