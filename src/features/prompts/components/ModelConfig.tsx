import type { Prompt } from "@/features/prompts/types/types";

export function ModelConfig({ prompt }: { prompt: Prompt }) {
  const items = [
    { label: "Model", value: prompt.model },
    { label: "Fallback", value: prompt.fallback },
    { label: "Temperature", value: prompt.temperature },
    { label: "Max tokens", value: prompt.maxTokens },
  ];

  return (
    <div className="flex flex-wrap items-center gap-2 border-b border-zinc-200 bg-zinc-50 px-5 py-3">
      {items.map((item) => (
        <div
          key={item.label}
          className="flex h-7.5 items-center gap-1.5 rounded-md border border-zinc-200 bg-white px-2.5 text-xs whitespace-nowrap"
        >
          <span className="text-zinc-500">{item.label}</span>
          <span className="font-mono font-medium">{item.value}</span>
        </div>
      ))}
    </div>
  );
}
