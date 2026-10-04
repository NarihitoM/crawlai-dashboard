import type { ReactNode } from "react";
import { PromptHint } from "@/features/prompts/components/PromptHint";
import type { Prompt } from "@/features/prompts/types/types";
import { CopyButton } from "@/shared/components/ui/CopyButton";

function Keyword({ children }: { children: ReactNode }) {
  return <span className="text-lime-900">{children}</span>;
}

function Text({ value }: { value: string }) {
  return <span className="text-zinc-600">&quot;{value}&quot;</span>;
}

export function DeveloperCode({ prompt }: { prompt: Prompt }) {
  const code = [
    "const res = await crawl.chat({",
    `  agent: "${prompt.name}",`,
    `  model: "${prompt.model}",`,
    `  fallback: ["${prompt.fallback}"],`,
    `  temperature: ${prompt.temperature},`,
    `  maxTokens: ${prompt.maxTokens},`,
    `  system: "${prompt.codeSystem}",`,
    "  messages,",
    "})",
  ].join("\n");

  const lines = [
    <>
      <Keyword>const</Keyword> res = <Keyword>await</Keyword> crawl.chat{"({"}
    </>,
    <>
      {"  agent: "}
      <Text value={prompt.name} />,
    </>,
    <>
      {"  model: "}
      <Text value={prompt.model} />,
    </>,
    <>
      {"  fallback: ["}
      <Text value={prompt.fallback} />
      ],
    </>,
    <>
      {"  temperature: "}
      <Keyword>{prompt.temperature}</Keyword>,
    </>,
    <>
      {"  maxTokens: "}
      <Keyword>{prompt.maxTokens}</Keyword>,
    </>,
    <>
      {"  system: "}
      <Text value={prompt.codeSystem} />,
    </>,
    "  messages,",
    "})",
  ];

  return (
    <div className="flex flex-col gap-3 border-b border-zinc-200 p-5">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-sm font-semibold">Configured in code</h3>
        <div className="flex items-center gap-3">
          <span className="text-xs text-zinc-500">agent.ts</span>
          <CopyButton text={code} />
        </div>
      </div>
      <pre className="min-h-71.5 overflow-x-auto rounded-lg border border-zinc-200 bg-zinc-50 p-4 font-mono text-[13px] leading-6">
        <code>
          {lines.map((line, index) => (
            <span key={index} className="block">
              {line}
            </span>
          ))}
        </code>
      </pre>
      <PromptHint>
        Values in code are used for every call and this page becomes read-only. Each new prompt
        your code sends is saved in Version history.
      </PromptHint>
    </div>
  );
}
