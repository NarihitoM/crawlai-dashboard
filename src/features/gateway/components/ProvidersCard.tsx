import { siAnthropic, siGooglegemini, siMistralai } from "simple-icons";
import type { Provider, ProviderId } from "@/features/gateway/types/types";
import { Badge } from "@/shared/components/ui/Badge";
import { BrandIcon } from "@/shared/components/ui/BrandIcon";
import { Button } from "@/shared/components/ui/Button";
import { Card } from "@/shared/components/ui/Card";
import { groq, openai, type BrandMark } from "@/shared/lib/brandMarks";

const brandMarks: Record<ProviderId, BrandMark> = {
  openai,
  anthropic: siAnthropic,
  google: siGooglegemini,
  mistral: siMistralai,
  groq,
};

export function ProvidersCard({ providers }: { providers: Provider[] }) {
  return (
    <Card className="min-w-0 flex-1 divide-y divide-zinc-200 overflow-hidden">
      <div className="flex items-center justify-between gap-4 px-5 py-3.5">
        <div className="flex flex-col gap-0.5">
          <h2 className="text-sm font-semibold">Providers</h2>
          <p className="text-xs text-zinc-500">
            Bring your own keys. Requests are billed by each provider.
          </p>
        </div>
        <Button variant="secondary">Add provider</Button>
      </div>
      {providers.map((provider) => (
        <div key={provider.id} className="flex items-center gap-3.5 px-5 py-3.5">
          <div
            className={`grid size-9 shrink-0 place-items-center rounded-lg ${
              provider.connected ? "bg-lime-100 text-lime-900" : "bg-zinc-100 text-zinc-500"
            }`}
          >
            <BrandIcon icon={brandMarks[provider.id]} />
          </div>
          <div className="flex min-w-0 flex-1 flex-col gap-[3px]">
            <div className="flex items-center gap-2">
              <span className="text-[13px] font-semibold">{provider.name}</span>
              {provider.connected ? (
                <Badge>Connected</Badge>
              ) : (
                <Badge variant="neutral">Not connected</Badge>
              )}
            </div>
            {provider.connected ? (
              <span className="font-mono text-xs text-zinc-500">
                {provider.models.join(", ")}
              </span>
            ) : (
              <span className="text-xs text-zinc-500">
                Add an API key to route requests to {provider.name}.
              </span>
            )}
          </div>
          {provider.connected ? (
            <>
              <span className="hidden font-mono text-xs text-zinc-600 sm:block">
                {provider.maskedKey}
              </span>
              <span className="text-right font-mono text-xs whitespace-nowrap text-zinc-600">
                p50 {provider.p50}
              </span>
            </>
          ) : (
            <Button variant="secondary">Add key</Button>
          )}
        </div>
      ))}
    </Card>
  );
}
