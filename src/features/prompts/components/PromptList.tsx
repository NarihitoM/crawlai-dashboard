"use client";

import { useState } from "react";
import type { Prompt } from "@/features/prompts/types/types";
import { Badge, ModelBadge } from "@/shared/components/ui/Badge";
import { Card } from "@/shared/components/ui/Card";
import { Icon } from "@/shared/components/ui/Icon";

type PromptListProps = {
  prompts: Prompt[];
  selectedName: string;
  onSelect: (name: string) => void;
};

export function PromptList({ prompts, selectedName, onSelect }: PromptListProps) {
  const [query, setQuery] = useState("");
  const search = query.trim().toLowerCase();
  const visible = prompts.filter(
    (prompt) => prompt.name.includes(search) || prompt.model.includes(search),
  );

  return (
    <Card className="flex shrink-0 flex-col overflow-hidden lg:w-80">
      <div className="border-b border-zinc-200 p-3">
        <label className="flex h-8.5 items-center gap-2 rounded-lg border border-zinc-200 px-2.5 focus-within:border-lime-500">
          <Icon name="search" size={14} className="shrink-0 text-zinc-400" />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search prompts"
            aria-label="Search prompts"
            className="min-w-0 flex-1 bg-transparent text-[13px] outline-none placeholder:text-zinc-400"
          />
        </label>
      </div>
      <ul>
        {visible.map((prompt) => {
          const active = prompt.name === selectedName;

          return (
            <li key={prompt.name}>
              <button
                type="button"
                onClick={() => onSelect(prompt.name)}
                aria-current={active}
                className={`flex w-full flex-col gap-1.5 border-b py-3 pr-4 text-left transition-colors ${
                  active
                    ? "border-l-2 border-lime-500 bg-lime-50 pl-3.5"
                    : "border-zinc-200 pl-4 hover:bg-zinc-50"
                }`}
              >
                <span className="flex w-full items-center justify-between gap-3">
                  <span className="truncate text-[13px] font-medium">{prompt.name}</span>
                  <span className="text-xs whitespace-nowrap text-zinc-500">{prompt.updated}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Badge>{prompt.production} production</Badge>
                  <ModelBadge model={prompt.model} />
                </span>
              </button>
            </li>
          );
        })}
      </ul>
      {visible.length === 0 && (
        <p className="px-4 py-3 text-[13px] text-zinc-500">No prompts match your search.</p>
      )}
    </Card>
  );
}
