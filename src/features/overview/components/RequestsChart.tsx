import { Card } from "@/shared/components/ui/Card";
import type { DailyRequests } from "@/features/overview/types/types";

const maxBarHeight = 168;

const providers = [
  { key: "openai", label: "OpenAI", className: "bg-lime-500" },
  { key: "anthropic", label: "Anthropic", className: "bg-chart-2" },
  { key: "google", label: "Google", className: "bg-chart-3" },
] as const;

function total(day: DailyRequests) {
  return day.openai + day.anthropic + day.google;
}

export function RequestsChart({ requests }: { requests: DailyRequests[] }) {
  const max = Math.max(...requests.map(total));
  const height = (value: number) => Math.round((value / max) * maxBarHeight);

  return (
    <Card className="flex min-w-0 flex-1 flex-col gap-5 p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-col gap-0.5">
          <h2 className="text-sm font-semibold">Requests</h2>
          <p className="text-xs text-zinc-500">By provider, last 7 days</p>
        </div>
        <ul className="flex gap-4">
          {providers.map((provider) => (
            <li key={provider.key} className="flex items-center gap-1.5 text-xs text-zinc-600">
              <span className={`size-2 rounded-[2px] ${provider.className}`} />
              {provider.label}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex h-[220px] items-end gap-2 sm:gap-5">
        {requests.map((day) => (
          <div key={day.day} className="flex h-full flex-1 flex-col items-center justify-end gap-2">
            <div
              className="flex w-full flex-col gap-0.5"
              title={`${day.day}: ${total(day).toLocaleString("en-US")} requests`}
            >
              <div className="rounded-t bg-chart-3" style={{ height: height(day.google) }} />
              <div className="bg-chart-2" style={{ height: height(day.anthropic) }} />
              <div className="rounded-b-[2px] bg-lime-500" style={{ height: height(day.openai) }} />
            </div>
            <span className="text-xs text-zinc-500">{day.day}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}
