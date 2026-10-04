import { PromptHint } from "@/features/prompts/components/PromptHint";

type SystemPromptFieldProps = {
  name: string;
  value: string;
  onChange: (value: string) => void;
};

export function SystemPromptField({ name, value, onChange }: SystemPromptFieldProps) {
  const tokens = Math.round(value.length / 4);

  return (
    <div className="flex flex-col gap-3 border-b border-zinc-200 p-5">
      <div className="flex items-center justify-between gap-3">
        <label htmlFor="system-prompt" className="text-sm font-semibold">
          System prompt
        </label>
        <span className="text-xs text-zinc-500">
          {value.length} characters · {tokens} tokens
        </span>
      </div>
      <textarea
        id="system-prompt"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-58 resize-y rounded-lg border border-zinc-200 bg-white p-4 text-sm/[22px] outline-none focus:border-lime-500"
      />
      <PromptHint>
        {`Publish a new version and it goes live without a deploy. Your app keeps calling crawl.chat({ agent: "${name}" }).`}
      </PromptHint>
    </div>
  );
}
