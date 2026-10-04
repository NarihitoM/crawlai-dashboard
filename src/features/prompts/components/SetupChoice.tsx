import type { SetupMode } from "@/features/prompts/types/types";

const options: { mode: SetupMode; title: string; description: string }[] = [
  {
    mode: "easy",
    title: "Easy setup",
    description: "Set the prompt and model on this page. Your app only sends the agent name.",
  },
  {
    mode: "developer",
    title: "Developer",
    description: "Set the prompt, model and settings in code with @crawlai/sdk.",
  },
];

type SetupChoiceProps = {
  mode: SetupMode;
  onChange: (mode: SetupMode) => void;
};

export function SetupChoice({ mode, onChange }: SetupChoiceProps) {
  return (
    <fieldset className="flex flex-col gap-2.5 border-b border-zinc-200 px-5 py-4">
      <legend className="float-left text-xs font-medium text-zinc-500">
        How is this agent configured?
      </legend>
      <div className="grid gap-3 sm:grid-cols-2">
        {options.map((option) => (
          <label
            key={option.mode}
            className="flex cursor-pointer gap-3 rounded-lg border border-zinc-200 bg-white px-3.5 py-3 transition-colors hover:bg-zinc-50 has-checked:border-lime-500 has-checked:bg-lime-50"
          >
            <input
              type="radio"
              name="setup-mode"
              value={option.mode}
              checked={mode === option.mode}
              onChange={() => onChange(option.mode)}
              className="mt-px size-4 shrink-0 cursor-pointer appearance-none rounded-full bg-white outline-[1.5px] outline-offset-[-0.75px] outline-zinc-200 checked:outline-[5px] checked:outline-offset-[-2.5px] checked:outline-lime-500 focus-visible:ring-2 focus-visible:ring-lime-500 focus-visible:ring-offset-4"
            />
            <span className="flex flex-col gap-0.75">
              <span className="text-[13px] font-semibold">{option.title}</span>
              <span className="text-xs/[18px] text-zinc-600">{option.description}</span>
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
