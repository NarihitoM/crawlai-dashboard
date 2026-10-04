"use client";

import { useState } from "react";
import { PromptEditor } from "@/features/prompts/components/PromptEditor";
import { PromptList } from "@/features/prompts/components/PromptList";
import type { Prompt } from "@/features/prompts/types/types";
import { PageHeader } from "@/shared/components/layout/PageHeader";
import { Button } from "@/shared/components/ui/Button";

export function PromptsWorkspace({ prompts }: { prompts: Prompt[] }) {
  const [selectedName, setSelectedName] = useState(prompts[0].name);
  const selected = prompts.find((prompt) => prompt.name === selectedName) ?? prompts[0];

  return (
    <>
      <PageHeader
        title="Prompts"
        description="Write the system prompt for each agent, pick a model, and publish a new version without a deploy."
        actions={<Button>New prompt</Button>}
      />
      <div className="flex flex-col gap-4 lg:flex-1 lg:flex-row">
        <PromptList prompts={prompts} selectedName={selected.name} onSelect={setSelectedName} />
        <PromptEditor key={selected.name} prompt={selected} />
      </div>
    </>
  );
}
