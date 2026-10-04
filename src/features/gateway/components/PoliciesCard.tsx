import { Toggle } from "@/features/gateway/components/Toggle";
import type { Policy } from "@/features/gateway/types/types";
import { Card } from "@/shared/components/ui/Card";

export function PoliciesCard({ policies }: { policies: Policy[] }) {
  return (
    <Card className="divide-y divide-zinc-200 overflow-hidden">
      <h2 className="px-5 py-3.5 text-sm font-semibold">Policies</h2>
      {policies.map((policy) => (
        <div key={policy.name} className="flex items-center gap-4 px-5 py-3">
          <div className="flex flex-1 flex-col gap-0.5">
            <span className="text-[13px] font-medium">{policy.name}</span>
            <span className="text-xs text-zinc-500">{policy.description}</span>
          </div>
          <Toggle label={policy.name} defaultChecked={policy.enabled} />
        </div>
      ))}
    </Card>
  );
}
